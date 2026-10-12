'use strict';
/* ===== Teste grele: motor + interfață =====
   Banca de întrebări este în teste/q01 … q11 (încărcată după acest fișier). */
const HARD=[];
const _hid=s=>{ let h=5381; for(const c of s) h=((h<<5)+h+c.charCodeAt(0))|0; return h>>>0; };
/* hMC(temă, secțiune, întrebare, corect, [greșite], explicație)      — un singur răspuns
   hMS(temă, secțiune, întrebare, [[afirmație, 1|0], …], explicație)  — alegere multiplă */
const hMC=(topic,sec,q,ok,wrong,why)=>HARD.push({id:_hid(topic+'|'+q),topic,sec,type:'mc',q,ok,wrong,why});
const hMS=(topic,sec,q,opts,why)=>HARD.push({id:_hid(topic+'|'+q),topic,sec,type:'ms',q,opts:opts.map(([t,v])=>({t,ok:!!v})),why});
const HT=Object.assign({},TOPICS,{mix:'Recapitulare mixtă'});

/* ---------- progres (per întrebare: ultimul punctaj 0…1) ---------- */
const hFmt=x=>String(Math.round(x*10)/10).replace('.',',');
const hGrade=(s,n)=>hFmt(1+9*s/n);
const hRes=()=>{ const r=store.get('hardRes',{}); return r&&typeof r==='object'&&!Array.isArray(r)?r:{}; };
const hHist=()=>{ const h=store.get('hardHist',[]); return Array.isArray(h)?h:[]; };
function hStats(topic){
  const R=hRes(), qs=HARD.filter(q=>q.topic===topic); let full=0,tried=0;
  qs.forEach(q=>{ if(q.id in R){ tried++; if(R[q.id]>=1) full++; } });
  return {n:qs.length,tried,full,wrong:tried-full,fresh:qs.length-tried};
}
function hVerdict(st){
  const p=st.n?st.full/st.n:0;
  if(!st.tried) return {t:'Neîncercat',c:'#94a3b8'};
  if(p>=.85) return {t:'Stăpânit ✓',c:'#16a34a'};
  if(p>=.6) return {t:'Aproape',c:'#65a30d'};
  if(st.tried<st.n*.5&&!st.wrong) return {t:'Început bun',c:'#0ea5e9'};
  return {t:'În lucru',c:'#f59e0b'};
}
/* punctaj: răspuns unic = 1 sau 0; alegere multiplă = (adevărate bifate − greșite bifate) / adevărate, minim 0 */
function hCredit(items,sel){
  const need=items.filter(o=>o.ok).length; let good=0,bad=0;
  items.forEach((o,k)=>{ if(sel.has(k)){ if(o.ok) good++; else bad++; } });
  return Math.max(0,(good-bad)/need);
}
const hItems=q=>q.type==='mc'?shuffle([{t:q.ok,ok:true},...q.wrong.map(t=>({t,ok:false}))]):shuffle(q.opts);
/* opțiunile unei întrebări: active (butoane) sau, după răspuns, statice, colorate */
function hOpts(items,sel,multi,done){
  return items.map((o,k)=>{
    const on=sel.has(k); let cls='';
    if(done) cls=o.ok&&on?'ok':o.ok&&!on?(multi?'miss':'ok'):!o.ok&&on?'bad':'dim';
    const tf=done&&multi?`<span class="hq-tf ${o.ok?'t':'f'}">${o.ok?'adevărat':'fals'}</span>`:'';
    const tag=done?'div':'button';
    return `<${tag} class="opt hq ${multi?'ms':'mc'} ${cls}${done?' stat':''}"${done?'':` data-i="${k}" aria-pressed="false"`}><span class="mk"></span><span class="ot">${o.t}</span>${tf}</${tag}>`;
  }).join('');
}
/* titlul secțiunii dintr-o lecție (citit din HTML-ul lecției) + link „revezi” */
const _hSec={};
function hSecTitle(topic,sec){
  if(!sec) return '';
  if(!_hSec[topic]){
    const t={};
    try{ const l=LESSONS.find(x=>x.id===topic), re=/class="sec-h"><span class="num">(\d+)<\/span><h2>([\s\S]*?)<\/h2>/g, h=l.html(); let m; while((m=re.exec(h))) t[+m[1]]=m[2].replace(/<[^>]+>/g,''); }catch(e){}
    _hSec[topic]=t;
  }
  return _hSec[topic][sec]||'';
}
function hLink(q){
  if(!q.sec) return '<a href="#/foaie">Foaia rezumat</a>';
  const no=LESSONS.findIndex(x=>x.id===q.topic)+1, t=hSecTitle(q.topic,q.sec);
  return `<a href="#/l/${q.topic}/${q.sec}">Lecția ${no} · §${q.sec}${t?' '+t:''}</a>`;
}
const hChLabel=topic=>{ const i=LESSONS.findIndex(l=>l.id===topic); return i<0?HT[topic]:`Lecția ${i+1} · ${LESSONS[i].title}`; };
/* alege n întrebări: întâi cele nevăzute, apoi cele greșite, apoi cele reușite; ~45% alegere multiplă */
function hPick(pool,n){
  if(n>=pool.length) return shuffle(pool);
  const R=hRes(), rank=q=>!(q.id in R)?0:R[q.id]<1?1:2;
  const order=arr=>{ const g=[[],[],[]]; shuffle(arr).forEach(q=>g[rank(q)].push(q)); return [...g[0],...g[1],...g[2]]; };
  const ms=order(pool.filter(q=>q.type==='ms')), mc=order(pool.filter(q=>q.type==='mc'));
  let kMS=Math.min(ms.length,Math.round(n*.45)); const kMC=Math.min(mc.length,n-kMS); kMS=Math.min(ms.length,n-kMC);
  return shuffle([...ms.slice(0,kMS),...mc.slice(0,kMC)]);
}

