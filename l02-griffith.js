'use strict';
/* ============ LECȚIA 2 — Griffith și Avery ============ */
const S_COL='#e11d48', R_COL='#0ea5e9';

/* diplococ (pneumococii apar în perechi). o: dead, s, cap (0..1 capsulă), rough, col */
function diplo(x,y,type,o={}){
  const s=o.s??1, r=11*s, dead=!!o.dead;
  const col=o.col||(dead?'#94a3b8':type==='S'?S_COL:R_COL);
  const cap=o.cap??(type==='S'?1:0), rough=o.rough??(type==='R');
  let g=`<g transform="translate(${f1(x)} ${f1(y)}) rotate(${o.rot||0})" opacity="${o.op??1}">`;
  if(cap>0.01){ const e=9*s*cap; g+=`<ellipse rx="${f1(r*2.05+e)}" ry="${f1(r*1.18+e)}" fill="${col}" opacity="${f1(.18*cap+.05)}"/><ellipse rx="${f1(r*2.05+e)}" ry="${f1(r*1.18+e)}" fill="none" stroke="${col}" stroke-width="${f1(1.6*s*.7)}" opacity="${f1(.55*cap)}"/>`; }
  [-r*.95,r*.95].forEach(dx=>{
    g+=`<circle cx="${f1(dx)}" cy="0" r="${f1(r)}" fill="${col}" stroke="${dead?'#64748b':'rgba(0,0,0,.35)'}" stroke-width="${f1(rough?2.6*s*.55:1.3)}"${rough?` stroke-dasharray="${f1(1.5*s*.6)} ${f1(2.4*s*.6)}"`:''}/>`;
    g+=`<ellipse cx="${f1(dx-r*.3)}" cy="${f1(-r*.35)}" rx="${f1(r*.38)}" ry="${f1(r*.2)}" fill="#fff" opacity="${dead?.15:.4}"/>`;
    if(dead) g+=`<path d="M${f1(dx-r*.4)} ${f1(-r*.4)} l${f1(r*.8)} ${f1(r*.8)} M${f1(dx+r*.4)} ${f1(-r*.4)} l${f1(-r*.8)} ${f1(r*.8)}" stroke="#fff" stroke-width="${f1(1.8*s*.7)}" stroke-linecap="round"/>`;
  });
  return g+'</g>';
}
/* fragment de ADN (mic helix) */
function dnaPiece(x,y,rot,len=46,o={}){
  const n=Math.round(len/3), A=o.A||5, lam=o.lam||18, cols=['#ef4444','#3b82f6','#22c55e','#f59e0b'];
  let a='',b='',r='';
  for(let i=0;i<=n;i++){ const u=-len/2+i*len/n, yy=A*Math.sin(u/lam*2*Math.PI); a+=`${i?'L':'M'}${f1(u)} ${f1(yy)}`; b+=`${i?'L':'M'}${f1(u)} ${f1(-yy)}`;
    if(i%2===0&&i>0&&i<n) r+=`<line x1="${f1(u)}" y1="${f1(yy)}" x2="${f1(u)}" y2="${f1(-yy)}" stroke="${cols[(i/2)%4|0]}" stroke-width="1.8" stroke-linecap="round"/>`; }
  return `<g transform="translate(${f1(x)} ${f1(y)}) rotate(${f1(rot)}) scale(${o.s||1})" opacity="${o.op??1}"${o.glow?' filter="url(#fGlow)"':''}>${r}<path d="${a}" fill="none" stroke="var(--old)" stroke-width="2.4" stroke-linecap="round"/><path d="${b}" fill="none" stroke="#f97316" stroke-width="2.4" stroke-linecap="round"/></g>`;
}
/* șoarece (privit din lateral, orientat spre dreapta) */
function mouseSVG(x,y,o={}){
  const s=o.s??1, dead=o.state==='dead';
  let g=`<g transform="translate(${f1(x)} ${f1(y+(dead?8*s:0))}) scale(${s}) ${dead?'scale(1 -1)':''}">`;
  g+=`<path d="M-34 8 C-60 14 -64 -12 -46 -20" stroke="#f3a5b8" stroke-width="3.6" fill="none" stroke-linecap="round"/>`;
  g+=`<ellipse cx="-14" cy="27" rx="9" ry="5" fill="#f3b7c6"/><ellipse cx="18" cy="27" rx="9" ry="5" fill="#f3b7c6"/>`;
  g+=`<ellipse cx="0" cy="6" rx="36" ry="23" fill="url(#gMouse)" stroke="#8b97aa" stroke-width="1.4"/><ellipse cx="3" cy="17" rx="24" ry="8" fill="#fff" opacity=".6"/>`;
  g+=`<ellipse cx="30" cy="-2" rx="19" ry="15" fill="url(#gMouse)" stroke="#8b97aa" stroke-width="1.4"/><ellipse cx="47" cy="1" rx="10" ry="7" fill="url(#gMouse)" stroke="#8b97aa" stroke-width="1.4"/>`;
  g+=`<circle cx="22" cy="-17" r="11" fill="url(#gMouse)" stroke="#8b97aa" stroke-width="1.4"/><circle cx="22" cy="-17" r="6.5" fill="#f9a8d4"/><circle cx="56" cy="1" r="3.2" fill="#f472b6"/>`;
  g+=dead?`<path d="M35 -10 l8 8 M43 -10 l-8 8" stroke="#0f172a" stroke-width="2.4" stroke-linecap="round"/><ellipse cx="50" cy="9" rx="3" ry="4.2" fill="#fb7185"/>`
         :`<circle cx="39" cy="-6" r="3.4" fill="#0f172a"/><circle cx="40.2" cy="-7.3" r="1.2" fill="#fff"/><path d="M47 6 q4 3 8 0" stroke="#64748b" stroke-width="1.6" fill="none" stroke-linecap="round"/>`;
  g+=`<ellipse cx="34" cy="3" rx="4" ry="2.6" fill="#fb7185" opacity=".35"/><g stroke="#64748b" stroke-width="1.2" stroke-linecap="round"><path d="M52 2 L72 -4"/><path d="M53 4 L74 4"/><path d="M52 6 L72 12"/></g>`;
  return g+'</g>';
}
/* eprubetă cu bacterii */
function tubeSVG(x,y,o){
  const w=40,h=104,lq=h*.34, liquid=o.dead?'#e8edf4':o.type==='S'?'#fecdd3':'#bae6fd';
  let s='';
  if(o.heated) s+=`<g transform="translate(${x+w/2} ${y+h+34})"><g class="flame"><path d="M0 0 C-14 -4 -14 -22 -4 -34 C-2 -24 4 -24 5 -34 C14 -22 14 -4 0 0Z" fill="url(#gFlame)"/><path d="M0 0 C-6 -2 -6 -12 -1 -18 C1 -12 5 -12 6 -18 C9 -10 6 -2 0 0Z" fill="#fff3a8" opacity=".9"/></g></g>`;
  s+=`<path d="M${x+2} ${y+lq} H${x+w-2} V${y+h-w/2} a${w/2-2} ${w/2-2} 0 0 1 ${-(w-4)} 0 Z" fill="${liquid}"/>`;
  [[.3,.5],[.66,.44],[.42,.68],[.7,.7],[.3,.86]].forEach(([fx,fy],i)=>{ const bx=x+fx*w, by=y+lq+(fy-.3)*(h-lq)*1.05; s+=diplo(bx,by,o.type,{s:.36,dead:o.dead,rot:i*37}); });
  s+=`<path d="M${x} ${y} V${y+h-w/2} a${w/2} ${w/2} 0 0 0 ${w} 0 V${y}" fill="url(#gGlass)" stroke="#94a3b8" stroke-width="2.2" stroke-linecap="round"/><ellipse cx="${x+w/2}" cy="${y}" rx="${w/2+3}" ry="4" fill="none" stroke="#94a3b8" stroke-width="2.2"/>`;
  s+=pill(x+w/2,y-14,o.label+(o.dead?' ☠':''),{fs:11.5,fill:o.dead?'#64748b':o.type==='S'?S_COL:R_COL,color:'#fff',stroke:'transparent',shadow:false});
  return s;
}
/* seringă orientată spre dreapta; (x,y) = vârful acului */
function syringeSVG(x,y,o={}){
  const push=o.push??0, bx1=x-34, L=62*(1-.85*push);
  return `<g>`+
    `<line x1="${bx1}" y1="${y}" x2="${x}" y2="${y}" stroke="#94a3b8" stroke-width="2.6" stroke-linecap="round"/><rect x="${bx1-4}" y="${y-5}" width="6" height="10" rx="2" fill="#94a3b8"/>`+
    `<rect x="${bx1-4-66}" y="${y-10}" width="66" height="20" rx="4" fill="url(#gGlass)" stroke="#94a3b8" stroke-width="2"/>`+
    `<rect x="${bx1-6-L}" y="${y-8}" width="${L}" height="16" rx="2.5" fill="${o.liquid||'#bae6fd'}"/>`+
    `<rect x="${bx1-10-L}" y="${y-9}" width="5" height="18" rx="2" fill="#475569"/><line x1="${bx1-10-L}" y1="${y}" x2="${bx1-84}" y2="${y}" stroke="#475569" stroke-width="3"/><rect x="${bx1-90}" y="${y-12}" width="6" height="24" rx="2.5" fill="#475569"/>`+
    `</g>`;
}
function expSVG(e,st){
  const tipX=lerp(250,336,st.p), tipY=lerp(98,126,st.p);
  let s=`<rect x="284" y="30" width="162" height="150" rx="18" fill="var(--card2)" stroke="var(--line)" stroke-width="1.6" stroke-dasharray="5 5"/><line x1="294" y1="162" x2="436" y2="162" stroke="var(--line)" stroke-width="3" stroke-linecap="round"/>`;
  e.tubes.forEach(t=>{ s+=tubeSVG(t.x,28,t); });
  if(e.tubes.length>1) s+=`<text x="69" y="92" text-anchor="middle" style="font:900 24px var(--font);fill:var(--muted)">+</text>`;
  s+=`<g transform="translate(${f1(tipX)} ${f1(tipY)}) scale(.8) translate(${-f1(tipX)} ${-f1(tipY)})">${syringeSVG(tipX,tipY,{push:st.push,liquid:e.mix})}</g>`;
  s+=mouseSVG(368,134,{state:st.mouse,s:1.1});
  if(st.stamp>0){ const live=st.mouse!=='dead'; s+=`<g transform="translate(365 ${f1(52-6*eob(st.stamp))}) scale(${f1(eob(st.stamp))})">${pill(0,0,live?'TRĂIEȘTE':'MOARE',{fs:14,fill:live?'#16a34a':'#dc2626',color:'#fff',stroke:'transparent'})}</g>`; }
  return s;
}
const GR=[
  {n:1,title:'Șoarece + RII (vii)',tubes:[{type:'R',label:'RII',x:40}],mix:'#bae6fd',out:'live',why:'RII sunt <b>nevirulenți</b> → nu îmbolnăvesc șoarecele.'},
  {n:2,title:'Șoarece + SIII (vii)',tubes:[{type:'S',label:'SIII',x:40}],mix:'#fecdd3',out:'die',why:'SIII sunt <b>virulenți</b> → șoarecele face <b>pneumonie</b> și <b>moare</b>.'},
  {n:3,title:'Șoarece + SIII omorâți prin căldură',tubes:[{type:'S',label:'SIII',dead:true,heated:true,x:40}],mix:'#e2e8f0',out:'live',why:'Căldura a omorât bacteriile SIII → nu mai pot îmbolnăvi → șoarecele <b>trăiește</b>.'},
  {n:4,title:'Șoarece + RII + SIII omorâți prin căldură',tubes:[{type:'R',label:'RII',x:18},{type:'S',label:'SIII',dead:true,heated:true,x:80}],mix:'#d9ccff',out:'die',why:'<b>Surpriză!</b> Nici RII (nevirulenți), nici SIII (morți) n-ar trebui să omoare șoarecele… dar el <b>moare</b>. Ceva a trecut de la bacteriile moarte la cele vii. 👇'}
];

