create extension if not exists "pgcrypto";


--profile
create table profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  role text check (role in ('admin', 'hr')) not null,
  created_at timestamptz default now()
);

--candidate
create table candidates (
  id uuid primary key default gen_random_uuid(),
  type text check (type in ('intern', 'employee')) not null,

  full_name text not null,
  education text,
  branch text,
  institution text,
  experience_years int,
  position_applied text,
  location text,
  passout_year int,

  status text default 'New',
  created_by uuid references auth.users(id),
  created_at timestamptz default now()
);

--resume
create table resumes (
  id uuid primary key default gen_random_uuid(),
  candidate_id uuid references candidates(id) on delete cascade,
  file_path text not null,
  uploaded_at timestamptz default now()
);

--interview evaluations
create table interview_evaluations (
  id uuid primary key default gen_random_uuid(),
  candidate_id uuid references candidates(id) on delete cascade,

  communication int check (communication between 1 and 5),
  technical int check (technical between 1 and 5),
  overall int check (overall between 1 and 5),
  decision text check (decision in ('Selected','Rejected')),
  comments text,

  evaluated_by uuid references auth.users(id),
  evaluated_at timestamptz default now()
);

--assignment
create table assignments (
  id uuid primary key default gen_random_uuid(),
  candidate_id uuid references candidates(id) on delete cascade,

  reference_number text,
  start_date date,
  end_date date,
  contract_type text
);

--audit tables
create table audit_logs (
  id uuid primary key default gen_random_uuid(),
  table_name text,
  action text,
  record_id uuid,
  user_id uuid,
  timestamp timestamptz default now()
);

--employee assignment
create table if not exists employee_assignments (
  id uuid primary key default gen_random_uuid(),
  candidate_id uuid references candidates(id) on delete cascade,

  employee_reference_number text unique not null,
  joining_date date not null,
  contract_type text check (contract_type in ('Full-time', 'Contract')) not null,

  created_at timestamptz default now()
);

create index if not exists idx_resumes_candidate_id
on resumes(candidate_id);

create index if not exists idx_interview_candidate_id
on interview_evaluations(candidate_id);

