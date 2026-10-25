import {readFile} from 'node:fs/promises';
import {neon} from '@neondatabase/serverless';
try {process.loadEnvFile('.env.local');} catch {}
if(!process.env.DATABASE_URL)throw new Error('Set DATABASE_URL in .env.local before running npm run db:setup.');
const sql=neon(process.env.DATABASE_URL);
const schema=await readFile(new URL('../database/schema.sql',import.meta.url),'utf8');
const seed=await readFile(new URL('../database/seed.sql',import.meta.url),'utf8');
try {
  // Every statement comes from our checked-in SQL, never HTTP request input.
  const statements=schema.split(';').map(s=>s.trim()).filter(Boolean);
  statements.push(seed);
  await sql.transaction(statements.map(statement=>sql.query(statement,[])));
  const [result]=await sql`SELECT count(*)::integer AS count FROM public.players`;
  console.log(`Database ready: ${result.count} player records. Existing IDs were preserved.`);
} catch {console.error('Database setup failed. Check the connection and database permissions; credentials were not logged.');process.exitCode=1;}

