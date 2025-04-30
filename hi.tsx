// app/components/GeneralConsultationForm.jsx  (or choose a suitable path/name)
'use client';

import React, { useState } from 'react';

// You can keep these options here or import from a shared file
const stateOptions = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
    "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
    "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram",
    "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana",
    "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal",
    "Andaman and Nicobar Islands", "Chandigarh", "Dadra and Nagar Haveli and Daman and Diu",
    "Lakshadweep", "Delhi (National Capital Territory)", "Puducherry", "Ladakh", "Jammu and Kashmir"
];

const GeneralConsultationForm = () => {
  // --- State Management (copied from CallbackForm logic) ---
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '', // Renamed 'mobile' for consistency with input name
    state: ''
  });
  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  // --- Handlers (copied from CallbackForm logic) ---
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (submissionStatus !== 'idle' && submissionStatus !== 'submitting') {
      setSubmissionStatus('idle');
      setStatusMessage(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmissionStatus('submitting');
    setStatusMessage('Submitting your request...');

    // Simple frontend validation
    if (!formData.name || !formData.email || !formData.mobile || !formData.state) {
        setStatusMessage('Please fill in all required fields.');
        setSubmissionStatus('error');
        return;
    }
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
        setStatusMessage('Please enter a valid email address.');
        setSubmissionStatus('error');
        return;
    }
    if (!/^[6-9]\d{9}$/.test(formData.mobile)) {
        setStatusMessage('Please enter a valid 10-digit Indian mobile number.');
        setSubmissionStatus('error');
        return;
    }

    try {
      const payload = {
        name: formData.name,
        email: formData.email,
        phone: formData.mobile, // Map 'mobile' state field to 'phone' for backend API
        state: formData.state,
        formSource: 'General Consultation Callback' // <-- SETTING THE SOURCE HERE
      };

      const response = await fetch('/api/request-callback', { // Still use the same generalized API route
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmissionStatus('success');
        setStatusMessage(result.message || 'Request submitted successfully! We will contact you shortly.');
        setFormData({ name: '', email: '', mobile: '', state: '' }); // Clear form
      } else {
        setSubmissionStatus('error');
        setStatusMessage(result.error || 'An unexpected error occurred. Please try again.');
        console.error("Submission Error:", result);
      }
    } catch (error) {
      console.error('Fetch Error:', error);
      setSubmissionStatus('error');
      setStatusMessage('Could not connect to the server. Please check your connection.');
    }
  };

  const isLoading = submissionStatus === 'submitting';

  // --- JSX Structure (based on your static HTML snippet) ---
  return (
    <div className="md:w-1/2 flex justify-center" id='Contact Form'>
      <div className="w-full max-w-md bg-white rounded-lg shadow-xl overflow-hidden">
        <div className="bg-blue-800 p-4 text-white">
          <h3 className="text-xl font-semibold text-center">Get Legal Consultation Now</h3>
        </div>
        <div className="p-6">
          {/* --- Form Tag Added --- */}
          <form onSubmit={handleSubmit} className="space-y-4">
            
            <div>
              <label htmlFor="general-consult-name" className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
              <input
                type="text"
                id="general-consult-name"
                name="name" // Matches state key
                value={formData.name} // Bind value
                onChange={handleChange} // Add handler
                placeholder="Enter your full name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100" // Added disabled style
                required
                disabled={isLoading} // Add disabled state
              />
            </div>

            <div>
              <label htmlFor="general-consult-email" className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
              <input
                type="email"
                id="general-consult-email"
                name="email" // Matches state key
                value={formData.email} // Bind value
                onChange={handleChange} // Add handler
                placeholder="Enter your email address"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100"
                required
                disabled={isLoading}
              />
            </div>

            <div>
              <label htmlFor="general-consult-mobile" className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
              <input
                type="tel"
                id="general-consult-mobile"
                name="mobile" // Matches state key
                value={formData.mobile} // Bind value
                onChange={handleChange} // Add handler
                placeholder="Enter 10-digit mobile number"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100"
                required
                pattern="^[6-9]\d{9}$" // Added pattern for basic validation hint
                title="Please enter a valid 10-digit Indian mobile number starting with 6, 7, 8, or 9."
                disabled={isLoading}
              />
            </div>

            <div>
              <label htmlFor="general-consult-state" className="block text-sm font-medium text-gray-700 mb-1">Select State *</label>
              <select
                id="general-consult-state"
                name="state" // Matches state key
                value={formData.state} // Bind value
                onChange={handleChange} // Add handler
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100"
                required
                disabled={isLoading}
              >
                <option value="" disabled>Select State</option> {/* Removed selected attribute, value handles it */}
                {stateOptions.map(s => <option key={s} value={s}>{s}</option>)} {/* Use map */}
              </select>
            </div>

            <button
              type="submit" // Ensure type is submit
              className={`w-full bg-orange-500 hover:bg-orange-600 text-white text-md py-3 rounded-md font-semibold transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 ${
                    isLoading ? 'opacity-70 cursor-not-allowed' : '' // Add loading styles
                  }`}
              disabled={isLoading} // Add disabled state
            >
              {/* --- Loading State Copied --- */}
              {isLoading ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Submitting...
                </span>
              ) : (
                'Request Call Back' // Original button text
              )}
            </button>

            {/* --- Submission Status Feedback Copied --- */}
            {submissionStatus === 'success' && (
              <p className="text-center text-sm text-emerald-600 font-medium bg-emerald-50 p-3 rounded-md">
                {statusMessage}
              </p>
            )}
            {submissionStatus === 'error' && (
              <p className="text-center text-sm text-red-600 font-medium bg-red-50 p-3 rounded-md">
                {statusMessage}
              </p>
            )}
            {submissionStatus === 'submitting' && statusMessage && (
              <p className="text-center text-sm text-blue-600 font-medium bg-blue-50 p-3 rounded-md">
                {statusMessage}
              </p>
            )}

            <p className="text-xs text-gray-500 text-center">
              By submitting this form, you agree to our Terms & Conditions
            </p>
          </form> {/* --- Close Form Tag --- */}
        </div>
      </div>
    </div>
  );
};

export default GeneralConsultationForm;