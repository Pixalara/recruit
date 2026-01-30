# recruit
# Backend – Supabase (Recruitment App)

This folder contains the complete backend implementation using Supabase.

## Stack
- Supabase Auth
- Supabase Postgres
- Row Level Security (RLS)
- Supabase Storage
- SQL triggers for audit logs

---


## SQL Setup (IMPORTANT)

Run the following SQL files **in order** inside the Supabase SQL Editor:

1. `01_tables.sql` – Core tables (profiles, candidates, resumes, interviews, assignments, audit_logs)
2. `02_roles_and_functions.sql` – Role helper functions (`is_admin`, `is_hr`)
3. `03_rls_policies.sql` – Row Level Security policies
4. `04_storage_policies.sql` – Storage bucket & access policies
5. `05_audit_logs_and_triggers.sql` – Audit logging triggers

---

## Roles
- **admin** → full access
- **hr** → manage candidates, resumes, interviews, assignments

Roles are stored in `profiles.role`.

---

## Storage
- Bucket: `resumes`
- Path format:resumes/<candidate_id>/<filename>.pdf
- Bucket is **private**
- Access via RLS + signed URLs

---

## Audit Logs
Tracked actions:
- INSERT / UPDATE / DELETE on:
- candidates
- resumes
- assignments
- interview_evaluations

---

## Env variables (Frontend needs)
SUPABASE_URL=`shared`

SUPABASE_ANON_KEY=`shared`

---

## Notes for Frontend
- Frontend must use Supabase client
- No custom backend server required
- RLS handles all permissions
