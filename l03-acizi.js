'use strict';
/* ============ LECȚIA 3 — Acizii nucleici ============ */
const sugarIcon=(l,s=30)=>{ const pts=[0,1,2,3,4].map(k=>{const a=(-90+72*k)*Math.PI/180; return `${f1(15+13*Math.cos(a))},${f1(16+13*Math.sin(a))}`;}).join(' ');
  return `<svg viewBox="0 0 30 30" width="${s}" height="${s}"><polygon points="${pts}" fill="url(#gSugar)" stroke="#34415a" stroke-width="1.2"/><text x="15" y="21" text-anchor="middle" class="bl" style="font-size:14px">${l}</text></svg>`; };
const phosIcon=(s=30)=>`<svg viewBox="0 0 30 30" width="${s}" height="${s}"><circle cx="15" cy="15" r="13" fill="url(#gPhos)" stroke="#a86500" stroke-width="1.2"/><text x="15" y="20.5" text-anchor="middle" style="font:900 15px var(--font);fill:#6b3d00">P</text></svg>`;
const BASE_NAME={A:'adenina',G:'guanina',C:'citozina',T:'timina',U:'uracilul'};

/* ---------- scena „polimerizare” ---------- */
function polyScene(t){
  const N=7, X=170, y0=92, dy=60, L='ACGTTGA';
  const start=[[400,86],[430,176],[380,266],[430,346],[330,406],[400,456],[60,440]];
  let s=cytoBg(520,500,4,14), units='', links='';
  for(let i=0;i<N;i++){
    const a=3+i*1.15, p=eio(seg(t,a,a+.95)), f=[X,y0+i*dy], st=start[i];
    const bob=p<=0?Math.sin(t*1.5+i*2.1)*5:0, bx=p<=0?Math.cos(t*1.2+i)*4:0;
    units+=nucUnit(lerp(st[0],f[0],p)+bx,lerp(st[1],f[1],p)+bob,L[i],1,{s:1.25});
    if(i>0&&t>a+.95){ const k=eoc(seg(t,a+.95,a+1.4)), yA=y0+(i-1)*dy+10, yB=y0+i*dy-24-6.5;
      links+=`<line x1="${X}" y1="${yA}" x2="${X}" y2="${f1(lerp(yA,yB,k))}" stroke="#5b6b86" stroke-width="3.4" stroke-linecap="round"/>`;
      if(k>=1){ const glow=1-seg(t,a+1.4,a+2.2); if(glow>0) links+=`<circle cx="${X}" cy="${f1((yA+yB)/2)}" r="${f1(6+10*(1-glow))}" fill="none" stroke="#fbbf24" stroke-width="3" opacity="${f1(glow)}"/>`; } }
  }
  s+=links+units;
  const done=seg(t,10.6,11.6);
  if(t<3) s+=pill(260,28,'nucleotide libere = „mărgele”',{fs:13,fill:'var(--brand)',color:'#fff',stroke:'transparent'});
  if(done>0){ const yTop=y0-40, yBot=y0+(N-1)*dy+18; s+=`<g opacity="${f1(done)}"><path d="M${X+92} ${yTop} q16 0 16 16 v${f1((yBot-yTop)/2-32)} q0 16 16 16 q-16 0 -16 16 v${f1((yBot-yTop)/2-32)} q0 16 -16 16" fill="none" stroke="var(--brand)" stroke-width="3" stroke-linecap="round" transform="translate(0 0)"/>`+pill(X+240,(yTop+yBot)/2,'polinucleotidă',{fs:14,fill:'var(--brand)',color:'#fff',stroke:'transparent'})+`<text class="t-sm" x="${X+240}" y="${f1((yTop+yBot)/2+28)}" text-anchor="middle">= ADN sau ARN</text></g>`; }
  if(t>5&&t<9.2) s+=callout(400,y0+dy*1.2,X+10,y0+dy*.5+12,'legături între nucleotide',{op:clamp(Math.min(seg(t,5,5.6),1-seg(t,8.6,9.2)))});
  return s;
}

