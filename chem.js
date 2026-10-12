'use strict';
/* =========================================================
   chem.js — formule structurale: baze azotate, perechi, pentoză
   ========================================================= */
const ATOM_COL = {N:'#2563eb',O:'#dc2626',C:'var(--ink)'};
const _v = {
  add:(a,b)=>[a[0]+b[0],a[1]+b[1]], sub:(a,b)=>[a[0]-b[0],a[1]-b[1]], mul:(a,k)=>[a[0]*k,a[1]*k],
  mid:(a,b)=>[(a[0]+b[0])/2,(a[1]+b[1])/2], len:a=>Math.hypot(a[0],a[1]), unit:a=>{const l=Math.hypot(a[0],a[1])||1;return [a[0]/l,a[1]/l];}
};
const _dirPt=(p,deg,len)=>[p[0]+len*Math.cos(deg*Math.PI/180),p[1]+len*Math.sin(deg*Math.PI/180)];

/* construiește atomii + legăturile unei baze, centrată pe inelul hexagonal c */
function baseMolecule(letter,c,L){
  const A={}, B=[], hx=k=>[c[0]+L*Math.cos(k*Math.PI/3),c[1]+L*Math.sin(k*Math.PI/3)];
  const at=(id,p,lab,col)=>{ A[id]={p,lab:lab||'',col:col||(lab?ATOM_COL[lab[0]]||ATOM_COL.C:null)}; };
  const rings=[];
  if(isPurine(letter)){
    at('N1',hx(0),letter==='G'?'NH':'N'); at('C2',hx(1)); at('N3',hx(2),'N'); at('C4',hx(3)); at('C5',hx(4)); at('C6',hx(5));
    const M=_v.mid(A.C4.p,A.C5.p), n=_v.unit(_v.sub(M,c)), P0=_v.add(M,_v.mul(n,L/(2*Math.tan(Math.PI/5)))), R5=L/(2*Math.sin(Math.PI/5));
    const ang=p=>Math.atan2(p[1]-P0[1],p[0]-P0[0]); const a5=ang(A.C5.p), a4=ang(A.C4.p);
    let df=a4-a5; while(df>Math.PI) df-=2*Math.PI; while(df<=-Math.PI) df+=2*Math.PI; const sg=Math.sign(df);
    const pv=k=>[P0[0]+R5*Math.cos(a5-sg*k*Math.PI*2/5),P0[1]+R5*Math.sin(a5-sg*k*Math.PI*2/5)];
    at('N7',pv(1),'N'); at('C8',pv(2)); at('N9',pv(3),'N');
    B.push(['N1','C2'],['C2','N3'],['N3','C4'],['C4','C5'],['C5','C6'],['C6','N1'],['C5','N7'],['N7','C8'],['C8','N9'],['N9','C4']);
    const dbl=[['C2','N3',c],['C4','C5',c],['N7','C8',P0]];
    if(letter==='A'){ dbl.push(['C6','N1',c]); at('N6',_dirPt(A.C6.p,300,L),'NH₂'); B.push(['C6','N6']); }
    else { at('O6',_dirPt(A.C6.p,300,L),'O'); B.push(['C6','O6','=']); at('N2',_dirPt(A.C2.p,60,L),'NH₂'); B.push(['C2','N2']); }
    dbl.forEach(d=>B.push([d[0],d[1],'d',d[2]]));
    const dirN9=Math.atan2(A.N9.p[1]-P0[1],A.N9.p[0]-P0[0])*180/Math.PI;
    A.SUG={p:_dirPt(A.N9.p,dirN9,L*1.05),sug:true}; B.push(['N9','SUG']);
    rings.push([0,1,2,3,4,5].map(k=>hx(k)), ['N9','C4','C5','N7','C8'].map(k=>A[k].p));
  } else {
    at('N3',hx(3),letter==='C'?'N':'NH'); at('C4',hx(4)); at('C5',hx(5)); at('C6',hx(0)); at('N1',hx(1),'N'); at('C2',hx(2));
    B.push(['N3','C4'],['C4','C5'],['C5','C6'],['C6','N1'],['N1','C2'],['C2','N3']);
    at('O2',_dirPt(A.C2.p,120,L),'O'); B.push(['C2','O2','=']);
    if(letter==='C'){ at('N4',_dirPt(A.C4.p,240,L),'NH₂'); B.push(['C4','N4'],['N3','C4','d',c]); }
    else { at('O4',_dirPt(A.C4.p,240,L),'O'); B.push(['C4','O4','=']); if(letter==='T'){ at('CH3',_dirPt(A.C5.p,300,L),'CH₃'); B.push(['C5','CH3']); } }
    B.push(['C5','C6','d',c]);
    A.SUG={p:_dirPt(A.N1.p,60,L*1.05),sug:true}; B.push(['N1','SUG']);
    rings.push([0,1,2,3,4,5].map(k=>hx(k)));
  }
  return {A,B,rings,letter,L};
}
/* desenează molecula (fără H-bonds) */
function drawMolecule(m,o={}){
  const {A,B,rings,letter,L}=m, col=BASE_COLOR[letter], op=o.op??1, sw=o.sw||2.5;
  const trim=id=>{ const a=A[id]; if(!a||!a.lab) return a&&a.sug?9:0; return a.lab.length>2?14:a.lab.length===2?12:9; };
  let s=`<g opacity="${op}">`;
  rings.forEach(r=>{ s+=`<polygon points="${r.map(p=>f1(p[0])+','+f1(p[1])).join(' ')}" fill="${col}" fill-opacity=".2" stroke="none"/>`; });
  const seg=(p,q,tp,tq,w,c)=>{ const d=_v.sub(q,p), l=_v.len(d), u=[d[0]/l,d[1]/l]; const a=[p[0]+u[0]*tp,p[1]+u[1]*tp], b=[q[0]-u[0]*tq,q[1]-u[1]*tq]; return `<line x1="${f1(a[0])}" y1="${f1(a[1])}" x2="${f1(b[0])}" y2="${f1(b[1])}" stroke="${c||'var(--ink)'}" stroke-width="${w}" stroke-linecap="round"/>`; };
  B.forEach(([a,b,typ,toward])=>{
    const p=A[a].p, q=A[b].p, ta=trim(a), tb=trim(b);
    if(typ==='d'){ const d=_v.sub(q,p), l=_v.len(d); let nx=-d[1]/l, ny=d[0]/l; const mm=_v.mid(p,q); if((toward[0]-mm[0])*nx+(toward[1]-mm[1])*ny<0){nx=-nx;ny=-ny;}
      const off=L*.17, sh=.16, p2=[p[0]+nx*off+d[0]*sh,p[1]+ny*off+d[1]*sh], q2=[q[0]+nx*off-d[0]*sh,q[1]+ny*off-d[1]*sh];
      s+=seg(p,q,ta,tb,sw)+seg(p2,q2,ta?ta*.5:0,tb?tb*.5:0,sw); }
    else if(typ==='='){ const d=_v.sub(q,p), l=_v.len(d), nx=-d[1]/l*L*.09, ny=d[0]/l*L*.09; s+=seg([p[0]+nx,p[1]+ny],[q[0]+nx,q[1]+ny],ta,tb,sw)+seg([p[0]-nx,p[1]-ny],[q[0]-nx,q[1]-ny],ta,tb,sw); }
    else s+=seg(p,q,ta,tb,sw);
  });
  Object.entries(A).forEach(([id,a])=>{
    if(a.lab) s+=`<text x="${f1(a.p[0])}" y="${f1(a.p[1]+5.2)}" text-anchor="middle" style="font:900 ${o.fs||15}px var(--font);fill:${a.col}">${a.lab}</text>`;
    if(a.sug) s+=`<g>${sugar(a.p[0],a.p[1],9)}<text x="${f1(a.p[0])}" y="${f1(a.p[1]+24)}" text-anchor="middle" class="t-xs">zahăr (C1′)</text></g>`;
  });
  return s+'</g>';
}
/* perechea de baze cu legăturile de hidrogen (orizontale, paralele) */
function pairFigure(kind,o={}){
  const L=o.L||30, g=o.g||72, cy=o.cy||200, cxp=o.cx||150;
  const pu=kind[0], py=kind[1], cxq=cxp+2*L+g;
  const mp=baseMolecule(pu,[cxp,cy],L), mq=baseMolecule(py,[cxq,cy],L);
  const bonds=[]; // [x1,x2,y,descriere]
  const A=mp.A,Q=mq.A, hbAt=(a,b,desc)=>bonds.push({x1:a.p[0],x2:b.p[0],y:a.p[1],desc});
  if(kind==='AT'||kind==='AU'){ hbAt(A.N6,Q.O4,'NH₂ (A) → O (T): „NH₂ donează un H către O”'); hbAt(A.N1,Q.N3,'N (A) ← NH (T): „NH donează un H către N”'); }
  if(kind==='GC'){ hbAt(A.O6,Q.N4,'O (G) ← NH₂ (C)'); hbAt(A.N1,Q.N3,'NH (G) → N (C)'); hbAt(A.N2,Q.O2,'NH₂ (G) → O (C)'); }
  let s=drawMolecule(mp)+drawMolecule(mq);
  bonds.forEach((b,i)=>{ const x1=b.x1+15, x2=b.x2-15; s+=`<g class="hot hbond" data-i="${i}"><rect x="${f1(x1-3)}" y="${f1(b.y-10)}" width="${f1(x2-x1+6)}" height="20" fill="transparent"/><line x1="${f1(x1)}" y1="${f1(b.y)}" x2="${f1(x2)}" y2="${f1(b.y)}" stroke="#f59e0b" stroke-width="3.4" stroke-dasharray="4.2 3.4" stroke-linecap="round"/></g>`; });
  return {svg:s,bonds,w:cxq+3.2*L,h:cy+2.6*L};
}
/* inelul pirimidinic (4 C numerotați + 2 N) */
function pyrimidineRing(cx,cy,L){
  const v=k=>[cx+L*Math.cos((k*60-90)*Math.PI/180),cy+L*Math.sin((k*60-90)*Math.PI/180)];
  // k=0 sus (C1), 1 dreapta-sus (N), 2 dreapta-jos (C2), 3 jos (N), 4 stânga-jos (C3), 5 stânga-sus (C4)
  const P=[0,1,2,3,4,5].map(v), lab=['C₁','N','C₂','N','C₃','C₄'];
  let s=`<polygon points="${P.map(p=>f1(p[0])+','+f1(p[1])).join(' ')}" fill="#f59e0b" fill-opacity=".22"/>`;
  const dbl=[[0,1],[2,3],[4,5]];
  for(let k=0;k<6;k++){ const a=P[k], b=P[(k+1)%6]; s+=`<line x1="${f1(a[0])}" y1="${f1(a[1])}" x2="${f1(b[0])}" y2="${f1(b[1])}" stroke="var(--ink)" stroke-width="3" stroke-linecap="round"/>`; }
  dbl.forEach(([i,j])=>{ const a=P[i], b=P[j], d=_v.sub(b,a), l=_v.len(d), nx=-d[1]/l, ny=d[0]/l; let sg=((cx-(a[0]+b[0])/2)*nx+(cy-(a[1]+b[1])/2)*ny)>0?1:-1; const off=L*.2; s+=`<line x1="${f1(a[0]+nx*sg*off+d[0]*.15)}" y1="${f1(a[1]+ny*sg*off+d[1]*.15)}" x2="${f1(b[0]+nx*sg*off-d[0]*.15)}" y2="${f1(b[1]+ny*sg*off-d[1]*.15)}" stroke="var(--ink)" stroke-width="2.4" stroke-linecap="round"/>`; });
  P.forEach((p,k)=>{ const isN=lab[k]==='N', r=15; s+=`<g class="hot pyr" data-k="${k}"><circle cx="${f1(p[0])}" cy="${f1(p[1])}" r="${r}" fill="${isN?'#2563eb':'var(--card)'}" stroke="${isN?'#1d4ed8':'var(--ink)'}" stroke-width="2.4"/><text x="${f1(p[0])}" y="${f1(p[1]+5)}" text-anchor="middle" style="font:900 ${isN?14:12}px var(--font);fill:${isN?'#fff':'var(--ink)'}">${lab[k]}</text></g>`; });
  return s;
}
/* pentoză în proiecție Haworth. type: 'D' (dezoxiriboză) | 'R' (riboză); sel: carbonul evidențiat */
function haworth(type,sel,o={}){
  const T=o.t||[40,6];
  const P={O:[205,92],C1:[292,126],C2:[268,188],C3:[142,188],C4:[118,126]};
  const C5=[118,66], O5=[84,38], PH=[48,16], B=[292,62];
  const ln=(a,b,w,c='var(--ink)',extra='')=>`<line x1="${a[0]}" y1="${a[1]}" x2="${b[0]}" y2="${b[1]}" stroke="${c}" stroke-width="${w}" stroke-linecap="round" ${extra}/>`;
  let s=`<g transform="translate(${T[0]} ${T[1]})">`;
  s+=`<polygon points="${[P.O,P.C1,P.C2,P.C3,P.C4].map(p=>p.join(',')).join(' ')}" fill="var(--brand)" fill-opacity=".07"/>`;
  s+=ln(P.C4,P.O,3,'var(--muted)')+ln(P.O,P.C1,3,'var(--muted)')+ln(P.C1,P.C2,4)+ln(P.C3,P.C4,4)+ln(P.C2,P.C3,8.5);
  // substituenți
  s+=ln(P.C1,B,3);
  s+=`<rect x="${B[0]-52}" y="${B[1]-34}" width="104" height="26" rx="9" fill="#10b981" stroke="#047857" stroke-width="1.2"/><text x="${B[0]}" y="${B[1]-16}" text-anchor="middle" class="t-w" style="font-size:12px">bază azotată</text>`;
  s+=ln(P.C2,[268,238],3)+ln(P.C3,[142,238],3);
  const lab=(x,y,t,hi)=>`<g><rect x="${x-20}" y="${y-13}" width="40" height="26" rx="9" fill="${hi?'#fde68a':'var(--card)'}" stroke="${hi?'#f59e0b':'var(--line)'}" stroke-width="1.6"/><text x="${x}" y="${y+5}" text-anchor="middle" style="font:900 14px var(--font);fill:#dc2626">${t}</text></g>`;
  s+=lab(268,252,type==='R'?'OH':'H',true)+lab(142,252,'OH',false);
  s+=ln(P.C4,C5,3)+ln(C5,O5,3)+ln(O5,PH,3);
  // atomi
  const car=(id,p,txt)=>`<g class="hot hc ${sel===id?'on':''}" data-c="${id}"><circle cx="${p[0]}" cy="${p[1]}" r="17" fill="var(--brand)" stroke="#fff" stroke-width="2.2"/><text x="${p[0]}" y="${p[1]+5}" text-anchor="middle" class="t-w" style="font-size:12px">${txt}</text></g>`;
  s+=`<g class="hot hc ${sel==='O'?'on':''}" data-c="O"><circle cx="${P.O[0]}" cy="${P.O[1]}" r="15" fill="url(#gOx)" stroke="#fff" stroke-width="2.2"/><text x="${P.O[0]}" y="${P.O[1]+5}" text-anchor="middle" class="t-w">O</text></g>`;
  s+=car('1',P.C1,'C1′')+car('2',P.C2,'C2′')+car('3',P.C3,'C3′')+car('4',P.C4,'C4′')+car('5',C5,'C5′');
  s+=`<circle cx="${O5[0]}" cy="${O5[1]}" r="12" fill="url(#gOx)" stroke="#fff" stroke-width="2"/><text x="${O5[0]}" y="${O5[1]+4.5}" text-anchor="middle" class="t-w" style="font-size:12px">O</text>`;
  s+=`<g class="hot hc ${sel==='P'?'on':''}" data-c="P">${phos(PH[0],PH[1],17)}</g>`;
  s+=`<text class="t-sm" x="${PH[0]}" y="${PH[1]-24}" text-anchor="middle">radical fosfat</text>`;
  s+=`<text class="t-sm" x="${P.C3[0]}" y="${P.C3[1]+66}" text-anchor="middle"></text>`;
  s+=`<g transform="translate(326 256)"><circle r="17" fill="var(--card)" stroke="var(--brand)" stroke-width="2.4"/><text y="6" text-anchor="middle" style="font:900 17px var(--font);fill:var(--brand)">${type}</text></g>`;
  return s+'</g>';
}
