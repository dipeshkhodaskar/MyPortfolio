import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const Projects = ({ darkMode, setActiveSection }) => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const [expandedProjectId, setExpandedProjectId] = useState(null);

  useEffect(() => {
    if (inView) {
      setActiveSection('projects');
    }
  }, [inView, setActiveSection]);


  const projects = [
    {
      id: 1,
      title: "Digi-Buy(E-commerce Website)",
      description: "A full-featured online store with cart functionality and payment integration.",
      tags: ["React", "Node.js", "MongoDB"],
      image: "src/assets/images/Project-1.jpg",
      github: "#",
      live: "#"
    },
    {
      id: 2,
      title: "Portfolio Website",
      description: "A productivity app for organizing tasks with drag-and-drop functionality.",
      tags: ["React", "Firebase", "Tailwind CSS"],
      image: "src/assets/images/Project-2.jpg",
      github: "#",
      live: "#"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "Real-time weather information with 5-day forecast for any location.",
      tags: ["JavaScript", "API", "CSS"],
      image: "src/assets/images/Project-3.jpg",
      github: "#",
      live: "#"
    },
      {
      id: 4,
      title: "Placement-Cell",
      description: "Real-time weather information with 5-day forecast for any location.",
      tags: ["JavaScript", "API", "CSS"],
      image: "src/assets/images/Project-4.jpg",
      github: "#",
      live: "#"
    },
      {
      id: 5,
      title: "Anagram",
      description: "Real-time weather information with 5-day forecast for any location.",
      tags: ["JavaScript", "API", "CSS"],
      image: "src/assets/images/Project-5.png",
      github: "#",
      live: "#"
    },
     {
      id: 6,
      title: "Application of 3D printer",
      description: "Real-time weather information with 5-day forecast for any location.",
      tags: ["JavaScript", "API", "CSS"],
      image: "src/assets/images/Project-6.jpg",
      github: "#",
      live: "#"
    }
  ];

  const toggleDetails = (id) => {
    setExpandedProjectId(prevId => (prevId === id ? null : id));
  };

  return (
    <section
      id="projects"
      ref={ref}
      className={`py-20 bg-zinc-200 dark:bg-gray-800`}
    >
      <div className="max-w-6xl mx-auto px-4">

        <motion.h2 className="text-3xl md:text-5xl text-center font-bold mb-4 text-gray-800 dark:text-white">
          My <span className="text-blue-600 dark:text-blue-400">Projects</span>
        </motion.h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6" />
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className={`text-center max-w-2xl mx-auto mb-10 dark:text-gray-400`}
        >
          Here are some of my recent projects. Each one was built to solve specific problems and showcase different skills.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
              transition={{ duration: 0.4 }}
              className={`rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow dark:bg-gray-700 bg-white
                }`}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold dark:text-white mb-2">{project.title}</h3>
                <p className={`mb-4 dark:text-gray-400 text-gray-700`}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <motion.span
                      key={index}
                      initial={{ scale: 0.8 }}
                      whileInView={{ scale: 1 }}
                      className={`px-2 py-1 rounded text-sm dark:bg-gray-600 dark:text-gray-300 bg-gray-200 text-gray-800
                        }`}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
                <div className="flex gap-4 mb-4">
                  <motion.a
                    href={project.github}
                    whileHover={{ scale: 1.05 }}
                    className="text-cyan-500 hover:text-cyan-400 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </motion.a>
                  <motion.a
                    href={project.live}
                    whileHover={{ scale: 1.05 }}
                    className="text-cyan-500 hover:text-cyan-400 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </motion.a>
                </div>
                <motion.button
                  onClick={() => toggleDetails(project.id)}
                  whileHover={{ scale: 1.05 }}
                  className={`mt-2 text-sm font-medium ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-500'
                    }`}
                >
                  {expandedProjectId === project.id ? 'Hide Details' : 'View Details'}
                </motion.button>
                {expandedProjectId === project.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className={`mt-4 dark:text-gray-400 text-gray-600}`}
                  >
                    <p>
                      Additional details about the project can be placed here. This section can include
                      challenges faced, solutions implemented, and technologies used in more depth.
                    </p>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;