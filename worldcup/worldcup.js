const $=s=>document.querySelector(s);
const escape=value=>String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function readSaved(){try{const data=JSON.parse(localStorage.getItem('wc-shortlist')||'[]');return new Set(Array.isArray(data)?data.filter(Number.isInteger):[]);}catch{return new Set();}}
const state={players:[],compare:new Map(),saved:readSaved(),position:'',limit:12,controller:null,sequence:0};
let timer;
const params=new URLSearchParams(location.search);
$('#search').value=params.get('q')||'';
$('#sort').value=['name','goals','caps','assists'].includes(params.get('sort'))?params.get('sort'):'name';
state.position=['GK','DEF','MID','FWD'].includes(params.get('position'))?params.get('position'):'';
function positions(){ $('#positions').innerHTML=[['','All players'],['GK','Goalkeepers'],['DEF','Defenders'],['MID','Midfielders'],['FWD','Forwards']].map(([id,label])=>`<button type="button" data-position="${id}" aria-pressed="${state.position===id}">${label}</button>`).join(''); }
function safeImage(value){try{const url=new URL(value,location.origin);return (url.origin===location.origin&&url.pathname.startsWith('/images/'))||url.protocol==='https:'?url.href:'';}catch{return '';}}
function render(){
  const list=state.players.filter(p=>!$('#saved').checked||state.saved.has(p.id));
  $('#results').textContent=`${list.length} player${list.length===1?'':'s'} found · Showing ${Math.min(state.limit,list.length)}`;
  $('#cards').innerHTML=list.slice(0,state.limit).map(p=>{
    const image=safeImage(p.image), initials=p.name.split(' ').map(n=>n[0]).slice(0,2).join('');
    return `<article class="card"><div class="portrait"><span class="initials">${escape(initials)}</span>${image?`<img src="${escape(image)}" alt="${escape(p.name)}" loading="lazy">`:''}<span class="tag">${escape(p.position)}</span>${p.captain?'<span class="captain">CAPTAIN</span>':''}</div><div class="card-body"><span class="nation">${escape(p.code)} / ${escape(p.country)}</span><h3>${escape(p.name)}</h3><p class="club">${escape(p.club)}</p><div class="stats"><div><b>${escape(p.caps)}</b><span>CAPS</span></div><div><b>${escape(p.goals)}</b><span>GOALS</span></div><div><b>${escape(p.assists)}</b><span>ASSISTS</span></div></div><div class="actions"><button data-action="compare" data-id="${p.id}" aria-pressed="${state.compare.has(p.id)}" aria-label="Compare ${escape(p.name)}">${state.compare.has(p.id)?'✓ Comparing':'+ Compare'}</button><button data-action="save" data-id="${p.id}" aria-pressed="${state.saved.has(p.id)}" aria-label="Shortlist ${escape(p.name)}">${state.saved.has(p.id)?'★ Saved':'☆ Save'}</button></div><details><summary>Player details & source</summary><p>${escape(p.name)} · ${escape(p.position)} · ${escape(p.club)}</p><p>${escape(p.source)}${p.updated_at?' · Record updated '+escape(new Date(p.updated_at).toLocaleDateString()):''}</p></details></div></article>`;
  }).join('')||'<div class="empty"><h3>No players found</h3><p>Try another name, reset your filters, or add players to your shortlist.</p></div>';
  $('#cards').querySelectorAll('img').forEach(img=>{img.addEventListener('error',()=>img.remove(),{once:true});img.addEventListener('load',()=>{img.previousElementSibling.hidden=true;},{once:true});});
  $('#more').hidden=state.limit>=list.length;
}
function comparison(){
  $('#compare-count').textContent=`${state.compare.size} / 3`;
  const players=[...state.compare.values()];
  $('#compare-content').innerHTML=players.length?`<table><caption>International career statistics; data sources are listed on each player card.</caption><thead><tr><th scope="col">Player</th>${players.map(p=>`<th scope="col">${escape(p.name)}<br><button data-remove="${p.id}" aria-label="Remove ${escape(p.name)} from comparison">Remove</button></th>`).join('')}</tr></thead><tbody>${[['Nation','country'],['Position','position'],['Club','club'],['Caps','caps'],['Goals','goals'],['Assists','assists']].map(([label,key])=>`<tr><th scope="row">${label}</th>${players.map(p=>`<td>${escape(p[key])}</td>`).join('')}</tr>`).join('')}</tbody></table>`:'<p>Select Compare on a player card to start your matchup.</p>';
}
async function load(){
  const sequence=++state.sequence;
  state.controller?.abort();state.controller=new AbortController();
  $('#cards').setAttribute('aria-busy','true');$('#results').textContent='Loading players…';
  const query=new URLSearchParams({q:$('#search').value,position:state.position,country:$('#country').value,sort:$('#sort').value});
  history.replaceState(null,'',`${location.pathname}?${query}`);
  try{
    const response=await fetch('/api/players?'+query,{signal:state.controller.signal});
    const data=await response.json();if(!response.ok)throw new Error(data.error||'Unable to load players.');
    if(sequence!==state.sequence)return;
    state.players=data.players;state.limit=12;
    const country=$('#country').value;
    $('#country').innerHTML='<option value="">All nations</option>'+data.countries.map(c=>`<option value="${escape(c)}">${escape(c)}</option>`).join('');
    $('#country').value=country;
    $('#connection').textContent=data.mode==='demo'?'Sample data · demo mode':'Connected to Neon';render();
  }catch(error){if(error.name==='AbortError')return;$('#results').textContent='Unable to load players';$('#connection').textContent='Connection unavailable';$('#cards').innerHTML=`<div class="empty"><p>${escape(error.message)}</p><button id="retry">Try again</button></div>`;$('#more').hidden=true;}
  finally{if(sequence===state.sequence)$('#cards').setAttribute('aria-busy','false');}
}
$('#controls').addEventListener('submit',e=>{e.preventDefault();clearTimeout(timer);load();});
$('#search').addEventListener('input',()=>{clearTimeout(timer);timer=setTimeout(load,200);});
for(const id of ['country','sort'])$('#'+id).addEventListener('change',load);
$('#positions').addEventListener('click',e=>{const button=e.target.closest('button');if(!button)return;state.position=button.dataset.position;positions();load();});
$('#reset').addEventListener('click',()=>{$('#controls').reset();$('#saved').checked=false;state.position='';positions();load();});
$('#saved').addEventListener('change',()=>{state.limit=12;render();});
$('#more').addEventListener('click',()=>{state.limit+=12;render();});
$('#cards').addEventListener('click',e=>{
  if(e.target.closest('#retry'))return load();
  const button=e.target.closest('button[data-action]');if(!button)return;
  const player=state.players.find(p=>p.id===Number(button.dataset.id));if(!player)return;
  if(button.dataset.action==='save'){
    state.saved.has(player.id)?state.saved.delete(player.id):state.saved.add(player.id);
    try{localStorage.setItem('wc-shortlist',JSON.stringify([...state.saved]));$('#notice').textContent='Shortlist saved on this device.';}catch{$('#notice').textContent='Shortlist updated for this session; browser storage is unavailable.';}
  }else{
    if(state.compare.has(player.id))state.compare.delete(player.id);
    else if(state.compare.size<3)state.compare.set(player.id,player);
    else{$('#notice').textContent='Your matchup is full. Remove a player before adding another.';return;}
    $('#notice').textContent=`${state.compare.size} players selected. Comparison is below the collection.`;comparison();
  }render();
});
$('#compare-content').addEventListener('click',e=>{const button=e.target.closest('[data-remove]');if(button){state.compare.delete(Number(button.dataset.remove));comparison();render();}});
$('#clear-compare').addEventListener('click',()=>{state.compare.clear();comparison();render();});
positions();
// Restore a shared nation filter before the first request; options come from the API.
if(params.get('country')){$('#country').add(new Option(params.get('country'),params.get('country'),true,true));}
load();