/* placă Petri cu colonii */
function petri(cx,cy,r,type,seed=1){
  let s=`<circle cx="${cx}" cy="${cy}" r="${r+7}" fill="url(#gGlass)" stroke="#94a3b8" stroke-width="2.4"/><circle cx="${cx}" cy="${cy}" r="${r}" fill="url(#gAgar)" stroke="#e2c46a" stroke-width="1.4"/>`;
  const pts=type==='S'?[[.3,-.25,.2],[-.35,.1,.24],[.1,.4,.18],[-.1,-.45,.17],[.5,.25,.15],[-.5,-.3,.14],[.15,0,.13]]:[[.28,-.3,.22],[-.38,.05,.25],[.05,.42,.2],[-.12,-.42,.19],[.5,.2,.17],[-.52,-.32,.15],[.2,.02,.14]];
  pts.forEach(([fx,fy,fr],i)=>{
    const x=cx+fx*r, y=cy+fy*r, rr=fr*r;
    if(type==='S') s+=`<circle cx="${f1(x)}" cy="${f1(y)}" r="${f1(rr)}" fill="url(#gColS)" stroke="#9f1239" stroke-width="1"/><ellipse cx="${f1(x-rr*.3)}" cy="${f1(y-rr*.35)}" rx="${f1(rr*.35)}" ry="${f1(rr*.2)}" fill="#fff" opacity=".6"/>`;
    else { let d=''; const n=15; for(let k=0;k<n;k++){ const a=k/n*Math.PI*2, rad=rr*(.78+.4*rnd(i*31+k*7+seed)); d+=`${k?'L':'M'}${f1(x+rad*Math.cos(a))} ${f1(y+rad*Math.sin(a))}`; } s+=`<path d="${d}Z" fill="url(#gColR)" stroke="#0369a1" stroke-width="1.3" stroke-linejoin="round"/><circle cx="${f1(x)}" cy="${f1(y)}" r="${f1(rr*.45)}" fill="#0284c7" opacity=".25"/>`; }
  });
  return s;
}

