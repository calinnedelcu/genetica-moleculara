'use strict';
/* ===== Pagini non-lecție: acasă, flashcards, potrivește, quiz, foaie ===== */
const VIEWS = {};

/* ---------- ACASĂ ---------- */
VIEWS.home = {
  title:'Acasă',
  html(){
    const total=LESSONS.length, done=LESSONS.filter(l=>isDone(l.id)).length, pct=Math.round(done/total*100);
    const st=store.get('stats',{right:0,total:0}), xp=store.get('xp',0);
    const nextL=LESSONS.find(l=>!isDone(l.id))||LESSONS[0];
    const mins=LESSONS.reduce((s,l)=>s+l.mins,0);
    return `
    <div class="hero"><canvas id="heroHelix"></canvas>
      <h1>Genetică moleculară</h1>
      <p>Tot ce trebuie să știi — explicat simplu, cu animații, desene și jocuri. Parcurge lecțiile în ordine (≈ ${mins} min), apoi exersează până ți se pare ușor.</p>
      <div class="row" style="margin-top:18px"><a class="btn" href="#/l/${nextL.id}">${done?'Continuă':'Începe'}: ${nextL.title} →</a></div></div>
    <div class="grid3" style="margin-top:16px">
      <div class="card center" style="margin:0"><div style="font-size:2rem;font-weight:900">${done}<span class="muted" style="font-size:1.1rem">/${total}</span></div><div class="small muted">lecții terminate</div><div class="bar" style="margin-top:8px"><i style="width:${pct}%"></i></div></div>
      <div class="card center" style="margin:0"><div style="font-size:2rem;font-weight:900">${xp}</div><div class="small muted">XP · ${level(xp)}</div></div>
      <div class="card center" style="margin:0"><div style="font-size:2rem;font-weight:900">${st.total?Math.round(st.right/st.total*100)+'%':'—'}</div><div class="small muted">răspunsuri corecte (${st.right}/${st.total})</div></div>
    </div>

    <h2>Planul de învățare</h2>
    <div class="card"><ul class="plan">${LESSONS.map((l,i)=>`<li class="${isDone(l.id)?'done':''}"><span class="pi" style="background:linear-gradient(135deg,${l.ac1},${l.ac2})">${icon(l.icon)}</span><a href="#/l/${l.id}">${i+1}. ${l.title}<div class="small muted" style="font-weight:600">${l.sub}</div></a><span class="small muted">${l.mins} min</span><span class="chk">${isDone(l.id)?'✓':''}</span></li>`).join('')}</ul></div>

    <h2>Cum înveți cel mai repede</h2>
    <div class="grid2">
      <div class="card"><h3>1 · Joacă-te cu simulările</h3><p>În fiecare lecție ai animații și jocuri. Nu citi doar — <b>apasă, trage, ghicește</b>. Creierul ține minte ce face.</p></div>
      <div class="card"><h3>2 · Verifică-te la final de lecție</h3><p>Mini-testul din final îți arată imediat ce n-ai înțeles. Citește explicațiile!</p></div>
      <div class="card"><h3>3 · Flashcards + Potrivește</h3><p>10 minute pe zi, repetat, bat 2 ore de recitit o dată.</p></div>
      <div class="card"><h3>4 · Quiz până la 90%+</h3><p>„Greșelile mele” îți dă doar întrebările la care ai greșit. În seara dinaintea testului: <b>Foaia rezumat</b>.</p></div>
    </div>

    <h2>Exersează</h2>
    <div class="grid2">
      <a class="tile" href="#/flash"><div class="ti">${icon('cards')}</div><b>Flashcards</b><span class="small muted">${CARDS.length} cartonașe cu repetare</span></a>
      <a class="tile" href="#/match"><div class="ti">${icon('match')}</div><b>Potrivește</b><span class="small muted">termen ↔ definiție, pe timp</span></a>
      <a class="tile" href="#/quiz"><div class="ti">${icon('quiz')}</div><b>Quiz</b><span class="small muted">${QUESTIONS.length} întrebări, cu explicații</span></a>
      <a class="tile" href="#/foaie"><div class="ti">${icon('sheet')}</div><b>Foaia rezumat</b><span class="small muted">tot esențialul pe o pagină</span></a>
    </div>
    <a class="tile" href="#/acoperire" style="margin-top:14px;display:flex;gap:14px;align-items:center"><div class="ti" style="margin:0">${icon('book')}</div><div><b>Acoperire: tot ce trebuie să știi</b><span class="small muted">Lista completă a punctelor din materie, fiecare legat de lecția unde îl găsești.</span></div></a>a>`;
  },
  init(root){ const c=$('#heroHelix',root); if(c) createHelix(c,{pairs:22,interactive:false,letters:false,speed:.5,tilt:.18,margin:1.5}); }
};

