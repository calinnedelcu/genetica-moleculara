'use strict';
/* ============ LECȚIA 10 — Tipurile de ARN ============ */

/* ---------- ilustrații de viruși ---------- */
function phageSVG(){
  const rna=`<path d="M46 62 q8 -10 16 0 t16 0 M44 78 q8 -10 16 0 t16 0 M46 94 q8 -10 16 0 t16 0 M50 110 q8 -10 16 0 t12 0" fill="none" stroke="#14b8a6" stroke-width="3.4" stroke-linecap="round"/>`;
  let s=`<defs><linearGradient id="gHeadP" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#c7d2fe"/><stop offset="1" stop-color="#6366f1"/></linearGradient></defs>`;
  s+=`<polygon points="70,22 114,46 114,98 70,122 26,98 26,46" fill="url(#gHeadP)" stroke="#3730a3" stroke-width="2.4" stroke-linejoin="round"/>`;
  s+=`<g stroke="#fff" stroke-opacity=".35" stroke-width="1.6"><line x1="70" y1="22" x2="70" y2="122"/><line x1="26" y1="46" x2="114" y2="98"/><line x1="26" y1="98" x2="114" y2="46"/></g>`+rna;
  s+=`<circle cx="70" cy="136" r="8" fill="#94a3b8" stroke="#475569" stroke-width="2"/>`;
  return `<svg viewBox="0 0 140 160" width="100%" style="max-height:170px">${s}</svg>`;
}
function vmtSVG(){
  let s=`<defs><linearGradient id="gRod" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#bbf7d0"/><stop offset=".6" stop-color="#4ade80"/><stop offset="1" stop-color="#15803d"/></linearGradient></defs>`;
  s+=`<rect x="26" y="34" width="150" height="52" rx="10" fill="url(#gRod)" stroke="#166534" stroke-width="2.4"/>`;
  for(let k=0;k<12;k++){ const x=40+k*11; s+=`<path d="M${x} 36 q8 24 0 48" fill="none" stroke="#166534" stroke-opacity=".38" stroke-width="2"/>`; }
  s+=`<rect x="14" y="32" width="46" height="56" rx="10" fill="var(--card)" stroke="#166534" stroke-width="2.4" opacity=".92"/>`;
  s+=`<path d="M18 60 q7 -22 14 0 t14 0 t12 0" fill="none" stroke="#14b8a6" stroke-width="4" stroke-linecap="round"/><path d="M18 60 q7 22 14 0 t14 0 t12 0" fill="none" stroke="#0f766e" stroke-width="4" stroke-linecap="round" opacity=".5"/>`;
  s+=`<ellipse cx="60" cy="60" rx="6" ry="27" fill="none" stroke="#166534" stroke-width="2.2"/>`;
  return `<svg viewBox="0 0 200 120" width="100%" style="max-height:170px">${s}<text class="t-xs" x="38" y="106" text-anchor="middle">ARN</text></svg>`;
}
function fluSVG(){
  let s=`<defs><radialGradient id="gFlu" cx="35%" cy="30%" r="80%"><stop offset="0" stop-color="#fecaca"/><stop offset=".6" stop-color="#f87171"/><stop offset="1" stop-color="#b91c1c"/></radialGradient></defs>`;
  for(let k=0;k<24;k++){ const a=k/24*Math.PI*2, c=k%2?'#fb923c':'#fde68a'; const x1=80+50*Math.cos(a), y1=80+50*Math.sin(a), x2=80+64*Math.cos(a), y2=80+64*Math.sin(a); s+=`<line x1="${f1(x1)}" y1="${f1(y1)}" x2="${f1(x2)}" y2="${f1(y2)}" stroke="#7f1d1d" stroke-width="3"/><circle cx="${f1(x2)}" cy="${f1(y2)}" r="4.2" fill="${c}" stroke="#7f1d1d" stroke-width="1.4"/>`; }
  s+=`<circle cx="80" cy="80" r="50" fill="url(#gFlu)" stroke="#7f1d1d" stroke-width="2.4"/><circle cx="80" cy="80" r="37" fill="#fff" opacity=".42"/>`;
  [[62,60],[84,56],[100,74],[88,98],[64,92],[50,76],[76,76]].forEach(([x,y],i)=>{ s+=`<path d="M${x-9} ${y} q4.5 -8 9 0 t9 0" fill="none" stroke="#14b8a6" stroke-width="3.2" stroke-linecap="round" transform="rotate(${i*40} ${x} ${y})"/>`; });
  return `<svg viewBox="0 0 160 160" width="100%" style="max-height:170px">${s}</svg>`;
}

