import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiFacebook, FiInstagram, FiMail, FiArrowUp, FiSun, FiMoon } from 'react-icons/fi';

const Footer = ({ darkMode, toggleDarkMode }) => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: <FiGithub />, url: 'https://github.com/yourusername' },
    { icon: <FiLinkedin />, url: 'https://linkedin.com/in/yourusername' },
    { icon: <FiTwitter />, url: 'https://twitter.com/yourusername' },
    { icon: <FiFacebook />, url: 'https://facebook.com/yourusername' },
    { icon: <FiInstagram />, url: 'https://instagram.com/yourusername' },
    { icon: <FiMail />, url: 'mailto:contact@example.com' },
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-stone-600 text-gray-900'} transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {/* Brand Section */}
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold mb-3">Dipesh Khodaskar</h2>
            <p className="text-sm mb-3">Crafting engaging digital experiences.</p>
            <form className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className={`px-3 py-2 rounded-lg text-sm focus:outline-none ${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-300 text-gray-900'}`}
              />
              <button
                type="submit"
                className={`px-3 py-2 text-sm rounded-lg transition-colors ${darkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-400 hover:bg-blue-500'} text-white`}
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Quick Links */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
            <div className="grid grid-cols-2 gap-3">
              {quickLinks.map((link, index) => (
                <a key={index} href={link.href} className="text-sm hover:text-blue-500 transition-colors">
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Contact</h3>
            <ul className={`text-sm text-lg space-y-1 ${darkMode ? 'text-gray-300' : 'text-gray-900'}`}>
              <li>Near-Warje Jakat Naka</li>
              <li>Pune, Maharashtra, India</li>
              <li>dipeshvkhodaskar12@gmail.com</li>
              <li>+91 9607355528</li>
            </ul>
          </div>
        </div>

        
        {/* Social Links */}
        <div className="mt-2 flex justify-center gap-4">
          
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

        {/* Copyright */}
        <div className="mt-4 text-center text-sm">
          <p>© {currentYear} Dipesh Khodaskar. All rights reserved.</p>
        </div>
      </div>

      
    </footer>
  );
};

export default Footer;