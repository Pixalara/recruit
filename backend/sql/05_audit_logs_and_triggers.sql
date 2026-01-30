-- Audit log function

create or replace function log_audit_event()
returns trigger
language plpgsql
security definer
as $$
begin
  insert into audit_logs (
    table_name,
    action,
    record_id,
    user_id,
    timestamp
  )
  values (
    TG_TABLE_NAME,
    TG_OP,
    coalesce(new.id, old.id),
    auth.uid(),
    now()
  );

  return coalesce(new, old);
end;
$$;

-- Drop triggers if they exist

drop trigger if exists audit_candidates on candidates;
drop trigger if exists audit_resumes on resumes;
drop trigger if exists audit_interview_evaluations on interview_evaluations;
drop trigger if exists audit_assignments on assignments;

-- Create triggers

create trigger audit_candidates
after insert or update or delete
on candidates
for each row
execute function log_audit_event();

create trigger audit_resumes
after insert or update or delete
on resumes
for each row
execute function log_audit_event();

create trigger audit_interview_evaluations
after insert or update or delete
on interview_evaluations
for each row
execute function log_audit_event();

create trigger audit_assignments
after insert or update or delete
on assignments
for each row
execute function log_audit_event();
