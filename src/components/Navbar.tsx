import React from 'react';
import { Menu } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-[#003049] text-white py-4 px-6 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Menu className="h-6 w-6" />
          <span className="text-xl font-bold">Lunchbox</span>
        </div>
        
        <div className="hidden md:flex space-x-8">
          <a href="#" className="hover:text-[#FCBF49]">Products</a>
          <a href="#" className="hover:text-[#FCBF49]">Features</a>
          <a href="#" className="hover:text-[#FCBF49]">Partners</a>
          <a href="#" className="hover:text-[#FCBF49]">Company</a>
        </div>
        
        <div className="flex space-x-4">
          <button className="px-4 py-2 text-white hover:text-[#FCBF49]">Login</button>
          <button className="px-4 py-2 bg-[#F77F00] text-white rounded-md hover:bg-[#e56b49]">
            Get Demo
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;