'use strict';
/* ============ LECȚIA 6 — Structura ADN-ului ============ */

/* scena: structura I → structura II → dublu helix */
function buildScene(t){
  const N=8, cx=260, W=150, y0=84, dy=56, TW=1.0, yEnd=y0+(N-1)*dy;
  const s1='ACTGGCTA', s2=[...s1].map(b=>COMP_DNA[b]);
  const tw=eio(seg(t,11.8,17)), arrive=i=>eoc(seg(t,4.6+.38*i,6.6+.38*i)), bond=i=>eio(seg(t,8.1+.18*i,9.2+.18*i));
  const ph=y=>TW*(y-y0)/dy, X1=y=>cx-(W/2)*lerp(1,Math.cos(ph(y)),tw), X2=y=>cx+(W/2)*lerp(1,Math.cos(ph(y)),tw);
  const tileOp=1-seg(tw,0,.28), rungOp=seg(tw,.18,.6);
  let s=`<rect width="520" height="580" fill="none"/>`;
  if(tw>.04) s+=`<line x1="${cx}" y1="${y0-46}" x2="${cx}" y2="${yEnd+46}" stroke="var(--muted)" stroke-width="2.2" stroke-dasharray="7 6" opacity="${f1(seg(tw,.04,.4)*.9)}"/><text class="t-sm" x="${cx+8}" y="${y0-50}" opacity="${f1(seg(tw,.1,.5))}">axul helixului</text>`;
  /* rungs în stil helix */
  if(rungOp>0) for(let i=0;i<N;i++){ const y=y0+i*dy, a=X1(y), b=X2(y), m=(a+b)/2, c=s2[i]; s+=`<g opacity="${f1(rungOp*Math.min(1,arrive(i)))}"><line x1="${f1(a)}" y1="${y}" x2="${f1(m)}" y2="${y}" stroke="${BASE_COLOR[s1[i]]}" stroke-width="9" stroke-linecap="round"/><line x1="${f1(m)}" y1="${y}" x2="${f1(b)}" y2="${y}" stroke="${BASE_COLOR[c]}" stroke-width="9" stroke-linecap="round"/></g>`; }
  /* schelete (sortate pe adâncime) */
  const sg=[], two=seg(t,6.2,8.4), fade2=[];
  for(let y=y0-26;y<yEnd+26;y+=4){ const z=Math.sin(ph(y+2));
    sg.push({z,s:`<line x1="${f1(X1(y))}" y1="${y}" x2="${f1(X1(y+4))}" y2="${y+4}" stroke="var(--old)" stroke-width="7" stroke-linecap="round"/>`});
    const l2=`<line x1="${f1(X2(y))}" y1="${y}" x2="${f1(X2(y+4))}" y2="${y+4}" stroke="#f97316" stroke-width="7" stroke-linecap="round"/>`;
    if(two>=1) sg.push({z:-z,s:l2}); else if(two>0) fade2.push(l2); }
  s+=sg.sort((a,b)=>a.z-b.z).map(q=>q.s).join('');
  if(two>0&&two<1) s+=`<g opacity="${f1(two)}">${fade2.join('')}</g>`;
  /* zahăr + fosfat */
  for(let i=0;i<N;i++){ const y=y0+i*dy; s+=sugar(X1(y),y,8.5); if(i<N-1) s+=phos(X1(y+dy/2),y+dy/2,5.2);
    const p=arrive(i); if(p>.5){ s+=sugar(X2(y),y,8.5,{op:clamp((p-.5)*2)}); if(i<N-1&&arrive(i+1)>.5) s+=phos(X2(y+dy/2),y+dy/2,5.2,{op:clamp((arrive(i+1)-.5)*2)}); } }
  /* dale + legături H */
  for(let i=0;i<N;i++){ const y=y0+i*dy, l=s1[i], c=s2[i], a=X1(y), b=X2(y), p=arrive(i);
    if(tileOp>0){ s+=tile(a,y,l,1,{op:tileOp});
      if(p>0) s+=tile(lerp(b+300,b,p),y,c,-1,{op:tileOp*clamp(p*2)});
      if(bond(i)>0) s+=hb(tileTip(a,l,1)+3,tileTip(b,c,-1)-3,y,bondsOf(l,c),{p:bond(i),op:tileOp}); } }
  /* etichete */
  const pillT=(txt,fill,op=1)=>pill(260,34,txt,{fs:14,fill,color:'#fff',stroke:'transparent',op});
  if(t<4.6) s+=pillT('STRUCTURA I · o singură catenă','#334155');
  else if(t<8.2) s+=pillT('a doua catenă (complementară)','#f97316');
  else if(t<12.5) s+=pillT('STRUCTURA II · legături de H','#3b82f6');
  else s+=pillT('dublu helix · răsucit în jurul unui ax','#7c3aed',clamp(seg(t,12.5,13.4)));
  if(t<8) s+=callout(12,y0+dy*3.5,X1(y0+dy*3.5)-12,y0+dy*3.5,'legături fosfodiesterice',{anchor:'start',op:t<4.2?1:clamp(1-seg(t,4.2,5)),fs:12,fill:'#475569',color:'#fff',stroke:'transparent'});
  if(t>9.3&&t<12.4) s+=callout(508,y0+dy*2.5+10,cx+8,y0+dy*2.5,'legături de hidrogen',{anchor:'end',op:clamp(Math.min(seg(t,9.3,10),1-seg(t,11.8,12.4))),fs:12,fill:'#3b82f6',color:'#fff',stroke:'transparent'});
  if(t>6.6){ const o=seg(t,6.8,7.6)*(1-seg(t,12.5,13.2)); if(o>0) s+=`<g opacity="${f1(o)}"><text class="t-b" x="${f1(X1(y0)-60)}" y="${y0+4}">5′</text><text class="t-b" x="${f1(X1(yEnd)-60)}" y="${yEnd+4}">3′</text><text class="t-b" x="${f1(X2(y0)+50)}" y="${y0+4}" style="fill:#f97316">3′</text><text class="t-b" x="${f1(X2(yEnd)+50)}" y="${yEnd+4}" style="fill:#f97316">5′</text></g>`; }
  return s;
}

