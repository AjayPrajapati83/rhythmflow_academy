# 🚀 Complete Setup Guide - RhythmFlow Academy

This guide will walk you through setting up the RhythmFlow Academy from scratch.

## 📋 Prerequisites Checklist

- [ ] Node.js 18 or higher installed
- [ ] npm or yarn package manager
- [ ] Git installed
- [ ] Code editor (VS Code recommended)
- [ ] Supabase account (free tier is fine)

## 🔧 Step-by-Step Setup

### Step 1: Install Dependencies

```bash
cd rhythmflow-academy
npm install
```

This will install all required packages including:
- Next.js 14+
- React 18+
- TypeScript
- Tailwind CSS
- Supabase client libraries
- Framer Motion
- Lucide React icons
- jsPDF

### Step 2: Create Supabase Project

1. Go to [supabase.com](https://supabase.com)
2. Click "Start your project"
3. Sign in with GitHub
4. Click "New Project"
5. Fill in:
   - **Name**: rhythmflow-academy
   - **Database Password**: (save this securely)
   - **Region**: Choose closest to your location
6. Click "Create new project"
7. Wait 2-3 minutes for setup to complete

### Step 3: Get Supabase Credentials

1. In your Supabase project dashboard
2. Click the ⚙️ Settings icon (bottom left)
3. Go to "API" section
4. Copy these values:
   - **Project URL** (looks like: https://xxxxx.supabase.co)
   - **anon public** key
   - **service_role** key (click "Reveal" to see it)

### Step 4: Configure Environment Variables

1. Open `.env.local` in the project root
2. Replace the placeholder values:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key-here
```

⚠️ **Important**: Never commit `.env.local` to Git!

### Step 5: Set Up Database Schema

1. In Supabase dashboard, click "SQL Editor" (left sidebar)
2. Click "New query"
3. Open `lib/supabase/schema.sql` in your code editor
4. Copy ALL the SQL code
5. Paste into Supabase SQL Editor
6. Click "Run" (or press Ctrl/Cmd + Enter)
7. You should see "Success. No rows returned"

This creates:
- All database tables
- Row Level Security policies
- Triggers and functions

### Step 6: Enable Email Authentication

1. In Supabase dashboard, go to "Authentication" → "Providers"
2. Make sure "Email" is enabled
3. Configure email templates (optional):
   - Go to "Authentication" → "Email Templates"
   - Customize confirmation and reset emails

### Step 7: Create Admin Users

#### Option A: Through Supabase Dashboard

1. Go to "Authentication" → "Users"
2. Click "Add user" → "Create new user"
3. Create first admin:
   - Email: `Ajayadmin@rhy.com`
   - Password: `Ajay90@1`
   - Auto Confirm User: ✓ (check this)
4. Click "Create user"
5. Repeat for second admin:
   - Email: `Sachinadmin@rhy.com`
   - Password: `Sachin90@1`

#### Option B: Through SQL

1. Go to SQL Editor
2. Run this query:

```sql
-- Get the user IDs first
SELECT id, email FROM auth.users 
WHERE email IN ('Ajayadmin@rhy.com', 'Sachinadmin@rhy.com');

-- Update their roles to admin
UPDATE profiles 
SET role = 'admin' 
WHERE email IN ('Ajayadmin@rhy.com', 'Sachinadmin@rhy.com');
```

### Step 8: Add Sample Course Data (Optional)

Run this in SQL Editor to add sample courses:

```sql
INSERT INTO courses (title, description, instructor_name, dance_style, difficulty, price, duration_weeks, is_popular, thumbnail_url) VALUES
('Contemporary Dance Masterclass', 'Express emotions through fluid movements', 'Priya Sharma', 'Contemporary', 'Intermediate', 4999, 8, true, 'https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?w=800'),
('Hip-Hop Fundamentals', 'Urban street dance with attitude', 'Rahul Verma', 'Hip-Hop', 'Beginner', 3999, 6, true, 'https://images.unsplash.com/photo-1547153760-18fc86324498?w=800'),
('Classical Ballet Technique', 'Classical elegance and grace', 'Anjali Desai', 'Ballet', 'Advanced', 5999, 12, false, 'https://images.unsplash.com/photo-1518834107812-67b0b7c58434?w=800'),
('Bollywood Dance Basics', 'Vibrant Indian cinema dance', 'Karan Singh', 'Bollywood', 'Beginner', 2999, 4, true, 'https://images.unsplash.com/photo-1504609813442-a8924e83f76e?w=800'),
('Salsa & Latin Dance', 'Passionate Latin rhythms', 'Maria Rodriguez', 'Salsa', 'Intermediate', 4499, 6, false, 'https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?w=800'),
('Kathak Classical Dance', 'Traditional Indian classical', 'Guru Ramesh Kumar', 'Kathak', 'Advanced', 6999, 16, false, 'https://images.unsplash.com/photo-1583224964811-5e1f8e6d3b0e?w=800');
```

### Step 9: Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

You should see the RhythmFlow Academy homepage! 🎉

### Step 10: Test the Application

#### Test Student Flow:
1. Click "Explore Courses" or go to `/courses`
2. Browse courses with filters
3. Click "View Details" on any course
4. Click "Buy Now" → redirects to signup
5. Create a student account
6. Complete profile setup
7. Access student dashboard

#### Test Admin Flow:
1. Go to `/admin/login`
2. Use credentials:
   - Email: `Ajayadmin@rhy.com`
   - Password: `Ajay90@1`
3. Access admin dashboard
4. View analytics and manage content

## 🐛 Troubleshooting

### Issue: "Invalid API key"
**Solution**: Double-check your `.env.local` file has correct Supabase credentials with no extra spaces.

### Issue: Database tables not created
**Solution**: 
1. Go to Supabase SQL Editor
2. Check "Table Editor" to see if tables exist
3. If not, re-run the schema.sql file
4. Make sure there are no SQL errors

### Issue: Admin login not working
**Solution**:
1. Verify admin users exist in Authentication → Users
2. Check their emails match exactly (case-sensitive)
3. Run the UPDATE query to set role = 'admin'

### Issue: Images not loading
**Solution**: 
- The project uses external image URLs (Unsplash)
- Make sure you have internet connection
- Images should load automatically

### Issue: Styles not applying
**Solution**:
```bash
# Clear Next.js cache
rm -rf .next
npm run dev
```

### Issue: TypeScript errors
**Solution**:
```bash
# Regenerate types
npm run build
```

## 🔒 Security Checklist

- [ ] `.env.local` is in `.gitignore`
- [ ] Never commit Supabase keys to Git
- [ ] RLS policies are enabled on all tables
- [ ] Admin routes are protected
- [ ] Input validation is in place

## 📱 Testing Responsive Design

1. Open Chrome DevTools (F12)
2. Click device toolbar icon (Ctrl+Shift+M)
3. Test different devices:
   - iPhone 12 Pro
   - iPad
   - Desktop (1920x1080)

## 🚀 Ready for Production?

### Before Deploying:

1. **Update Environment Variables**
   - Add all `.env.local` vars to your hosting platform

2. **Configure Supabase for Production**
   - Update Site URL in Supabase settings
   - Add production domain to allowed URLs

3. **Test Payment Flow**
   - Verify simulated payments work
   - Test receipt generation

4. **Performance Check**
   - Run Lighthouse audit
   - Optimize images if needed
   - Check load times

5. **Deploy to Vercel**
   ```bash
   npm install -g vercel
   vercel
   ```

## 📞 Need Help?

- Check the main README.md
- Review Supabase documentation
- Check Next.js documentation
- Create an issue on GitHub

## ✅ Setup Complete!

You now have a fully functional dance academy platform! 🎉

Next steps:
- Customize the design
- Add more courses
- Integrate real payment gateway
- Add more features from the TODO list

Happy coding! 💜
