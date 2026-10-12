'use strict';
/* ===== Utilitare generale ===== */
const $  = (s, r=document) => r.querySelector(s);
const $$ = (s, r=document) => [...r.querySelectorAll(s)];
const shuffle = a => { a=[...a]; for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];} return a; };
const pick = a => a[Math.floor(Math.random()*a.length)];

/* stocare (localStorage cu fallback în memorie) */
const mem = {};
const store = {
  get(k,d){ try{ const v=localStorage.getItem('gm_'+k); if(v!==null) return JSON.parse(v);}catch(e){} return (k in mem)?mem[k]:d; },
  set(k,v){ mem[k]=v; try{ localStorage.setItem('gm_'+k,JSON.stringify(v)); }catch(e){} }
};

/* ===== XP, progres ===== */
const LEVELS = [[0,'Începător ADN'],[80,'Nucleotidă'],[200,'Polimerază'],[400,'Genetician'],[700,'Maestru al helixului']];
function level(xp){ let l=LEVELS[0]; for(const x of LEVELS) if(xp>=x[0]) l=x; return l[1]; }
function addXP(n){ if(!n) return; const x=store.get('xp',0)+n; store.set('xp',x); renderXP(); }
function renderXP(){ const x=store.get('xp',0); const el=$('#xp'); if(el) el.textContent=`⭐ ${x} XP · ${level(x)}`; }
const isDone = id => !!(store.get('done',{})[id]);
function setDone(id,v){ const d=store.get('done',{}); if(v) d[id]=1; else delete d[id]; store.set('done',d); }

let toastT;
function toast(msg){ const t=$('#toast'); t.textContent=msg; t.classList.add('show'); clearTimeout(toastT); toastT=setTimeout(()=>t.classList.remove('show'),2300); }
function confetti(n=26){
  const e=['🧬','⭐','✨','🎉','🔬','💡'];
  for(let i=0;i<n;i++){ const s=document.createElement('span'); s.className='cf'; s.textContent=pick(e);
    s.style.left=Math.random()*100+'vw'; s.style.animationDelay=(Math.random()*.6)+'s'; s.style.animationDuration=(1.6+Math.random()*1.4)+'s';
    document.body.appendChild(s); setTimeout(()=>s.remove(),3600); }
}

/* ===== Elemente de pagină ===== */
/* cartonaș în stil „notițe de mână” */
const nb = html => `<div class="nb">${html}</div>`;
const secH = (n, title) => `<div class="sec-h"><span class="num">${n}</span><h2>${title}</h2></div>`;

/* ===== Întrebări ===== */
function recordAnswer(q, ok, xp=10){
  const st = store.get('stats',{right:0,total:0}); st.total++; if(ok) st.right++; store.set('stats',st);
  let w = store.get('wrong',[]);
  if(ok){ w = w.filter(i=>i!==q.id); addXP(xp); } else if(q.id<9000 && !w.includes(q.id)) w.push(q.id);
  store.set('wrong',w);
}
/* afișează o întrebare în `box`; apelează onDone(ok) după răspuns */
function askQuestion(box, q, onDone, xp=10){
  const items = q.tf ? [{t:'Adevărat',ok:q.truth},{t:'Fals',ok:!q.truth}]
                      : shuffle([{t:q.ok,ok:true},...q.wrong.map(t=>({t,ok:false}))]);
  box.innerHTML = `<div class="q-text">${q.q}</div><div class="q-opts">${items.map((o,i)=>`<button class="opt" data-i="${i}">${o.t}</button>`).join('')}</div><div class="q-why" hidden></div>`;
  const btns = $$('.opt',box); let answered=false;
  btns.forEach(b=>b.addEventListener('click',()=>{
    if(answered) return; answered=true;
    const i=+b.dataset.i, ok=items[i].ok;
    btns.forEach((x,j)=>{ x.disabled=true; if(items[j].ok) x.classList.add('ok'); });
    if(!ok){ b.classList.add('bad','shake'); }
    const why=$('.q-why',box); why.hidden=false; why.innerHTML=(ok?'✅ <b>Corect!</b> ':'❌ <b>Nu chiar.</b> ')+(q.why||'');
    recordAnswer(q,ok,xp); onDone&&onDone(ok);
  }));
}
/* mini-test la sfârșitul lecției */
function miniQuiz(el, topic, n=3){
  const qs = shuffle(QUESTIONS.filter(q=>q.topic===topic)).slice(0,n);
  el.innerHTML = `<h3>✅ Verifică-te rapid</h3><p class="muted small">${qs.length} întrebări din lecția asta. Fiecare răspuns corect = +10 XP.</p>`+qs.map((q,i)=>`<div class="q-item" id="mq${i}"></div>`).join('')+`<div class="mq-res"></div>`;
  let done=0,right=0;
  qs.forEach((q,i)=>askQuestion($('#mq'+i,el),q,ok=>{
    done++; if(ok) right++;
    if(done===qs.length){ $('.mq-res',el).innerHTML=`<div class="res ${right===qs.length?'ok':'info'}">${right===qs.length?'🎉 Perfect! ':''}Ai răspuns corect la ${right} din ${qs.length}.${right<qs.length?' Mai citește o dată explicațiile de mai sus.':''}</div>`; if(right===qs.length) confetti(14); }
  }));
}

