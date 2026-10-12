'use strict';
/* ============ LECȚIA 9 — Structura ARN și transcripția ============ */
let TR_LABELS=true;

function trScene(t){
  const N=8, S='ACTCGATG', F=[...S].map(b=>COMP_DNA[b]), RN=[...S].map(b=>TRANSCRIBE[b]);
  const y0=84, dy=52, xT=200, xF0=340, xF1=446, xRel=506, T0=4.5, DT=1.9;
  const p=i=>T0+(N-1-i)*DT, rowY=i=>y0+i*dy;
  const st=i=>{ const P=p(i), a=eio(seg(t,P-1.4,P-.4)), ret=eio(seg(t,P+2.2,P+3.4)), q=eio(seg(t,P-.6,P+.4));
    const xF=lerp(lerp(xF0,xF1,a),xF0,ret), yF=-16*Math.sin(Math.PI*ret);
    const xR=lerp(xF0,xRel,ret), yR=16*Math.sin(Math.PI*ret);
    return {P,a,ret,q,xF,yF,xR,yR,visR:t>P-1.1}; };
  const rows=Array.from({length:N},(_,i)=>st(i));
  let s=cytoBg(580,540,5,14);
  /* enzima */
  const f=(N-1)-(t-T0)/DT, fc=clamp(f,-.7,N-.3), enzOp=clamp(Math.min(seg(t,1.2,2.4),1-seg(t,p(0)+2.4,p(0)+3.6)));
  if(enzOp>0){ const yE=rowY(0)+fc*dy+10; s+=enzyme(322,yE,300,104,{kind:'rna',label:'ARN-polimeraza',op:.55*enzOp,ly:-34,fs:14,lumps:[[0,0,150,52],[-92,-8,54,44],[92,-6,52,42]]}); }
  /* panglici */
  const ribT=[[xT,y0-48],...rows.map((r,i)=>[xT,rowY(i)-24]),[xT,rowY(N-1)+36]];
  s+=ribbon(ribT,'var(--old)',6);
  const ribF=[[xF0,y0-48],...rows.map((r,i)=>[r.xF,rowY(i)+r.yF-24]),[xF0,rowY(N-1)+36]];
  s+=ribbon(ribF,'#475569',6,{op:.85});
  /* legături H T–F (zone încă duble) */
  rows.forEach((r,i)=>{ const o=Math.max(1-clamp(r.a*4),clamp((r.ret-.6)/.4)); if(o>.02) s+=hb(tileTip(xT,S[i],1)+3,tileTip(r.xF,F[i],-1)-3,rowY(i),bondsOf(S[i],F[i]),{op:o}); });
  /* ARN: panglică prin nucleotidele apărute (de jos în sus) */
  const rnaPts=[]; for(let i=N-1;i>=0;i--){ const r=rows[i]; if(r.q>.5) rnaPts.push([r.xR,rowY(i)+r.yR]); }
  if(rnaPts.length>1) s+=ribbon(rnaPts,'#14b8a6',6);
  /* hibrid: legături T–ARN */
  rows.forEach((r,i)=>{ if(r.q>=1){ const o=clamp(seg(t,r.P+.3,r.P+.8))*(1-clamp(seg(t,r.P+2.2,r.P+2.7))); if(o>0) s+=hb(tileTip(xT,S[i],1)+3,tileTip(r.xR,RN[i],-1)-3,rowY(i),bondsOf(S[i],RN[i]),{p:o,op:o,color:'#14b8a6'}); } });
  /* scântei la tăiere */
  rows.forEach((r,i)=>{ const q=seg(t,r.P-1.4,r.P-.8); if(q>0&&q<1) s+=spark(lerp(xT,xF0,.5),rowY(i),q,{color:'#f472b6'}); });
  /* nucleotide: ADN (T și F), apoi ARN */
  let units='', tokens='';
  rows.forEach((r,i)=>{ const y=rowY(i);
    units+=nucUnit(xT,y,S[i],1,{})+nucUnit(r.xF,y+r.yF,F[i],-1,{});
    if(r.visR){ const home=[xF0+70+4*Math.sin(t*1.5+i),y+8+5*Math.cos(t*1.3+i)], x=lerp(home[0],r.xR,r.q), yy=lerp(home[1],y+r.yR,r.q), u=nucUnit(x,yy,RN[i],-1,{op:clamp(seg(t,r.P-1.1,r.P-.7)),s:r.q<1?.92:1}); if(r.q<1) tokens+=u; else units+=u; } });
  s+=units+tokens;
  /* etichete */
  if(TR_LABELS){
    const lab=(a,b,fn)=>{ const o=clamp(Math.min(seg(t,a,a+.7),1-seg(t,b-.7,b))); return o>0?fn(o):''; };
    const yB=clamp(rowY(0)+fc*dy+10,y0-10,rowY(N-1)+10);
    s+=lab(0,2.6,o=>pill(270,30,'ADN bicatenar',{fs:15,fill:'#3b82f6',color:'#fff',stroke:'transparent',op:o}));
    s+=pill(xT,56,'catena sens',{fs:12,fill:'#334155',color:'#fff',stroke:'transparent',op:clamp(seg(t,2,3))});
    s+=lab(2.6,7,o=>pill(14,520,'ARN-polimeraza taie legăturile de H',{anchor:'start',fs:12,fill:'#be185d',color:'#fff',stroke:'transparent',op:o}));
    s+=lab(3.9,9.5,o=>pill(566,520,'nucleotide libere din citoplasmă',{anchor:'end',fs:12,fill:'var(--card)',op:o}));
    s+=lab(5.2,18.5,o=>pill(xT-16,yB-4,'hibrid molecular ADN–ARN',{anchor:'end',fs:12,fill:'#14b8a6',color:'#fff',stroke:'transparent',op:o*clamp(seg(t,5.2,6))}));
    s+=lab(5.2,18.5,o=>pill(566,yB-62,'catenă ADN (liberă)',{anchor:'end',fs:12,fill:'#475569',color:'#fff',stroke:'transparent',op:o}));
    s+=lab(7.4,22,o=>pill(566,yB+86,'ARN eliberat',{anchor:'end',fs:12,fill:'#0f766e',color:'#fff',stroke:'transparent',op:o}));
    if(t>p(0)+3.2){ const o=seg(t,p(0)+3.2,p(0)+4.4); s+=`<g opacity="${f1(o)}">${pill(xT+70,500,'ADN refăcut',{fs:14,fill:'#3b82f6',color:'#fff',stroke:'transparent'})}${pill(566,500,'moleculă de ARN (monocatenară)',{fs:13,fill:'#14b8a6',color:'#fff',stroke:'transparent',anchor:'end'})}</g>`; }
    if(t>4.5){ const o=seg(t,4.5,5.5); s+=`<g opacity="${f1(o)}"><rect x="14" y="62" width="150" height="62" rx="12" fill="var(--card)" stroke="var(--line)"/><rect x="26" y="74" width="26" height="7" rx="3.5" fill="var(--old)"/><text class="t-sm" x="60" y="81">catenă ADN</text><rect x="26" y="90" width="26" height="7" rx="3.5" fill="#14b8a6"/><text class="t-sm" x="60" y="97">catenă ARN</text><text class="t-sm" x="26" y="114">U = uracil (în loc de T)</text></g>`; }
  }
  return s;
}

