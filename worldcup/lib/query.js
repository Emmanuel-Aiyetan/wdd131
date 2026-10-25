export function queryPlayers(players, params) {
  const q=(params.get('q')||'').trim().toLocaleLowerCase();
  const position=params.get('position')||'';
  const country=params.get('country')||'';
  const sort=params.get('sort')||'name';
  const list=players.filter(p=>(!q||[p.name,p.country,p.code,p.club,p.position].some(v=>v.toLocaleLowerCase().includes(q)))&&(!position||p.position===position)&&(!country||p.country===country));
  list.sort((a,b)=> ['goals','caps','assists'].includes(sort)?b[sort]-a[sort]||a.name.localeCompare(b.name):a.name.localeCompare(b.name));
  return list;
}
