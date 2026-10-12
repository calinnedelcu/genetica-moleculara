'use strict';
/* =========================================================
   helix.js — dublu helix 3D pe canvas (rotație cu mouse/deget)
   ========================================================= */
function createHelix(canvas, opts={}){
  const o=Object.assign({pairs:16,auto:true,speed:.55,mode:2,arrows:false,letters:true,interactive:true,tilt:.28,seq:'ATGCGTACCTGAACGTTAGCATGGCTA',onPick:null,rungWidth:1,margin:1.1},opts);
  const ctx=canvas.getContext('2d');
  const N=o.pairs, SUB=4, TWIST=2*Math.PI/10.5, DY=.3, R=1.3, OFF=Math.PI*.93;
  const seq=Array.from({length:N},(_,i)=>o.seq[i%o.seq.length]);
  const comp=seq.map(b=>COMP_DNA[b]);
  let rot=0, vel=0, tilt=o.tilt, auto=o.auto, drag=null, hover=-1, sel=-1, raf=0, W=0,H=0,dpr=1, sc=50, alive=true;

  function size(){
    dpr=window.devicePixelRatio||1; const w=canvas.clientWidth, h=canvas.clientHeight;
    if(canvas.width!==Math.round(w*dpr)||canvas.height!==Math.round(h*dpr)){ canvas.width=Math.round(w*dpr); canvas.height=Math.round(h*dpr); }
    W=w; H=h; const hh=(N-1)*DY+o.margin*1.6;
    sc=Math.min(H/hh, W/(2*R+1.9)*1.0);
  }
  /* proiecție 3D → ecran */
  function proj(x,y,z){
    const ct=Math.cos(tilt), st=Math.sin(tilt);
    const y2=y*ct-z*st, z2=y*st+z*ct, p=1+z2*.045;
    return {x:W/2+x*sc*p, y:H/2+y2*sc*p, z:z2, p};
  }
  function backbonePt(strand,u){            // u = indice real (poate fi fracționar)
    const a=rot+u*TWIST+(strand?OFF:0);
    return proj(R*Math.cos(a), (u-(N-1)/2)*DY, R*Math.sin(a));
  }
  let fog=[232,236,251];
  const shade=(hex,k)=>{ // k>0 mai deschis; k<0 se amestecă cu „ceața” (perspectivă atmosferică)
    const n=parseInt(hex.slice(1),16); let r=n>>16,g=(n>>8)&255,b=n&255;
    if(k>=0){ r+=(255-r)*k; g+=(255-g)*k; b+=(255-b)*k; } else { const m=-k; r+=(fog[0]-r)*m; g+=(fog[1]-g)*m; b+=(fog[2]-b)*m; }
    return `rgb(${r|0},${g|0},${b|0})`;
  };
  const depthK=z=>clamp(z*.34,-.5,.28);

  function frame(){
    if(!alive||!canvas.isConnected){ alive=false; return; }
    raf=requestAnimationFrame(frame);
    if(document.hidden) return;
    size(); fog=document.documentElement.getAttribute('data-theme')==='dark'?[16,23,44]:[232,236,251];
    if(drag){ /* controlat de pointer */ }
    else { if(auto) rot+=o.speed*.018; rot+=vel; vel*=.94; if(Math.abs(vel)<1e-4) vel=0; }
    ctx.setTransform(dpr,0,0,dpr,0,0); ctx.clearRect(0,0,W,H);
    /* aură */
    const g=ctx.createRadialGradient(W/2,H/2,5,W/2,H/2,Math.max(W,H)*.5); g.addColorStop(0,'rgba(120,110,255,.16)'); g.addColorStop(1,'rgba(120,110,255,0)');
    ctx.fillStyle=g; ctx.fillRect(0,0,W,H);
    const items=[];
    const two=o.mode===2;
    /* schelete (probe fine) */
    for(let s=0;s<(two?2:1);s++){
      const col=s?'#f97316':(fog[0]<100?'#a8b6cc':'#475569');
      let prev=backbonePt(s,0);
      for(let k=1;k<=(N-1)*SUB;k++){
        const cur=backbonePt(s,k/SUB), a=prev, z=(a.z+cur.z)/2, w=(.17*sc*(1+z*.04));
        items.push({z,fn:()=>{ ctx.lineCap='round'; ctx.strokeStyle=shade(col,depthK(z)-.1); ctx.lineWidth=w; ctx.beginPath(); ctx.moveTo(a.x,a.y); ctx.lineTo(cur.x,cur.y); ctx.stroke();
          ctx.strokeStyle='rgba(255,255,255,.32)'; ctx.lineWidth=w*.3; ctx.beginPath(); ctx.moveTo(a.x-w*.17,a.y-w*.17); ctx.lineTo(cur.x-w*.17,cur.y-w*.17); ctx.stroke(); }});
        prev=cur;
      }
      /* zahăr + fosfat */
      for(let i=0;i<N;i++){
        const p=backbonePt(s,i); items.push({z:p.z+.02,fn:()=>sphere(p.x,p.y,.13*sc*p.p,'#8a98b3',p.z)});
        if(i<N-1){ const m=backbonePt(s,i+.5); items.push({z:m.z+.02,fn:()=>sphere(m.x,m.y,.095*sc*m.p,'#f7b500',m.z)}); }
      }
    }
    /* baze */
    for(let i=0;i<N;i++){
      const b1=seq[i], b2=comp[i], p1=backbonePt(0,i), p2=backbonePt(1,i);
      const pur1=isPurine(b1), f1r=two?(pur1?.58:.42):.5;
      const mx=lerp(p1.x,p2.x,f1r), my=lerp(p1.y,p2.y,f1r), mz=lerp(p1.z,p2.z,f1r);
      const act=(i===hover||i===sel);
      const wRod=.2*sc*o.rungWidth*(act?1.25:1);
      const rod=(a,bx,by,bz,l,z)=>items.push({z,fn:()=>{
        ctx.lineCap='round'; ctx.strokeStyle=shade(BASE_COLOR[l],depthK(z)-.05); ctx.lineWidth=wRod; ctx.beginPath(); ctx.moveTo(a.x,a.y); ctx.lineTo(bx,by); ctx.stroke();
        ctx.strokeStyle='rgba(255,255,255,.34)'; ctx.lineWidth=wRod*.3; ctx.beginPath(); ctx.moveTo(a.x-wRod*.15,a.y-wRod*.15); ctx.lineTo(bx-wRod*.15,by-wRod*.15); ctx.stroke();
        if(o.letters){ const dx=bx-a.x, dy=by-a.y, len=Math.hypot(dx,dy); if(len>16&&z>-.2){ ctx.fillStyle='#fff'; ctx.font=`900 ${Math.max(9,Math.min(14,wRod*.85))|0}px Nunito,system-ui,sans-serif`; ctx.textAlign='center'; ctx.textBaseline='middle'; ctx.lineWidth=2.4; ctx.strokeStyle='rgba(0,0,0,.4)'; const tx=a.x+dx*.4,ty=a.y+dy*.4; ctx.strokeText(l,tx,ty); ctx.fillText(l,tx,ty); } }
      }});
      if(two){
        rod(p1,mx,my,mz,b1,(p1.z+mz)/2); rod(p2,mx,my,mz,b2,(p2.z+mz)/2);
        /* legături H */
        const n=bondsOf(b1,b2), z=mz+.03;
        items.push({z,fn:()=>{ ctx.fillStyle='rgba(255,255,255,.95)'; const dxp=(p2.x-p1.x), dyp=(p2.y-p1.y), L=Math.hypot(dxp,dyp)||1, nx=-dyp/L*.07*sc, ny=dxp/L*.07*sc; for(let k=0;k<n;k++){ const off=(k-(n-1)/2); ctx.beginPath(); ctx.arc(mx+nx*off*1.6,my+ny*off*1.6,Math.max(1.6,.045*sc),0,7); ctx.fill(); } }});
      } else {
        const ex=lerp(p1.x,proj(0,(i-(N-1)/2)*DY,0).x,.6), ey=lerp(p1.y,proj(0,(i-(N-1)/2)*DY,0).y,.6);
        rod(p1,ex,ey,p1.z,b1,p1.z);
      }
      if(act) items.push({z:mz+.5,fn:()=>{ ctx.strokeStyle='#fbbf24'; ctx.lineWidth=2.5; ctx.beginPath(); ctx.arc(mx,my,.34*sc,0,7); ctx.stroke(); }});
    }
    items.sort((a,b)=>a.z-b.z).forEach(it=>it.fn());
    /* săgeți de sens (5′→3′) + capete */
    if(o.arrows){
      const chev=(s,i0,dir)=>{ const a=backbonePt(s,i0), b=backbonePt(s,i0+.4*dir); if(a.z<-.3) return; const ang=Math.atan2(b.y-a.y,b.x-a.x), sz=.17*sc; ctx.save(); ctx.translate(a.x,a.y); ctx.rotate(ang); ctx.fillStyle=s?'#fff7ed':'#e2e8f0'; ctx.strokeStyle=s?'#c2410c':'#1e293b'; ctx.lineWidth=1.6; ctx.beginPath(); ctx.moveTo(sz*1.1,0); ctx.lineTo(-sz*.7,-sz*.9); ctx.lineTo(-sz*.7,sz*.9); ctx.closePath(); ctx.fill(); ctx.stroke(); ctx.restore(); };
      for(let i=1;i<N-1;i+=3){ chev(0,i,1); if(two) chev(1,N-1-i,-1); }
      const tag=(p,txt,col)=>{ ctx.fillStyle=col; ctx.beginPath(); ctx.arc(p.x,p.y,13,0,7); ctx.fill(); ctx.fillStyle='#fff'; ctx.font='900 12px Nunito,system-ui,sans-serif'; ctx.textAlign='center'; ctx.textBaseline='middle'; ctx.fillText(txt,p.x,p.y+1); };
      tag(backbonePt(0,0),'5′','#1e293b'); tag(backbonePt(0,N-1),'3′','#1e293b');
      if(two){ tag(backbonePt(1,N-1),'5′','#c2410c'); tag(backbonePt(1,0),'3′','#c2410c'); }
    }
  }
  function sphere(x,y,r,hex,z){
    const gr=ctx.createRadialGradient(x-r*.35,y-r*.4,r*.1,x,y,r); gr.addColorStop(0,shade(hex,.55+depthK(z))); gr.addColorStop(.6,shade(hex,depthK(z)*.6)); gr.addColorStop(1,shade(hex,-.38+depthK(z)*.4));
    ctx.fillStyle=gr; ctx.beginPath(); ctx.arc(x,y,r,0,7); ctx.fill();
  }
  /* interacțiune */
  function pickRung(px,py){
    let best=-1,bd=1e9;
    for(let i=0;i<N;i++){ const a=backbonePt(0,i), b=backbonePt(1,i); const cx=(a.x+b.x)/2, cy=(a.y+b.y)/2; const d=Math.hypot(px-cx,py-cy); if(d<bd){ bd=d; best=i; } }
    return bd<.55*sc?best:-1;
  }
  if(o.interactive){
    canvas.style.touchAction='none'; canvas.style.cursor='grab';
    canvas.addEventListener('pointerdown',e=>{ canvas.setPointerCapture(e.pointerId); drag={x:e.clientX,y:e.clientY,rot,tilt,lx:e.clientX,moved:0}; canvas.style.cursor='grabbing'; });
    canvas.addEventListener('pointermove',e=>{
      const r=canvas.getBoundingClientRect();
      if(drag){ const dx=e.clientX-drag.x, dy=e.clientY-drag.y; drag.moved+=Math.abs(e.clientX-drag.lx); vel=(e.clientX-drag.lx)*.006; drag.lx=e.clientX; rot=drag.rot+dx*.012; tilt=clamp(drag.tilt+dy*.006,-.6,.95); }
      else if(o.mode===2||true){ const i=pickRung(e.clientX-r.left,e.clientY-r.top); if(i!==hover){ hover=i; } }
    });
    const up=e=>{ if(!drag) return; const r=canvas.getBoundingClientRect(); if(drag.moved<5){ const i=pickRung(e.clientX-r.left,e.clientY-r.top); sel=i; o.onPick&&o.onPick(i, i>=0?{a:seq[i],b:comp[i],mode:o.mode}:null); } drag=null; canvas.style.cursor='grab'; };
    canvas.addEventListener('pointerup',up); canvas.addEventListener('pointercancel',()=>{drag=null;});
    canvas.addEventListener('pointerleave',()=>{ hover=-1; });
  }
  raf=requestAnimationFrame(frame);
  return {
    set(k,v){ if(k==='mode') o.mode=v; if(k==='auto') auto=v; if(k==='arrows') o.arrows=v; if(k==='letters') o.letters=v; if(k==='tilt') tilt=v; },
    get auto(){ return auto; },
    destroy(){ alive=false; cancelAnimationFrame(raf); }
  };
}
