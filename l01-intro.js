'use strict';
/* ============ LECȚIA 1 — Ce este genetica ============ */
let _cid=0;
function critter(o,size=112){
  const id='cg'+(++_cid), h=o.hue;
  const c1=`hsl(${h} 82% 68%)`, c2=`hsl(${h} 70% 46%)`, belly=`hsl(${h} 95% 90%)`, dark=`hsl(${h} 60% 28%)`, spot=`hsl(${(h+170)%360} 65% 42%)`;
  let pat='';
  if(o.pattern==='pete') pat=(o.spots||[]).map(([x,y,r])=>`<circle cx="${x}" cy="${y}" r="${r}" fill="${spot}" opacity=".55"/>`).join('');
  if(o.pattern==='dungi') pat=[48,60,72].map(x=>`<path d="M${x} 38 q4 10 0 20" stroke="${spot}" stroke-width="4" fill="none" stroke-linecap="round" opacity=".55"/>`).join('');
  const eye=o.eye||'#1d4ed8';
  return `<svg viewBox="0 0 120 124" width="${size}" height="${size*124/120}" aria-hidden="true">
    <defs><radialGradient id="${id}" cx="35%" cy="28%" r="85%"><stop offset="0" stop-color="${c1}"/><stop offset="1" stop-color="${c2}"/></radialGradient></defs>
    <ellipse cx="60" cy="118" rx="34" ry="4.5" fill="#0b1020" opacity=".14"/>
    <path d="M92 90 C121 86 120 52 101 54" stroke="${c2}" stroke-width="9" fill="none" stroke-linecap="round"/>
    <circle cx="33" cy="31" r="15" fill="${c2}"/><circle cx="33" cy="32" r="8.5" fill="${belly}"/>
    <circle cx="87" cy="31" r="15" fill="${c2}"/><circle cx="87" cy="32" r="8.5" fill="${belly}"/>
    <ellipse cx="38" cy="112" rx="13" ry="7" fill="${c2}"/><ellipse cx="82" cy="112" rx="13" ry="7" fill="${c2}"/>
    <ellipse cx="60" cy="72" rx="42" ry="39" fill="url(#${id})"/>
    ${pat}
    <ellipse cx="60" cy="88" rx="25" ry="21" fill="${belly}" opacity=".92"/>
    <circle cx="44" cy="64" r="10" fill="#fff"/><circle cx="76" cy="64" r="10" fill="#fff"/>
    <circle cx="45" cy="65" r="6" fill="${eye}"/><circle cx="75" cy="65" r="6" fill="${eye}"/>
    <circle cx="45" cy="65" r="2.8" fill="#0b1020"/><circle cx="75" cy="65" r="2.8" fill="#0b1020"/>
    <circle cx="47.5" cy="62.5" r="2" fill="#fff"/><circle cx="77.5" cy="62.5" r="2" fill="#fff"/>
    <ellipse cx="35" cy="78" rx="6" ry="3.5" fill="#ff7a90" opacity=".45"/><ellipse cx="85" cy="78" rx="6" ry="3.5" fill="#ff7a90" opacity=".45"/>
    <path d="M52 80 q8 8 16 0" stroke="${dark}" stroke-width="2.8" fill="none" stroke-linecap="round"/>
    <ellipse cx="60" cy="75" rx="3.4" ry="2.4" fill="${dark}"/>
  </svg>`;
}
const HUE_NAME=h=>h<20||h>=340?'roșie':h<45?'portocalie':h<70?'galbenă':h<165?'verde':h<200?'turcoaz':h<255?'albastră':h<300?'violet':'roz';
const CHAR_ITEMS=[
  ['numărul de membre','anatomic'],['numărul de camere ale inimii','anatomic'],['prezența coloanei vertebrale','anatomic'],
  ['culoarea blănii','morfologic'],['forma urechilor','morfologic'],['înălțimea corpului','morfologic'],
  ['ritmul cardiac','fiziologic'],['temperatura corpului','fiziologic'],['viteza digestiei','fiziologic'],
  ['grupa sanguină','biochimic'],['tipul de hemoglobină','biochimic'],['o enzimă produsă de celule','biochimic']
];
LESSONS.push({
  id:'intro', icon:'helix', title:'Ce este genetica?', sub:'Ereditate și variabilitate — de aici pornim', topic:'intro', mins:6, ac1:'#6366f1', ac2:'#8b5cf6',
  html:()=>`
  ${secH(1,'Genetica studiază două lucruri')}
  ${nb(`<p><u>Genetica</u> studiază <b>ereditatea</b> și <b>variabilitatea</b>.</p>
    <p><b>ereditatea</b> constă în transmiterea caracterelor anatomice, morfologice, fiziologice, biochimice, adică transmiterea caracterelor ereditare de la <b>părinți la urmași</b>.</p>
    <p><b>variabilitatea</b> constă în capacitatea indivizilor unei specii de a se deosebi între ei, a.î. <b>nu există 2 indivizi identici</b>.</p>`)}
  <div class="grid2">
    <div class="card"><h3>🧬 Ereditatea = „seamănă cu părinții”</h3>
      <p>Urmașii primesc de la părinți <b>caracterele ereditare</b>. De aceea din pisici se nasc pisici, nu câini, iar puii au și ei două urechi, coadă și patru picioare.</p>
      <p class="small muted"><b>Imaginează-ți</b> o rețetă de familie care trece din generație în generație: rețeta = informația ereditară.</p></div>
    <div class="card"><h3>🎨 Variabilitatea = „dar nu sunt copii la indigo”</h3>
      <p>Chiar în aceeași specie, indivizii se deosebesc între ei: <b>nu există doi identici</b> (nici măcar frații).</p>
      <p class="small muted"><b>Imaginează-ți</b> că aceeași rețetă iese de fiecare dată puțin diferit: același tort, altă nuanță și altă formă.</p></div>
  </div>

  ${secH(2,'Cele 4 tipuri de caractere ereditare')}
  <p>Caracterele ereditare sunt de patru feluri. Apasă pe fiecare ca să vezi un exemplu:</p>
  <div class="row" id="exPills">
    <span class="pill" data-ex="<b>Anatomice</b> → structura corpului: numărul de membre, numărul de camere ale inimii, prezența unui schelet intern.">anatomice</span>
    <span class="pill" data-ex="<b>Morfologice</b> → aspectul exterior: forma, culoarea, mărimea (culoarea blănii, forma urechilor, înălțimea).">morfologice</span>
    <span class="pill" data-ex="<b>Fiziologice</b> → cum funcționează organismul: ritmul cardiac, temperatura corpului, viteza digestiei.">fiziologice</span>
    <span class="pill" data-ex="<b>Biochimice</b> → substanțele din organism: grupa sanguină, tipul de hemoglobină, enzimele.">biochimice</span>
  </div>
  <div class="res info" id="exBox" style="min-height:3.2em">👆 Alege o categorie.</div>

  ${secH(3,'Laboratorul de pui')}
  <p>Doi părinți → patru pui. Observă: toți puii au <b>același „plan al speciei”</b> (ereditate), dar <b>niciunul nu e identic</b> cu altul (variabilitate). Apasă pe un pui ca să vezi <b>fișa lui</b> cu cele 4 tipuri de caractere.</p>
  <div class="card">
    <div class="row" style="justify-content:center;gap:18px" id="parents"></div>
    <div class="center" style="font-weight:800;color:var(--muted);margin:2px 0 0">▼ urmașii ▼</div>
    <div class="row" id="kids" style="justify-content:center;gap:10px"></div>
    <div class="center" style="margin:10px 0 4px"><button class="btn" id="kidBtn">🎲 Generează alți pui</button></div>
    <div class="res info" id="fisa" style="margin-top:12px"></div>
  </div>

  ${secH(4,'Joc: ce fel de caracter este?')}
  <div class="card" id="charGame"></div>

  <div class="callout tip"><b>Mai departe:</b> unde „stă scrisă” această informație ereditară? Răspunsul vine în lecția următoare — un experiment făcut cu bacterii și șoareci, în 1928.</div>`,
  init(root){
    const ex=$('#exBox',root);
    $$('#exPills .pill',root).forEach(p=>p.onclick=()=>{ $$('#exPills .pill',root).forEach(x=>x.classList.remove('on')); p.classList.add('on'); ex.innerHTML=p.dataset.ex; });
    /* laborator */
    const spots=()=>Array.from({length:2+Math.floor(Math.random()*3)},()=>[34+Math.random()*52,50+Math.random()*42,4+Math.random()*5]);
    const P1={hue:32,pattern:'pete',spots:[[40,86,6],[78,92,5],[64,52,4.5]],eye:'#15803d'}, P2={hue:215,pattern:'none',eye:'#1d4ed8'};
    $('#parents',root).innerHTML=`<div class="center">${critter(P1,118)}<div class="small"><b>Părinte 1</b></div></div><div style="font-size:2rem;align-self:center;color:var(--muted)">＋</div><div class="center">${critter(P2,118)}<div class="small"><b>Părinte 2</b></div></div>`;
    const blood=['0','A','B','AB'];
    let kids=[];
    function fisa(k){
      const el=$('#fisa',root);
      if(!k){ el.innerHTML='👆 Apasă pe un pui ca să-i vezi fișa.'; return; }
      el.innerHTML=`<div class="grid2" style="gap:8px 18px;font-size:.93rem">
        <div>🦴 <b>Anatomic</b> — <span class="muted">la fel pentru toți:</span> 2 urechi, 2 ochi, coadă, 4 picioare</div>
        <div>🎨 <b>Morfologic</b> — <span class="muted">diferă:</span> blană ${HUE_NAME(k.hue)}, ${k.pattern==='pete'?'cu pete':k.pattern==='dungi'?'cu dungi':'fără model'}</div>
        <div>❤️ <b>Fiziologic</b> — <span class="muted">diferă:</span> ritm cardiac ${k.bpm} bătăi/min</div>
        <div>🧪 <b>Biochimic</b> — <span class="muted">diferă:</span> grupa sanguină ${k.blood}</div></div>`;
    }
    function gen(){
      const hs=shuffle([8,40,70,120,170,215,265,320]).slice(0,4);
      kids=hs.map(h=>({hue:h,pattern:pick(['pete','dungi','none','pete']),spots:spots(),eye:pick(['#15803d','#1d4ed8','#7c2d12','#6d28d9']),bpm:70+Math.floor(Math.random()*40),blood:pick(blood)}));
      $('#kids',root).innerHTML=kids.map((k,i)=>`<button class="hot" data-k="${i}" style="border:0;background:none;padding:0;border-radius:18px">${critter(k,104)}</button>`).join('');
      $$('#kids .hot',root).forEach(b=>{ b.classList.add('pop'); b.onclick=()=>{ $$('#kids .hot',root).forEach(x=>x.classList.remove('on')); b.classList.add('on'); fisa(kids[+b.dataset.k]); }; });
      fisa(null);
    }
    $('#kidBtn',root).onclick=gen; gen();
    /* joc de clasificare */
    const box=$('#charGame',root); let q=[], score=0, n=0;
    const cats=[['anatomic','Anatomic'],['morfologic','Morfologic'],['fiziologic','Fiziologic'],['biochimic','Biochimic']];
    function start(){ q=shuffle(CHAR_ITEMS).slice(0,8); score=0; n=0; next(); }
    function next(){
      if(n>=q.length){ box.innerHTML=`<h3>Scor: ${score}/${q.length}</h3><p>${score>=7?'🏆 Excelent!':score>=5?'👍 Bine!':'🔁 Mai încearcă: anatomic = structură, morfologic = aspect, fiziologic = funcționare, biochimic = substanțe.'}</p><button class="btn" id="cgAgain">Din nou</button>`; if(score>=7) confetti(14); $('#cgAgain',box).onclick=start; return; }
      const it=q[n];
      box.innerHTML=`<div class="small muted">${n+1}/${q.length}</div><h3 style="margin:4px 0 12px">„${it[0]}” este un caracter…</h3><div class="row">${cats.map(c=>`<button class="btn ghost" data-v="${c[0]}">${c[1]}</button>`).join('')}</div><div id="cgFb"></div>`;
      $$('[data-v]',box).forEach(b=>b.onclick=()=>{
        const ok=b.dataset.v===it[1]; if(ok){ score++; addXP(2); }
        $$('[data-v]',box).forEach(x=>{ x.disabled=true; if(x.dataset.v===it[1]) x.classList.add('ok'); });
        $('#cgFb',box).innerHTML=`<div class="res ${ok?'ok':'bad'}" style="margin-top:10px">${ok?'✅ Corect!':'❌ Era: '+it[1]+'.'}</div>`; n++; setTimeout(next,ok?700:1500);
      });
    }
    start();
  }
});