/* ---------- nucleotida „desfăcută” ---------- */
function nucSVG(type,base,e,hi){
  const D=type==='ADN'?'D':'R', P1=[lerp(100,62,e),lerp(160,62,e)], S1=[250,160], B1=[lerp(400,442,e),lerp(160,252,e)];
  const glow=i=>hi===i?' filter="url(#fGlow)"':'';
  let s=`<g opacity="${f1(1-e)}"><line x1="${P1[0]+30}" y1="${P1[1]}" x2="${S1[0]-44}" y2="${S1[1]}" stroke="#5b6b86" stroke-width="6" stroke-linecap="round"/><line x1="${S1[0]+44}" y1="${S1[1]}" x2="${B1[0]-52}" y2="${B1[1]}" stroke="#5b6b86" stroke-width="6" stroke-linecap="round"/></g>`;
  s+=`<g class="hot np" data-p="0"${glow(0)}><circle cx="${f1(P1[0])}" cy="${f1(P1[1])}" r="38" fill="url(#gPhos)" stroke="#a86500" stroke-width="2"/><text x="${f1(P1[0])}" y="${f1(P1[1]+13)}" text-anchor="middle" style="font:900 36px var(--font);fill:#6b3d00">P</text></g>`;
  const pts=[0,1,2,3,4].map(k=>{const a=(-90+72*k)*Math.PI/180; return `${f1(S1[0]+50*Math.cos(a))},${f1(S1[1]+50*Math.sin(a))}`;}).join(' ');
  s+=`<g class="hot np" data-p="1"${glow(1)}><polygon points="${pts}" fill="url(#gSugar)" stroke="#34415a" stroke-width="2" stroke-linejoin="round"/><text x="${S1[0]}" y="${S1[1]+13}" text-anchor="middle" class="bl" style="font-size:36px">${D}</text></g>`;
  s+=`<g class="hot np" data-p="2"${glow(2)}><rect x="${f1(B1[0]-56)}" y="${f1(B1[1]-36)}" width="112" height="72" rx="20" fill="url(#gt${base})" stroke="${PAL[base][2]}" stroke-width="2"/><rect x="${f1(B1[0]-50)}" y="${f1(B1[1]-31)}" width="100" height="22" rx="11" fill="#fff" opacity=".25"/><text x="${f1(B1[0])}" y="${f1(B1[1]+13)}" text-anchor="middle" class="bl" style="font-size:38px">${base}</text></g>`;
  const lab=(x,y,a,b,op)=>`<g opacity="${f1(op)}"><text class="t" x="${f1(x)}" y="${f1(y)}" text-anchor="middle">${a}</text><text class="t-sm" x="${f1(x)}" y="${f1(y+16)}" text-anchor="middle">${b}</text></g>`;
  s+=lab(P1[0],P1[1]+66,'radical fosfat','(P)',e)+lab(S1[0],S1[1]+88,'zahăr (pentoză)',`(${D}) ${D==='D'?'dezoxiriboza':'riboza'}`,e)+lab(B1[0],B1[1]+66,'bază azotată',isPurine(base)?'purinică':'pirimidinică',e);
  return s;
}
const NUC_INFO=[
  '<b>Radicalul fosfat (P)</b> — leagă nucleotidele între ele, formând „scheletul” lanțului (împreună cu zahărul). E la fel în ADN și în ARN.',
  '<b>Zahărul (pentoză)</b> — o moleculă cu 5 atomi de carbon. În <b>ADN</b> este <b>dezoxiriboza (D)</b>, în <b>ARN</b> este <b>riboza (R)</b>.',
  '<b>Baza azotată</b> — „litera” din alfabetul genetic: A, G, C, T (în ADN) sau A, G, C, U (în ARN). Ea poartă informația!'
];
/* nucleotidă asamblată (pentru felicitări) */
function nucAssembled(type,base){
  const D=type==='ADN'?'D':'R';
  return `<svg viewBox="0 0 330 120" style="max-width:330px;display:block;margin:auto"><line x1="70" y1="60" x2="104" y2="60" stroke="#5b6b86" stroke-width="5"/><line x1="156" y1="60" x2="192" y2="60" stroke="#5b6b86" stroke-width="5"/>
    <circle cx="48" cy="60" r="26" fill="url(#gPhos)" stroke="#a86500" stroke-width="1.6"/><text x="48" y="71" text-anchor="middle" style="font:900 26px var(--font);fill:#6b3d00">P</text>
    ${sugar(130,60,32)}<text x="130" y="71" text-anchor="middle" class="bl" style="font-size:26px">${D}</text>
    <rect x="192" y="30" width="92" height="60" rx="16" fill="url(#gt${base})" stroke="${PAL[base][2]}" stroke-width="1.6"/><text x="238" y="71" text-anchor="middle" class="bl" style="font-size:30px">${base}</text></svg>`;
}