VIEWS.teste={
  title:'Teste grele',
  html:()=>`<div id="hqWrap">
    <header class="lesson-hero" style="--ac1:#ef4444;--ac2:#7c3aed"><div class="lh-top"><div class="lh-ico">${icon('flame')}</div><div><h1>Teste grele</h1><p>Întrebări mult peste nivelul obișnuit, pe fiecare capitol: capcane, experimente gândite, afirmații de triat. Fără calcule — doar înțelegere.</p></div></div>
      <div class="lh-meta"><span>${HARD.length} întrebări</span><span>teste scurte de 5–10 întrebări</span></div></header>
    <div id="hBox" style="margin-top:14px"></div></div>`,
  init(root){
    const box=$('#hBox',root), wrap=$('#hqWrap',root), top=()=>window.scrollTo({top:0,behavior:'instant'});
    const chapters=[...LESSONS.map((l,i)=>({topic:l.topic,label:`Lecția ${i+1} · ${l.title}`,ico:l.icon,a:l.ac1,b:l.ac2})),{topic:'mix',label:'Recapitulare mixtă (toate capitolele)',ico:'flame',a:'#ef4444',b:'#7c3aed'}];

    /* ----- harta capitolelor ----- */
    function menu(){
      wrap.classList.remove('run'); top();
      const R=hRes(), hist=hHist(), wr=HARD.filter(q=>q.id in R&&R[q.id]<1);
      const full=HARD.filter(q=>R[q.id]>=1).length;
      const best=hist.reduce((b,x)=>(!b||x.s/x.n>b.s/b.n)?x:b,null);
      const rowHtml=c=>{
        const st=hStats(c.topic), v=hVerdict(st), k=Math.min(10,st.n);
        return `<div class="hq-row"><span class="pi" style="background:linear-gradient(135deg,${c.a},${c.b})">${icon(c.ico)}</span>
          <div class="hq-mid"><div class="hq-t"><b>${c.label}</b><span class="hq-v" style="--vc:${v.c}">${v.t}</span></div>
            <div class="hq-seg"><i class="g" style="width:${st.full/st.n*100}%"></i><i class="r" style="width:${st.wrong/st.n*100}%"></i></div>
            <div class="small muted">${st.full} stăpânite · ${st.wrong} de refăcut · ${st.fresh} neîncercate (din ${st.n})</div></div>
          <div class="hq-act"><button class="btn sm" data-ch="${c.topic}" data-all="0">Test (${k})</button><button class="btn sm ghost" data-ch="${c.topic}" data-all="1">Tot capitolul (${st.n})</button></div></div>`;
      };
      box.innerHTML=`
        <div class="grid3" style="margin-bottom:6px">
          <div class="card center" style="margin:0"><div style="font-size:1.9rem;font-weight:900">${full}<span class="muted" style="font-size:1.05rem">/${HARD.length}</span></div><div class="small muted">întrebări stăpânite</div><div class="bar" style="margin-top:8px"><i style="width:${full/HARD.length*100}%"></i></div></div>
          <div class="card center" style="margin:0"><div style="font-size:1.9rem;font-weight:900">${hist.length}</div><div class="small muted">teste făcute</div></div>
          <div class="card center" style="margin:0"><div style="font-size:1.9rem;font-weight:900">${best?hGrade(best.s,best.n):'—'}</div><div class="small muted">cea mai bună notă</div></div>
        </div>
        <div class="callout"><b>Cum funcționează</b>
          <ul style="margin:6px 0 0;padding-left:20px"><li><b>Un singur răspuns</b> — alegi varianta corectă; <b>alegere multiplă</b> — bifezi <b>toate</b> afirmațiile adevărate (o afirmație greșită bifată scade din punctaj).</li>
          <li>După fiecare întrebare vezi explicația și secțiunea din lecție de revăzut. Un test de 10 întrebări durează ≈ 8 minute.</li>
          <li>Un capitol este <b>stăpânit</b> când ai răspuns corect, la ultima încercare, la peste 85% dintre întrebările lui.</li></ul></div>
        <h2 style="margin-top:8px">Harta capitolelor</h2>
        <div class="card hq-map">${chapters.map(rowHtml).join('')}</div>
        <h2>Alte teste</h2>
        <div class="grid2">
          <div class="card"><h3>⚡ Test mixt</h3><p class="small muted">10 întrebări din toate capitolele, cu prioritate cele pe care nu le-ai mai primit.</p><button class="btn" data-m="t10">Start</button></div>
          <div class="card"><h3>⏱ Mini</h3><p class="small muted">5 întrebări — pentru o pauză de 4 minute.</p><button class="btn" data-m="t5">Start</button></div>
          <div class="card"><h3>🔁 Greșelile mele</h3><p class="small muted">${wr.length?`${wr.length} întrebări de refăcut (primești cel mult 8).`:'Nicio greșeală de refăcut 🎉'}</p><button class="btn" data-m="wrong" ${wr.length?'':'disabled'}>Start</button></div>
          <div class="card"><h3>🏁 Examen general</h3><p class="small muted">Toate cele ${HARD.length} întrebări, amestecate. Pentru când ești gata de toate.</p><button class="btn ghost" data-m="all">Start</button></div>
        </div>
        ${hist.length?`<div class="card"><h3>📈 Ultimele teste (note orientative)</h3><div class="hq-hist">${hist.slice(-10).map(x=>{ const p=x.s/x.n; return `<div class="hq-col"><div class="hq-bw"><i style="height:${Math.max(6,p*100)}%;background:${p>=.8?'var(--ok)':p>=.5?'var(--warn)':'var(--bad)'}"></i></div><small>${hGrade(x.s,x.n)}</small></div>`; }).join('')}</div></div>`:''}`;
      $$('[data-ch]',box).forEach(b=>b.onclick=()=>startChapter(b.dataset.ch,b.dataset.all==='1'));
      $$('[data-m]',box).forEach(b=>b.onclick=()=>{
        const m=b.dataset.m;
        if(m==='t10') run(hPick(HARD,10),'Test mixt',()=>hPick(HARD,10));
        if(m==='t5') run(hPick(HARD,5),'Mini',()=>hPick(HARD,5));
        if(m==='all') run(shuffle(HARD),'Examen general',()=>shuffle(HARD));
        if(m==='wrong'){ const mk=()=>{ const R2=hRes(); return hPick(HARD.filter(q=>q.id in R2&&R2[q.id]<1),8); }; run(mk(),'Greșelile mele',mk); }
      });
    }
    function startChapter(topic,all){
      const pool=HARD.filter(q=>q.topic===topic), mk=()=>hPick(pool,all?pool.length:10);
      run(mk(),hChLabel(topic)+(all?' · tot capitolul':''),mk);
    }

    /* ----- un test ----- */
    function run(list,label,again){
      if(!list.length){ toast('Nu sunt întrebări pentru acest test.'); return menu(); }
      const log=[]; let i=0, total=0;
      wrap.classList.add('run');
      function show(){
        top();
        if(i>=list.length) return end();
        const q=list[i], multi=q.type==='ms', items=hItems(q), sel=new Set(); let done=false;
        box.innerHTML=`
          <div class="row small muted" style="justify-content:space-between"><span><button class="btn ghost sm" id="hQuit" title="Răspunsurile date până acum rămân salvate">✕ Oprește</button> &nbsp;${label} · întrebarea ${i+1}/${list.length}</span><span>⭐ ${hFmt(total)} p</span></div>
          <div class="bar" style="margin:6px 0 12px"><i style="width:${i/list.length*100}%"></i></div>
          <div class="card hq-card" style="margin:0">
            <div class="row" style="justify-content:space-between;gap:8px"><span class="tag">${HT[q.topic]}</span><span class="tag hq-kind ${multi?'ms':''}">${multi?'ALEGERE MULTIPLĂ':'UN SINGUR RĂSPUNS'}</span></div>
            <div class="q-text" style="margin-top:12px">${q.q}</div>
            ${multi?'<p class="small muted" style="margin:-4px 0 10px">Bifează <b>toate</b> afirmațiile adevărate. Fiecare afirmație greșită bifată scade din punctaj.</p>':''}
            <div class="q-opts">${hOpts(items,sel,multi,false)}</div>
            <div class="q-why" hidden></div>
            <div class="row" style="margin-top:14px"><button class="btn" id="hGo" ${multi?'':'hidden'}>Verifică</button></div>
            <p class="small muted hq-keys" style="margin:10px 0 0">⌨ tastele 1–9 aleg varianta · Enter = verifică / următoarea</p>
          </div>`;
        const optsBox=$('.q-opts',box), go=$('#hGo',box), why=$('.q-why',box);
        $('#hQuit',box).onclick=menu;
        function finish(){
          if(done) return; done=true;
          const c=hCredit(items,sel), full=items.every((o,k)=>o.ok===sel.has(k));
          optsBox.innerHTML=hOpts(items,sel,multi,true);
          const bad=$('.opt.bad',optsBox); if(bad) bad.classList.add('shake');
          why.hidden=false;
          why.innerHTML=`${full?'✅ <b>Corect!</b>':c>0?`🟡 <b>Aproape</b> – ${hFmt(c)} din 1 punct.`:'❌ <b>Nu chiar.</b>'} ${q.why}${full?'':`<div class="small" style="margin-top:6px">📖 Revezi: ${hLink(q)}</div>`}`;
          total+=c; log.push({q,items,sel,c,full});
          const R=hRes(); R[q.id]=Math.round(c*100)/100; store.set('hardRes',R);
          const st=store.get('stats',{right:0,total:0}); st.total++; if(full) st.right++; store.set('stats',st);
          addXP(Math.round(15*c));
          go.hidden=false; go.disabled=false; go.textContent=i+1<list.length?'Următoarea →':'Vezi rezultatul 🏁';
          go.onclick=()=>{ i++; show(); }; go.focus();
        }
        optsBox.addEventListener('click',e=>{
          const b=e.target.closest('.opt'); if(!b||done||!b.dataset.i) return;
          const k=+b.dataset.i;
          if(multi){ if(sel.has(k)) sel.delete(k); else sel.add(k); b.classList.toggle('sel',sel.has(k)); b.setAttribute('aria-pressed',sel.has(k)); }
          else { sel.add(k); finish(); }
        });
        if(multi) go.onclick=finish;
      }
      function end(){
        const n=list.length, pts=total, pct=pts/n;
        const hist=hHist(); hist.push({t:Date.now(),s:Math.round(pts*100)/100,n,l:label}); store.set('hardHist',hist.slice(-20));
        if(pct>=.8){ addXP(20); confetti(24); }
        const per={}; log.forEach(e=>{ const p=per[e.q.topic]=per[e.q.topic]||{c:0,n:0}; p.c+=e.c; p.n++; });
        const rows=Object.entries(per).sort((a,b)=>a[1].c/a[1].n-b[1].c/b[1].n).map(([k,p])=>{
          const f=p.c/p.n, st=hStats(k);
          return `<div style="margin:12px 0"><div class="row small" style="justify-content:space-between"><span>${hChLabel(k)}</span><b>${hFmt(p.c)}/${p.n}</b></div><div class="bar"><i style="width:${f*100}%;background:${f>=.8?'var(--ok)':f>=.5?'var(--warn)':'var(--bad)'}"></i></div><div class="small muted">în total la acest capitol: ${st.full}/${st.n} întrebări stăpânite</div></div>`;
        }).join('');
        const miss=log.filter(e=>!e.full);
        const secs={}; miss.forEach(e=>{ if(e.q.sec){ const k=e.q.topic+'|'+e.q.sec; secs[k]=(secs[k]||0)+1; } });
        const secList=Object.entries(secs).sort((a,b)=>b[1]-a[1]).map(([k,v])=>{ const [t,s]=k.split('|'); return `<li>${hLink({topic:t,sec:+s})} <span class="muted small">(${v} ${v===1?'greșeală':'greșeli'})</span></li>`; }).join('');
        const review=e=>`<div class="card hq-rev"><div class="row" style="justify-content:space-between"><span class="tag">${HT[e.q.topic]}</span><span class="tag">${hFmt(e.c)} / 1 p</span></div><div class="q-text" style="margin-top:10px">${e.q.q}</div><div class="q-opts">${hOpts(e.items,e.sel,e.q.type==='ms',true)}</div><div class="q-why">${e.q.why}<div class="small" style="margin-top:6px">📖 Revezi: ${hLink(e.q)}</div></div></div>`;
        const emoji=pct>=.9?'🏆':pct>=.75?'👏':pct>=.5?'💪':'📖';
        const msg=pct>=.9?'Stăpânești materia — chiar și la întrebările grele!':pct>=.75?'Foarte bine; mai ai câteva detalii de lămurit.':pct>=.5?'Ai o bază bună, dar întrebările grele încă te prind. Vezi mai jos ce să repeți.':'Reia lecțiile indicate mai jos, apoi încearcă din nou.';
        box.innerHTML=`
          <div class="card center"><div style="font-size:3rem">${emoji}</div><h2 style="margin:4px 0">${hFmt(pts)} / ${n} puncte</h2><p style="margin:0">Nota orientativă: <b>${hGrade(pts,n)}</b> · ${msg}</p></div>
          <div class="card"><h3>Pe capitole (cele mai slabe primele)</h3>${rows}</div>
          ${miss.length?`<div class="card"><h3>🎯 Repetă aceste secțiuni</h3><ul class="hq-ref">${secList}</ul></div>`:'<div class="callout tip"><b>Nicio greșeală!</b> Poți trece la alt capitol sau la un test mixt.</div>'}
          <div class="row"><button class="btn" id="hAgain">⚡ Alt test la fel</button>${miss.length?'<button class="btn ghost" id="hRedo">🔁 Refă greșelile</button>':''}<button class="btn ghost" id="hMenu">↩ Harta capitolelor</button></div>
          ${miss.length?`<h2>De revăzut (${miss.length})</h2>${miss.map(review).join('')}`:''}`;
        $('#hAgain',box).onclick=()=>run(again(),label,again);
        $('#hMenu',box).onclick=menu;
        const redo=$('#hRedo',box); if(redo) redo.onclick=()=>{ const ids=new Set(miss.map(e=>e.q.id)); const mk=()=>shuffle(HARD.filter(q=>ids.has(q.id))); run(mk(),'Greșelile din test',mk); };
      }
      show();
    }

    /* tastatură: 1–9 = opțiunea n, Enter = Verifică / Următoarea */
    const key=e=>{
      if(!box.isConnected){ document.removeEventListener('keydown',key); return; }
      if(e.target&&e.target.closest&&e.target.closest('select,input,textarea')) return;
      if(/^[1-9]$/.test(e.key)){ const b=$$('.opt.hq',box)[+e.key-1]; if(b&&b.tagName==='BUTTON') b.click(); }
      else if(e.key==='Enter'&&!(e.target instanceof HTMLButtonElement)){ const g=$('#hGo',box); if(g&&!g.hidden&&!g.disabled){ e.preventDefault(); g.click(); } }
    };
    document.addEventListener('keydown',key);

    /* legătură directă din lecții / quiz: #/teste pornește direct testul unui capitol */
    const go=store.get('hardGo',null);
    if(go){ store.set('hardGo',null); }
    if(go&&HT[go]) startChapter(go,false); else menu();
  }
};
