import React from 'react';
import { Menu } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { navLinks } from '../../config/navigation';

const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link
      to={to}
      className={`hover:text-maize transition-colors ${
        isActive ? 'text-maize' : 'text-white'
      }`}
    >
      {children}
    </Link>
  );
};

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-prussian text-white py-4 px-6 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <Menu className="h-6 w-6" />
          <span className="text-xl font-bold">Lunchbox</span>
        </Link>
        
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <NavLink key={link.path} to={link.path}>
              {link.title}
            </NavLink>
          ))}
        </div>
        
        <div className="flex space-x-4">
          <button className="px-4 py-2 text-white hover:text-maize transition-colors">
            Login
          </button>
          <button className="px-4 py-2 bg-orange text-white rounded-md hover:bg-sienna transition-colors">
            Get Demo
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;