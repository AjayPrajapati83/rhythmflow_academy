'use client';

import Link from 'next/link';
import { Clock, Users, Star, TrendingUp } from 'lucide-react';

export default function FeaturedCourses() {
  const courses = [
    {
      id: 1,
      title: 'Contemporary Dance Masterclass',
      instructor: 'Priya Sharma',
      style: 'Contemporary',
      difficulty: 'Intermediate',
      price: 4999,
      duration: '8 weeks',
      students: 1250,
      rating: 4.9,
      thumbnail: 'https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?w=800',
      popular: true,
    },
    {
      id: 2,
      title: 'Hip-Hop Fundamentals',
      instructor: 'Rahul Verma',
      style: 'Hip-Hop',
      difficulty: 'Beginner',
      price: 3999,
      duration: '6 weeks',
      students: 2100,
      rating: 4.8,
      thumbnail: 'https://images.unsplash.com/photo-1547153760-18fc86324498?w=800',
      popular: true,
    },
    {
      id: 3,
      title: 'Classical Ballet Technique',
      instructor: 'Anjali Desai',
      style: 'Ballet',
      difficulty: 'Advanced',
      price: 5999,
      duration: '12 weeks',
      students: 850,
      rating: 5.0,
      thumbnail: 'https://images.unsplash.com/photo-1518834107812-67b0b7c58434?w=800',
      popular: false,
    },
  ];

  return (
    <section className="py-20 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured <span className="text-gradient">Courses</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Start your dance journey with our most popular courses
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div
              key={course.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover-lift"
            >
              {/* Thumbnail */}
              <div className="relative h-48 overflow-hidden">
                <div
                  className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                  style={{ backgroundImage: `url(${course.thumbnail})` }}
                ></div>
                {course.popular && (
                  <div className="absolute top-4 right-4 bg-secondary text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center space-x-1">
                    <TrendingUp className="w-4 h-4" />
                    <span>Popular</span>
                  </div>
                )}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-primary">
                  {course.style}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-gray-500">{course.difficulty}</span>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-accent text-accent" />
                    <span className="text-sm font-semibold">{course.rating}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition">
                  {course.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">by {course.instructor}</p>

                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4" />
                    <span>{course.students.toLocaleString()}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t">
                  <div>
                    <span className="text-2xl font-bold text-primary">₹{course.price.toLocaleString()}</span>
                  </div>
                  <Link
                    href={`/courses/${course.id}`}
                    className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/courses"
            className="inline-block btn-primary"
          >
            View All Courses
          </Link>
        </div>
      </div>
    </section>
  );
}
