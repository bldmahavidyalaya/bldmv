import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Administration', path: '/administration' },
    { name: 'Academics', path: '/academics' },
    { name: 'Admissions', path: '/admissions' },
    { name: 'Student Life', path: '/student-life' },
    { name: 'Contact', path: '/contact' },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    alert(`searching for: ${searchQuery}`);
  };

  return (
    <div className="flex flex-col w-full">
      {/* Top Bar - Govt Info */}
      <div className="bg-secondary text-white text-xs py-1 px-4 text-center">
        <p>Recognized by Govt. of Maharashtra | ISO 9001:2015 Certified</p>
      </div>

      {/* Main Header Section */}
      <div className="bg-white py-4 shadow-sm relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">

            {/* LEFT LOGO */}
            <div className="flex-shrink-0 flex flex-col items-center">
              <img
                src="/images/college-logo.png" // your logo here
                alt="College Logo"
                className="h-20 w-20 object-contain rounded-full border-2 border-primary"
              />
            </div>

            {/* CENTER TITLE */}
            <div className="text-center flex-grow">
              <h1 className="text-5xl lg:text-6xl font-serif tracking-tight text-green-900 font-extrabold drop-shadow-[0_4px_6px_rgba(0,0,0,0.4)]">
                B.L.D. Mahavidyalaya
              </h1>

              <h2 className="text-sm md:text-lg font-semibold text-gray-700 mt-1">
                Dnyandeep Prashaskiya Mahavidyalaya
              </h2>

              <p className="text-xs md:text-sm text-gray-500 mt-1 max-w-2xl mx-auto">
                Affiliated to Kavikulaguru Kalidas Sanskrit University, Ramtek
              </p>

              <p className="text-xs   font-bold mt-1 text-green-900">(College Code: 1234)</p>
            </div>

            {/* RIGHT LOGO */}
            <div className="flex-shrink-0 flex flex-col items-center">
              <img
                src="/logo/kksu.png" // your logo here
                alt="University Logo"
                className="h-20 w-20 object-contain rounded-full border-2 border-gray-300"
              />

            </div>

          </div>
        </div>
      </div>

      {/* NAVBAR */}
      <nav className="bg-primary shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-14">

            {/* DESKTOP MENU */}
            <div className="hidden lg:flex items-center justify-center w-full space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="text-secondary hover:bg-secondary hover:text-white px-3 py-2 rounded-md text-sm font-bold uppercase transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* SEARCH + MOBILE BUTTON */}
            <div className="flex items-center justify-between w-full lg:w-auto lg:absolute lg:right-4 lg:top-2.5">

              {/* MOBILE MENU BUTTON */}
              <div className="flex items-center lg:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="inline-flex items-center justify-center p-2 rounded-md text-secondary hover:bg-secondary hover:text-white"
                >
                  {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                  <span className="ml-2 font-bold">MENU</span>
                </button>
              </div>

              {/* DESKTOP SEARCH */}
              <div className="hidden lg:flex items-center ml-4">
                <form onSubmit={handleSearch} className="relative">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="pl-8 pr-4 py-1 border border-secondary/30 rounded-full text-sm 
                               focus:outline-none focus:ring-2 focus:ring-secondary 
                               w-40 transition-all focus:w-64 bg-white/90"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <Search className="absolute left-2.5 top-1.5 h-4 w-4 text-gray-500" />
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* MOBILE MENU */}
        {isOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 
                             hover:text-white hover:bg-secondary"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              {/* MOBILE SEARCH */}
              <form onSubmit={handleSearch} className="px-3 py-2 relative mt-2">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full pl-8 pr-4 py-2 border border-gray-300 rounded-md text-sm 
                             focus:outline-none focus:ring-2 focus:ring-primary"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search className="absolute left-5 top-4 h-4 w-4 text-gray-400" />
              </form>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
