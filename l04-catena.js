'use strict';
/* ============ LECȚIA 4 — O catenă de nucleotide ============ */

/* ADN (helix, 2 catene) vs ARN (o catenă), animat */
function helixVsRna(t){
  let s='';
  const seqD=['A','C','T','G','G','A','T','C','C','G','T','A','A','C','G','T','T','A'];
  /* ---- ADN ---- */
  const cx=140, y0=44, y1=268, ph=t*.9;
  const segs=[];
  for(let y=y0;y<y1;y+=3){
    const a=((y-y0)/92)*Math.PI*2+ph, a2=((y+3-y0)/92)*Math.PI*2+ph;
    const x1=cx+40*Math.sin(a), x1b=cx+40*Math.sin(a2), z=Math.cos((a+a2)/2);
    segs.push({z,s:`<line x1="${f1(x1)}" y1="${y}" x2="${f1(x1b)}" y2="${y+3}" stroke="var(--old)" stroke-width="6" stroke-linecap="round"/>`});
    segs.push({z:-z,s:`<line x1="${f1(2*cx-x1)}" y1="${y}" x2="${f1(2*cx-x1b)}" y2="${y+3}" stroke="#f97316" stroke-width="6" stroke-linecap="round"/>`});
  }
  let rungs='';
  for(let i=0,y=y0+6;y<y1-4;y+=15,i++){ const a=((y-y0)/92)*Math.PI*2+ph, x1=cx+40*Math.sin(a), x2=2*cx-x1, b=seqD[i%seqD.length], c=COMP_DNA[b], m=(x1+x2)/2;
    rungs+=`<line x1="${f1(x1)}" y1="${y}" x2="${f1(m)}" y2="${y}" stroke="${BASE_COLOR[b]}" stroke-width="6" stroke-linecap="round"/><line x1="${f1(m)}" y1="${y}" x2="${f1(x2)}" y2="${y}" stroke="${BASE_COLOR[c]}" stroke-width="6" stroke-linecap="round"/>`; }
  s+=rungs+segs.sort((a,b)=>a.z-b.z).map(q=>q.s).join('');
  s+=`<circle cx="${cx-46}" cy="30" r="13" fill="#334155"/><text x="${cx-46}" y="35" text-anchor="middle" class="t-w">1</text><circle cx="${cx+46}" cy="30" r="13" fill="#f97316"/><text x="${cx+46}" y="35" text-anchor="middle" class="t-w">2</text>`;
  s+=`<text class="t-lg" x="${cx}" y="296" text-anchor="middle" style="fill:#3b82f6">ADN</text><text class="t-sm" x="${cx}" y="314" text-anchor="middle">bicatenar (de obicei 99%)</text>`;
  /* ---- ARN ---- */
  const rx=390, pts=[]; for(let y=y0-6;y<=y1+6;y+=6) pts.push([rx+26*Math.sin((y-y0)/38+t*1.1)+8*Math.sin((y-y0)/17-t*1.6),y]);
  s+=ribbon(pts,'#14b8a6',7);
  const seqR=['A','U','G','C','C','U','A','G','U','C','G','A'];
  seqR.forEach((b,i)=>{ const y=y0+4+i*19.5, x=rx+26*Math.sin((y-y0)/38+t*1.1)+8*Math.sin((y-y0)/17-t*1.6); s+=`<line x1="${f1(x)}" y1="${f1(y)}" x2="${f1(x+14)}" y2="${f1(y)}" stroke="#5b6b86" stroke-width="2.4"/>`+ball(x+24,y,b,9.5); });
  s+=`<circle cx="${rx-30}" cy="30" r="13" fill="#14b8a6"/><text x="${rx-30}" y="35" text-anchor="middle" class="t-w">1</text>`;
  s+=`<text class="t-lg" x="${rx}" y="296" text-anchor="middle" style="fill:#14b8a6">ARN</text><text class="t-sm" x="${rx}" y="314" text-anchor="middle">monocatenar (de obicei 99%)</text>`;
  return s;
}

