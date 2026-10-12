'use strict';
/* ============ LECȚIA 7 — Denaturare și renaturare ============ */
const LAB_SEQ='ATTACGAATCGGCTA'.slice(0,14);

/* ---------- eprubeta cu ADN ---------- */
function labSVG(st,t){
  const cx=230, tubeW=124, x0=cx-tubeW/2, yTop=70, yBot=440, r=tubeW/2, heat=st.env==='heat'?1:0, ice=st.env==='cool-fast';
  const hot=clamp((st.temp-25)/75);
  let s='';
  /* masă / arzător */
  s+=`<ellipse cx="${cx}" cy="500" rx="86" ry="12" fill="#0b1020" opacity=".14"/><rect x="${cx-8}" y="468" width="16" height="30" rx="4" fill="#64748b"/><rect x="${cx-34}" y="492" width="68" height="10" rx="5" fill="#475569"/>`;
  if(heat){ const f=.8+.4*Math.sin(t*14)+.3*hot; s+=`<g transform="translate(${cx} 468)"><path d="M0 0 C-22 -4 -22 -34 -6 -56 C-4 -38 6 -38 8 -56 C24 -34 22 -4 0 0Z" transform="scale(${f1(1+.08*Math.sin(t*17))} ${f1(f)})" fill="url(#gFlame)"/><path d="M0 0 C-9 -2 -9 -18 -2 -28 C2 -18 8 -18 9 -28 C13 -16 9 -2 0 0Z" transform="scale(1 ${f1(f)})" fill="#fff6b0" opacity=".95"/></g>`; }
  /* lichid */
  const liqTop=yTop+84, liqCol=ice?'#bcdcff':'#cfe9ff', liqD=`M${x0+3} ${liqTop} H${x0+tubeW-3} V${yBot-r} a${r-3} ${r-3} 0 0 1 ${-(tubeW-6)} 0 Z`;
  s+=`<path d="${liqD}" fill="${liqCol}"/><path d="${liqD}" fill="#ff7a2f" opacity="${f1(hot*.2)}"/>`;
  s+=`<ellipse cx="${cx}" cy="${liqTop}" rx="${tubeW/2-3}" ry="5" fill="#fff" opacity=".45"/>`;
  /* bule când e cald */
  if(hot>.35) for(let k=0;k<7;k++){ const bx=x0+14+rnd(k*7)*(tubeW-28), ph=(t*.6*(.6+rnd(k)*.8)+rnd(k+3))%1, by=yBot-30-ph*(yBot-30-liqTop); s+=`<circle cx="${f1(bx+4*Math.sin(t*3+k))}" cy="${f1(by)}" r="${f1(2+rnd(k+9)*3)}" fill="#fff" opacity="${f1(.5*(1-ph)*hot)}"/>`; }
  /* ADN */
  const N=LAB_SEQ.length, y0=liqTop+34, dy=(yBot-r-12-y0)/(N-1), segs=[], rungs=[];
  const pts1=[],pts2=[];
  for(let i=0;i<N;i++){
    const y=y0+i*dy, u=st.u[i], phi=i*.75+t*.7*(1-u*.8), cl=24*Math.cos(phi);
    const wob=Math.sin(t*1.4+i*.9)*5*u+Math.sin(t*.9+i*1.7)*4*u, wob2=Math.cos(t*1.2+i*1.1)*5*u+Math.cos(t*.8+i*1.3)*4*u;
    const xa=cx-lerp(cl,41,u)+wob, xb=cx+lerp(cl,41,u)+wob2, yy=y+Math.sin(t*1.1+i)*3*u;
    pts1.push([xa,yy,Math.sin(phi)]); pts2.push([xb,yy,-Math.sin(phi)]);
    const b=LAB_SEQ[i], c=COMP_DNA[b], op=1-u;
    if(op>.03){ const m=(xa+xb)/2, w=bondsOf(b,c)===3?6.5:4; rungs.push(`<g opacity="${f1(op)}"><line x1="${f1(xa)}" y1="${f1(yy)}" x2="${f1(m)}" y2="${f1(yy)}" stroke="${BASE_COLOR[b]}" stroke-width="${w}" stroke-linecap="round"/><line x1="${f1(m)}" y1="${f1(yy)}" x2="${f1(xb)}" y2="${f1(yy)}" stroke="${BASE_COLOR[c]}" stroke-width="${w}" stroke-linecap="round"/></g>`); }
  }
  const ribbonSeg=(pts,col,wd)=>{ let out=[]; for(let i=0;i<pts.length-1;i++){ const a=pts[i], b=pts[i+1]; out.push({z:(a[2]+b[2])/2,s:`<line x1="${f1(a[0])}" y1="${f1(a[1])}" x2="${f1(b[0])}" y2="${f1(b[1])}" stroke="${col}" stroke-width="${wd}" stroke-linecap="round"/>`}); } return out; };
  const all=[...ribbonSeg(pts1,'var(--old)',7),...ribbonSeg(pts2,'#f97316',7)].sort((a,b)=>a.z-b.z);
  s+=rungs.join('')+all.map(q=>q.s).join('');
  pts1.forEach(p=>{ s+=sugar(p[0],p[1],5.5); }); pts2.forEach(p=>{ s+=sugar(p[0],p[1],5.5); });
  /* sticla */
  s+=`<path d="M${x0} ${yTop} V${yBot-r} a${r} ${r} 0 0 0 ${tubeW} 0 V${yTop}" fill="url(#gGlass)" stroke="#8fa0b8" stroke-width="3.4" stroke-linecap="round"/><ellipse cx="${cx}" cy="${yTop}" rx="${tubeW/2+5}" ry="6" fill="none" stroke="#8fa0b8" stroke-width="3.4"/>`;
  if(ice) for(let k=0;k<8;k++){ const ph=(seg(st.iceT,0,1)+k*.07)%1, ix=cx-70+k*20+Math.sin(k)*6, iy=lerp(90,420,eoc(clamp(st.iceT*1.6-k*.06))); s+=`<rect x="${f1(ix)}" y="${f1(iy)}" width="22" height="22" rx="5" fill="#dff1ff" stroke="#9ccbf2" stroke-width="2" transform="rotate(${k*17} ${f1(ix+11)} ${f1(iy+11)})" opacity=".92"/>`; }
  /* abur */
  if(hot>.55) for(let k=0;k<3;k++){ const ph=(t*.45+k*.33)%1; s+=`<path d="M${cx-28+k*28} ${yTop-6-ph*40} q8 -10 0 -20 q-8 -10 0 -20" fill="none" stroke="#94a3b8" stroke-width="3" stroke-linecap="round" opacity="${f1((1-ph)*.55)}"/>`; }
  /* etichete */
  s+=pill(cx,40,'soluție cu molecule de ADN',{fs:13,fill:'var(--card)'});
  const open=st.u.reduce((a,b)=>a+b,0)/N;
  if(open<.1) s+=callout(70,300,cx-34,300,'moleculă bicatenară',{fs:12,fill:'#3b82f6',color:'#fff',stroke:'transparent'});
  if(open>.9){ s+=callout(78,250,cx-52,y0+dy*3,'monocatenară 1',{fs:12,fill:'#334155',color:'#fff',stroke:'transparent'})+callout(100,345,cx-52,y0+dy*9,'2 molecule monocatenare',{fs:12,fill:'#7c3aed',color:'#fff',stroke:'transparent'}); s+=callout(cx+tubeW/2+78,250,cx+52,y0+dy*3,'monocatenară 2',{fs:12,fill:'#f97316',color:'#fff',stroke:'transparent'}); }
  /* termometru */
  const tx=450, tTop=100, tBot=430, th=tBot-tTop;
  s+=`<rect x="${tx-12}" y="${tTop}" width="24" height="${th}" rx="12" fill="url(#gGlass)" stroke="#8fa0b8" stroke-width="2.6"/><circle cx="${tx}" cy="${tBot+14}" r="22" fill="#fff" fill-opacity=".5" stroke="#8fa0b8" stroke-width="2.6"/>`;
  const mh=hot*(th-30)+30;
  s+=`<rect x="${tx-6}" y="${f1(tBot-mh)}" width="12" height="${f1(mh+8)}" rx="6" fill="#ef4444"/><circle cx="${tx}" cy="${tBot+14}" r="16" fill="#ef4444"/><ellipse cx="${tx-5}" cy="${tBot+8}" rx="4" ry="6" fill="#fff" opacity=".4"/>`;
  for(let k=0;k<=8;k++){ const yy=tBot-30-(k/8)*(th-30), tl=k%2?24:30; s+=`<line x1="${tx+16}" y1="${f1(yy)}" x2="${tx+tl}" y2="${f1(yy)}" stroke="#8fa0b8" stroke-width="2"/>`; }
  s+=`<text class="t-lg" x="${tx}" y="${tTop-30}" text-anchor="middle">t°C</text>`+pill(tx+44,f1(tBot-mh),Math.round(st.temp)+'°',{fs:14,fill:hot>.5?'#dc2626':'#2563eb',color:'#fff',stroke:'transparent',w:50});
  s+=`<text class="t-sm" x="${tx-6}" y="${tTop-8}" text-anchor="middle">↑ crește</text>`;
  /* mod */
  const lbl={heat:'🔥 încălzire → denaturare','cool-slow':'❄️ răcire lentă → renaturare','cool-fast':'🧊 răcire bruscă → catenele rămân separate'}[st.env];
  if(lbl) s+=pill(cx,540,lbl,{fs:13,fill:'var(--brand)',color:'#fff',stroke:'transparent'});
  return s;
}

