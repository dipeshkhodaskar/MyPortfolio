import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';
import { FaCode, FaPalette, FaServer, FaTools } from 'react-icons/fa';

const Skills = ({ darkMode,setActiveSection }) => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: false
  });

  useEffect(() => {
    if (inView) {
      setActiveSection('skills');
    }
  }, [inView, setActiveSection]);
  const [activeCategory, setActiveCategory] = useState('all');

  const skillCategories = [
    {
      id: 'frontend',
      name: 'Frontend',
      icon: <FaCode className="mr-2" />,
      skills: [
        { name: "HTML", level: 95 },
        { name: "CSS", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "React", level: 80 },
        { name: "Tailwind CSS", level: 85 },
        { name: "TypeScript", level: 75 }
      ]
    },
    {
      id: 'design',
      name: 'Design',
      icon: <FaPalette className="mr-2" />,
      skills: [
        { name: "Figma", level: 70 },
        { name: "Photoshop", level: 60 }
      ]
    },
    {
      id: 'backend',
      name: 'Backend',
      icon: <FaServer className="mr-2" />,
      skills: [
        { name: "Node.js", level: 75 },
        { name: "Express", level: 70 },
        { name: "MongoDB", level: 65 },
        { name: "MySql", level: 80 },
        { name: "Firebase", level: 60 }
      ]
    },
    {
      id: 'tools',
      name: 'Tools',
      icon: <FaTools className="mr-2" />,
      skills: [
        { name: "Git", level: 80 },
        { name: "VS Code", level: 90 },
        { name: "Github", level: 90 },
        { name: "IntelliJ IDEA", level: 70 }
      ]
    }
  ];

  const allSkills = skillCategories.flatMap(category => category.skills);
  const displayedSkills = activeCategory === 'all' 
    ? allSkills 
    : skillCategories.find(cat => cat.id === activeCategory)?.skills || [];

  return (
    <section 
      id="skills" 
      ref={ref}
      className={`py-20  dark:bg-gray-900 transition-colors duration-300`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{ duration: 0.6 }}
  className="text-center mb-12"
>
          <h2 className={`text-3xl md:text-4xl dark:text-white font-bold mb-4 ` }>
            My <span className="text-cyan-600">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-cyan-600 mx-auto mb-6"></div>
          <p className={`text-lg max-w-2xl mx-auto dark:text-gray-400 text-gray-600}`}>
            Technologies and tools I work with to create amazing digital experiences
          </p>
        </motion.div>

        {/* Skill Category Filter */}
        <motion.div 
          className="flex flex-wrap justify-center gap-2 mb-12"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-full flex items-center ${activeCategory === 'all' 
              ? 'bg-cyan-600 text-white' 
              : darkMode ? 'bg-gray-700 text-gray-300' : 'bg-white text-gray-700 shadow-sm'}`}
          >
            All Skills
          </button>
          {skillCategories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full flex items-center ${activeCategory === category.id 
                ? 'bg-cyan-600 text-white' 
                : darkMode ? 'bg-gray-700 text-gray-300' : 'bg-white text-gray-700 shadow-sm'}`}
            >
              {category.icon}
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          {displayedSkills.map((skill, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 + (index * 0.1), duration: 0.5 }}
              className={`p-6 rounded-xl dark:bg-gray-800 bg-white shadow-md`}
            >
              <div className="flex justify-between items-center mb-3">
                <h3 className={`font-medium dark:text-white text-gray-800`}>
                  {skill.name}
                </h3>
                <span className={`dark:text-gray-400 text-gray-600`}>
                  {skill.level}%
                </span>
              </div>
              <div className={`w-full rounded-full h-2 ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                <motion.div 
                  className="h-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600"
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${skill.level}%` } : {}}
                  transition={{ delay: 0.6 + (index * 0.1), duration: 1, type: 'spring' }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          className={`mt-16 p-6 rounded-xl dark:bg-gray-800 bg-white shadow-md`}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <h3 className={`text-xl font-bold mb-4 dark:text-white text-gray-800`}>
            Continuous Learning
          </h3>
          <p className={`mb-4 dark:text-gray-400 text-gray-600 `}>
            I'm constantly expanding my skill set through online courses, personal projects, 
            and staying updated with the latest industry trends.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className={`px-3 py-1 rounded-full text-sm dark:bg-gray-700 dark:text-gray-300 bg-gray-200 text-gray-700 `}>
              Currently Learning: Next.js
            </span>
            <span className={`px-3 py-1 rounded-full text-sm dark:bg-gray-700 dark:text-gray-300 bg-gray-200 text-gray-700 `}>
              Interested in: Three.js
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
export default Skills