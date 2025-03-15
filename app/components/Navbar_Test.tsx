
import { ArrowDown, ArrowDownLeftSquare, ChevronDown, ChevronRight, MapPin, Menu, MessageSquare, Phone, Scale, Search, ShoppingCart, User, X } from 'lucide-react';
import React, { useState } from 'react'


const Navbari = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const [activeDropdown, setActiveDropdown] = useState(null);

  const navItems = [
    {
      name: 'StartEdge',
      dropdown: [
        { title: 'Sole Proprietorship', price: 'Rs. 999/-' },
        { title: 'Pvt. Ltd. Company', price: null },
        { title: 'One Person Company', price: null },
        { title: 'Limited Liability Partnership', price: null },
        { title: 'MSME Registration', price: null },
        { title: 'Section 8 Company (NGO)', price: null }
      ]
    },
    {
      name: 'ProtectEdge',
      dropdown: [
        { title: 'Business Agreements', price: null },
        { title: 'Non-Disclosure Agreement', price: null },
        { title: 'Founder\'s Legal Notice', price: null },
        { title: 'Cheque Bounce Legal Notice', price: null },
        { title: 'Lease / Rental Agreement', price: null },
        { title: 'Legal Notice', price: null },
        { title: 'Legal Notice for Recovery of Dues', price: null }
      ]
    },
    { name: 'ManageEdge', dropdown: [] },
    { name: 'GrowEdge', dropdown: [] },
    { name: 'More', dropdown: [] },
    { name: 'Contact Us', dropdown: [] }
  ];

  const handleMouseEnter = (index : any) => {
    setActiveDropdown(index);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };





  return (
 

  <div>

   

    {/* Desktop Navbar Without Dropdown*/}
    <div className="bg-blue-900 text-white py-4 hidden md:block">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Scale className="h-8 w-8 text-orange-500" />
          <span className="text-2xl font-bold">LegalEdge</span>
        </div>
        
        <div className="pl-20"></div>
        
        {navItems.map((item, index) => (
          <div 
            key={item.name} 
            className="group relative"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <button className="nav-link flex items-center gap-1 hover:text-orange-500 transition-colors">
              {item.name}
              <ChevronDown style={{ width: '16px', height: '16px' }} />
            </button>
            
            {item.dropdown.length > 0 && activeDropdown === index && (
              <div className="absolute left-0 mt-2 w-64 bg-white text-gray-800 shadow-lg rounded-md overflow-hidden z-50">
                <div className="py-2">
                  {item.dropdown.map((dropdownItem) => (
                    <a 
                      key={dropdownItem.title} 
                      href="#" 
                      className="flex justify-between items-center px-4 py-2 hover:bg-gray-100"
                    >
                      <span>{dropdownItem.title}</span>
                      {dropdownItem.price && (
                        <span className="text-orange-500 font-medium">{dropdownItem.price}</span>
                      )}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
        
        <div className="flex items-center pl-2">
          <button className="flex items-center gap-2 group">
            <MessageSquare className="w-5 h-5 text-white group-hover:text-orange-500 transition-colors" />
            <div className="font-bold group-hover:text-orange-500 transition-colors">Share Feedback</div>
          </button>
        </div>
      </div>
    </div>

     {/* Desktop Navbar */}
  {/*  <div className="bg-blue-900 text-white py-4 hidden md:block">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center space-x-2 ">
          <Scale className="h-8 w-8 text-orange-500" />
          <span className="text-2xl font-bold">LegalEdge</span>
        </div>

        <div className='pl-20'></div>

        {['StartEdge', 'ProtectEdge', 'ManageEdge', 'GrowEdge', 'More', 'Contact Us'].map((item) => (
          <div key={item} className="group">
            <button className="nav-link flex items-center gap-1">
              {item}
              <ChevronDown style={{ width: '16px', height: '16px' }} />
            </button>
          </div>
        ))}

        <div className="flex items-center pl-2 ">
          <button className="flex items-center gap-2 group">
            <MessageSquare className="w-5 h-5 text-white group-hover:text-orange-500 transition-colors" />
            <div className="font-bold group-hover:text-orange-500 transition-colors">Share Feedback</div>
          </button>
        </div>
      </div>
    </div>
      */}

    {/* Mobile Navbar */}
      <div className="bg-blue-900 text-white py-3 md:hidden">
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

      {/* <div className="bg-white border-b border-gray-100">
      <div className="container mx-auto px-4">
        
        <div className="flex items-center justify-between py-4">
          <div className="text-2xl font-bold tracking-tight">
            Start<span className="bg-yellow-400 px-2 py-1 rounded-md ml-1">Up</span>
          </div>
          
          <div className="flex-1 max-w-2xl mx-12">
            <div className="flex">
              <input
                type="text"
                placeholder="Search services..."
                className="w-full px-4 py-2.5 bg-gray-50 border-2 border-gray-100 rounded-l-lg focus:outline-none focus:border-yellow-400 focus:bg-white transition-colors"
              />
              <button className="bg-yellow-400 px-6 py-2.5 rounded-r-lg hover:bg-yellow-500 transition-colors">
                <Search className="w-5 h-5 text-gray-800" />
              </button>
            </div>
          </div>

          <div className="flex items-center gap-8">
            <button className="flex items-center gap-3 group">
              <div className="p-2 bg-gray-50 rounded-full group-hover:bg-yellow-100 transition-colors">
                <User className="w-5 h-5 text-gray-700" />
              </div>
              <div className="text-left">
                <div className="text-sm text-gray-500">Welcome</div>
                <div className="text-sm font-semibold group-hover:text-yellow-500 transition-colors">Sign In / Register</div>
              </div>
            </button>
            
            <button className="flex items-center gap-3 group">
              <div className="p-2 bg-gray-50 rounded-full group-hover:bg-yellow-100 transition-colors">
                <ShoppingCart className="w-5 h-5 text-gray-700" />
              </div>
              <div className="text-left">
                <div className="text-sm font-semibold group-hover:text-yellow-500 transition-colors">₹0.00</div>
                <div className="text-sm text-gray-500">Cart</div>
              </div>
            </button>
          </div>
        </div>

        
        <nav className="flex items-center justify-between py-4">
          <button className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
            <span className="font-medium">All Departments</span>
            <ChevronDown className="w-4 h-4" />
          </button>

          <div className="flex gap-6">
            {['Shuru Kro', 'Protect Kro', 'Manage Kro', 'Grow Kro', 'More', 'Contact Us', 'Tools'].map((item) => (
              <button key={item} className="nav-link">
                {item}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-6">
            <button className="flex items-center gap-2 group">
              <MapPin className="w-5 h-5 text-gray-600 group-hover:text-yellow-500 transition-colors" />
              <span className="text-sm font-medium group-hover:text-yellow-500 transition-colors">Track Services</span>
            </button>
            <button className="flex items-center gap-2 group">
              <MessageSquare className="w-5 h-5 text-gray-600 group-hover:text-yellow-500 transition-colors" />
              <span className="text-sm font-medium group-hover:text-yellow-500 transition-colors">Share Feedback</span>
            </button>
          </div>
        </nav>
      </div>
      </div> */}


  </div>





    
    
    
  )
}

export default Navbari