'use strict';
/* ============ LECȚIA 5 — Complementaritatea bazelor ============ */

/* perechea de baze, ca două piese care se potrivesc */
function pairDemo(base,mode,p){
  const comp=(mode==='adn'?COMP_DNA:COMP_RNA)[base], xL=60, xR=340, y=96, n=bondsOf(base,comp);
  let s=`<line x1="${xL}" y1="30" x2="${xL}" y2="162" stroke="#334155" stroke-width="7" stroke-linecap="round"/><line x1="${xR}" y1="30" x2="${xR}" y2="162" stroke="#f97316" stroke-width="7" stroke-linecap="round"/>`;
  s+=phos(xL,40,6)+phos(xL,152,6)+phos(xR,40,6)+phos(xR,152,6)+sugar(xL,y,10)+sugar(xR,y,10);
  s+=tile(xL,y,base,1,{h:34})+tile(xR,y,comp,-1,{h:34});
  const t1=tileTip(xL,base,1), t2=tileTip(xR,comp,-1);
  s+=hb(t1+4,t2-4,y,n,{p});
  s+=`<g opacity="${f1(clamp(p*1.4))}">${pill((t1+t2)/2,y-46,n===3?'C ≡ G · 3 legături H':(comp==='U'||base==='U'?'A = U · 2 legături H':'A = T · 2 legături H'),{fs:13,fill:n===3?'#f59e0b':'#3b82f6',color:'#fff',stroke:'transparent'})}</g>`;
  /* lățime constantă */
  s+=`<path d="M${xL} 186 H${xR}" stroke="var(--muted)" stroke-width="2"/><path d="M${xL} 180 v12 M${xR} 180 v12" stroke="var(--muted)" stroke-width="2"/>`;
  s+=`<text class="t-sm" x="${(xL+xR)/2}" y="208" text-anchor="middle">purină (mare) + pirimidină (mică) = mereu aceeași lățime</text>`;
  return s;
}

/* scara pentru jocul „completează catena” */
function ladderSVG(seq,mode,pos,newest){
  const comp=mode==='adn'?COMP_DNA:COMP_RNA, xL=150, xR=370, y0=48, dy=54, n=seq.length;
  let s=`<line x1="${xL}" y1="${y0-26}" x2="${xL}" y2="${y0+(n-1)*dy+26}" stroke="#334155" stroke-width="7" stroke-linecap="round"/><line x1="${xR}" y1="${y0-26}" x2="${xR}" y2="${y0+(n-1)*dy+26}" stroke="${pos>0?'#f97316':'var(--line)'}" stroke-width="7" stroke-linecap="round" opacity="${pos>0?1:.8}"/>`;
  for(let i=0;i<n;i++){
    const y=y0+i*dy, l=seq[i], c=comp[l], done=i<pos;
    s+=tile(xL,y,l,1,{})+sugar(xL,y,9);
    if(i<n-1) s+=phos(xL,y+dy/2,5.2);
    if(done){ const pp=(i===newest)?1:1; s+=`<g class="${i===newest?'svg-pop':''}">${tile(xR,y,c,-1,{})}${sugar(xR,y,9)}${hb(tileTip(xL,l,1)+3,tileTip(xR,c,-1)-3,y,bondsOf(l,c))}</g>`; if(i<n-1&&i<pos-1) s+=phos(xR,y+dy/2,5.2); s+=`<text class="t-sm" x="${xR+78}" y="${y+4}">${bondsOf(l,c)} H</text>`; }
    else if(i===pos){ s+=`<rect x="${xR-9-36}" y="${y-13}" width="36" height="26" rx="9" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="2" stroke-dasharray="5 4"><animate attributeName="opacity" values="1;.35;1" dur="1.2s" repeatCount="indefinite"/></rect><text x="${xR-9-18}" y="${y+6}" text-anchor="middle" style="font:900 16px var(--font);fill:var(--brand)">?</text>`+sugar(xR,y,9); }
    else s+=`<rect x="${xR-9-36}" y="${y-13}" width="36" height="26" rx="9" fill="none" stroke="var(--line)" stroke-width="2" stroke-dasharray="5 4"/>`+sugar(xR,y,9);
  }
  s+=`<text class="t-sm" x="${xL}" y="${y0-34}" text-anchor="middle">catena dată</text><text class="t-sm" x="${xR}" y="${y0-34}" text-anchor="middle">catena ta</text>`;
  return s;
}

