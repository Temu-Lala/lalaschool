"use client"
import { useState } from 'react';

const Sidebar = ({ isOpen, onToggle }) => {
  return (
    <div className={`flex flex-col ${isOpen ? 'w-64' : 'w-20'} h-screen bg-gray-50 dark:bg-gray-800 transition-width duration-300 fixed top-0 left-0 z-40`}>
      <button
        onClick={onToggle}
        className="p-2 mt-2 text-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:focus:ring-gray-600 self-end mr-2"
      >
        <span className="sr-only">Toggle Sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M3 4.5A1.5 1.5 0 014.5 3h11a1.5 1.5 0 010 3h-11A1.5 1.5 0 013 4.5zm0 6A1.5 1.5 0 014.5 9h7a1.5 1.5 0 010 3h-7A1.5 1.5 0 013 10.5zm1.5 6a1.5 1.5 0 100-3h4a1.5 1.5 0 100 3h-4z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div className="flex flex-col space-y-4 px-3 py-4 overflow-y-auto">
        <ul className="space-y-2">
          <li>
            <a
              href="#"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <svg
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 21"
              >
                <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
              </svg>
              <span className={`ml-3 ${!isOpen && 'hidden'}`}>Dashboard</span>
            </a>
          </li>
          {/* Add other list items similarly */}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
