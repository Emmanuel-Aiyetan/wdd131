create table if not exists public.players (
  id integer primary key,
  name text not null,
  country text not null,
  code text not null,
  flag text not null default '',
  position text not null check (position in ('GK','DEF','MID','FWD')),
  club text not null,
  caps integer not null default 0 check (caps >= 0),
  goals integer not null default 0 check (goals >= 0),
  assists integer not null default 0 check (assists >= 0),
  image text not null default '',
  captain boolean not null default false,
  source text not null,
  updated_at timestamptz not null default now()
);
create index if not exists players_country_position on public.players(country, position);