/* ---------- legătura fosfodiesterică ---------- */
function phosphoFigure(show){
  const r=46, ring=c=>({O:[c[0],c[1]-r],C1:[c[0]+.951*r,c[1]-.309*r],C2:[c[0]+.588*r,c[1]+.809*r],C3:[c[0]-.588*r,c[1]+.809*r],C4:[c[0]-.951*r,c[1]-.309*r]});
  const c1=[300,112], c2=[353,337], R1=ring(c1), R2=ring(c2);
  const C5a=[R1.C4[0]-34,R1.C4[1]-28], C5b=[275,297];
  const O1=[R1.C3[0]-26,R1.C3[1]+34], P=[O1[0]-20,O1[1]+42], O2=[P[0]+20,P[1]+42], Oe=[P[0]-46,P[1]-6], Om=[P[0]-44,P[1]+34];
  const pent=R=>[R.O,R.C1,R.C2,R.C3,R.C4].map(p=>p.map(f1).join(',')).join(' ');
  const ln=(a,b,w=3.2,c='var(--ink)',ex='')=>`<line x1="${f1(a[0])}" y1="${f1(a[1])}" x2="${f1(b[0])}" y2="${f1(b[1])}" stroke="${c}" stroke-width="${w}" stroke-linecap="round" ${ex}/>`;
  const car=(p,t,s=13)=>`<circle cx="${f1(p[0])}" cy="${f1(p[1])}" r="${s}" fill="var(--brand)" stroke="#fff" stroke-width="2"/><text x="${f1(p[0])}" y="${f1(p[1]+4)}" text-anchor="middle" class="t-w" style="font-size:10.5px">${t}</text>`;
  const oxy=(p,t='O',s=11)=>`<circle cx="${f1(p[0])}" cy="${f1(p[1])}" r="${s}" fill="url(#gOx)" stroke="#fff" stroke-width="2"/><text x="${f1(p[0])}" y="${f1(p[1]+4)}" text-anchor="middle" class="t-w" style="font-size:11px">${t}</text>`;
  let s='<g transform="translate(46 0)">';
  /* banda evidențiată a legăturii fosfodiesterice */
  const hi=show;
  s+=`<polyline points="${[R1.C3,O1,P,O2,C5b].map(p=>p.map(f1).join(',')).join(' ')}" fill="none" stroke="#fbbf24" stroke-width="${hi?34:20}" stroke-linecap="round" stroke-linejoin="round" opacity="${hi?.5:.28}"/>`;
  s+=`<polygon points="${pent(R1)}" fill="var(--brand)" fill-opacity=".08" stroke="var(--ink)" stroke-width="3" stroke-linejoin="round"/><polygon points="${pent(R2)}" fill="var(--brand)" fill-opacity=".08" stroke="var(--ink)" stroke-width="3" stroke-linejoin="round"/>`;
  s+=ln(R1.C4,C5a)+ln(C5a,[C5a[0]-30,C5a[1]-26],3,'var(--muted)','stroke-dasharray="5 5"')+ln(R1.C1,[R1.C1[0]+52,R1.C1[1]-14])+ln(R1.C3,O1)+ln(O1,P)+ln(P,O2)+ln(O2,C5b)+ln(C5b,R2.C4)+ln(R2.C1,[R2.C1[0]+50,R2.C1[1]-14])+ln(R2.C3,[R2.C3[0]-24,R2.C3[1]+40])+ln(P,Oe,3.2)+ln(P,Om);
  s+=`<line x1="${f1(P[0]-2)}" y1="${f1(P[1]-5)}" x2="${f1(Oe[0]-2)}" y2="${f1(Oe[1]-5)}" stroke="var(--ink)" stroke-width="3" stroke-linecap="round"/>`;
  /* baze */
  const base=(p,l)=>`<g transform="translate(${f1(p[0])} ${f1(p[1])})"><rect x="0" y="-22" width="84" height="44" rx="13" fill="url(#gt${l})" stroke="${PAL[l][2]}" stroke-width="1.6"/><rect x="5" y="-18" width="74" height="13" rx="6" fill="#fff" opacity=".25"/><text x="42" y="9" text-anchor="middle" class="bl" style="font-size:24px">${l}</text></g>`;
  s+=base([R1.C1[0]+52,R1.C1[1]-14],'A')+base([R2.C1[0]+50,R2.C1[1]-14],'C');
  s+=`<text class="t-sm" x="${f1(R1.C1[0]+94)}" y="${f1(R1.C1[1]-52)}" text-anchor="middle">bază azotată</text><text class="t-sm" x="${f1(R2.C1[0]+92)}" y="${f1(R2.C1[1]-52)}" text-anchor="middle">bază azotată</text>`;
  /* atomi */
  s+=oxy(R1.O)+oxy(R2.O)+car(R1.C1,'C1′')+car(R1.C2,'C2′')+car(R1.C3,'C3′')+car(R1.C4,'C4′')+car(C5a,'C5′')+car(R2.C1,'C1′')+car(R2.C2,'C2′')+car(R2.C3,'C3′')+car(R2.C4,'C4′')+car(C5b,'C5′');
  s+=oxy(O1)+oxy(O2)+oxy(Oe,'O')+oxy(Om,'O⁻',12)+phos(P[0],P[1],19);
  s+=`<text x="${f1(P[0])}" y="${f1(P[1]+5.5)}" text-anchor="middle" style="font:900 17px var(--font);fill:#6b3d00">P</text>`;
  /* etichete */
  s+=pill(C5a[0]-34,C5a[1]-34,'5′ (capăt)',{fs:12,fill:'#1e293b',color:'#fff',stroke:'transparent'});
  s+=pill(R2.C3[0]-36,R2.C3[1]+54,'3′ (capăt, OH)',{fs:12,fill:'#1e293b',color:'#fff',stroke:'transparent'});
  s+=callout(P[0]+138,P[1]+2,P[0]+24,P[1]+2,'radical fosfat (P)',{fs:12});
  s+=`<g class="hot lnk-hit" data-k="link"><line x1="${f1(O1[0]-100)}" y1="${f1(O1[1]-6)}" x2="${f1(O1[0]-13)}" y2="${f1(O1[1]-1)}" stroke="#f59e0b" stroke-width="2"/>${pill(O1[0]-150,O1[1]-8,'legătură fosfodiesterică',{fs:13,fill:'#f59e0b',color:'#fff',stroke:'transparent'})}</g>`;
  s+='</g>';
  s+=arrow(20,50,20,440,'#94a3b8',4,12)+`<text class="t-sm" transform="translate(36 245) rotate(-90)" text-anchor="middle">sensul catenei: 5′ → 3′</text>`;
  return s;
}

