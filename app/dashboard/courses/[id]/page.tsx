'use client';

import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { 
  ArrowLeft,
  PlayCircle,
  CheckCircle,
  Lock,
  Clock,
  FileText,
  Download,
  MessageSquare
} from 'lucide-react';

export default function CoursePlayerPage() {
  const params = useParams();
  const router = useRouter();
  const courseId = params.id;
  const [currentLesson, setCurrentLesson] = useState(0);

  const course = {
    id: courseId,
    title: 'Contemporary Dance Masterclass',
    instructor: 'Priya Sharma',
    progress: 65,
    curriculum: [
      {
        week: 1,
        title: 'Introduction to Contemporary Dance',
        lessons: [
          { id: 1, title: 'Welcome & Course Overview', duration: '10:30', completed: true, locked: false },
          { id: 2, title: 'History of Contemporary Dance', duration: '15:20', completed: true, locked: false },
          { id: 3, title: 'Basic Warm-up Exercises', duration: '20:15', completed: true, locked: false },
          { id: 4, title: 'Understanding Body Alignment', duration: '18:45', completed: true, locked: false },
          { id: 5, title: 'Week 1 Practice Session', duration: '25:00', completed: true, locked: false },
        ]
      },
      {
        week: 2,
        title: 'Basic Techniques and Movements',
        lessons: [
          { id: 6, title: 'Floor Work Basics', duration: '22:30', completed: true, locked: false },
          { id: 7, title: 'Weight Transfer Techniques', duration: '19:15', completed: true, locked: false },
          { id: 8, title: 'Spiral Movements', duration: '21:00', completed: false, locked: false },
          { id: 9, title: 'Release Technique', duration: '23:45', completed: false, locked: false },
          { id: 10, title: 'Combination Practice', duration: '28:00', completed: false, locked: false },
        ]
      },
      {
        week: 3,
        title: 'Floor Work Fundamentals',
        lessons: [
          { id: 11, title: 'Rolling Techniques', duration: '20:00', completed: false, locked: false },
          { id: 12, title: 'Floor to Standing Transitions', duration: '22:30', completed: false, locked: false },
          { id: 13, title: 'Contact Improvisation', duration: '25:15', completed: false, locked: false },
          { id: 14, title: 'Floor Patterns', duration: '19:45', completed: false, locked: false },
          { id: 15, title: 'Week 3 Choreography', duration: '30:00', completed: false, locked: false },
        ]
      },
      {
        week: 4,
        title: 'Improvisation and Expression',
        lessons: [
          { id: 16, title: 'Introduction to Improvisation', duration: '18:00', completed: false, locked: true },
          { id: 17, title: 'Emotional Expression', duration: '21:30', completed: false, locked: true },
          { id: 18, title: 'Music Interpretation', duration: '24:00', completed: false, locked: true },
          { id: 19, title: 'Partner Work', duration: '26:15', completed: false, locked: true },
          { id: 20, title: 'Improvisation Practice', duration: '28:00', completed: false, locked: true },
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <button
              onClick={() => router.push('/dashboard')}
              className="flex items-center space-x-2 text-gray-600 hover:text-primary transition"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Dashboard</span>
            </button>
            
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="text-sm text-gray-600">Your Progress</p>
                <p className="text-lg font-bold text-primary">{course.progress}%</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Video Player */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-6">
              {/* Video Area */}
              <div className="relative bg-black aspect-video flex items-center justify-center">
                <div className="text-center text-white">
                  <PlayCircle className="w-20 h-20 mx-auto mb-4 opacity-50" />
                  <p className="text-lg">Video Player</p>
                  <p className="text-sm opacity-75">Lesson content will play here</p>
                </div>
              </div>

              {/* Video Controls Info */}
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Welcome & Course Overview
                </h2>
                <p className="text-gray-600 mb-4">Week 1: Introduction to Contemporary Dance</p>
                
                <div className="flex items-center space-x-6 text-sm text-gray-600 mb-6">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>10:30</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FileText className="w-4 h-4" />
                    <span>Lesson Notes</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Download className="w-4 h-4" />
                    <span>Resources</span>
                  </div>
                </div>

                {/* Tabs */}
                <div className="border-t pt-6">
                  <div className="flex space-x-6 mb-4">
                    <button className="text-primary font-semibold border-b-2 border-primary pb-2">
                      Overview
                    </button>
                    <button className="text-gray-600 hover:text-primary pb-2">
                      Notes
                    </button>
                    <button className="text-gray-600 hover:text-primary pb-2">
                      Discussion
                    </button>
                  </div>
                  
                  <div className="prose max-w-none">
                    <p className="text-gray-700">
                      Welcome to the Contemporary Dance Masterclass! In this introductory lesson, 
                      we'll cover the basics of contemporary dance, its history, and what you can 
                      expect from this course. Get ready to embark on an exciting journey of 
                      movement and expression.
                    </p>
                    <h3 className="text-lg font-semibold mt-4 mb-2">What You'll Learn:</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                      <li>Course structure and expectations</li>
                      <li>Brief history of contemporary dance</li>
                      <li>Essential terminology</li>
                      <li>How to get the most from this course</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Mark Complete Button */}
            <button className="w-full bg-primary text-white py-4 rounded-xl font-semibold hover:bg-primary/90 transition-colors flex items-center justify-center space-x-2">
              <CheckCircle className="w-5 h-5" />
              <span>Mark as Complete & Continue</span>
            </button>
          </div>

          {/* Curriculum Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24 max-h-[calc(100vh-120px)] overflow-y-auto">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Course Content</h3>
              
              <div className="space-y-4">
                {course.curriculum.map((week) => (
                  <div key={week.week} className="border-b pb-4 last:border-b-0">
                    <h4 className="font-semibold text-gray-900 mb-3">
                      Week {week.week}: {week.title}
                    </h4>
                    <div className="space-y-2">
                      {week.lessons.map((lesson) => (
                        <button
                          key={lesson.id}
                          onClick={() => !lesson.locked && setCurrentLesson(lesson.id)}
                          disabled={lesson.locked}
                          className={`w-full text-left p-3 rounded-lg transition-colors ${
                            lesson.completed
                              ? 'bg-green-50 hover:bg-green-100'
                              : lesson.locked
                              ? 'bg-gray-50 cursor-not-allowed opacity-60'
                              : 'bg-gray-50 hover:bg-gray-100'
                          }`}
                        >
                          <div className="flex items-start space-x-3">
                            <div className="flex-shrink-0 mt-1">
                              {lesson.completed ? (
                                <CheckCircle className="w-5 h-5 text-green-600" />
                              ) : lesson.locked ? (
                                <Lock className="w-5 h-5 text-gray-400" />
                              ) : (
                                <PlayCircle className="w-5 h-5 text-primary" />
                              )}
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className={`text-sm font-medium ${
                                lesson.locked ? 'text-gray-400' : 'text-gray-900'
                              }`}>
                                {lesson.title}
                              </p>
                              <p className="text-xs text-gray-500 mt-1">{lesson.duration}</p>
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
