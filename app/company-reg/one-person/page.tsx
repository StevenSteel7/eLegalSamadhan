'use client';
import React, { useState } from 'react';
import { Star, Building2, FileBarChart, FileCheck, RefreshCw, BookOpen, Leaf, Handshake } from 'lucide-react';
import {
    ClipboardList,
    Clock,
    DollarSign,
    Gavel,
    UserCheck,
    ShieldCheck,
    Video,
  } from "lucide-react";
import { h3 } from 'framer-motion/client';

const App = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    
  <div className=" bg-gradient-to-br from-blue-50 to-blue-100 pt-20">
    {/* Background Image */}
    <div 
      className="absolute top-0 left-0 w-full h-[66.67vh] z-0 opacity-20 pointer-events-none cursor-default"
    style={{
      backgroundImage: 'url("/images/company.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}
  />

    
    <div className="container mx-auto px-4 py-12 relative z-10 cursor-default">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Left Column - Content */}
        <div className="space-y-6">
          <div className="flex items-center text-sm text-blue-800 font-semibold">
            <Building2 className="w-4 h-4 mr-2" />
            BEGIN WITH LEGAL REGISTRATION OF YOUR COMPANY
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-indigo-900 leading-tight">
            One-person Company
          </h1>
          
          <p className="text-lg text-gray-700">
            Every Start-Up deserves seamless, trusted & hassle-free Legal Services along with StartUp
            mentorship, in a very cost-effective manner.
          </p>

          <h2 className="text-2xl font-bold text-gray-800">
            Get your Company registered!
          </h2>

          <ul className="space-y-3">
            {[
              'Lowest Price Guarantee',
              'Quick and Hassle-Free Process',
              'Get registraion Certificate',
              'No Hidden Fee',
              'Expert Assistance for Lifetime'
            ].map((item, index) => (
              <li key={index} className="flex items-center text-gray-700">
                <span className="w-2 h-2 bg-black rounded-full mr-3" />
                {item}
              </li>
            ))}
          </ul>

        
        </div>

        {/* Right Column - Form */}
        <div className="bg-white p-8 rounded-xl shadow-xl">
          <div className="mb-6">
              <h3 className="text-2xl font-bold text-black transition-all duration-400 hover:text-emerald-400">
              Need Help with one Person Company Registration?
              </h3>
            <p className="text-gray-600">Enter your details in the form and we will call you back.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-2">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                placeholder="Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">
                Phone/Mobile <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                placeholder="Mobile Number"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 text-white font-bold py-3 rounded-lg hover:bg-green-700 transition duration-300"
            >
              Submit Form
            </button>
          </form>
        </div>
      </div>
    </div>



    

  <div id="Docs Req" className="bg-gradient-to-b from-gray-50 to-gray-100 py-16 cursor-default">
    <div className="max-w-6xl mx-auto px-4">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-3 mb-3 group">
          <h2 className="text-4xl font-bold text-gray-800 transition-all duration-300">Documents</h2>
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-600 transition-all duration-300 group-hover:tracking-wider">Required?</h2>
        </div>
        <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-teal-500 mx-auto mt-4 rounded-full  group-hover:w-32 transition-all duration-500"></div>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">Everything you need to successfully incorporate your company</p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8 mt-8">
        {/* For the Director & Nominee */}
        <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-2xs text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800">For the Director & Nominee</h3>
          </div>
          <div className="space-y-4 text-gray-700">
            <p className="flex items-center hover:text-emerald-600 transition-colors duration-200">
              <span className="mr-2">🆔</span> PAN Card
            </p>
            <p className="flex items-center hover:text-emerald-600 transition-colors duration-200">
              <span className="mr-2">🆔</span> Aadhaar Card
            </p>
            <p className="flex items-center hover:text-emerald-600 transition-colors duration-200">
              <span className="mr-2">🪪</span> Passport/Driver's License/Voter ID
            </p>
            <p className="flex items-center hover:text-emerald-600 transition-colors duration-200">
              <span className="mr-2">🏠</span> Bank Statement/Utility Bill/Rent Agreement
            </p>
            <p className="flex items-center hover:text-emerald-600 transition-colors duration-200">
              <span className="mr-2">🖼️</span> Passport-size photographs
            </p>
            <p className="flex items-center hover:text-emerald-600 transition-colors duration-200">
              <span className="mr-2">📝</span> Consent of the nominee (Form INC-3)
            </p>
          </div>
        </div>
        
        {/* For the Registered Office */}
        <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800">For the Registered Office</h3>
          </div>
          <div className="space-y-4 text-gray-700">
            <p className="flex items-center hover:text-teal-600 transition-colors duration-200">
              <span className="mr-2">📃</span> Rent Agreement (if rented)
            </p>
            <p className="flex items-center hover:text-teal-600 transition-colors duration-200">
              <span className="mr-2">📄</span> No Objection Certificate (NOC)
            </p>
            <p className="flex items-center hover:text-teal-600 transition-colors duration-200">
              <span className="mr-2">💡</span> Utility Bill (not older than 2 months)
            </p>
          </div>
        </div>
        
        {/* Company Incorporation Documents */}
        <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-12 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800">Company Incorporation Documents</h3>
          </div>
          <div className="space-y-4 text-gray-700">
            <p className="flex items-center hover:text-cyan-600 transition-colors duration-200">
              <span className="mr-2">📘</span> Memorandum of Association (MoA)
            </p>
            <p className="flex items-center hover:text-cyan-600 transition-colors duration-200">
              <span className="mr-2">📗</span> Articles of Association (AoA)
            </p>
            <p className="flex items-center hover:text-cyan-600 transition-colors duration-200">
              <span className="mr-2">🔐</span> Digital Signature Certificate (DSC)
            </p>
            <p className="flex items-center hover:text-cyan-600 transition-colors duration-200">
              <span className="mr-2">🔢</span> Director Identification Number (DIN)
            </p>
            <p className="flex items-center hover:text-cyan-600 transition-colors duration-200">
              <span className="mr-2">🧾</span> Application for name reservation (Form SPICe+)
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>


  <div className="bg-gradient-to-b from-gray-50 to-gray-100 py-20">
    <div className="max-w-7xl mx-auto px-8">
      <div className="grid md:grid-cols-2 gap-16">

        {/* Eligibility Criteria Component */}
        <div className="group bg-white p-12 rounded-2xl shadow-md hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100 w-full cursor-default">
          <div className="flex items-center mb-6">
            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mr-5">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-gray-800">Eligibility Criteria</h3>
          </div>
          <div className="w-28 h-1 bg-gradient-to-r from-teal-400 to-cyan-500 mb-6 rounded-full transition-all duration-300 md:group-hover:w-md"></div>
          <div className="grid grid-cols-1 gap-6 cursor-default">
            {[
              {
                title: "Only One Shareholder",
                desc: "The company can have only one member/shareholder."
              },
              {
                title: "Resident of India",
                desc: "The sole member must be a resident of India (stayed for at least 182 days in the previous financial year)."
              },
              {
                title: "Nominee Required",
                desc: "A nominee must be appointed in case the sole member is incapacitated."
              },
              {
                title: "Business Restrictions",
                desc: "OPCs cannot engage in non-banking financial investments or operate as an NBFC."
              },
              {
                title: "Conversion Restrictions",
                desc: "An OPC must convert into a private/public limited company if its turnover exceeds ₹2 crores or paid-up capital crosses ₹50 lakhs."
              }
            ].map((item, index) => (
              <div key={index} className="bg-white border border-gray-100 rounded-xl p-6 hover:border-teal-200 hover:bg-teal-50 transition-all duration-300 shadow-sm transform hover:scale-105">
              <h4 className="text-teal-700 font-medium">{item.title}</h4>
                <p className="text-gray-600 mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits of an OPC Component */}
        <div className="group bg-white p-12 rounded-2xl shadow-md hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100 w-full cursor-default">
          <div className="flex items-center mb-6">
            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mr-5">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-gray-800">Benefits of an OPC</h3>
          </div>
          <div className="w-28 h-1 bg-gradient-to-r from-teal-400 to-cyan-500 mb-6 rounded-full transition-all duration-300 md:group-hover:w-md"></div>
          <div className="grid grid-cols-1 gap-6 ">
            {[
              {
                title: "Limited Liability",
                desc: "The owner’s liability is limited to the company’s investment, protecting personal assets."
              },
              {
                title: "Separate Legal Entity",
                desc: "The OPC has its own legal identity, separate from its owner."
              },
              {
                title: "Perpetual Succession",
                desc: "The company continues operations even if the owner becomes incapacitated, with the nominee taking over."
              },
              {
                title: "Easy Compliance",
                desc: "Lesser compliance requirements than private limited companies (e.g., no need for an annual general meeting)."
              },
              {
                title: "Better Credibility",
                desc: "Recognized as a separate entity, OPCs are more credible for loans and business deals."
              },
              {
                title: "Tax Benefits",
                desc: "Eligible for deductions and lower tax rates compared to sole proprietorships."
              },
              {
                title: "No Minimum Capital",
                desc: "There is no mandatory minimum capital requirement for setting up an OPC."
              }
            ].map((item, index) => (
              <div key={index} className="bg-white border border-gray-100 rounded-xl p-6 hover:border-teal-200 hover:bg-teal-50 transition-all duration-300 shadow-sm transform hover:scale-105">
              <h4 className="text-teal-700 font-medium">{item.title}</h4>
                <p className="text-gray-600 mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  </div>
  

  






    </div>
  );
};

export default App;
