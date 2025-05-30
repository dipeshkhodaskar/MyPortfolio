import { motion } from 'framer-motion';
import { FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react';

const Header = ({ darkMode, toggleDarkMode, activeSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <motion.header 
      className="fixed w-full z-40 backdrop-blur-md bg-stone-400 dark:bg-gray-800/80 shadow-sm"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100 }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <motion.a 
          href="#home" 
          className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          whileHover={{ scale: 1.05 }}
        >
          Portfolio
        </motion.a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex gap-8">
            {navItems.map((item) => (
              <li key={item.id}>
                <motion.a
                  href={`#${item.id}`}
                  className={`relative px-2 py-1 ${activeSection === item.id ? 'text-blue-600 dark:text-blue-400 font-medium' : 'text-gray-700 dark:text-gray-300'}`}
                  whileHover={{ scale: 1.1 }}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.span 
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 dark:bg-blue-400"
                      layoutId="underline"
                    />
                  )}
                </motion.a>
              </li>
            ))}
          </ul>

          {/* Dark Mode Toggle */}
          <motion.button
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
            whileTap={{ scale: 0.9 }}
          >
            {darkMode ? (
              <FaSun className="text-yellow-400" />
            ) : (
              <FaMoon className="text-gray-700" />
            )}
          </motion.button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <FaTimes className="text-gray-700 dark:text-gray-300 text-xl" />
          ) : (
            <FaBars className="text-gray-700 dark:text-gray-300 text-xl" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
  <motion.div 
    className="md:hidden fixed inset-0 bg-white dark:bg-gray-900 z-30 pt-24 px-6"
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
  >
    {/* Close button */}
    <button 
      className="absolute top-6 right-6 p-2"
      onClick={() => setMobileMenuOpen(false)}
    >
      <FaTimes className="text-xl text-gray-700 dark:text-gray-300" />
    </button>

    <ul className="flex flex-col bg-zinc-300 dark:bg-zinc-800 gap-6 p-4 rounded-lg">
      {navItems.map((item) => (
        <li key={item.id}>
          <motion.a
            href={`#${item.id}`}
            className={`block text-2xl ${
              activeSection === item.id 
                ? 'text-blue-600 dark:text-blue-400 font-medium' 
                : 'text-gray-700 dark:text-gray-300'
            }`}
            onClick={(e) => {
              e.preventDefault();
              setMobileMenuOpen(false);
              // Optional: scroll to section after a small delay
              setTimeout(() => {
                const element = document.getElementById(item.id);
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }, 100);
            }}
            whileHover={{ x: 10 }}
          >
            {item.label}
          </motion.a>
        </li>
      ))}
    </ul>

    <div className="mt-8 flex justify-center">
      <motion.button
        onClick={toggleDarkMode}
        className="p-3 rounded-full bg-gray-400 dark:bg-gray-700"
        whileTap={{ scale: 0.9 }}
      >
        {darkMode ? (
          <FaSun className="text-yellow-400 text-xl" />
        ) : (
          <FaMoon className="text-gray-700 text-xl" />
        )}
      </motion.button>
    </div>
  </motion.div>
)}
    </motion.header>
  );
};

export default Header;