/* ---------- FLASHCARDS ---------- */
VIEWS.flash = {
  title:'Flashcards',
  html:()=>`
    <header class="lesson-hero" style="--ac1:#0ea5e9;--ac2:#6366f1"><div class="lh-top"><div class="lh-ico">${icon('cards')}</div><div><h1>Flashcards</h1><p>Răspunde în minte → întoarce cartonașul → spune sincer dacă știai.</p></div></div></header>
    <div class="row" style="margin-top:14px"><select id="fTopic" class="chip" style="padding:9px"><option value="all">Toate temele</option>${Object.entries(TOPICS).map(([k,v])=>`<option value="${k}">${v}</option>`).join('')}</select><button class="btn ghost sm" id="fReset">↺ Reia tot</button><span class="small muted" id="fCount"></span></div>
    <div id="fArea"></div>`,
  init(root){
    let queue=[], total=0; const sel=$('#fTopic',root), area=$('#fArea',root);
    const known=()=>new Set(store.get('known',[]));
    function build(all){ const k=known(); queue=CARDS.map((c,i)=>i).filter(i=>(sel.value==='all'||CARDS[i][2]===sel.value)&&(all||!k.has(i))); total=queue.length; show(); }
    function show(){
      $('#fCount',root).textContent=queue.length?`Au rămas ${queue.length} cartonașe`:'';
      if(!queue.length){ area.innerHTML=`<div class="card center"><h3>🎉 Ai trecut prin toate cartonașele!</h3><p>Apasă „Reia tot” ca să le repeți din nou.</p></div>`; if(total) confetti(14); return; }
      const c=CARDS[queue[0]];
      area.innerHTML=`<div class="flash"><div class="fc" id="fc"><div class="front"><small>${TOPICS[c[2]]}</small>${c[0]}</div><div class="back">${c[1]}</div></div></div>
        <p class="center small muted">Apasă pe cartonaș (sau Spațiu) pentru a-l întoarce</p>
        <div class="row" style="justify-content:center"><button class="btn ghost" id="fNo">❌ Mai repet (←)</button><button class="btn ok" id="fYes">✅ Știu (→)</button></div>`;
      $('#fc',area).onclick=()=>$('#fc',area).classList.toggle('flip');
      $('#fNo',area).onclick=()=>{ queue.push(queue.shift()); show(); };
      $('#fYes',area).onclick=()=>{ const i=queue.shift(); const k=known(); k.add(i); store.set('known',[...k]); addXP(1); show(); };
    }
    sel.onchange=()=>build(false);
    $('#fReset',root).onclick=()=>{ store.set('known',[]); build(true); };
    const key=e=>{ if(!area.isConnected){ document.removeEventListener('keydown',key); return; } const fc=$('#fc',area); if(!fc) return;
      if(e.code==='Space'){ e.preventDefault(); fc.classList.toggle('flip'); } if(e.key==='ArrowLeft') $('#fNo',area).click(); if(e.key==='ArrowRight') $('#fYes',area).click(); };
    document.addEventListener('keydown',key);
    build(false);
  }
};

