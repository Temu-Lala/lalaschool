"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const links = [
    { id: 1, link: "home" },
    { id: 2, link: "courses" },
    { id: 3, link: "portfolio" },
    { id: 4, link: "contact" },
    { id: 5, link: "about" },
  ];

  const courses = [
    { id: 1, name: "HTML" },
    { id: 2, name: "CSS" },
    { id: 3, name: "JavaScript" },
    { id: 4, name: "Java" },
    { id: 5, name: "Tailwind" },
    { id: 6, name: "Python" },
    { id: 7, name: "Machine Learning" },
    { id: 8, name: "Others" },
  ];

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="flex justify-between items-center w-full h-16 px-4 z-50 text-white bg-black transition-all duration-300">
      <div>
        <h1 className="text-3xl font-signature ml-2">
          <a href="#" className="link-underline">
            Logo
          </a>
        </h1>
      </div>
      <ul className="hidden md:flex z-50 items-center space-x-4">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="relative px-4 z-50 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 hover:text-white duration-200"
          >
            {link === "courses" ? (
              <div
                onClick={handleDropdownToggle}
                className="flex items-center"
              >
                <span className="flex items-center">
                  Courses <FaChevronDown className="ml-1" />
                </span>
                {dropdownOpen && (
                  <ul className="absolute top-full left-0 mt-2   min-w-[200px]   bg-white text-black rounded-lg shadow-lg z-50 max-h-[50vh] overflow-auto">
                    {courses.map(({ id, name }) => (
                      <li
                        key={id}
                        className="px-4 py-2 hover:bg-gray-200   border border-cyan-100  xl:h-20 cursor-pointer"
                      >
                        <Link href={`/courses/${name.toLowerCase()}`}>
                          {name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ) : (
              <Link href={`/${link}`}>{link}</Link>
            )}
          </li>
        ))}
      </ul>
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-50 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {nav && (
        <ul className="flex z-50 flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="relative px-4 py-6 text-4xl"
              onClick={() => {
                if (link === "courses") {
                  handleDropdownToggle();
                } else {
                  setNav(false);
                }
              }}
            >
              {link === "courses" ? (
                <>
                  Courses
                  {dropdownOpen && (
                    <ul className="absolute top-full left-0 mt-2 w-[50vw] min-w-[200px] bg-white text-black rounded-lg shadow-lg z-50 max-h-[50vh] overflow-auto">
                      {courses.map(({ id, name }) => (
                        <li
                          key={id}
                          className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                        >
                          <Link href={`/courses/${name.toLowerCase()}`}>
                            {name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <Link href={`/${link}`} onClick={() => setNav(false)}>
                  {link}
                </Link>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
