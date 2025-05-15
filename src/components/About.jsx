import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const About = ({ setActiveSection }) => {
  const [ref, inView] = useInView({
    threshold: 0.3,
  });

  useEffect(() => {
    if (inView) {
      setActiveSection('about');
    }
  }, [inView, setActiveSection]);

  return (
    <section 
      id="about" 
      ref={ref}
      className="py-24 bg-white dark:bg-gray-900 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-800 dark:text-white">
            About <span className="text-blue-600 dark:text-blue-400">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6" />
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Get to know more about who I am and what I do
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-blue-400 to-purple-400 opacity-20 blur-xl" />
              <div className="relative rounded-xl overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl">
                <img 
                  src="/profile.jpg" 
                  alt="Profile" 
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                <span>5+ Years</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
              Who am I?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              I'm a passionate frontend developer with over 5 years of experience creating modern, responsive, and user-friendly web applications. I specialize in React.js, Next.js, and modern JavaScript frameworks.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              My approach combines technical expertise with an eye for design, ensuring that the applications I build are not only functional but also visually appealing and intuitive to use.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
                <h4 className="font-bold text-gray-800 dark:text-white mb-2">Name:</h4>
                <p className="text-gray-600 dark:text-gray-400">Alex Johnson</p>
              </div>
              <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
                <h4 className="font-bold text-gray-800 dark:text-white mb-2">Email:</h4>
                <p className="text-gray-600 dark:text-gray-400">alex@example.com</p>
              </div>
              <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
                <h4 className="font-bold text-gray-800 dark:text-white mb-2">From:</h4>
                <p className="text-gray-600 dark:text-gray-400">San Francisco, CA</p>
              </div>
              <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
                <h4 className="font-bold text-gray-800 dark:text-white mb-2">Freelance:</h4>
                <p className="text-gray-600 dark:text-gray-400">Available</p>
              </div>
            </div>
            <motion.a
              href="#contact"
              className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;