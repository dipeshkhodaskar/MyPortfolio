import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { FiSun, FiMoon, FiCheckCircle, FiMail, FiLinkedin, FiGithub, FiSend, FiX } from 'react-icons/fi';
import { FaTelegramPlane } from 'react-icons/fa';
import '../styles/global.css'
const Contact = ({ darkMode, toggleDarkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    newsletter: false,
    file: null
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [progress, setProgress] = useState(100);
  const [shake, setShake] = useState(false);
  const [typingText, setTypingText] = useState('');
  const [viewportSize, setViewportSize] = useState({ width: 0, height: 0 });
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const fullText = "Let's Collaborate";
  const socialLinks = [
    { icon: <FiGithub />, url: 'https://github.com', color: 'bg-gray-700' },
    { icon: <FiLinkedin />, url: 'https://linkedin.com', color: 'bg-blue-600' },
    { icon: <FaTelegramPlane />, url: 'https://telegram.org', color: 'bg-blue-400' },
    { icon: <FiMail />, url: 'mailto:contact@example.com', color: 'bg-red-500' }
  ];

  useEffect(() => {
    // Typing animation effect
    let currentIndex = 0;
    const typeText = () => {
      if (currentIndex < fullText.length) {
        setTypingText(fullText.slice(0, currentIndex + 1));
        currentIndex++;
        setTimeout(typeText, 100);
      }
    };
    if (isInView) typeText();
  }, [isInView]);

  useEffect(() => {
    // Viewport size tracking for floating elements
    const updateViewport = () => {
      setViewportSize({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener('resize', updateViewport);
    updateViewport();
    return () => window.removeEventListener('resize', updateViewport);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setSubmitted(true);
    setIsSubmitting(false);
    setFormData({ name: '', email: '', message: '', newsletter: false, file: null });
    
    const interval = setInterval(() => setProgress(p => Math.max(0, p - 1)), 30);
    setTimeout(() => {
      clearInterval(interval);
      setSubmitted(false);
      setProgress(100);
    }, 3000);
  };

  const validateForm = () => {
    const isValid = formData.name && isValidEmail(formData.email) && formData.message;
    if (!isValid) triggerValidationError();
    return isValid;
  };

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const triggerValidationError = () => {
    setShake(true);
    setTimeout(() => setShake(false), 500);
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file?.size > 5 * 1024 * 1024) {
      alert('File size must be less than 5MB');
      return;
    }
    setFormData({ ...formData, file });
  };

  const FloatingBackgroundElement = ({ x, y }) => (
    <motion.div
      className={`absolute w-8 h-8 rounded-full blur-xl opacity-20 ${
        darkMode ? 'bg-blue-400' : 'bg-blue-200'
      }`}
      initial={{ x, y, scale: 0 }}
      animate={{ 
        scale: [0, 1, 0.5],
        rotate: [0, 180],
        opacity: [0, 0.3, 0]
      }}
      transition={{ 
        duration: Math.random() * 4 + 8,
        repeat: Infinity,
        repeatType: 'loop'
      }}
    />
  );

  return (
    <section id="contact" ref={ref} className={`relative py-16 px-4 transition-colors duration-300 ${
      darkMode ? 'bg-gray-900' : 'bg-gray-50'
    }`}>
      {/* Floating background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 15 }).map((_, i) => (
          <FloatingBackgroundElement
            key={i}
            x={Math.random() * viewportSize.width}
            y={Math.random() * viewportSize.height}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative">
        <div className="flex justify-between items-center mb-12 px-4">
          <h2 className={`text-4xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
            {typingText}<span className="blinking-cursor">|</span>
          </h2>
          <button
            onClick={toggleDarkMode}
            className={`p-3 rounded-full transition-all duration-300 ${
              darkMode ? 'text-white hover:bg-gray-700' : 'text-gray-800 hover:bg-gray-200'
            }`}
          >
            {darkMode ? <FiSun size={26} /> : <FiMoon size={26} />}
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Social Links Card */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className={`p-8 rounded-2xl shadow-lg backdrop-blur-lg ${
              darkMode ? 'bg-gray-800/80' : 'bg-white/80'
            }`}
          >
            <h3 className={`text-xl font-semibold mb-6 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
              Connect Through
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  className={`group relative p-4 rounded-lg overflow-hidden transition-all duration-300 ${
                    darkMode ? 'hover:bg-gray-700/50' : 'hover:bg-gray-100'
                  }`}
                >
                  <div className={`absolute inset-0 ${link.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                  <div className="flex items-center space-x-3 relative">
                    <span className={`text-2xl ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                      {link.icon}
                    </span>
                    <span className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      {link.url.split('/').pop()}
                    </span>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Enhanced Contact Form */}
          <motion.form 
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className={`p-8 rounded-2xl shadow-lg backdrop-blur-lg ${
              darkMode ? 'bg-gray-800/80' : 'bg-white/80'
            }`}
          >
            <div className="space-y-6">
              {/* File Upload */}
              <div className="relative group">
                <label className={`flex flex-col items-center justify-center border-2 border-dashed rounded-lg p-6 cursor-pointer transition-colors duration-300 ${
                  darkMode 
                    ? 'border-gray-600 hover:border-blue-500 bg-gray-700/50' 
                    : 'border-gray-300 hover:border-blue-500 bg-gray-50'
                }`}>
                  <input
                    type="file"
                    onChange={handleFileUpload}
                    className="hidden"
                    accept=".pdf,.doc,.docx"
                  />
                  <div className={`text-center ${
                    darkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    <FiSend className="w-8 h-8 mx-auto mb-2" />
                    <p className="text-sm">
                      {formData.file 
                        ? formData.file.name 
                        : 'Drag & drop or click to upload file (max 5MB)'}
                    </p>
                    {formData.file && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setFormData({ ...formData, file: null });
                        }}
                        className="mt-2 text-red-500 hover:text-red-600 flex items-center justify-center"
                      >
                        <FiX className="mr-1" /> Remove File
                      </button>
                    )}
                  </div>
                </label>
              </div>

              {/* Real-time Validation Inputs */}
              <div className="space-y-6">
                {['name', 'email', 'message'].map((field, index) => (
                  <div key={field} className="relative">
                    {field !== 'message' ? (
                      <input
                        type={field === 'email' ? 'email' : 'text'}
                        value={formData[field]}
                        onChange={(e) => setFormData({ ...formData, [field]: e.target.value })}
                        className={`w-full p-3 rounded-lg transition-all duration-300 peer ${
                          darkMode
                            ? 'bg-gray-700 border-gray-600 text-white focus:border-blue-500'
                            : 'bg-gray-50 border-gray-300 text-gray-800 focus:border-blue-500'
                        } ${field === 'email' && !isValidEmail(formData.email) && formData.email 
                          ? 'border-red-500' : ''}`}
                      />
                    ) : (
                      <textarea
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        rows="4"
                        className={`w-full p-3 rounded-lg transition-all duration-300 peer ${
                          darkMode
                            ? 'bg-gray-700 border-gray-600 text-white focus:border-blue-500'
                            : 'bg-gray-50 border-gray-300 text-gray-800 focus:border-blue-500'
                        }`}
                      />
                    )}
                    <label className={`absolute left-3 transition-all duration-300 peer-focus:-top-3 peer-focus:text-sm ${
                      formData[field] ? '-top-3 text-sm' : 'top-3'
                    } ${darkMode 
                      ? 'text-gray-400 peer-focus:text-blue-400' 
                      : 'text-gray-500 peer-focus:text-blue-600'
                    }`}>
                      {field.charAt(0).toUpperCase() + field.slice(1)}
                    </label>
                    {field === 'email' && formData.email && !isValidEmail(formData.email) && (
                      <span className="absolute right-3 top-3 text-red-500 text-sm">
                        Invalid email
                      </span>
                    )}
                  </div>
                ))}
              </div>

              {/* Enhanced Submit Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 px-6 rounded-lg font-medium flex items-center justify-center space-x-2 transition-all duration-300 ${
                  darkMode
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white'
                    : 'bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white'
                } ${shake && 'animate-shake'}`}
              >
                {isSubmitting ? (
                  <div className="flex items-center space-x-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Sending...</span>
                  </div>
                ) : (
                  <>
                    <FiSend className="text-lg" />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>
            </div>
          </motion.form>
        </div>

        {/* Advanced Success Toast */}
        <AnimatePresence>
          {submitted && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className={`fixed bottom-8 right-8 p-4 rounded-lg shadow-lg backdrop-blur-lg flex flex-col space-y-2 ${
                darkMode ? 'bg-gray-800/80 text-green-400' : 'bg-white/80 text-green-600'
              }`}
            >
              <div className="flex items-center space-x-2">
                <FiCheckCircle size={24} />
                <span>Message delivered successfully!</span>
              </div>
              <div className="h-1 bg-gray-200/50 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: '100%' }}
                  animate={{ width: '0%' }}
                  transition={{ duration: 3 }}
                  className={`h-full ${darkMode ? 'bg-green-400' : 'bg-green-600'}`}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Contact;