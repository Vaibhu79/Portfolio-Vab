import React, { useEffect, useRef, useState } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
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

  const skills = [
    'React.js', 'JavaScript', 'Python', 'Django', 'Next.js', 
    'HTML5', 'CSS3', 'Tailwind CSS', 'Node.js', 'Git',
    'MongoDB', 'Express.js', 'Responsive Design', 'API Development'
  ];

  const achievements = [
    {
      number: '6+',
      title: 'Projects Completed',
      description: 'Various web applications and tools'
    },
    {
      number: 'MCA',
      title: 'Currently Pursuing',
      description: 'MCA at Parul University'
    },
    {
      number: '100%',
      title: 'Dedication',
      description: 'To learning and improvement'
    }
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-dark-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold gradient-text mb-4">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Profile Image and Info */}
            <div className={`transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}>
              <div className="relative">
                {/* Profile Image Placeholder */}
                <div className="w-80 h-80 mx-auto bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-full flex items-center justify-center border-4 border-blue-500/30 mb-8">
                  <div className="w-72 h-72 bg-gradient-to-br from-dark-700 to-dark-800 rounded-full flex items-center justify-center">
                    <span className="text-6xl font-bold gradient-text">VC</span>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute top-4 right-4 w-16 h-16 bg-blue-500/20 rounded-full animate-float" />
                <div className="absolute bottom-8 left-4 w-12 h-12 bg-purple-500/20 rounded-full animate-float" style={{ animationDelay: '-2s' }} />
              </div>
            </div>

            {/* Right Column - About Content */}
            <div className={`transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}>
              <h3 className="text-3xl font-bold text-dark-100 mb-6">
                Passionate Developer & Tech Enthusiast
              </h3>
              
              <p className="text-lg text-dark-300 mb-6 leading-relaxed">
                Vaibhav Choubisa — a passionate web developer and tech enthusiast currently pursuing BCA+MCA (IMCA) 
                from Parul University. I specialize in crafting responsive, user-friendly websites and web 
                applications using modern technologies like React.js, Python/Django, Next.js, and more.
              </p>

              <p className="text-lg text-dark-300 mb-8 leading-relaxed">
                My journey in web development is driven by curiosity and a desire to create meaningful digital experiences. 
                I enjoy solving complex problems and turning ideas into functional, beautiful applications.
              </p>

              {/* Skills */}
              <div className="mb-8">
                <h4 className="text-xl font-semibold text-dark-100 mb-4">Tech Stack & Skills</h4>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill, index) => (
                    <span
                      key={skill}
                      className={`skill-tag px-4 py-2 bg-dark-700 text-dark-200 rounded-full text-sm font-medium transition-all duration-300 delay-${index * 50}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <a
                href="#contact"
                className="inline-flex items-center gap-2 btn-primary px-6 py-3 rounded-full text-white font-semibold"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Let's Connect
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Achievements Section */}
          <div className={`mt-20 transition-all duration-1000 delay-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="grid md:grid-cols-3 gap-8">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="text-center p-6 bg-dark-800/50 rounded-xl border border-dark-700/50 hover:border-blue-500/50 transition-all duration-300"
                >
                  <div className="text-4xl font-bold gradient-text mb-2">
                    {achievement.number}
                  </div>
                  <h4 className="text-xl font-semibold text-dark-100 mb-2">
                    {achievement.title}
                  </h4>
                  <p className="text-dark-400">
                    {achievement.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;