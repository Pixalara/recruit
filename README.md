Pixalara Recruitment Application
A recruitment management app built with React and Supabase for internal use.
Quick Setup
Step 1: Clone & Install
Clone the repository, switch to AV-01 branch, navigate to the frontend folder, and install all dependencies.
Step 2: Configure Environment
Create a .env file in the frontend folder with your Supabase URL and anon key. Get these credentials from your Supabase Dashboard under Settings → API.
Step 3: Run
Start the application. It will open at localhost:3000.
What to Test
Test login and signup, verify role-based access works for different user types, check candidate management features, and ensure database connectivity is working.
Troubleshooting
If npm install fails, clear the cache and reinstall everything.
If Supabase connection fails, verify your environment file has correct credentials and your Supabase project is active.
If port 3000 is already in use, run the app on a different port.
Important Notes
Never commit the .env file to GitHub. Database schema files are in the backend/sql folder. Node.js version 14 or higher is required.
