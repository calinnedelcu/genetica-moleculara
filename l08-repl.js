'use strict';
/* ============ LECȚIA 8 — Replicarea ADN ============ */

/* ---------- ciclul celular ---------- */
function cycleScene(t){
  const cx=260, cy=222, R1=150, R0=100, T=16;
  const arcs=[['G1',0,126,'#94a3b8'],['S',126,234,'#8b5cf6'],['G2',234,306,'#7dd3fc'],['M',306,360,'#f97316']];
  const P=(deg,r)=>{ const a=(deg-90)*Math.PI/180; return [cx+r*Math.cos(a),cy+r*Math.sin(a)]; };
  const ang=t/T*360, phase=ang<126?0:ang<234?1:ang<306?2:3;
  let s='';
  arcs.forEach(([n,a0,a1,col],i)=>{
    const o0=P(a0,R1), o1=P(a1,R1), i1=P(a1,R0), i0=P(a0,R0), lg=a1-a0>180?1:0, act=i===phase;
    s+=`<path d="M${f1(o0[0])} ${f1(o0[1])} A${R1} ${R1} 0 ${lg} 1 ${f1(o1[0])} ${f1(o1[1])} L${f1(i1[0])} ${f1(i1[1])} A${R0} ${R0} 0 ${lg} 0 ${f1(i0[0])} ${f1(i0[1])}Z" fill="${col}" opacity="${act?1:.55}" stroke="var(--card)" stroke-width="4" stroke-linejoin="round"/>`;
    const m=P((a0+a1)/2,(R1+R0)/2); s+=`<text x="${f1(m[0])}" y="${f1(m[1]+6)}" text-anchor="middle" style="font:900 ${n==='S'?22:16}px var(--font);fill:#fff;paint-order:stroke;stroke:rgba(0,0,0,.3);stroke-width:2.5px">${n==='M'?'M':n}</text>`;
  });
  /* paranteze: interfază / diviziune */
  const br=(a0,a1,r,txt,col)=>{ const p0=P(a0+2,r), p1=P(a1-2,r), lg=a1-a0>180?1:0, m=P((a0+a1)/2,r+22); return `<path d="M${f1(p0[0])} ${f1(p0[1])} A${r} ${r} 0 ${lg} 1 ${f1(p1[0])} ${f1(p1[1])}" fill="none" stroke="${col}" stroke-width="4" stroke-linecap="round"/>`+pill(m[0],m[1],txt,{fs:13,fill:col,color:'#fff',stroke:'transparent'}); };
  s+=br(0,306,R1+14,'INTERFAZĂ','#6366f1')+br(306,360,R1+14,'DIVIZIUNEA CELULARĂ','#f97316');
  /* indicator */
  const p=P(ang,(R1+R0)/2); s+=`<circle cx="${f1(p[0])}" cy="${f1(p[1])}" r="12" fill="#fff" stroke="#0f172a" stroke-width="3.5" filter="url(#fSh)"/>`;
  /* celula din centru */
  const memR=76, ph=t;
  const helix=(x,y,o={})=>dnaPiece(x,y,90,o.len||44,{A:o.A||6,lam:o.lam||16,s:o.s||1,op:o.op??1,glow:o.glow});
  let c='';
  if(phase<3){
    c+=`<circle cx="${cx}" cy="${cy}" r="${memR}" fill="url(#gCell)" stroke="#e8b84a" stroke-width="3"/><circle cx="${cx}" cy="${cy}" r="${memR-30}" fill="#fff" opacity=".55" stroke="#d6a640" stroke-width="2" stroke-dasharray="4 4"/>`;
    if(phase===0) c+=helix(cx,cy,{});
    if(phase===1){ const k=eio(seg(ang,126,200)); const s2=seg(ang,126,234); c+=helix(cx-16*k,cy,{glow:s2<1})+(k>0?helix(cx+16*k,cy,{op:k,glow:true}):'')+(k<1?`<g opacity="${f1(1-k)}"><text class="t-sm" x="${cx}" y="${cy+66}" text-anchor="middle"></text></g>`:''); }
    if(phase===2) c+=helix(cx-16,cy,{})+helix(cx+16,cy,{});
  } else {
    const k=eio(seg(ang,306,358)), d=k*52;
    for(const sg of [-1,1]) c+=`<circle cx="${f1(cx+sg*d)}" cy="${cy}" r="${f1(memR-k*14)}" fill="url(#gCell)" stroke="#e8b84a" stroke-width="3"/><circle cx="${f1(cx+sg*d)}" cy="${cy}" r="${f1(memR-30-k*8)}" fill="#fff" opacity=".55" stroke="#d6a640" stroke-width="2" stroke-dasharray="4 4"/>`+helix(cx+sg*d,cy,{s:1-.15*k});
  }
  s+=c;
  /* legende */
  const lab=['G1 · celula crește (1 moleculă de ADN)','etapa S (sinteză): AICI se replică ADN-ul','G2 · 2 molecule identice de ADN','diviziune: fiecare celulă fiică primește câte una'][phase];
  s+=pill(cx,cy+R1+60,lab,{fs:13,fill:phase===1?'#8b5cf6':'var(--card)',color:phase===1?'#fff':'var(--ink)',stroke:phase===1?'transparent':'var(--line)'});
  s+=`<text class="t-xs" x="${cx+R1+36}" y="${cy-R1+8}" text-anchor="end">G1, G2 = bonus</text>`;
  return s;
}