LESSONS.push({
  id:'acizi', icon:'flask', title:'Acizii nucleici: ADN și ARN', sub:'Nucleotida, bazele azotate și pentozele', topic:'acizi', mins:16, ac1:'#0ea5e9', ac2:'#6366f1',
  html:()=>`
  ${secH(1,'Ce sunt acizii nucleici?')}
  ${nb(`<p><u>Acizii nucleici – structura</u></p>
    <p>ADN = acid <b>dezoxiribonucleic</b><br>ARN = acid <b>ribonucleic</b></p>
    <p>→ sunt subst. <b>polinucleotidice</b><br>&nbsp;&nbsp;&nbsp;↳ se formează prin <b>polimerizarea nucleotidelor</b></p>
    <p>• Molecula de ADN → cel mai mare polimer natural din lumea vie</p>`)}
  <p><b>Poli</b> = mulți. O substanță <b>polinucleotidică</b> este un <b>lanț lung de nucleotide</b>, ca un colier de mărgele: fiecare mărgea e o nucleotidă, iar colierul întreg e molecula de ADN sau de ARN. Legarea mărgelelor una de alta se numește <b>polimerizare</b>.</p>
  <div id="polyPlayer"></div>
  <div class="callout key"><b>De ținut minte:</b> <b>ADN</b> = acid <b>dezoxi</b>ribonucleic · <b>ARN</b> = acid ribonucleic · ambele sunt <b>polinucleotide</b> · <b>ADN = cel mai mare polimer natural din lumea vie</b>.</div>

  ${secH(2,'Nucleotida — cărămida din 3 piese')}
  ${nb(`<p>• nucleotida → <b>bazele azotate</b><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;→ <b>zahăr (pentoză)</b><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;→ <b>radical fosfat</b> <span class="circ">P</span></p>`)}
  <p>Apasă pe fiecare piesă ca să afli ce face. Cu butonul de mai jos poți <b>desface</b> nucleotida în cele 3 componente.</p>
  <div class="card">
    <div class="row" style="justify-content:space-between">
      <div class="seg" id="nType"><button class="on" data-t="ADN">ADN</button><button data-t="ARN">ARN</button></div>
      <div class="row"><span class="small muted">Bază:</span><div class="seq" id="nBases"></div></div>
      <button class="btn" id="nSplit">Desparte piesele</button></div>
    <div class="stage" style="margin-top:12px"><svg id="nucSvg" viewBox="0 0 520 330" style="max-width:640px;margin:auto"></svg></div>
    <div class="res info" id="nInfo">👆 Apasă pe o piesă (fosfat, zahăr sau bază).</div>
  </div>

  ${secH(3,'Bazele azotate')}
  ${nb(`<p><u>Bazele azotate</u></p>
    <p>{ <b>purinice</b> → adenina <span class="circ">A</span>, guanina <span class="circ">G</span> &nbsp;<span class="e">} prezent în ADN și ARN</span><br>
    &nbsp;&nbsp;<b>pirimidinice</b> → citozina <span class="circ">C</span> &nbsp;<span class="e">}</span><br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;timina <span class="circ">T</span> – <b>doar ADN</b><br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;uracil <span class="circ">U</span> – <b>doar ARN</b></p>`)}
  <p>Bazele sunt de <b>două feluri</b>, după forma lor: <b>purinice</b> (2 inele unite — mai „mari”) și <b>pirimidinice</b> (un singur inel — mai „mici”). Atinge o bază ca să-i vezi formula:</p>
  <div class="card"><div class="grid3" id="bGal" style="gap:10px"></div><div class="res info" id="bInfo" style="margin-top:12px">👆 Alege o bază.</div></div>
  <div class="grid2">
    <div class="callout tip"><b>Mnemonic:</b> <b>Ag</b> = argint <b>pur</b> → <b>pur</b>inice = <b>A</b> și <b>G</b>.<br><b>CUT</b> = <b>C</b>, <b>U</b>, <b>T</b> → pirimidinice (cele cu un singur inel).</div>
    <div class="callout tip"><b>Cine unde stă:</b> <b>T</b> (timina) → doar ADN; <b>U</b> (uracilul) → doar ARN — în ARN, uracilul ia locul timinei. A, G, C sunt în ambele.</div>
  </div>
  <p>Iată <b>inelul pirimidinic</b> (4 atomi de carbon și 2 de azot) desenat schematic; apoi sortează tu bazele:</p>
  <div class="grid2" style="align-items:center">
    <div class="stage pad"><svg viewBox="0 0 240 230" style="max-width:260px;display:block;margin:auto">${pyrimidineRing(120,112,64)}<text class="t-sm" x="120" y="218" text-anchor="middle">inel pirimidinic: 4 C + 2 N</text></svg></div>
    <div><p style="margin:0 0 6px"><b>Inelul pirimidinic</b> are <b>6 atomi</b>: 4 de carbon și 2 de azot (N). Purinele au în plus încă un inel (de 5 atomi) lipit de el — de aceea sunt mai mari.</p><p class="small muted" style="margin:0">Carbonii se numerotează C₁–C₄.</p></div>
  </div>

  <h3 style="margin-top:22px">🎯 Joc 1 · Unde se găsește? (trage piesele în zona potrivită)</h3>
  <p class="small muted">Pe calculator trage cu mouse-ul; pe telefon apasă piesa, apoi zona.</p>
  <div class="card">
    <div class="venn" id="venn">
      <div class="vc vL"></div><div class="vc vR"></div>
      <span class="vt" style="left:4%;background:#3b82f6">ADN</span><span class="vt" style="right:4%;background:#14b8a6">ARN</span>
      <div class="zone zL" data-z="adn"><small>doar ADN</small><div class="zbox"></div></div>
      <div class="zone zM" data-z="both"><small>ADN și ARN</small><div class="zbox"></div></div>
      <div class="zone zR" data-z="arn"><small>doar ARN</small><div class="zbox"></div></div>
    </div>
    <div class="tray" id="vTray"></div><div id="vOut"></div>
  </div>

  <h3 style="margin-top:22px">🎯 Joc 2 · Purinică sau pirimidinică?</h3>
  <div class="card">
    <div class="grid2" id="pZones"><div class="zone" data-z="pur"><small>purinice (2 inele)</small><div class="zbox"></div></div><div class="zone" data-z="pir"><small>pirimidinice (1 inel)</small><div class="zbox"></div></div></div>
    <div class="tray" id="pTray" style="margin-top:10px"></div><div id="pOut"></div>
  </div>

  ${secH(4,'Pentozele (zaharurile)')}
  ${nb(`<p><u>Pentoze</u> { <b>Dezoxiriboza</b> <span class="circ">D</span> – doar în ADN<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>Riboza</b> <span class="circ">R</span> – doar în ARN</p>`)}
  <p><b>Pentoză</b> = zahăr cu <b>5 atomi de carbon</b> (penta = 5). Cele două diferă printr-un singur detaliu, la carbonul 2′: riboza are acolo o grupare <b>OH</b>, dezoxiriboza doar un <b>H</b> — adică „<b>dez</b>-oxi” = <b>fără</b> un atom de oxigen. <span class="small muted">(bonus)</span></p>
  <div class="grid2">
    <div class="card"><h3 style="margin:0 0 4px"><span class="circ">D</span> Dezoxiriboza — doar în <span style="color:#3b82f6">ADN</span></h3><div class="stage pad"><svg viewBox="0 0 400 310">${haworth('D','')}</svg></div></div>
    <div class="card"><h3 style="margin:0 0 4px"><span class="circ">R</span> Riboza — doar în <span style="color:#14b8a6">ARN</span></h3><div class="stage pad"><svg viewBox="0 0 400 310">${haworth('R','')}</svg></div></div>
  </div>

  ${secH(5,'ADN vs ARN, pe scurt')}
  <div class="grid2">
    <div class="card" style="border-top:5px solid #3b82f6"><h3>ADN</h3><ul style="margin:0;padding-left:18px"><li>acid <b>dezo</b>xiribonucleic</li><li>pentoza: <b>dezoxiriboza</b> (D)</li><li>baze: A, G, C, <b>T</b></li><li>de obicei <b>bicatenar</b></li></ul><div style="margin-top:8px">${seqHtml('AGCT')}</div></div>
    <div class="card" style="border-top:5px solid #14b8a6"><h3>ARN</h3><ul style="margin:0;padding-left:18px"><li>acid ribonucleic</li><li>pentoza: <b>riboza</b> (R)</li><li>baze: A, G, C, <b>U</b></li><li>de obicei <b>monocatenar</b></li></ul><div style="margin-top:8px">${seqHtml('AGCU')}</div></div>
  </div>

  ${secH(6,'Cum se numesc nucleotidele')}
  ${nb(`<table style="border:0;font-family:inherit;font-size:inherit;width:100%"><tr><td style="border:0;border-right:2px solid #1d2a44;padding:0 14px"><u>Nucleotide din ADN</u><br>ADP<br>GDP<br>CDP<br>TDP</td><td style="border:0;padding:0 14px"><u>Nucleotide din ARN</u><br>ARP<br>URP<br>CRP<br>GRP</td></tr></table>`)}
  <p>Numele e un cod din <b>3 litere</b>: <b>baza</b> + <b>pentoza</b> (<b>D</b> sau <b>R</b>) + <b>fosfatul</b> (<b>P</b>). Apasă pe un cod ca să-l descifrezi:</p>
  <div class="card"><div class="row" style="gap:18px;justify-content:center"><div><div class="small muted center">ADN</div><div class="row" id="dDna"></div></div><div><div class="small muted center">ARN</div><div class="row" id="dRna"></div></div></div>
    <div class="center" id="dOut" style="margin-top:14px;min-height:130px"></div></div>

  ${secH(7,'Construiește tu nucleotida')}
  <div class="card" id="builder">
    <div class="res info" id="bTask"></div>
    <div class="slotrow" style="margin:14px 0">
      <div class="slot" data-slot="phos"><b>① Fosfat</b><div class="zbox"></div></div>
      <div class="slot" data-slot="sugar"><b>② Zahăr</b><div class="zbox"></div></div>
      <div class="slot" data-slot="base"><b>③ Bază</b><div class="zbox"></div></div>
    </div>
    <div class="tray" id="bTray"></div><div id="bOut"></div>
  </div>`,
  init(root){
    scenePlayer($('#polyPlayer',root),{dur:13,vb:'0 0 520 500',label:'Polimerizarea nucleotidelor',render:polyScene,intro:'Apasă ▶ ca să vezi cum se formează un lanț.',
      chapters:[{t:0,title:'Nucleotide libere',cap:'Nucleotidele plutesc libere, ca niște <b>mărgele</b>. Fiecare are: fosfat (auriu), zahăr (pentagon) și bază (litera colorată).'},
        {t:3,title:'Se leagă una de alta',cap:'Nucleotidele se <b>leagă pe rând</b>: fosfatul uneia se prinde de zahărul celei dinaintea ei. Asta e <b>polimerizarea</b>.'},
        {t:10.6,title:'Lanț = polinucleotidă',cap:'Rezultă un <b>lanț lung de nucleotide</b>: o <b>polinucleotidă</b> (ADN sau ARN).'}]});
    /* nucleotida desfăcută */
    let type='ADN', base='A', e=0, hi=-1, busy=false;
    const svg=$('#nucSvg',root), info=$('#nInfo',root);
    const draw=()=>{ svg.innerHTML=nucSVG(type,base,e,hi); };
    function bases(){ $('#nBases',root).innerHTML=(type==='ADN'?['A','G','C','T']:['A','G','C','U']).map(b=>`<button class="hot" data-b="${b}" style="border:0;background:none;padding:0;border-radius:50%;${b===base?'outline:3px solid var(--brand);outline-offset:2px':''}">${baseChip(b)}</button>`).join(''); $$('#nBases [data-b]',root).forEach(b=>b.onclick=()=>{ base=b.dataset.b; bases(); draw(); }); }
    $$('#nType button',root).forEach(b=>b.onclick=()=>{ type=b.dataset.t; $$('#nType button',root).forEach(x=>x.classList.toggle('on',x===b)); if(type==='ADN'&&base==='U') base='T'; if(type==='ARN'&&base==='T') base='U'; bases(); draw(); });
    svg.addEventListener('click',ev=>{ const g=ev.target.closest('.np'); if(!g) return; hi=+g.dataset.p; info.innerHTML=NUC_INFO[hi]; draw(); });
    $('#nSplit',root).onclick=async ev=>{ if(busy) return; busy=true; const to=e<.5?1:0, from=e; await tween(900,p=>{ e=lerp(from,to,p); draw(); },svg,eio); ev.target.textContent=to?'Pune la loc':'Desparte piesele'; busy=false; };
    bases(); draw();
    /* galeria bazelor */
    const BINFO={A:'<b>Adenina (A)</b> — bază <b>purinică</b> (2 inele). Se găsește în <b>ADN și ARN</b>.',G:'<b>Guanina (G)</b> — bază <b>purinică</b> (2 inele). Se găsește în <b>ADN și ARN</b>.',C:'<b>Citozina (C)</b> — bază <b>pirimidinică</b> (1 inel). Se găsește în <b>ADN și ARN</b>.',T:'<b>Timina (T)</b> — bază <b>pirimidinică</b> (1 inel). <b>Doar în ADN</b>. Are o grupare metil (CH₃).',U:'<b>Uracilul (U)</b> — bază <b>pirimidinică</b> (1 inel). <b>Doar în ARN</b>. Seamănă cu timina, dar fără CH₃.'};
    $('#bGal',root).innerHTML=['A','G','C','T','U'].map(l=>{ const c=isPurine(l)?[150,100]:[100,100], m=baseMolecule(l,c,26);
      return `<div class="hot bgal" data-l="${l}" style="border:2px solid var(--line);border-radius:16px;padding:6px;background:var(--card2)"><svg viewBox="0 0 230 190">${drawMolecule(m,{fs:14})}</svg><div class="center small"><b>${BASE_NAME[l]}</b> ${baseChip(l)}<br><span class="muted">${isPurine(l)?'purinică':'pirimidinică'} · ${l==='T'?'doar ADN':l==='U'?'doar ARN':'ADN + ARN'}</span></div></div>`; }).join('');
    $$('.bgal',root).forEach(g=>g.onclick=()=>{ $$('.bgal',root).forEach(x=>x.style.borderColor='var(--line)'); g.style.borderColor='var(--brand)'; $('#bInfo',root).innerHTML=BINFO[g.dataset.l]; });
    /* Joc 1: Venn */
    const mkChip=(v,z,html)=>`<div class="dchip" data-chip data-v="${v}" data-z="${z}">${html}</div>`;
    const vItems=[['A','both',`<span class="base bA">A</span>adenina`],['G','both',`<span class="base bG">G</span>guanina`],['C','both',`<span class="base bC">C</span>citozina`],['T','adn',`<span class="base bT">T</span>timina`],['U','arn',`<span class="base bU">U</span>uracil`],['D','adn',`<span class="sg">${sugarIcon('D')}</span>dezoxiriboza`],['R','arn',`<span class="sg">${sugarIcon('R')}</span>riboza`],['P','both',`<span class="sg">${phosIcon()}</span>fosfat (P)`]];
    $('#vTray',root).innerHTML=shuffle(vItems).map(i=>mkChip(...i)).join('');
    let vLeft=vItems.length, vMist=0;
    const HINT={A:'A e și în ADN, și în ARN.',G:'G e și în ADN, și în ARN.',C:'C e și în ADN, și în ARN.',T:'T (timina) e DOAR în ADN.',U:'U (uracilul) e DOAR în ARN.',D:'Dezoxiriboza e DOAR în ADN.',R:'Riboza e DOAR în ARN.',P:'Radicalul fosfat e în nucleotidele ambelor.'};
    const dd1=dragDrop({zones:$$('#venn .zone',root),onDrop:(chip,z)=>{ const ok=chip.dataset.z===z.dataset.z; if(ok){ chip.classList.add('good'); chip.dataset.locked=1; addXP(2); if(--vLeft===0){ $('#vOut',root).innerHTML=`<div class="res ok" style="margin-top:12px">🎉 Gata! ${vMist?`Cu ${vMist} încercări greșite.`:'Din prima!'} Reține: <b>T</b>, <b>D</b> → ADN · <b>U</b>, <b>R</b> → ARN · <b>A, G, C, P</b> → amândouă.</div>`; confetti(14); } } else { vMist++; toast('❌ '+HINT[chip.dataset.v]); } return ok; }});
    dd1.bindAll($$('#vTray [data-chip]',root));
    /* Joc 2: purină / pirimidină */
    const pItems=[['A','pur'],['G','pur'],['C','pir'],['T','pir'],['U','pir']];
    $('#pTray',root).innerHTML=shuffle(pItems).map(([l,z])=>mkChip(l,z,`<span class="base b${l}">${l}</span>${BASE_NAME[l]}`)).join('');
    let pLeft=5;
    const dd2=dragDrop({zones:$$('#pZones .zone',root),onDrop:(chip,z)=>{ const ok=chip.dataset.z===z.dataset.z; if(ok){ chip.classList.add('good'); chip.dataset.locked=1; addXP(2); if(--pLeft===0){ $('#pOut',root).innerHTML=`<div class="res ok" style="margin-top:10px">🎉 Bravo! <b>Purinice: A, G</b> (Ag = argint pur) · <b>Pirimidinice: C, T, U</b> (CUT).</div>`; confetti(10); } } else toast('❌ '+(isPurine(chip.dataset.v)?'Are 2 inele → purinică.':'Are un singur inel → pirimidinică.')); return ok; }});
    dd2.bindAll($$('#pTray [data-chip]',root));
    /* decodor nume */
    const decode=code=>{ const b=code[0], p=code[1], isDna=p==='D';
      $('#dOut',root).innerHTML=`<div class="row" style="justify-content:center;gap:14px;align-items:center"><div class="center">${baseChip(b)}<div class="small"><b>${b}</b> = ${BASE_NAME[b]}</div></div><b>+</b><div class="center">${sugarIcon(p,34)}<div class="small"><b>${p}</b> = ${isDna?'dezoxiriboză':'riboză'}</div></div><b>+</b><div class="center">${phosIcon(34)}<div class="small"><b>P</b> = fosfat</div></div></div><div class="res ok" style="margin-top:10px;display:inline-block"><b>${code}</b> = nucleotidă de <b>${isDna?'ADN':'ARN'}</b></div>`; };
    const dnaCodes=['ADP','GDP','CDP','TDP'], rnaCodes=['ARP','URP','CRP','GRP'];
    $('#dDna',root).innerHTML=dnaCodes.map(c=>`<button class="chip" data-c="${c}">${c}</button>`).join(''); $('#dRna',root).innerHTML=rnaCodes.map(c=>`<button class="chip" data-c="${c}">${c}</button>`).join('');
    $$('[data-c]',root).forEach(b=>b.onclick=()=>{ $$('[data-c]',root).forEach(x=>x.classList.toggle('on',x===b)); decode(b.dataset.c); });
    decode('TDP'); $('[data-c=TDP]',root).classList.add('on');
    /* constructorul */
    let task=null, filled=0, dd3=null;
    function newTask(){
      const tp=pick(['ADN','ARN']), b=pick(tp==='ADN'?['A','G','C','T']:['A','G','C','U']); task={type:tp,b,s:tp==='ADN'?'D':'R'}; filled=0;
      $('#bTask',root).innerHTML=`🎯 Construiește o nucleotidă de <b>${tp}</b> care conține baza ${baseChip(b)} (${BASE_NAME[b]}). Trage cele 3 piese potrivite în căsuțe.`;
      $$('.slot',root).forEach(s=>{ s.classList.remove('full'); $('.zbox',s).innerHTML=''; });
      const chips=[['phos','P',`<span class="sg">${phosIcon()}</span>fosfat (P)`],['sugar','D',`<span class="sg">${sugarIcon('D')}</span>dezoxiriboză`],['sugar','R',`<span class="sg">${sugarIcon('R')}</span>riboză`],...['A','G','C','T','U'].map(l=>['base',l,`<span class="base b${l}">${l}</span>${BASE_NAME[l]}`])];
      $('#bTray',root).innerHTML=shuffle(chips).map(([c,v,h])=>`<div class="dchip" data-chip data-cat="${c}" data-v="${v}">${h}</div>`).join('');
      $('#bOut',root).innerHTML=''; if(dd3) dd3.clearSel();
      dd3=dragDrop({zones:$$('.slot',root),onDrop:(chip,z)=>{
        const cat=chip.dataset.cat, v=chip.dataset.v;
        if(cat!==z.dataset.slot){ toast(`❌ Aici intră ${z.dataset.slot==='phos'?'fosfatul':z.dataset.slot==='sugar'?'zahărul':'baza azotată'}, nu ${cat==='phos'?'fosfatul':cat==='sugar'?'zahărul':'o bază'}.`); return false; }
        if($('.zbox',z).children.length){ toast('Căsuța e deja ocupată.'); return false; }
        if(cat==='sugar'&&v!==task.s){ toast(`❌ În ${task.type} pentoza este ${task.s==='D'?'dezoxiriboza (D)':'riboza (R)'}.`); return false; }
        if(cat==='base'&&v!==task.b){ toast(v==='T'&&task.type==='ARN'?'❌ T e doar în ADN — în ARN avem uracil.':v==='U'&&task.type==='ADN'?'❌ U e doar în ARN — în ADN avem timină.':`❌ Baza cerută este ${task.b}.`); return false; }
        chip.classList.add('good'); chip.dataset.locked=1; z.classList.add('full'); addXP(2);
        if(++filled===3){ $('#bOut',root).innerHTML=`<div class="res ok" style="margin-top:12px;text-align:center">🎉 Nucleotida este gata: <b>${task.b}${task.s}P</b> — nucleotidă de ${task.type}${nucAssembled(task.type,task.b)}<button class="btn sm" id="bNew" style="margin-top:8px">Altă sarcină</button></div>`; confetti(12); $('#bNew',root).onclick=newTask; }
        return true; }});
      dd3.bindAll($$('#bTray [data-chip]',root));
    }
    newTask();
  }
});
