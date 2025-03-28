'use client';
// NavBar.jsx
import React, { use, useState } from 'react';
import Link from 'next/link';
import { ChevronDown, ChevronRight, Menu, MessageSquare, Scale, X } from 'lucide-react';

const NavBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMenus, setActiveMenus] = useState<string[]>([]);
  
  const toggleSubmenu = (menuName: string) => {
    setActiveMenus(prev => {
      if (prev.includes(menuName)) {
        return prev.filter(item => item !== menuName);
      } else {
        return [...prev, menuName];
      }
    });
  };

  const isMenuActive = (menuName: string) => {
    return activeMenus.includes(menuName);
  };

  const getSubmenuHeight = (menuName: string) => {
    // Approximate heights for different menus - adjust these values as needed
    const heights: { [key: string]: string } = {
      legalSamadhan: 'max-h-[200px]',
      registration: 'max-h-[800px]', // Larger height for nested menus
      companyReg: 'max-h-[300px]',
      businessReg: 'max-h-[200px]',
      ipRights: 'max-h-[250px]',
      licenses: 'max-h-[250px]',
      more: 'max-h-[200px]'
    };
    return heights[menuName] || 'max-h-[200px]';
  };

  return (
    <div> 
      {/* Desktop Navbar */}                                     {/* hidden on all screens accept lg and xl */}
      <nav id="Desktop Navbar" className="bg-blue-900 text-white hidden lg:block xl:block z-[500] absolute w-screen">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">

            {/* Logo */}
            <div className="flex items-center">
              <svg className="h-8 w-8 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
              </svg>
              <Link href="/" >
              <span className="font-bold text-xl text-orange-500">E-</span>
              <span className="font-bold text-xl text-emerald-400">Legal Samadhan</span>
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
                        <li><Link href="/company-reg/one-person" className="dropdown-higlight">One Person Company</Link></li>
                        <li><Link href="/company-reg/pvt-ltd" className="dropdown-higlight">Pvt. Ltd. Company</Link></li>
                        <li><Link href="/company-reg/pub-ltd" className="dropdown-higlight">Public Ltd. Company</Link></li>
                        <li><Link href="/company-reg/llp-reg" className="dropdown-higlight">LLP Registration</Link></li>
                        <li><Link href="/company-reg/nidhi-reg" className="dropdown-higlight">Nidhi Company Registration</Link></li>
                        <li><Link href="/company-reg/sec-8" className="dropdown-higlight">Section 8 Company (NGO)</Link></li>
                      </ul>
                    </div>
                    
                    {/* Legal Documents Column */}
                    <div className="p-4 border-l-2 border-gray-300 hover:bg-gray-100 rounded-md">
                      <h3 className="font-bold text-lg mb-4 uppercase">BUSINESS REGISTRATIONS & COMPLIANCES</h3>
                      <ul className="space-y-2">
                        <li><Link href="/startup" className="dropdown-higlight">Startup (India)</Link></li>
                        <li><Link href="/msme-reg" className="dropdown-higlight">MSME Registeration</Link></li>
                      </ul>
                    </div>
                    
                    
                    {/* IP Rights Column */}
                    <div className="p-4 border-l-2 border-gray-300 hover:bg-gray-100 rounded-md">
                      <h3 className="font-bold text-lg mb-2 uppercase">IP Rights</h3>
                      <ul className="space-y-2">
                        <li><Link href="/trademark" className="dropdown-higlight">Trademark Registration</Link></li>
                        <li><Link href="/trademark" className="dropdown-higlight">Copyright Registration</Link></li>
                        <li><Link href="/trademark" className="dropdown-higlight">Patent Registration</Link></li>
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
                        <li><Link href="/licenses/fssai" className="dropdown-higlight">FSSAI Registration</Link></li>
                        <li><Link href="/licenses/iso" className="dropdown-higlight">ISO Registration</Link></li>
                        <li><Link href="/licenses/trust" className="dropdown-higlight">Trust Registration</Link></li>
                        <li><Link href="/licenses/society" className="dropdown-higlight">Society Registration</Link></li>
                        <li><Link href="/licenses/import-export" className="dropdown-higlight">Import Export Code</Link></li>
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
      <div id="Mobile Navbar" className="bg-blue-900 text-white py-3 md:block lg:hidden xl:hidden absolute w-full z-20">
        <div className="container mx-auto px-4">
          {/* Top bar with logo and menu button */}
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <svg className="h-6 w-6 mr-2 text-orange-500" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
              </svg>
              <Link href="/">
                <span className="font-bold text-xl text-orange-500">E-</span>
                <span className="font-bold text-xl text-emerald-400">Samadhan</span>
              </Link>
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
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              mobileMenuOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="mt-3 space-y-1 pb-3">
              {/* Legal Samadhan */}
              <div className="border-b border-blue-800 pb-2">
                <button 
                  className="flex items-center justify-between w-full py-2"
                  onClick={() => toggleSubmenu('legalSamadhan')}
                >
                  <span>Legal Samadhan</span>
                  <ChevronRight className={`w-5 h-5 transition-transform duration-300 ${
                    isMenuActive('legalSamadhan') ? 'rotate-90' : ''
                  }`} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  isMenuActive('legalSamadhan') 
                    ? `${getSubmenuHeight('legalSamadhan')} opacity-100` 
                    : 'max-h-0 opacity-0'
                }`}>
                  <div className="ml-4 mt-2 space-y-2 text-sm">
                    <Link href="/comsumer-matters" className="block py-1 pl-2 border-l-2 border-orange-500">
                      Consumer matters
                    </Link>
                    <Link href="/arbitration" className="block py-1 pl-2 border-l-2 border-orange-500">
                      Arbitration Matters
                    </Link>
                    <Link href="/rera" className="block py-1 pl-2 border-l-2 border-orange-500">
                      RERA Matters
                    </Link>
                  </div>
                </div>
              </div>

              {/* Registration & Rights */}
              <div className="border-b border-blue-800 pb-2">
                <button 
                  className="flex items-center justify-between w-full py-2"
                  onClick={() => toggleSubmenu('registration')}
                >
                  <span>Registration & Rights</span>
                  <ChevronRight className={`w-5 h-5 transition-transform duration-300 ${
                    isMenuActive('registration') ? 'rotate-90' : ''
                  }`} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  isMenuActive('registration') 
                    ? `${getSubmenuHeight('registration')} opacity-100` 
                    : 'max-h-0 opacity-0'
                }`}>
                  <div className="ml-4 mt-2 space-y-3 text-sm">
                    {/* Company Registration submenu */}
                    <div>
                      <button 
                        className="flex items-center justify-between w-full py-1"
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleSubmenu('companyReg');
                        }}
                      >
                        <span className="font-semibold">COMPANY REGISTRATION</span>
                        <ChevronRight className={`w-4 h-4 transition-transform duration-300 ${
                          isMenuActive('companyReg') ? 'rotate-90' : ''
                        }`} />
                      </button>
                      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        isMenuActive('companyReg') 
                          ? `${getSubmenuHeight('companyReg')} opacity-100` 
                          : 'max-h-0 opacity-0'
                      }`}>
                        <div className="ml-2 mt-1 space-y-1">
                          <Link href="/company-reg/one-person" className="block py-1 pl-2 border-l-2 border-orange-500">
                            One Person Company
                          </Link>
                          <Link href="/company-reg/pvt-ltd" className="block py-1 pl-2 border-l-2 border-orange-500">
                            Pvt. Ltd. Company
                          </Link>
                          <Link href="/company-reg/pub-ltd" className="block py-1 pl-2 border-l-2 border-orange-500">
                            Public Ltd. Company
                          </Link>
                          <Link href="/company-reg/llp-reg" className="block py-1 pl-2 border-l-2 border-orange-500">
                            LLP Registration
                          </Link>
                          <Link href="/company-reg/nidhi-reg" className="block py-1 pl-2 border-l-2 border-orange-500">
                            Nidhi Company Registration
                          </Link>
                          <Link href="/company-reg/sec-8" className="block py-1 pl-2 border-l-2 border-orange-500">
                            Section 8 Company (NGO)
                          </Link>
                        </div>
                      </div>
                    </div>

                    {/* Business Registrations submenu */}
                    <div>
                      <button 
                        className="flex items-center justify-between w-full py-1"
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleSubmenu('businessReg');
                        }}
                      >
                        <span className="font-semibold">BUSINESS REGISTRATIONS & COMPLIANCES</span>
                        <ChevronRight className={`w-4 h-4 transition-transform duration-300 ${
                          isMenuActive('businessReg') ? 'rotate-90' : ''
                        }`} />
                      </button>
                      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        isMenuActive('businessReg') 
                          ? `${getSubmenuHeight('businessReg')} opacity-100` 
                          : 'max-h-0 opacity-0'
                      }`}>
                        <div className="ml-2 mt-1 space-y-1">
                          <Link href="/nda" className="block py-1 pl-2 border-l-2 border-orange-500">
                            Startup (India)
                          </Link>
                          <Link href="/msme-reg" className="block py-1 pl-2 border-l-2 border-orange-500">
                            MSME Registered Proprietorship
                          </Link>
                        </div>
                      </div>
                    </div>

                    {/* IP Rights submenu */}
                    <div>
                      <button 
                        className="flex items-center justify-between w-full py-1"
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleSubmenu('ipRights');
                        }}
                      >
                        <span className="font-semibold">IP RIGHTS</span>
                        <ChevronRight className={`w-4 h-4 transition-transform duration-300 ${
                          isMenuActive('ipRights') ? 'rotate-90' : ''
                        }`} />
                      </button>
                      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        isMenuActive('ipRights') 
                          ? `${getSubmenuHeight('ipRights')} opacity-100` 
                          : 'max-h-0 opacity-0'
                      }`}>
                        <div className="ml-2 mt-1 space-y-1">
                          <Link href="/trademark" className="block py-1 pl-2 border-l-2 border-orange-500">
                            Trademark Registration
                          </Link>
                          <Link href="/trademark" className="block py-1 pl-2 border-l-2 border-orange-500">
                            Copyright Registration
                          </Link>
                          <Link href="/trademark" className="block py-1 pl-2 border-l-2 border-orange-500">
                            Patent Registration
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Licenses */}
              <div className="border-b border-blue-800 pb-2">
                <button 
                  className="flex items-center justify-between w-full py-2"
                  onClick={() => toggleSubmenu('licenses')}
                >
                  <span>Licenses</span>
                  <ChevronRight className={`w-5 h-5 transition-transform duration-300 ${
                    isMenuActive('licenses') ? 'rotate-90' : ''
                  }`} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  isMenuActive('licenses') 
                    ? `${getSubmenuHeight('licenses')} opacity-100` 
                    : 'max-h-0 opacity-0'
                }`}>
                  <div className="ml-4 mt-2 space-y-2 text-sm">
                    <Link href="/licenses/fssai" className="block py-1 pl-2 border-l-2 border-orange-500">
                      FSSAI Registration
                    </Link>
                    <Link href="/licenses/iso" className="block py-1 pl-2 border-l-2 border-orange-500">
                      ISO Registration
                    </Link>
                    <Link href="/licenses/trust" className="block py-1 pl-2 border-l-2 border-orange-500">
                      Trust Registration
                    </Link>
                    <Link href="/licenses/society" className="block py-1 pl-2 border-l-2 border-orange-500">
                      Society Registration
                    </Link>
                    <Link href="/licenses/import-export" className="block py-1 pl-2 border-l-2 border-orange-500">
                      Import Export Code
                    </Link>
                  </div>
                </div>
              </div>

              {/* More */}
              <div className="border-b border-blue-800 pb-2">
                <button 
                  className="flex items-center justify-between w-full py-2"
                  onClick={() => toggleSubmenu('more')}
                >
                  <span>More</span>
                  <ChevronRight className={`w-5 h-5 transition-transform duration-300 ${
                    isMenuActive('more') ? 'rotate-90' : ''
                  }`} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  isMenuActive('more') 
                    ? `${getSubmenuHeight('more')} opacity-100` 
                    : 'max-h-0 opacity-0'
                }`}>
                  <div className="ml-4 mt-2 space-y-2 text-sm">
                    <p>More dropdown content goes here</p>
                  </div>
                </div>
              </div>

              {/* Share Feedback */}
              <div className="pt-2">  
                <button className="flex items-center gap-2 w-full py-2">
                  <MessageSquare className="w-5 h-5 text-green-500" />
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