/* ---------- semiconservativ vs conservativ ---------- */
function modelSVG(model){
  const old='var(--old)', nw='#f97316';
  const mol=(x,y,c1,c2,lab,sub)=>{ let g=`<line x1="${x-16}" y1="${y}" x2="${x-16}" y2="${y+150}" stroke="${c1}" stroke-width="8" stroke-linecap="round"/><line x1="${x+16}" y1="${y}" x2="${x+16}" y2="${y+150}" stroke="${c2}" stroke-width="8" stroke-linecap="round"/>`;
    for(let k=0;k<7;k++){ const yy=y+10+k*21.5; g+=`<line x1="${x-16}" y1="${yy}" x2="${x}" y2="${yy}" stroke="${['#ef4444','#f59e0b','#22c55e','#3b82f6'][k%4]}" stroke-width="5"/><line x1="${x}" y1="${yy}" x2="${x+16}" y2="${yy}" stroke="${['#3b82f6','#22c55e','#f59e0b','#ef4444'][k%4]}" stroke-width="5"/>`; }
    return g+`<text class="t" x="${x}" y="${y+176}" text-anchor="middle">${lab}</text><text class="t-sm" x="${x}" y="${y+194}" text-anchor="middle">${sub}</text>`; };
  let s=mol(90,60,old,old,'molecula-mamă','2 catene vechi');
  s+=arrow(150,135,250,135,'var(--muted)',4,12)+pill(200,108,'replicare',{fs:13,fill:'#8b5cf6',color:'#fff',stroke:'transparent'});
  if(model==='semi'){ s+=mol(330,60,old,nw,'moleculă-fiică 1','1 veche + 1 nouă')+mol(470,60,nw,old,'moleculă-fiică 2','1 nouă + 1 veche'); s+=pill(400,26,'✓ SEMICONSERVATIV (real)',{fs:14,fill:'#16a34a',color:'#fff',stroke:'transparent'}); }
  else { s+=mol(330,60,old,old,'moleculă-fiică 1','2 catene vechi')+mol(470,60,nw,nw,'moleculă-fiică 2','2 catene noi'); s+=pill(400,26,'✗ conservativ (NU așa)',{fs:14,fill:'#dc2626',color:'#fff',stroke:'transparent'}); }
  return s;
}