/* ---------- constructorul de catenă ---------- */
function chainSVG(chain,mode,anim){
  const X=150, y0=100, dy=62, n=chain.length, H=Math.max(300,y0+n*dy+60), D=mode==='ADN'?'D':'R';
  let s='', links='', units='';
  if(n){ s+=`<text class="t-b" x="10" y="${y0-34}">capăt 5′</text><text class="t-sm" x="10" y="${y0-18}">(fosfat liber)</text>`; }
  chain.forEach((l,i)=>{
    const y=y0+i*dy, last=i===n-1&&anim<1, p=last?eoc(anim):1, x=last?lerp(X+210,X,p):X, op=last?p:1;
    units+=`<g opacity="${f1(op)}">${tile(x,y,l,1,{})}${sugar(x,y,11)}<text x="${f1(x)}" y="${f1(y+4)}" text-anchor="middle" class="bl" style="font-size:11px">${D}</text>${phos(x,y-30,7.5,{s:1})}<line x1="${f1(x)}" y1="${f1(y-22)}" x2="${f1(x)}" y2="${f1(y-11)}" stroke="#5b6b86" stroke-width="3"/></g>`;
    if(i>0){ const k=last?seg(anim,.7,1):1; links+=`<line x1="${X}" y1="${y-dy+11}" x2="${X}" y2="${f1(lerp(y-dy+11,y-37.5,k))}" stroke="#5b6b86" stroke-width="3.4" stroke-linecap="round"/>`; if(last&&anim>.85) links+=`<circle cx="${X}" cy="${y-24}" r="${f1(8+16*(anim-.85)/.15)}" fill="none" stroke="#fbbf24" stroke-width="3" opacity="${f1(1-(anim-.85)/.15)}"/>`; }
  });
  s+=links+units;
  if(n){ const yb=y0+(n-1)*dy; s+=`<text class="t-b" x="10" y="${yb+40}">capăt 3′</text><text class="t-sm" x="10" y="${yb+56}">(OH liber)</text>`; if(n>1) s+=callout(X+190,y0+dy-24,X+4,y0+dy-24,'legătură fosfodiesterică',{fs:12,fill:'#f59e0b',color:'#fff',stroke:'transparent'}); }
  else s+=`<text class="t-lg" x="200" y="150" text-anchor="middle">Adaugă prima nucleotidă ⬆</text>`;
  return {svg:s,h:H};
}

