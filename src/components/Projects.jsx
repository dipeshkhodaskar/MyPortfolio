import { useState } from 'react';

const Projects = ({ darkMode }) => {
  const projects = [
    {
      id: 1,
      title: "E-commerce Website",
      description: "A full-featured online store with cart functionality and payment integration.",
      tags: ["React", "Node.js", "MongoDB"],
      image: "/project1.jpg",
      github: "#",
      live: "#"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A productivity app for organizing tasks with drag-and-drop functionality.",
      tags: ["React", "Firebase", "Tailwind CSS"],
      image: "/project2.jpg",
      github: "#",
      live: "#"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "Real-time weather information with 5-day forecast for any location.",
      tags: ["JavaScript", "API", "CSS"],
      image: "/project3.jpg",
      github: "#",
      live: "#"
    }
  ];

  const [expandedProjectId, setExpandedProjectId] = useState(null);

  const toggleDetails = (id) => {
    setExpandedProjectId(prevId => (prevId === id ? null : id));
  };

  return (
    <section id="projects" className={`py-20 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">My Projects</h2>
        <p className={`text-center max-w-2xl mx-auto mb-12 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          Here are some of my recent projects. Each one was built to solve specific problems and showcase different skills.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className={`rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span key={index} className={`px-2 py-1 rounded text-sm ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-800'}`}>
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 mb-4">
                  <a 
                    href={project.github} 
                    className="text-cyan-500 hover:text-cyan-400 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                  <a 
                    href={project.live} 
                    className="text-cyan-500 hover:text-cyan-400 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                </div>
                <button
                  onClick={() => toggleDetails(project.id)}
                  className={`mt-2 text-sm font-medium ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-500'}`}
                >
                  {expandedProjectId === project.id ? 'Hide Details' : 'View Details'}
                </button>
                {expandedProjectId === project.id && (
                  <div className={`mt-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    <p>Additional details about the project can be placed here. This section can include challenges faced, solutions implemented, and technologies used in more depth.</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