/* ---------- scena transformării (Avery) ---------- */
function transformScene(t){
  const W=640,H=400, S0=[165,205], R0=[470,205];
  let s=`<rect width="${W}" height="${H}" rx="22" fill="url(#gField)"/>`+cytoBg(W,H,7,16);
  const burst=seg(t,4.5,7.6);
  /* celula SIII moartă */
  if(t<8.5){
    const op=1-.75*eio(burst);
    if(burst>0&&burst<1) s+=`<circle cx="${S0[0]}" cy="${S0[1]}" r="${f1(30+90*burst)}" fill="none" stroke="#94a3b8" stroke-width="${f1(4*(1-burst))}" opacity="${f1(1-burst)}"/>`;
    s+=diplo(S0[0],S0[1],'S',{dead:true,s:3*(1+.1*burst),op,cap:1});
  }
  /* fragmente de ADN */
  const dest=[[255,200],[110,115],[235,110],[250,300],[105,305],[60,225],[290,150]];
  const frag=[];
  dest.forEach((d,k)=>{
    const p=eoc(seg(t,5+.14*k,8.4)); if(p<=0) return;
    const bob=Math.sin(t*1.6+k*1.9)*4*p, bob2=Math.cos(t*1.3+k)*3*p;
    let x=lerp(S0[0],d[0],p)+bob2, y=lerp(S0[1],d[1],p)+bob, sc=1, op=p, rot=k*47+t*8*p;
    if(k===0){
      const travel=eio(seg(t,9.8,12.6)), enter=eio(seg(t,12.6,14.2));
      const tx=lerp(d[0],R0[0]-70,travel), ty=lerp(d[1],R0[1]-2,travel);
      x=lerp(tx,R0[0]+2,enter); y=lerp(ty,R0[1]+2,enter); sc=lerp(1.15,.5,enter); op=1-.95*seg(t,13.6,14.4); rot=lerp(rot,0,travel);
      if(t>=9.8) { x+=0; }
    }
    frag.push(dnaPiece(x,y,rot,k===0?62:52,{A:7,lam:20,s:k===0?sc:1,op,glow:k===0&&t>5&&t<14.4}));
  });
  /* celula RII (devine SIII) */
  const q=eio(seg(t,15,18.2)), div=eio(seg(t,19.6,22.4));
  const col=mixHsl(R_COL,S_COL,q), rough=q<.45;
  const cells=div>0.001?[[R0[0]-46*div,R0[1]],[R0[0]+46*div,R0[1]]]:[R0];
  cells.forEach(([cx,cy],i)=>{
    s+=diplo(cx,cy,'R',{s:div>0?2.6:3,col,cap:q,rough,rot:i*14});
    /* nucleoid */
    const rr=div>0?11:14;
    s+=`<g transform="translate(${f1(cx)} ${f1(cy)})"><circle r="${rr}" fill="none" stroke="rgba(15,23,42,.55)" stroke-width="2.4" stroke-dasharray="3 3"/>`+
       (t>13.9?`<path d="M${f1(-rr*.72)} ${f1(-rr*.72)} A${rr} ${rr} 0 0 1 ${rr} 0" fill="none" stroke="#fde047" stroke-width="4.2" stroke-linecap="round" opacity="${f1(.4+.6*seg(t,13.9,14.8))}"/>`:'')+`</g>`;
  });
  s+=frag.join('');
  /* etichete */
  const L=(k,a,b)=>clamp(Math.min(seg(t,a,a+.6),1-seg(t,b-.6,b)));
  if(L(0,0,4.9)>0){ s+=callout(165,96,165,168,'SIII omorâți prin căldură',{op:L(0,0,4.9),fill:'#64748b',color:'#fff',stroke:'transparent'})+callout(470,96,470,168,'RII vii (nevirulenți)',{op:L(0,0,4.9),fill:R_COL,color:'#fff',stroke:'transparent'}); }
  if(L(0,5.6,9.8)>0) s+=callout(150,372,110,320,'fragmente de ADN eliberate',{op:L(0,5.6,9.8)});
  if(L(0,10.2,14.6)>0) s+=callout(400,300,430,222,'RII absoarbe un fragment de ADN',{op:L(0,10.2,14.6)});
  if(L(0,15.2,20)>0) s+=pill(320,44,'transformare genetică: RII → SIII',{op:L(0,15.2,20),fill:S_COL,color:'#fff',stroke:'transparent',fs:14});
  if(t>20.4){ const o=seg(t,20.4,21.4); s+=callout(470,130,470,170,'descendenți virulenți (SIII)',{op:o,fill:S_COL,color:'#fff',stroke:'transparent'}); }
  if(t>22.8){ const o=eio(seg(t,22.8,23.8)); s+=`<g opacity="${f1(o)}">${mouseSVG(560,350,{s:.8,state:'dead'})}${pill(560,300,'șoarecele moare',{fs:12,fill:'#dc2626',color:'#fff',stroke:'transparent'})}</g>`; }
  s+=`<g opacity=".9">${dnaPiece(36,382,0,34,{s:.8})}<text class="t-xs" x="60" y="386">= ADN</text></g>`;
  return s;
}

