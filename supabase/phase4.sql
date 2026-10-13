-- Millionaire Mindset Phase 4 (dedicated Supabase project only)
create table if not exists public.user_snapshots (
  user_id uuid primary key references auth.users(id) on delete cascade,
  content jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now(),
  constraint snapshot_object check (jsonb_typeof(content)='object'),
  constraint snapshot_size check (octet_length(content::text) <= 1048576)
);
alter table public.user_snapshots enable row level security;
revoke all on public.user_snapshots from anon;
grant select,insert,update,delete on public.user_snapshots to authenticated;
create policy "Read own snapshot" on public.user_snapshots for select to authenticated using ((select auth.uid())=user_id);
create policy "Insert own snapshot" on public.user_snapshots for insert to authenticated with check ((select auth.uid())=user_id);
create policy "Update own snapshot" on public.user_snapshots for update to authenticated using ((select auth.uid())=user_id) with check ((select auth.uid())=user_id);
create policy "Delete own snapshot" on public.user_snapshots for delete to authenticated using ((select auth.uid())=user_id);