/* diagrama circulară pentru procente */
function donutSVG(a){
  const g=(100-2*a)/2, vals=[['A',a],['T',a],['G',g],['C',g]], cx=150, cy=150, R=120, r=64;
  let a0=-Math.PI/2, s='';
  vals.forEach(([l,v])=>{
    const a1=a0+v/100*2*Math.PI, lg=v>50?1:0, p=(ang,rad)=>[cx+rad*Math.cos(ang),cy+rad*Math.sin(ang)];
    const o0=p(a0,R), o1=p(a1,R), i1=p(a1,r), i0=p(a0,r), m=p((a0+a1)/2,(R+r)/2);
    s+=`<path d="M${f1(o0[0])} ${f1(o0[1])} A${R} ${R} 0 ${lg} 1 ${f1(o1[0])} ${f1(o1[1])} L${f1(i1[0])} ${f1(i1[1])} A${r} ${r} 0 ${lg} 0 ${f1(i0[0])} ${f1(i0[1])}Z" fill="url(#gt${l})" stroke="var(--card)" stroke-width="3" stroke-linejoin="round"/>`;
    s+=`<text x="${f1(m[0])}" y="${f1(m[1]-2)}" text-anchor="middle" class="bl" style="font-size:20px">${l}</text><text x="${f1(m[0])}" y="${f1(m[1]+15)}" text-anchor="middle" style="font:900 13px var(--font);fill:#fff;paint-order:stroke;stroke:rgba(0,0,0,.35);stroke-width:2px">${v}%</text>`;
    a0=a1;
  });
  s+=`<text x="${cx}" y="${cy-4}" text-anchor="middle" class="t-lg">ADN</text><text x="${cx}" y="${cy+14}" text-anchor="middle" class="t-sm">100%</text>`;
  return s;
}

/* ---------- problemă tip: N nucleotide, a% A ---------- */
function probCalc(N,a){ const g=(100-2*a)/2, nA=N*a/100, nC=N*g/100; return {N,a,g,nA,nC,pAT:nA,pCG:nC,hAT:2*nA,hCG:3*nC,hTot:2*nA+3*nC}; }
function solveSteps(N,a){ const p=probCalc(N,a); return [
  `<b>Datele.</b> Molecula are <b>N = ${N}</b> nucleotide (în total, pe ambele catene) și <b>${a}% A</b>. Cerem: <b>% C</b> și numărul de legături <b>„=”</b> și <b>„≡”</b>.`,
  `<b>A = T.</b> În ADN bicatenar adenina se leagă de timină ⇒ <b>T = ${a}%</b>. Împreună: A + T = ${2*a}%.`,
  `<b>G = C.</b> Rămân 100% − ${2*a}% = <b>${100-2*a}%</b> pentru G + C. Cum C = G ⇒ <b>C = ${100-2*a}% : 2 = ${p.g}%</b> (și G = ${p.g}%).`,
  `<b>Câte nucleotide?</b> A = T = ${a}% · ${N} = <b>${p.nA}</b>; C = G = ${p.g}% · ${N} = <b>${p.nC}</b>. Verificare: ${p.nA} + ${p.nA} + ${p.nC} + ${p.nC} = ${N} ✓`,
  `<b>Câte „legături” (perechi)?</b> Fiecare pereche A=T conține un A și un T ⇒ <b>${p.pAT} legături „=”</b>. Fiecare pereche C≡G ⇒ <b>${p.pCG} legături „≡”</b>. Verificare: ${p.pAT} + ${p.pCG} = ${p.pAT+p.pCG} perechi = ${N} : 2 ✓`,
  `<b>Bonus — legături de hidrogen individuale.</b> A=T are <b>2</b> legături de H, C≡G are <b>3</b> ⇒ ${p.pAT}·2 + ${p.pCG}·3 = ${p.hAT} + ${p.hCG} = <b>${p.hTot}</b>.`
]; }
function pbarHtml(a){ const g=(100-2*a)/2; return `<div class="pbar"><div style="width:${a}%;background:var(--A)">A ${a}%</div><div style="width:${a}%;background:var(--T)">T ${a}%</div><div style="width:${g}%;background:var(--G)">G ${g}%</div><div style="width:${g}%;background:var(--C)">C ${g}%</div></div>`; }

