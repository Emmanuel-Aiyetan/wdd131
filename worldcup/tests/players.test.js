import {test} from 'node:test';
import assert from 'node:assert/strict';
import {queryPlayers} from '../lib/query.js';
import {createHandler} from '../api/players.js';
import data from '../lib/players.json' with {type:'json'};
test('combines club search, nation, position and numeric sorting',()=>{
  const result=queryPlayers(data,new URLSearchParams({q:'Madrid',country:'France',position:'FWD',sort:'goals'}));
  assert.equal(result.length,1);assert.equal(result[0].name,'Kylian Mbappe');
  const sorted=queryPlayers(data,new URLSearchParams({sort:'goals'}));assert.ok(sorted.every((p,i)=>!i||sorted[i-1].goals>=p.goals));
  assert.equal(queryPlayers(data,new URLSearchParams({q:'no-such-player'})).length,0);
});
test('all sample players have unique ids and valid statistics',()=>{
  assert.equal(new Set(data.map(p=>p.id)).size,data.length);
  for(const p of data){assert.ok(p.name&&p.country&&p.source);for(const key of ['caps','goals','assists'])assert.ok(Number.isInteger(p[key])&&p[key]>=0);}
});
test('API demo, method protection, Neon connection and outage behavior',async()=>{
  const oldURL=process.env.DATABASE_URL;
  let handler=createHandler(async connection=>{assert.equal(connection,'postgresql://test');return [data.find(p=>p.name==='Lionel Messi')];});
  const call=async(method='GET')=>{let code=200,body;const headers={};await handler({method,url:'/api/players?q=Messi'},{setHeader:(k,v)=>headers[k]=v,status(n){code=n;return this;},json(value){body=value;}});return {code,body,headers};};
  try{
    delete process.env.DATABASE_URL;
    let result=await call();assert.equal(result.body.mode,'demo');assert.equal(result.body.players[0].name,'Lionel Messi');
    assert.equal((await call('POST')).code,405);
    process.env.DATABASE_URL='postgresql://test';
    result=await call();assert.equal(result.body.mode,'neon');assert.equal(result.body.players.length,1);
    handler=createHandler(async()=>[]);result=await call();assert.equal(result.body.mode,'neon');assert.equal(result.body.players.length,0);
    handler=createHandler(async()=>{throw new Error('Private connection detail');});
    result=await call();assert.equal(result.code,503);assert.ok(!JSON.stringify(result.body).includes('Private'));
  }finally{oldURL===undefined?delete process.env.DATABASE_URL:process.env.DATABASE_URL=oldURL;}
});
