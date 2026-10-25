# World Cup Player Cards

Vanilla JavaScript frontend → Vercel `/api/players` → Neon PostgreSQL using `@neondatabase/serverless`.

## Connect Neon and Vercel

1. In your Vercel Neon database page, connect the database to your World Cup Vercel project. Confirm the project has a server environment variable named `DATABASE_URL`. Do not share its value or commit it to Git.
2. In Neon's SQL Editor (available through Open in Neon), run `database/schema.sql`, then `database/seed.sql`. These create `public.players` and insert the original 100 sample players without overwriting existing IDs. Use a new database for this app to avoid conflicts with unrelated tables.
3. Push this app's changes to the existing `Emmanuel-Aiyetan/wdd131` GitHub repository. In Vercel use Root Directory `worldcup`, Framework Other, Build Command `npm run build`, Output Directory `public`. Leave the install command at its default so Vercel installs the Neon dependency from package-lock.json.
4. Deploy or redeploy after connecting the database. The site should display Connected to Neon. `/api/players` should return mode `neon`. A database failure displays an error rather than silently switching to samples.

An alternative to pasting SQL: install Node.js 22 or newer, run `npm ci` in this folder, copy `.env.example` to `.env.local`, privately set DATABASE_URL to your Neon connection string, then run `npm run db:setup`. This executes the same checked-in SQL in a transaction. It must be run explicitly; builds never modify the database.

Database credentials stay on the server. Only a fixed SELECT query is exposed through the GET endpoint; browsers have no write endpoint. The Neon database role controls database access. There are no Supabase-specific roles or policies. For production use, a separate SELECT-only connection role can further restrict runtime permissions; run setup with an owner connection.

## Run locally

Run `npm ci`, then `npm run dev`; open http://localhost:3000. `.env.local` is ignored by Git. With no DATABASE_URL the API serves the original sample dataset and displays demo mode. To test the actual connection locally, put your connection string in .env.local and restart.

Edit `worldcup.html`, `worldcup.js`, `styles/worldcup.css`, and `images/`. `npm run build` copies these sources into ignored `public/` output. `npm test` checks filtering, statistics, method protection, and simulated Neon connection/error behavior. These automated tests do not prove a real cloud connection.

## Data and API

The 100 original player records are unverified sample data, not official rankings, confirmed squads, or live World Cup statistics. Their source labels remain visible after importing them. Supabase setup files have been replaced by portable PostgreSQL files in database/.

`GET /api/players?q=madrid&country=France&position=FWD&sort=goals` returns players, countries, total, mode. Supported sorts: name, goals, caps, assists. The API currently loads the catalogue (maximum 100,000 rows) and filters/sorts in memory. Move filtering and pagination into parameterized SQL when scaling beyond this small dataset. IDs must fit PostgreSQL integer values for the UI.

A football statistics provider has not been connected. For live records, add a trusted server importer that validates provider data, preserves stable IDs, records attribution and timestamps, and keeps provider credentials in server environment variables. Career and tournament statistics should be stored separately.

Saved shortlists live on the user's device; comparison supports up to three players. No authentication or cross-device shortlist sync is claimed.

## Resume wording

- Built a responsive player explorer with combined search, nation/position filters, numeric sorting, persistent device shortlists and side-by-side comparison.
- Implemented a Vercel-compatible API backed by Neon PostgreSQL, with explicit loading, error and sample-data states.
- Separated structured data, database access and DOM rendering to support future sports-data imports.

Claim deployed on Vercel with Neon only after checking the deployed database connection. Do not claim live football data until a sports provider is integrated.

References: https://vercel.com/marketplace/neon · https://github.com/neondatabase/serverless
