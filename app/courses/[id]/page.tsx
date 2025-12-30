'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { 
  Clock, 
  Users, 
  Star, 
  Calendar,
  Award,
  PlayCircle,
  CheckCircle,
  ArrowLeft,
  Heart,
  Share2
} from 'lucide-react';
import Link from 'next/link';

export default function CourseDetailPage() {
  const params = useParams();
  const router = useRouter();
  const courseId = params.id;
  const [isEnrolled, setIsEnrolled] = useState(false);
  const [isInCart, setIsInCart] = useState(false);

  useEffect(() => {
    // Check if user is authenticated
    const userStr = typeof window !== 'undefined' ? localStorage.getItem('rhythmflow_user') : null;
    
    // Check if course is in cart
    const cartStr = typeof window !== 'undefined' ? localStorage.getItem('rhythmflow_cart') : null;
    if (cartStr) {
      try {
        const cart = JSON.parse(cartStr);
        setIsInCart(cart.some((item: any) => item.courseId === courseId));
      } catch {}
    }
  }, [courseId]);

  const handleAddToCart = () => {
    // Check if user is logged in
    const userStr = typeof window !== 'undefined' ? localStorage.getItem('rhythmflow_user') : null;
    
    if (!userStr) {
      // Redirect to login
      router.push('/login?redirect=/courses/' + courseId);
      return;
    }

    // Add to cart
    const cartStr = typeof window !== 'undefined' ? localStorage.getItem('rhythmflow_cart') : null;
    let cart = [];
    if (cartStr) {
      try {
        cart = JSON.parse(cartStr);
      } catch {}
    }

    const cartItem = {
      courseId: course.id.toString(),
      title: course.title,
      price: course.price,
      thumbnail: course.thumbnail,
      instructor: course.instructor
    };

    const exists = cart.find((item: any) => item.courseId === courseId);
    if (!exists) {
      cart.push(cartItem);
      if (typeof window !== 'undefined') {
        localStorage.setItem('rhythmflow_cart', JSON.stringify(cart));
      }
      setIsInCart(true);
    }

    // Redirect to cart
    router.push('/cart');
  };

  // Mock course data - in real app, fetch based on courseId
  const courses = {
    '1': {
      id: 1,
      title: 'Contemporary Dance Masterclass',
      instructor: 'Priya Sharma',
      instructorBio: 'Professional dancer with 15+ years of experience in contemporary dance',
      style: 'Contemporary',
      difficulty: 'Intermediate',
      price: 4999,
      duration: '8 weeks',
      students: 1250,
      rating: 4.9,
      reviews: 342,
      thumbnail: 'https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?w=800',
      description: 'Master the art of contemporary dance with this comprehensive course. Learn fluid movements, emotional expression, and advanced techniques that will transform your dancing.',
      whatYouLearn: [
        'Fundamental contemporary dance techniques',
        'Floor work and improvisation',
        'Emotional expression through movement',
        'Choreography creation and performance',
        'Body awareness and flexibility training'
      ],
      curriculum: [
        { week: 1, title: 'Introduction to Contemporary Dance', lessons: 5 },
        { week: 2, title: 'Basic Techniques and Movements', lessons: 6 },
        { week: 3, title: 'Floor Work Fundamentals', lessons: 5 },
        { week: 4, title: 'Improvisation and Expression', lessons: 6 },
        { week: 5, title: 'Advanced Techniques', lessons: 5 },
        { week: 6, title: 'Choreography Basics', lessons: 6 },
        { week: 7, title: 'Performance Preparation', lessons: 5 },
        { week: 8, title: 'Final Performance', lessons: 4 }
      ],
      requirements: [
        'Basic dance experience recommended',
        'Comfortable workout clothes',
        'Dedicated practice space',
        'Willingness to learn and express'
      ]
    },
    '2': {
      id: 2,
      title: 'Hip-Hop Fundamentals',
      instructor: 'Rahul Verma',
      instructorBio: 'Award-winning hip-hop choreographer and street dance expert',
      style: 'Hip-Hop',
      difficulty: 'Beginner',
      price: 3999,
      duration: '6 weeks',
      students: 2100,
      rating: 4.8,
      reviews: 567,
      thumbnail: 'https://images.unsplash.com/photo-1547153760-18fc86324498?w=800',
      description: 'Start your hip-hop journey with this beginner-friendly course. Learn the fundamentals of street dance, popping, locking, and breaking.',
      whatYouLearn: [
        'Hip-hop basic moves and grooves',
        'Popping and locking techniques',
        'Breaking fundamentals',
        'Freestyle and battle skills',
        'Music interpretation and rhythm'
      ],
      curriculum: [
        { week: 1, title: 'Hip-Hop History and Basics', lessons: 5 },
        { week: 2, title: 'Grooves and Foundation', lessons: 6 },
        { week: 3, title: 'Popping Techniques', lessons: 5 },
        { week: 4, title: 'Locking Fundamentals', lessons: 6 },
        { week: 5, title: 'Breaking Basics', lessons: 5 },
        { week: 6, title: 'Freestyle and Performance', lessons: 5 }
      ],
      requirements: [
        'No prior dance experience needed',
        'Sneakers and comfortable clothes',
        'Positive attitude and energy',
        'Willingness to practice regularly'
      ]
    },
    '3': {
      id: 3,
      title: 'Classical Ballet Technique',
      instructor: 'Anjali Desai',
      instructorBio: 'Classically trained ballet instructor with international performance experience',
      style: 'Ballet',
      difficulty: 'Advanced',
      price: 5999,
      duration: '12 weeks',
      students: 850,
      rating: 5.0,
      reviews: 198,
      thumbnail: 'https://images.unsplash.com/photo-1518834107812-67b0b7c58434?w=800',
      description: 'Refine your ballet technique with this advanced course covering classical ballet methodology, pointe work, and performance artistry.',
      whatYouLearn: [
        'Advanced ballet technique',
        'Pointe work mastery',
        'Classical variations',
        'Performance quality',
        'Injury prevention and body alignment'
      ],
      curriculum: [
        { week: 1, title: 'Advanced Barre Work', lessons: 6 },
        { week: 2, title: 'Center Practice', lessons: 6 },
        { week: 3, title: 'Allegro Combinations', lessons: 5 },
        { week: 4, title: 'Pointe Technique I', lessons: 6 },
        { week: 5, title: 'Pointe Technique II', lessons: 6 },
        { week: 6, title: 'Classical Variations I', lessons: 5 },
        { week: 7, title: 'Classical Variations II', lessons: 5 },
        { week: 8, title: 'Adagio and Partnering', lessons: 6 },
        { week: 9, title: 'Performance Preparation', lessons: 5 },
        { week: 10, title: 'Rehearsals', lessons: 6 },
        { week: 11, title: 'Final Rehearsals', lessons: 5 },
        { week: 12, title: 'Performance Week', lessons: 4 }
      ],
      requirements: [
        'Minimum 3 years ballet experience',
        'Pointe shoes (if applicable)',
        'Ballet attire and shoes',
        'Strong dedication and discipline'
      ]
    },
    '4': {
      id: 4,
      title: 'Bollywood Dance Basics',
      instructor: 'Karan Singh',
      instructorBio: 'Bollywood choreographer with credits in major film productions',
      style: 'Bollywood',
      difficulty: 'Beginner',
      price: 2999,
      duration: '4 weeks',
      students: 3200,
      rating: 4.7,
      reviews: 892,
      thumbnail: 'https://images.unsplash.com/photo-1504609813442-a8924e83f76e?w=800',
      description: 'Learn the vibrant and energetic moves of Bollywood dance. Perfect for beginners who want to dance like their favorite movie stars!',
      whatYouLearn: [
        'Classic Bollywood dance moves',
        'Facial expressions and acting',
        'Popular film choreography',
        'Rhythm and musicality',
        'Performance confidence'
      ],
      curriculum: [
        { week: 1, title: 'Bollywood Basics and Expressions', lessons: 6 },
        { week: 2, title: 'Classic Film Choreography', lessons: 6 },
        { week: 3, title: 'Modern Bollywood Styles', lessons: 5 },
        { week: 4, title: 'Performance and Showcase', lessons: 5 }
      ],
      requirements: [
        'No dance experience required',
        'Comfortable Indian or workout attire',
        'Love for Bollywood music',
        'Enthusiasm and energy'
      ]
    },
    '5': {
      id: 5,
      title: 'Salsa & Latin Dance',
      instructor: 'Maria Rodriguez',
      instructorBio: 'International salsa champion and Latin dance specialist',
      style: 'Salsa',
      difficulty: 'Intermediate',
      price: 4499,
      duration: '6 weeks',
      students: 980,
      rating: 4.9,
      reviews: 276,
      thumbnail: 'https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?w=800',
      description: 'Spice up your dance skills with this exciting salsa and Latin dance course. Learn partner work, turns, and authentic Latin rhythms.',
      whatYouLearn: [
        'Salsa basic steps and patterns',
        'Partner connection and leading/following',
        'Turns and spins',
        'Bachata and Merengue basics',
        'Latin musicality and timing'
      ],
      curriculum: [
        { week: 1, title: 'Salsa Fundamentals', lessons: 5 },
        { week: 2, title: 'Partner Work Basics', lessons: 6 },
        { week: 3, title: 'Turns and Combinations', lessons: 5 },
        { week: 4, title: 'Bachata Introduction', lessons: 6 },
        { week: 5, title: 'Advanced Patterns', lessons: 5 },
        { week: 6, title: 'Social Dancing and Performance', lessons: 5 }
      ],
      requirements: [
        'Basic dance experience helpful',
        'Dance shoes or smooth-soled shoes',
        'Partner optional (not required)',
        'Sense of rhythm'
      ]
    },
    '6': {
      id: 6,
      title: 'Kathak Classical Dance',
      instructor: 'Guru Ramesh Kumar',
      instructorBio: 'Master of Kathak with 30+ years of teaching and performance experience',
      style: 'Kathak',
      difficulty: 'Advanced',
      price: 6999,
      duration: '16 weeks',
      students: 650,
      rating: 5.0,
      reviews: 145,
      thumbnail: 'https://images.unsplash.com/photo-1599809275671-b5942cabc7a2?w=800',
      description: 'Immerse yourself in the rich tradition of Kathak, one of India\'s eight classical dance forms. Master intricate footwork, spins, and storytelling.',
      whatYouLearn: [
        'Traditional Kathak technique',
        'Footwork patterns (tatkar)',
        'Spins and pirouettes (chakkars)',
        'Abhinaya (expression and storytelling)',
        'Tabla and rhythm understanding'
      ],
      curriculum: [
        { week: 1, title: 'Introduction to Kathak', lessons: 5 },
        { week: 2, title: 'Basic Tatkar Patterns', lessons: 6 },
        { week: 3, title: 'Hand Gestures (Hastak)', lessons: 5 },
        { week: 4, title: 'Thaat and Aamad', lessons: 6 },
        { week: 5, title: 'Tukda and Toda', lessons: 5 },
        { week: 6, title: 'Chakkar Technique I', lessons: 6 },
        { week: 7, title: 'Chakkar Technique II', lessons: 5 },
        { week: 8, title: 'Paran and Kavit', lessons: 6 },
        { week: 9, title: 'Abhinaya Basics', lessons: 5 },
        { week: 10, title: 'Thumri and Bhajan', lessons: 6 },
        { week: 11, title: 'Tarana Composition', lessons: 5 },
        { week: 12, title: 'Advanced Compositions', lessons: 6 },
        { week: 13, title: 'Performance Preparation I', lessons: 5 },
        { week: 14, title: 'Performance Preparation II', lessons: 6 },
        { week: 15, title: 'Final Rehearsals', lessons: 5 },
        { week: 16, title: 'Arangetram (Debut Performance)', lessons: 4 }
      ],
      requirements: [
        'Prior classical dance experience required',
        'Kathak costume and ghungroo (ankle bells)',
        'Understanding of Indian classical music',
        'Dedication to traditional art form'
      ]
    }
  };

  const course = courses[courseId as keyof typeof courses] || courses['1'];

  const handleEnroll = () => {
    setIsEnrolled(true);
    // In real app, handle enrollment logic
  };

  return (
    <main className="min-h-screen bg-light">
      <Navbar />
      
      {/* Back Button */}
      <div className="pt-24 pb-4 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => router.back()}
            className="flex items-center space-x-2 text-gray-600 hover:text-primary transition"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Courses</span>
          </button>
        </div>
      </div>

      {/* Course Header */}
      <section className="bg-white pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Course Info */}
            <div className="lg:col-span-2">
              <div className="mb-4">
                <span className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-semibold">
                  {course.style}
                </span>
                <span className="ml-3 inline-block bg-gray-100 text-gray-700 px-4 py-1 rounded-full text-sm font-semibold">
                  {course.difficulty}
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                {course.title}
              </h1>

              <p className="text-xl text-gray-600 mb-6">
                {course.description}
              </p>

              <div className="flex flex-wrap items-center gap-6 mb-6">
                <div className="flex items-center space-x-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                    ))}
                  </div>
                  <span className="font-semibold">{course.rating}</span>
                  <span className="text-gray-600">({course.reviews} reviews)</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <Users className="w-5 h-5" />
                  <span>{course.students.toLocaleString()} students</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <Clock className="w-5 h-5" />
                  <span>{course.duration}</span>
                </div>
              </div>

              <div className="flex items-center space-x-4 mb-8">
                <img
                  src={`https://ui-avatars.com/api/?name=${course.instructor}&background=random`}
                  alt={course.instructor}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <p className="font-semibold text-gray-900">{course.instructor}</p>
                  <p className="text-sm text-gray-600">{course.instructorBio}</p>
                </div>
              </div>
            </div>

            {/* Right Column - Enrollment Card */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-xl p-6 sticky top-24">
                <div
                  className="w-full h-48 bg-cover bg-center rounded-xl mb-6"
                  style={{ backgroundImage: `url(${course.thumbnail})` }}
                >
                  <div className="w-full h-full bg-black/30 rounded-xl flex items-center justify-center">
                    <PlayCircle className="w-16 h-16 text-white" />
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex items-baseline space-x-2 mb-2">
                    <span className="text-4xl font-bold text-primary">₹{course.price.toLocaleString()}</span>
                  </div>
                  <p className="text-sm text-gray-600">One-time payment • Lifetime access</p>
                </div>

                {isEnrolled ? (
                  <div className="space-y-3">
                    <div className="bg-green-50 text-green-700 px-4 py-3 rounded-lg flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5" />
                      <span className="font-semibold">You're enrolled!</span>
                    </div>
                    <Link
                      href={`/dashboard/courses/${course.id}`}
                      className="block w-full btn-primary text-center"
                    >
                      Go to Course
                    </Link>
                  </div>
                ) : (
                  <button
                    onClick={handleAddToCart}
                    className="w-full btn-primary mb-3"
                  >
                    {isInCart ? 'Go to Cart' : 'Add to Cart'}
                  </button>
                )}

                <div className="flex gap-2 mb-6">
                  <button className="flex-1 border-2 border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:border-primary hover:text-primary transition flex items-center justify-center space-x-2">
                    <Heart className="w-5 h-5" />
                    <span>Save</span>
                  </button>
                  <button className="flex-1 border-2 border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:border-primary hover:text-primary transition flex items-center justify-center space-x-2">
                    <Share2 className="w-5 h-5" />
                    <span>Share</span>
                  </button>
                </div>

                <div className="space-y-3 text-sm">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Lifetime access</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Certificate of completion</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>30-day money-back guarantee</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Content */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              {/* What You'll Learn */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">What You'll Learn</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {course.whatYouLearn.map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Curriculum */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Course Curriculum</h2>
                <div className="space-y-3">
                  {course.curriculum.map((week, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-4 hover:border-primary transition">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-semibold text-gray-900">Week {week.week}: {week.title}</p>
                          <p className="text-sm text-gray-600">{week.lessons} lessons</p>
                        </div>
                        <PlayCircle className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Requirements */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Requirements</h2>
                <ul className="space-y-3">
                  {course.requirements.map((req, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <Award className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
                <h3 className="font-bold text-lg mb-4">Course Features</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Duration</span>
                    <span className="font-semibold">{course.duration}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Difficulty</span>
                    <span className="font-semibold">{course.difficulty}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Students</span>
                    <span className="font-semibold">{course.students.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Language</span>
                    <span className="font-semibold">English, Hindi</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Certificate</span>
                    <span className="font-semibold">Yes</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
