import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/home/Hero';
import DanceStyles from '@/components/home/DanceStyles';
import FeaturedCourses from '@/components/home/FeaturedCourses';
import Stats from '@/components/home/Stats';
import Testimonials from '@/components/home/Testimonials';
import CTA from '@/components/home/CTA';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Stats />
      <DanceStyles />
      <FeaturedCourses />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
