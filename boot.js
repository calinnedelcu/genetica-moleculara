'use strict';
/* ===== Navigare + pornire ===== */
const TOOLS = [['flash','cards','Flashcards','#0ea5e9'],['match','match','Potrivește','#14b8a6'],['quiz','quiz','Quiz','#f59e0b'],['foaie','sheet','Foaia rezumat','#ef4444'],['acoperire','book','Acoperire: tot ce trebuie să știi','#8b5cf6']];

function buildNav(){
  const cur = (location.hash.replace(/^#\/?/,'') || 'home').split('/').slice(0,2).join('/');
  const item=(href,ico,txt,id,color)=>`<a class="nav-item ${cur===href.slice(2)?'active':''} ${id&&isDone(id)?'done':''}" href="${href}" style="--ac:${color||'var(--brand)'}"><span class="n-ico">${icon(ico)}</span><span class="n-txt">${txt}</span>${id?'<span class="n-done">✓</span>':''}</a>`;
  $('#side').innerHTML = `<div class="brand"><span class="logo">${icon('helix')}</span><div>Genetică moleculară<small>MATERIAL DE STUDIU</small></div></div>
    ${item('#/home','home','Acasă')}
    <div class="nav-h">Lecții</div>
    ${LESSONS.map((l,i)=>item('#/l/'+l.id,l.icon,`${i+1}. ${l.title}`,l.id,l.ac1)).join('')}
    <div class="nav-h">Exersează</div>
    ${TOOLS.map(t=>item('#/'+t[0],t[1],t[2],null,t[3])).join('')}
    <div class="side-foot"><button class="btn ghost sm" id="resetAll">Șterge progresul</button></div>`;
  $('#resetAll').onclick=()=>{ if(confirm('Sigur ștergi tot progresul (XP, lecții terminate, greșeli)?')){ ['xp','done','stats','wrong','known'].forEach(k=>store.set(k,k==='xp'?0:k==='stats'?{right:0,total:0}:k==='done'?{}:[])); renderXP(); buildNav(); route(); toast('Progres șters.'); } };
}

function renderLesson(l, main){
  const idx=LESSONS.indexOf(l), nxt=LESSONS[idx+1], prv=LESSONS[idx-1];
  main.style.setProperty('--ac1',l.ac1); main.style.setProperty('--ac2',l.ac2);
  main.innerHTML = `<article>
    <header class="lesson-hero"><div class="lh-top"><div class="lh-ico">${icon(l.icon)}</div><div><h1>${l.title}</h1><p>${l.sub}</p></div></div>
      <div class="lh-meta"><span>Lecția ${idx+1} din ${LESSONS.length}</span><span>⏱ ≈ ${l.mins} min</span></div></header>
    ${l.html()}
    <section class="card mq" id="mq"></section>
    <div class="lesson-foot">
      <div class="row">${prv?`<a class="btn ghost" href="#/l/${prv.id}">← ${prv.title}</a>`:''}</div>
      <div class="row"><button class="btn ${isDone(l.id)?'ghost':'ok'}" id="doneBtn">${isDone(l.id)?'✓ Marcată ca învățată':'✅ Am învățat lecția'}</button>${nxt?`<a class="btn" href="#/l/${nxt.id}">${nxt.title} →</a>`:`<a class="btn" href="#/quiz">Mergi la Quiz →</a>`}</div>
    </div></article>`;
  l.init(main);
  miniQuiz($('#mq',main), l.topic, 3);
  $('#doneBtn',main).onclick=e=>{ const v=!isDone(l.id); setDone(l.id,v); e.target.className='btn '+(v?'ghost':'ok'); e.target.textContent=v?'✓ Marcată ca învățată':'✅ Am învățat lecția'; if(v){ addXP(20); confetti(20); toast('Bravo! +20 XP 🎉'); } buildNav(); };
}

function route(){
  const h=location.hash.replace(/^#\/?/,'')||'home', [kind,id,sec]=h.split('/');
  const main=$('#main'); main.innerHTML=''; main.style.removeProperty('--ac1'); main.style.removeProperty('--ac2');
  let title='Genetică moleculară', label='';
  try{
    const l=kind==='l'&&LESSONS.find(x=>x.id===id);
    if(l){ renderLesson(l,main); title=l.title; label=title; }
    else { const v=VIEWS[kind]||VIEWS.home; main.innerHTML=v.html(); v.init(main); if(v!==VIEWS.home){ title=v.title; label=title; } }
  }catch(err){ main.innerHTML=`<div class="callout bad"><b>Eroare la afișare:</b> ${err.message}</div>`; console.error(err); }
  $('#topTitle').textContent=label||'Genetică moleculară';
  document.title=label?`${label} – Genetică moleculară`:'Genetică moleculară – material de studiu';
  document.body.classList.remove('menu-open');
  buildNav(); window.scrollTo({top:0,behavior:'instant'});
  if(sec){ setTimeout(()=>{ const el=$$('.sec-h',main)[(+sec)-1]; if(el){ const y=el.getBoundingClientRect().top+scrollY-84; window.scrollTo({top:y,behavior:'instant'}); } },160); }
}

/* temă */
function applyTheme(t){ document.documentElement.setAttribute('data-theme',t); const b=$('#themeBtn'); if(b) b.innerHTML=icon(t==='dark'?'sun':'moon'); }
$('#menuBtn').innerHTML=icon('menu');
applyTheme(new URLSearchParams(location.search).get('theme')||store.get('theme', matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'));
$('#themeBtn').onclick=()=>{ const t=document.documentElement.getAttribute('data-theme')==='dark'?'light':'dark'; applyTheme(t); store.set('theme',t); };
$('#menuBtn').onclick=()=>document.body.classList.toggle('menu-open');
$('#scrim').onclick=()=>document.body.classList.remove('menu-open');
addEventListener('hashchange',route);
injectDefs(); renderXP(); route();