/* scara cu săgeți de sens (antiparalel) */
function antiLadder(mode,flip){
  const seq=['A','C','T','G','A'], comp=seq.map(b=>COMP_DNA[b]), xL=150, xR=370, y0=70, dy=52, n=5;
  const down=(x,y,col)=>`<polygon points="${x-7},${y-6} ${x+7},${y-6} ${x},${y+7}" fill="${col}" stroke="#fff" stroke-width="1.5" stroke-linejoin="round"/>`;
  const up=(x,y,col)=>`<polygon points="${x-7},${y+6} ${x+7},${y+6} ${x},${y-7}" fill="${col}" stroke="#fff" stroke-width="1.5" stroke-linejoin="round"/>`;
  let s=`<line x1="${xL}" y1="${y0-30}" x2="${xL}" y2="${y0+(n-1)*dy+30}" stroke="var(--old)" stroke-width="7" stroke-linecap="round"/><line x1="${xR}" y1="${y0-30}" x2="${xR}" y2="${y0+(n-1)*dy+30}" stroke="#f97316" stroke-width="7" stroke-linecap="round"/>`;
  for(let i=0;i<n;i++){ const y=y0+i*dy; s+=tile(xL,y,seq[i],1,{})+tile(xR,y,comp[i],-1,{})+hb(tileTip(xL,seq[i],1)+3,tileTip(xR,comp[i],-1)-3,y,bondsOf(seq[i],comp[i]))+sugar(xL,y,9)+sugar(xR,y,9);
    if(i<n-1){ const ym=y+dy/2; s+=down(xL,ym,'#e2e8f0'); s+=(mode==='anti'?up(xR,ym,'#fff7ed'):down(xR,ym,'#fff7ed')); } }
  const yb=y0+(n-1)*dy+54;
  s+=arrow(xL-62,y0-18,xL-62,y0+(n-1)*dy+20,'#334155',5,12)+`<text class="t" transform="translate(${xL-76} ${y0+(n-1)*dy/2}) rotate(-90)" text-anchor="middle">de sus în jos: C5′ → C3′</text>`;
  const a2=mode==='anti'?[xR+62,y0+(n-1)*dy+20,xR+62,y0-18]:[xR+62,y0-18,xR+62,y0+(n-1)*dy+20];
  s+=arrow(...a2,'#f97316',5,12)+`<text class="t" transform="translate(${xR+84} ${y0+(n-1)*dy/2}) rotate(90)" text-anchor="middle" style="fill:#c2410c">de sus în jos: ${mode==='anti'?'C3′ → C5′':'C5′ → C3′'}</text>`;
  const tag=(x,y,txt,col)=>`<circle cx="${x}" cy="${y}" r="15" fill="${col}"/><text x="${x}" y="${y+5}" text-anchor="middle" class="t-w">${txt}</text>`;
  s+=tag(xL,y0-44,'5′','#334155')+tag(xL,yb-6,'3′','#334155');
  s+=mode==='anti'?tag(xR,y0-44,'3′','#c2410c')+tag(xR,yb-6,'5′','#c2410c'):tag(xR,y0-44,'5′','#c2410c')+tag(xR,yb-6,'3′','#c2410c');
  if(mode!=='anti') s+=`<g transform="translate(260 ${yb+30})">${pill(0,0,'✗ nu așa — la ADN catenele NU sunt paralele',{fs:13,fill:'#dc2626',color:'#fff',stroke:'transparent'})}</g>`;
  else s+=`<g transform="translate(260 ${yb+30})">${pill(0,0,'✓ antiparalele: sensuri opuse',{fs:13,fill:'#16a34a',color:'#fff',stroke:'transparent'})}</g>`;
  return s;
}

