'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Search, Filter, Clock, Users, Star, TrendingUp } from 'lucide-react';
import Link from 'next/link';

export default function CoursesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStyle, setSelectedStyle] = useState<string[]>([]);
  const [selectedDifficulty, setSelectedDifficulty] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<string>('all');

  const danceStyles = ['Contemporary', 'Hip-Hop', 'Ballet', 'Bollywood', 'Salsa', 'Kathak'];
  const difficulties = ['Beginner', 'Intermediate', 'Advanced'];

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
    {
      id: 4,
      title: 'Bollywood Dance Basics',
      instructor: 'Karan Singh',
      style: 'Bollywood',
      difficulty: 'Beginner',
      price: 2999,
      duration: '4 weeks',
      students: 3200,
      rating: 4.7,
      thumbnail: 'https://images.unsplash.com/photo-1504609813442-a8924e83f76e?w=800',
      popular: true,
    },
    {
      id: 5,
      title: 'Salsa & Latin Dance',
      instructor: 'Maria Rodriguez',
      style: 'Salsa',
      difficulty: 'Intermediate',
      price: 4499,
      duration: '6 weeks',
      students: 980,
      rating: 4.9,
      thumbnail: 'https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?w=800',
      popular: false,
    },
    {
      id: 6,
      title: 'Kathak Classical Dance',
      instructor: 'Guru Ramesh Kumar',
      style: 'Kathak',
      difficulty: 'Advanced',
      price: 6999,
      duration: '16 weeks',
      students: 650,
      rating: 5.0,
      thumbnail: 'https://images.unsplash.com/photo-1599809275671-b5942cabc7a2?w=800',
      popular: false,
    },
  ];

  const toggleStyle = (style: string) => {
    setSelectedStyle(prev =>
      prev.includes(style) ? prev.filter(s => s !== style) : [...prev, style]
    );
  };

  const toggleDifficulty = (difficulty: string) => {
    setSelectedDifficulty(prev =>
      prev.includes(difficulty) ? prev.filter(d => d !== difficulty) : [...prev, difficulty]
    );
  };

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         course.instructor.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStyle = selectedStyle.length === 0 || selectedStyle.includes(course.style);
    const matchesDifficulty = selectedDifficulty.length === 0 || selectedDifficulty.includes(course.difficulty);
    const matchesPrice = priceRange === 'all' ||
                        (priceRange === 'low' && course.price < 4000) ||
                        (priceRange === 'medium' && course.price >= 4000 && course.price < 6000) ||
                        (priceRange === 'high' && course.price >= 6000);
    
    return matchesSearch && matchesStyle && matchesDifficulty && matchesPrice;
  });

  return (
    <main className="min-h-screen bg-light">
      <Navbar />
      
      {/* Header */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary via-secondary to-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Explore Our Courses
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Find the perfect dance course to match your passion and skill level
          </p>
        </div>
      </section>

      {/* Search & Filters */}
      <section className="py-8 bg-white shadow-sm sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search courses or instructors..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            
            {/* Filter Button (Mobile) */}
            <button className="md:hidden btn-primary flex items-center justify-center space-x-2">
              <Filter className="w-5 h-5" />
              <span>Filters</span>
            </button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Filters */}
            <div className="lg:w-64 space-y-6">
              {/* Dance Style Filter */}
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h3 className="font-bold text-lg mb-4">Dance Style</h3>
                <div className="space-y-2">
                  {danceStyles.map(style => (
                    <label key={style} className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedStyle.includes(style)}
                        onChange={() => toggleStyle(style)}
                        className="w-4 h-4 text-primary rounded focus:ring-primary"
                      />
                      <span className="text-gray-700">{style}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Difficulty Filter */}
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h3 className="font-bold text-lg mb-4">Difficulty</h3>
                <div className="space-y-2">
                  {difficulties.map(difficulty => (
                    <label key={difficulty} className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedDifficulty.includes(difficulty)}
                        onChange={() => toggleDifficulty(difficulty)}
                        className="w-4 h-4 text-primary rounded focus:ring-primary"
                      />
                      <span className="text-gray-700">{difficulty}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h3 className="font-bold text-lg mb-4">Price Range</h3>
                <div className="space-y-2">
                  {[
                    { value: 'all', label: 'All Prices' },
                    { value: 'low', label: 'Under ₹4,000' },
                    { value: 'medium', label: '₹4,000 - ₹6,000' },
                    { value: 'high', label: 'Above ₹6,000' },
                  ].map(option => (
                    <label key={option.value} className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        name="price"
                        value={option.value}
                        checked={priceRange === option.value}
                        onChange={(e) => setPriceRange(e.target.value)}
                        className="w-4 h-4 text-primary focus:ring-primary"
                      />
                      <span className="text-gray-700">{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Course Grid */}
            <div className="flex-1">
              <div className="mb-6 flex items-center justify-between">
                <p className="text-gray-600">
                  Showing <span className="font-semibold">{filteredCourses.length}</span> courses
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredCourses.map(course => (
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
                          View
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {filteredCourses.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-600 text-lg">No courses found matching your filters.</p>
                  <button
                    onClick={() => {
                      setSelectedStyle([]);
                      setSelectedDifficulty([]);
                      setPriceRange('all');
                      setSearchQuery('');
                    }}
                    className="mt-4 btn-primary"
                  >
                    Clear Filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