/* ---------- ribozomul ---------- */
function ribosomeFigure(){
  const rr=(x,y,c)=>`<path d="M${x} ${y} q6 -10 12 0 t12 0 t12 0" fill="none" stroke="${c}" stroke-width="3" stroke-linecap="round"/>`;
  let s=`<ellipse cx="270" cy="236" rx="116" ry="22" fill="#0b1020" opacity=".12"/>`;
  s+=`<ellipse cx="260" cy="198" rx="110" ry="82" fill="url(#gRibL)" stroke="#312e81" stroke-width="3"/><ellipse cx="226" cy="160" rx="44" ry="22" fill="url(#gHi)"/>`;
  s+=`<ellipse cx="262" cy="104" rx="64" ry="48" fill="url(#gRibS)" stroke="#075985" stroke-width="3"/><ellipse cx="240" cy="86" rx="26" ry="14" fill="url(#gHi)"/>`;
  /* ARNr în interior: porțiuni bicatenare */
  s+=rr(212,196,'#ccfbf1')+rr(236,214,'#ccfbf1')+rr(214,232,'#ccfbf1')+rr(250,180,'#ccfbf1')+rr(238,102,'#e0f2fe')+rr(250,120,'#e0f2fe');
  for(let k=0;k<4;k++) s+=`<line x1="${296+k*9}" y1="${186+k*3}" x2="${296+k*9}" y2="${206+k*3}" stroke="#ccfbf1" stroke-width="3" stroke-linecap="round"/>`;
  /* ARNm */
  s+=`<path d="M40 86 C100 86 140 96 214 104" fill="none" stroke="#14b8a6" stroke-width="6" stroke-linecap="round"/><path d="M214 104 C230 108 240 100 262 98" fill="none" stroke="#14b8a6" stroke-width="6" stroke-linecap="round" opacity=".9"/>`;
  s+=pill(80,62,'ARNm',{fs:14,fill:'#14b8a6',color:'#fff',stroke:'transparent'});
  s+=callout(512,40,326,92,'subunitate mică',{fs:13,fill:'#0284c7',color:'#fff',stroke:'transparent',anchor:'end'});
  s+=callout(512,250,364,206,'subunitate mare',{fs:13,fill:'#4338ca',color:'#fff',stroke:'transparent',anchor:'end'});
  s+=`<text class="t-lg" x="260" y="290" text-anchor="middle">(150 – 250 Å)</text>`;
  return s;
}