LESSONS.push({
  id:'adn', icon:'helix', title:'Structura ADN-ului', sub:'Dublu helix, structura I și II, catene antiparalele', topic:'adn', mins:14, ac1:'#6366f1', ac2:'#ec4899',
  html:()=>`
  ${secH(1,'ADN = dublu helix')}
  ${nb(`<p><u>Structura ADN-ului</u></p><p>ADN = o moleculă <b>bicatenară</b>; cele <b>2 catene</b> sunt <b>răsucite helicoidal în jurul unui ax</b></p>`)}
  <p>Imaginează-ți o <b>scară</b> pe care o răsucești ca pe un tirbușon: <b>barele laterale</b> (scheletul: zahăr + fosfat) sunt cele două catene, iar <b>treptele</b> sunt perechile de baze unite prin legături de H. Rotește molecula cu mouse-ul sau cu degetul!</p>
  <div class="card">
    <div class="stage"><canvas id="helix" style="width:100%;height:440px"></canvas></div>
    <div class="row" style="justify-content:center;margin-top:12px">
      <div class="seg" id="hMode"><button data-m="1">Structura I (1 catenă)</button><button class="on" data-m="2">Structura II (2 catene)</button></div>
      <label class="chip"><input type="checkbox" id="hLet" checked> litere</label>
      <label class="chip"><input type="checkbox" id="hArr"> sensul 5′→3′</label>
      <label class="chip"><input type="checkbox" id="hAuto" checked> rotire automată</label>
    </div>
    <div class="res info" id="hInfo" style="margin-top:10px">👆 Apasă pe o treaptă (pereche de baze) ca să afli cu câte legături se țin.</div>
  </div>
  <div class="legend"><span><i style="background:var(--old)"></i>catena 1</span><span><i style="background:#f97316"></i>catena 2</span><span><i style="background:#f7b500;border-radius:50%"></i>fosfat</span><span><i style="background:#8a98b3"></i>zahăr</span><span>${baseChip('A')} ${baseChip('T')} ${baseChip('G')} ${baseChip('C')} baze</span></div>

  ${secH(2,'Structura I (primară) și structura II (secundară)')}
  ${nb(`<p>↳ prezintă mai întâi <b>structura I</b> (<b>primară</b>) → dată de structura <b>monocatenară</b>, în care nucleotidele se atașează prin <b>legături fosfodiesterice</b></p>
    <p>↳ <b>structura II</b> (<b>secundară</b>) → dată de cele <b>2 catene</b> între care se stabilesc <b>legături de H</b></p>
    <p>– nucleotidele de pe cele 2 catene se leagă pe principiul <b>complementarității</b> bazelor azotate<br>A=T ; T=A<br>C≡G ; G≡C</p>`)}
  <div class="callout key"><b>Două nume pentru același lucru:</b> <b>structura primară = structura I</b> (o catenă, legături fosfodiesterice) · <b>structura secundară = structura II</b> (2 catene, legături de H, dublu helix). Poți întâlni oricare formulare.</div>
  <div class="grid2">
    <div class="card" style="border-top:5px solid #475569"><h3>Structura I <span class="muted">(= primară)</span></h3><p style="margin:0">O <b>singură catenă</b>. Nucleotidele sunt legate una de alta prin <b>legături fosfodiesterice</b> (în lungul catenei).</p></div>
    <div class="card" style="border-top:5px solid #3b82f6"><h3>Structura II <span class="muted">(= secundară)</span></h3><p style="margin:0"><b>Două catene</b> unite între ele prin <b>legături de hidrogen</b> (între bazele complementare), apoi răsucite într-un <b>helix</b>.</p></div>
  </div>
  <p style="margin-top:14px">Urmărește cum se construiește molecula, de la o catenă până la dublul helix. Poți derula animația cu cursorul sau o poți încetini (0,5×).</p>
  <div id="bPlayer"></div>

  ${secH(3,'Catenele sunt antiparalele')}
  ${nb(`<p>cele 2 catene sunt <b>antiparalele</b>: pe o catenă sensul de ansamblare al nucleotidelor este în direcția <b>C<sub>3′</sub> → C<sub>5′</sub></b>, iar pe cealaltă catenă <b>C<sub>5′</sub> → C<sub>3′</sub></b></p>`)}
  <p><b>Antiparalele</b> = merg în <b>sensuri opuse</b>, ca două șosele cu sens unic, una spre nord, alta spre sud. Catena 1 „coboară” de la capătul 5′ la 3′, iar catena 2 „urcă” (de la 5′ spre 3′, dar privită de sus în jos arată invers). Compară cele două variante:</p>
  <div class="card">
    <div class="center"><div class="seg" id="aMode"><button class="on" data-m="anti">✓ Antiparalele (real)</button><button data-m="par">✗ Paralele (greșit)</button></div></div>
    <div class="stage pad" style="margin-top:10px"><svg id="aSvg" viewBox="0 0 520 440" style="max-width:560px;margin:auto"></svg></div>
  </div>
  <div class="callout tip"><b>Imaginează-ți:</b> dai mâna cu cineva față în față: mâna ta dreaptă e „sus” pentru tine, dar pentru el e „jos”. Capetele 5′ și 3′ sunt așezate invers una față de alta. <span class="small muted">(Bonus: de aceea, citită tot de la 5′ la 3′, catena a doua se scrie „invers”: 5′-ACTGA-3′ se împerechează cu 3′-TGACT-5′, adică 5′-TCAGT-3′.)</span></div>
  <div class="callout key"><b>Pe scurt:</b> ADN = 2 catene <b>antiparalele</b>, <b>complementare</b> (A=T, C≡G), unite prin <b>legături de H</b>, <b>răsucite helicoidal</b> în jurul unui ax. În fiecare catenă, nucleotidele sunt legate prin <b>legături fosfodiesterice</b>.</div>`,
  init(root){
    /* helix 3D */
    const cv=$('#helix',root);
    const hx=createHelix(cv,{pairs:18,onPick:(i,info)=>{ const el=$('#hInfo',root); if(!info){ el.innerHTML='👆 Apasă pe o treaptă.'; return; } if(info.mode===1){ el.innerHTML=`Nucleotida cu baza ${baseChip(info.a)} (${BASE_NAME[info.a]}). În structura I nu există a doua catenă.`; return; } const n=bondsOf(info.a,info.b); el.innerHTML=`Perechea ${baseChip(info.a)} ${n===3?'≡':'='} ${baseChip(info.b)} — <b>${n} legături de hidrogen</b> (${isPurine(info.a)?'purină':'pirimidină'} + ${isPurine(info.b)?'purină':'pirimidină'}).`; }});
    $$('#hMode button',root).forEach(b=>b.onclick=()=>{ $$('#hMode button',root).forEach(x=>x.classList.toggle('on',x===b)); hx.set('mode',+b.dataset.m); });
    $('#hLet',root).onchange=e=>hx.set('letters',e.target.checked); $('#hArr',root).onchange=e=>hx.set('arrows',e.target.checked); $('#hAuto',root).onchange=e=>hx.set('auto',e.target.checked);
    /* animația */
    scenePlayer($('#bPlayer',root),{dur:18.5,vb:'0 0 520 580',label:'De la o catenă la dublul helix',render:buildScene,intro:'Apasă ▶ ca să vezi cum se formează dublul helix.',
      chapters:[
        {t:0,title:'Structura I: o catenă',cap:'<b>Structura I</b> = o <b>singură catenă</b>. Nucleotidele sunt legate între ele prin <b>legături fosfodiesterice</b> (scheletul de zahăr și fosfat).'},
        {t:4.6,title:'Vine a doua catenă',cap:'A doua catenă se apropie. Nucleotidele ei sunt <b>complementare</b> cu cele ale primei (A cu T, C cu G) și sunt așezate în <b>sens invers</b> (antiparalele): 5′ cu 3′.'},
        {t:8.1,title:'Structura II: legături de H',cap:'Între bazele complementare se formează <b>legături de hidrogen</b> (2 pentru A=T, 3 pentru C≡G). Cele 2 catene formează <b>structura II</b>.'},
        {t:11.8,title:'Răsucirea în helix',cap:'Cele două catene se <b>răsucesc helicoidal în jurul unui ax</b> → <b>dublul helix</b> al ADN-ului.'}]});
    /* antiparalel */
    let am='anti'; const as=$('#aSvg',root); const aDraw=()=>{ as.innerHTML=antiLadder(am); };
    $$('#aMode button',root).forEach(b=>b.onclick=()=>{ am=b.dataset.m; $$('#aMode button',root).forEach(x=>x.classList.toggle('on',x===b)); aDraw(); });
    aDraw();
  }
});
