import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const isAuthenticated = localStorage.getItem("isAuthenticated");
  const userRole = localStorage.getItem("userRole");
  const [scrolled, setScrolled] = useState(false);

  let dashboardUrl = '/';
  if (userRole === 'restaurant') {
    dashboardUrl = '/rdashboard';
  } else if (userRole === 'volunteer') {
    dashboardUrl = '/vdashboard';
  } else if (userRole === 'admin') {
    dashboardUrl = '/Adashboard';
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`bg-white border-gray-500 dark:bg-gray-900 sticky top-0 z-10 ${scrolled ? 'sticky top-0 z-10': ''}`}style={{backgroundColor:'#cococo'}}>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2 bg-white-100">
        <a href="/" className="flex items-center">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkKTVOnHF6UeNn-mNoM3UICGDLsad8jP2Z9A&s" className="h-16" alt="Logo" />
        </a>
        <div className="flex md:order-3">
          {isAuthenticated ? (
            <a href={dashboardUrl}>
              <button
                type="button"
                className="  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-coffee font-medium rounded-lg text-sm px-4 py-2 text-center md:mr-0 dark:bg-coffee dark:hover:bg-coffee dark:focus:ring-blue-800"
                style={{ color: 'white' }}>
                Dashboard
              </button>
            </a>
          ) : (
            <>
              <a href='/login'>
                <button
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-coffee font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-coffee dark:hover:bg-coffee dark:focus:ring-blue-800"
                  style={{ color: 'white' }}
                >
                  Sign in
                </button>
              </a>

              <a href='/signup'>
                <button
                  type="button"
                  className="ml-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-coffee font-medium rounded-lg text-sm px-4 py-2 text-center md:mr-0 dark:bg-coffee dark:hover:bg-coffee dark:focus:ring-blue-800"
                  style={{ color: 'white' }}>
                  Get started
                </button>
              </a>
            </>
          )}
          <button
            data-collapse-toggle="navbar-cta"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-cta"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a href="/about" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                About
              </a>
            </li>
            <li>
              <a href="/services" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                Services
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