LESSONS.push({
  id:'compl', icon:'pair', title:'Complementaritatea bazelor', sub:'A = T, C ≡ G — regula de aur din tot capitolul', topic:'compl', mins:15, ac1:'#f59e0b', ac2:'#ef4444',
  html:()=>`
  ${secH(1,'Regula de aur')}
  ${nb(`<p>În molecula de <b>ADN</b>: o bază azotată <b>purinică</b> se leagă de una <b>pirimidică</b> și invers prin <b>legături de H</b></p>
    <p>A = T , T = A<br>C ≡ G , G ≡ C</p>
    <p>În molecula <b>ARN</b> – în reg. <b>bicatenară</b>:<br>A = U , U = A<br>C ≡ G , G ≡ C</p>`)}
  <div class="grid3">
    <div class="callout key" style="margin:0"><b>1.</b> Purină ↔ pirimidină, mereu.</div>
    <div class="callout key" style="margin:0"><b>2.</b> Se țin prin <b>legături de hidrogen (H)</b>.</div>
    <div class="callout key" style="margin:0"><b>3.</b> <b>A=T</b> (2 legături) · <b>C≡G</b> (3 legături). În ARN: <b>A=U</b>.</div>
  </div>
  <p style="margin-top:14px">Alege o bază și vezi cu cine se potrivește. Observă: perechea e formată mereu dintr-o piesă <b>lungă</b> (purină: A, G) și una <b>scurtă</b> (pirimidină: C, T, U), așa că toate treptele „scării” au aceeași lățime.</p>
  <div class="card">
    <div class="row" style="justify-content:space-between"><div class="seg" id="cMode"><button class="on" data-m="adn">ADN</button><button data-m="arn">ARN (reg. bicatenară)</button></div><div class="row" id="cPick"></div></div>
    <div class="stage pad" style="margin-top:12px"><svg id="pdemo" viewBox="0 0 400 220" style="max-width:560px;margin:auto"></svg></div>
  </div>
  <div class="callout tip"><b>Truc:</b> numărul de liniuțe din semn = numărul de legături H. <b>A=T</b> are 2 liniuțe → 2 legături; <b>C≡G</b> are 3 → 3 legături. De aceea perechea <b>C≡G</b> este „mai strânsă” (mai greu de desfăcut).</div>

  ${secH(2,'Bonus: cum arată perechile „la microscop”')}
  <p>Legăturile de hidrogen se formează între atomii de <b>N</b> și <b>O</b> ai celor două baze. Poți să vezi că <b>A–T</b> ține cu <b>2</b> legături, iar <b>G–C</b> cu <b>3</b>. Apasă pe o legătură (linia portocalie) pentru detalii.</p>
  <div class="card">
    <div class="seg" id="mpType"><button class="on" data-k="AT">A – T</button><button data-k="GC">G – C</button><button data-k="AU">A – U (ARN)</button></div>
    <div class="stage pad" style="margin-top:12px"><svg id="mpSvg" viewBox="8 66 372 196" style="max-width:640px;margin:auto"></svg></div>
    <div class="res info" id="mpInfo">👆 Apasă pe o linie portocalie punctată.</div>
  </div>

  ${secH(3,'Joc: completează catena complementară')}
  <div class="card">
    <div class="row" style="justify-content:space-between"><div class="seg" id="gMode"><button class="on" data-m="adn">ADN (A–T)</button><button data-m="arn">ARN bicatenar (A–U)</button></div><span class="small muted" id="gScore"></span></div>
    <div class="stage pad" style="margin-top:12px"><svg id="gSvg" viewBox="0 0 500 380" style="max-width:520px;margin:auto"></svg></div>
    <div class="row" id="gBtns" style="justify-content:center;margin-top:10px"></div>
    <div id="gOut"></div>
  </div>

  ${secH(4,'Procentele de baze într-un ADN bicatenar')}
  <p>Fiindcă <b>A = T</b> și <b>C = G</b> (ca număr), procentele se leagă între ele. Mută cursorul pentru procentul de adenină:</p>
  <div class="card"><div class="grid2" style="align-items:center"><div class="stage pad"><svg id="dnSvg" viewBox="0 0 300 300" style="max-width:300px;margin:auto"></svg></div>
    <div><label class="small muted">% adenină (A)</label><input type="range" id="chRange" min="5" max="45" value="20"><div id="chOut" style="margin-top:10px"></div></div></div>
    <hr class="dash"><div id="chQ"></div></div>

  ${secH(5,'Problemă tipică: câte legături „=” și „≡”?')}
  ${nb(`<p>O moleculă de ADN conține <b>1800</b> de nucleotide dintre care <b>15% A</b>; stabiliți nr., % C și leg. =, ≡</p><p>⇒ 15% T ⇒ 35% C ⇒ <b>630</b><br><b>630</b> leg. ≡<br><b>270</b> leg. =</p>`)}
  <div class="callout warn"><b>Ce înseamnă „leg. =” și „leg. ≡”:</b> <b>270 leg. =</b> și <b>630 leg. ≡</b> sunt <b>numărul de perechi</b> A=T (cu 2 legături de H fiecare) și C≡G (cu 3 legături de H fiecare). Numărul <u>total</u> de legături de hidrogen este 270·2 + 630·3 = <b>2430</b>.</div>
  <p>Hai să o rezolvăm <b>pas cu pas</b>. Apasă „Pasul următor”:</p>
  <div class="card"><div class="grid2" style="align-items:start"><div><div class="solve" id="slv"></div><div class="row" style="margin-top:10px"><button class="btn" id="slvNext">Pasul următor ▶</button><button class="btn ghost sm" id="slvAll">arată tot</button><button class="btn ghost sm" id="slvReset">↺</button></div></div><div><div id="slvBar"></div><div class="stage pad" id="slvStage" style="display:none"><svg id="slvDonut" viewBox="0 0 300 300" style="max-width:260px;margin:auto"></svg></div></div></div></div>
  <h3 style="margin-top:20px">🎯 Încearcă tu: o problemă nouă</h3>
  <div class="card" id="prb"></div>`,
  init(root){
    /* explorator perechi */
    let mode='adn', base='A', p=1, busy=false;
    const pd=$('#pdemo',root);
    const draw=()=>{ pd.innerHTML=pairDemo(base,mode,p); };
    const picks=()=>{ $('#cPick',root).innerHTML=(mode==='adn'?['A','T','G','C']:['A','U','G','C']).map(b=>`<button class="hot" data-b="${b}" style="border:0;background:none;padding:0;border-radius:50%;${b===base?'outline:3px solid var(--brand);outline-offset:2px':''}"><span class="base b${b}" style="width:40px;height:40px;font-size:1.15rem">${b}</span></button>`).join(''); $$('#cPick [data-b]',root).forEach(b=>b.onclick=async()=>{ if(busy) return; busy=true; base=b.dataset.b; picks(); p=0; draw(); await tween(700,q=>{ p=q; draw(); },pd,eio); p=1; draw(); busy=false; addXP(1); }); };
    $$('#cMode button',root).forEach(b=>b.onclick=()=>{ mode=b.dataset.m; $$('#cMode button',root).forEach(x=>x.classList.toggle('on',x===b)); if(mode==='adn'&&base==='U') base='T'; if(mode==='arn'&&base==='T') base='U'; picks(); p=1; draw(); });
    picks(); draw();
    /* perechi chimice */
    let kind='AT';
    const mp=$('#mpSvg',root), mi=$('#mpInfo',root);
    const mpDraw=()=>{ const f=pairFigure(kind,{L:32,g:78,cx:140,cy:150}); mp.innerHTML=f.svg; mp.dataset.n=f.bonds.length; mp._b=f.bonds; };
    const BNAME={AT:['NH₂ (din A) ··· O (din T)','N (din A) ··· H–N (din T)'],AU:['NH₂ (din A) ··· O (din U)','N (din A) ··· H–N (din U)'],GC:['O (din G) ··· H–N (din C)','H–N (din G) ··· N (din C)','H–N (din G) ··· O (din C)']};
    mp.addEventListener('click',e=>{ const g=e.target.closest('.hbond'); if(!g) return; const i=+g.dataset.i; mi.innerHTML=`<b>Legătura de H nr. ${i+1}</b> (din ${mp._b.length}): ${BNAME[kind][i]}.<br><span class="muted small">Un atom de H legat de N sau O este atras de un alt atom de N sau O de pe baza vecină.</span>`; });
    $$('#mpType button',root).forEach(b=>b.onclick=()=>{ kind=b.dataset.k; $$('#mpType button',root).forEach(x=>x.classList.toggle('on',x===b)); mi.innerHTML=kind==='GC'?'<b>G ≡ C</b>: <b>3</b> legături de H.':kind==='AT'?'<b>A = T</b>: <b>2</b> legături de H.':'<b>A = U</b> (în ARN): <b>2</b> legături de H. Uracilul seamănă cu timina, dar nu are grupa CH₃.'; mpDraw(); });
    mpDraw();
    /* joc */
    let gm='adn', seq=[], pos=0, mist=0, total=0;
    const gs=$('#gSvg',root), gOut=$('#gOut',root);
    function newGame(){ const pool=gm==='adn'?['A','T','C','G']:['A','U','C','G']; seq=Array.from({length:6},()=>pick(pool)); pos=0; mist=0; gOut.innerHTML=''; btns(); gdraw(-1); }
    function gdraw(newest){ gs.innerHTML=ladderSVG(seq,gm,pos,newest); }
    function btns(){ const letters=gm==='adn'?['A','T','C','G']:['A','U','C','G']; $('#gBtns',root).innerHTML=pos<seq.length?letters.map(l=>`<button class="hot" data-l="${l}" style="border:0;background:none;padding:0;border-radius:50%"><span class="base b${l}" style="width:46px;height:46px;font-size:1.3rem">${l}</span></button>`).join(''):''; $$('#gBtns [data-l]',root).forEach(b=>b.onclick=()=>answer(b)); $('#gScore',root).textContent=pos<seq.length?`Greșeli: ${mist}`:''; }
    function answer(b){
      const comp=gm==='adn'?COMP_DNA:COMP_RNA, need=comp[seq[pos]];
      if(b.dataset.l===need){ pos++; addXP(1); gdraw(pos-1); btns(); if(pos===seq.length) finish(); }
      else { mist++; b.classList.add('shake'); setTimeout(()=>b.classList.remove('shake'),400); toast(`❌ ${seq[pos]} nu se leagă cu ${b.dataset.l}. Gândește: ${gm==='adn'?'A↔T, C↔G':'A↔U, C↔G'} (purină ↔ pirimidină).`); $('#gScore',root).textContent=`Greșeli: ${mist}`; }
    }
    function finish(){
      const comp=gm==='adn'?COMP_DNA:COMP_RNA; total=seq.reduce((s,b)=>s+bondsOf(b,comp[b]),0);
      gOut.innerHTML=`<div class="res info" style="margin-top:12px"><b>Bonus:</b> câte legături de hidrogen are, în total, fragmentul?<div class="row" style="margin-top:8px"><input type="number" id="hIn" min="0" max="40" placeholder="?" style="max-width:100px;letter-spacing:0;text-align:center"><button class="btn sm" id="hGo">Verifică</button><button class="btn ghost sm" id="gNew">Altă secvență</button></div><div id="hOut"></div></div>`;
      $('#gNew',root).onclick=newGame;
      $('#hGo',root).onclick=()=>{ const v=+$('#hIn',root).value, ok=v===total; $('#hOut',root).innerHTML=`<div class="res ${ok?'ok':'bad'}" style="margin-top:8px">${ok?'✅ Corect! ':'❌ Nu chiar. '}${seq.map(b=>bondsOf(b,comp[b])).join(' + ')} = <b>${total}</b> legături de H (A=T / A=U → 2, C≡G → 3).${mist===0&&ok?' 🎉 Fără nicio greșeală!':''}</div>`; if(ok){ addXP(5); confetti(8); } };
    }
    $$('#gMode button',root).forEach(b=>b.onclick=()=>{ gm=b.dataset.m; $$('#gMode button',root).forEach(x=>x.classList.toggle('on',x===b)); newGame(); });
    newGame();
    /* procente */
    const r=$('#chRange',root), out=$('#chOut',root), dn=$('#dnSvg',root);
    const upd=()=>{ const a=+r.value, g=(100-2*a)/2; dn.innerHTML=donutSVG(a); out.innerHTML=`<div class="kv"><span>${baseChip('A')} = ${baseChip('T')} = <b>${a}%</b></span><span>${baseChip('G')} = ${baseChip('C')} = <b>${g}%</b></span></div><p class="small muted" style="margin-top:10px">A + T = ${2*a}% → rămân ${100-2*a}% pentru G + C → fiecare ${g}%.<br><b>Purine</b> (A+G) = <b>${a+g}%</b> și <b>pirimidine</b> (T+C) = <b>${a+g}%</b>.</p>`; };
    r.oninput=upd; upd();
    /* probleme */
    let prob=null;
    function newProb(){ const a=pick([10,15,20,25,30,35]), ask=pick(['T','G','C']), ans=ask==='T'?a:(100-2*a)/2; prob={a,ask,ans};
      $('#chQ',root).innerHTML=`<b>Problemă:</b> într-un ADN bicatenar, <b>${a}%</b> dintre baze sunt adenină. Cât la sută este ${ask==='T'?'timina':ask==='G'?'guanina':'citozina'} (${ask})?<div class="row" style="margin-top:8px"><input type="number" id="pIn" placeholder="%" style="max-width:100px;letter-spacing:0;text-align:center"><button class="btn sm" id="pGo">Verifică</button><button class="btn ghost sm" id="pNew">Altă problemă</button></div><div id="pOut"></div>`;
      $('#pNew',root).onclick=newProb; $('#pGo',root).onclick=()=>{ const ok=+$('#pIn',root).value===prob.ans; $('#pOut',root).innerHTML=`<div class="res ${ok?'ok':'bad'}" style="margin-top:8px">${ok?'✅ Corect!':'❌ Nu chiar.'} ${prob.ask==='T'?`A = T → ${prob.ans}%.`:`A + T = ${2*prob.a}% → G + C = ${100-2*prob.a}% → ${prob.ask} = ${prob.ans}%.`}</div>`; if(ok) addXP(3); }; }
    newProb();
    /* ---- problemă tip: rezolvare pas cu pas ---- */
    const slv=$('#slv',root); let sN=1800, sA=15, sK=0;
    const drawSolve=()=>{ const st=solveSteps(sN,sA); slv.innerHTML=st.slice(0,sK).map((t,i)=>`<div class="st"><b class="n">${i+1}</b><div>${t}</div></div>`).join('')||'<p class="muted" style="margin:0">Apasă „Pasul următor” ca să începi.</p>'; $('#slvBar',root).innerHTML=sK>=3?pbarHtml(sA):''; $('#slvDonut',root).innerHTML=sK>=3?donutSVG(sA):''; $('#slvStage',root).style.display=sK>=3?'block':'none'; $('#slvNext',root).disabled=sK>=st.length; };
    $('#slvNext',root).onclick=()=>{ sK++; drawSolve(); if(sK===6) addXP(3); };
    $('#slvAll',root).onclick=()=>{ sK=6; drawSolve(); };
    $('#slvReset',root).onclick=()=>{ sK=0; drawSolve(); };
    drawSolve();
    /* ---- generator de probleme similare ---- */
    const prb=$('#prb',root); let P=null;
    function newP(){
      let N,a; do{ N=pick([1000,1200,1500,1800,2000,2400,3000,3200]); a=pick([10,15,20,25,30,35]); }while(!Number.isInteger(N*a/100)||!Number.isInteger(N*((100-2*a)/2)/100));
      P=probCalc(N,a);
      prb.innerHTML=`<p style="margin-top:0"><b>O moleculă de ADN conține ${N} de nucleotide, dintre care ${a}% A.</b> Stabilește:</p>
        <div class="inp-row"><div><label>% C</label><input type="number" id="pC" placeholder="?"></div><div><label>nr. nucleotide C</label><input type="number" id="pNC" placeholder="?"></div><div><label>nr. legături „=” (perechi A=T)</label><input type="number" id="pAT" placeholder="?"></div><div><label>nr. legături „≡” (perechi C≡G)</label><input type="number" id="pCG" placeholder="?"></div><div><label>bonus: legături H în total</label><input type="number" id="pH" placeholder="?"></div></div>
        <div class="row" style="margin-top:12px"><button class="btn" id="pCheck">Verifică</button><button class="btn ghost sm" id="pShow">arată rezolvarea</button><button class="btn ghost sm" id="pNewBtn">Altă problemă</button></div><div id="pRes"></div>`;
      $('#pNewBtn',prb).onclick=newP;
      $('#pShow',prb).onclick=()=>{ $('#pRes',prb).innerHTML=`<div class="callout key" style="margin-top:12px">${solveSteps(P.N,P.a).map((t,i)=>`<p><b>${i+1}.</b> ${t}</p>`).join('')}</div>`; };
      $('#pCheck',prb).onclick=()=>{
        const rows=[['pC',P.g,'% C'],['pNC',P.nC,'nr. C'],['pAT',P.pAT,'legături „=”'],['pCG',P.pCG,'legături „≡”'],['pH',P.hTot,'legături H (bonus)']];
        let good=0, req=0, html='';
        rows.forEach(([id,ans,lab],i)=>{ const raw=$('#'+id,prb).value, v=raw===''?null:+raw, ok=v===ans; if(i<4){ req++; if(ok) good++; } html+=`<span class="chip" style="${ok?'border-color:var(--ok);background:var(--ok-bg)':v===null?'':'border-color:var(--bad);background:var(--bad-bg)'}">${ok?'✅':v===null?'…':'❌'} ${lab}${ok?'':v===null?'':' ≠ '+v}</span> `; });
        const all=good===req;
        const msg=all?`🎉 Corect! Verificare: ${P.pAT} perechi A=T + ${P.pCG} perechi C≡G = ${P.pAT+P.pCG} perechi = ${P.N} : 2 ✓`:'Ai greșit sau ai lăsat câmpuri goale — apasă „arată rezolvarea” dacă vrei pașii.';
        $('#pRes',prb).innerHTML=`<div class="res ${all?'ok':'info'}" style="margin-top:12px"><div class="chips">${html}</div>${msg}</div>`;
        if(all){ addXP(8); confetti(10); }
      };
    }
    newP();
  }
});
