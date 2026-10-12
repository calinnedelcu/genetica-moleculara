'use strict';
/* =========================================================
   gfx.js — bibliotecă grafică: paletă, gradiente, primitive SVG,
   funcții de easing și player pentru animații derulabile.
   ========================================================= */

/* ---------- paletă & reguli biologice ---------- */
const PAL = {
  A:['#ffa3a3','#ef4444','#9f1c1c'],
  T:['#9cc9ff','#3b82f6','#1d3fa8'],
  G:['#8df0b0','#22c55e','#15663a'],
  C:['#fde68a','#f5a30b','#a8570a'],
  U:['#e6d2ff','#a855f7','#65209b']
};
const BASE_COLOR = {A:PAL.A[1],T:PAL.T[1],G:PAL.G[1],C:PAL.C[1],U:PAL.U[1]};
const COMP_DNA   = {A:'T',T:'A',C:'G',G:'C'};
const COMP_RNA   = {A:'U',U:'A',C:'G',G:'C'};
const TRANSCRIBE = {A:'U',T:'A',C:'G',G:'C'};
const isPurine = l => l==='A'||l==='G';
const bondsOf  = (a,b) => ([a,b].includes('C') ? 3 : 2);
const baseChip = b => `<span class="base b${b}">${b}</span>`;
const seqHtml  = s => `<span class="seq">${[...s].map(baseChip).join('')}</span>`;
const circled  = s => `<span class="circ">${s}</span>`;

/* ---------- matematică & easing ---------- */
const clamp = (x,a=0,b=1) => Math.min(b,Math.max(a,x));
const lerp  = (a,b,t) => a+(b-a)*t;
const seg   = (t,a,b) => clamp((t-a)/(b-a));          // progresul lui t în [a,b]
const eio   = x => x<.5 ? 2*x*x : 1-Math.pow(-2*x+2,2)/2;   // in-out pătratic
const eio3  = x => x<.5 ? 4*x*x*x : 1-Math.pow(-2*x+2,3)/2;
const eoc   = x => 1-Math.pow(1-x,3);                       // out cubic
const eob   = x => { const c1=1.70158, c3=c1+1; return 1+c3*Math.pow(x-1,3)+c1*Math.pow(x-1,2); };  // out back
const f1    = n => Math.round(n*10)/10;
const mix2  = (p,q,t) => [lerp(p[0],q[0],t), lerp(p[1],q[1],t)];
const fmtTime = s => { s=Math.max(0,Math.round(s)); return Math.floor(s/60)+':'+String(s%60).padStart(2,'0'); };
/* pseudo-aleator determinist */
const rnd = n => { const x=Math.sin(n*127.1+311.7)*43758.5453; return x-Math.floor(x); };

