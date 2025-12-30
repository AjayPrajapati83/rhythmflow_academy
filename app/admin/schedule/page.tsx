'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { 
  Users, 
  BookOpen, 
  Calendar, 
  Settings,
  LogOut,
  Menu,
  X,
  Clock,
  MapPin,
  Plus,
  TrendingUp
} from 'lucide-react';

export default function AdminSchedule() {
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLogout = () => {
    router.push('/admin/login');
  };

  const schedule = [
    { 
      id: 1, 
      day: 'Monday', 
      classes: [
        { time: '5:00 PM - 6:30 PM', course: 'Ballet Foundation', instructor: 'Sophia Williams', room: 'Studio A', students: 18 },
        { time: '6:00 PM - 7:30 PM', course: 'Hip Hop Basics', instructor: 'Rajesh Kumar', room: 'Studio B', students: 45 },
      ]
    },
    { 
      id: 2, 
      day: 'Tuesday', 
      classes: [
        { time: '7:00 PM - 8:30 PM', course: 'Contemporary Dance', instructor: 'Priya Mehta', room: 'Studio A', students: 32 },
      ]
    },
    { 
      id: 3, 
      day: 'Wednesday', 
      classes: [
        { time: '6:00 PM - 7:30 PM', course: 'Hip Hop Basics', instructor: 'Rajesh Kumar', room: 'Studio B', students: 45 },
        { time: '8:00 PM - 9:30 PM', course: 'Salsa Intermediate', instructor: 'Carlos Rodriguez', room: 'Studio A', students: 20 },
      ]
    },
    { 
      id: 4, 
      day: 'Thursday', 
      classes: [
        { time: '5:00 PM - 6:30 PM', course: 'Ballet Foundation', instructor: 'Sophia Williams', room: 'Studio A', students: 18 },
        { time: '7:00 PM - 8:30 PM', course: 'Contemporary Dance', instructor: 'Priya Mehta', room: 'Studio B', students: 32 },
      ]
    },
    { 
      id: 5, 
      day: 'Friday', 
      classes: [
        { time: '6:00 PM - 7:30 PM', course: 'Hip Hop Basics', instructor: 'Rajesh Kumar', room: 'Studio B', students: 45 },
        { time: '8:00 PM - 9:30 PM', course: 'Salsa Intermediate', instructor: 'Carlos Rodriguez', room: 'Studio A', students: 20 },
      ]
    },
    { 
      id: 6, 
      day: 'Saturday', 
      classes: [
        { time: '10:00 AM - 12:00 PM', course: 'Bharatanatyam', instructor: 'Lakshmi Iyer', room: 'Studio A', students: 28 },
      ]
    },
    { 
      id: 7, 
      day: 'Sunday', 
      classes: [
        { time: '10:00 AM - 12:00 PM', course: 'Bharatanatyam', instructor: 'Lakshmi Iyer', room: 'Studio A', students: 28 },
      ]
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden text-gray-600 hover:text-gray-900"
            >
              {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
            <h1 className="text-2xl font-bold text-gray-900">Class Schedule</h1>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center space-x-2 px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
          >
            <LogOut className="w-5 h-5" />
            <span>Logout</span>
          </button>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className={`
          fixed lg:static inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}>
          <nav className="p-6 space-y-2 mt-16 lg:mt-0">
            <Link
              href="/admin/dashboard"
              className="flex items-center space-x-3 px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-lg"
            >
              <TrendingUp className="w-5 h-5" />
              <span className="font-medium">Dashboard</span>
            </Link>
            <Link
              href="/admin/students"
              className="flex items-center space-x-3 px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-lg"
            >
              <Users className="w-5 h-5" />
              <span className="font-medium">Students</span>
            </Link>
            <Link
              href="/admin/courses"
              className="flex items-center space-x-3 px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-lg"
            >
              <BookOpen className="w-5 h-5" />
              <span className="font-medium">Courses</span>
            </Link>
            <Link
              href="/admin/schedule"
              className="flex items-center space-x-3 px-4 py-3 bg-admin/10 text-admin rounded-lg"
            >
              <Calendar className="w-5 h-5" />
              <span className="font-medium">Schedule</span>
            </Link>
            <Link
              href="/admin/settings"
              className="flex items-center space-x-3 px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-lg"
            >
              <Settings className="w-5 h-5" />
              <span className="font-medium">Settings</span>
            </Link>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {/* Add Class Button */}
          <div className="mb-6 flex justify-end">
            <button className="flex items-center space-x-2 px-6 py-3 bg-admin text-white rounded-lg hover:bg-admin/90">
              <Plus className="w-5 h-5" />
              <span>Add Class</span>
            </button>
          </div>

          {/* Weekly Schedule */}
          <div className="space-y-6">
            {schedule.map((day) => (
              <div key={day.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="bg-admin/10 px-6 py-3 border-b">
                  <h3 className="text-lg font-bold text-gray-900">{day.day}</h3>
                </div>
                <div className="p-6">
                  {day.classes.length > 0 ? (
                    <div className="space-y-4">
                      {day.classes.map((classItem, index) => (
                        <div key={index} className="flex items-start justify-between p-4 border border-gray-200 rounded-lg hover:border-admin/50 transition-colors">
                          <div className="flex-1">
                            <h4 className="font-bold text-gray-900 mb-2">{classItem.course}</h4>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm text-gray-600">
                              <div className="flex items-center space-x-2">
                                <Clock className="w-4 h-4" />
                                <span>{classItem.time}</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Users className="w-4 h-4" />
                                <span>{classItem.instructor}</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <MapPin className="w-4 h-4" />
                                <span>{classItem.room} • {classItem.students} students</span>
                              </div>
                            </div>
                          </div>
                          <button className="ml-4 text-admin hover:text-admin/80 text-sm font-medium">
                            Edit
                          </button>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-500 text-center py-8">No classes scheduled</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
