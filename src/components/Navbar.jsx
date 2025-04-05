import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { MdMenu } from 'react-icons/md';
import { IoIosLogOut } from 'react-icons/io';
import logo from '../assets/logo2.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const handleLogout = () => {
    // Add your logout logic here
    alert('Logged out!');
  };

  return (
    <nav className="w-full bg-blue-700 text-white shadow-md px-6 py-4 flex items-center justify-between">
      {/* Left: Logo and College Name */}
      <div className="flex items-center space-x-3">
        <img
          src={logo} // replace with your actual logo path
          alt="College Logo"
          className="w-10 h-10 object-contain rounded-full"
        />
        <span className="text-xl font-semibold ">IIIT Bhopal</span>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-6">
        <Link to="/home" className="">
          Schedule
        </Link>
        {/* Profile Dropdown */}
        <div className="relative">
          <button onClick={toggleDropdown} className="flex items-center">
            <FaUserCircle className="mr-2 text-xl" />
            <span>John Doe</span> {/* Replace with dynamic user data */}
          </button>
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white text-black shadow-lg rounded-lg">
              <Link to="/profile" className="block px-4 py-2">Profile</Link>
              <button onClick={handleLogout} className="block w-full text-left px-4 py-2 text-red-600">
                <IoIosLogOut className="mr-2 inline" />
                Logout
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Menu Button */}
      <button className="md:hidden" onClick={toggleMenu}>
        <MdMenu className="text-2xl" />
      </button>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white shadow-md space-y-4 py-4 px-6">
          <Link to="/Home" className="block text-gray-600">
            Schedule
          </Link>

          {/* Mobile Profile Dropdown */}
          <div className="relative">
            <button onClick={toggleDropdown} className="flex items-center  text-gray-600 w-full">
              <FaUserCircle className="mr-2 text-xl" />
              <span>John Doe</span> {/* Replace with dynamic user data */}
            </button>
            {isDropdownOpen && (
              <div className="absolute left-0 mt-2 w-full bg-white text-black shadow-lg rounded-lg">
                <Link to="/profile" className="block px-4 py-2">Profile</Link>
                <button onClick={handleLogout} className="block w-full text-left px-4 py-2 text-red-600">
                  <IoIosLogOut className="mr-2 inline" />
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