LESSONS.push({
  id:'griffith', icon:'petri', title:'Griffith și Avery', sub:'Experimentul care a arătat că ADN-ul poartă informația ereditară', topic:'griffith', mins:9, ac1:'#ef4444', ac2:'#f97316',
  html:()=>`
  ${secH(1,'Bacteriile lui Griffith (1928)')}
  ${nb(`<p>În anul <b>1928</b>, bacteriologul <b>Griffith</b></p>
    <p>– pneumococi { <b>nevirulenți</b> – RII → colonii <b>rugoase</b> (aspre)<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>virulenți</b> – SIII → colonii <b>netede</b></p>`)}
  <p><b>Pneumococii</b> sunt bacterii care pot provoca pneumonie. Griffith a lucrat cu două tipuri — iar diferența dintre ele se vede chiar și în cutia Petri:</p>
  <div class="grid2">
    <div class="card center"><div class="stage pad"><svg viewBox="0 0 200 190" style="max-width:240px;display:block;margin:auto">${petri(100,92,70,'R',3)}</svg></div>
      <h3 style="margin:10px 0 2px"><span class="swatch" style="background:${R_COL}"></span>RII</h3><p class="small" style="margin:0"><b>nevirulenți</b> → nu îmbolnăvesc<br>colonii <b>rugoase</b> (aspre)</p></div>
    <div class="card center"><div class="stage pad"><svg viewBox="0 0 200 190" style="max-width:240px;display:block;margin:auto">${petri(100,92,70,'S',3)}</svg></div>
      <h3 style="margin:10px 0 2px"><span class="swatch" style="background:${S_COL}"></span>SIII</h3><p class="small" style="margin:0"><b>virulenți</b> → provoacă boala<br>colonii <b>netede</b></p></div>
  </div>
  <div class="callout tip"><b>Truc de memorie:</b> <b>R</b> = <b>R</b>ugos → <b>R</b>ămâne viu (nevirulent) · <b>S</b> = <b>S</b>mooth (neted) → <b>S</b>fârșit (virulent). <span class="small muted">Virulent = capabil să îmbolnăvească.</span></div>

  ${secH(2,'Cele 4 experimente — ghicește tu!')}
  ${nb(`<p><u>Experiment:</u></p><p>1. șoareci + RII → <b>trăiesc</b><br>2. șoareci + SIII → șoareci <b>cu pneumonie</b> → <b>mor</b><br>3. șoareci + SIII omorâți prin căldură → <b>trăiesc</b><br>4. șoareci + RII + SIII omorâți prin căldură → <b class="e">mor</b></p>`)}
  <p><b>De ce „cu pneumonie”?</b> Pneumococii sunt bacteriile care provoacă <b>pneumonia</b>. Doar tulpina <b>virulentă (SIII)</b> o declanșează: șoarecele face pneumonie și <b>moare</b>. Cei nevirulenți (RII) sau cei omorâți prin căldură nu mai pot îmbolnăvi.</p>
  <p>Pentru fiecare caz alege ce crezi că se întâmplă, apoi apasă și privește experimentul.</p>
  <div class="grid2" id="grCards">${GR.map(g=>`
    <div class="card gr-card" data-n="${g.n}">
      <div class="row" style="justify-content:space-between"><b>Experimentul ${g.n}</b></div>
      <p style="margin:2px 0 8px;font-weight:700">${g.title}</p>
      <div class="stage"><svg viewBox="0 0 460 200"></svg></div>
      <div class="gr-ask" style="margin-top:10px"><span class="small muted">Ce se întâmplă cu șoarecele?</span><div class="row" style="margin-top:6px"><button class="btn ghost sm" data-a="live">Trăiește</button><button class="btn ghost sm" data-a="die">Moare</button></div></div>
      <div class="gr-res"></div></div>`).join('')}</div>
  <div class="callout warn"><b>Capcană de test:</b> în experimentul 4 șoarecele <b>MOARE</b>, deși amestecul conține doar bacterii nevirulente vii (RII) și bacterii virulente <u>moarte</u> (SIII). Rezultatul „neașteptat” e chiar ideea lecției.</div>

  <div id="grAvery" class="hidden">
  ${secH(3,'Ce s-a întâmplat în experimentul 4? (Avery, 1944)')}
  ${nb(`<p>În <b>1944</b> – <b>Avery</b></p><p>explicație a experim. de la cadavrele omorâte prin căldură a trecut <b>„ceva”</b> (<b>molecula ADN</b>) la tipul RII ⇒ fenomen de <b>transformare genetică</b>.</p>`)}
  <p>La început se știa doar că <i>„ceva”</i> trece de la bacteriile moarte la cele vii (acel „principiu transformant”). <b>Avery (1944)</b> a explicat experimentul arătând că acel „ceva” este <b>molecula de ADN</b>.</p>
  <p>Apasă ▶ și urmărește, la microscop, cum <b>ADN-ul</b> bacteriilor SIII moarte schimbă bacteriile RII vii. Poți trage de cursor pentru a derula, sau alege viteza 0,5×.</p>
  <div id="trPlayer"></div>
  <div class="callout key"><b>Concluzie:</b> bacteriile RII au primit de la cele SIII moarte <b>ADN</b> și au devenit virulente. Deci <b>ADN-ul este purtătorul informației ereditare</b>. Trecerea ADN-ului dintr-o bacterie în alta, cu schimbarea caracterelor, se numește <b>transformare genetică</b>.</div>
  <div class="grid2">
    <div class="card"><h3>1928 · Griffith</h3><p class="small">Observă fenomenul: amestecul RII + SIII omorâți le ucide pe șoareci. Nu știa încă <i>ce</i> trece de la o bacterie la alta.</p></div>
    <div class="card"><h3>1944 · Avery</h3><p class="small">Explică experimentul: <b>molecula de ADN</b> a trecut de la bacteriile moarte la tipul RII ⇒ <b>transformare genetică</b>.</p></div>
  </div></div>`,
  init(root){
    let answered=0;
    $$('.gr-card',root).forEach(card=>{
      const g=GR[+card.dataset.n-1], svg=$('svg',card), st={p:0,push:0,mouse:'ok',stamp:0};
      const draw=()=>{ svg.innerHTML=expSVG(g,st); }; draw();
      $$('.gr-ask button',card).forEach(b=>b.onclick=async()=>{
        $$('.gr-ask button',card).forEach(x=>x.disabled=true);
        await tween(850,p=>{ st.p=p; draw(); },svg,eio);
        await tween(750,p=>{ st.push=p; draw(); },svg,eio);
        await tween(650,p=>{ st.p=1-p; draw(); },svg,eio);
        st.mouse=g.out==='die'?'dead':'ok';
        await tween(500,p=>{ st.stamp=p; draw(); },svg);
        const ok=b.dataset.a===g.out;
        card.style.borderColor=ok?'var(--ok)':'var(--bad)';
        $('.gr-res',card).innerHTML=`<div class="res ${ok?'ok':'bad'}">${ok?'✅ Corect!':'❌ Nu chiar.'} ${g.why}</div>`;
        recordAnswer({id:9000+g.n},ok,5);
        if(++answered===4||g.n===4){ const av=$('#grAvery',root); if(!av) return; av.classList.remove('hidden'); if(!root.dataset.revealed){ root.dataset.revealed=1; toast('Mai jos: explicația lui Avery 👇'); } }
      });
    });
    scenePlayer($('#trPlayer',root),{dur:25,vb:'0 0 640 400',label:'Transformarea genetică la microscop',render:transformScene,
      intro:'Apasă ▶ ca să pornești animația.',
      chapters:[
        {t:0,title:'Amestecul din eprubetă',cap:'<b>RII vii</b> (nevirulenți) + <b>SIII omorâți prin căldură</b>. Bacteriile SIII sunt moarte (gri), dar ADN-ul lor nu a dispărut complet.'},
        {t:4.5,title:'ADN-ul iese din bacteriile moarte',cap:'Celulele SIII moarte se sfărâmă și eliberează <b>fragmente de ADN</b>.'},
        {t:9.5,title:'RII preia un fragment de ADN',cap:'O bacterie RII vie <b>absoarbe</b> un fragment (cel luminat). El conține informația care face bacteria virulentă.'},
        {t:15,title:'RII devine SIII',cap:'Informația nouă se integrează: bacteria RII își <b>schimbă caracterul</b> și devine <b>virulentă</b> (SIII) — <b>transformare genetică</b>.'},
        {t:19.6,title:'Descendenții moștenesc caracterul',cap:'Bacteria se divide, iar descendenții sunt tot virulenți. Șoarecele din experimentul 4 <b>moare</b>.'}
      ]});
  }
});