/* ---------- definiții SVG (gradiente, filtre) ---------- */
function injectDefs(){
  if(document.getElementById('gfx-defs')) return;
  const d=document.createElement('div'); d.id='gfx-defs'; d.setAttribute('aria-hidden','true');
  d.style.cssText='position:absolute;width:0;height:0;overflow:hidden';
  const ball=Object.entries(PAL).map(([k,[l,b,dk]])=>`
    <radialGradient id="gb${k}" cx="35%" cy="28%" r="85%"><stop offset="0" stop-color="${l}"/><stop offset=".5" stop-color="${b}"/><stop offset="1" stop-color="${dk}"/></radialGradient>
    <linearGradient id="gt${k}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${l}"/><stop offset=".55" stop-color="${b}"/><stop offset="1" stop-color="${dk}"/></linearGradient>`).join('');
  d.innerHTML=`<svg width="0" height="0"><defs>${ball}
    <radialGradient id="gSugar" cx="35%" cy="28%" r="85%"><stop offset="0" stop-color="#c3cee0"/><stop offset=".6" stop-color="#7a8aa6"/><stop offset="1" stop-color="#46546e"/></radialGradient>
    <radialGradient id="gPhos" cx="35%" cy="28%" r="85%"><stop offset="0" stop-color="#fff6b8"/><stop offset=".5" stop-color="#f7b500"/><stop offset="1" stop-color="#b87400"/></radialGradient>
    <radialGradient id="gOx" cx="35%" cy="28%" r="85%"><stop offset="0" stop-color="#ffb4b4"/><stop offset=".6" stop-color="#ef4444"/><stop offset="1" stop-color="#991b1b"/></radialGradient>
    <radialGradient id="gPolD" cx="32%" cy="25%" r="90%"><stop offset="0" stop-color="#d9ccff"/><stop offset=".45" stop-color="#8b5cf6"/><stop offset="1" stop-color="#4c1d95"/></radialGradient>
    <radialGradient id="gPolR" cx="32%" cy="25%" r="90%"><stop offset="0" stop-color="#fbcfe8"/><stop offset=".45" stop-color="#ec4899"/><stop offset="1" stop-color="#831843"/></radialGradient>
    <radialGradient id="gRibL" cx="35%" cy="25%" r="90%"><stop offset="0" stop-color="#c7d2fe"/><stop offset=".5" stop-color="#6366f1"/><stop offset="1" stop-color="#312e81"/></radialGradient>
    <radialGradient id="gRibS" cx="35%" cy="25%" r="90%"><stop offset="0" stop-color="#bae6fd"/><stop offset=".5" stop-color="#38bdf8"/><stop offset="1" stop-color="#075985"/></radialGradient>
    <radialGradient id="gHi" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#fff" stop-opacity=".75"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></radialGradient>
    <linearGradient id="gGlass" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#fff" stop-opacity=".55"/><stop offset=".25" stop-color="#fff" stop-opacity=".12"/><stop offset=".8" stop-color="#fff" stop-opacity=".05"/><stop offset="1" stop-color="#fff" stop-opacity=".35"/></linearGradient>
    <linearGradient id="gLiquid" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#cfe9ff"/><stop offset="1" stop-color="#5eaef0"/></linearGradient>
    <linearGradient id="gSteel" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f1f5f9"/><stop offset="1" stop-color="#94a3b8"/></linearGradient>
    <linearGradient id="gOld" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#475569"/><stop offset="1" stop-color="#1e293b"/></linearGradient>
    <radialGradient id="gCell" cx="50%" cy="40%" r="75%"><stop offset="0" stop-color="#fff8e1"/><stop offset="1" stop-color="#ffe7a8"/></radialGradient>
    <radialGradient id="gAgar" cx="40%" cy="35%" r="80%"><stop offset="0" stop-color="#fffbe8"/><stop offset="1" stop-color="#ffe7a3"/></radialGradient>
    <radialGradient id="gColS" cx="35%" cy="30%" r="80%"><stop offset="0" stop-color="#ffe4e6"/><stop offset=".45" stop-color="#fb7185"/><stop offset="1" stop-color="#be123c"/></radialGradient>
    <radialGradient id="gColR" cx="40%" cy="35%" r="80%"><stop offset="0" stop-color="#e0f2fe"/><stop offset=".6" stop-color="#7dd3fc"/><stop offset="1" stop-color="#0284c7"/></radialGradient>
    <linearGradient id="gMouse" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f1f5f9"/><stop offset="1" stop-color="#a8b3c4"/></linearGradient>
    <linearGradient id="gFlame" x1="0" y1="1" x2="0" y2="0"><stop offset="0" stop-color="#ef4444"/><stop offset=".55" stop-color="#fb923c"/><stop offset="1" stop-color="#fde047"/></linearGradient>
    <linearGradient id="gField" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#e6f7ff"/><stop offset="1" stop-color="#d4ecff"/></linearGradient>
    <filter id="fSh" x="-30%" y="-30%" width="160%" height="170%"><feDropShadow dx="0" dy="2.2" stdDeviation="2.2" flood-color="#0b1020" flood-opacity=".3"/></filter>
    <filter id="fGlow" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="3.2" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
    <filter id="fBlur" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="6"/></filter>
  </defs></svg>`;
  document.body.prepend(d);
}