/* ---------- hibridizarea a două specii ---------- */
function hybridSVG(p,pct,pair){
  const n=24, x0=92, dx=19, ym=124;
  const matched=Array.from({length:n},(_,i)=>rnd(i*5.3+(pair==='maimuta'?1:7))<pct/100);
  // normalizează numărul real de potriviri
  let cnt=matched.filter(Boolean).length, target=Math.round(n*pct/100), k=0;
  while(cnt<target){ if(!matched[k%n]){ matched[k%n]=true; cnt++; } k+=7; }
  k=0; while(cnt>target){ if(matched[k%n]){ matched[k%n]=false; cnt--; } k+=5; }
  const top=[], bot=[], rungs=[];
  for(let i=0;i<n;i++){
    const pi=eio(seg(p,i/n*.6,i/n*.6+.4)), x=x0+i*dx, m=matched[i];
    const yT=lerp(52+8*Math.sin(i*.7),m?ym-9:ym-44,pi), yB=lerp(196+8*Math.cos(i*.6),m?ym+9:ym+44,pi);
    top.push([x,yT]); bot.push([x,yB]);
    if(m&&pi>.85){ const c=['#ef4444','#3b82f6','#22c55e','#f59e0b'][i%4], c2=['#3b82f6','#ef4444','#f59e0b','#22c55e'][i%4]; rungs.push(`<line x1="${x}" y1="${f1(yT)}" x2="${x}" y2="${ym}" stroke="${c}" stroke-width="4" stroke-linecap="round" opacity="${f1(pi)}"/><line x1="${x}" y1="${ym}" x2="${x}" y2="${f1(yB)}" stroke="${c2}" stroke-width="4" stroke-linecap="round" opacity="${f1(pi)}"/>`); }
  }
  let s=rungs.join('')+ribbon(top,'#3b82f6',6.5)+ribbon(bot,pair==='maimuta'?'#16a34a':'#a855f7',6.5);
  const done=Math.round(matched.slice(0,n).filter((m,i)=>eio(seg(p,i/n*.6,i/n*.6+.4))>.85&&m).length/n*100);
  s+=`<text class="t" x="${x0-12}" y="56" text-anchor="end">om</text><text class="t" x="${x0-12}" y="200" text-anchor="end">${pair==='maimuta'?'maimuță':'șoarece'}</text>`;
  return {svg:s,pct:done};
}
/* diagrama : denaturare / renaturare */
function flowSVG(){
  const lad=(x,y,h)=>{ let g=`<line x1="${x-14}" y1="${y}" x2="${x-14}" y2="${y+h}" stroke="var(--old)" stroke-width="5" stroke-linecap="round"/><line x1="${x+14}" y1="${y}" x2="${x+14}" y2="${y+h}" stroke="#f97316" stroke-width="5" stroke-linecap="round"/>`; for(let k=0;k<6;k++){ const yy=y+10+k*(h-20)/5; g+=`<line x1="${x-14}" y1="${yy}" x2="${x}" y2="${yy}" stroke="${['#ef4444','#f59e0b','#22c55e','#3b82f6'][k%4]}" stroke-width="4"/><line x1="${x}" y1="${yy}" x2="${x+14}" y2="${yy}" stroke="${['#3b82f6','#22c55e','#f59e0b','#ef4444'][k%4]}" stroke-width="4"/>`; } return g; };
  const str=(x,y,h)=>{ let g=`<path d="M${x-30} ${y} q-10 ${h/4} 0 ${h/2} t0 ${h/2}" fill="none" stroke="var(--old)" stroke-width="5" stroke-linecap="round"/><path d="M${x+30} ${y} q10 ${h/4} 0 ${h/2} t0 ${h/2}" fill="none" stroke="#f97316" stroke-width="5" stroke-linecap="round"/>`; return g; };
  let s='';
  s+=lad(80,66,170)+`<text class="t" x="80" y="278" text-anchor="middle">moleculă bicatenară</text><text class="t-sm" x="80" y="296" text-anchor="middle">(soluție cu molecule de ADN)</text>`;
  s+=arrow(140,150,270,150,'#dc2626',4,12)+pill(205,122,'t°C ↑',{fs:13,fill:'#dc2626',color:'#fff',stroke:'transparent'})+`<text class="t-b" x="205" y="182" text-anchor="middle" style="fill:#dc2626">denaturare</text>`;
  s+=str(340,66,170)+`<text class="t" x="340" y="278" text-anchor="middle">2 molecule monocatenare</text>`;
  s+=arrow(400,138,492,94,'#0ea5e9',4,12)+pill(432,96,'răcire lentă',{fs:12,fill:'#0ea5e9',color:'#fff',stroke:'transparent'})+`<text class="t-b" x="432" y="70" text-anchor="middle" style="fill:#0ea5e9">renaturare</text>`;
  s+=lad(556,34,112)+`<text class="t-sm" x="556" y="168" text-anchor="middle">moleculă bicatenară</text>`;
  s+=arrow(400,162,492,206,'#7c3aed',4,12)+pill(432,238,'răcire bruscă',{fs:12,fill:'#7c3aed',color:'#fff',stroke:'transparent'});
  s+=`<g transform="translate(556 186) scale(.5)">${str(0,0,100)}</g><text class="t-sm" x="556" y="262" text-anchor="middle">2 molecule monocatenare</text>`;
  return s;
}