/* ---------- ARNt: frunza de trifoi ---------- */
const TR_PAIRS={acc:[['G','C'],['C','G'],['U','A'],['A','U']],dst:[['G','C'],['C','G'],['U','A']],tst:[['G','C'],['A','U'],['C','G']],ast:[['C','G'],['U','A'],['G','C'],['A','U'],['C','G']]};
function trnaGeometry(){
  const bases=[], pairs=[], D2R=Math.PI/180;
  const add=(x,y,l,part)=>{ const b={x,y,l,part,i:bases.length}; bases.push(b); return b; };
  /* tulpina acceptoare (sus): accL / accR numerotate de jos în sus */
  const accL=[],accR=[]; TR_PAIRS.acc.forEach(([a,b],k)=>{ const y=186-k*22; accL.push(add(207,y,a,'acc')); accR.push(add(233,y,b,'acc')); pairs.push([accL[k],accR[k]]); });
  /* brațul D (stânga) */
  const dU=[],dL=[]; TR_PAIRS.dst.forEach(([a,b],k)=>{ const x=190-k*22; dU.push(add(x,217,a,'d')); dL.push(add(x,243,b,'d')); pairs.push([dU[k],dL[k]]); });
  const dC=[146-20-27.9,230], dLoop=[]; ['A','G','C','U','U','A','G'].forEach((l,k)=>{ const th=(325-k*48.3)*D2R; dLoop.push(add(dC[0]+34*Math.cos(th),dC[1]+34*Math.sin(th),l,'loop')); });
  /* brațul anticodonului (jos) */
  const aL=[],aR=[]; TR_PAIRS.ast.forEach(([a,b],k)=>{ const y=272+k*22; aL.push(add(207,y,a,'ast')); aR.push(add(233,y,b,'ast')); pairs.push([aL[k],aR[k]]); });
  const aC=[220,360+22+27.8], aLoop=[]; ['C','U','U','A','G','A','C'].forEach((l,k)=>{ const th=(235-k*48.3)*D2R; aLoop.push(add(aC[0]+34*Math.cos(th),aC[1]+34*Math.sin(th),l,k>=2&&k<=4?'anti':'loop')); });
  /* brațul T (dreapta) */
  const tU=[],tL=[]; TR_PAIRS.tst.forEach(([a,b],k)=>{ const x=250+k*22; tU.push(add(x,217,a,'t')); tL.push(add(x,243,b,'t')); pairs.push([tU[k],tL[k]]); });
  const tC=[294+20+27.9,230], tLoop=[]; ['U','U','C','G','A','A','U'].forEach((l,k)=>{ const th=(145-k*48.3)*D2R; tLoop.push(add(tC[0]+34*Math.cos(th),tC[1]+34*Math.sin(th),l,'loop')); });
  /* coada CCA */
  const tail=[add(241,100,'C','acc'),add(254,83,'C','acc'),add(269,69,'A','acc')];
  /* ordinea scheletului 5′ → 3′ */
  const chain=[...[...accL].reverse(),...dU,...dLoop,...[...dL].reverse(),...aL,...aLoop,...[...aR].reverse(),...tL,...tLoop,...[...tU].reverse(),...accR,...tail];
  return {bases,pairs,chain,anticodon:[aLoop[2],aLoop[3],aLoop[4]],tail};
}
const TRNA=trnaGeometry();
function trnaSVG(hl,codon){
  const {bases,pairs,chain,anticodon,tail}=TRNA, on=k=>hl.includes(k);
  let s='';
  const stemBases=new Set(bases.filter(b=>['acc','d','t','ast'].includes(b.part)&&!tail.includes(b)).map(b=>b.i));
  /* panglica scheletului */
  s+=ribbon(chain.map(b=>[b.x,b.y]),'#14b8a6',5.5,{op:.95});
  /* perechi */
  pairs.forEach(([a,b])=>{ const n=bondsOf(a.l==='U'?'A':a.l,b.l==='U'?'A':b.l); s+=`<g class="${on('stem')?'':''}"><line x1="${f1(a.x)}" y1="${f1(a.y)}" x2="${f1(b.x)}" y2="${f1(b.y)}" stroke="${on('stem')?'#f59e0b':'#94a3b8'}" stroke-width="${n===3?4.5:3}" stroke-dasharray="3 2.5" stroke-linecap="round"/></g>`; });
  /* baze */
  bases.forEach(b=>{ const isAnti=anticodon.includes(b), isStem=stemBases.has(b.i), dim=on('stem')&&!isStem||on('loop')&&isStem||on('anti')&&!isAnti||on('aa')&&!tail.includes(b);
    s+=ball(b.x,b.y,b.l,9.5,{op:hl.length&&dim?.28:1,glow:(on('anti')&&isAnti)||(on('aa')&&tail.includes(b))}); });
  /* aminoacid */
  const aa=tail[2];
  s+=`<g class="hot trn" data-p="aa" opacity="${hl.length&&!on('aa')?.35:1}"><line x1="${aa.x+8}" y1="${aa.y-8}" x2="${aa.x+22}" y2="${aa.y-20}" stroke="#16a34a" stroke-width="4" stroke-linecap="round"/><circle cx="${aa.x+30}" cy="${aa.y-27}" r="15" fill="url(#gbG)" stroke="#166534" stroke-width="1.6"${on('aa')?' filter="url(#fGlow)"':''}/><text x="${aa.x+30}" y="${aa.y-23}" text-anchor="middle" class="bl" style="font-size:11px">aa</text></g>`;
  s+=`<text class="t-sm" x="${aa.x+54}" y="${aa.y-24}">aminoacid</text>`;
  /* zone clicabile (transparente) */
  s+=`<g class="hot trn" data-p="stem"><rect x="193" y="104" width="54" height="104" rx="12" fill="transparent"/><rect x="104" y="204" width="172" height="50" rx="12" fill="transparent"/><rect x="193" y="258" width="54" height="116" rx="12" fill="transparent"/></g>`;
  s+=`<g class="hot trn" data-p="loop"><circle cx="98" cy="230" r="46" fill="transparent"/><circle cx="342" cy="230" r="46" fill="transparent"/></g>`;
  s+=`<g class="hot trn" data-p="anti"><circle cx="220" cy="410" r="44" fill="transparent"/></g>`;
  /* codon (ARNm) */
  if(codon){ const base=anticodon; s+=base.map((b,k)=>`<line x1="${f1(b.x)}" y1="${f1(b.y+13)}" x2="${f1(b.x)}" y2="${f1(b.y+48)}" stroke="#f59e0b" stroke-width="3" stroke-dasharray="4 3" stroke-linecap="round"/>`).join('');
    s+=base.map((b,k)=>ball(b.x,b.y+62,codon[k],9.5,{})).join(''); s+=`<text class="t-sm" x="${f1(base[2].x+24)}" y="${f1(base[2].y+66)}">codon (ARNm)</text>`;
    s+=`<text class="t-b" x="${f1(base[2].x+24)}" y="${f1(base[2].y+2)}" style="fill:#d97706">anticodon</text>`; }
  return s;
}