/* ---------- POTRIVEȘTE ---------- */
VIEWS.match = {
  title:'Potrivește',
  html:()=>`
    <header class="lesson-hero" style="--ac1:#14b8a6;--ac2:#0ea5e9"><div class="lh-top"><div class="lh-ico">${icon('match')}</div><div><h1>Potrivește termenii</h1><p>Apasă un termen din stânga, apoi definiția lui din dreapta. Cât de repede poți?</p></div></div></header>
    <div class="row" style="margin-top:14px"><b id="mTime">⏱ 0s</b><span class="small muted" id="mLeft"></span><button class="btn ghost sm" id="mNew">🔀 Altă rundă</button></div>
    <div class="card" id="mBoard" style="margin-top:12px"></div>`,
  init(root){
    let sel=null, left=0, t0=0, timer=null;
    function newRound(){
      clearInterval(timer); sel=null;
      const set=shuffle(PAIRS).slice(0,6); left=set.length;
      const L=shuffle(set.map((p,i)=>({t:p[0],i}))), R=shuffle(set.map((p,i)=>({t:p[1],i})));
      $('#mBoard',root).innerHTML=`<div class="mt"><div style="display:grid;gap:10px">${L.map(o=>`<button data-s="L" data-i="${o.i}">${o.t}</button>`).join('')}</div><div style="display:grid;gap:10px">${R.map(o=>`<button data-s="R" data-i="${o.i}">${o.t}</button>`).join('')}</div></div><div id="mEnd"></div>`;
      t0=Date.now(); $('#mLeft',root).textContent=`${left} perechi rămase`;
      timer=setInterval(()=>{ const tm=$('#mTime',root); if(!tm){clearInterval(timer);return;} tm.textContent=`⏱ ${Math.floor((Date.now()-t0)/1000)}s`; },250);
      $$('#mBoard button',root).forEach(b=>b.onclick=()=>click(b));
    }
    function click(b){
      if(b.classList.contains('gone')) return;
      if(!sel||sel.dataset.s===b.dataset.s){ if(sel) sel.classList.remove('sel'); sel=b; b.classList.add('sel'); return; }
      const a=sel; sel=null; a.classList.remove('sel');
      if(a.dataset.i===b.dataset.i){ a.classList.add('gone'); b.classList.add('gone'); left--; addXP(2); $('#mLeft',root).textContent=`${left} perechi rămase`;
        if(!left){ clearInterval(timer); const s=Math.floor((Date.now()-t0)/1000); addXP(10); confetti(16); $('#mEnd',root).innerHTML=`<div class="res ok" style="margin-top:14px">🎉 Gata în ${s} secunde! ${s<30?'Rapid ca ARN-polimeraza!':s<60?'Foarte bine!':'Mai exersează pentru viteză.'} +10 XP</div>`; } }
      else { [a,b].forEach(x=>x.classList.add('shake')); setTimeout(()=>[a,b].forEach(x=>x.classList.remove('shake')),400); }
    }
    $('#mNew',root).onclick=newRound; newRound();
  }
};

