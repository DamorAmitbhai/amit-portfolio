import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, Phone, MapPin, Download, ExternalLink, Code, Briefcase, GraduationCap, Award, ChevronRight, Calendar, Building, Book, Rocket, Database, Cloud, Shield, Zap, ArrowUp } from 'lucide-react';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      setShowScrollTop(window.scrollY > 400);
      
      const sections = ['home', 'about', 'experience', 'projects', 'skills', 'education', 'blogs', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const projects = [
    {
      title: "Platypus App",
      subtitle: "Real-Time Pet Walking Platform System",
      period: "May 2025 - Present",
      description: "A comprehensive real-time platform connecting parents and pet walkers with advanced tracking, management, and communication features.",
      tech: ["MERN Stack", "Next.js", "TypeScript", "WebSockets", "JWT", "Google OAuth", "Firebase", "Brevo", "Swagger", "AWS", "Render", "Vercel"],
      features: [
        "Real-time map tracking for both parent-side and walker-side applications",
        "Scalable and secure Admin Dashboard for user and walk management",
        "REST APIs with Node.js, Express.js, and MongoDB integration",
        "JWT and OAuth 2.0 authentication with Firebase Auth",
        "Firebase notifications and Brevo email services integration",
        "Comprehensive API documentation using Swagger (OpenAPI)",
        "Cloud deployment on AWS and Render with file upload support"
      ],
      icon: Rocket,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Content Management System",
      subtitle: "Full-Stack CMS Platform",
      period: "Jan 2024 - Present",
      description: "Modern CMS with server-side rendering, authentication, and comprehensive content management capabilities.",
      tech: ["React.js", "Next.js", "Node.js", "MongoDB", "JWT", "NextAuth", "Tailwind CSS", "Material UI"],
      features: [
        "Server-side rendering with Next.js for improved SEO",
        "JWT and NextAuth authentication system",
        "CRUD operations with MongoDB database",
        "Responsive UI design with Tailwind CSS and Material UI",
        "Admin panel for content management and user control",
        "Next.js API routes for backend operations"
      ],
      icon: Database,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Society Management System",
      subtitle: "Android Application",
      period: "2023",
      description: "Comprehensive Android application for managing society operations, communications, and member interactions.",
      tech: ["Django", "MySQL", "Android Studio", "Firebase"],
      features: [
        "Member management and directory system",
        "Real-time notifications with Firebase",
        "Complaint tracking and resolution system",
        "Payment and billing management module",
        "Event and notice board management",
        "Visitor management system"
      ],
      icon: Building,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Task Management System",
      subtitle: "Project & Task Tracking",
      period: "2023",
      description: "Web-based task tracking and project management solution for team collaboration and productivity.",
      tech: ["ASP.NET", "Angular", "MSSQL"],
      features: [
        "Task assignment and tracking system",
        "Project timeline and milestone management",
        "Team collaboration and communication tools",
        "Progress reporting and analytics dashboard",
        "Role-based access control",
        "Deadline notifications and reminders"
      ],
      icon: Briefcase,
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Save The Bunny",
      subtitle: "Android Game",
      period: "2022",
      description: "Interactive Android game with engaging gameplay mechanics and Firebase integration for high scores.",
      tech: ["Android Studio", "Firebase"],
      features: [
        "Engaging gameplay mechanics",
        "Firebase integration for leaderboards",
        "Score tracking and achievements",
        "Smooth animations and graphics"
      ],
      icon: Code,
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: "Online Food Ordering System",
      subtitle: "E-Commerce Platform",
      period: "2022",
      description: "Complete food ordering system with cart management, payment integration, and order tracking.",
      tech: ["ASP.NET", "SQL Server"],
      features: [
        "Menu browsing and search functionality",
        "Shopping cart and checkout system",
        "Order tracking and history",
        "Admin panel for menu management",
        "Payment gateway integration"
      ],
      icon: Cloud,
      color: "from-pink-500 to-rose-500"
    }
  ];

  const experiences = [
    {
      company: "Quantalynk Technologies Pvt. Ltd.",
      role: "Software Developer Engineer",
      type: "Full-time",
      period: "Aug 2025 - Present (4 months)",
      location: "Vadodara, Gujarat, India",
      description: "Working on Platypus App - real-time pet walking platform",
      responsibilities: [
        "Designed real-time map tracking features using WebSockets",
        "Built scalable Admin Dashboard with React.js and Material UI",
        "Developed REST APIs with Node.js, Express.js, and MongoDB",
        "Implemented JWT and OAuth 2.0 authentication",
        "Integrated Firebase notifications and Brevo email services",
        "Created API documentation using Swagger (OpenAPI)",
        "Deployed on AWS and Render with cloud storage integration"
      ]
    },
    {
      company: "Quantalynk Technologies Pvt. Ltd.",
      role: "Software Developer Engineer Trainee",
      type: "Training",
      period: "Jun 2025 - Jul 2025 (2 months)",
      location: "Vadodara, Gujarat, India",
      description: "Backend development training on Platypus App",
      responsibilities: [
        "Worked on backend API development",
        "Built CMS modules with Bootstrap",
        "Tested APIs using Postman and Swagger"
      ]
    },
    {
      company: "Quantalynk Technologies Pvt. Ltd.",
      role: "Software Developer Engineer Intern",
      type: "Internship",
      period: "Feb 2025 - May 2025 (4 months)",
      location: "Vadodara, Gujarat, India",
      description: "Full-stack development internship",
      responsibilities: [
        "Contributed to backend services and frontend integration",
        "Developed blog web app with MERN stack",
        "Built admin dashboard features with Bootstrap and Node.js"
      ]
    },
    {
      company: "Alive Create Web Solution",
      role: "Software Developer Engineer Intern",
      type: "Internship",
      period: "Jan 2024 - Mar 2025 (1 yr 3 months)",
      location: "Vadodara, Gujarat, India",
      description: "Frontend and backend development",
      responsibilities: [
        "Built CMS using React.js, Next.js, Node.js, and MongoDB",
        "Implemented JWT authentication and CRUD APIs",
        "Created responsive UI with Tailwind CSS and Material UI",
        "Integrated Shopify and Web Services API"
      ]
    }
  ];

  const skills = {
    "Languages & Frameworks": [
      "JavaScript (ES6+)", "TypeScript", "React.js", "Next.js", "Node.js", 
      "Express.js", "PHP", "HTML5", "CSS3", "Bootstrap", "C", "C++", "Java", "Python"
    ],
    "Databases": [
      "MongoDB (Mongoose)", "MySQL", "SQL Server", "Firebase"
    ],
    "Tools & Platforms": [
      "Git", "GitHub", "Postman", "Swagger (OpenAPI)", "VS Code", 
      "Android Studio", "Vercel", "Netlify", "Render"
    ],
    "Cloud & Deployment": [
      "AWS", "Firebase", "Vercel", "Render", "Netlify", "Cloud Storage"
    ],
    "Authentication & Security": [
      "JWT", "OAuth 2.0", "NextAuth", "Firebase Auth"
    ],
    "Core Strengths": [
      "Backend Development", "RESTful API Design", "Real-Time Systems", 
      "CMS Development", "Responsive UI", "Debugging", "CI/CD Pipelines"
    ]
  };

  const education = [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "Gujarat Technological University",
      period: "Jul 2022 - May 2024",
      grade: "8.3 SPA",
      details: "Computer Software Engineering",
      semesters: [
        { sem: "Semester 1", cpi: "8.77" },
        { sem: "Semester 2", cpi: "8.57" },
        { sem: "Semester 3", cpi: "8.47" },
        { sem: "Semester 4", cpi: "8.00" }
      ]
    },
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Babasaheb Ambedkar Open University",
      period: "2018 - 2021",
      grade: "74.92%",
      details: "Sarvoday Institute of I.T, Panchmahal"
    },
    {
      degree: "HSC (Higher Secondary Certificate)",
      institution: "GSHSEB",
      period: "2018",
      grade: "64.57%",
      details: "Shree Madhyamik School - Dungari"
    },
    {
      degree: "SSC (Secondary School Certificate)",
      institution: "GSEB",
      period: "2016",
      grade: "52.50%",
      details: "Shree Madhyamik School - Dungari"
    }
  ];

  const blogs = [
    {
      title: "Building Real-Time Applications with WebSockets",
      date: "Oct 2025",
      excerpt: "Learn how to implement real-time features in your web applications using WebSockets, Socket.io, and Node.js for seamless bi-directional communication.",
      tags: ["WebSockets", "Node.js", "Real-Time", "Socket.io"],
      readTime: "8 min read",
      category: "Backend Development",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Mastering JWT Authentication in MERN Stack",
      date: "Sep 2025",
      excerpt: "A comprehensive guide to implementing secure authentication using JWT tokens in MongoDB, Express, React, and Node.js applications with best practices.",
      tags: ["JWT", "MERN", "Security", "Authentication"],
      readTime: "10 min read",
      category: "Full-Stack",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "API Documentation Best Practices with Swagger",
      date: "Aug 2025",
      excerpt: "Explore how to create professional API documentation using Swagger/OpenAPI for better team collaboration, integration, and developer experience.",
      tags: ["API", "Swagger", "Documentation", "OpenAPI"],
      readTime: "6 min read",
      category: "API Development",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      title: "Deploying MERN Apps on AWS and Render",
      date: "Jul 2025",
      excerpt: "Step-by-step guide to deploying full-stack MERN applications on cloud platforms like AWS and Render with CI/CD pipelines and environment configuration.",
      tags: ["AWS", "Render", "Deployment", "DevOps"],
      readTime: "12 min read",
      category: "Cloud & DevOps",
      gradient: "from-orange-500 to-red-500"
    },
    {
      title: "Building Scalable Admin Dashboards with React",
      date: "Jun 2025",
      excerpt: "Design patterns and best practices for creating scalable, performant admin dashboards using React.js, Material UI, and data visualization libraries.",
      tags: ["React", "Dashboard", "Material UI", "Frontend"],
      readTime: "9 min read",
      category: "Frontend Development",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      title: "MongoDB Performance Optimization Tips",
      date: "May 2025",
      excerpt: "Essential techniques for optimizing MongoDB queries, indexing strategies, aggregation pipelines, and database design for high-performance applications.",
      tags: ["MongoDB", "Database", "Performance", "Optimization"],
      readTime: "11 min read",
      category: "Database",
      gradient: "from-pink-500 to-rose-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-900 to-pink-900">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-indigo-950/95 backdrop-blur-md shadow-lg shadow-purple-500/20' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
              Amit Damor
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'experience', 'projects', 'skills', 'education', 'blogs', 'contact'].map(item => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-colors hover:text-pink-400 ${activeSection === item ? 'text-pink-400' : 'text-gray-300'}`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} className="text-pink-400" /> : <Menu size={24} className="text-pink-400" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-indigo-950/98 backdrop-blur-md">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['home', 'about', 'experience', 'projects', 'skills', 'education', 'blogs', 'contact'].map(item => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left px-3 py-2 capitalize hover:bg-purple-900/50 rounded transition-colors text-gray-300"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 animate-fade-in">
            {/* Profile Photo */}
            <div className="w-48 h-48 mx-auto mb-6 rounded-full bg-gradient-to-br from-pink-400 via-purple-400 to-indigo-400 p-1 shadow-2xl shadow-purple-500/50 transform hover:scale-105 transition-all">
              <div className="w-full h-full rounded-full overflow-hidden bg-indigo-950">
                <img 
                  src="/profile.jpg" 
                  alt="Amit Damor - Software Developer"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = '<div class="w-full h-full bg-indigo-950 flex items-center justify-center"><div class="text-6xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">AD</div></div>';
                  }}
                />
              </div>
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent animate-pulse">
              Amit Damor
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl text-gray-200 mb-6 font-semibold">
              Software Developer Engineer
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
              Backend API Development & Testing | MERN Stack | Real-Time App Development
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <a href="mailto:amitdamordhd@gmail.com" className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 rounded-full transition-all transform hover:scale-105 shadow-lg shadow-pink-500/50">
                <Mail size={20} />
                Contact Me
              </a>
              <a href="/public/resume.pdf" download="Amit_Damor_Resume.pdf" className="flex items-center gap-2 px-6 py-3 border-2 border-pink-400 hover:bg-pink-400/10 rounded-full transition-all shadow-lg shadow-pink-500/30">
                <Download size={20} />
                Download Resume
              </a>
            </div>
            <div className="flex justify-center gap-6">
              <a href="https://www.linkedin.com/in/amit-damor-341241251" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-pink-400 transition-colors transform hover:scale-110">
                <Linkedin size={32} />
              </a>
              <a href="https://github.com/amit-damor" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-pink-400 transition-colors transform hover:scale-110">
                <Github size={32} />
              </a>
              <a href="mailto:amitdamordhd@gmail.com" className="text-gray-300 hover:text-pink-400 transition-colors transform hover:scale-110">
                <Mail size={32} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="bg-indigo-900/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/30 hover:border-pink-400/50 transition-all shadow-xl shadow-purple-500/20">
            <p className="text-lg text-gray-200 leading-relaxed mb-6">
              I am a Software Developer Engineer with a Master's in Computer Applications (MCA) and strong experience in full-stack development, backend systems, and real-time applications. I specialize in MERN stack development (MongoDB, Express.js, React.js, Node.js) to build scalable, secure, and high-performance web applications.
            </p>
            <p className="text-lg text-gray-200 leading-relaxed mb-6">
              With hands-on experience in full-stack development, I create dynamic, user-friendly applications with seamless frontend and backend integration. My expertise includes building REST APIs, implementing authentication systems, real-time communication with WebSockets, and deploying applications on cloud platforms.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 p-6 rounded-xl hover:from-purple-600/30 hover:to-pink-600/30 transition-all border border-purple-500/30">
                <Code className="text-pink-400 mb-3" size={36} />
                <h3 className="font-semibold mb-2 text-white text-lg">Full-Stack Development</h3>
                <p className="text-gray-300 text-sm">MERN Stack, Next.js, TypeScript</p>
              </div>
              <div className="bg-gradient-to-br from-indigo-600/20 to-purple-600/20 p-6 rounded-xl hover:from-indigo-600/30 hover:to-purple-600/30 transition-all border border-indigo-500/30">
                <Briefcase className="text-purple-400 mb-3" size={36} />
                <h3 className="font-semibold mb-2 text-white text-lg">Backend Engineering</h3>
                <p className="text-gray-300 text-sm">REST APIs, WebSockets, Authentication</p>
              </div>
              <div className="bg-gradient-to-br from-pink-600/20 to-purple-600/20 p-6 rounded-xl hover:from-pink-600/30 hover:to-purple-600/30 transition-all border border-pink-500/30">
                <Award className="text-indigo-400 mb-3" size={36} />
                <h3 className="font-semibold mb-2 text-white text-lg">Cloud Deployment</h3>
                <p className="text-gray-300 text-sm">AWS, Render, Vercel, Firebase</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
            Work Experience
          </h2>
          <div className="space-y-8">
            {experiences.map((exp, idx) => (
              <div key={idx} className="bg-indigo-900/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/30 hover:border-pink-400/50 transition-all hover:transform hover:scale-[1.01] shadow-xl shadow-purple-500/10">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-pink-400 mb-2">{exp.role}</h3>
                    <div className="flex items-center gap-2 text-gray-200 mb-2">
                      <Building size={18} className="text-purple-400" />
                      <span className="font-semibold">{exp.company}</span>
                      <span className="text-gray-500">•</span>
                      <span className="text-sm bg-purple-900/50 px-3 py-1 rounded-full border border-purple-500/30">{exp.type}</span>
                    </div>
                  </div>
                  <div className="text-gray-300 text-sm mt-2 md:mt-0">
                    <div className="flex items-center gap-2 mb-1">
                      <Calendar size={16} className="text-pink-400" />
                      {exp.period}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} className="text-pink-400" />
                      {exp.location}
                    </div>
                  </div>
                </div>
                <p className="text-gray-200 mb-4 italic">{exp.description}</p>
                <ul className="space-y-2">
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-300">
                      <ChevronRight className="text-pink-400 flex-shrink-0 mt-1" size={16} />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
            Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => {
              const Icon = project.icon;
              return (
                <div key={idx} className="bg-indigo-900/30 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/30 hover:border-pink-400/50 transition-all hover:transform hover:scale-[1.05] group shadow-xl shadow-purple-500/10">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${project.color} bg-opacity-20`}>
                      <Icon className="text-white" size={28} />
                    </div>
                    <ExternalLink className="text-gray-400 group-hover:text-pink-400 transition-colors" size={20} />
                  </div>
                  <h3 className="text-xl font-bold text-pink-400 group-hover:text-pink-300 transition-colors mb-1">{project.title}</h3>
                  <p className="text-sm text-purple-300 mb-2">{project.subtitle}</p>
                  <p className="text-gray-500 text-xs mb-3">{project.period}</p>
                  <p className="text-gray-300 text-sm mb-4">{project.description}</p>
                  <div className="mb-4">
                    <h4 className="text-xs font-semibold text-gray-400 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {project.features.slice(0, 3).map((feature, i) => (
                        <li key={i} className="flex items-start gap-1 text-xs text-gray-400">
                          <ChevronRight className="text-pink-400 flex-shrink-0 mt-0.5" size={12} />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.slice(0, 4).map((tech, i) => (
                      <span key={i} className="text-xs bg-purple-900/50 hover:bg-pink-500/20 px-3 py-1 rounded-full transition-colors border border-purple-500/30">
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="text-xs bg-indigo-900/50 px-3 py-1 rounded-full border border-indigo-500/30">
                        +{project.tech.length - 4}
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(skills).map(([category, items], idx) => (
              <div key={idx} className="bg-indigo-900/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/30 hover:border-pink-400/50 transition-all shadow-xl shadow-purple-500/10">
                <h3 className="text-xl font-bold text-pink-400 mb-4">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill, i) => (
                    <span key={i} className="bg-purple-900/50 hover:bg-pink-500/20 px-4 py-2 rounded-lg text-sm transition-all hover:transform hover:scale-105 cursor-default border border-purple-500/30 text-gray-200">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
            Education
          </h2>
          <div className="space-y-6">
            {education.map((edu, idx) => (
              <div key={idx} className="bg-indigo-900/30 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/30 hover:border-pink-400/50 transition-all hover:transform hover:scale-[1.01] shadow-xl shadow-purple-500/10">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="flex items-start gap-4 mb-4 md:mb-0">
                    <GraduationCap className="text-pink-400 flex-shrink-0 mt-1" size={32} />
                    <div>
                      <h3 className="text-lg font-bold text-pink-400">{edu.degree}</h3>
                      <p className="text-gray-200">{edu.institution}</p>
                      <p className="text-gray-400 text-sm">{edu.details}</p>
                      {edu.semesters && (
                        <div className="mt-2 flex flex-wrap gap-2">
                          {edu.semesters.map((sem, i) => (
                            <span key={i} className="text-xs bg-purple-900/50 px-2 py-1 rounded border border-purple-500/30 text-gray-300">
                              {sem.sem}: {sem.cpi} CPI
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-400">{edu.period}</p>
                    <p className="text-pink-400 font-semibold">{edu.grade}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blogs Section */}
      <section id="blogs" className="py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
            Latest Blog Posts
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog, idx) => (
              <div key={idx} className="bg-indigo-900/30 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/30 hover:border-pink-400/50 transition-all hover:transform hover:scale-[1.05] cursor-pointer group shadow-xl shadow-purple-500/10">
                <div className={`w-full h-32 rounded-xl bg-gradient-to-br ${blog.gradient} mb-4 flex items-center justify-center`}>
                  <Book className="text-white" size={48} />
                </div>
                <span className="text-xs bg-purple-900/50 px-3 py-1 rounded-full border border-purple-500/30 text-gray-300">
                  {blog.category}
                </span>
                <p className="text-gray-400 text-sm mt-3 mb-2">{blog.date} • {blog.readTime}</p>
                <h3 className="text-xl font-bold text-pink-400 group-hover:text-pink-300 transition-colors mb-3">{blog.title}</h3>
                <p className="text-gray-300 mb-4 text-sm">{blog.excerpt}</p>
                <div className="flex flex-wrap gap-2">
                  {blog.tags.map((tag, i) => (
                    <span key={i} className="text-xs bg-purple-900/50 px-3 py-1 rounded-full border border-purple-500/30 text-gray-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="bg-indigo-900/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/30 shadow-xl shadow-purple-500/20">
            <p className="text-lg text-gray-200 mb-8">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <a href="mailto:amitdamordhd@gmail.com" className="flex flex-col items-center gap-3 p-6 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-xl hover:from-purple-600/30 hover:to-pink-600/30 transition-all group border border-purple-500/30">
                <Mail className="text-pink-400 group-hover:scale-110 transition-transform" size={36} />
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="text-pink-400 text-sm">amitdamordhd@gmail.com</p>
                </div>
              </a>
              <a href="tel:9512394858" className="flex flex-col items-center gap-3 p-6 bg-gradient-to-br from-indigo-600/20 to-purple-600/20 rounded-xl hover:from-indigo-600/30 hover:to-purple-600/30 transition-all group border border-indigo-500/30">
                <Phone className="text-purple-400 group-hover:scale-110 transition-transform" size={36} />
                <div>
                  <p className="text-sm text-gray-400">Phone</p>
                  <p className="text-purple-400 text-sm">+91 9512394858</p>
                </div>
              </a>
              <div className="flex flex-col items-center gap-3 p-6 bg-gradient-to-br from-pink-600/20 to-purple-600/20 rounded-xl border border-pink-500/30">
                <MapPin className="text-indigo-400" size={36} />
                <div>
                  <p className="text-sm text-gray-400">Location</p>
                  <p className="text-indigo-400 text-sm">Vadodara, Gujarat, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/30 py-8 px-4 border-t border-purple-500/30">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-300">
            © 2025 Amit Damor. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm mt-2">
            Built with React.js • Tailwind CSS • Love ❤️
          </p>
          <div className="flex justify-center gap-6 mt-4">
            <a href="https://www.linkedin.com/in/amit-damor-341241251" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-pink-400 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="https://github.com/amit-damor" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-pink-400 transition-colors">
              <Github size={24} />
            </a>
            <a href="mailto:amitdamordhd@gmail.com" className="text-gray-300 hover:text-pink-400 transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-4 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 rounded-full shadow-2xl shadow-pink-500/50 transition-all transform hover:scale-110 z-50 animate-bounce"
          aria-label="Scroll to top"
        >
          <ArrowUp size={24} className="text-white" />
        </button>
      )}
    </div>
  );
};

export default Portfolio;