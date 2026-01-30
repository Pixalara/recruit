-- Enable RLS on storage objects
alter table storage.objects enable row level security;

-- HR/Admin can upload resumes
create policy "hr admin upload resumes"
on storage.objects
for insert
to authenticated
with check (
  bucket_id = 'resumes'
  and (is_admin() or is_hr())
);

-- HR/Admin can read resumes
create policy "hr admin read resumes"
on storage.objects
for select
to authenticated
using (
  bucket_id = 'resumes'
  and (is_admin() or is_hr())
);

-- Admin can delete resumes
create policy "admin delete resumes"
on storage.objects
for delete
to authenticated
using (
  bucket_id = 'resumes'
  and is_admin()
);
