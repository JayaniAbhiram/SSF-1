// src/components/Sidebar.js
import React from 'react';

const Sidebar = ({ onPageClick }) => {
  const pages = ['Dashboard', 'Pending Collections', 'Previous Collections','Profile'];
  const handleLogout = () => {
    // Add your logout functionality here
    localStorage.removeItem("isAuthenticated");
    window.location.href = '/login';
  };

  return (
    <aside className="bg-gray-800 h-screen w-64">
      <div className="flex items-center justify-center mt-10 h-48 w-48">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkKTVOnHF6UeNn-mNoM3UICGDLsad8jP2Z9A&s" alt="logo" />
      </div>
      <nav className="mt-10">
        {pages.map((page) => (
          <p
            key={page}
            onClick={() => onPageClick(page)}
            className="cursor-pointer text-gray-300 hover:bg-gray-700 hover:text-white py-2 px-4"
          >
            {page}
          </p>
        ))}
      </nav>
      <button
          onClick={handleLogout}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-coffee font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-coffee dark:hover-bg-coffee dark:focus:ring-blue-800"
          style={{ color: 'white' }}
        >
          Logout
        </button>
    </aside>
  );
};

export default Sidebar;
