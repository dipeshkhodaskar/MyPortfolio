import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiArrowUp, FiSun, FiMoon } from 'react-icons/fi';

const Footer = ({ darkMode, toggleDarkMode }) => {
  const currentYear = new Date().getFullYear();
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const socialLinks = [
    { icon: <FiGithub />, url: 'https://github.com' },
    { icon: <FiLinkedin />, url: 'https://linkedin.com' },
    { icon: <FiMail />, url: 'mailto:contact@example.com' }
  ];

  return (
    <footer className={`relative ${darkMode ? 'bg-gray-900' : 'bg-gray-100'} transition-colors duration-300`}>
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Top Section */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
              John Doe
            </h2>
            <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} text-sm`}>
              Creating digital experiences that matter
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className={`p-2 rounded-full ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'} shadow-sm`}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className={`text-lg font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Quick Links
            </h3>
            <ul className="space-y-2">
              {['About', 'Projects', 'Skills', 'Contact'].map((link, index) => (
                <li key={index}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className={`text-sm hover:text-blue-500 transition-colors ${
                      darkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className={`text-lg font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Stay Updated
            </h3>
            <form className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className={`px-4 py-2 rounded-lg text-sm focus:outline-none focus:ring-2 ${
                  darkMode 
                    ? 'bg-gray-800 text-white focus:ring-blue-500' 
                    : 'bg-white text-gray-900 focus:ring-blue-400'
                }`}
              />
              <button
                type="submit"
                className={`px-4 py-2 text-sm rounded-lg transition-colors ${
                  darkMode
                    ? 'bg-blue-600 hover:bg-blue-700 text-white'
                    : 'bg-blue-500 hover:bg-blue-600 text-white'
                }`}
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className={`text-lg font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Contact
            </h3>
            <ul className={`space-y-2 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              <li>New York, NY</li>
              <li>contact@example.com</li>
              <li>+1 (555) 123-4567</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className={`border-t pt-8 flex flex-col md:flex-row items-center justify-between ${
          darkMode ? 'border-gray-800' : 'border-gray-200'
        }`}>
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a href="/privacy" className={`text-sm hover:text-blue-500 ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Privacy Policy
            </a>
            <a href="/terms" className={`text-sm hover:text-blue-500 ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Terms of Service
            </a>
          </div>

          <div className="flex items-center space-x-6">
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-full transition-colors ${
                darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-200'
              }`}
            >
              {darkMode ? <FiSun className="text-white" /> : <FiMoon className="text-gray-900" />}
            </button>
            
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.05 }}
              className={`p-2 rounded-full ${
                darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
              } shadow-sm`}
            >
              <FiArrowUp />
            </motion.button>
          </div>
        </div>

        {/* Copyright */}
        <div className={`mt-8 text-center text-sm ${
          darkMode ? 'text-gray-500' : 'text-gray-600'
        }`}>
          <p>
            © {currentYear} John Doe. All rights reserved.
            <span className="block md:inline mt-2 md:mt-0 md:ml-2">
              Built with React, Tailwind CSS, and ❤️
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;