/* ---------- QUIZ ---------- */
VIEWS.quiz = {
  title:'Quiz',
  html:()=>`<header class="lesson-hero" style="--ac1:#f59e0b;--ac2:#ef4444"><div class="lh-top"><div class="lh-ico">${icon('quiz')}</div><div><h1>Quiz</h1><p>${QUESTIONS.length} întrebări cu explicații. Fiecare răspuns corect = +10 XP.</p></div></div></header><div id="qzBox" style="margin-top:14px"></div>`,
  init(root){
    const box=$('#qzBox',root);
    function menu(){
      const wrong=QUESTIONS.filter(q=>store.get('wrong',[]).includes(q.id));
      box.innerHTML=`<div class="grid2">
        <div class="card" style="margin:0"><h3>⚡ Rapid</h3><p class="small muted">10 întrebări amestecate.</p><button class="btn" data-m="quick">Start</button></div>
        <div class="card" style="margin:0"><h3>🏁 Test complet</h3><p class="small muted">Toate cele ${QUESTIONS.length}, amestecate. Simulezi testul!</p><button class="btn" data-m="all">Start</button></div>
        <div class="card" style="margin:0"><h3>📚 Pe temă</h3><select id="qTopic" class="chip" style="padding:9px;margin-bottom:8px;width:100%">${Object.entries(TOPICS).map(([k,v])=>`<option value="${k}">${v} (${QUESTIONS.filter(q=>q.topic===k).length})</option>`).join('')}</select><button class="btn" data-m="topic">Start</button></div>
        <div class="card" style="margin:0"><h3>🔁 Greșelile mele</h3><p class="small muted">${wrong.length?`Ai ${wrong.length} întrebări de refăcut.`:'Nicio greșeală încă 🎉'}</p><button class="btn" data-m="wrong" ${wrong.length?'':'disabled'}>Start</button></div></div>`;
      $$('[data-m]',box).forEach(b=>b.onclick=()=>{
        const m=b.dataset.m; let list;
        if(m==='quick') list=shuffle(QUESTIONS).slice(0,10);
        if(m==='all') list=shuffle(QUESTIONS);
        if(m==='topic') list=shuffle(QUESTIONS.filter(q=>q.topic===$('#qTopic',box).value));
        if(m==='wrong') list=shuffle(wrong);
        run(list);
      });
    }
    function run(list){
      let i=0, score=0; const per={};
      function nextQ(){
        if(i>=list.length) return end();
        const q=list[i];
        box.innerHTML=`<div class="row small muted" style="justify-content:space-between"><span>Întrebarea ${i+1}/${list.length}</span><span>✅ ${score}</span></div><div class="bar" style="margin:6px 0 12px"><i style="width:${i/list.length*100}%"></i></div><div class="card" style="margin:0"><span class="tag">${TOPICS[q.topic]}</span><div id="qq" style="margin-top:10px"></div><div id="qn" style="margin-top:12px"></div></div>`;
        askQuestion($('#qq',box),q,ok=>{ per[q.topic]=per[q.topic]||[0,0]; per[q.topic][1]++; if(ok){score++; per[q.topic][0]++;}
          $('#qn',box).innerHTML=`<button class="btn" id="qNext">${i+1<list.length?'Următoarea →':'Vezi rezultatul 🏁'}</button>`; $('#qNext',box).onclick=()=>{ i++; nextQ(); }; $('#qNext',box).focus(); });
      }
      function end(){
        const pct=Math.round(score/list.length*100);
        const rows=Object.entries(per).sort((a,b)=>a[1][0]/a[1][1]-b[1][0]/b[1][1]).map(([k,[r,t]])=>`<div style="margin:8px 0"><div class="row small" style="justify-content:space-between"><span>${TOPICS[k]}</span><b>${r}/${t}</b></div><div class="bar"><i style="width:${r/t*100}%;background:${r/t>=.8?'var(--ok)':r/t>=.5?'var(--warn)':'var(--bad)'}"></i></div></div>`).join('');
        if(pct>=80) confetti(24);
        box.innerHTML=`<div class="card center"><div style="font-size:3rem">${pct>=90?'🏆':pct>=70?'👏':pct>=50?'💪':'📖'}</div><h2 style="margin:4px 0">${score}/${list.length} — ${pct}%</h2><p>${pct>=90?'Ești gata de test!':pct>=70?'Aproape perfect — repetă temele mai slabe.':pct>=50?'Ai o bază bună. Reia lecțiile la temele slabe.':'Hai să mai citim o dată lecțiile și să reluăm.'}</p></div>
          <div class="card"><h3>Pe teme (cele mai slabe primele)</h3>${rows}</div><div class="row"><button class="btn" id="qMenu">↩ Meniu quiz</button><button class="btn ghost" id="qWrong">🔁 Refă greșelile</button></div>`;
        $('#qMenu',box).onclick=menu; $('#qWrong',box).onclick=()=>{ const w=QUESTIONS.filter(q=>store.get('wrong',[]).includes(q.id)); if(w.length) run(shuffle(w)); else toast('Nicio greșeală rămasă 🎉'); };
      }
      nextQ();
    }
    menu();
  }
};

