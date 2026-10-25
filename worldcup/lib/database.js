import {neon} from '@neondatabase/serverless';

export async function readPlayers(connectionString) {
  const sql=neon(connectionString);
  // Fixed read-only SQL; request parameters never become executable SQL.
  const rows=await sql`SELECT id::integer AS id, name, country, code, flag, position,
    club, caps, goals, assists, image, captain, source, updated_at
    FROM public.players ORDER BY id LIMIT 100001`;
  if(rows.length>100000)throw new Error('Dataset limit exceeded');
  return rows;
}
