'use client';

import React, { useState, useEffect } from 'react';
import Hero from '@/app/components/Hero';
import Footer from '@/app/components/Footer';
import { Phone, Users, Lock, CheckCircle, ArrowRight, Star, BookOpen, Award, Shield } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const LandingPage = () => {
  const [isVisible, setIsVisible] = useState({
    features: false,
    services: false,
    testimonials: false,
  });

  useEffect(() => {
    const handleScroll = () => {
      const features = document.getElementById('features');
      const services = document.getElementById('services');
      const testimonials = document.getElementById('testimonials');
      
      if (features) {
        const rect = features.getBoundingClientRect();
        setIsVisible(prev => ({ ...prev, features: rect.top < window.innerHeight * 0.75 }));
      }
      
      if (services) {
        const rect = services.getBoundingClientRect();
        setIsVisible(prev => ({ ...prev, services: rect.top < window.innerHeight * 0.75 }));
      }
      
      if (testimonials) {
        const rect = testimonials.getBoundingClientRect();
        setIsVisible(prev => ({ ...prev, testimonials: rect.top < window.innerHeight * 0.75 }));
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative">
      {/* Hero Section with Enhanced Background */}

      <div className="relative bg-blue-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')] bg-repeat opacity-100"></div>
        </div>
        <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
                Your Legal Solutions <span className="text-orange-500">Simplified</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Professional legal assistance for business registration, compliance, and legal matters across India.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="bg-orange-500 hover:bg-orange-600 text-white py-3 px-8 rounded-md font-semibold transition duration-300 text-center">
                  Get Started
                </Link>
                <Link href="#services" className="bg-transparent border-2 border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white py-3 px-8 rounded-md font-semibold transition duration-300 flex items-center justify-center gap-2">
                  Explore Services <ArrowRight size={16} />
                </Link>
              </div>
              <div className="mt-10 flex items-center gap-4">
                <div className="flex -space-x-4">
                  {[1, 2, 3, 4].map((item) => (
                    <div key={item} className="w-10 h-10 rounded-full bg-gray-300 border-2 border-white"></div>
                  ))}
                </div>
                <p className="text-white"><span className="text-emerald-400 font-bold">500+</span> Satisfied Clients</p>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center" id='Contact Form'>
              <div className="w-full max-w-md bg-white rounded-lg shadow-xl overflow-hidden">
                <div className="bg-blue-800 p-4 text-white">
                  <h3 className="text-xl font-semibold text-center">Get Legal Consultation Now</h3>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                      <input 
                        type="text" 
                        placeholder="Enter your full name" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                        required 
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                      <input 
                        type="email" 
                        placeholder="Enter your email address" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                        required 
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                      <input 
                        type="tel" 
                        placeholder="Enter 10-digit mobile number" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                        required 
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Select Service *</label>
                      <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option value="" disabled selected>Select a service</option>
                        <option>Company Registration</option>
                        <option>Trademark Registration</option>
                        <option>Legal Consultation</option>
                        <option>Startup India Registration</option>
                        <option>Other Services</option>
                      </select>
                    </div>
                    
                    <button className="w-full bg-orange-500 hover:bg-orange-600 text-white text-md py-3 rounded-md font-semibold transition duration-300">
                      Request Call Back
                    </button>
                    
                    <p className="text-xs text-gray-500 text-center">
                      By submitting this form, you agree to our Terms & Conditions
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Indicators */}
      <div className="bg-white py-8 shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-around items-center gap-6">
            <div className="flex items-center">
              <Shield className="h-7 w-7 text-blue-900 mr-2" />
              <span className="text-sm md:text-base font-medium">100% Secure & Confidential</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-7 w-7 text-green-500 mr-2" />
              <span className="text-sm md:text-base font-medium">Verified Legal Experts</span>
            </div>
            <div className="flex items-center">
              <Star className="h-7 w-7 text-yellow-500 mr-2" />
              <span className="text-sm md:text-base font-medium">4.9/5 Customer Rating</span>
            </div>
            <div className="flex items-center">
              <Award className="h-7 w-7 text-orange-500 mr-2" />
              <span className="text-sm md:text-base font-medium">Certified Excellence</span>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section with Animation */}
      <section id="features" className={`py-20 bg-gray-50 transition-all duration-1000 ${isVisible.features ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose <span className="text-orange-500">E-Legal</span> <span className="text-emerald-500">Samadhan</span>?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">We provide comprehensive legal solutions tailored to your specific needs with transparency and professionalism.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-orange-500 joom">
              <Phone className="h-12 w-12 text-orange-500 mb-6" />
              <h3 className="text-2xl font-semibold mb-4">24/7 Expert Support</h3>
              <p className="text-gray-600 text-lg">Our team of legal experts is available around the clock to assist you with your legal needs and emergencies.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-blue-700 joom">
              <Lock className="h-12 w-12 text-blue-700  mb-6" />
              <h3 className="text-2xl font-semibold mb-4">100% Confidentiality</h3>
              <p className="text-gray-600 text-lg">We guarantee the confidentiality of your information and legal matters with strict privacy protocols.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-emerald-500 joom ">
              <Users className="h-12 w-12 text-emerald-500 mb-6" />
              <h3 className="text-2xl font-semibold mb-4">Experienced Lawyers</h3>
              <p className="text-gray-600 text-lg">Our team consists of highly experienced lawyers with expertise in various domains of business law.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Simple, transparent process to get your legal matters resolved</p>
          </div>
          
          <div className="relative">
            {/* Process Line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-blue-200 transform -translate-y-1/2 z-0"></div>
            
            <div className="grid md:grid-cols-4 gap-8 relative z-10 ">
              <div className="bg-white p-6 rounded-lg text-center joom">
                <div className="w-16 h-16 rounded-full bg-blue-900 text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
                <h3 className="text-xl font-semibold mb-2">Consultation</h3>
                <p className="text-gray-600">Book a free consultation with our legal experts</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg text-center">
                <div className="w-16 h-16 rounded-full bg-blue-900 text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
                <h3 className="text-xl font-semibold mb-2">Documentation</h3>
                <p className="text-gray-600">Submit required documents securely online</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg text-center">
                <div className="w-16 h-16 rounded-full bg-blue-900 text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
                <h3 className="text-xl font-semibold mb-2">Processing</h3>
                <p className="text-gray-600">Our team handles your application process</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg text-center">
                <div className="w-16 h-16 rounded-full bg-blue-900 text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">4</div>
                <h3 className="text-xl font-semibold mb-2">Completion</h3>
                <p className="text-gray-600">Receive your documents and support</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section with Animation */}
      <section id="services" className={`py-20 bg-gray-50 transition-all duration-1000 ${isVisible.services ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Premium Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Comprehensive legal solutions for businesses and individuals</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 ">
            {[
              { title: "LLP Registration", desc: "Seamless registration of Limited Liability Partnerships with all legal requirements.", icon: BookOpen, link: "/company-reg/llp-reg" },
              { title: "Private Limited Company", desc: "Establish your Private Limited Company with our hassle-free registration process.", icon: Shield, link: "/company-reg/pvt-ltd" },
              { title: "One Person Company", desc: "Simplified registration process for One Person Companies with personalized support.", icon: Users, link: "/company-reg/one-person" },
              { title: "Trademark Registration", desc: "Protect your brand identity with our comprehensive trademark registration services.", icon: Award, link: "/trademark" },
              { title: "FSSAI Registration", desc: "Comply with food safety regulations with our expert FSSAI registration service.", icon: Shield, link: "/licenses/fssai" },
              { title: "Copyright Registration", desc: "Secure your creative works with proper copyright registration and protection.", icon: BookOpen, link: "/opc" }
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 group joom">
                <div className="p-6">
                  <service.icon className="h-12 w-12 text-blue-900 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.desc}</p>
                  <Link href={service.link} className="inline-flex items-center text-orange-500 font-medium group-hover:text-orange-600 transition-colors">
                    Learn More <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/services" className="inline-block bg-blue-900 hover:bg-blue-800 text-white py-3 px-8 rounded-md font-semibold transition duration-300">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section with Animation */}
      <section id="testimonials" className={`py-20 bg-white transition-all duration-1000 ${isVisible.testimonials ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Hear from businesses and individuals who have transformed their legal experience with us</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                content: "E-Legal Samadhan helped me register my private company with exceptional efficiency. Their team guided me through every step and made the process seamless.",
                name: "Rahul Sharma",
                position: "CEO, TechStart India"
              },
              {
                content: "The trademark registration process was incredibly smooth thanks to E-Legal Samadhan. They handled all the paperwork and follow-ups professionally.",
                name: "Priya Malhotra",
                position: "Founder, Design Hub"
              },
              {
                content: "When I needed legal assistance for my startup, E-Legal Samadhan provided comprehensive support that helped me navigate complex regulatory requirements.",
                name: "Arjun Singh",
                position: "Entrepreneur"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-lg shadow-md relative">
                <div className="absolute top-0 left-10 transform -translate-y-1/2">
                  <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center">
                    <Star className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-gray-600 italic mb-6">&ldquo;{testimonial.content}&rdquo;</p>
                  <div className="flex items-center">
                    <div className="mr-4 w-12 h-12 bg-gray-300 rounded-full"></div>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-gray-500 text-sm">{testimonial.position}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="py-16 px-4 bg-gradient-to-r from-orange-500 to-emerald-600 text-white">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Secure Your Business Future?</h2>
            <p className="text-lg mb-8">Let our experts guide you through every step. Contact us today for personalized support.</p>
            <Link href="/contact"> {/* Link to your contact page */}
              <span className="bg-white hover:bg-gray-100 text-blue-900 font-bold py-3 px-8 rounded-full transition duration-300 ease-in-out shadow-lg">
                Contact Us
              </span>
            </Link>
          </div>
        </section>

  
    </div>
  );
};

export default LandingPage; 