/* ---------- FOAIE REZUMAT ---------- */
VIEWS.foaie = {
  title:'Foaia rezumat',
  html:()=>`
  <header class="lesson-hero" style="--ac1:#ef4444;--ac2:#f97316"><div class="lh-top"><div class="lh-ico">${icon('sheet')}</div><div><h1>Foaia rezumat</h1><p>Tot ce trebuie să știi, pe o pagină. Perfectă pentru seara dinainte.</p></div></div></header>
  <div class="row no-print" style="margin-top:12px"><button class="btn ghost" onclick="window.print()">🖨️ Printează / salvează PDF</button></div>

  <div class="card"><h3>🧬 Bazele</h3><ul style="margin:0;padding-left:20px">
    <li><b>Genetica</b> = ereditate + variabilitate.</li>
    <li><b>Ereditate</b> = transmiterea caracterelor (anatomice, morfologice, fiziologice, biochimice) de la părinți la urmași. <b>Variabilitate</b> = nu există 2 indivizi identici.</li></ul></div>

  <div class="card"><h3>🐭 Griffith (1928) & Avery (1944)</h3>
    <p><b>RII</b> = nevirulent, colonii rugoase · <b>SIII</b> = virulent, colonii netede.</p>
    <p>Șoarece + RII → <b>trăiește</b> · + SIII → <b>moare</b> · + SIII omorâți (căldură) → <b>trăiește</b> · + RII + SIII omorâți → <b>MOARE</b>.</p>
    <p>Șoarecele + SIII face <b>pneumonie</b> și moare. Avery: de la cadavrele SIII a trecut „ceva” = <b>ADN</b> la RII ⇒ <b>transformare genetică</b>.</p></div>

  <div class="card tbl-wrap"><h3>⚗️ ADN vs ARN</h3><table><tr><th></th><th>ADN</th><th>ARN</th></tr>
    <tr><td>Nume</td><td>acid dezoxiribonucleic</td><td>acid ribonucleic</td></tr>
    <tr><td>Pentoză</td><td>dezoxiriboza (D)</td><td>riboza (R)</td></tr>
    <tr><td>Baze</td><td>A, G, C, <b>T</b></td><td>A, G, C, <b>U</b></td></tr>
    <tr><td>Catene</td><td>bicatenar (~99%)</td><td>monocatenar (~99%)</td></tr>
    <tr><td>Nucleotide</td><td>ADP, GDP, CDP, TDP</td><td>ARP, URP, CRP, GRP</td></tr>
    <tr><td>Sinteză</td><td>replicare</td><td>transcripție</td></tr></table>
    <p class="small muted" style="margin-top:8px"><b>Purinice:</b> A, G &nbsp;·&nbsp; <b>Pirimidinice:</b> C, T, U &nbsp;·&nbsp; Nucleotidă = bază + pentoză + fosfat. ADN = cel mai mare polimer natural.</p></div>

  <div class="grid2">
    <div class="card"><h3>⛓️ Legături fosfodiesterice</h3><p>În <b>aceeași catenă</b>. Între <b>C5′</b> al unei pentoze și <b>C3′</b> al celei vecine, prin <b>fosfat</b>. Baza e la <b>C1′</b>.</p></div>
    <div class="card"><h3>🧩 Legături de hidrogen</h3><p>Între <b>cele 2 catene</b>. <b>A=T</b> (2 H), <b>C≡G</b> (3 H). În ARN: <b>A=U</b>. Purină ↔ pirimidină.</p></div>
  </div>

  <div class="card"><h3>🧮 Problemă tip: procente și legături</h3>
    <p>ADN cu <b>N</b> nucleotide și <b>x% A</b>: <b>T = x%</b>; <b>G = C = (100 − 2x) / 2 %</b>.</p>
    <p>Nr. perechi A=T („leg. =”) = x% · N &nbsp;·&nbsp; Nr. perechi C≡G („leg. ≡”) = (G%) · N &nbsp;·&nbsp; Legături H în total = 2·(A=T) + 3·(C≡G).</p>
    <p><i>Exemplu:</i> N = 1800, 15% A ⇒ T = 15%, C = G = 35% = 630 ⇒ <b>270 leg. =</b>, <b>630 leg. ≡</b> (H total: 540 + 1890 = 2430).</p></div>

  <div class="card"><h3>🌀 Structura ADN</h3><ul style="margin:0;padding-left:20px">
    <li>Bicatenar, <b>răsucit helicoidal</b> în jurul unui ax.</li><li><b>Structura I (primară)</b> = o catenă (legături fosfodiesterice); <b>structura II (secundară)</b> = 2 catene (legături de H).</li>
    <li>Catene <b>antiparalele</b>: C3′→C5′ pe una, C5′→C3′ pe cealaltă.</li><li>Complementaritate: A=T, C≡G → în ADN: A = T și G = C (ca %).</li></ul></div>

  <div class="card"><h3>🔥 Denaturare / renaturare</h3><ul style="margin:0;padding-left:20px">
    <li><b>Denaturare</b> (t°C ↑): legăturile de H se rup → 2 molecule monocatenare. Se datorează structurii bicatenare.</li>
    <li><b>Renaturare</b> (răcire lentă): se reface molecula bicatenară. <b>Răcire bruscă</b> → rămân monocatenare.</li>
    <li>Aplicații: înrudire evolutivă/filogenetică după procentul de renaturare (om–maimuță 75% > om–șoarece ~25%), paternitate/maternitate (≈ 99%).</li></ul></div>

  <div class="card"><h3>🧫 Replicarea (autocopierea)</h3><ul style="margin:0;padding-left:20px">
    <li>ADN = singura moleculă care se autocopiază; în <b>interfază</b>, <b>etapa S</b> (ciclul celular: interfază + diviziune).</li>
    <li>Model <b>semiconservativ</b>: ADN-polimeraza taie pas cu pas legăturile de H (forma λ); nucleotide din citoplasmă se atașează pe baza complementarității; legături H veche↔nouă; legături fosfodiesterice în catena nouă.</li>
    <li>Rezultat: 2 molecule identice, fiecare <b>1 catenă veche + 1 nouă</b>. Explică menținerea aceleiași informații ereditare în toate celulele.</li></ul></div>

  <div class="card tbl-wrap"><h3>⚖️ Replicare vs transcripție</h3><table><tr><th></th><th>Replicare</th><th>Transcripție</th></tr>
    <tr><td>Enzima</td><td>ADN-polimeraza</td><td>ARN-polimeraza</td></tr>
    <tr><td>Se copiază</td><td>ambele catene</td><td>o catenă (catena sens)</td></tr>
    <tr><td>Produs</td><td>2 ADN (1 veche + 1 nouă) — <b>semiconservativ</b></td><td>ARN monocatenar</td></tr>
    <tr><td>Etapa intermediară</td><td>forma λ (Y)</td><td>hibrid ADN–ARN + catenă liberă de ADN</td></tr>
    <tr><td>La final</td><td>2 molecule de ADN</td><td>ARN eliberat, ADN refăcut</td></tr></table>
    <p class="small muted" style="margin-top:8px">După modelul transcripției se sintetizează mai multe tipuri de ARN.</p></div>

  <div class="card tbl-wrap"><h3>🍀 Tipuri de ARN</h3><table><tr><th>Tip</th><th>Esențial</th></tr>
    <tr><td><b>Viral</b></td><td>material genetic al virusurilor (bacteriofagi, VMT, v. gripal)</td></tr>
    <tr><td><b>ARNm</b></td><td>monocatenar, lungime variabilă; copiază informația din ADN pentru sinteza proteică</td></tr>
    <tr><td><b>ARNt</b> (solubil)</td><td>frunză de trifoi (monocatenar cu regiuni bicatenare); transferă aminoacizi; <b>anticodon</b> ↔ codon din ARNm</td></tr>
    <tr><td><b>ARNr</b></td><td>regiuni bicatenare; alcătuiește ribozomii (rol: în sinteza ribozomilor); ribozom = subunitate mică + mare, 150–250 Å (1 Å = 10⁻¹⁰ m)</td></tr></table></div>

  <div class="callout tip"><h3 style="margin-top:0">🧠 Trucuri de memorie</h3><ul style="margin:0;padding-left:20px">
    <li><b>Ag</b> = argint <b>pur</b> → <b>pur</b>inice = <b>A, G</b>. &nbsp; <b>CUT</b> → pirimidine = <b>C, U, T</b>.</li>
    <li><b>R</b>ugos → <b>R</b>ămâne viu; <b>S</b>mooth → <b>S</b>fârșit.</li>
    <li>Liniuțele din semn = legăturile H: <b>A=T</b> (2), <b>C≡G</b> (3).</li>
    <li><b>T</b> → <b>ADN</b>; <b>U</b> → <b>ARN</b>. Dezoxiriboza (D) → ADN; Riboza (R) → ARN.</li>
    <li>Transcriere: A→<b>U</b>, T→A, C→G, G→C. ARNm = „mesagerul”, ARNt = „camionul”, ARNr = „fabrica”.</li></ul></div>

  <div class="callout warn"><h3 style="margin-top:0">⚠️ Capcane frecvente</h3><ul style="margin:0;padding-left:20px">
    <li>Experimentul 4 Griffith → șoarecele <b>moare</b>.</li>
    <li>Nu pune <b>T</b> în ARN și nici <b>U</b> în ADN.</li>
    <li>Fosfodiesterice = în aceeași catenă · Hidrogen = între catene.</li>
    <li>Semiconservativ = fiecare fiică are <b>1 veche + 1 nouă</b> (nu o moleculă veche + una complet nouă).</li>
    <li>Transcripția copiază <b>o singură</b> catenă; replicarea — ambele.</li>
    <li>Anticodon (ARNt) ≠ codon (ARNm) — sunt complementare.</li></ul></div>`,
  init(){}
};
