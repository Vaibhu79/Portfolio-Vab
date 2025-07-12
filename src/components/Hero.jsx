import React, { useEffect, useState } from 'react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const titles = [
    'Web Developer',
    'Frontend Developer', 
    'React Developer',
    'Tech Enthusiast'
  ];

  useEffect(() => {
    const typeSpeed = isDeleting ? 100 : 150;
    const currentTitle = titles[currentIndex];
    
    const timer = setTimeout(() => {
      if (!isDeleting && displayText === currentTitle) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % titles.length);
      } else {
        setDisplayText(
          isDeleting 
            ? currentTitle.substring(0, displayText.length - 1)
            : currentTitle.substring(0, displayText.length + 1)
        );
      }
    }, typeSpeed);

    return () => clearTimeout(timer);
  }, [displayText, currentIndex, isDeleting, titles]);

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1744555270794-6d378b9e7cd3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wZXIlMjB3b3Jrc3BhY2UlMjBkYXJrfGVufDB8fHx8MTc1MjMxMzczNXww&ixlib=rb-4.1.0&q=85')`
        }}
      />
      <div className="absolute inset-0 bg-dark-950/70" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-green-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '-1.5s' }} />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="animate-fadeInUp">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
            Hi, I'm{' '}
            <span className="gradient-text">Vaibhav Choubisa</span>
          </h1>
          
          <div className="text-2xl sm:text-3xl lg:text-4xl font-medium mb-8 text-dark-300 min-h-[2em]">
            I'm a{' '}
            <span className="text-blue-400 font-semibold">
              {displayText}
              <span className="animate-pulse">|</span>
            </span>
          </div>
          
          <p className="text-lg sm:text-xl text-dark-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Passionate about creating exceptional web experiences with modern technologies. 
            Currently pursuing BCA+MCA at Parul University and building innovative projects.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={scrollToProjects}
              className="btn-primary px-8 py-4 rounded-full text-lg font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
            >
              View Projects
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </button>
            
            <a
              href="https://www.linkedin.com/in/vaibhav-choubisa-606a69238/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full text-lg font-semibold border-2 border-dark-600 text-dark-300 hover:border-blue-400 hover:text-blue-400 transition-all duration-300 flex items-center gap-2"
            >
              Connect
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-dark-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-dark-400 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;