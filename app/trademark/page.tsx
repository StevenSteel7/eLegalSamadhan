'use client';

import { AlertCircle, Briefcase, DollarSign, FileText, Globe, Lightbulb, Lock, Scale, ShieldCheck, Star } from 'lucide-react'
import React, { useState } from 'react'
import Link from 'next/link';

const page = () => {
  
  const [activeTab, setActiveTab] = useState<'trademark' | 'patent' | 'copyright'>('trademark');
  
  return (
    <div>
        <div
        className="relative min-h-[50vh] bg-cover bg-center "
        style={{ backgroundImage: "url('/images/trademark.jpg')" }}
        >
        {/* Semi-transparent overlay to improve text readability */}
            <div className="absolute inset-0 bg-black opacity-50 ">
                <section className="relative z-10 flex flex-col justify-center items-center text-white  min-h-[50vh] px-4">
                    <div className="max-w-7xl mx-auto text-center">
                        <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
                            Secure Your Brand | Trademark Registration Made Easy
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-700 mt-4 drop-shadow-md"/>
                            
                       
                    </div>
                </section>
            </div>
        </div>
        
        <div className='py-5 bg-slate-100'></div>

      {/* Headline */}
      <div className="w-full bg-slate-100 py-10">
        <div className="max-w-7xl mx-auto text-center px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Intellectual Property Services | Trademark, Patent & Copyright Protection
          </h1>

          <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
            Safeguard your brand, inventions, and creative works with our end-to-end Intellectual Property (IP) services. Whether you're registering a trademark, filing a patent, or protecting your original content with copyright, our team ensures a smooth, compliant, and cost-effective experience. From documentation to filing and legal guidance — we've got your IP needs covered under one roof.
          </p>
        </div>
      </div>


    
      {/* Swictching component */}
      <div className='flex flex-col'>

        <div className= "bg-gray-100 ">
          <div className="max-w-7xl mx-auto pt-8 pb-1 px-4 rounded-2xl items-center bg-slate-50">
            <div className="flex justify-center space-x-4 mb-8 flex-wrap gap-4">  
              <button
                onClick={() => setActiveTab('trademark')}
                className={`px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 transform shadow-md ${
                  activeTab === 'trademark'
                    ? 'bg-emerald-500 text-white shadow-lg scale-105'
                    : 'bg-white text-gray-600 hover:bg-gray-50 hover:scale-102'
                }`}
              >
                Trademark Registration
              </button>

              <button
                onClick={() => setActiveTab('patent')}
                className={`px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 transform shadow-md ${
                  activeTab === 'patent'
                    ? 'bg-emerald-500 text-white shadow-lg scale-105'
                    : 'bg-white text-gray-600 hover:bg-gray-50 hover:scale-102'
                }`}
              >
                Patent Registration
              </button>

              <button
                onClick={() => setActiveTab('copyright')}
                className={`px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 transform shadow-md ${
                  activeTab === 'copyright'
                    ? 'bg-emerald-500 text-white shadow-lg scale-105'
                    : 'bg-white text-gray-600 hover:bg-gray-50 hover:scale-102'
                }`}
              >
                Copyright Registration
              </button>

              

            </div>
          </div>
        </div> 

        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
          {/* Content Sections */}
          <div className="relative">
            {/* Trademark Section */}
            <div
              className={`transition-all duration-500 ${
                activeTab === 'trademark' ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full absolute inset-0'
              }`}
            >
              <div id='Why Trademark' className="bg-gray-100 py-12">
                <div className="max-w-7xl mx-auto px-4">
                  <div className="grid md:grid-cols-2 gap-8 justify-items-center">
                    {/* Why Choose Trademark Registration Section */}
                    <div id="Why Choose Trademark Registration" className="group col-span-2 bg-slate-50 rounded-2xl p-8">
                      {/* Title Section */}
                      <div className="p-8 mx-auto rounded-2xl md:col-span-2 sm:col-span-1 flex flex-col items-center">
                        <div className="flex flex-col md:flex-row justify-center group cursor-pointer">
                          <span className="text-3xl font-bold text-center text-gray-800 mb-4">
                            Why Register a
                          </span>
                          <span className="text-3xl font-bold text-center text-gray-800 mb-4 px-3 transition-all duration-300 group-hover:text-emerald-500">
                            Trademark?
                          </span>
                        </div>
                        <div className="w-16 h-1 bg-green-500 mx-auto mb-6 md:group-hover:w-2xs transform duration-200"></div>
                      </div>

                      {/* Benefits Grid */}
                      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8 text-center">
                        {/* Legal Protection */}
                        <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex flex-col items-center group/legal">
                          <div className="w-16 h-16 border-2 border-blue-300 rounded-full flex items-center justify-center mb-4 transition-all duration-300 transform group-hover/legal:rotate-12 group-hover/legal:shadow-lg relative overflow-hidden bg-white">
                            <ShieldCheck className="w-10 h-10 text-yellow-500 transition-transform duration-300 group-hover/legal:scale-110" />
                          </div>
                          <h3 className="text-lg font-semibold text-gray-800 transition-colors duration-300 group-hover/legal:text-blue-600">Legal Protection</h3>
                          <p className="text-gray-600 mt-2 transition-colors duration-300 group-hover/legal:text-gray-800">Prevents unauthorized use and infringement of your brand name or logo.</p>
                        </div>

                        {/* Exclusive Rights */}
                        <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex flex-col items-center group/exclusive">
                          <div className="w-16 h-16 border-2 border-blue-300 rounded-full flex items-center justify-center mb-4 transition-all duration-300 transform group-hover/exclusive:rotate-12 group-hover/exclusive:shadow-lg relative overflow-hidden bg-white">
                            <Lock className="w-10 h-10 text-yellow-500 transition-transform duration-300 group-hover/exclusive:scale-110" />
                          </div>
                          <h3 className="text-lg font-semibold text-gray-800 transition-colors duration-300 group-hover/exclusive:text-blue-600">Exclusive Rights</h3>
                          <p className="text-gray-600 mt-2 transition-colors duration-300 group-hover/exclusive:text-gray-800">The owner has exclusive rights to use the trademark for the registered class of goods/services.</p>
                        </div>

                        {/* Brand Recognition */}
                        <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex flex-col items-center group/brand">
                          <div className="w-16 h-16 border-2 border-blue-300 rounded-full flex items-center justify-center mb-4 transition-all duration-300 transform group-hover/brand:rotate-12 group-hover/brand:shadow-lg relative overflow-hidden bg-white">
                            <Star className="w-10 h-10 text-yellow-500 transition-transform duration-300 group-hover/brand:scale-110" />
                          </div>
                          <h3 className="text-lg font-semibold text-gray-800 transition-colors duration-300 group-hover/brand:text-blue-600">Brand Recognition</h3>
                          <p className="text-gray-600 mt-2 transition-colors duration-300 group-hover/brand:text-gray-800">Enhances credibility and helps build a strong brand identity.</p>
                        </div>

                        {/* Business Asset */}
                        <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex flex-col items-center group/asset">
                          <div className="w-16 h-16 border-2 border-blue-300 rounded-full flex items-center justify-center mb-4 transition-all duration-300 transform group-hover/asset:rotate-12 group-hover/asset:shadow-lg relative overflow-hidden bg-white">
                            <Briefcase className="w-10 h-10 text-yellow-500 transition-transform duration-300 group-hover/asset:scale-110" />
                          </div>
                          <h3 className="text-lg font-semibold text-gray-800 transition-colors duration-300 group-hover/asset:text-blue-600">Business Asset</h3>
                          <p className="text-gray-600 mt-2 transition-colors duration-300 group-hover/asset:text-gray-800">A trademark can be sold, licensed, or franchised to generate revenue.</p>
                        </div>

                        {/* Global Expansion */}
                        <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex flex-col items-center group/global">
                          <div className="w-16 h-16 border-2 border-blue-300 rounded-full flex items-center justify-center mb-4 transition-all duration-300 transform group-hover/global:rotate-12 group-hover/global:shadow-lg relative overflow-hidden bg-white">
                            <Globe className="w-10 h-10 text-yellow-500 transition-transform duration-300 group-hover/global:scale-110" />
                          </div>
                          <h3 className="text-lg font-semibold text-gray-800 transition-colors duration-300 group-hover/global:text-blue-600">Global Expansion</h3>
                          <p className="text-gray-600 mt-2 transition-colors duration-300 group-hover/global:text-gray-800">Makes it easier to register the trademark internationally under the Madrid Protocol.</p>
                        </div>

                        {/* Trademark Symbol Usage */}
                        <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex flex-col items-center group/symbol">
                          <div className="w-16 h-16 border-2 border-blue-300 rounded-full flex items-center justify-center mb-4 transition-all duration-300 transform group-hover/symbol:rotate-12 group-hover/symbol:shadow-lg relative overflow-hidden bg-white">
                            <span className="text-6xl font-bold text-yellow-500 transition-transform duration-300 group-hover/symbol:scale-110">
                              ®
                            </span>
                          </div>
                          <h3 className="text-lg font-semibold text-gray-800 transition-colors duration-300 group-hover/symbol:text-blue-600">Trademark Symbol Usage</h3>
                          <p className="text-gray-600 mt-2 transition-colors duration-300 group-hover/symbol:text-gray-800">Registered trademarks can use the ® symbol, indicating legal protection.</p>
                        </div>

                        {/* Prevention of Unfair Competition */}
                        <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex flex-col items-center group/competition md:col-start-2">
                          <div className="w-16 h-16 border-2 border-blue-300 rounded-full flex items-center justify-center mb-4 transition-all duration-300 transform group-hover/competition:rotate-12 group-hover/competition:shadow-lg relative overflow-hidden bg-white">
                            <Scale className="w-10 h-10 text-yellow-500 transition-transform duration-300 group-hover/competition:scale-110" />
                          </div>
                          <h3 className="text-lg font-semibold text-gray-800 transition-colors duration-300 group-hover/competition:text-blue-600">Prevention of Unfair Competition</h3>
                          <p className="text-gray-600 mt-2 transition-colors duration-300 group-hover/competition:text-gray-800">Prevents competitors from using a similar mark that could mislead consumers.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id='Docs Required' className="flex flex-wrap bg-gray-100">
                <div className="max-w-7xl mx-auto p-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    
                    {/* Documents Required for Individual or Proprietor */}
                    <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-4xl mx-auto">
                        {/* Card Header */}
                        <h1 className="text-2xl pb-6 font-bold text-gray-800 text-center mb-4">
                        Documents Required for Individual or Proprietor
                        </h1>

                        {/* Steps Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">

                        <div className="bg-blue-50 p-4 rounded-lg hover:shadow-md transition-all duration-300 flex">
                            <span className="text-xl mr-3">📄</span>
                            <div>
                            <h2 className="font-bold text-lg text-blue-900">Identity Proof</h2>
                            <p className="text-gray-700 text-sm">
                                Copy of Aadhaar, PAN, Passport, or any government-issued ID proof.
                            </p>
                            </div>
                        </div>

                        <div className="bg-blue-50 p-4 rounded-lg hover:shadow-md transition-all duration-300 flex">
                            <span className="text-xl mr-3">🖼</span>
                            <div>
                            <h2 className="font-bold text-lg text-blue-900">Logo or Brand Name</h2>
                            <p className="text-gray-700 text-sm">
                                If applicable, provide a logo in JPEG format.
                            </p>
                            </div>
                        </div>

                        <div className="bg-blue-50 p-4 rounded-lg hover:shadow-md transition-all duration-300 flex">
                            <span className="text-xl mr-3">✍</span>
                            <div>
                            <h2 className="font-bold text-lg text-blue-900">Signed Power of Attorney</h2>
                            <p className="text-gray-700 text-sm">
                                Required if filing through an attorney.
                            </p>
                            </div>
                        </div>

                        <div className="bg-blue-50 p-4 rounded-lg hover:shadow-md transition-all duration-300 flex">
                            <span className="text-xl mr-3">🏠</span>
                            <div>
                            <h2 className="font-bold text-lg text-blue-900">Address Proof</h2>
                            <p className="text-gray-700 text-sm">
                                Submit any valid proof of the applicant’s address.
                            </p>
                            </div>
                        </div>

                        </div>
                    </div>

                    {/* Documents Required for Company or LLP */}
                    <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-4xl mx-auto">
                        {/* Card Header */}
                        <h1 className="text-2xl pb-6 font-bold text-gray-800 text-center mb-4">
                        Documents Required for Company or LLP
                        </h1>

                        {/* Steps Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">

                        <div className="bg-blue-50 p-4 rounded-lg hover:shadow-md transition-all duration-300 flex">
                            <span className="text-xl mr-3">🏢</span>
                            <div>
                            <h2 className="font-bold text-lg text-blue-900">Business Incorporation</h2>
                            <p className="text-gray-700 text-sm">
                                Certificate of Incorporation or Partnership Deed.
                            </p>
                            </div>
                        </div>

                        <div className="bg-blue-50 p-4 rounded-lg hover:shadow-md transition-all duration-300 flex">
                            <span className="text-xl mr-3">💳</span>
                            <div>
                            <h2 className="font-bold text-lg text-blue-900">Company PAN Card</h2>
                            <p className="text-gray-700 text-sm">
                                PAN card of the company or LLP.
                            </p>
                            </div>
                        </div>

                        <div className="bg-blue-50 p-4 rounded-lg hover:shadow-md transition-all duration-300 flex">
                            <span className="text-xl mr-3">📜</span>
                            <div>
                            <h2 className="font-bold text-lg text-blue-900">Board Resolution</h2>
                            <p className="text-gray-700 text-sm">
                                Board resolution authorizing trademark registration (if applicable).
                            </p>
                            </div>
                        </div>

                        <div className="bg-blue-50 p-4 rounded-lg hover:shadow-md transition-all duration-300 flex">
                            <span className="text-xl mr-3">✍</span>
                            <div>
                            <h2 className="font-bold text-lg text-blue-900">Signed Power of Attorney</h2>
                            <p className="text-gray-700 text-sm">
                                Required if filing through an attorney.
                            </p>
                            </div>
                        </div>

                        <div className="bg-blue-50 p-4 rounded-lg hover:shadow-md transition-all duration-300 flex md:col-span-2">
                            <span className="text-xl mr-3">📝</span>
                            <div>
                            <h2 className="font-bold text-lg text-blue-900">GST Registration Certificate</h2>
                            <p className="text-gray-700 text-sm">
                                If applicable, provide a GST registration certificate.
                            </p>
                            </div>
                        </div>

                        </div>
                    </div>

                    </div>
                </div>
              </div>
              <div id='Complaiance container' className="flex flex-wrap bg-gray-100 " > 
                <div  className="max-w-7xl mx-auto p-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                            {/* Form Section */}
                            <div id="Form Section" className="bg-white p-6 shadow-lg rounded-2xl max-w-2xl w-full">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">
                                Need Help with Our Trademark Services?
                            </h2>
                            <p className="text-gray-600 mb-4">Fill up the below-mentioned form</p>

                            <form>
                                <div className="mb-4">
                                <label className="block text-gray-700 font-medium mb-1">Name *</label>
                                <input type="text" placeholder="Your Name" className="w-full border rounded px-3 py-2" />
                                </div>

                                <div className="mb-4">
                                <label className="block text-gray-700 font-medium mb-1">Email *</label>
                                <input type="email" placeholder="Your Email Address" className="w-full border rounded px-3 py-2" />
                                </div>

                                <div className="mb-4">
                                <label className="block text-gray-700 font-medium mb-1">Mobile *</label>
                                <input type="text" placeholder="Your Phone Number (Without 0 or +91)" className="w-full border rounded px-3 py-2" />
                                </div>

                                <div className="mb-4">
                                <label className="block text-gray-700 font-medium mb-1">State *</label>
                                <select className="w-full border rounded px-3 py-2">
                                    <option>Select State</option>
                                    <option>Maharashtra</option>
                                    <option>Karnataka</option>
                                    <option>Tamil Nadu</option>
                                    <option>Delhi</option>
                                </select>
                                </div>

                                <div className="flex items-start mb-4">
                                <input type="checkbox" id="terms" className="mr-2" />
                                <label htmlFor="terms" className="text-gray-600 text-sm">
                                    I have read & agreed to the company's Terms and Conditions, disclaimer, and refund policy.
                                </label>
                                </div>

                                <button className="w-full bg-green-600 text-white py-2 rounded text-lg font-semibold hover:bg-green-700">
                                Request for Call Back
                                </button>
                            </form>
                            </div>

                            <div id = " Compliances Required After Registration" className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-4xl mx-auto">
                                {/* Card Header */}
                                <h1 className="text-2xl pb-6 font-bold text-gray-800 text-center mb-4">
                                    Compliances Required After Registration
                                </h1>

                                {/* Steps Grid */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">

                                    {/* Trademark Renewal */}
                                    <div className="bg-blue-50 p-4 rounded-lg hover:shadow-md transition-all duration-300 flex">
                                    <span className="text-xl mr-3">🔄</span>
                                    <div>
                                        <h2 className="font-bold text-lg text-blue-900">Trademark Renewal</h2>
                                        <p className="text-gray-700 text-sm">
                                        A registered trademark must be renewed every 10 years to maintain protection.
                                        </p>
                                    </div>
                                    </div>

                                    {/* Trademark Monitoring */}
                                    <div className="bg-blue-50 p-4 rounded-lg hover:shadow-md transition-all duration-300 flex">
                                    <span className="text-xl mr-3">👀</span>
                                    <div>
                                        <h2 className="font-bold text-lg text-blue-900">Trademark Monitoring</h2>
                                        <p className="text-gray-700 text-sm">
                                        Regularly check for any infringing trademarks in the marketplace.
                                        </p>
                                    </div>
                                    </div>

                                    {/* Usage of Trademark */}
                                    <div className="bg-blue-50 p-4 rounded-lg hover:shadow-md transition-all duration-300 flex">
                                    <span className="text-xl mr-3">✅</span>
                                    <div>
                                        <h2 className="font-bold text-lg text-blue-900">Usage of Trademark</h2>
                                        <p className="text-gray-700 text-sm">
                                        Ensure continuous and consistent use of the trademark to prevent cancellation due to non-use.
                                        </p>
                                    </div>
                                    </div>

                                    {/* Legal Enforcement */}
                                    <div className="bg-blue-50 p-4 rounded-lg hover:shadow-md transition-all duration-300 flex">
                                    <span className="text-xl mr-3">⚖️</span>
                                    <div>
                                        <h2 className="font-bold text-lg text-blue-900">Legal Enforcement</h2>
                                        <p className="text-gray-700 text-sm">
                                        Take legal action against any unauthorized use or infringement of the registered trademark.
                                        </p>
                                    </div>
                                    </div>

                                    {/* Assignment or Licensing */}
                                    <div className="bg-blue-50 p-4 rounded-lg hover:shadow-md transition-all duration-300 flex">
                                    <span className="text-xl mr-3">📜</span>
                                    <div>
                                        <h2 className="font-bold text-lg text-blue-900">Assignment or Licensing</h2>
                                        <p className="text-gray-700 text-sm">
                                        If the trademark is transferred, sold, or licensed, the change must be recorded with the Trademark Office.
                                        </p>
                                    </div>
                                    </div>

                                    {/* Filing Opposition Against Similar Trademarks */}
                                    <div className="bg-blue-50 p-4 rounded-lg hover:shadow-md transition-all duration-300 flex ">
                                    <span className="text-xl mr-3">📝</span>
                                    <div>
                                        <h2 className="font-bold text-lg text-blue-900">Filing Opposition Against Similar Trademarks</h2>
                                        <p className="text-gray-700 text-sm">
                                        If a new application is filed that is similar to your trademark, an opposition may be required.
                                        </p>
                                    </div>
                                    </div>

                                </div>
                            
                            </div>

                    </div>



                </div>  
              </div>




            </div>

            {/* Patent Section */}
            <div
              className={`transition-all duration-500 ${
                activeTab === 'patent' ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full absolute inset-0'
              }`}
            >
              <div id="Why Patent" className="bg-gray-100 py-12">
                <div className="max-w-7xl mx-auto px-4">
                  <div className="grid md:grid-cols-2 gap-8 justify-items-center">
                    {/* Why Choose Patent Registration Section */}
                    <div id="Why Choose Patent Registration" className="group col-span-2 bg-slate-50 rounded-2xl p-8">
                      {/* Title Section */}
                      <div className="p-8 mx-auto rounded-2xl md:col-span-2 sm:col-span-1 flex flex-col items-center">
                        <div className="flex flex-col md:flex-row justify-center group cursor-pointer">
                          <span className="text-3xl font-bold text-center text-gray-800 mb-4">
                            Why Register a
                          </span>
                          <span className="text-3xl font-bold text-center text-gray-800 mb-4 px-3 transition-all duration-300 group-hover:text-emerald-500">
                            Patent?
                          </span>
                        </div>
                        <div className="w-16 h-1 bg-green-500 mx-auto mb-6 md:group-hover:w-2xs transform duration-200"></div>
                      </div>

                      {/* Benefits Grid */}
                      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8 text-center">
                        {/* Exclusive Rights */}
                        <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex flex-col items-center group/exclusive">
                          <div className="w-16 h-16 border-2 border-blue-300 rounded-full flex items-center justify-center mb-4 transition-all duration-300 transform group-hover/exclusive:rotate-12 group-hover/exclusive:shadow-lg relative overflow-hidden bg-white">
                            <Lock className="w-10 h-10 text-yellow-500 transition-transform duration-300 group-hover/exclusive:scale-110" />
                          </div>
                          <h3 className="text-lg font-semibold text-gray-800 transition-colors duration-300 group-hover/exclusive:text-blue-600">Exclusive Rights</h3>
                          <p className="text-gray-600 mt-2 transition-colors duration-300 group-hover/exclusive:text-gray-800">Provides exclusive rights to the patent holder to manufacture, use, and sell the invention.</p>
                        </div>

                        {/* Monetary Gains */}
                        <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex flex-col items-center group/money">
                          <div className="w-16 h-16 border-2 border-blue-300 rounded-full flex items-center justify-center mb-4 transition-all duration-300 transform group-hover/money:rotate-12 group-hover/money:shadow-lg relative overflow-hidden bg-white">
                            <DollarSign className="w-10 h-10 text-yellow-500 transition-transform duration-300 group-hover/money:scale-110" />
                          </div>
                          <h3 className="text-lg font-semibold text-gray-800 transition-colors duration-300 group-hover/money:text-blue-600">Monetary Gains</h3>
                          <p className="text-gray-600 mt-2 transition-colors duration-300 group-hover/money:text-gray-800">Patents can be licensed, sold, or used to generate revenue.</p>
                        </div>

                        {/* Legal Protection */}
                        <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex flex-col items-center group/legal">
                          <div className="w-16 h-16 border-2 border-blue-300 rounded-full flex items-center justify-center mb-4 transition-all duration-300 transform group-hover/legal:rotate-12 group-hover/legal:shadow-lg relative overflow-hidden bg-white">
                            <ShieldCheck className="w-10 h-10 text-yellow-500 transition-transform duration-300 group-hover/legal:scale-110" />
                          </div>
                          <h3 className="text-lg font-semibold text-gray-800 transition-colors duration-300 group-hover/legal:text-blue-600">Legal Protection</h3>
                          <p className="text-gray-600 mt-2 transition-colors duration-300 group-hover/legal:text-gray-800">Prevents others from copying or using the invention without permission.</p>
                        </div>

                        {/* Competitive Advantage */}
                        <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex flex-col items-center group/competition">
                          <div className="w-16 h-16 border-2 border-blue-300 rounded-full flex items-center justify-center mb-4 transition-all duration-300 transform group-hover/competition:rotate-12 group-hover/competition:shadow-lg relative overflow-hidden bg-white">
                            <Scale className="w-10 h-10 text-yellow-500 transition-transform duration-300 group-hover/competition:scale-110" />
                          </div>
                          <h3 className="text-lg font-semibold text-gray-800 transition-colors duration-300 group-hover/competition:text-blue-600">Competitive Advantage</h3>
                          <p className="text-gray-600 mt-2 transition-colors duration-300 group-hover/competition:text-gray-800">Strengthens market position by restricting competitors from using similar technology.</p>
                        </div>

                        {/* Enhances Business Value */}
                        <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex flex-col items-center group/business">
                          <div className="w-16 h-16 border-2 border-blue-300 rounded-full flex items-center justify-center mb-4 transition-all duration-300 transform group-hover/business:rotate-12 group-hover/business:shadow-lg relative overflow-hidden bg-white">
                            <Briefcase className="w-10 h-10 text-yellow-500 transition-transform duration-300 group-hover/business:scale-110" />
                          </div>
                          <h3 className="text-lg font-semibold text-gray-800 transition-colors duration-300 group-hover/business:text-blue-600">Enhances Business Value</h3>
                          <p className="text-gray-600 mt-2 transition-colors duration-300 group-hover/business:text-gray-800">Increases the valuation of a company by adding intellectual property assets.</p>
                        </div>

                        {/* Encourages Innovation */}
                        <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex flex-col items-center group/innovation">
                          <div className="w-16 h-16 border-2 border-blue-300 rounded-full flex items-center justify-center mb-4 transition-all duration-300 transform group-hover/innovation:rotate-12 group-hover/innovation:shadow-lg relative overflow-hidden bg-white">
                            <Lightbulb className="w-10 h-10 text-yellow-500 transition-transform duration-300 group-hover/innovation:scale-110" />
                          </div>
                          <h3 className="text-lg font-semibold text-gray-800 transition-colors duration-300 group-hover/innovation:text-blue-600">Encourages Innovation</h3>
                          <p className="text-gray-600 mt-2 transition-colors duration-300 group-hover/innovation:text-gray-800">Promotes research and development by providing incentives for inventors.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div id="Docs Required" className="flex flex-wrap bg-gray-100">
                <div className="max-w-full mx-auto p-4">
                  <div className="grid grid-cols-1 md:grid-cols-1 gap-8">

                    {/* Documents Required for Patent Filing */}
                    <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-4xl mx-auto">
                      {/* Card Header */}
                      <h1 className="text-2xl pb-6 font-bold text-gray-800 text-center mb-4">
                        Documents Required for Patent Filing
                      </h1>

                      {/* Steps Grid */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">

                        <div className="bg-blue-50 p-4 rounded-lg hover:shadow-md transition-all duration-300 flex">
                          <span className="text-xl mr-3">📝</span>
                          <div>
                            <h2 className="font-bold text-lg text-blue-900">Patent Application Form (Form 1)</h2>
                            <p className="text-gray-700 text-sm">
                              The official application form for filing a patent in India.
                            </p>
                          </div>
                        </div>

                        <div className="bg-blue-50 p-4 rounded-lg hover:shadow-md transition-all duration-300 flex">
                          <span className="text-xl mr-3">📄</span>
                          <div>
                            <h2 className="font-bold text-lg text-blue-900">Specification of Invention (Form 2)</h2>
                            <p className="text-gray-700 text-sm">
                              Complete or provisional specification detailing the invention.
                            </p>
                          </div>
                        </div>

                        <div className="bg-blue-50 p-4 rounded-lg hover:shadow-md transition-all duration-300 flex">
                          <span className="text-xl mr-3">📋</span>
                          <div>
                            <h2 className="font-bold text-lg text-blue-900">Statement & Undertaking (Form 3)</h2>
                            <p className="text-gray-700 text-sm">
                              Declaration regarding foreign filings related to the invention.
                            </p>
                          </div>
                        </div>

                        <div className="bg-blue-50 p-4 rounded-lg hover:shadow-md transition-all duration-300 flex">
                          <span className="text-xl mr-3">🧑‍🔬</span>
                          <div>
                            <h2 className="font-bold text-lg text-blue-900">Declaration of Inventor (Form 5)</h2>
                            <p className="text-gray-700 text-sm">
                              A declaration confirming the identity of the inventor(s).
                            </p>
                          </div>
                        </div>

                        <div className="bg-blue-50 p-4 rounded-lg hover:shadow-md transition-all duration-300 flex">
                          <span className="text-xl mr-3">📠</span>
                          <div>
                            <h2 className="font-bold text-lg text-blue-900">Proof of Right</h2>
                            <p className="text-gray-700 text-sm">
                              Required if the applicant is not the inventor themselves.
                            </p>
                          </div>
                        </div>

                        <div className="bg-blue-50 p-4 rounded-lg hover:shadow-md transition-all duration-300 flex">
                          <span className="text-xl mr-3">✍</span>
                          <div>
                            <h2 className="font-bold text-lg text-blue-900">Power of Attorney</h2>
                            <p className="text-gray-700 text-sm">
                              Necessary if the application is filed through a patent attorney.
                            </p>
                          </div>
                        </div>

                        <div className="bg-blue-50 p-4 rounded-lg hover:shadow-md transition-all duration-300 flex">
                          <span className="text-xl mr-3">🌐</span>
                          <div>
                            <h2 className="font-bold text-lg text-blue-900">Priority Documents</h2>
                            <p className="text-gray-700 text-sm">
                              Required if claiming priority from an earlier foreign application.
                            </p>
                          </div>
                        </div>

                        <div className="bg-blue-50 p-4 rounded-lg hover:shadow-md transition-all duration-300 flex">
                          <span className="text-xl mr-3">💰</span>
                          <div>
                            <h2 className="font-bold text-lg text-blue-900">Payment Receipt</h2>
                            <p className="text-gray-700 text-sm">
                              A copy of the receipt for the prescribed government fee.
                            </p>
                          </div>
                        </div>

                      </div>
                    </div>

                  </div>
                </div>
              </div>
              <div id='Complaiance container' className="flex flex-wrap bg-gray-100">
                <div className="max-w-7xl mx-auto p-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    {/* Form Section */}
                    <div id="Form Section" className="bg-white p-6 shadow-lg rounded-2xl max-w-2xl w-full">
                      <h2 className="text-2xl font-bold text-gray-800 mb-4">
                        Need Help with Our Patent Services?
                      </h2>
                      <p className="text-gray-600 mb-4">Fill up the below-mentioned form</p>

                      <form>
                        <div className="mb-4">
                          <label className="block text-gray-700 font-medium mb-1">Name *</label>
                          <input type="text" placeholder="Your Name" className="w-full border rounded px-3 py-2" />
                        </div>

                        <div className="mb-4">
                          <label className="block text-gray-700 font-medium mb-1">Email *</label>
                          <input type="email" placeholder="Your Email Address" className="w-full border rounded px-3 py-2" />
                        </div>

                        <div className="mb-4">
                          <label className="block text-gray-700 font-medium mb-1">Mobile *</label>
                          <input type="text" placeholder="Your Phone Number (Without 0 or +91)" className="w-full border rounded px-3 py-2" />
                        </div>

                        <div className="mb-4">
                          <label className="block text-gray-700 font-medium mb-1">State *</label>
                          <select className="w-full border rounded px-3 py-2">
                            <option>Select State</option>
                            <option>Maharashtra</option>
                            <option>Karnataka</option>
                            <option>Tamil Nadu</option>
                            <option>Delhi</option>
                          </select>
                        </div>

                        <div className="flex items-start mb-4">
                          <input type="checkbox" id="terms" className="mr-2" />
                          <label htmlFor="terms" className="text-gray-600 text-sm">
                            I have read & agreed to the company's Terms and Conditions, disclaimer, and refund policy.
                          </label>
                        </div>

                        <button className="w-full bg-green-600 text-white py-2 rounded text-lg font-semibold hover:bg-green-700">
                          Request for Call Back
                        </button>
                      </form>
                    </div>

                    {/* Compliances Required After Registration */}
                    <div id="Compliances Required After Registration" className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-4xl mx-auto">
                      <h1 className="text-2xl pb-6 font-bold text-gray-800 text-center mb-4">
                        Compliances Required After Registration
                      </h1>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">

                        <div className="bg-blue-50 p-4 rounded-lg hover:shadow-md transition-all duration-300 flex">
                          <span className="text-xl mr-3">🔁</span>
                          <div>
                            <h2 className="font-bold text-lg text-blue-900">Renewal & Maintenance</h2>
                            <p className="text-gray-700 text-sm">
                              Patents must be renewed every year starting from the 3rd year after filing to keep them active.
                            </p>
                          </div>
                        </div>

                        <div className="bg-blue-50 p-4 rounded-lg hover:shadow-md transition-all duration-300 flex">
                          <span className="text-xl mr-3">📄</span>
                          <div>
                            <h2 className="font-bold text-lg text-blue-900">Patent Working Report (Form 27)</h2>
                            <p className="text-gray-700 text-sm">
                              File an annual statement showing whether and how the patent is being commercially used.
                            </p>
                          </div>
                        </div>

                        <div className="bg-blue-50 p-4 rounded-lg hover:shadow-md transition-all duration-300 flex">
                          <span className="text-xl mr-3">👁️</span>
                          <div>
                            <h2 className="font-bold text-lg text-blue-900">Monitoring for Infringement</h2>
                            <p className="text-gray-700 text-sm">
                              Regularly monitor for unauthorized use of your patent and take legal action if needed.
                            </p>
                          </div>
                        </div>

                        <div className="bg-blue-50 p-4 rounded-lg hover:shadow-md transition-all duration-300 flex">
                          <span className="text-xl mr-3">🌍</span>
                          <div>
                            <h2 className="font-bold text-lg text-blue-900">International Patent Protection</h2>
                            <p className="text-gray-700 text-sm">
                              Apply for foreign protection under PCT if you plan to commercialize your invention globally.
                            </p>
                          </div>
                        </div>

                        <div className="bg-blue-50 p-4 rounded-lg hover:shadow-md transition-all duration-300 flex md:col-span-2">
                          <span className="text-xl mr-3">📑</span>
                          <div>
                            <h2 className="font-bold text-lg text-blue-900">Assignment or Licensing</h2>
                            <p className="text-gray-700 text-sm">
                              If the patent is assigned or licensed, update the patent office records accordingly.
                            </p>
                          </div>
                        </div>

                      </div>
                    </div>

                  </div>
                </div>
              </div>


              



            </div>

            {/* Copyright Section */}
            <div
              className={`transition-all duration-500 ${
                activeTab === 'copyright' ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full absolute inset-0'
              }`}
            >
              <div id="Why Copyright" className="bg-gray-100 py-12">
                <div className="max-w-7xl mx-auto px-4">
                  <div className="grid md:grid-cols-2 gap-8 justify-items-center">
                    {/* Why Choose Copyright Registration Section */}
                    <div id="Why Choose Copyright Registration" className="group col-span-2 bg-slate-50 rounded-2xl p-8">
                      {/* Title Section */}
                      <div className="p-8 mx-auto rounded-2xl md:col-span-2 sm:col-span-1 flex flex-col items-center">
                        <div className="flex flex-col md:flex-row justify-center group cursor-pointer">
                          <span className="text-3xl font-bold text-center text-gray-800 mb-4">
                            Why Register a
                          </span>
                          <span className="text-3xl font-bold text-center text-gray-800 mb-4 px-3 transition-all duration-300 group-hover:text-emerald-500">
                            Copyright?
                          </span>
                        </div>
                        <div className="w-16 h-1 bg-green-500 mx-auto mb-6 md:group-hover:w-2xs transform duration-200"></div>
                      </div>

                      {/* Benefits Grid */}
                      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8 text-center">
                        {/* Legal Protection */}
                        <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex flex-col items-center group/legal">
                          <div className="w-16 h-16 border-2 border-blue-300 rounded-full flex items-center justify-center mb-4 transition-all duration-300 transform group-hover/legal:rotate-12 group-hover/legal:shadow-lg relative overflow-hidden bg-white">
                            <ShieldCheck className="w-10 h-10 text-yellow-500 transition-transform duration-300 group-hover/legal:scale-110" />
                          </div>
                          <h3 className="text-lg font-semibold text-gray-800 transition-colors duration-300 group-hover/legal:text-blue-600">Legal Protection</h3>
                          <p className="text-gray-600 mt-2 transition-colors duration-300 group-hover/legal:text-gray-800">Provides legal evidence of ownership and makes it easier to enforce rights.</p>
                        </div>

                        {/* Exclusive Rights */}
                        <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex flex-col items-center group/exclusive">
                          <div className="w-16 h-16 border-2 border-blue-300 rounded-full flex items-center justify-center mb-4 transition-all duration-300 transform group-hover/exclusive:rotate-12 group-hover/exclusive:shadow-lg relative overflow-hidden bg-white">
                            <Lock className="w-10 h-10 text-yellow-500 transition-transform duration-300 group-hover/exclusive:scale-110" />
                          </div>
                          <h3 className="text-lg font-semibold text-gray-800 transition-colors duration-300 group-hover/exclusive:text-blue-600">Exclusive Rights</h3>
                          <p className="text-gray-600 mt-2 transition-colors duration-300 group-hover/exclusive:text-gray-800">Grants the owner the exclusive right to reproduce, distribute, perform, and display the work.</p>
                        </div>

                        {/* Monetary Benefits */}
                        <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex flex-col items-center group/money">
                          <div className="w-16 h-16 border-2 border-blue-300 rounded-full flex items-center justify-center mb-4 transition-all duration-300 transform group-hover/money:rotate-12 group-hover/money:shadow-lg relative overflow-hidden bg-white">
                            <DollarSign className="w-10 h-10 text-yellow-500 transition-transform duration-300 group-hover/money:scale-110" />
                          </div>
                          <h3 className="text-lg font-semibold text-gray-800 transition-colors duration-300 group-hover/money:text-blue-600">Monetary Benefits</h3>
                          <p className="text-gray-600 mt-2 transition-colors duration-300 group-hover/money:text-gray-800">Copyright holders can sell, license, or commercially exploit their work.</p>
                        </div>

                        {/* Public Record */}
                        <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex flex-col items-center group/record">
                          <div className="w-16 h-16 border-2 border-blue-300 rounded-full flex items-center justify-center mb-4 transition-all duration-300 transform group-hover/record:rotate-12 group-hover/record:shadow-lg relative overflow-hidden bg-white">
                            <FileText className="w-10 h-10 text-yellow-500 transition-transform duration-300 group-hover/record:scale-110" />
                          </div>
                          <h3 className="text-lg font-semibold text-gray-800 transition-colors duration-300 group-hover/record:text-blue-600">Public Record</h3>
                          <p className="text-gray-600 mt-2 transition-colors duration-300 group-hover/record:text-gray-800">Acts as a public record of ownership in case of disputes.</p>
                        </div>

                        {/* International Protection */}
                        <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex flex-col items-center group/international">
                          <div className="w-16 h-16 border-2 border-blue-300 rounded-full flex items-center justify-center mb-4 transition-all duration-300 transform group-hover/international:rotate-12 group-hover/international:shadow-lg relative overflow-hidden bg-white">
                            <Globe className="w-10 h-10 text-yellow-500 transition-transform duration-300 group-hover/international:scale-110" />
                          </div>
                          <h3 className="text-lg font-semibold text-gray-800 transition-colors duration-300 group-hover/international:text-blue-600">International Protection</h3>
                          <p className="text-gray-600 mt-2 transition-colors duration-300 group-hover/international:text-gray-800">Facilitates protection under international copyright treaties.</p>
                        </div>

                        {/* Prevent Unauthorized Use */}
                        <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex flex-col items-center group/unauthorized">
                          <div className="w-16 h-16 border-2 border-blue-300 rounded-full flex items-center justify-center mb-4 transition-all duration-300 transform group-hover/unauthorized:rotate-12 group-hover/unauthorized:shadow-lg relative overflow-hidden bg-white">
                            <AlertCircle className="w-10 h-10 text-yellow-500 transition-transform duration-300 group-hover/unauthorized:scale-110" />
                          </div>
                          <h3 className="text-lg font-semibold text-gray-800 transition-colors duration-300 group-hover/unauthorized:text-blue-600">Prevent Unauthorized Use</h3>
                          <p className="text-gray-600 mt-2 transition-colors duration-300 group-hover/unauthorized:text-gray-800">Discourages unauthorized copying and distribution of creative work.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="Documents Required Copyright" className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-4xl mx-auto my-6">
                <h1 className="text-2xl pb-6 font-bold text-gray-800 text-center mb-4">
                  Documents Required for Copyright Registration
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="bg-blue-50 p-4 rounded-lg hover:shadow-md transition-all duration-300 flex">
                    <span className="text-xl mr-3">📝</span>
                    <div>
                      <h2 className="font-bold text-lg text-blue-900">Application Form (Form XIV)</h2>
                      <p className="text-gray-700 text-sm">
                        Duly filled official copyright application form.
                      </p>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg hover:shadow-md transition-all duration-300 flex">
                    <span className="text-xl mr-3">📂</span>
                    <div>
                      <h2 className="font-bold text-lg text-blue-900">Copies of the Work</h2>
                      <p className="text-gray-700 text-sm">
                        Submit soft or hard copies depending on the nature of the creative work.
                      </p>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg hover:shadow-md transition-all duration-300 flex">
                    <span className="text-xl mr-3">🪪</span>
                    <div>
                      <h2 className="font-bold text-lg text-blue-900">Identity Proof</h2>
                      <p className="text-gray-700 text-sm">
                        Aadhaar, PAN, Passport, or any government-issued ID.
                      </p>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg hover:shadow-md transition-all duration-300 flex">
                    <span className="text-xl mr-3">📜</span>
                    <div>
                      <h2 className="font-bold text-lg text-blue-900">Proof of Ownership</h2>
                      <p className="text-gray-700 text-sm">
                        If applicable, provide documents showing ownership or authorship.
                      </p>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg hover:shadow-md transition-all duration-300 flex">
                    <span className="text-xl mr-3">✍</span>
                    <div>
                      <h2 className="font-bold text-lg text-blue-900">Power of Attorney</h2>
                      <p className="text-gray-700 text-sm">
                        Required if applying through an attorney or representative.
                      </p>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg hover:shadow-md transition-all duration-300 flex">
                    <span className="text-xl mr-3">💵</span>
                    <div>
                      <h2 className="font-bold text-lg text-blue-900">Payment Receipt</h2>
                      <p className="text-gray-700 text-sm">
                        A copy of the payment receipt for the prescribed government fees.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div id='Complaiance container' className="flex flex-wrap bg-gray-100">
                <div className="max-w-7xl mx-auto p-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    {/* Form Section */}
                    <div id="Form Section" className="bg-white p-6 shadow-lg rounded-2xl max-w-2xl w-full">
                      <h2 className="text-2xl font-bold text-gray-800 mb-4">
                        Need Help with Our Copyright Services?
                      </h2>
                      <p className="text-gray-600 mb-4">Fill up the below-mentioned form</p>

                      <form>
                        <div className="mb-4">
                          <label className="block text-gray-700 font-medium mb-1">Name *</label>
                          <input type="text" placeholder="Your Name" className="w-full border rounded px-3 py-2" />
                        </div>

                        <div className="mb-4">
                          <label className="block text-gray-700 font-medium mb-1">Email *</label>
                          <input type="email" placeholder="Your Email Address" className="w-full border rounded px-3 py-2" />
                        </div>

                        <div className="mb-4">
                          <label className="block text-gray-700 font-medium mb-1">Mobile *</label>
                          <input type="text" placeholder="Your Phone Number (Without 0 or +91)" className="w-full border rounded px-3 py-2" />
                        </div>

                        <div className="mb-4">
                          <label className="block text-gray-700 font-medium mb-1">State *</label>
                          <select className="w-full border rounded px-3 py-2">
                            <option>Select State</option>
                            <option>Maharashtra</option>
                            <option>Karnataka</option>
                            <option>Tamil Nadu</option>
                            <option>Delhi</option>
                          </select>
                        </div>

                        <div className="flex items-start mb-4">
                          <input type="checkbox" id="terms" className="mr-2" />
                          <label htmlFor="terms" className="text-gray-600 text-sm">
                            I have read & agreed to the company's Terms and Conditions, disclaimer, and refund policy.
                          </label>
                        </div>

                        <button className="w-full bg-green-600 text-white py-2 rounded text-lg font-semibold hover:bg-green-700">
                          Request for Call Back
                        </button>
                      </form>
                    </div>

                    {/* Compliances Required After Registration */}
                    <div id="Compliances Required After Registration" className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-4xl mx-auto">
                      <h1 className="text-2xl pb-6 font-bold text-gray-800 text-center mb-4">
                        Compliances Required After Registration
                      </h1>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">

                        <div className="bg-blue-50 p-4 rounded-lg hover:shadow-md transition-all duration-300 flex">
                          <span className="text-xl mr-3">🔍</span>
                          <div>
                            <h2 className="font-bold text-lg text-blue-900">Regular Monitoring</h2>
                            <p className="text-gray-700 text-sm">
                              Ensure no unauthorized use or reproduction of your copyrighted work.
                            </p>
                          </div>
                        </div>

                        <div className="bg-blue-50 p-4 rounded-lg hover:shadow-md transition-all duration-300 flex">
                          <span className="text-xl mr-3">📅</span>
                          <div>
                            <h2 className="font-bold text-lg text-blue-900">Renewal & Extension</h2>
                            <p className="text-gray-700 text-sm">
                              Copyright usually lasts for the life of the author plus 60 years (varies by jurisdiction).
                            </p>
                          </div>
                        </div>

                        <div className="bg-blue-50 p-4 rounded-lg hover:shadow-md transition-all duration-300 flex">
                          <span className="text-xl mr-3">⚖️</span>
                          <div>
                            <h2 className="font-bold text-lg text-blue-900">Enforcement of Rights</h2>
                            <p className="text-gray-700 text-sm">
                              Take legal action against any copyright infringement or misuse.
                            </p>
                          </div>
                        </div>

                        <div className="bg-blue-50 p-4 rounded-lg hover:shadow-md transition-all duration-300 flex">
                          <span className="text-xl mr-3">🤝</span>
                          <div>
                            <h2 className="font-bold text-lg text-blue-900">Licensing & Assignment</h2>
                            <p className="text-gray-700 text-sm">
                              Properly record agreements if transferring or licensing rights to others.
                            </p>
                          </div>
                        </div>

                        <div className="bg-blue-50 p-4 rounded-lg hover:shadow-md transition-all duration-300 flex md:col-span-2">
                          <span className="text-xl mr-3">🌐</span>
                          <div>
                            <h2 className="font-bold text-lg text-blue-900">International Protection</h2>
                            <p className="text-gray-700 text-sm">
                              Extend protection under international copyright treaties like the Berne Convention.
                            </p>
                          </div>
                        </div>

                      </div>
                    </div>

                  </div>
                </div>
              </div>





            </div>


          </div>
        </div>

      </div>

    </div>
  )
}

export default page