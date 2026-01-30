import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://vbisvatameepdjetsvnk.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZiaXN2YXRhbWVlcGRqZXRzdm5rIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk0OTc5MzYsImV4cCI6MjA4NTA3MzkzNn0.gKXvNdX73ep3CpbnaZuqkW8WELtc5xRK1VdhEWtVQdE";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    persistSession: true,     // keeps user logged in on refresh
    autoRefreshToken: true,   // refreshes session automatically
    detectSessionInUrl: true, // handles magic links if enabled
  },
});