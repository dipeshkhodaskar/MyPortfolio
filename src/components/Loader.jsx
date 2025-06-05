import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';

const NamasteLoader = () => {
  const [progress, setProgress] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    // Simulate loading progress
    const progressInterval = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 5 : 100));
    }, 200);

    // Animate hands coming together
    controls.start({
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 20 }
    });

    return () => clearInterval(progressInterval);
  }, [controls]);

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 overflow-hidden p-6">
      
      {/* === Animated Namaste Hands (SVG) === */}
      <div className="relative w-32 h-32 mb-8 flex items-center justify-center">
        {/* Left Hand */}
        <motion.svg
          width="60"
          height="60"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute left-0 z-10"
          initial={{ x: -40, opacity: 0 }}
          animate={controls}
        >
          <path
            d="M12 2C6.48 2 2 6.48 2 12V22H12C17.52 22 22 17.52 22 12V2H12Z"
            fill="currentColor"
            className="text-blue-500 dark:text-blue-400"
          />
          <path
            d="M7 10C7 8.34 8.34 7 10 7H14C15.66 7 17 8.34 17 10V14C17 15.66 15.66 17 14 17H10C8.34 17 7 15.66 7 14V10Z"
            fill="currentColor"
            className="text-white dark:text-gray-100"
          />
        </motion.svg>

        {/* Right Hand */}
        <motion.svg
          width="60"
          height="60"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute right-0 z-10"
          initial={{ x: 40, opacity: 0 }}
          animate={controls}
        >
          <path
            d="M12 2C17.52 2 22 6.48 22 12V22H12C6.48 22 2 17.52 2 12V2H12Z"
            fill="currentColor"
            className="text-purple-500 dark:text-purple-400"
          />
          <path
            d="M7 10C7 8.34 8.34 7 10 7H14C15.66 7 17 8.34 17 10V14C17 15.66 15.66 17 14 17H10C8.34 17 7 15.66 7 14V10Z"
            fill="currentColor"
            className="text-white dark:text-gray-100"
          />
        </motion.svg>

        {/* Glow Effect (Pulsing) */}
        <motion.div
          className="absolute w-24 h-24 rounded-full bg-blue-400/20 dark:bg-purple-400/20"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1.2, opacity: 0.4 }}
          transition={{ repeat: Infinity, repeatType: "reverse", duration: 1.5 }}
        />
      </div>

      {/* === Gradient Welcome Text (Dynamic Color Shift) === */}
      <motion.h1
        className="text-3xl md:text-4xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        Welcome to My Portfolio
      </motion.h1>

      {/* === Subtle Subtitle (Typing Animation) === */}
      <motion.p
        className="text-gray-600 dark:text-gray-300 mb-8 text-center max-w-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        {["Building digital experiences...", "Crafting with code & design..."][progress % 2]}
      </motion.p>

      {/* === Modern Progress Bar (Glass Morphism) === */}
      <motion.div
        className="w-full max-w-xs h-3 bg-gray-200/70 dark:bg-gray-700/70 backdrop-blur-sm rounded-full overflow-hidden mb-4 border border-gray-300/30 dark:border-gray-600/30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <motion.div
          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>

      {/* === Dynamic Thank You Message === */}
      {progress >= 100 && (
        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-lg text-gray-500 dark:text-gray-400 mb-2">
            Ready to explore!
          </p>
          <motion.div
            className="w-8 h-8 border-2 border-blue-500 dark:border-purple-400 border-t-transparent rounded-full"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
          />
        </motion.div>
      )}
    </div>
  );
};

export default NamasteLoader;