/* ---------- căi netede (Catmull-Rom → Bézier) ---------- */
function smoothPath(pts){
  if(pts.length<2) return '';
  let d=`M${f1(pts[0][0])} ${f1(pts[0][1])}`;
  for(let i=0;i<pts.length-1;i++){
    const p0=pts[i-1]||pts[i], p1=pts[i], p2=pts[i+1], p3=pts[i+2]||p2;
    d+=` C${f1(p1[0]+(p2[0]-p0[0])/6)} ${f1(p1[1]+(p2[1]-p0[1])/6)} ${f1(p2[0]-(p3[0]-p1[0])/6)} ${f1(p2[1]-(p3[1]-p1[1])/6)} ${f1(p2[0])} ${f1(p2[1])}`;
  }
  return d;
}
/* panglică lucioasă (schelet zahăr-fosfat) */
function ribbon(pts,color,w=6,o={}){
  if(pts.length<2) return '';
  const d=smoothPath(pts), op=o.op??1;
  return `<g opacity="${op}"><path d="${d}" fill="none" stroke="${color}" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round"${o.dash?` stroke-dasharray="${o.dash}"`:''}/>`+
    (o.gloss===false?'':`<path d="${d}" fill="none" stroke="#fff" stroke-opacity=".3" stroke-width="${w*.3}" stroke-linecap="round" transform="translate(${-w*.17} ${-w*.17})"/>`)+`</g>`;
}