/* ---------- mica fabrică de proteine (traducere) ---------- */
const MRNA=['AUG','GCU','CCA','UAC','GGA'], BEAD=['#ef4444','#3b82f6','#22c55e','#f59e0b','#a855f7'];
function transScene(t){
  const X0=62, DX=98, yM=96, T0=2.2, DK=4.4;
  const cxk=k=>X0+k*DX+DX/2-8;
  const stepOf=k=>T0+k*DK;
  /* poziția ribozomului: alunecă spre codonul curent */
  let rx=cxk(0); for(let k=1;k<MRNA.length;k++){ rx=lerp(rx,cxk(k),eio(seg(t,stepOf(k)-.2,stepOf(k)+.9))); }
  let s=cytoBg(620,440,9,14);
  /* ARNm */
  const pts=[[20,yM+8]]; MRNA.forEach((c,k)=>{ [0,1,2].forEach(j=>pts.push([X0+k*DX+j*28+14,yM+8])); }); pts.push([600,yM+8]);
  s+=ribbon(pts,'#14b8a6',6);
  MRNA.forEach((c,k)=>{ const act=t>=stepOf(k)-.2&&t<stepOf(k)+DK-.4; s+=`<rect x="${X0+k*DX-4}" y="${yM-26}" width="92" height="64" rx="14" fill="${act?'#fef3c7':'var(--card)'}" opacity="${act?.9:.55}" stroke="${act?'#f59e0b':'var(--line)'}" stroke-width="2"/>`; [...c].forEach((b,j)=>{ s+=ball(X0+k*DX+j*28+14,yM+8,b,12.5); }); });
  s+=`<text class="t-sm" x="22" y="${yM-34}">ARNm →</text>`;
  /* ribozom */
  s+=`<g><ellipse cx="${f1(rx)}" cy="262" rx="94" ry="64" fill="url(#gRibL)" stroke="#312e81" stroke-width="3"/><ellipse cx="${f1(rx-28)}" cy="232" rx="38" ry="17" fill="url(#gHi)"/><ellipse cx="${f1(rx)}" cy="168" rx="70" ry="34" fill="url(#gRibS)" stroke="#075985" stroke-width="3"/><ellipse cx="${f1(rx-20)}" cy="158" rx="24" ry="10" fill="url(#gHi)"/></g>`;
  s+=`<text class="t-w" x="${f1(rx-52)}" y="${296}" style="font-size:12px;opacity:.9">subunitate mare</text><text class="t-w" x="${f1(rx+22)}" y="${186}" style="font-size:11px;opacity:.9">mică</text>`;
  /* ARNm iese prin ribozom: segment gros peste subunitatea mică */
  /* lanț de aminoacizi */
  const chain=[]; let tr='';
  for(let k=0;k<MRNA.length;k++){ const a=stepOf(k)+2.5, p=eio(seg(t,a,a+.9)); if(p>0){ const ex=[cxk(k)-8,300+12*Math.sin(k*.9)], from=[cxk(k)+2,238]; chain.push({x:lerp(from[0],ex[0],p),y:lerp(from[1],ex[1],p)+34*Math.sin(Math.PI*p)*0,k,p}); } }
  const cp=chain.map(c=>[c.x,c.y]); if(cp.length>1) s+=ribbon(cp,'#94a3b8',5);
  chain.forEach(c=>{ s+=`<circle cx="${f1(c.x)}" cy="${f1(c.y)}" r="14" fill="${BEAD[c.k]}" stroke="#fff" stroke-width="2.4" opacity="${f1(.25+.75*c.p)}"/><ellipse cx="${f1(c.x-4)}" cy="${f1(c.y-5)}" rx="4.5" ry="2.8" fill="#fff" opacity=".5"/>`; });
  if(chain.length) s+=`<text class="t-sm" x="${f1(chain[0].x-6)}" y="${f1(chain[0].y+34)}" text-anchor="middle">lanț de aminoacizi (proteina)</text>`;
  /* ARNt */
  const trnaAt=k=>{
    const a=stepOf(k), f=eio(seg(t,a+.2,a+1.9)), l=eio(seg(t,a+3.3,a+4.2));
    if(t<a+.2||l>=1) return '';
    const xc=X0+k*DX+42, anti=[...MRNA[k]].map(b=>COMP_RNA[b]).join('');
    let g=`<g opacity="${f1(1-l)}" transform="translate(${f1((1-f)*240+l*150)} ${f1((1-f)*260-l*30)})">`;
    g+=`<rect x="${xc-8}" y="${yM+58}" width="16" height="72" rx="8" fill="#ec4899" stroke="#9d174d" stroke-width="2"/><circle cx="${xc-32}" cy="${yM+88}" r="13" fill="#ec4899" stroke="#9d174d" stroke-width="2"/><circle cx="${xc+32}" cy="${yM+88}" r="13" fill="#ec4899" stroke="#9d174d" stroke-width="2"/><rect x="${xc-32}" y="${yM+82}" width="64" height="12" rx="6" fill="#ec4899"/><rect x="${xc-48}" y="${yM+32}" width="96" height="30" rx="15" fill="#fbcfe8" stroke="#9d174d" stroke-width="2"/>`;
    g+=`<text class="t-w" x="${xc}" y="${yM+114}" text-anchor="middle" style="font-size:11px">ARNt</text>`;
    [...anti].forEach((b,j)=>{ g+=ball(X0+k*DX+j*28+14,yM+47,b,10); });
    g+=`<circle cx="${xc}" cy="${yM+140}" r="14" fill="${BEAD[k]}" stroke="#fff" stroke-width="2.4" opacity="${f1(1-seg(t,a+2.4,a+2.9))}"/>`;
    g+='</g>';
    if(f>=1&&l<=0){ const h=eio(seg(t,a+1.9,a+2.5)); g+=[0,1,2].map(j=>`<line x1="${X0+k*DX+j*28+14}" y1="${yM+22}" x2="${X0+k*DX+j*28+14}" y2="${f1(lerp(yM+22,yM+34,h))}" stroke="#f59e0b" stroke-width="3" stroke-dasharray="3 2.5" stroke-linecap="round"/>`).join(''); }
    return g; };
  for(let k=0;k<MRNA.length;k++) s+=trnaAt(k);
  /* etichete */
  if(t<2.2) s+=pill(310,396,'ARNm se atașează de subunitatea mică a ribozomului',{fs:13,fill:'var(--brand)',color:'#fff',stroke:'transparent'});
  if(t>=2.4&&t<8) s+=pill(310,396,'ARNt aduce un aminoacid · anticodonul se potrivește cu codonul',{fs:13,fill:'#ec4899',color:'#fff',stroke:'transparent'});
  if(t>=stepOf(MRNA.length-1)+3.4) s+=pill(310,396,'🎉 proteina este gata',{fs:14,fill:'#16a34a',color:'#fff',stroke:'transparent'});
  return s;
}

