'use client';
import React, { useState } from 'react';
import { Scale, Phone, Lock, Users, ChevronDown } from 'lucide-react';
import Navbar from '@/app/components/Navbar';
import Hero from './components/Hero';
import TheProcess from './components/TheProcess';


function App() {
 
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <Hero/>

      {/* The Process */}
      {/* <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">
            Resolve your Legal Dispute | Intimation sent on Virtual Mode!
          </h2>
          <p className="text-lg text-gray-600">
            Legal Help is the way to assist people who are not able to access the court easily. 
            Legal Help includes various kinds of advice, providing service, forming draft or agreement etc. 
            Legal advice is the way of giving professional opinion relating to any factual matter or any situation.
          </p>
          <p className="text-lg text-gray-600">
            Our company provides the solution by taking aid from virtual support to serve our clients based on the requirement. 
            We provide the best of advice in exchange for monetary compensation.
          </p>
          <p className="text-lg text-gray-600">
            We can help you seek legal advice and make this entire process seamless.
          </p>
        </div>
      </div> */}
      <TheProcess/>
    </div>
  );
}

export default App;