/* ===== Joc: pune pașii în ordine (click) ===== */
function orderGame(el, steps, title='Pune pașii în ordine'){
  const items = shuffle(steps.map((t,i)=>({t,i})));
  let next=0, mist=0;
  el.innerHTML = `<h3>🧩 ${title}</h3><p class="muted small">Apasă pașii în ordinea corectă (începe cu primul).</p>
    <div class="og-pool"></div><ol class="og-done" style="margin:10px 0 0;padding-left:22px"></ol><div class="og-res"></div>`;
  const pool=$('.og-pool',el), done=$('.og-done',el);
  items.forEach(it=>{
    const b=document.createElement('button'); b.className='opt'; b.style.marginBottom='8px'; b.textContent=it.t;
    b.addEventListener('click',()=>{
      if(it.i===next){ next++; b.remove(); const li=document.createElement('li'); li.textContent=it.t; li.className='pop'; done.appendChild(li);
        if(next===steps.length){ const bonus=Math.max(5,25-mist*5); addXP(bonus); $('.og-res',el).innerHTML=`<div class="res ok">🎉 Perfect! ${mist?`Cu ${mist} greșeli.`:'Fără nicio greșeală!'} +${bonus} XP <button class="btn sm ghost" style="margin-left:8px" id="ogAgain">Din nou</button></div>`; confetti(12); $('#ogAgain',el).onclick=()=>orderGame(el,steps,title); }
      } else { mist++; b.classList.add('bad','shake'); setTimeout(()=>b.classList.remove('bad','shake'),500); toast('Mai gândește-te: ce se întâmplă PRIMUL?'); }
    });
    pool.appendChild(b);
  });
}

/* ===== Registru lecții ===== */
const LESSONS = [];

/* ===== Drag & drop (cu atingere + fallback „apasă piesa, apoi zona”) =====
   opts: {zones:[el], onDrop(chip,zone)->bool (true = acceptat; piesa e mutată în zonă)} */
function dragDrop(opts){
  const zones=opts.zones; let sel=null, drag=null;
  const zoneAt=(x,y)=>{ for(const el of document.elementsFromPoint(x,y)){ const z=zones.find(z=>z===el||z.contains(el)); if(z) return z; } return null; };
  const put=(chip,z)=>{ const ok=opts.onDrop(chip,z); if(ok){ (z.querySelector('.zbox')||z).appendChild(chip); } else { chip.classList.add('shake'); setTimeout(()=>chip.classList.remove('shake'),420); } return ok; };
  function bind(chip){
    chip.style.touchAction='none'; chip.style.userSelect='none';
    chip.addEventListener('pointerdown',e=>{
      if(chip.dataset.locked) return;
      e.preventDefault(); try{ chip.setPointerCapture(e.pointerId); }catch(_){}
      const r=chip.getBoundingClientRect();
      drag={chip,sx:e.clientX,sy:e.clientY,ox:e.clientX-r.left,oy:e.clientY-r.top,moved:false,ghost:null,w:r.width};
    });
    chip.addEventListener('pointermove',e=>{
      if(!drag||drag.chip!==chip) return;
      const dx=e.clientX-drag.sx, dy=e.clientY-drag.sy;
      if(!drag.moved&&Math.hypot(dx,dy)>6){ drag.moved=true; const g=chip.cloneNode(true); g.removeAttribute('id'); g.classList.remove('picked');
        g.style.cssText+=`;position:fixed;left:0;top:0;margin:0;z-index:200;pointer-events:none;width:${drag.w}px;box-shadow:0 14px 30px #0005;transform:translate(${e.clientX-drag.ox}px,${e.clientY-drag.oy}px) scale(1.08)`; document.body.appendChild(g); drag.ghost=g; chip.style.opacity='.25'; }
      if(drag.moved){ drag.ghost.style.transform=`translate(${e.clientX-drag.ox}px,${e.clientY-drag.oy}px) scale(1.08)`; const z=zoneAt(e.clientX,e.clientY); zones.forEach(q=>q.classList.toggle('over',q===z)); }
    });
    const end=(e,cancel)=>{
      if(!drag||drag.chip!==chip) return; const d=drag; drag=null;
      zones.forEach(q=>q.classList.remove('over')); if(d.ghost) d.ghost.remove(); chip.style.opacity='';
      if(cancel) return;
      if(d.moved){ const z=zoneAt(e.clientX,e.clientY); if(z) put(chip,z); }
      else { if(sel) sel.classList.remove('picked'); sel=(sel===chip)?null:chip; if(sel) sel.classList.add('picked'); }
    };
    chip.addEventListener('pointerup',e=>end(e,false)); chip.addEventListener('pointercancel',e=>end(e,true));
  }
  zones.forEach(z=>z.addEventListener('click',e=>{ if(!sel||e.target.closest('[data-chip]')) return; const c=sel; sel=null; c.classList.remove('picked'); put(c,z); }));
  return {bind, bindAll:els=>els.forEach(bind), clearSel(){ if(sel){ sel.classList.remove('picked'); sel=null; } }};
}
