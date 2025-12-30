'use client';

import Link from 'next/link';
import { ArrowRight, Play, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);
  
  const danceImages = [
    'https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?w=600&h=800&fit=crop',
    'https://images.unsplash.com/photo-1547153760-18fc86324498?w=600&h=800&fit=crop',
    'https://images.unsplash.com/photo-1518834107812-67b0b7c58434?w=600&h=800&fit=crop',
    'https://images.unsplash.com/photo-1504609813442-a8924e83f76e?w=600&h=800&fit=crop',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % danceImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background with Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent"></div>
      
      {/* Dancing Silhouettes/Images */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {danceImages.map((img, index) => (
          <div
            key={index}
            className={`absolute transition-opacity duration-1000 ${
              index === currentImage ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              top: '50%',
              right: '5%',
              transform: 'translateY(-50%)',
              width: '400px',
              height: '600px',
              backgroundImage: `url(${img})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              maskImage: 'linear-gradient(to left, rgba(0,0,0,0.8), transparent)',
              WebkitMaskImage: 'linear-gradient(to left, rgba(0,0,0,0.8), transparent)',
            }}
          />
        ))}
      </div>

      {/* Animated Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/30 rounded-full animate-float"
            style={{
              left: `${(i * 5) % 100}%`,
              top: `${(i * 7) % 100}%`,
              animationDelay: `${(i * 0.3) % 5}s`,
              animationDuration: `${8 + (i % 5)}s`,
            }}
          />
        ))}
      </div>
      
      {/* Animated Circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 animate-slide-up">
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-white text-sm font-medium">India's #1 Online Dance Academy</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-slide-up leading-tight">
              Where Movement
              <br />
              <span className="text-accent animate-pulse">Meets Mastery</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl animate-slide-up" style={{ animationDelay: '0.2s' }}>
              Transform your passion into performance with India's premier online dance academy. 
              Learn from world-class instructors, anytime, anywhere.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <Link 
                href="/courses" 
                className="group bg-white text-primary px-8 py-4 rounded-full font-semibold text-lg flex items-center space-x-2 hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                <span>Explore Courses</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <button className="group bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center space-x-2 hover:bg-white/30 transition-all duration-300 border-2 border-white/30">
                <Play className="w-5 h-5" />
                <span>Watch Demo</span>
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 animate-slide-up" style={{ animationDelay: '0.6s' }}>
              {[
                { number: '10,000+', label: 'Active Students' },
                { number: '50+', label: 'Expert Instructors' },
                { number: '100+', label: 'Dance Courses' },
                { number: '98%', label: 'Success Rate' },
              ].map((stat, index) => (
                <div key={index} className="text-white">
                  <div className="text-3xl md:text-4xl font-bold mb-2 animate-pulse">{stat.number}</div>
                  <div className="text-sm md:text-base text-white/80">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Dance Animation/GIF */}
          <div className="hidden lg:block relative animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              {/* Main Dance Image with Animation */}
              <div className="relative w-full h-[600px] rounded-3xl overflow-hidden shadow-2xl">
                {danceImages.map((img, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-1000 ${
                      index === currentImage ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                    }`}
                  >
                    <img
                      src={img}
                      alt="Dance"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent"></div>
                  </div>
                ))}
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 bg-white rounded-2xl p-4 shadow-xl animate-float">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-semibold">Live Classes</span>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl animate-float" style={{ animationDelay: '1s' }}>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">4.9★</div>
                  <div className="text-xs text-gray-600">Student Rating</div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-1/4 -left-8 w-16 h-16 bg-accent/30 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute bottom-1/4 -right-8 w-20 h-20 bg-secondary/30 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
