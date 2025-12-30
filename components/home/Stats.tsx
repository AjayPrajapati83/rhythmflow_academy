'use client';

import { Users, Award, BookOpen, Star } from 'lucide-react';

export default function Stats() {
  const stats = [
    {
      icon: Users,
      number: '10,000+',
      label: 'Happy Students',
      color: 'text-primary',
    },
    {
      icon: Award,
      number: '50+',
      label: 'Expert Instructors',
      color: 'text-secondary',
    },
    {
      icon: BookOpen,
      number: '100+',
      label: 'Dance Courses',
      color: 'text-accent',
    },
    {
      icon: Star,
      number: '4.9/5',
      label: 'Average Rating',
      color: 'text-primary',
    },
  ];

  return (
    <section className="py-16 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white rounded-2xl shadow-lg hover-lift"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 mb-4`}>
                <stat.icon className={`w-8 h-8 ${stat.color}`} />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
