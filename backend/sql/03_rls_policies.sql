--Enable RLS
alter table candidates enable row level security;
alter table resumes enable row level security;
alter table interview_evaluations enable row level security;
alter table assignments enable row level security;
alter table audit_logs enable row level security;


--candidates
create policy "admin full access candidates"
on candidates
for all
using (is_admin());

create policy "hr read candidates"
on candidates
for select
using (is_hr());

create policy "hr insert candidates"
on candidates
for insert
with check (is_hr());

create policy "hr update candidates"
on candidates
for update
using (is_hr());

--profile
create policy "admin full access profiles"
on profiles
for all
using (is_admin());

create policy "users read own profile"
on profiles
for select
using (id = auth.uid());


--resume
-- Admin full access
create policy "admin full access resumes"
on resumes
for all
using (is_admin());

create policy "hr read employee resumes"
on resumes
for select
using (
  is_hr()
  and exists (
    select 1
    from candidates c
    where c.id = resumes.candidate_id
      and c.type = 'employee'
  )
);

--HR insert policy
create policy "hr insert employee resumes"
on resumes
for insert
with check (
  is_hr()
  and exists (
    select 1
    from candidates c
    where c.id = resumes.candidate_id
      and c.type = 'employee'
  )
);

--audit logs

create policy "admin hr read audit logs"
on audit_logs
for select
using (is_admin() or is_hr());

--Assignment
-- Admin full access 
create policy "admin full access assignments"
on assignments
for all
using (is_admin());

-- HR can create & read assignments
create policy "hr manage employee assignments"
on assignments
for select
using (
  is_hr()
  and exists (
    select 1
    from candidates c
    where c.id = assignments.candidate_id
      and c.type = 'employee'
  )
);

create policy "hr insert employee assignments"
on assignments
for insert
with check (
  is_hr()
  and exists (
    select 1
    from candidates c
    where c.id = assignments.candidate_id
      and c.type = 'employee'
  )
);