/* ---------- animația replicării ---------- */
let REPL_LABELS=true;
function replScene(t){
  const N=6, L='ACTCGA', R=[...L].map(b=>COMP_DNA[b]), y0=104, dy=52, W=140, cx=290, xL0=cx-W/2, xR0=cx+W/2, T0=3, DT=1.8;
  const to=i=>T0+(N-1-i)*DT, arr=i=>to(i)+1.8, sep=i=>eio(seg(t,to(i),to(i)+1.6));
  const TF=16.4, tf=eio(seg(t,TF,TF+4.2));
  const rowY=i=>y0+i*dy;
  const pos=i=>{ const s=sep(i); return {oL:lerp(xL0-92*s,100,tf), oR:lerp(xR0+92*s,480,tf), y:lerp(rowY(i)+46*s,rowY(i),tf), s}; };
  const P=Array.from({length:N},(_,i)=>pos(i));
  const homeL=i=>[66+(i%2)*22+3*Math.sin(t*1.3+i),128+i*56+4*Math.cos(t*1.1+i)], homeR=i=>[512-(i%2)*22+3*Math.cos(t*1.2+i),150+i*52+4*Math.sin(t*1.4+i)];
  const ap=i=>seg(t,arr(i)-1.1,arr(i));          // progres zbor nucleotid nou
  let s=cytoBg(580,520,11,16);
  if(t>2) s+=`<text class="t-xs" x="16" y="506">citoplasmă</text>`;
  /* enzima */
  const fRaw=(N-1)-(t-T0)/DT, f=clamp(fRaw,-.8,N-.4), enzOp=clamp(Math.min(seg(t,1.2,2.4),1-seg(t,TF-1,TF+.4)));
  if(enzOp>0){ const yF=rowY(0)+f*dy+(f<N-1?44*sep(clamp(Math.round(f),0,N-1))*.6:26)+4;
    s+=enzyme(cx,yF+8,214,76,{kind:'dna',label:'ADN-polimeraza',op:.9*enzOp,shadow:false,ly:34,fs:13});
    const cutPhase=(()=>{ let best=1; for(let i=0;i<N;i++){ const d=Math.abs(t-to(i)); if(d<best) best=d; } return best; })();
    s+=`<g opacity="${enzOp}">${scissors(cx+4,yF-34,cutPhase<.6?4+cutPhase*30:26,1.25,-90)}</g>`;
  }
  /* catene vechi: panglici + legături statice */
  const ribOld=(key)=>{ const pts=[[P[0][key],y0-52]]; for(let i=0;i<N;i++) pts.push([P[i][key],P[i].y-24]); pts.push([P[N-1][key],P[N-1].y+34]); return pts; };
  s+=ribbon(ribOld('oL'),'var(--old)',6)+ribbon(ribOld('oR'),'var(--old)',6);
  /* legături H în regiunea încă dublă */
  for(let i=0;i<N;i++){ const o=1-clamp(sep(i)*3); if(o>.02) s+=hb(tileTip(P[i].oL,L[i],1)+3,tileTip(P[i].oR,R[i],-1)-3,P[i].y,bondsOf(L[i],R[i]),{op:o}); }
  /* scântei la tăiere */
  for(let i=0;i<N;i++){ const q=seg(t,to(i),to(i)+.6); if(q>0&&q<1) s+=spark(cx,rowY(i),q); }
  /* nucleotide noi: panglici de legătură */
  let ribNew='', newUnits='', hbNew='', tokens='';
  const link=i=>{ if(i<=0) return 0; const a=Math.max(arr(i),arr(i-1))+.5; return seg(t,a,a+.55); };   // legătura dintre rând i-1 și i
  for(let i=0;i<N;i++){
    const nL=P[i].oL+W, nR=P[i].oR-W, y=P[i].y, p=ap(i), q=eio(p);
    const home=[homeL(i),homeR(i)], tgt=[[nL,y],[nR,y]], dirs=[-1,1], letters=[R[i],L[i]];
    for(let k=0;k<2;k++){
      const x=lerp(home[k][0],tgt[k][0],q), yy=lerp(home[k][1],tgt[k][1],q)-Math.sin(Math.PI*q)*22;
      const unit=nucUnit(x,yy,letters[k],dirs[k],{s:p<=0?.92:1,op:clamp(seg(t,.4,1.4))});
      if(p<1) tokens+=unit; else newUnits+=unit;
      if(p>=1){ const b=eio(seg(t,arr(i),arr(i)+.5)); const oOL=k===0?P[i].oL:P[i].oR; const a=k===0?L[i]:R[i];
        hbNew+=k===0?hb(tileTip(P[i].oL,L[i],1)+3,tileTip(nL,R[i],-1)-3,y,bondsOf(L[i],R[i]),{p:b}):hb(tileTip(nR,L[i],1)+3,tileTip(P[i].oR,R[i],-1)-3,y,bondsOf(L[i],R[i]),{p:b}); }
    }
    if(i>0){ const lk=link(i); if(lk>0){ for(const key of ['L','R']){ const x=key==='L'?P[i].oL+W:P[i].oR-W, xp=key==='L'?P[i-1].oL+W:P[i-1].oR-W, ya=P[i-1].y, yb=P[i].y; ribNew+=`<line x1="${f1(xp)}" y1="${f1(ya)}" x2="${f1(lerp(xp,x,lk))}" y2="${f1(lerp(ya,yb,lk))}" stroke="#f97316" stroke-width="5" stroke-linecap="round"/>`; if(lk<1) ribNew+=`<circle cx="${f1(lerp(xp,x,.5))}" cy="${f1(lerp(ya,yb,.5))}" r="${f1(5+14*lk)}" fill="none" stroke="#fbbf24" stroke-width="2.6" opacity="${f1(1-lk)}"/>`; } } }
  }
  s+=hbNew+ribNew;
  /* nucleotide vechi (deasupra legăturilor) */
  for(let i=0;i<N;i++){ s+=nucUnit(P[i].oL,P[i].y,L[i],1,{})+nucUnit(P[i].oR,P[i].y,R[i],-1,{}); }
  s+=newUnits+tokens;
  /* etichete */
  if(REPL_LABELS){
    const lab=(a,b,fn)=>{ const o=clamp(Math.min(seg(t,a,a+.7),1-seg(t,b-.7,b))); return o>0?fn(o):''; };
    s+=lab(0,3.2,o=>pill(cx,34,'ADN bicatenar',{fs:15,fill:'#3b82f6',color:'#fff',stroke:'transparent',op:o}));
    s+=lab(2.3,5.2,o=>callout(20,64,cx-60,rowY(5)+34,'ADN-polimeraza taie legăturile de H',{anchor:'start',fs:12,fill:'#7c3aed',color:'#fff',stroke:'transparent',op:o}));
    s+=lab(6,12.5,o=>pill(cx,34,'forma literei λ (Y)',{fs:14,fill:'#7c3aed',color:'#fff',stroke:'transparent',op:o}));
    s+=lab(3.2,6.6,o=>pill(cx,470,'nucleotide libere din citoplasmă',{fs:13,fill:'var(--card)',op:o}));
    s+=lab(5.6,9.2,o=>callout(566,462,P[5].oR-70,P[5].y+2,'legături de H: veche ↔ nouă',{anchor:'end',fs:12,fill:'#0ea5e9',color:'#fff',stroke:'transparent',op:o}));
    s+=lab(8,12.5,o=>callout(cx-40,462,P[4].oL+W,(P[4].y+P[5].y)/2,'legături fosfodiesterice',{fs:12,fill:'#f59e0b',color:'#fff',stroke:'transparent',op:o}));
    if(t>4.8){ const o=seg(t,4.8,5.8); s+=`<g opacity="${f1(o)}"><rect x="14" y="14" width="150" height="44" rx="12" fill="var(--card)" stroke="var(--line)"/><rect x="26" y="25" width="26" height="7" rx="3.5" fill="var(--old)"/><text class="t-sm" x="60" y="32">catena veche</text><rect x="26" y="41" width="26" height="7" rx="3.5" fill="#f97316"/><text class="t-sm" x="60" y="48">catena nouă</text></g>`; }
    if(t>TF+3){ const o=seg(t,TF+3,TF+4.2); s+=`<g opacity="${f1(o)}">${pill(170,420,'moleculă fiică 1',{fs:14,fill:'#334155',color:'#fff',stroke:'transparent'})}${pill(410,420,'moleculă fiică 2',{fs:14,fill:'#334155',color:'#fff',stroke:'transparent'})}<text class="t-b" x="170" y="446" text-anchor="middle">1 catenă veche + 1 nouă</text><text class="t-b" x="410" y="446" text-anchor="middle">1 catenă nouă + 1 veche</text>${pill(290,486,'SEMICONSERVATIV',{fs:15,fill:'#16a34a',color:'#fff',stroke:'transparent'})}</g>`; }
  }
  return s;
}

