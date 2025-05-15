import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const Hero = ({ setActiveSection }) => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      setActiveSection('home');
    }
  }, [inView, setActiveSection]);

  return (
    <section 
      id="home" 
      ref={ref}
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
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
            Hi, I'm <span className="underline decoration-wavy">Alex</span>
          </motion.h1>
          
          <motion.h2 
            className="text-2xl md:text-4xl font-semibold mb-8 text-gray-700 dark:text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Creative Frontend Developer
          </motion.h2>
          
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
          </motion.div>
        </motion.div>

        <motion.div 
          className="mt-24 flex justify-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
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