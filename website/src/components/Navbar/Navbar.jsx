import React, { useState } from 'react';
import {Link} from 'react-router-dom'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-transparent ">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-800">
          <img src="./static/images/suraksha-name-and-logo.png" alt="" className="max-h-[50px] "/>
        </div>
        <div className="hidden md:flex space-x-8">
          <Link to="/Demo"><a className="text-gray-600 hover:text-gray-800">Demo</a></Link>
          <a  className="text-gray-600 hover:text-gray-800">Features</a>
          <a href="https://github.com/adavilalith/SURAKSHA" className="text-gray-600 hover:text-gray-800">Source Code</a>
          <a href="#about" className="text-gray-600 hover:text-gray-800">About Us</a>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 focus:outline-none">
            {isOpen ? '✖' : '☰'}
          </button>
        </div>
      </div>

      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-4 py-2 space-y-2">
        <Link to="/Demo"><a className="block text-gray-600 hover:text-gray-800">Demo</a></Link>
          <a  className="block text-gray-600 hover:text-gray-800">Features</a>
          <a href="https://github.com/adavilalith/SURAKSHA" className="block text-gray-600 hover:text-gray-800">Source Code</a>
          <a href="#about" className="block text-gray-600 hover:text-gray-800">About Us</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
