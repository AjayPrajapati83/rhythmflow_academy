# 🚀 Deployment Guide - RhythmFlow Academy

Deploy your dance academy to production in minutes!

## 📋 Pre-Deployment Checklist

- [ ] All features tested locally
- [ ] Environment variables documented
- [ ] Database schema applied
- [ ] Admin users created
- [ ] Sample data added (optional)
- [ ] Images optimized
- [ ] Performance tested

## 🌐 Deploy to Vercel (Recommended)

### Method 1: GitHub Integration (Easiest)

1. **Push to GitHub**
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin your-repo-url
git push -u origin main
```

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel auto-detects Next.js

3. **Add Environment Variables**
   - In Vercel project settings
   - Go to "Environment Variables"
   - Add all from `.env.local`:
     - `NEXT_PUBLIC_SUPABASE_URL`
     - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
     - `SUPABASE_SERVICE_ROLE_KEY`

4. **Deploy**
   - Click "Deploy"
   - Wait 2-3 minutes
   - Your site is live! 🎉

### Method 2: Vercel CLI

```bash
npm install -g vercel
vercel login
vercel
```

Follow prompts and add environment variables when asked.

## 🔧 Configure Supabase for Production

1. **Update Site URL**
   - Go to Supabase Dashboard
   - Settings → Authentication
   - Site URL: `https://your-domain.vercel.app`

2. **Add Redirect URLs**
   - Redirect URLs: Add your Vercel domain
   - Example: `https://your-domain.vercel.app/**`

3. **Update CORS**
   - Should work automatically
   - If issues, add domain to allowed origins

## 🎯 Custom Domain (Optional)

1. In Vercel project settings
2. Go to "Domains"
3. Add your custom domain
4. Update DNS records as instructed
5. Update Supabase Site URL to match

## 📊 Performance Optimization

### Image Optimization
Already handled by Next.js Image component!

### Caching Strategy
```typescript
// Add to next.config.js
module.exports = {
  images: {
    domains: ['images.unsplash.com', 'i.pravatar.cc'],
  },
}
```

## 🔒 Security Checklist

- [ ] Environment variables not in code
- [ ] RLS policies enabled
- [ ] Admin routes protected
- [ ] API routes secured
- [ ] HTTPS enabled (automatic on Vercel)

## 📱 Testing Production

1. **Test all user flows**
   - Student signup/login
   - Course browsing
   - Cart and checkout
   - Admin login
   - Dashboard access

2. **Test on devices**
   - Desktop browsers
   - Mobile devices
   - Tablets

3. **Performance check**
   - Run Lighthouse audit
   - Check load times
   - Test animations

## 🐛 Troubleshooting

**Build fails?**
- Check TypeScript errors
- Verify all imports
- Run `npm run build` locally first

**Environment variables not working?**
- Redeploy after adding variables
- Check variable names match exactly

**Database connection issues?**
- Verify Supabase URL is correct
- Check RLS policies
- Ensure service role key is set

## 📈 Monitoring

### Vercel Analytics
- Automatically enabled
- View in Vercel dashboard

### Supabase Monitoring
- Check Auth logs
- Monitor database usage
- Review API calls

## 🔄 Continuous Deployment

Every push to main branch auto-deploys!

```bash
git add .
git commit -m "Update feature"
git push
```

Vercel automatically:
- Builds your app
- Runs tests
- Deploys to production

## 🎉 You're Live!

Your dance academy is now accessible worldwide!

**Next Steps:**
- Share your URL
- Monitor performance
- Gather user feedback
- Iterate and improve

---

**Need help?** Check Vercel and Supabase documentation.