LESSONS.push({
  id:'transc', icon:'copy', title:'Structura ARN și transcripția', sub:'Cum se „copiază” o catenă de ADN în ARN', topic:'transc', mins:16, ac1:'#14b8a6', ac2:'#22c55e',
  html:()=>`
  ${secH(1,'Structura ARN')}
  ${nb(`<p><u>Structura</u></p><p>– molecula de obicei prezintă o structură <b>monocatenară</b>, polinucleotidică</p>
    <p>– nucleotida { baze azotate: <b>A, G, U, C</b><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;radical zaharat: <b>riboza (R)</b><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>radical fosfat</b></p>
    <p>– legăturile dintre nucleotide sunt <b>fosfodiesterice</b></p>
    <p>– sinteza ARN-ului se realizează prin <b>TRANSCRIPȚIE</b> (copiere), utilizând <b>molecula de ADN</b></p>`)}
  <div class="grid2">
    <div class="card center"><h3 style="margin-bottom:6px">Nucleotidă de ADN</h3>${nucAssembled('ADN','T')}<p class="small muted" style="margin:6px 0 0">dezoxiriboză (D) + bază <b>T</b></p></div>
    <div class="card center" style="border-top:5px solid #14b8a6"><h3 style="margin-bottom:6px">Nucleotidă de ARN</h3>${nucAssembled('ARN','U')}<p class="small muted" style="margin:6px 0 0">riboză (R) + bază <b>U</b> (uracil în loc de timină)</p></div>
  </div>
  <div class="callout key"><b>ARN în 4 idei:</b> (1) de obicei <b>monocatenar</b> · (2) <b>polinucleotidă</b> · (3) nucleotide formate din bază (<b>A, G, U, C</b>) + pentoza <b>riboză (R)</b> + <b>radical fosfat</b> · (4) nucleotidele se leagă prin <b>legături fosfodiesterice</b>. Se sintetizează prin <b>transcripție</b>.</div>

  ${secH(2,'Transcripția = copierea unei catene de ADN în ARN')}
  ${nb(`<p>• În transcripție intervine enzima <b>ARN-polimeraza</b> care <b>taie legăturile de H</b> în molec. de ADN</p>
    <p>• Nucleotidele <b>libere din citoplasmă</b> se atașează pe baza de <b>complementaritate</b> doar de <b>o catenă</b> din molecula de ADN (s.n. <b>catena sens</b>)</p>
    <p>• Intermediar se formează un <b>hibrid molec. ADN–ARN</b> (+ o <b>catenă liberă de ADN</b>)</p>
    <p>• Ulterior hibridul se desface, <b>eliberând catena de ARN</b>, iar molec. de ADN <b>se reface</b>.</p>
    <p>• După acest model se sintetizează <b>toate tipurile de ARN</b>.</p>`)}
  <p><b>Imaginează-ți</b> că ADN-ul e o <b>carte de bucătărie</b> care nu iese din bibliotecă: când ai nevoie de o rețetă, o <b>fotocopiezi</b> — copia este <b>ARN-ul</b>. ARN-polimeraza este <b>fotocopiatorul</b>: deschide cartea (taie legăturile de H), copiază <b>o singură pagină</b> (o catenă — „catena sens”) după regula complementarității, iar apoi cartea se închide la loc (ADN-ul se reface).</p>
  <div class="callout tip"><b>Atenție:</b> în ARN, adenina din ADN nu se leagă cu timina, ci cu <b>uracilul</b>. Regula: <b>A→U</b>, <b>T→A</b>, <b>C→G</b>, <b>G→C</b> (de pe catena sens se obține ARN-ul).</div>
  <label class="chip" style="margin-bottom:8px"><input type="checkbox" id="tLab" checked> arată etichetele</label>
  <div id="tPlayer"></div>
  <div class="kv" style="margin-top:10px"><span>🧬 ARN-polimeraza</span><span>hibrid molecular ADN–ARN</span><span>catenă ADN (liberă)</span><span>molecula de ADN refăcută = „ADN original”</span><span>molecula de ARN</span></div>
  <div class="callout warn"><b>Atenție:</b> catena liberă care rămâne este de <b>ADN</b> (jumătatea de ADN care <u>nu</u> a fost copiată). <b>ARN-ul</b> este catena nou sintetizată, eliberată din hibrid.</div>

  ${secH(3,'Fii tu ARN-polimeraza')}
  <p>Scrie o secvență de pe <b>catena sens</b> a ADN (doar A, T, C, G). ARN-ul se construiește literă cu literă:</p>
  <div class="card">
    <div class="row"><input type="text" id="trIn" maxlength="12" value="TACGGATC" autocomplete="off"><button class="btn ghost sm" id="trRnd">🎲 aleator</button><button class="btn sm" id="trGo">▶ Transcrie</button></div>
    <div class="row" style="margin-top:12px;gap:6px"><span class="small muted">Regula:</span>${[['A','U'],['T','A'],['C','G'],['G','C']].map(([a,b])=>`<span class="chip" style="padding:3px 10px">${baseChip(a)} → ${baseChip(b)}</span>`).join('')}</div>
    <div id="trOut" style="margin-top:12px"></div>
  </div>

  ${secH(4,'Replicare vs. transcripție')}
  <div class="card tbl-wrap"><table>
    <tr><th></th><th>Replicare</th><th>Transcripție</th></tr>
    <tr><td><b>Scop</b></td><td>autocopierea ADN</td><td>sinteza ARN (copiere)</td></tr>
    <tr><td><b>Enzima</b></td><td>ADN-polimeraza</td><td>ARN-polimeraza</td></tr>
    <tr><td><b>Se copiază</b></td><td>ambele catene (semiconservativ)</td><td>o singură catenă din ADN (catena sens)</td></tr>
    <tr><td><b>Produs</b></td><td>2 molecule de ADN identice</td><td>o catenă de ARN (monocatenară)</td></tr>
    <tr><td><b>Baza specifică</b></td><td>timina (T)</td><td>uracilul (U)</td></tr>
    <tr><td><b>Etapă intermediară</b></td><td>molecula în formă de λ (Y)</td><td>hibrid molecular ADN–ARN</td></tr>
    <tr><td><b>La final</b></td><td>2 ADN: 1 catenă veche + 1 nouă</td><td>ARN eliberat, ADN refăcut</td></tr></table></div>

  ${secH(5,'Mai multe tipuri de ARN')}
  <p>„După acest model se sintetizează mai multe tipuri de ARN” — adică toate ARN-urile din celulă se obțin prin transcripție. Le cunoști în lecția următoare:</p>
  <div class="row"><a class="btn ghost" href="#/l/arn">ARN mesager (ARNm)</a><a class="btn ghost" href="#/l/arn">ARN de transfer (ARNt)</a><a class="btn ghost" href="#/l/arn">ARN ribozomal (ARNr)</a><a class="btn ghost" href="#/l/arn">ARN viral</a></div>
  <div class="card" id="tOrder"></div>`,
  init(root){
    const tp=scenePlayer($('#tPlayer',root),{dur:25,vb:'0 0 580 540',label:'Transcripția',render:trScene,intro:'Apasă ▶ ca să pornești transcripția.',
      chapters:[
        {t:0,title:'ADN bicatenar',cap:'<b>Molecula de ADN</b>, bicatenară. Una dintre catene (<b>catena sens</b>) va fi copiată. ARN-polimeraza se apropie.'},
        {t:2.4,title:'ARN-polimeraza taie legăturile de H',cap:'Enzima <b>ARN-polimeraza</b> <b>taie legăturile de H</b> din molecula de ADN: cele 2 catene se desfac local („bula de transcripție”).'},
        {t:3.9,title:'Nucleotide libere se atașează',cap:'<b>Nucleotide libere din citoplasmă</b> se atașează, pe baza <b>complementarității</b>, pe <b>o singură catenă</b> de ADN (catena sens): A–U, T–A, C–G, G–C.'},
        {t:5,title:'Hibrid ADN–ARN + catenă liberă',cap:'Intermediar se formează un <b>hibrid molecular ADN–ARN</b> și o <b>catenă liberă</b> de ADN (cea necopiată, deplasată în lături).'},
        {t:6.9,title:'Hibridul se desface',cap:'<b>Ulterior hibridul se desface</b>, eliberând <b>catena de ARN</b>, iar <b>molecula de ADN se reface</b>. Procesul continuă rând cu rând.'},
        {t:21,title:'Rezultat',cap:'Rezultat: <b>ADN refăcut</b> (neschimbat) și o <b>moleculă de ARN</b> monocatenară, copia unui segment din ADN.'}]});
    $('#tLab',root).onchange=e=>{ TR_LABELS=e.target.checked; tp.refresh(); };
    /* transcriptor */
    const inp=$('#trIn',root), out=$('#trOut',root); let run=0;
    const sanit=()=>{ inp.value=inp.value.toUpperCase().replace(/[^ATCG]/g,''); };
    function show(n){ const s=inp.value; if(!s){ out.innerHTML='<span class="muted">Scrie ceva 👆</span>'; return; }
      out.innerHTML=`<div class="small muted">Catena sens (ADN):</div><div class="seq">${[...s].map(b=>baseChip(b)).join('')}</div>
        <div class="small muted" style="margin:6px 0">⬇ ARN-polimeraza ⬇</div><div class="small muted">ARN (monocatenar):</div><div class="seq">${[...s].map((b,i)=>i<n?`<span class="pop">${baseChip(TRANSCRIBE[b])}</span>`:`<span class="base ghost">?</span>`).join('')}</div>${n>=s.length?`<div class="res ok" style="margin-top:10px">✅ Gata! ARN: <b>${[...s].map(b=>TRANSCRIBE[b]).join('')}</b> — observă că nu conține nicio timină (T).</div>`:''}`; }
    async function go(){ sanit(); const id=++run, s=inp.value; show(0); for(let i=1;i<=s.length;i++){ await sleepMs(260); if(id!==run||!out.isConnected) return; show(i); } addXP(2); }
    inp.oninput=()=>{ sanit(); run++; show(0); };
    $('#trGo',root).onclick=go; $('#trRnd',root).onclick=()=>{ inp.value=Array.from({length:8},()=>pick('ATCG')).join(''); go(); };
    show(0);
    orderGame($('#tOrder',root),[
      'ARN-polimeraza taie legăturile de H din molecula de ADN',
      'Nucleotide libere din citoplasmă se atașează, pe baza complementarității, pe o catenă din ADN (catena sens)',
      'Se formează un hibrid molecular ADN–ARN și o catenă liberă de ADN',
      'Hibridul se desface, eliberând catena de ARN',
      'Molecula de ADN se reface'],'Joc: pune transcripția în ordine');
  }
});