LESSONS.push({
  id:'denat', icon:'thermo', title:'Denaturare și renaturare', sub:'Ce se întâmplă cu ADN-ul când îl încălzești… și apoi îl răcești', topic:'denat', mins:15, ac1:'#f97316', ac2:'#ef4444',
  html:()=>`
  ${secH(1,'Funcțiile ADN-ului')}
  ${nb(`<p><u>Funcții</u><br>– denaturarea – renaturarea<br>– replicarea = autocopierea</p>`)}
  <div class="grid2">
    <div class="card" style="border-top:5px solid #f97316"><h3>1) Denaturarea – renaturarea</h3><p style="margin:0">Despărțirea și refacerea celor două catene. <b>Aceasta e lecția de acum.</b></p></div>
    <div class="card" style="border-top:5px solid #8b5cf6"><h3>2) Replicarea = autocopierea</h3><p style="margin:0">ADN-ul își face copii identice. Vine în lecția următoare.</p></div>
  </div>

  ${secH(2,'Denaturarea ADN-ului')}
  ${nb(`<p><u>Denaturarea</u><br>↳ se datorează structurii <b>bicatenare</b>:<br>soluție cu molecule de ADN → t°C → <b>denaturare</b> → 2 molecule <b>monocatenare</b></p>`)}
  <p>Cele două catene ale ADN se țin prin <b>legături de hidrogen</b> — destul de slabe. Dacă <b>încălzești</b> soluția (t°C ↑), legăturile se rup și <b>catenele se despart</b>: dintr-o moleculă bicatenară rezultă <b>2 molecule monocatenare</b>. Asta e <b>denaturarea</b>. Doar o moleculă <b>bicatenară</b> se poate denatura.</p>
  <div class="card">
    <div class="stage"><svg id="labSvg" viewBox="0 0 560 560" style="max-width:600px;margin:auto"></svg></div>
    <div class="row" style="margin-top:12px;justify-content:center">
      <button class="btn" id="bHeat">🔥 Încălzește</button>
      <button class="btn ghost" id="bSlow">🐢 Răcire lentă</button>
      <button class="btn ghost" id="bFast">⚡ Răcire bruscă</button>
      <button class="btn ghost sm" id="bReset">↺ Reset</button>
    </div>
    <div style="margin-top:10px"><label class="small muted">Temperatura (t°C) — valori orientative</label><input type="range" id="tRange" min="20" max="100" value="25"></div>
    <div class="res info" id="tStatus" style="margin-top:8px"></div>
    <p class="small muted" style="margin-top:8px">💡 <b>Bonus:</b> perechile <b>A=T</b> (2 legături H) se desfac mai ușor decât <b>C≡G</b> (3 legături H) — urmărește treptele subțiri (A–T) cum se rup primele.</p>
  </div>

  ${secH(3,'Renaturarea ADN-ului')}
  <p>Dacă după denaturare <b>răcești încet</b>, fiecare catenă își regăsește partenera complementară și <b>molecula bicatenară se reface</b>: <b>renaturare</b>. Dacă răcești <b>brusc</b>, catenele n-au timp să se potrivească și rămân <b>separate</b> (monocatenare). Încearcă ambele variante în laboratorul de mai sus (mai întâi încălzește!). Iată schema:</p>
  <div class="stage pad hs"><svg viewBox="0 0 640 310" style="max-width:700px;margin:auto">${flowSVG()}</svg></div>
  <div class="grid3" style="margin-top:12px">
    <div class="callout key" style="margin:0"><b>Denaturare</b><br>t°C ↑ → catenele se despart</div>
    <div class="callout tip" style="margin:0"><b>Renaturare</b><br>răcire <u>lentă</u> → se refac catenele</div>
    <div class="callout warn" style="margin:0"><b>Răcire bruscă</b><br>→ rămân 2 molecule monocatenare</div>
  </div>

  ${secH(4,'Aplicații: cât de înrudite sunt două specii?')}
  ${nb(`<p><u>Aplicații</u></p><p>Se amestecă <b>monocatenele ADN</b> de la 2 specii diferite<br>↳ în funcție de <b>procentul de renaturare</b> se pot stabili relații de înrudire <b>evolutivă</b> (filogenetică)</p><p>om + maimuță → <b>75%</b> &nbsp;&nbsp;·&nbsp;&nbsp; om + șoarece → <b>~25%</b></p><p>Stabilirea <b>paternității / maternității</b> (asemănare ≈ <b>99%</b>)</p>`)}
  <p>Se iau catene de ADN de la două specii, se separă (denaturare) și se amestecă. Unde secvențele <b>se potrivesc</b>, catenele se lipesc (se formează „hibrizi”); unde nu, rămân bucle. <b>Cu cât se lipesc mai multe zone, cu atât speciile sunt mai înrudite.</b> Alege perechea:</p>
  <div class="card">
    <div class="row" style="justify-content:center"><button class="btn" data-sp="maimuta">🧑 om + 🐒 maimuță</button><button class="btn" data-sp="soarece">🧑 om + 🐭 șoarece</button></div>
    <div class="stage pad" style="margin-top:12px"><svg id="hySvg" viewBox="0 0 560 250" style="max-width:640px;margin:auto"></svg></div>
    <div style="margin-top:10px"><div class="row" style="justify-content:space-between"><b id="hyLbl">alege o pereche</b><b id="hyPct" style="font-size:1.4rem">0%</b></div><div class="bar" style="height:16px;margin-top:4px"><i id="hyBar" style="width:0%"></i></div></div>
    <div class="res info" id="hyTxt" style="margin-top:10px">👆 Apasă pe una dintre perechi.</div>
  </div>
  <div class="callout tip"><b>Cum le țin minte:</b> <b>75%</b> = om–maimuță (înrudire mare) · <b>25%</b> = om–șoarece (înrudire mică). <b>Mai mult hibrid = mai înrudite</b> (relații <b>filogenetice</b>).</div>

  ${secH(5,'Paternitate / maternitate — jocul detectivului ADN')}
  <p>Același principiu se folosește pentru <b>stabilirea paternității sau a maternității</b>: ADN-ul copilului „se potrivește” mult mai bine cu al părintelui biologic decât cu al altor persoane. <span class="muted small">(Paternitatea se stabilește cu o asemănare de ≈ 99%; valorile din joc sunt ilustrative.)</span></p>
  <div class="card" id="detective"></div>

  <div class="callout key"><b>Pe scurt:</b> <b>denaturare</b> = (t°C ↑) legăturile de H se rup → 2 molecule monocatenare · <b>renaturare</b> = răcire lentă → se reface molecula bicatenară · <b>aplicații</b>: relații de înrudire (filogenie) și paternitate/maternitate.</div>`,
  init(root){
    /* laborator */
    const N=LAB_SEQ.length, thr=[...LAB_SEQ].map((b,i)=>(b==='A'||b==='T'?52:74)+i*.8);
    const st={temp:25,u:Array(N).fill(0),env:'',iceT:0}; let forced=false, ctl=null, last=performance.now();
    const svg=$('#labSvg',root), range=$('#tRange',root), status=$('#tStatus',root);
    const msg=()=>{ const open=st.u.reduce((a,b)=>a+b,0)/N;
      if(forced&&st.temp<40&&open>.8) return '🧊 Răcirea <b>bruscă</b> n-a lăsat catenele să se potrivească: rămân <b>2 molecule monocatenare</b>.';
      if(st.env==='cool-slow'&&open<.1) return '✅ <b>Renaturare!</b> Răcirea lentă a lăsat catenele să se regăsească: s-a refăcut <b>molecula bicatenară</b>.';
      if(open<.08) return '🧬 O moleculă <b>bicatenară</b>: cele 2 catene sunt unite prin legături de H.';
      if(open<.9) return '⚠️ <b>Denaturare în curs</b>: legăturile de H se rup treptat.';
      return '🔥 <b>ADN denaturat</b>: 2 molecule monocatenare.'; };
    let lastMsg='';
    function setTemp(v){ st.temp=clamp(v,20,100); range.value=st.temp; }
    function stop(){ if(ctl){ ctl.stop=true; ctl=null; } }
    async function ramp(to,ms,env){ stop(); const me={stop:false}; ctl=me; st.env=env; const from=st.temp, t0=performance.now();
      await new Promise(res=>{ (function f(now){ if(me.stop||!svg.isConnected){ res(); return; } const p=clamp((now-t0)/ms); setTemp(lerp(from,to,p)); if(p<1) requestAnimationFrame(f); else res(); })(t0); }); }
    function frame(now){
      if(!svg.isConnected) return; const dt=Math.min(.05,(now-last)/1000); last=now;
      for(let i=0;i<N;i++){ const tgt=(forced||st.temp>thr[i])?1:0; st.u[i]+=(tgt-st.u[i])*(1-Math.exp(-dt*5)); }
      if(st.env==='cool-fast') st.iceT=Math.min(1,st.iceT+dt*1.2);
      svg.innerHTML=labSVG(st,now/1000); const m=msg(); if(m!==lastMsg){ status.innerHTML=m; lastMsg=m; }
      requestAnimationFrame(frame);
    }
    range.oninput=()=>{ stop(); st.env=''; if(+range.value>92) forced=false; setTemp(+range.value); };
    $('#bHeat',root).onclick=()=>{ forced=false; ramp(100,3200,'heat'); };
    $('#bSlow',root).onclick=async()=>{ const open=st.u.reduce((a,b)=>a+b,0)/N; if(open<.5&&!forced){ toast('Mai întâi încălzește ADN-ul până se denaturează 🔥'); return; } forced=false; await ramp(25,6500,'cool-slow'); if(svg.isConnected&&st.env==='cool-slow'){ addXP(3); } };
    $('#bFast',root).onclick=()=>{ const open=st.u.reduce((a,b)=>a+b,0)/N; if(open<.5&&!forced){ toast('Mai întâi încălzește ADN-ul până se denaturează 🔥'); return; } forced=true; st.iceT=0; ramp(22,700,'cool-fast'); };
    $('#bReset',root).onclick=()=>{ stop(); forced=false; st.env=''; st.iceT=0; setTemp(25); };
    requestAnimationFrame(frame);
    /* hibridizare */
    const hy=$('#hySvg',root); let hbusy=false;
    $$('[data-sp]',root).forEach(b=>b.onclick=async()=>{
      if(hbusy) return; hbusy=true; const pair=b.dataset.sp, pct=pair==='maimuta'?75:25;
      $('#hyLbl',root).textContent=pair==='maimuta'?'om + maimuță':'om + șoarece'; $('#hyTxt',root).innerHTML='Se amestecă monocatenele… și se lipesc acolo unde se potrivesc.';
      await tween(4200,p=>{ const r=hybridSVG(p,pct,pair); hy.innerHTML=r.svg; $('#hyPct',root).textContent=r.pct+'%'; $('#hyBar',root).style.width=r.pct+'%'; },hy,eio);
      if(!hy.isConnected){ hbusy=false; return; }
      const r=hybridSVG(1,pct,pair); hy.innerHTML=r.svg; $('#hyPct',root).textContent=pct+'%'; $('#hyBar',root).style.width=pct+'%';
      $('#hyTxt',root).innerHTML=pct>=50?`<b>${pct}% renaturare</b> → <b>înrudire mare</b>: ADN-ul omului se potrivește bine cu cel de maimuță.`:`<b>${pct}% renaturare</b> → <b>înrudire mică</b>: ADN-ul omului se potrivește slab cu cel de șoarece.`;
      addXP(2); hbusy=false; });
    hy.innerHTML=hybridSVG(0,75,'maimuta').svg;
    /* detectiv */
    const dt=$('#detective',root);
    function detective(){
      const father=Math.floor(Math.random()*3), vals=[0,1,2].map(i=>i===father?98+Math.floor(Math.random()*2):38+Math.floor(Math.random()*20)); let revealed=false;
      dt.innerHTML=`<p style="margin-top:0"><b>Cazul:</b> cine este tatăl copilului? Compară ADN-ul copilului (👶) cu al celor 3 candidați.</p>
        <div class="grid3">${[0,1,2].map(i=>`<div class="card center" style="margin:0"><div style="font-size:2rem">${['👨🏻','👨🏽','👨🏿'][i]}</div><b>Candidat ${'ABC'[i]}</b><div class="bar" style="margin:8px 0"><i data-bar="${i}" style="width:0%"></i></div><div class="small" data-v="${i}">?</div><button class="btn ghost sm" data-pick="${i}" style="margin-top:8px">Acesta e tatăl</button></div>`).join('')}</div>
        <div class="row" style="margin-top:12px;justify-content:center"><button class="btn" id="dCmp">🧪 Compară ADN-ul</button></div><div id="dOut"></div>`;
      $('#dCmp',dt).onclick=async()=>{ if(revealed) return; revealed=true; await tween(1800,p=>{ vals.forEach((v,i)=>{ $(`[data-bar="${i}"]`,dt).style.width=(v*p)+'%'; $(`[data-v="${i}"]`,dt).textContent=Math.round(v*p)+'% renaturare'; }); },dt,eio); };
      $$('[data-pick]',dt).forEach(b=>b.onclick=()=>{ if(!revealed){ toast('Mai întâi apasă „Compară ADN-ul” 🧪'); return; } const ok=+b.dataset.pick===father; $('#dOut',dt).innerHTML=`<div class="res ${ok?'ok':'bad'}" style="margin-top:12px">${ok?'✅ Corect!':'❌ Nu chiar.'} Tatăl este <b>candidatul ${'ABC'[father]}</b>: ADN-ul lui se potrivește cel mai bine (${vals[father]}% renaturare). <button class="btn sm ghost" id="dNew" style="margin-left:8px">Alt caz</button></div>`; if(ok){ addXP(4); confetti(8); } $('#dNew',dt).onclick=detective; });
    }
    detective();
  }
});
