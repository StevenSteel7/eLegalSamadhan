'use client';
// NavBar.jsx
import React, { use, useState } from 'react';
import Link from 'next/link';
import { ChevronRight, Menu, MessageSquare, Scale, X } from 'lucide-react';

const NavBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div> 
      {/* Desktop Navbar */}                                     {/* hidden on all screens accept lg and xl */}
      <nav id="Desktop Navbar" className="bg-blue-900 text-white hidden lg:block xl:block">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">

            {/* Logo */}
            <div className="flex items-center">
              <svg className="h-8 w-8 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
              </svg>
              <Link href="/" >
              <span className="font-bold text-xl text-orange-500">E-</span>
              <span className="font-bold text-xl text-emerald-400">Samadhan</span>
              </Link>

            </div>

            {/* Navigation Items */}
            <div className="flex space-x-1">

              <div className="relative group" id='Legal Samadhan'>
                  <button className="px-3 py-2 flex items-center nav-link">
                  Legal Samadhan
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    </svg>
                  </button>
      
                  <div id='Company Registration dropdown ' 
                        className="absolute left-0 mt-2  w-md hover:bg-gray-100
                                bg-white shadow-xl rounded-md z-50 text-black opacity-0 invisible group-hover:opacity-100 
                                  group-hover:visible duration-300 ease-in-out">
                    <div className="grid grid-cols-3 gap-4 p-2">
                      {/* Legal Registration Column */}
                      <div className="p-4 w-md ">
                        <h3 className="font-bold text-lg mb-2 uppercase">Legal Samadhan for:</h3>
                        <ul className="space-y-2">
                          <li><Link href="/msme-reg" className="dropdown-higlight">MSME Registered Proprietorship</Link></li>
                          <li><Link href="/comsumer-matters" className="dropdown-higlight">Consumer matters</Link></li>
                          <li><Link href="/arbitration" className="dropdown-higlight">Arbitration Matters</Link></li>
                          <li><Link href="/rera" className="dropdown-higlight">RERA Matters</Link></li>
                     
                        </ul>
                      </div>
                    </div>
                  </div>
              </div>

              <div className="relative group" id='Company Registration'>
                <button className="px-3 py-2 flex items-center nav-link">
                   Registration & Rights
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
    
                <div id='Company Registration dropdown' 
                      className="absolute left-[-180] mt-2 w-3xl max-w-4xl
                              bg-white shadow-xl rounded-md z-50 text-black opacity-0 invisible group-hover:opacity-100 
                                group-hover:visible duration-300 ease-in-out">
                  <div className="grid grid-cols-3 gap-4 p-2 ">
                    {/* Legal Registration Column */}
                    <div className="p-4 rounded-md hover:bg-gray-100">
                      <h3 className="font-bold text-lg mb-2 uppercase">Company REGISTRATION</h3>
                      <ul className="space-y-2">
                        <li><Link href="/sole-proprietorship" className="dropdown-higlight">One Person Company</Link></li>
                        <li><Link href="/private-limited" className="dropdown-higlight">Pvt. Ltd. Company</Link></li>
                        <li><Link href="/opc" className="dropdown-higlight">Public Ltd. Company</Link></li>
                        <li><Link href="/llp" className="dropdown-higlight">LLP Registration</Link></li>
                        <li><Link href="/section-8" className="dropdown-higlight">Nidhi Company Registration</Link></li>
                        <li><Link href="/section-8" className="dropdown-higlight">Section 8 Company (NGO)</Link></li>
                        <li><Link href="/section-8" className="dropdown-higlight">Nidhi Company Registration</Link></li>
                      </ul>
                    </div>
                    
                    {/* Legal Documents Column */}
                    <div className="p-4 border-l-2 border-gray-300 hover:bg-gray-100 rounded-md">
                      <h3 className="font-bold text-lg mb-4 uppercase">BUSINESS REGISTRATIONS & COMPLIANCES</h3>
                      <ul className="space-y-2">
                        <li><Link href="/business-agreements" className="dropdown-higlight">Partnership Registration</Link></li>
                        <li><Link href="/nda" className="dropdown-higlight">Startup (India)</Link></li>
                        <li><Link href="/founders-notice" className="dropdown-higlight">MSME Registration</Link></li>
                      </ul>
                    </div>
                    
                    
                    {/* IP Rights Column */}
                    <div className="p-4 border-l-2 border-gray-300 hover:bg-gray-100 rounded-md">
                      <h3 className="font-bold text-lg mb-2 uppercase">IP Rights</h3>
                      <ul className="space-y-2">
                        <li><Link href="/trademark" className="dropdown-higlight">Trademark Registration</Link></li>
                        <li><Link href="/private-limited" className="dropdown-higlight">Trademark objections</Link></li>
                        <li><Link href="/opc" className="dropdown-higlight">Copyright Registration</Link></li>
                        <li><Link href="/llp" className="dropdown-higlight">Copyright Objection</Link></li>
                        <li><Link href="/section-8" className="dropdown-higlight">Patent Registration</Link></li>
                      </ul>
                    </div>
          
                  </div>
                </div>
              </div>

              {/* <div className="relative group" id='IP Rights'>
                <button className="px-3 py-2 flex items-center nav-link gap-1 hover:text-orange-500 transition-colors">
                  IP Rights
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
    
                <div id='IP Rights dropdown' 
                      className="absolute w-2xs mt-2 max-w-4xl opacity-0 invisible
                              bg-white shadow-xl rounded-md z-50 text-black  group-hover:opacity-100 
                                group-hover:visible duration-300 ease-in-out">
                  <div className="grid gap-4 p-2">
                   Legal Registration Column 
                    <div className="p-4">
                      <h3 className="font-bold text-lg mb-2 uppercase">IP Rights</h3>
                      <ul className="space-y-2">
                        <li><Link href="/sole-proprietorship" className="dropdown-higlight">Trademark Registration</Link></li>
                        <li><Link href="/private-limited" className="dropdown-higlight">Trademark objections</Link></li>
                        <li><Link href="/opc" className="dropdown-higlight">Copyright Registration</Link></li>
                        <li><Link href="/llp" className="dropdown-higlight">Copyright Objection</Link></li>
                        <li><Link href="/section-8" className="dropdown-higlight">Patent Registration</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div> */}


              <div className="relative group" id='Licenses'>
                <button className="px-3 py-2 flex items-center nav-link gap-1 hover:text-orange-500 transition-colors">
                Licenses
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
    
                <div id='IP Rights dropdown' 
                      className="absolute w-2xs mt-2 max-w-4xl opacity-0 invisible
                              bg-white shadow-xl rounded-md z-50 text-black  group-hover:opacity-100 
                                group-hover:visible duration-300 ease-in-out">
                  <div className="grid gap-4 p-2 ">
                   {/* Licenses Column  */}
                    <div className="p-4">
                      <h3 className="font-bold text-lg mb-2 uppercase">Licenses</h3>
                      <ul className="space-y-2">
                        <li><Link href="/sole-proprietorship" className="dropdown-higlight">FSSAI Registration</Link></li>
                        <li><Link href="/private-limited" className="dropdown-higlight">ISO Registration</Link></li>
                        <li><Link href="/opc" className="dropdown-higlight">Trust Registration</Link></li>
                        <li><Link href="/llp" className="dropdown-higlight">Public Trust Registration</Link></li>
                        <li><Link href="/section-8" className="dropdown-higlight">Society Registration</Link></li>
                        <li><Link href="/section-8" className="dropdown-higlight">Import Export Code</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div> 

                       
              <div className="relative group" id='More'>
                <button className="px-3 py-2 flex items-center nav-link">
                  More
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
                <div className="absolute left-0 mt-2 w-screen max-w-4xl bg-white shadow-lg rounded-md z-50 text-black hidden group-hover:block">
                  <div className="grid grid-cols-3 gap-4 p-4">
                    <p className="p-4">More dropdown content goes here</p>
                  </div>
                </div>
              </div>

              <div className=" nav-link ">  
                <button className="flex items-center gap-2 ">
                  <MessageSquare className="  text-green-500" />
                  <div className="font-bold">Share Feedback</div>
                </button>
              </div>


            </div>

          </div>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <div id="Mobile Navbar" className="bg-blue-900 text-white py-3 md:block lg:hidden xl:hidden">
      <div className="container mx-auto px-4">
        {/* Top bar with logo and menu button */}
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Scale className="h-6 w-6 text-orange-500" />
            <span className="text-xl font-bold">LegalEdge</span>
          </div>
          <button 
            className="text-white p-1 relative" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className={`h-6 w-6 absolute transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'}`} />
            <X className={`h-6 w-6 transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 rotate-90'}`} />
          </button>
        </div>
        
        {/* Mobile dropdown menu with animation */}
        <div 
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="mt-3 space-y-3 pb-3">
            {['StartEdge', 'ProtectEdge', 'ManageEdge', 'GrowEdge', 'More', 'Contact Us'].map((item) => (
              <div key={item} className="border-b border-blue-800 pb-2">
                <button className="flex items-center justify-between w-full py-1">
                  <span>{item}</span>
                  <ChevronRight style={{ width: '16px', height: '16px' }} />
                </button>
              </div>
            ))}
            <div className="pt-2">  
              <button className="flex items-center gap-2 w-full py-2">
                <MessageSquare className="w-5 h-5 text-orange-500" />
                <div className="font-bold">Share Feedback</div>
              </button>
            </div>
          </div>
        </div>
      </div>
      </div>

    </div>
  );
};

export default NavBar;