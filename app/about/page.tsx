'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Award, Users, Heart, Target } from 'lucide-react';

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: 'Passion',
      description: 'We believe dance is more than movement—it\'s a form of expression that connects hearts.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Our instructors are world-class professionals dedicated to bringing out the best in every student.',
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Join a vibrant community of dancers who support, inspire, and grow together.',
    },
    {
      icon: Target,
      title: 'Innovation',
      description: 'We leverage technology to make quality dance education accessible to everyone, everywhere.',
    },
  ];

  const instructors = [
    {
      name: 'Priya Sharma',
      specialty: 'Contemporary Dance',
      image: 'https://i.pravatar.cc/300?img=1',
      bio: '15+ years of experience, trained at Juilliard',
    },
    {
      name: 'Rahul Verma',
      specialty: 'Hip-Hop & Breaking',
      image: 'https://i.pravatar.cc/300?img=12',
      bio: 'International champion, featured in Bollywood films',
    },
    {
      name: 'Anjali Desai',
      specialty: 'Classical Ballet',
      image: 'https://i.pravatar.cc/300?img=5',
      bio: 'Royal Ballet School graduate, 20+ years teaching',
    },
    {
      name: 'Karan Singh',
      specialty: 'Bollywood Dance',
      image: 'https://i.pravatar.cc/300?img=13',
      bio: 'Choreographer for major film productions',
    },
  ];

  return (
    <main className="min-h-screen bg-light">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary via-secondary to-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            About RhythmFlow Academy
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Empowering dancers worldwide through innovative online education and world-class instruction
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">
            Our <span className="text-gradient">Story</span>
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p>
              Founded in 2020, RhythmFlow Academy was born from a simple belief: everyone deserves access to quality dance education, regardless of their location or schedule.
            </p>
            <p>
              What started as a small online platform with just five courses has grown into India's premier dance learning destination, serving over 10,000 students across 50+ countries.
            </p>
            <p>
              Our mission is to preserve the art of dance while making it accessible to the modern learner. We combine traditional teaching methods with cutting-edge technology to create an immersive learning experience that fits your lifestyle.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">
            Our <span className="text-gradient">Values</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover-lift text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary mb-6">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instructors */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">
            Meet Our <span className="text-gradient">Instructors</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {instructors.map((instructor, index) => (
              <div key={index} className="group bg-light rounded-2xl overflow-hidden shadow-lg hover-lift">
                <div
                  className="h-64 bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                  style={{ backgroundImage: `url(${instructor.image})` }}
                ></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{instructor.name}</h3>
                  <p className="text-primary font-semibold mb-2">{instructor.specialty}</p>
                  <p className="text-gray-600 text-sm">{instructor.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
