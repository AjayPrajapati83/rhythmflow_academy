'use client';

import Link from 'next/link';
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 gradient-primary rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">R</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">RhythmFlow</h3>
                <p className="text-sm text-gray-400">Academy</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Where Movement Meets Mastery. Join India's premier online dance academy.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-secondary transition">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-secondary transition">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-secondary transition">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-secondary transition">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/courses" className="text-gray-400 hover:text-white transition">
                  All Courses
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/login" className="text-gray-400 hover:text-white transition">
                  Student Login
                </Link>
              </li>
              <li>
                <Link href="/admin/login" className="text-gray-400 hover:text-white transition">
                  Admin Login
                </Link>
              </li>
            </ul>
          </div>

          {/* Dance Styles */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Dance Styles</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Contemporary Dance</li>
              <li>Hip-Hop & Breaking</li>
              <li>Classical Ballet</li>
              <li>Bollywood</li>
              <li>Salsa & Latin</li>
              <li>Kathak (Classical)</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                <span className="text-gray-400 text-sm">
                  123 Dance Street, Andheri West, Mumbai, Maharashtra 400058
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-secondary" />
                <span className="text-gray-400 text-sm">+91 98765 43210</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-secondary" />
                <span className="text-gray-400 text-sm">info@rhythmflow.academy</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} RhythmFlow Academy. All rights reserved.</p>
          <p className="mt-2">
            <Link href="/privacy" className="hover:text-white transition">Privacy Policy</Link>
            {' • '}
            <Link href="/terms" className="hover:text-white transition">Terms of Service</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