LESSONS.push({
  id:'repl', icon:'fork', title:'Replicarea ADN (autocopierea)', sub:'Modelul semiconservativ — pas cu pas', topic:'repl', mins:18, ac1:'#8b5cf6', ac2:'#d946ef',
  html:()=>`
  ${secH(1,'Ce este replicarea și când are loc')}
  ${nb(`<p>2) <u>Replicare</u> = <b>autocopierea</b></p><p>molecula de ADN este <b>singura moleculă care se autocopiază</b></p><p>• autocopierea se realizează în <b>interfaza</b> ciclului celular, în <b>etapa S</b> (sinteză)</p><p>Ciclul celular { <b>interfaza</b><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>diviziunea celulară</b></p>`)}
  <p><b>Replicare = autocopiere</b>: o moleculă de ADN produce <b>două molecule identice</b> cu ea. Se întâmplă înainte ca celula să se dividă, ca ambele celule-fiice să primească ADN complet. Celula parcurge un <b>ciclu</b> format din <b>interfază</b> (între diviziuni — aici stă „etapa S”, de <b>s</b>inteză) și <b>diviziunea celulară</b>. Urmărește ciclul (în desen, celula are o singură moleculă de ADN — model simplificat):</p>
  <div id="cyPlayer"></div>
  <div class="callout key"><b>De ținut minte:</b> ADN-ul este <b>singura moleculă care se autocopiază</b> · se replică în <b>interfază</b>, în <b>etapa S (sinteză)</b> · apoi urmează <b>diviziunea celulară</b>.</div>

  ${secH(2,'Modelul semiconservativ')}
  ${nb(`<p>• autocopierea se realizează după modelul <b>SEMICONSERVATIV</b></p>`)}
  ${nb(`<p>… în final se realizează <b>2 molec. de ADN identice</b> în care fiecare dintre ele prezintă <b>o catenă veche</b> care a avut rol de <b>model</b> (<b>matriță</b>) și <b>o catenă nouă</b> sintetizată; din acest motiv se num. <b>semiconservativ</b>.</p>`)}
  <p><b>Semi</b> = jumătate; <b>conservativ</b> = păstrat. Din molecula-mamă (2 catene vechi) rezultă <b>două molecule identice</b>, iar <b>fiecare păstrează jumătate din mamă</b>: o catenă veche (matrița) + o catenă nou-nouță. Compară cu o variantă „ipotetică”:</p>
  <div class="card">
    <div class="center"><div class="seg" id="mdSeg"><button class="on" data-m="semi">✓ Semiconservativ (real)</button><button data-m="cons">✗ Conservativ (nu așa)</button></div></div>
    <div class="stage pad" style="margin-top:10px"><svg id="mdSvg" viewBox="0 0 560 270" style="max-width:640px;margin:auto"></svg></div>
    <div class="legend" style="justify-content:center;margin-top:6px"><span><i style="background:var(--old)"></i>catena veche (matriță)</span><span><i style="background:#f97316"></i>catena nouă</span></div>
  </div>

  ${secH(3,'Replicarea pas cu pas')}
  ${nb(`<p>În cursul procesului de replicare intervine enzima <b>ADN-polimeraza</b> (desparte legăturile de H) care <b>taie pas cu pas legăturile de hidrogen</b> dintre cele 2 catene</p>
    <p>↳ în plin proces de replicare, molecula de ADN are <b>forma literei λ</b>. De capetele libere ale catenelor se atașează <b>nucleotide din citoplasmă</b></p>`)}
  ${nb(`<p>pe bază de <b>complementaritate</b>.</p><p>Pe de-o parte stabilește <b>legături de hidrogen</b> între catena veche și catena nouă. Iar în catena nouă formată se stabilesc <b>legături fosfodiesterice</b> între nucleotide. Procesul se desfășoară <b>pas cu pas</b>.</p>`)}
  <p>Animația de mai jos urmărește exact acești pași. <b>Poți</b> să tragi de cursor, să alegi un pas din listă sau să încetinești la 0,5× ca să vezi fiecare detaliu. Atenție la <b>foarfeca</b> de pe enzimă: ea „taie” legăturile de hidrogen!</p>
  <label class="chip" style="margin-bottom:8px"><input type="checkbox" id="rLab" checked> arată etichetele</label>
  <div id="rPlayer"></div>
  <div class="callout tip"><b>Imaginează-ți un fermoar:</b> ADN-polimeraza este cursorul care <b>deschide</b> fermoarul (taie legăturile de H), iar în urma lui se „coase” câte o catenă nouă pe fiecare jumătate, aranjând nucleotidele după regula A–T, C–G.</div>
  <details><summary>🔬 Bonus: ce se știe mai exact despre enzime</summary><p>La acest nivel se spune că <b>ADN-polimeraza</b> taie pas cu pas legăturile de H. În biologia mai avansată, <b>desfacerea helixului</b> o face enzima <b>helicază</b>, iar <b>ADN-polimeraza</b> este cea care <b>adaugă nucleotidele</b> catenei noi, pe baza complementarității. Pentru test folosește formularea din lecție.</p></details>
  <div class="callout key"><b>Rezultatul:</b> 2 molecule de ADN <b>identice</b>, fiecare cu <b>o catenă veche + o catenă nouă</b> → <b>semiconservativ</b>. Acest proces explică <b>menținerea aceleiași informații ereditare în toate celulele unui organism</b>.</div>

  ${secH(4,'Încearcă tu: replică o secvență')}
  <p>Scrie o secvență de ADN (doar A, T, C, G) — vezi ce rezultă din replicare.</p>
  <div class="card"><div class="row"><input type="text" id="rIn" maxlength="10" value="ACTC" autocomplete="off"><button class="btn ghost sm" id="rRnd">🎲 aleator</button></div><div id="rOut" style="margin-top:12px"></div></div>
  <div class="card" id="rOrder"></div>`,
  init(root){
    scenePlayer($('#cyPlayer',root),{dur:16,vb:'0 0 520 470',label:'Ciclul celular și etapa S',render:cycleScene,intro:'Apasă ▶: indicatorul alb parcurge ciclul celular.',
      chapters:[{t:0,title:'Interfaza: G1',cap:'<b>Interfaza</b> începe: celula crește și are <b>o moleculă de ADN</b> (aici, un singur helix).'},
        {t:5.6,title:'Etapa S (sinteză)',cap:'<b>Etapa S</b>, în interfază: ADN-ul se <b>autocopiază</b> (replicare). Dintr-o moleculă rezultă două identice.'},
        {t:10.4,title:'G2: 2 molecule de ADN',cap:'Celula are acum <b>2 molecule identice</b> de ADN, pregătite pentru diviziune.'},
        {t:13.6,title:'Diviziunea celulară',cap:'<b>Diviziunea celulară</b>: celula se împarte în două, iar fiecare celulă-fiică primește câte o moleculă de ADN completă.'}]});
    /* model */
    const md=$('#mdSvg',root); const mdDraw=m=>{ md.innerHTML=modelSVG(m); };
    $$('#mdSeg button',root).forEach(b=>b.onclick=()=>{ $$('#mdSeg button',root).forEach(x=>x.classList.toggle('on',x===b)); mdDraw(b.dataset.m); }); mdDraw('semi');
    /* animația */
    const rp=scenePlayer($('#rPlayer',root),{dur:25,vb:'0 0 580 520',label:'Replicarea ADN',render:replScene,intro:'Apasă ▶ ca să pornești replicarea.',
      chapters:[
        {t:0,title:'ADN bicatenar',cap:'<b>ADN bicatenar</b> înainte de replicare: 2 catene complementare (A–T, C≡G) legate prin <b>legături de H</b>. Replicarea se face în <b>etapa S</b> a interfazei.'},
        {t:2.3,title:'Intră ADN-polimeraza',cap:'Intervine enzima <b>ADN-polimeraza</b> la un capăt al moleculei. Ea va „tăia” legăturile de hidrogen dintre catene.'},
        {t:3.6,title:'Taie legăturile de H → forma λ',cap:'ADN-polimeraza <b>taie pas cu pas legăturile de hidrogen</b> dintre cele 2 catene. În plin proces, molecula are <b>forma literei λ</b> (Y).'},
        {t:4.8,title:'Se atașează nucleotide',cap:'De <b>capetele libere</b> ale catenelor se atașează <b>nucleotide din citoplasmă</b>, pe baza <b>complementarității</b> (A cu T, C cu G).'},
        {t:6,title:'Legături de H veche ↔ nouă',cap:'Se stabilesc <b>legături de hidrogen</b> între catena veche și catena nouă (2 pentru A=T, 3 pentru C≡G).'},
        {t:7.8,title:'Legături fosfodiesterice în catena nouă',cap:'În catena nouă se stabilesc <b>legături fosfodiesterice</b> între nucleotidele vecine. Procesul se desfășoară <b>pas cu pas</b>, rând cu rând.'},
        {t:16.4,title:'2 molecule identice',cap:'În final rezultă <b>2 molecule de ADN identice</b>: fiecare are <b>o catenă veche</b> (matrița) și <b>o catenă nouă</b> ⇒ <b>semiconservativ</b>.'}]});
    $('#rLab',root).onchange=e=>{ REPL_LABELS=e.target.checked; rp.refresh(); };
    /* replicator */
    const inp=$('#rIn',root), out=$('#rOut',root);
    const row=(s,cls)=>`<div class="seq" style="gap:3px">${[...s].map(b=>`<span class="base b${b}" style="${cls==='n'?'box-shadow:0 0 0 3px #f97316':'box-shadow:0 0 0 3px #334155'}">${b}</span>`).join('')}</div>`;
    const upd=()=>{ inp.value=inp.value.toUpperCase().replace(/[^ATCG]/g,''); const s=inp.value; if(!s){ out.innerHTML='<span class="muted">Scrie ceva 👆</span>'; return; }
      const c=[...s].map(b=>COMP_DNA[b]).join('');
      out.innerHTML=`<div class="grid3" style="align-items:start"><div><b>Molecula-mamă</b><div class="small muted">2 catene vechi</div><div style="margin:6px 0">${row(s,'o')}</div><div>${row(c,'o')}</div></div>
        <div><b>Fiică 1</b><div class="small muted">veche (sus) + nouă (jos)</div><div style="margin:6px 0">${row(s,'o')}</div><div>${row(c,'n')}</div></div>
        <div><b>Fiică 2</b><div class="small muted">nouă (sus) + veche (jos)</div><div style="margin:6px 0">${row(s,'n')}</div><div>${row(c,'o')}</div></div></div>
        <p class="small muted" style="margin:10px 0 0"><span style="border:3px solid #334155;border-radius:6px;padding:0 6px">veche</span> &nbsp; <span style="border:3px solid #f97316;border-radius:6px;padding:0 6px">nouă</span> — cele două molecule-fiice sunt <b>identice</b> cu mama (aceleași perechi de baze).</p>`; };
    inp.oninput=upd; $('#rRnd',root).onclick=()=>{ inp.value=Array.from({length:7},()=>pick('ATCG')).join(''); upd(); }; upd();
    orderGame($('#rOrder',root),[
      'ADN-polimeraza taie, pas cu pas, legăturile de hidrogen dintre cele 2 catene (molecula ia forma λ)',
      'De capetele libere ale catenelor se atașează nucleotide din citoplasmă, pe baza complementarității',
      'Se stabilesc legături de hidrogen între catena veche și catena nouă',
      'În catena nouă se stabilesc legături fosfodiesterice între nucleotide',
      'Rezultă 2 molecule de ADN identice: fiecare cu o catenă veche și una nouă (semiconservativ)'],'Joc: pune replicarea în ordine');
  }
});