LESSONS.push({
  id:'catena', icon:'chain', title:'O catenă de nucleotide', sub:'Pentoza, numerotarea carbonilor și legătura fosfodiesterică', topic:'catena', mins:14, ac1:'#14b8a6', ac2:'#0ea5e9',
  html:()=>`
  ${secH(1,'ADN este bicatenar, ARN este monocatenar')}
  ${nb(`<p>ADN – <b>bicatenar</b> (de obicei 99%)<br>ARN – <b>monocatenar</b> (de obicei 99%)</p>`)}
  <p><b>Catenă</b> = un lanț de nucleotide. <b>ADN</b> are în mod obișnuit <b>două</b> catene (1 și 2), răsucite una în jurul celeilalte — de aceea e „bicatenar”. <b>ARN</b> are, de obicei, <b>o singură</b> catenă — „monocatenar”.</p>
  <div class="stage pad"><svg id="hrSvg" viewBox="0 0 520 330" style="max-width:640px;margin:auto"></svg></div>
  <div class="callout tip"><b>Truc:</b> <b>bi</b> = 2 (bicatenar = 2 catene) · <b>mono</b> = 1 (monocatenar = o catenă). Ca la „bicicletă” (2 roți) și „monocicletă” (1 roată).</div>

  ${secH(2,'Pentoza și numerotarea carbonilor (C1′ … C5′)')}
  ${nb(`<p><u>Riboză</u>: pentagon cu O sus; C<sub>1′</sub> dreapta, C<sub>2′</sub> jos-dreapta, C<sub>3′</sub> jos-stânga, C<sub>4′</sub> stânga, C<sub>5′</sub> deasupra lui C<sub>4′</sub>.<br>La C<sub>1′</sub> se leagă <b>baza azotată</b>.</p>`)}
  <p>Atomii de carbon ai pentozei se numerotează <b>C1′, C2′, C3′, C4′, C5′</b> (se citește „C unu prim” etc.; semnul ′ îi deosebește de atomii din bază). Apasă pe fiecare atom ca să vezi ce se leagă acolo:</p>
  <div class="card">
    <div class="row" style="justify-content:space-between"><div class="seg" id="pType"><button data-t="D">Dezoxiriboză (ADN)</button><button class="on" data-t="R">Riboză (ARN)</button></div><span class="small muted">apasă pe cercuri</span></div>
    <div class="stage pad" style="margin-top:10px"><svg id="hwSvg" viewBox="0 0 400 310" style="max-width:520px;margin:auto"></svg></div>
    <div class="res info" id="hwInfo">👆 Alege un atom (C1′ … C5′, O sau P).</div>
  </div>

  ${secH(3,'Legătura fosfodiesterică — cum se țin nucleotidele de mână')}
  ${nb(`<p>Într-o catenă:<br>– nucleotidele se atașează prin <b>legături fosfodiesterice</b> – între <b>C<sub>5′</sub></b> al unei pentoze și <b>C<sub>3′</sub></b> al pentozei următoare, prin intermediul <b>radicalului fosfat</b> <span class="circ">P</span></p>`)}
  <p>Iată legătura desenată: două nucleotide una sub alta. Fosfatul (P) face „puntea” între <b>C3′</b> al primei pentoze și <b>C5′</b> a celei următoare. Apasă pe eticheta aurie ca să evidențiezi legătura.</p>
  <div class="stage pad hs"><svg id="pdSvg" viewBox="0 0 600 470" style="max-width:640px;margin:auto"></svg></div>
  <div class="grid3" style="margin-top:14px">
    <div>
      <div class="callout key" style="margin-top:0"><b>De ce „fosfo-di-ester”?</b> Fosfatul se leagă de <b>două</b> pentoze, prin <b>două</b> legături de tip <b>ester</b> (C–O–P): una la <b>C3′</b>, alta la <b>C5′</b> → <b>di</b>-ester.</div>
    </div><div>
      <div class="callout tip" style="margin-top:0"><b>Sensul catenei:</b> un capăt are un fosfat liber (<b>5′</b>), celălalt un <b>OH</b> liber la C3′ (<b>3′</b>). Catena se citește de la <b>5′ spre 3′</b>.</div>
    </div><div>
      <div class="callout warn" style="margin-top:0"><b>Nu amesteca:</b> legăturile din <u>aceeași</u> catenă sunt <b>fosfodiesterice</b>; cele dintre <u>două</u> catene sunt <b>de hidrogen</b>.</div>
    </div>
  </div>

  ${secH(4,'Construiește tu o catenă')}
  <p>Alege tipul de acid nucleic, apoi adaugă nucleotide pe rând și urmărește cum se leagă. Observă capetele <b>5′</b> (sus) și <b>3′</b> (jos).</p>
  <div class="card">
    <div class="row" style="justify-content:space-between"><div class="seg" id="cType"><button class="on" data-t="ADN">ADN</button><button data-t="ARN">ARN</button></div><div class="row" id="cBtns"></div><button class="btn ghost sm" id="cRnd">🎲 aleator</button><button class="btn ghost sm" id="cClr">↺ șterge</button></div>
    <div class="stage pad" style="margin-top:10px"><svg id="chSvg" viewBox="0 0 400 300" style="max-width:560px;margin:auto"></svg></div>
    <div class="res info" id="chSeq" style="margin-top:10px">Secvența ta va apărea aici.</div>
  </div>`,
  init(root){
    liveSVG($('#hrSvg',root),helixVsRna);
    /* pentoza interactivă */
    let ptype='R', sel='';
    const hw=$('#hwSvg',root), info=$('#hwInfo',root);
    const INFO={
      1:'<b>C1′</b> → aici se leagă <b>baza azotată</b> (A, G, C, T sau U).',
      2:()=>ptype==='R'?'<b>C2′</b> → în <b>riboză</b> are o grupare <b>OH</b>.':'<b>C2′</b> → în <b>dezoxiriboză</b> are doar <b>H</b> (fără oxigen: „dezoxi”). Asta o deosebește de riboză.',
      3:'<b>C3′</b> → aici se leagă, prin intermediul unui fosfat, <b>nucleotida următoare</b> (legătura fosfodiesterică).',
      4:'<b>C4′</b> → face parte din inelul pentozei; de el se leagă C5′.',
      5:'<b>C5′</b> → aici se leagă <b>radicalul fosfat (P)</b> al nucleotidei.',
      O:'<b>O</b> → oxigenul din inelul pentozei (inelul are 4 atomi de C + 1 de O).',
      P:'<b>P</b> → <b>radicalul fosfat</b> al nucleotidei; se prinde de C5′ și face legătura cu nucleotida vecină.'
    };
    const hwDraw=()=>{ hw.innerHTML=haworth(ptype,sel); };
    hw.addEventListener('click',e=>{ const g=e.target.closest('.hc'); if(!g) return; sel=g.dataset.c; const v=INFO[sel]; info.innerHTML=typeof v==='function'?v():v; hwDraw(); });
    $$('#pType button',root).forEach(b=>b.onclick=()=>{ ptype=b.dataset.t; $$('#pType button',root).forEach(x=>x.classList.toggle('on',x===b)); if(sel==='2') info.innerHTML=INFO[2](); hwDraw(); });
    hwDraw();
    /* legătura fosfodiesterică */
    let hl=false; const pd=$('#pdSvg',root); const pdDraw=()=>{ pd.innerHTML=phosphoFigure(hl); };
    pd.addEventListener('click',e=>{ if(e.target.closest('.lnk-hit')){ hl=!hl; pdDraw(); } }); pdDraw();
    /* constructor */
    let mode='ADN', chain=[], anim=1, busy=false;
    const ch=$('#chSvg',root);
    const draw=()=>{ const r=chainSVG(chain,mode,anim); ch.setAttribute('viewBox',`0 0 400 ${r.h}`); ch.innerHTML=r.svg; const el=$('#chSeq',root); if(!el) return; el.innerHTML=chain.length?`Secvența: <b>5′</b> – ${chain.map(baseChip).join(' ')} – <b>3′</b> &nbsp;<span class="muted small">(${chain.length} nucleotide, ${Math.max(0,chain.length-1)} legături fosfodiesterice)</span>`:'Secvența ta va apărea aici.'; };
    function btns(){ $('#cBtns',root).innerHTML=(mode==='ADN'?['A','C','G','T']:['A','C','G','U']).map(b=>`<button class="hot" data-b="${b}" style="border:0;background:none;padding:0;border-radius:50%" aria-label="adaugă ${b}"><span class="base b${b}" style="width:42px;height:42px;font-size:1.25rem">${b}</span></button>`).join(''); $$('#cBtns [data-b]',root).forEach(b=>b.onclick=()=>add(b.dataset.b)); }
    async function add(l){ if(busy) return; if(chain.length>=7){ toast('Destul pentru demonstrație 🙂 Apasă „șterge”.'); return; } busy=true; chain.push(l); anim=0; draw(); await tween(650,p=>{ anim=p; draw(); },ch,eio); anim=1; draw(); busy=false; addXP(1); }
    $$('#cType button',root).forEach(b=>b.onclick=()=>{ mode=b.dataset.t; $$('#cType button',root).forEach(x=>x.classList.toggle('on',x===b)); chain=[]; btns(); draw(); });
    $('#cClr',root).onclick=()=>{ chain=[]; anim=1; draw(); };
    $('#cRnd',root).onclick=async()=>{ chain=[]; draw(); const pool=mode==='ADN'?'ACGT':'ACGU'; for(let i=0;i<5;i++){ await add(pick(pool)); } };
    btns(); chain=['A','C','T']; draw();
  }
});
