import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';

const texts = [
  { content: "Creative Front-end Developer", color: "text-blue-400 dark:text-blue-300" },
  { content: "Full-Stack Developer", color: "text-purple-400 dark:text-purple-300" },
  { content: "Web Developer  ", color: "text-pink-400 dark:text-pink-300" }
];
const Hero = ({ setActiveSection }) => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    if (inView) {
      setActiveSection('home');
    }
  }, [inView, setActiveSection]);

  useEffect(() => {
    const currentText = texts[currentTextIndex].content;
    let charIndex = 0;
    
    const typeWriter = setInterval(() => {
      setDisplayText(currentText.slice(0, charIndex));
      charIndex++;
      
      if (charIndex > currentText.length) {
        clearInterval(typeWriter);
        setTimeout(() => {
          setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typeWriter);
  }, [currentTextIndex]);
  
  return (
    <section 
      id="home" 
      ref={ref}
      className="min-h-screen dark:bg-gray-900 flex items-center justify-center relative overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-400 opacity-20 blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute top-1/3 right-1/4 w-72 h-72 rounded-full bg-purple-400 opacity-20 blur-3xl animate-blob" />
        <div className="absolute bottom-1/4 left-1/2 w-80 h-80 rounded-full bg-pink-400 opacity-20 blur-3xl animate-blob animation-delay-4000" />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-24 z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
            whileHover={{ scale: 1.02 }}
          >
            Hi, I'm <span className="underline decoration-wavy">Dipesh Khodaskar</span>
          </motion.h1>
          
          {/* Animated Text Section */}
          <motion.div 
            className="text-2xl md:text-4xl font-semibold mb-8 h-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          ><span className="text-gray-600 dark:text-gray-300">And I'm a </span>
            <span className={texts[currentTextIndex].color}>
              {displayText}
              <motion.span
                animate={{ opacity: [0, 1] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="ml-1"
              >
                
              </motion.span>
              
            </span>
          </motion.div>

          
          <motion.p 
            className="text-lg md:text-xl max-w-2xl mx-auto mb-12 text-gray-600 dark:text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            I craft immersive digital experiences with modern web technologies and thoughtful design.
          </motion.p>
          
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <motion.a
              href="#projects"
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.a>
            
            <motion.a
              href="#contact"
              className="px-8 py-3 border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 rounded-full font-medium hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>

            {/* Resume Download Button */}
            <motion.a
              href="src/assets/images/Dipesh-KhodaskarR.pdf"
              download
              className="px-8 py-3 bg-green-600 text-white rounded-full font-medium shadow-lg hover:bg-green-700 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download Resume
            </motion.a>
          </motion.div>

          {/* Social Links Section */}
          <motion.div
            className="flex justify-center gap-6 mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <motion.a
              href="https://www.linkedin.com/in/dipesh-khodaskar-a52b9b223/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              whileHover={{ scale: 1.2 }}
            >
              <span className="sr-only">LinkedIn</span>
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </motion.a>

            <motion.a
              href="https://github.com/dipeshkhodaskar?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
              whileHover={{ scale: 1.2 }}
            >
              <span className="sr-only">GitHub</span>
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </motion.a>

            <motion.a
              href="https://x.com/DipeshKhodaskar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-600 dark:text-gray-400 hover:text-pink-600 dark:hover:text-pink-400 transition-colors "
              whileHover={{ scale: 1.2 }}
            >
              <span className="sr-only">Twitter</span>
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
              </svg>
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div 
          className="mt-24 flex justify-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <div className="relative w-16 h-16">
            <div className="absolute inset-0 border-2 border-blue-400 rounded-full animate-spin-slow" />
            <div className="absolute inset-2 border-2 border-purple-400 rounded-full animate-spin-slow-reverse" />
            <div className="absolute inset-4 border-2 border-pink-400 rounded-full animate-spin-slow" />
            <div className="absolute inset-6 border-2 border-blue-400 rounded-full animate-spin-slow-reverse" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;