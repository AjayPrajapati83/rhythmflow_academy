# 🩰 RhythmFlow Academy - Premium Dance Learning Platform

**Where Movement Meets Mastery**

A production-grade, visually stunning, mobile-responsive dance academy website built with Next.js 14+, Supabase, and Tailwind CSS.

![RhythmFlow Academy](https://img.shields.io/badge/Next.js-14+-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.0+-38B2AC?style=for-the-badge&logo=tailwind-css)
![Supabase](https://img.shields.io/badge/Supabase-Backend-3ECF8E?style=for-the-badge&logo=supabase)

## ✨ Features

### 🎨 Premium UI/UX
- **Elegant Color Palette**: Deep Royal Purple, Electric Pink, Metallic Gold
- **Smooth Animations**: Framer Motion-style transitions, hover effects, page transitions
- **Fully Responsive**: Desktop, tablet, and mobile-optimized
- **Dance-Inspired Design**: Fluid, rhythmic micro-interactions

### 👥 User Roles

#### 🎓 Student Features
- Browse and filter courses by style, difficulty, and price
- Shopping cart and checkout flow
- Simulated payment processing (Card/UPI/Net Banking/Wallet)
- Student dashboard with course progress tracking
- Profile management with avatar upload
- Course enrollment and progress tracking

#### 🧑‍💼 Admin Features
- Secure admin portal with predefined credentials
- Dashboard with analytics and metrics
- Course CRUD operations
- User management
- Order viewing and management
- Review moderation

### 🎯 Core Functionality
- **6 Dance Styles**: Contemporary, Hip-Hop, Ballet, Bollywood, Salsa, Kathak
- **Course Catalog**: Advanced filtering and search
- **Authentication**: Supabase Auth with role-based access
- **Payment Simulation**: Complete checkout flow with receipt generation
- **Responsive Design**: Mobile-first approach with touch-friendly UI

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager
- Supabase account (free tier works)

### Installation

1. **Clone and Install Dependencies**
```bash
cd rhythmflow-academy
npm install
```

2. **Set Up Supabase**

Create a new project at [supabase.com](https://supabase.com)

3. **Configure Environment Variables**

Update `.env.local` with your Supabase credentials:
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
```

4. **Set Up Database**

Run the SQL schema in Supabase SQL Editor:
```bash
# Copy contents from lib/supabase/schema.sql
# Paste into Supabase SQL Editor and execute
```

5. **Create Admin Users**

In Supabase SQL Editor, run:
```sql
-- After creating auth users through Supabase Auth, update their profiles
UPDATE profiles 
SET role = 'admin' 
WHERE email IN ('Ajayadmin@rhy.com', 'Sachinadmin@rhy.com');
```

6. **Run Development Server**
```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

## 🔐 Demo Credentials

### Admin Access
- **Email**: Ajayadmin@rhy.com | **Password**: Ajay90@1
- **Email**: Sachinadmin@rhy.com | **Password**: Sachin90@1

### Student Access
Create a new account through the signup page or use any test credentials you create.

## 📁 Project Structure

```
rhythmflow-academy/
├── app/
│   ├── (routes)/
│   │   ├── page.tsx              # Homepage
│   │   ├── courses/              # Course catalog & details
│   │   ├── about/                # About page
│   │   ├── contact/              # Contact page
│   │   ├── login/                # Student login
│   │   ├── signup/               # Student signup
│   │   ├── dashboard/            # Student dashboard
│   │   ├── cart/                 # Shopping cart
│   │   └── admin/                # Admin portal
│   ├── globals.css               # Global styles
│   └── layout.tsx                # Root layout
├── components/
│   ├── Navbar.tsx                # Main navigation
│   ├── Footer.tsx                # Footer component
│   └── home/                     # Homepage components
│       ├── Hero.tsx
│       ├── DanceStyles.tsx
│       ├── FeaturedCourses.tsx
│       ├── Stats.tsx
│       ├── Testimonials.tsx
│       └── CTA.tsx
├── lib/
│   └── supabase/
│       ├── client.ts             # Client-side Supabase
│       ├── server.ts             # Server-side Supabase
│       └── schema.sql            # Database schema
├── types/
│   └── index.ts                  # TypeScript types
└── tailwind.config.ts            # Tailwind configuration
```

## 🎨 Design System

### Color Palette
```css
Primary: #4A1E91 (Deep Royal Purple)
Secondary: #FF2E93 (Electric Pink)
Accent: #FFD700 (Metallic Gold)
Dark: #0F0F14 (Charcoal Black)
Light: #FAF9F6 (Warm Off-White)
Admin: #1E293B (Steel Blue)
```

### Typography
- **Headings**: Poppins (Bold/Semi-Bold)
- **Body**: Inter (Regular)
- **Numbers/Stats**: Inter Medium

### Animations
- Page transitions (fade + slide)
- Hover lift effects on cards
- Animated CTA buttons (pulse/glow)
- Progress bars with smooth fill
- Skeleton loaders
- Dance-inspired micro-interactions

## 🗄️ Database Schema

### Tables
- **profiles**: User profiles with role-based access
- **courses**: Course catalog with metadata
- **enrollments**: Student course enrollments
- **orders**: Payment transactions
- **cart**: Shopping cart items
- **reviews**: Course reviews and ratings

### Row Level Security (RLS)
All tables have RLS policies enabled for secure data access based on user roles.

## 🛠️ Tech Stack

- **Frontend**: Next.js 14+ (App Router), TypeScript, Tailwind CSS
- **Backend**: Supabase (Auth, PostgreSQL, Storage)
- **Animations**: CSS animations + Framer Motion patterns
- **Icons**: Lucide React
- **PDF Generation**: jsPDF (for receipts)
- **Deployment**: Vercel (recommended)

## 📱 Responsive Design

- **Mobile-first** layout approach
- Bottom navigation on mobile dashboard
- Touch-friendly buttons and interactions
- Responsive grids and flexible layouts
- Collapsible filters on mobile
- Hamburger menu for mobile navigation

## 🔒 Security Features

- Supabase Row Level Security (RLS)
- Admin-only routes with middleware protection
- Protected API endpoints
- Input validation and sanitization
- Secure authentication flow

## 🚀 Deployment

### Deploy to Vercel

1. Push code to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy

```bash
# Or use Vercel CLI
npm install -g vercel
vercel
```

### Environment Variables for Production
Make sure to add all `.env.local` variables to your Vercel project settings.

## 📝 TODO / Future Enhancements

- [ ] PWA support with offline access
- [ ] Push notifications
- [ ] Event calendar
- [ ] Dance dictionary
- [ ] Blog and newsletter
- [ ] Real payment gateway integration
- [ ] Video streaming optimization
- [ ] Live class scheduling
- [ ] Student community forum
- [ ] Mobile app (React Native)

## 🤝 Contributing

This is a demo project. Feel free to fork and customize for your needs.

## 📄 License

MIT License - feel free to use this project for learning or commercial purposes.

## 🙏 Acknowledgments

- Design inspiration from premium dance academies
- Images from Unsplash
- Icons from Lucide React
- Built with love for the dance community

## 📞 Support

For questions or issues:
- Email: info@rhythmflow.academy
- GitHub Issues: [Create an issue](https://github.com/yourusername/rhythmflow-academy/issues)

---

**Made with 💜 by the RhythmFlow Team**

*Where Movement Meets Mastery* 🩰
