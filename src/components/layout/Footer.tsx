import React from 'react';
import { footerLinks } from '../../config/navigation';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Lunchbox</h3>
            <p className="text-grayblue">
              Enterprise restaurant solutions for the modern age.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-maize hover:text-orange">
                <Mail size={20} />
              </a>
              <a href="#" className="text-maize hover:text-orange">
                <Phone size={20} />
              </a>
              <a href="#" className="text-maize hover:text-orange">
                <MapPin size={20} />
              </a>
            </div>
          </div>

          {/* Navigation Sections */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-lg font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-grayblue hover:text-maize transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-grayblue/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-grayblue">
              © {new Date().getFullYear()} Lunchbox. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-grayblue hover:text-maize">
                Privacy Policy
              </a>
              <a href="#" className="text-grayblue hover:text-maize">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;