import sample from '../lib/players.json' with {type:'json'};
import {queryPlayers} from '../lib/query.js';
import {readPlayers} from '../lib/database.js';
export function createHandler(loadPlayers=readPlayers) {
return async function handler(req,res) {
  res.setHeader('Cache-Control','no-store');
  if(req.method!=='GET') {res.setHeader('Allow','GET');return res.status(405).json({error:'Method not allowed'});}
  const url=new URL(req.url,'http://localhost');
  let players=sample, mode='demo';
  const connectionString=process.env.DATABASE_URL;
  if(connectionString) {
    try {
      players=await loadPlayers(connectionString);
      mode='neon';
    } catch {return res.status(503).json({error:'The player database is unavailable. Please try again.'});}
  }
  return res.status(200).json({players:queryPlayers(players,url.searchParams),countries:[...new Set(players.map(p=>p.country))].sort(),total:players.length,mode});
};
}
export default createHandler();