/* ---------- primitive de moleculă ---------- */
/* bilă cu literă (baza azotată) */
function ball(x,y,l,r=13,o={}){
  const op=o.op??1;
  return `<g opacity="${op}"><circle cx="${f1(x)}" cy="${f1(y)}" r="${r}" fill="url(#gb${l})" stroke="${PAL[l][2]}" stroke-width="1.1"${o.glow?' filter="url(#fGlow)"':''}/>`+
         `<ellipse cx="${f1(x-r*.28)}" cy="${f1(y-r*.4)}" rx="${r*.38}" ry="${r*.22}" fill="#fff" opacity=".35"/>`+
         `<text x="${f1(x)}" y="${f1(y+r*.36)}" text-anchor="middle" class="bl" style="font-size:${f1(r*1.05)}px">${l}</text></g>`;
}
/* dală (purinele sunt mai lungi decât pirimidinele) — xb = x al scheletului, dir = +1 spre dreapta */
const TILE_GAP=9, TILE_PUR=40, TILE_PYR=28, TILE_H=24;
const tileLen = l => isPurine(l)?TILE_PUR:TILE_PYR;
const tileTip = (xb,l,dir) => dir>0 ? xb+TILE_GAP+tileLen(l) : xb-TILE_GAP-tileLen(l);
function tile(xb,y,l,dir,o={}){
  const len=tileLen(l), h=o.h||TILE_H, x0=dir>0?xb+TILE_GAP:xb-TILE_GAP-len, op=o.op??1;
  let s=`<g opacity="${op}">`;
  if(!o.nostub) s+=`<line x1="${f1(xb)}" y1="${f1(y)}" x2="${f1(dir>0?x0:x0+len)}" y2="${f1(y)}" stroke="#5b6b86" stroke-width="3.2" stroke-linecap="round"/>`;
  s+=`<rect x="${f1(x0)}" y="${f1(y-h/2)}" width="${len}" height="${h}" rx="8" fill="url(#gt${l})" stroke="${PAL[l][2]}" stroke-width="1.2"${o.glow?' filter="url(#fGlow)"':''}/>`;
  s+=`<rect x="${f1(x0+2.5)}" y="${f1(y-h/2+2.2)}" width="${len-5}" height="${f1(h*.34)}" rx="4.5" fill="#fff" opacity=".24"/>`;
  if(isPurine(l)) s+=`<line x1="${f1(x0+len*.58)}" y1="${f1(y-h/2+5)}" x2="${f1(x0+len*.58)}" y2="${f1(y+h/2-5)}" stroke="#fff" stroke-opacity=".38" stroke-width="1.4"/>`;
  s+=`<text x="${f1(x0+len/2)}" y="${f1(y+5.2)}" text-anchor="middle" class="bl" style="font-size:14px">${l}</text></g>`;
  return s;
}
/* zahăr (pentoză): pentagon */
function sugar(x,y,r=8,o={}){
  const pts=[0,1,2,3,4].map(k=>{const a=(-90+72*k)*Math.PI/180; return `${f1(x+r*Math.cos(a))},${f1(y+r*Math.sin(a))}`;}).join(' ');
  return `<polygon points="${pts}" fill="url(#gSugar)" stroke="#34415a" stroke-width="1.1" stroke-linejoin="round" opacity="${o.op??1}"/>`;
}
/* radical fosfat */
function phos(x,y,r=6,o={}){
  const op=o.op??1, sc=o.s??1;
  return `<g opacity="${op}"><circle cx="${f1(x)}" cy="${f1(y)}" r="${f1(r*sc)}" fill="url(#gPhos)" stroke="#a86500" stroke-width="1"/>`+
         (r*sc>=7?`<text x="${f1(x)}" y="${f1(y+r*sc*.36)}" text-anchor="middle" style="font:900 ${f1(r*sc*1.05)}px var(--font);fill:#6b3d00">P</text>`:'')+`</g>`;
}
/* legături de hidrogen între x1 și x2 la înălțimea y */
function hb(x1,x2,y,n,o={}){
  const p=o.p??1; if(p<=0) return '';
  const ys=n===3?[-7.5,0,7.5]:[-5,5];
  const col=o.color||'var(--hb)';
  return ys.map(dy=>`<line x1="${f1(x1)}" y1="${f1(y+dy)}" x2="${f1(x1+(x2-x1)*p)}" y2="${f1(y+dy)}" stroke="${col}" stroke-width="2.4" stroke-dasharray="3.4 2.8" stroke-linecap="round" opacity="${o.op??1}"/>`).join('');
}
/* nucleotid liber: fosfat – zahăr – bază (baza spre `dir`) */
function nucUnit(xb,y,l,dir,o={}){
  const s=o.s??1, op=o.op??1;
  let g=`<g transform="translate(${f1(xb)} ${f1(y)}) scale(${s}) translate(${-f1(xb)} ${-f1(y)})" opacity="${op}">`;
  g+=tile(xb,y,l,dir,{nostub:false});
  g+=`<line x1="${f1(xb)}" y1="${f1(y)}" x2="${f1(xb)}" y2="${f1(y-17)}" stroke="#5b6b86" stroke-width="3"/>`;
  g+=phos(xb,y-19,5.4)+sugar(xb,y,8)+'</g>';
  return g;
}
/* etichetă „pastilă” */
function pill(x,y,txt,o={}){
  const fs=o.fs||12, w=o.w||Math.max(34,txt.length*fs*.58+16), h=fs+10, op=o.op??1;
  const fill=o.fill||'var(--card)', col=o.color||'var(--ink)', stroke=o.stroke||'var(--line)';
  const x0=o.anchor==='start'?x:o.anchor==='end'?x-w:x-w/2;
  return `<g opacity="${op}"><rect x="${f1(x0)}" y="${f1(y-h/2)}" width="${f1(w)}" height="${h}" rx="${h/2}" fill="${fill}" stroke="${stroke}" stroke-width="1.2"${o.shadow===false?'':' filter="url(#fSh)"'}/>`+
         `<text x="${f1(x0+w/2)}" y="${f1(y+fs*.36)}" text-anchor="middle" style="font:800 ${fs}px var(--font);fill:${col}">${txt}</text></g>`;
}
/* etichetă cu linie spre un punct */
function callout(tx,ty,px,py,txt,o={}){
  const op=o.op??1;
  return `<g opacity="${op}"><line x1="${f1(tx)}" y1="${f1(ty)}" x2="${f1(px)}" y2="${f1(py)}" stroke="${o.lc||'var(--muted)'}" stroke-width="1.6"/><circle cx="${f1(px)}" cy="${f1(py)}" r="3.2" fill="${o.lc||'var(--muted)'}"/></g>`+pill(tx,ty,txt,o);
}
/* scânteie (efect la tăierea legăturilor) */
function spark(x,y,p,o={}){
  if(p<=0||p>=1) return '';
  const r1=4+p*18, r2=r1+8*(1-p), col=o.color||'#fbbf24';
  let s=`<g opacity="${1-p}" stroke="${col}" stroke-width="2.4" stroke-linecap="round">`;
  for(let k=0;k<8;k++){ const a=k*Math.PI/4+.3; s+=`<line x1="${f1(x+r1*Math.cos(a))}" y1="${f1(y+r1*Math.sin(a))}" x2="${f1(x+r2*Math.cos(a))}" y2="${f1(y+r2*Math.sin(a))}"/>`; }
  return s+'</g>';
}
/* foarfecă (ADN-polimeraza „taie” legăturile de H) — open în grade */
function scissors(x,y,open,s=1,rot=0){
  const half=sg=>`<g transform="scale(1 ${sg}) rotate(${-open})"><path d="M-3 -2.4 L27 -.4 L27 1 L-3 2.4 Z" fill="url(#gSteel)" stroke="#475569" stroke-width="1" stroke-linejoin="round"/><path d="M-3 0 L-12 8" stroke="#475569" stroke-width="2.4" stroke-linecap="round" fill="none"/><circle cx="-17" cy="10" r="5.3" fill="none" stroke="#e11d48" stroke-width="2.6"/></g>`;
  return `<g transform="translate(${f1(x)} ${f1(y)}) rotate(${rot}) scale(${s})">${half(1)}${half(-1)}<circle r="2.3" fill="#334155"/></g>`;
}
/* enzimă: blob organic cu contur unit */
function enzyme(cx,cy,w,h,o={}){
  const kind=o.kind==='rna'?'rna':'dna', grad=kind==='rna'?'gPolR':'gPolD', stroke=kind==='rna'?'#831843':'#3b1a7a', fill=kind==='rna'?'#ec4899':'#8b5cf6';
  const lumps=o.lumps||[[0,0,w*.5,h*.5],[-w*.3,-h*.12,w*.27,h*.46],[w*.3,-h*.08,w*.26,h*.44],[0,h*.22,w*.34,h*.34]];
  const op=o.op??1, rot=o.rot||0;
  let s=`<g opacity="${op}" transform="translate(${f1(cx)} ${f1(cy)}) rotate(${rot})"${o.shadow?' filter="url(#fSh)"':''}>`;
  s+=lumps.map(([x,y,rx,ry])=>`<ellipse cx="${f1(x)}" cy="${f1(y)}" rx="${f1(rx)}" ry="${f1(ry)}" fill="${stroke}" stroke="${stroke}" stroke-width="5"/>`).join('');
  s+=lumps.map(([x,y,rx,ry])=>`<ellipse cx="${f1(x)}" cy="${f1(y)}" rx="${f1(rx)}" ry="${f1(ry)}" fill="${fill}"/>`).join('');
  s+=lumps.map(([x,y,rx,ry])=>`<ellipse cx="${f1(x)}" cy="${f1(y)}" rx="${f1(rx)}" ry="${f1(ry)}" fill="url(#${grad})"/>`).join('');
  s+=`<ellipse cx="${f1(-w*.12)}" cy="${f1(-h*.28)}" rx="${f1(w*.26)}" ry="${f1(h*.15)}" fill="url(#gHi)"/>`;
  if(o.label) s+=`<text x="0" y="${f1((o.ly??0)+4.5)}" text-anchor="middle" style="font:900 ${o.fs||13}px var(--font);fill:#fff;paint-order:stroke;stroke:${stroke};stroke-width:3px">${o.label}</text>`;
  return s+'</g>';
}
/* fundal „citoplasmă”: bule discrete */
function cytoBg(w,h,seed=1,n=18){
  let s='';
  for(let i=0;i<n;i++){ const x=rnd(i*3+seed)*w, y=rnd(i*5+seed+9)*h, r=8+rnd(i+seed*7)*26;
    s+=`<circle cx="${f1(x)}" cy="${f1(y)}" r="${f1(r)}" fill="var(--brand)" opacity="${f1(.035+rnd(i*2+seed)*.04)}"/>`; }
  return s;
}
/* săgeată */
function arrow(x1,y1,x2,y2,color='var(--muted)',w=3,head=9){
  const a=Math.atan2(y2-y1,x2-x1), hx=x2-head*Math.cos(a), hy=y2-head*Math.sin(a);
  return `<line x1="${f1(x1)}" y1="${f1(y1)}" x2="${f1(hx)}" y2="${f1(hy)}" stroke="${color}" stroke-width="${w}" stroke-linecap="round"/>`+
         `<polygon points="${f1(x2)},${f1(y2)} ${f1(hx+head*.55*Math.sin(a))},${f1(hy-head*.55*Math.cos(a))} ${f1(hx-head*.55*Math.sin(a))},${f1(hy+head*.55*Math.cos(a))}" fill="${color}"/>`;
}

