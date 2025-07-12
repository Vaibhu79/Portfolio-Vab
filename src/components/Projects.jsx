import React, { useEffect, useRef, useState } from 'react';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [filter, setFilter] = useState('all');
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const projects = [
    {
      id: 1,
      title: 'Jarvis AI Assistant',
      description: 'An intelligent virtual assistant with voice interaction capabilities. Features speech recognition and text-to-speech functionality for seamless user interaction.',
      image: 'https://images.unsplash.com/photo-1645947091786-4399f228f5f0?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjBkYXJrfGVufDB8fHx8MTc1MjMxMzc0MXww&ixlib=rb-4.1.0&q=85',
      technologies: ['JavaScript', 'HTML5', 'CSS3', 'Web Speech API'],
      category: 'ai',
      githubUrl: 'https://github.com/vaibhav/Jarvis-ai-project',
      liveUrl: '#',
      folder: 'Jarvis-ai-project'
    },
    {
      id: 2,
      title: 'Weather Application',
      description: 'Real-time weather application using OpenWeather API. Displays current weather conditions, temperature, humidity, and wind speed for any city worldwide.',
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwyN3x8d2VhdGhlciUyMGFwcHxlbnwwfHx8fDE3NTIzMTM4OTV8MA&ixlib=rb-4.1.0&q=85',
      technologies: ['JavaScript', 'HTML5', 'CSS3', 'OpenWeather API'],
      category: 'web',
      githubUrl: 'https://github.com/vaibhav/WeatherApp',
      liveUrl: '#',
      folder: 'WeatherApp'
    },
    {
      id: 3,
      title: 'Real Estate Landing Page',
      description: 'Modern real estate website with advanced animations using GSAP and Locomotive Scroll. Features smooth scrolling and interactive elements for enhanced user experience.',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwyfHxyZWFsJTIwZXN0YXRlfGVufDB8fHx8MTc1MjMxMzkwN3ww&ixlib=rb-4.1.0&q=85',
      technologies: ['JavaScript', 'HTML5', 'CSS3', 'GSAP', 'Locomotive Scroll'],
      category: 'web',
      githubUrl: 'https://github.com/vaibhav/project1',
      liveUrl: '#',
      folder: 'project1'
    },
    {
      id: 4,
      title: 'To-Do List Application',
      description: 'Interactive task management application with local storage functionality. Add, edit, delete, and mark tasks as completed with a clean, intuitive interface.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwxfHx0b2RvJTIwbGlzdHxlbnwwfHx8fDE3NTIzMTM5MTd8MA&ixlib=rb-4.1.0&q=85',
      technologies: ['JavaScript', 'HTML5', 'CSS3', 'Local Storage'],
      category: 'productivity',
      githubUrl: 'https://github.com/vaibhav/To-do-project',
      liveUrl: '#',
      folder: 'To-do-project'
    },
    {
      id: 5,
      title: 'Text-to-Voice Converter',
      description: 'Web application that converts text to speech with multiple voice options. Features customizable speech rate, pitch, and voice selection for accessibility.',
      image: 'https://images.unsplash.com/photo-1589254065878-42c9da997008?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwxfHx2b2ljZSUyMHJlY29yZGluZ3xlbnwwfHx8fDE3NTIzMTM5Mjd8MA&ixlib=rb-4.1.0&q=85',
      technologies: ['JavaScript', 'HTML5', 'CSS3', 'Speech Synthesis API'],
      category: 'utility',
      githubUrl: 'https://github.com/vaibhav/text-to-voice',
      liveUrl: '#',
      folder: 'text-to-voice'
    },
    {
      id: 6,
      title: 'Coding Platform Landing',
      description: 'Responsive landing page for a coding education platform. Features modern design, smooth animations, and optimized user experience across all devices.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjBsZWFybmluZ3xlbnwwfHx8fDE3NTIzMTM5Mzd8MA&ixlib=rb-4.1.0&q=85',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
      category: 'web',
      githubUrl: 'https://github.com/vaibhav/landing-website-css',
      liveUrl: '#',
      folder: 'landing-website-css'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Apps' },
    { id: 'ai', label: 'AI Projects' },
    { id: 'productivity', label: 'Productivity' },
    { id: 'utility', label: 'Utilities' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" ref={sectionRef} className="py-20 bg-dark-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold gradient-text mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-dark-300 max-w-3xl mx-auto mb-8">
              Explore my collection of web applications and tools built with modern technologies
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto" />
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  filter === category.id
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                    : 'bg-dark-800 text-dark-300 hover:bg-dark-700 hover:text-dark-100'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className={`project-card rounded-xl overflow-hidden card-hover transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-dark-900/40 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex gap-4">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-dark-800/80 rounded-full text-white hover:bg-dark-700 transition-colors"
                        title="View Code"
                      >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </a>
                      <a
                        href={`/app/${project.folder}`}
                        className="p-3 bg-blue-600/80 rounded-full text-white hover:bg-blue-500 transition-colors"
                        title="View Project"
                      >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-dark-100 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-dark-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-dark-700/50 text-dark-300 text-sm rounded-full border border-dark-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Links */}
                  <div className="flex gap-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center py-2 px-4 bg-dark-700 text-dark-200 rounded-lg hover:bg-dark-600 transition-colors font-medium"
                    >
                      View Code
                    </a>
                    <a
                      href={`/app/${project.folder}`}
                      className="flex-1 text-center py-2 px-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all font-medium"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* GitHub CTA */}
          <div className="text-center mt-16">
            <p className="text-dark-300 mb-6">
              Want to see more of my work?
            </p>
            <a
              href="https://github.com/Vaibhu79"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 btn-primary px-8 py-4 rounded-full text-white font-semibold"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
              Visit My GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;