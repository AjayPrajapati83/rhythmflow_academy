# ⚡ Quick Start Guide - RhythmFlow Academy

Get up and running in 5 minutes!

## 🎯 Prerequisites

- Node.js 18+ installed
- A Supabase account (free)

## 🚀 5-Minute Setup

### 1️⃣ Install Dependencies (1 min)

```bash
cd rhythmflow-academy
npm install
```

### 2️⃣ Create Supabase Project (2 min)

1. Go to [supabase.com](https://supabase.com) and sign in
2. Click "New Project"
3. Name it "rhythmflow-academy"
4. Set a database password
5. Click "Create new project"

### 3️⃣ Get Your Credentials (30 sec)

In Supabase dashboard:
1. Go to Settings → API
2. Copy:
   - Project URL
   - anon public key
   - service_role key

### 4️⃣ Configure Environment (30 sec)

Edit `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=paste_your_project_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=paste_your_anon_key_here
SUPABASE_SERVICE_ROLE_KEY=paste_your_service_role_key_here
```

### 5️⃣ Set Up Database (1 min)

1. In Supabase, go to SQL Editor
2. Open `lib/supabase/schema.sql` in your code editor
3. Copy ALL the SQL code
4. Paste into Supabase SQL Editor
5. Click "Run"

### 6️⃣ Run the App! (10 sec)

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## 🎉 You're Done!

The app is now running with:
- ✅ Homepage with animations
- ✅ Course catalog
- ✅ Authentication ready
- ✅ Database configured

## 🔐 Test Admin Access

1. First, create admin users in Supabase:
   - Go to Authentication → Users
   - Click "Add user"
   - Email: `Ajayadmin@rhy.com`
   - Password: `Ajay90@1`
   - Check "Auto Confirm User"
   - Click "Create user"

2. Set admin role in SQL Editor:
```sql
UPDATE profiles 
SET role = 'admin' 
WHERE email = 'Ajayadmin@rhy.com';
```

3. Visit [http://localhost:3000/admin/login](http://localhost:3000/admin/login)
4. Login with the credentials above

## 🎓 Test Student Flow

1. Go to [http://localhost:3000/signup](http://localhost:3000/signup)
2. Create a new account
3. Browse courses
4. Add to cart
5. Checkout (simulated payment)

## 📚 Next Steps

- Read the full [SETUP_GUIDE.md](./SETUP_GUIDE.md) for detailed instructions
- Check [README.md](./README.md) for features and documentation
- Add sample courses (see SETUP_GUIDE.md Step 8)
- Customize the design to match your brand

## 🐛 Issues?

**App won't start?**
```bash
rm -rf .next node_modules
npm install
npm run dev
```

**Database errors?**
- Re-run the schema.sql in Supabase SQL Editor
- Check that all tables were created in Table Editor

**Can't login?**
- Verify environment variables are correct
- Check Supabase Auth is enabled
- Make sure you created the user in Supabase

## 💡 Pro Tips

1. **Use Chrome DevTools** (F12) to test mobile responsiveness
2. **Check Supabase logs** for authentication issues
3. **Clear browser cache** if styles don't update
4. **Use Incognito mode** to test fresh user experience

## 🎨 Customization Ideas

- Change colors in `tailwind.config.ts`
- Update logo in `components/Navbar.tsx`
- Add your own course images
- Modify dance styles in homepage
- Customize email templates in Supabase

## 📞 Need Help?

- Check the [SETUP_GUIDE.md](./SETUP_GUIDE.md) for troubleshooting
- Review Supabase documentation
- Check Next.js documentation

---

**Happy Dancing! 💃🕺**
