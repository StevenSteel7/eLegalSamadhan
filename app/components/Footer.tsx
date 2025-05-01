'use client';

import React from 'react';
import Link from 'next/link';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <svg className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
              </svg>
              <div>
                <span className="font-bold text-2xl text-orange-500">E-</span>
                <span className="font-bold text-2xl text-emerald-400">Legal Samadhan</span>
              </div>
            </div>
            <p className="text-gray-300">Your trusted partner for all legal solutions and business registrations in India.</p>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-emerald-400" />
                <span>+91 91160 51108</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-emerald-400" />
                <span>elegalsamadhan@outlook.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-emerald-400" />
                <span>196 B first floor, near Ananta Hotel, opposite Motison's Jewellers, Tonk road, Jaipur, Rajasthan, India 302012</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-orange-500">Legal Services</h3>
            <ul className="space-y-2">
              <li><Link href="/msme-reg" className="hover:text-emerald-400 transition-colors">MSME Registration</Link></li>
              <li><Link href="/comsumer-matters" className="hover:text-emerald-400 transition-colors">Consumer Matters</Link></li>
              <li><Link href="/arbitration" className="hover:text-emerald-400 transition-colors">Arbitration Matters</Link></li>
              <li><Link href="/rera" className="hover:text-emerald-400 transition-colors">RERA Matters</Link></li>
            </ul>
          </div>

          {/* Company Registration */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-orange-500">Company Registration</h3>
            <ul className="space-y-2">
              <li><Link href="/company-reg/one-person" className="hover:text-emerald-400 transition-colors">One Person Company</Link></li>
              <li><Link href="/company-reg/pvt-ltd" className="hover:text-emerald-400 transition-colors">Private Limited Company</Link></li>
              <li><Link href="/company-reg/llp-reg" className="hover:text-emerald-400 transition-colors">LLP Registration</Link></li>
              <li><Link href="/company-reg/nidhi-reg" className="hover:text-emerald-400 transition-colors">Nidhi Company</Link></li>
              <li><Link href="/company-reg/sec-8" className="hover:text-emerald-400 transition-colors">Section 8 Company</Link></li>
            </ul>
          </div>

          {/* Licenses & Rights */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-orange-500">Licenses & Rights</h3>
            <ul className="space-y-2">
              <li><Link href="/licenses/fssai" className="hover:text-emerald-400 transition-colors">FSSAI Registration</Link></li>
              <li><Link href="/licenses/iso" className="hover:text-emerald-400 transition-colors">ISO Registration</Link></li>
              <li><Link href="/trademark" className="hover:text-emerald-400 transition-colors">Trademark Registration</Link></li>
              <li><Link href="/trademark" className="hover:text-emerald-400 transition-colors">Copyright Registration</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Social Links & Copyright */}
      <div className="border-t border-blue-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-300">
              © {new Date().getFullYear()} E-Legal Samadhan. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <Link href="#" className="hover:text-orange-500 transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-orange-500 transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-orange-500 transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 