LESSONS.push({
  id:'arn', icon:'clover', title:'Tipurile de ARN', sub:'ARN viral, ARNm, ARNt, ARNr și ribozomul', topic:'arn', mins:20, ac1:'#ec4899', ac2:'#8b5cf6',
  html:()=>`
  ${secH(1,'Două mari categorii: viral și celular')}
  ${nb(`<p><u>Tipuri de ARN</u> { <b>viral</b><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>celular</b></p>
    <p><b>ARN viral</b> = materialul genetic al virusurilor<br>ex: <b>bacteriofagi</b>, <b>VMT</b> (virusul mozaicului tutunului), <b>v. gripal</b> etc.</p>`)}
  <div class="card" style="border-top:5px solid #10b981"><h3>🦠 ARN viral — „cartea de rețete” a unor virusuri</h3>
    <p>La unii virusuri, <b>informația ereditară</b> nu este scrisă în ADN, ci în <b>ARN</b>: ARN-ul este <b>materialul lor genetic</b>. Exemple:</p>
    <div class="grid3" style="align-items:end">
      <div class="center"><div class="stage pad">${phageSVG()}</div><b>Bacteriofag</b><div class="small muted">virus care atacă bacterii</div></div>
      <div class="center"><div class="stage pad" style="display:grid;place-items:center;min-height:196px">${vmtSVG()}</div><b>VMT</b><div class="small muted">virusul mozaicului tutunului</div></div>
      <div class="center"><div class="stage pad">${fluSVG()}</div><b>Virus gripal</b><div class="small muted">provoacă gripa</div></div>
    </div></div>

  ${secH(2,'ARN celular (din celule)')}
  ${nb(`<p><b>ARN celular</b> – <b>ARN mesager</b> (ARNm) = monocatenar; lungime variabilă (în funcție de moleculă)<br>Rol: copiator de inf. genetică din molecula de ADN pt. a fi utilizată în sinteza proteică</p><p>– <b>ARN de transfer / solubil</b> = ARNt</p>`)}
  <div class="grid3">
    <div class="card" style="margin:0;border-top:5px solid #14b8a6"><h3>📨 ARN mesager (ARNm)</h3><p class="small">• <b>monocatenar</b><br>• <b>lungime variabilă</b><br>• rol: <b>copiază informația genetică din ADN</b>, pentru a fi folosită în <b>sinteza proteică</b></p><svg viewBox="0 0 200 60" style="width:100%"><path d="M8 30 q10 -22 20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0" fill="none" stroke="#14b8a6" stroke-width="5" stroke-linecap="round"/></svg></div>
    <div class="card" style="margin:0;border-top:5px solid #ec4899"><h3>🍀 ARN de transfer (ARNt)</h3><p class="small">• numit și <b>ARN solubil</b><br>• <b>monocatenar cu regiuni bicatenare</b> (frunză de trifoi)<br>• rol: <b>transferă aminoacizi</b> în citoplasmă la locul sintezei proteice</p><div class="center"><svg viewBox="0 0 120 84" width="130"><g fill="#ec4899"><circle cx="22" cy="34" r="14"/><circle cx="98" cy="34" r="14"/><circle cx="60" cy="68" r="14"/></g><rect x="52" y="6" width="16" height="54" rx="8" fill="#ec4899"/><rect x="22" y="26" width="76" height="16" rx="8" fill="#ec4899"/></svg></div></div>
    <div class="card" style="margin:0;border-top:5px solid #6366f1"><h3>🏭 ARN ribozomal (ARNr)</h3><p class="small">• prezintă <b>regiuni bicatenare</b><br>• <b>intră în alcătuirea ribozomilor</b><br>• rol: <b>în sinteza ribozomilor</b></p><div class="center"><svg viewBox="0 0 120 100" width="120"><ellipse cx="60" cy="64" rx="38" ry="28" fill="url(#gRibL)"/><ellipse cx="60" cy="30" rx="24" ry="18" fill="url(#gRibS)"/></svg></div></div>
  </div>
  <div class="callout tip"><b>Cine ce face?</b> <b>ARNm</b> = „mesagerul” (poartă rețeta) · <b>ARNt</b> = „camionul” (aduce aminoacizii) · <b>ARNr</b> = „fabrica” (ribozomul în care se asamblează proteina).</div>

  ${secH(3,'ARNt — „frunza de trifoi”')}
  ${nb(`<p>ARN<sub>t</sub> = <b>monocatenar</b> cu regiuni <b>bicatenare</b> (aspect de frunză de trifoi)</p>
    <p>– se atașează un <b>anticodon</b> (codon corespunzător din ARN<sub>m</sub>)</p><p>ARN<sub>t</sub>: rol → <b>transferă aminoacizi</b> în citoplasmă la locul sintezei proteice</p>`)}
  <p>ARNt este o <b>singură catenă</b> care se <b>pliază</b> și, în unele porțiuni, bazele se împerechează (A–U, C–G): apar <b>regiuni bicatenare</b> (tulpini) și <b>bucle</b> — de aici forma de trifoi. Apasă pe cipurile de mai jos ca să evidențiezi fiecare parte:</p>
  <div class="card">
    <div class="row" style="justify-content:center" id="tChips"><button class="chip" data-h="stem">regiuni bicatenare</button><button class="chip" data-h="loop">bucle monocatenare</button><button class="chip" data-h="anti">anticodon</button><button class="chip" data-h="aa">aminoacid</button><button class="chip on" data-h="">toate</button></div>
    <div class="stage pad" style="margin-top:10px"><svg id="trnaSvg" viewBox="40 12 400 520" style="max-width:440px;margin:auto"></svg></div>
    <div class="res info" id="tInfo">👆 Alege o parte a ARNt.</div>
  </div>
  <div class="callout key"><b>Anticodon ↔ codon:</b> anticodonul din ARNt se atașează de <b>codonul corespunzător din ARNm</b>, pe baza complementarității: <b>U–A, A–U, G–C</b> (în ARN nu există T!). Exemplu: anticodon <b>UAG</b> ↔ codon <b>AUC</b>.</div>
  <h3 style="margin-top:20px">🎯 Joc: găsește anticodonul</h3>
  <div class="card" id="acGame"></div>

  ${secH(4,'ARN ribozomal și ribozomul')}
  ${nb(`<p>→ <b>ARN ribozomal (ARNr)</b></p><p>– prezintă <b>regiuni bicatenare</b><br>– <b>intră în alcătuirea ribozomilor</b><br>rol: <b>în sinteza ribozomilor</b></p><p><u>Ribozomul</u>: ARNm → <b>subunitate mică</b>, <b>subunitate mare</b> (150–250 Å = 150–250 · 10<sup>−10</sup> m)</p>`)}
  <div class="callout key"><b>Cât de mic e un ribozom?</b> <b>1 Å (angstrom) = 10<sup>−10</sup> m</b> (adică 0,1 nm). Deci <b>150–250 Å = 15–25 nm</b> — de câteva mii de ori mai mic decât grosimea unui fir de păr.</div>
  <div class="stage pad hs"><svg viewBox="0 0 520 310" style="max-width:600px;margin:auto">${ribosomeFigure()}</svg></div>
  <p style="margin-top:14px"><b>Ribozomul</b> are <b>două subunități</b>: una <b>mică</b> (de care se atașează <b>ARNm</b>) și una <b>mare</b>. Ele sunt făcute din <b>ARNr</b> (în culoare deschisă, în interior) și proteine. Urmărește „mica fabrică de proteine”: ARNm trece prin ribozom, iar ARNt aduc aminoacizii potriviți:</p>
  <div id="tsPlayer"></div>
  <div class="callout tip"><b>Pe scurt:</b> <b>ADN</b> →(transcripție)→ <b>ARNm</b> →(ribozom + ARNt)→ <b>proteină</b>. Cele trei ARN-uri celulare lucrează împreună.</div>

  ${secH(5,'Tabel recapitulativ')}
  <div class="card tbl-wrap"><table><tr><th>Tip</th><th>Structură</th><th>Rol</th></tr>
    <tr><td><b>ARN viral</b></td><td>—</td><td>material genetic al unor virusuri (bacteriofagi, VMT, virus gripal)</td></tr>
    <tr><td><b>ARNm</b> (mesager)</td><td>monocatenar, lungime variabilă</td><td>copiază informația genetică din ADN pentru sinteza proteică</td></tr>
    <tr><td><b>ARNt</b> (transfer / solubil)</td><td>monocatenar cu regiuni bicatenare (frunză de trifoi); are anticodon</td><td>transferă aminoacizi în citoplasmă la locul sintezei proteice</td></tr>
    <tr><td><b>ARNr</b> (ribozomal)</td><td>regiuni bicatenare</td><td>intră în alcătuirea ribozomilor</td></tr></table></div>`,
  init(root){
    /* ARNt */
    let hl=[]; const sv=$('#trnaSvg',root), info=$('#tInfo',root);
    const TXT={stem:'<b>Regiuni bicatenare</b> (tulpini): ARNt este monocatenar, dar se pliază și, în unele zone, bazele se împerechează complementar (A–U, C–G). De aici forma de frunză de trifoi.',loop:'<b>Buclele</b> sunt porțiuni <b>monocatenare</b>: bazele lor nu se împerechează între ele.',anti:'<b>Anticodonul</b>: 3 baze (aici <b>UAG</b>) care se atașează de <b>codonul</b> corespunzător din ARNm (aici <b>AUC</b>): U–A, A–U, G–C.',aa:'<b>Aminoacidul</b>: ARNt îl <b>transferă</b> în citoplasmă la locul sintezei proteice (ribozom).','':'<b>ARNt</b> = monocatenar cu regiuni bicatenare, aspect de <b>frunză de trifoi</b>. Are un <b>anticodon</b> și transportă un <b>aminoacid</b>.'};
    const dr=()=>{ sv.innerHTML=trnaSVG(hl,'AUC'); };
    $$('#tChips .chip',root).forEach(b=>b.onclick=()=>{ $$('#tChips .chip',root).forEach(x=>x.classList.toggle('on',x===b)); const k=b.dataset.h; hl=k?[k]:[]; info.innerHTML=TXT[k]; dr(); });
    sv.addEventListener('click',e=>{ const g=e.target.closest('.trn'); if(!g) return; const k=g.dataset.p; $$('#tChips .chip',root).forEach(x=>x.classList.toggle('on',x.dataset.h===k)); hl=[k]; info.innerHTML=TXT[k]; dr(); });
    info.innerHTML=TXT['']; dr();
    /* joc anticodon */
    const box=$('#acGame',root); let score=0, rounds=0;
    function round(){
      if(rounds>=6){ box.innerHTML=`<h3>Scor: ${score}/6</h3><p>${score>=5?'🏆 Super!':'🔁 Mai încearcă!'}</p><button class="btn" id="acAgain">Din nou</button>`; $('#acAgain',box).onclick=()=>{score=0;rounds=0;round();}; if(score>=5) confetti(12); return; }
      const codon=Array.from({length:3},()=>pick('AUCG')).join(''), good=[...codon].map(b=>COMP_RNA[b]).join('');
      const bad=new Set(); const cand=[codon,good.replace(/U/g,'T'),[...good].reverse().join(''),[...codon].map(b=>COMP_DNA[b]||b).join('').replace(/U/g,'T')];
      cand.forEach(c=>{ if(c!==good&&bad.size<3) bad.add(c); }); while(bad.size<3){ const r=Array.from({length:3},()=>pick('AUCG')).join(''); if(r!==good) bad.add(r); }
      const opts=shuffle([good,...bad]);
      box.innerHTML=`<div class="small muted">Runda ${rounds+1}/6</div><p style="margin:6px 0">Codonul din ARNm: ${seqHtml(codon)} — care e <b>anticodonul</b> din ARNt?</p><div class="row">${opts.map(o=>`<button class="btn ghost" data-o="${o}" style="letter-spacing:.15em">${o}</button>`).join('')}</div><div id="acFb"></div>`;
      $$('[data-o]',box).forEach(b=>b.onclick=()=>{ const ok=b.dataset.o===good; if(ok){score++;addXP(3);} rounds++;
        $$('[data-o]',box).forEach(x=>{ x.disabled=true; if(x.dataset.o===good) x.classList.add('ok'); }); if(!ok) b.classList.add('bad');
        $('#acFb',box).innerHTML=`<div class="res ${ok?'ok':'bad'}" style="margin-top:8px">${ok?'✅':'❌'} ${codon} → <b>${good}</b> (A–U, C–G; în ARN nu există T)</div>`; setTimeout(round,ok?900:1700); });
    }
    round();
    /* traducere */
    scenePlayer($('#tsPlayer',root),{dur:26,vb:'0 0 620 440',label:'Mica fabrică de proteine',render:transScene,intro:'Apasă ▶ ca să pornești sinteza proteinei.',
      chapters:[{t:0,title:'ARNm și ribozomul',cap:'<b>ARNm</b> ajunge la <b>ribozom</b> și se atașează de <b>subunitatea mică</b>. Subunitatea mare stă dedesubt.'},
        {t:2.4,title:'ARNt aduce aminoacidul',cap:'Un <b>ARNt</b> vine în citoplasmă cu un <b>aminoacid</b>; <b>anticodonul</b> lui se potrivește cu <b>codonul</b> din ARNm (complementaritate).'},
        {t:4.8,title:'Aminoacidul intră în lanț',cap:'Aminoacidul se adaugă la <b>lanțul proteic</b>, iar ARNt-ul eliberat pleacă.'},
        {t:6.8,title:'Ribozomul avansează',cap:'Ribozomul se mută pe următorul codon și procesul se repetă: se formează <b>proteina</b>, aminoacid cu aminoacid.'}]});
  }
});