/* =========================================================
   Player pentru animații derulabile
   render(t) -> markup SVG (interior); chapters: [{t,title,cap}]
   ========================================================= */
function scenePlayer(host, cfg){
  const dur=cfg.dur, chapters=cfg.chapters||[], speeds=cfg.speeds||[0.5,1,2];
  host.innerHTML=`<div class="scene ${cfg.single?'single':''}">
    <div class="stage"><svg viewBox="${cfg.vb}" role="img" aria-label="${cfg.label||'animație'}"></svg></div>
    ${cfg.single?'':`<div class="scene-side"><div class="chap-row">${chapters.map((c,i)=>`<button class="chap" data-c="${i}"><b>${i+1}</b><span>${c.title}</span></button>`).join('')}</div><div class="scene-cap"></div>${cfg.side||''}</div>`}
    <div class="ctl">
      <button class="ib" data-a="play" aria-label="Redă / pauză">${icon('play')}</button>
      <button class="ib sec" data-a="restart" aria-label="De la început">${icon('restart')}</button>
      <button class="ib sec" data-a="prev" aria-label="Pasul anterior">${icon('prev')}</button>
      <button class="ib sec" data-a="next" aria-label="Pasul următor">${icon('next')}</button>
      <input type="range" min="0" max="1000" value="0" aria-label="Derulare">
      <span class="tm">0:00</span>
      <button class="sp" data-a="speed" aria-label="Viteză">1×</button>
    </div>${cfg.single?'<div class="scene-cap" style="margin-top:10px"></div>':''}</div>`;
  const svg=$('svg',host), cap=$('.scene-cap',host), slider=$('input',host), tm=$('.tm',host), playBtn=$('[data-a=play]',host), spBtn=$('[data-a=speed]',host);
  const chBtns=$$('.chap',host);
  let t=cfg.start||0, playing=false, speed=1, target=null, last=0, raf=0, ci=-1, dirty=true, sp=speeds.indexOf(1);
  const api={};
  const chapAt=x=>{ let k=-1; chapters.forEach((c,i)=>{ if(x>=c.t-1e-6) k=i; }); return k; };
  function draw(){
    svg.innerHTML=cfg.render(t,api);
    slider.value=Math.round(t/dur*1000); tm.textContent=fmtTime(t)+' / '+fmtTime(dur);
    const k=chapAt(t);
    if(k!==ci){ ci=k; const c=chapters[k]; cap.innerHTML=c?`<b>Pasul ${k+1}.</b> ${c.cap}`:(cfg.intro||''); chBtns.forEach((b,i)=>{ b.classList.toggle('on',i===k); b.classList.toggle('done',i<k); }); if(cfg.onChapter) cfg.onChapter(k); }
    dirty=false;
  }
  function setPlaying(v){ playing=v; playBtn.innerHTML=icon(v?'pause':'play'); if(v){ last=performance.now(); if(!raf) raf=requestAnimationFrame(loop); } }
  function loop(now){
    raf=0;
    if(!host.isConnected){ playing=false; return; }
    if(playing){
      const dt=Math.min(.06,(now-last)/1000); last=now; t+=dt*speed; dirty=true;
      if(target!=null && t>=target){ t=target; target=null; setPlaying(false); }
      if(t>=dur){ t=dur; target=null; setPlaying(false); }
    }
    if(dirty) draw();
    if(playing) raf=requestAnimationFrame(loop);
  }
  function seek(x){ t=clamp(x,0,dur); dirty=true; if(!raf) raf=requestAnimationFrame(loop); }
  api.seek=seek; api.play=()=>setPlaying(true); api.pause=()=>setPlaying(false); api.refresh=()=>{ dirty=true; if(!raf) raf=requestAnimationFrame(loop); }; api.t=()=>t; api.host=host;
  host.addEventListener('click',e=>{
    const a=e.target.closest('[data-a]'), c=e.target.closest('.chap');
    if(c){ const i=+c.dataset.c; seek(chapters[i].t); const end=chapters[i+1]?chapters[i+1].t:dur; target=end; setPlaying(true); return; }
    if(!a) return;
    const k=a.dataset.a;
    if(k==='play'){ if(playing){ setPlaying(false); } else { target=null; if(t>=dur-.01) t=0; setPlaying(true); } }
    if(k==='restart'){ target=null; seek(0); setPlaying(true); }
    if(k==='next'){ const n=chapters.find(c=>c.t>t+.05); if(n){ target=n.t; setPlaying(true); } else { seek(dur); setPlaying(false); } }
    if(k==='prev'){ const cur=chapAt(t); const prev=(t-(chapters[cur]||{t:0}).t>1.2)?chapters[cur]:chapters[Math.max(0,cur-1)]; setPlaying(false); seek(prev?prev.t:0); }
    if(k==='speed'){ sp=(sp+1)%speeds.length; speed=speeds[sp]; spBtn.textContent=speed+'×'; }
  });
  slider.addEventListener('input',()=>{ setPlaying(false); target=null; seek(+slider.value/1000*dur); });
  draw();
  if(cfg.autoplay) setPlaying(true);
  return api;
}

