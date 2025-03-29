'use client';
// ContactPage.jsx
import React, { useState } from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import NavBar from '@/app/components/Navbar'; // Assuming NavBar.jsx is in the same directory

// Simple Footer Component (can be extracted to its own file if reused often)
const Footer = () => (
  <footer className="bg-blue-900 text-white py-8 px-4">
    <div className="container mx-auto text-center md:flex md:justify-between items-center">
      <p className="text-sm mb-4 md:mb-0">
        © {new Date().getFullYear()} E-Legal Samadhan. All Rights Reserved.
      </p>
      <div className="flex justify-center space-x-4">
        <Link href="/privacy-policy" className="text-sm hover:text-orange-400 transition duration-300">Privacy Policy</Link>
        <Link href="/terms-of-service" className="text-sm hover:text-emerald-400 transition duration-300">Terms of Service</Link>
        {/* Add social media links if needed */}
      </div>
    </div>
  </footer>
);


const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [submissionStatus, setSubmissionStatus] = useState<string | null>(null); // 'success', 'error', or null

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmissionStatus('submitting'); // Optional: Indicate submission is in progress

    // --- Replace this with your actual API call ---
    console.log('Form Data Submitted:', formData);
    // Example: Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    // Simulate success/error
    const success = Math.random() > 0.2; // Simulate 80% success rate
    if (success) {
      setSubmissionStatus('success');
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' }); // Clear form
    } else {
      setSubmissionStatus('error');
    }
     // --- End of API call simulation ---

    // Hide status message after a few seconds
    setTimeout(() => setSubmissionStatus(null), 5000);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Navigation Bar */}
      <NavBar />

      {/* Main Content Area - Added padding-top */}
      <main className="flex-grow pt-16 lg:pt-16 bg-gradient-to-br from-orange-50 via-white to-green-50">
        <div className="container mx-auto py-16 px-4">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-3">Get In Touch</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're here to help! Whether you have questions about our services or need legal assistance, feel free to reach out.
            </p>
          </div>

          {/* Contact Grid (Form + Info) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-orange-500">
              <h2 className="text-2xl font-semibold text-blue-900 mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500 transition duration-150 ease-in-out"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500 transition duration-150 ease-in-out"
                    placeholder="you@example.com"
                  />
                </div>
                 <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number <span className="text-xs text-gray-500">(Optional)</span></label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500 transition duration-150 ease-in-out"
                    placeholder="+91 12345 67890"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500 transition duration-150 ease-in-out"
                    placeholder="e.g., Company Registration Inquiry"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea
                    name="message"
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500 transition duration-150 ease-in-out"
                    placeholder="How can we assist you?"
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    disabled={submissionStatus === 'submitting'}
                    className={`w-full flex justify-center items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-md transition duration-300 ease-in-out shadow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 ${submissionStatus === 'submitting' ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    {submissionStatus === 'submitting' ? (
                       <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Submitting...
                       </>
                    ) : (
                       <> <Send className="w-5 h-5" /> Send Message </>
                    )}

                  </button>
                </div>
                {/* Submission Status Feedback */}
                {submissionStatus === 'success' && (
                  <p className="text-center text-sm text-emerald-600 font-medium bg-emerald-50 p-3 rounded-md">
                    Message sent successfully! We'll get back to you soon.
                  </p>
                )}
                {submissionStatus === 'error' && (
                   <p className="text-center text-sm text-red-600 font-medium bg-red-50 p-3 rounded-md">
                    Something went wrong. Please try again later or contact us directly.
                  </p>
                )}
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-emerald-600">
                <h2 className="text-2xl font-semibold text-blue-900 mb-6">Contact Details</h2>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-emerald-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-medium text-gray-800">Email Us</h3>
                      <a href="mailto:support@elegalsamadhan.com" className="text-blue-600 hover:text-orange-500 transition duration-150 ease-in-out">
                        support@elegalsamadhan.com
                      </a>
                      <p className="text-sm text-gray-500 mt-1">We aim to reply within 24 hours.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-emerald-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-medium text-gray-800">Call Us</h3>
                      <a href="tel:+911234567890" className="text-blue-600 hover:text-orange-500 transition duration-150 ease-in-out">
                        +91 123 456 7890
                      </a>
                       <p className="text-sm text-gray-500 mt-1">Mon - Fri, 10:00 AM - 6:00 PM IST</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-emerald-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-medium text-gray-800">Our Office</h3>
                      <p className="text-gray-700">
                        123 Legal Lane, Business District,<br />
                        New Delhi, 110001, India
                      </p>
                       <p className="text-sm text-gray-500 mt-1">Appointments recommended.</p>
                    </div>
                  </div>
                </div>
              </div>

                        {/* Optional: Map */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden border-t-4 border-blue-900">
             {/* Google Maps Embed Code */}
             <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.5070524346365!2d75.80440417517804!3d26.85562686254205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db675f594300b%3A0x16a3a8393db6f913!2sGaurav%20Tower!5e0!3m2!1sen!2sin!4v1743211998675!5m2!1sen!2sin" // <-- This src will be the one you copied
                width="100%" // Keep or adjust as needed
                height="300" // Keep or adjust as needed
                style={{ border:0 }}
                allowFullScreen={false} // Keep as copied
                loading="lazy" // Keep as copied
                referrerPolicy="no-referrer-when-downgrade" // Keep as copied
                title="E-Legal Samadhan Office Location" // Add a descriptive title
             ></iframe>
          </div>
            </div>

          </div>
        </div>
      </main>

      {/* 6. Footer */}
      <Footer />
    </div>
  );
};

export default ContactPage;