/* ---------- utilitare suplimentare ---------- */
function mixHex(a,b,t){
  const pa=parseInt(a.slice(1),16), pb=parseInt(b.slice(1),16);
  const r=lerp(pa>>16,pb>>16,t), g=lerp((pa>>8)&255,(pb>>8)&255,t), bl=lerp(pa&255,pb&255,t);
  return `rgb(${r|0},${g|0},${bl|0})`;
}
/* animație simplă pe timp: fn(p) cu p ∈ [0,1]; se oprește dacă elementul `el` a fost scos din pagină */
function tween(ms,fn,el,ease=x=>x){
  return new Promise(res=>{ const t0=performance.now();
    (function step(now){ if(el&&!el.isConnected){ res(); return; } const p=clamp((now-t0)/ms); fn(ease(p)); if(p<1) requestAnimationFrame(step); else res(); })(t0); });
}
const sleepMs = ms => new Promise(r=>setTimeout(r,ms));
/* amestec în HSL (culori mai vii la tranziție) */
function hexToHsl(hex){ const n=parseInt(hex.slice(1),16); let r=(n>>16)/255,g=((n>>8)&255)/255,b=(n&255)/255; const mx=Math.max(r,g,b), mn=Math.min(r,g,b); let h=0,s=0,l=(mx+mn)/2; const d=mx-mn;
  if(d){ s=l>.5?d/(2-mx-mn):d/(mx+mn); h=mx===r?((g-b)/d+(g<b?6:0)):mx===g?((b-r)/d+2):((r-g)/d+4); h*=60; } return [h,s*100,l*100]; }
function mixHsl(a,b,t){ const A=hexToHsl(a), B=hexToHsl(b); let dh=B[0]-A[0]; if(dh<0) dh+=360; return `hsl(${(A[0]+dh*t)%360} ${lerp(A[1],B[1],t)}% ${lerp(A[2],B[2],t)}%)`; }
/* animație continuă pe un <svg> (se oprește când elementul dispare) */
function liveSVG(svg,render){
  let alive=true;
  (function loop(now){ if(!alive||!svg.isConnected) return; svg.innerHTML=render(now/1000); requestAnimationFrame(loop); })(performance.now());
  return ()=>{ alive=false; };
}
