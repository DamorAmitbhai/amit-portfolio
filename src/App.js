//===============================================================
// File: src/App.js
// Description: Main application file for the portfolio website
//===============================================================
import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, Phone, MapPin, Download, ExternalLink, Code, Briefcase, GraduationCap, Award, ChevronRight, Calendar, Building, Book, Rocket, Database, Cloud, Shield, Zap, ArrowUp, User, Star, Clock, TrendingUp, MessageCircle } from 'lucide-react';
import { FaWhatsapp } from "react-icons/fa";

// Main Portfolio Component
const Portfolio = () => {
  // State management
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showWhatsApp, setShowWhatsApp] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  // WhatsApp contact function
  const openWhatsApp = (message = '') => {
    const phoneNumber = '919512394858'; // Your WhatsApp number with country code
    const encodedMessage = encodeURIComponent(message || 'Hi Amit! I came across your portfolio and would like to discuss a potential opportunity.');
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  // Enhanced scroll effect for WhatsApp button
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 50);
      setShowScrollTop(scrollPosition > 400);
      setShowWhatsApp(scrollPosition > 300); // Show WhatsApp button after scrolling 300px
      
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

  // Typing animation effect
  useEffect(() => {
    const phrases = [
      "Software Developer Engineer",
      "Full-Stack Developer", 
      "MERN Stack Specialist",
      "API Development Expert",
      "Real-Time Systems Architect",
      "Cloud Solutions Developer"
    ];
    
    const currentPhrase = phrases[currentPhraseIndex];
    const typingSpeed = isDeleting ? 30 : 100;
    
    const handleTyping = () => {
      if (!isDeleting) {
        if (typedText.length < currentPhrase.length) {
          setTypedText(currentPhrase.substring(0, typedText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (typedText.length > 0) {
          setTypedText(currentPhrase.substring(0, typedText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        }
      }
    };

    const typingTimer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(typingTimer);
  }, [typedText, currentPhraseIndex, isDeleting]);

  // Event handlers
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

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const subject = `Portfolio Contact from ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    const mailtoLink = `mailto:amitdamordhd@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
    setFormData({ name: '', email: '', message: '' });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Professional phrases for typing animation
  const phrases = [
    "Software Developer Engineer",
    "Full-Stack Developer", 
    "MERN Stack Specialist",
    "API Development Expert",
    "Real-Time Systems Architect",
    "Cloud Solutions Developer"
  ];

  // Enhanced code lines with better syntax highlighting
  const codeLines = [
    { text: "const developer = {", delay: 0, type: "object" },
    { text: "  name: 'Amit Damor',", delay: 500, type: "property" },
    {text: "  email: 'amitdamordhd@gmail.com',", delay: 700, type: "string" },
    {text: "  phone: '+91 9512394858',", delay: 900, type: "string" },
    { text: "  role: 'Full-Stack Developer',", delay: 1000, type: "property" },
    {text: "  tot experience: 1 year,", delay: 1200, type: "number" }, 
    { text: "  skills: [", delay: 1500, type: "array" },
    { text: "   'Html','CSS','JavaScript', 'React', 'Node.js', 'MongoDB',", delay: 2000, type: "string" },
    { text: "  ],", delay: 2500, type: "array" },
    { text: "  passionate: true,", delay: 3000, type: "boolean" },
    { text: "  location: 'Vadodara, Gujarat, India'", delay: 3500, type: "string" },
    { text: "};", delay: 4000, type: "object" }
  ];

  // Enhanced floating code snippets with professional colors
  const floatingCodeSnippets = [
    { text: "npm install react", x: "5%", y: "10%", delay: 0, color: "#3B82F6" },
    { text: "useState()", x: "90%", y: "8%", delay: 800, color: "#06B6D4" },
    { text: "export default App", x: "8%", y: "85%", delay: 1600, color: "#EAB308" },
    { text: "className='flex'", x: "88%", y: "82%", delay: 2400, color: "#14B8A6" },
    { text: "app.listen(3000)", x: "15%", y: "25%", delay: 400, color: "#10B981" },
    { text: "db.collection.find()", x: "82%", y: "28%", delay: 1200, color: "#34D399" },
    { text: "res.json(data)", x: "12%", y: "65%", delay: 2000, color: "#84CC16" },
    { text: "mongoose.connect()", x: "85%", y: "68%", delay: 2800, color: "#22C55E" },
    { text: "git commit -m 'feat'", x: "25%", y: "15%", delay: 600, color: "#F97316" },
    { text: "docker run -p 8080", x: "75%", y: "18%", delay: 1400, color: "#2563EB" },
    { text: "CI/CD Pipeline", x: "20%", y: "75%", delay: 2200, color: "#9333EA" },
    { text: "AWS S3 Bucket", x: "78%", y: "48%", delay: 3000, color: "#F59E0B" },
    { text: "WebSocket.io", x: "35%", y: "12%", delay: 1000, color: "#EC4899" },
    { text: "JWT.verify()", x: "65%", y: "15%", delay: 1800, color: "#EF4444" },
    { text: "async/await", x: "30%", y: "40%", delay: 2600, color: "#6366F1" },
    { text: "GraphQL Schema", x: "70%", y: "72%", delay: 3400, color: "#DB2777" },
    { text: "TypeScript", x: "45%", y: "8%", delay: 1400, color: "#1E40AF" },
    { text: "Next.js", x: "55%", y: "12%", delay: 2200, color: "#6B7280" },
    { text: "Redux Toolkit", x: "5%", y: "48%", delay: 3000, color: "#7C3AED" },
    { text: "Tailwind CSS", x: "70%", y: "82%", delay: 3800, color: "#0891B2" }
  ];

  // Enhanced projects data with new color scheme
  const projects = [
    {
      title: "Platypus App",
      subtitle: "Real-Time Pet Walking Platform",
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
      primaryColor: "#8B5CF6", // Purple
      secondaryColor: "#EC4899", // Pink
      accentColor: "#3B82F6", // Blue
      github: "https://github.com/DamorAmitbhai/Platypus-Backend",
      live: "https://platypus-app.vercel.app",
      status: "active",
      category: "Full-Stack"
    },
    {
      title: "Content Management System",
      subtitle: "Enterprise CMS Platform",
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
      primaryColor: "#0EA5E9", // Sky Blue
      secondaryColor: "#06B6D4", // Cyan
      accentColor: "#0891B2", // Teal
      github: "https://github.com/DamorAmitbhai/CMS---Website-Content-Management-System-",
      live: "https://cms-platform.vercel.app",
      status: "active",
      category: "Full-Stack"
    },
    {
      title: "Society Management System",
      subtitle: "Community Management App",
      period: "2023",
      description: "Comprehensive Android application for managing society operations, communications, and member interactions.",
      tech: ["Python","Django", "MySQL", "Android Studio", "Firebase"],
      features: [
        "Member management and directory system",
        "Real-time notifications with Firebase",
        "Complaint tracking and resolution system",
        "Payment and billing management module",
        "Event and notice board management",
        "Visitor management system"
      ],
      icon: Building,
      primaryColor: "#10B981", // Emerald
      secondaryColor: "#34D399", // Green
      accentColor: "#22C55E", // Green
      status: "completed",
      category: "Mobile"
    },
    {
      title: "Task Management System",
      subtitle: "Project Collaboration Tool",
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
      primaryColor: "#F97316", // Orange
      secondaryColor: "#FB923C", // Light Orange
      accentColor: "#F59E0B", // Amber
      status: "completed",
      category: "Enterprise"
    },
    {
      title: "Save The Bunny",
      subtitle: "Mobile Gaming App",
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
      primaryColor: "#EAB308", // Yellow
      secondaryColor: "#FACC15", // Light Yellow
      accentColor: "#FDE047", // Lighter Yellow
      status: "completed",
      category: "Gaming"
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
      primaryColor: "#EF4444", // Red
      secondaryColor: "#F87171", // Light Red
      accentColor: "#FCA5A5", // Lighter Red
      status: "completed",
      category: "E-Commerce"
    }
  ];

  // Enhanced experiences data
  const experiences = [
    {
      company: "Quantalynk Technologies Pvt. Ltd.",
      role: "Software Developer Engineer",
      type: "Full-time",
      period: "Feb 2025 - Present",
      location: "Vadodara, Gujarat, India",
      description: "Developing Platypus App, a comprehensive real-time pet walking platform that connects pet owners with walkers",
      responsibilities: [
        "Architected and implemented real-time geolocation tracking system using WebSockets and Google Maps API, enabling live pet monitoring during walks",
        "Designed and built a scalable Admin Dashboard with React.js and Material UI, featuring analytics, user management, and service monitoring capabilities",
        "Developed RESTful APIs using Node.js, Express.js, and MongoDB with proper error handling, validation, and pagination for optimal performance",
        "Implemented secure authentication system using JWT tokens and OAuth 2.0 for social logins (Google, Facebook, Apple)",
        "Integrated Firebase Cloud Messaging for push notifications and Brevo API for transactional emails and SMS communications",
        "Created comprehensive API documentation using Swagger/OpenAPI specifications, facilitating seamless frontend integration",
        "Deployed and managed applications on AWS EC2 and Render platforms with automated CI/CD pipelines and cloud storage integration",
        "Engineered responsive frontend components using React.js with state management (Redux/Context API) and Material UI for consistent design",
        "Optimized database queries and implemented caching strategies using Redis to improve application performance by 40%",
        "Integrated third-party payment gateway (Razorpay) and developed secure transaction processing system"
      ],
      duration: "10 months",
      level: "Software Engineer",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "WebSockets", "Google Maps API", "Material UI", "JWT", "OAuth 2.0", "Firebase", "AWS", "Render", "Redis", "Razorpay"]
    },
    {
      company: "Alive Create Web Solution",
      role: "Software Developer Engineer Intern",
      type: "Internship",
      period: "Jan 2024 - Apr 2024 (4 months)",
      location: "Vadodara, Gujarat, India",
      description: "Developed custom Content Management System (CMS) solutions for various client projects",
      responsibilities: [
        "Built a modular CMS platform using React.js for frontend and Next.js for server-side rendering, improving page load times by 35%",
        "Developed backend APIs with Node.js and MongoDB, implementing CRUD operations with proper validation and error handling",
        "Implemented JWT-based authentication system with role-based access control for different user types",
        "Designed responsive UI components using Tailwind CSS and Material UI, ensuring cross-browser compatibility and mobile-first approach",
        "Integrated Shopify API for e-commerce functionality and various third-party web services for extended capabilities",
        "Participated in code reviews and implemented best practices for code quality and maintainability"
      ],
      duration: "4 months",
      level: "Intern",
      technologies: ["React.js", "Next.js", "Node.js", "MongoDB", "JWT", "Tailwind CSS", "Material UI", "Shopify API"]
    }
  ];

  // Enhanced skills data with new categories and levels
  const skills = {
    "Frontend Development": [
      { name: "React.js", level: 90, category: "framework", years: 3 },
      { name: "Next.js", level: 85, category: "framework", years: 2 },
      { name: "TypeScript", level: 85, category: "language", years: 2 },
      { name: "JavaScript (ES6+)", level: 90, category: "language", years: 4 },
      { name: "HTML5", level: 95, category: "markup", years: 4 },
      { name: "CSS3", level: 90, category: "style", years: 4 },
      { name: "Tailwind CSS", level: 85, category: "framework", years: 3 },
      { name: "Material UI", level: 80, category: "library", years: 2 }
    ],
    "Backend Development": [
      { name: "Node.js", level: 88, category: "runtime", years: 3 },
      { name: "Express.js", level: 85, category: "framework", years: 3 },
      { name: "MongoDB", level: 85, category: "database", years: 3 },
      { name: "Mongoose", level: 80, category: "library", years: 3 },
      { name: "REST APIs", level: 90, category: "concept", years: 3 },
      { name: "GraphQL", level: 75, category: "query", years: 1 },
      { name: "WebSockets", level: 80, category: "protocol", years: 2 }
    ],
    "Database & Storage": [
      { name: "MongoDB", level: 85, category: "nosql", years: 3 },
      { name: "MySQL", level: 80, category: "sql", years: 2 },
      { name: "SQL Server", level: 75, category: "sql", years: 1 },
      { name: "Firebase", level: 80, category: "bass", years: 2 },
      { name: "Redis", level: 70, category: "cache", years: 1 }
    ],
    "Cloud & DevOps": [
      { name: "AWS", level: 75, category: "cloud", years: 2 },
      { name: "Vercel", level: 85, category: "platform", years: 3 },
      { name: "Render", level: 85, category: "platform", years: 2 },
      { name: "Netlify", level: 80, category: "platform", years: 3 },
      { name: "Docker", level: 70, category: "container", years: 1 },
      { name: "Git", level: 90, category: "vcs", years: 4 },
      { name: "CI/CD", level: 75, category: "devops", years: 2 }
    ],
    "Authentication & Security": [
      { name: "JWT", level: 85, category: "auth", years: 3 },
      { name: "OAuth 2.0", level: 80, category: "auth", years: 2 },
      { name: "NextAuth", level: 75, category: "library", years: 2 },
      { name: "Firebase Auth", level: 80, category: "service", years: 2 },
      { name: "bcrypt", level: 75, category: "security", years: 2 }
    ],
    "Mobile Development": [
      { name: "React Native", level: 70, category: "framework", years: 1 },
      { name: "Android Studio", level: 70, category: "ide", years: 2 },
      { name: "Flutter", level: 60, category: "framework", years: 1 }
    ]
  };

  // Education data
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

  // Testimonials data
  const testimonials = [
    {
      name: "Parth Panchal",
      role: "Senior Software Developer",
      content:
        "Amit consistently delivers high-quality solutions. His ability to handle complex backend logic and real-time systems sets him apart from other developers.",
      rating: 5,
      avatar: "/testimonial1.jpg",
    },
    {
      name: "Bhakti Sukla",
      role: "Project Manager",
      content:
        "Amit is reliable, detail-oriented, and always ahead of deadlines. His leadership in integrating secure authentication and cloud services was remarkable.",
      rating: 5,
      avatar: "/testimonial2.jpg",
    },
    {
      name: "Ankit Singh",
      role: "UI/UX Designer",
      content:
        "Amit collaborates exceptionally well with designers. His frontend work is clean and Proper responsive as it is design using, and perfectly aligns with UI/UX standards.",
      rating: 5,
      avatar: "/testimonial3.jpg",
    },
    {
      name: "Ranveer Rathod",
      role: "Flutter App Developer",
      content:
        "Amit is a versatile engineer. His expertise in APIs and Proper Api Documentation and database architecture made mobile integration seamless and efficient.",
      rating: 5,
      avatar: "/testimonial4.jpg",
    },
  ];


  // Achievements data
  const achievements = [
    {
      title: "Best Developer Award",
      organization: "Quantalynk Technologies",
      date: "2025",
      icon: Award,
      color: "#F59E0B"
    },
    {
      title: "Top Performer",
      organization: "Alive Create Web Solution",
      date: "2024",
      icon: Star,
      color: "#8B5CF6"
    },
    {
      title: "Hackathon Winner",
      organization: "GTU Tech Fest",
      date: "2023",
      icon: TrendingUp,
      color: "#10B981"
    }
  ];

  // Blogs data
  const blogs = [
    {
      title: "Building Real-Time Applications with WebSockets",
      date: "Oct 2025",
      excerpt: "Learn how to implement real-time features in your web applications using WebSockets, Socket.io, and Node.js for seamless bi-directional communication.",
      tags: ["WebSockets", "Node.js", "Real-Time", "Socket.io"],
      readTime: "8 min read",
      category: "Backend Development",
      color: "#8B5CF6",
      link: "https://medium.com/@amitdamor/websockets-guide"
    },
    {
      title: "Mastering JWT Authentication in MERN Stack",
      date: "Sep 2025",
      excerpt: "A comprehensive guide to implementing secure authentication using JWT tokens in MongoDB, Express, React, and Node.js applications with best practices.",
      tags: ["JWT", "MERN", "Security", "Authentication"],
      readTime: "10 min read",
      category: "Full-Stack",
      color: "#0EA5E9",
      link: "https://medium.com/@amitdamor/jwt-auth-guide"
    },
    {
      title: "API Documentation Best Practices with Swagger",
      date: "Aug 2025",
      excerpt: "Explore how to create professional API documentation using Swagger/OpenAPI for better team collaboration, integration, and developer experience.",
      tags: ["API", "Swagger", "Documentation", "OpenAPI"],
      readTime: "6 min read",
      category: "API Development",
      color: "#10B981",
      link: "https://api.dev.theplatypus.in/api-docs/swagger.json"
    },
    {
      title: "Deploying MERN Apps on AWS and Render",
      date: "Jul 2025",
      excerpt: "Step-by-step guide to deploying full-stack MERN applications on cloud platforms like AWS and Render with CI/CD pipelines and environment configuration.",
      tags: ["AWS", "Render", "Deployment", "DevOps"],
      readTime: "12 min read",
      category: "Cloud & DevOps",
      color: "#F97316",
      link: "https://medium.com/@amitdamor/mern-deployment"
    },
    {
      title: "Building Scalable Admin Dashboards with React",
      date: "Jun 2025",
      excerpt: "Design patterns and best practices for creating scalable, performant admin dashboards using React.js, Material UI, and data visualization libraries.",
      tags: ["React", "Dashboard", "Material UI", "Frontend"],
      readTime: "9 min read",
      category: "Frontend Development",
      color: "#EAB308",
      link: "https://medium.com/@amitdamor/react-dashboards"
    },
    {
      title: "MongoDB Performance Optimization Tips",
      date: "May 2025",
      excerpt: "Essential techniques for optimizing MongoDB queries, indexing strategies, aggregation pipelines, and database design for high-performance applications.",
      tags: ["MongoDB", "Database", "Performance", "Optimization"],
      readTime: "11 min read",
      category: "Database",
      color: "#EF4444",
      link: "https://medium.com/@amitdamor/mongodb-optimization"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Enhanced CSS with new color scheme */}
      <style jsx>{`
        /* Base animations and effects */
        @keyframes fade-in { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-10px); } }
        @keyframes blink { 0%, 50% { opacity: 1; } 51%, 100% { opacity: 0; } }
        @keyframes slideIn { from { opacity: 0; transform: translateX(-20px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes float-code { 0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.3; } 50% { transform: translateY(-20px) rotate(5deg); opacity: 0.7; } }
        @keyframes pulse-glow { 0%, 100% { box-shadow: 0 0 20px rgba(139, 92, 246, 0.3); } 50% { box-shadow: 0 0 40px rgba(139, 92, 246, 0.6); } }
        @keyframes gradient-shift { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }
        @keyframes skill-progress { from { width: 0; } to { width: var(--skill-level); } }
        
        /* WhatsApp button animations */
        @keyframes whatsapp-bounce {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-10px) scale(1.05); }
        }
        
        @keyframes whatsapp-pulse {
          0% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7); }
          70% { box-shadow: 0 0 0 10px rgba(37, 211, 102, 0); }
          100% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0); }
        }
        
        @keyframes slide-in-right {
          from { transform: translateX(100px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        
        @keyframes shimmer {
          0% { background-position: -100% 0; }
          100% { background-position: 200% 0; }
        }
        
        /* Utility classes */
        .animate-fade-in { animation: fade-in 1s ease-out; }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .typing-cursor { animation: blink 1s infinite; }
        .code-line { animation: slideIn 0.5s ease-out forwards; opacity: 0; }
        .floating-code { animation: float-code 6s ease-in-out infinite; }
        .pulse-glow { animation: pulse-glow 2s ease-in-out infinite; }
        .animated-gradient { background-size: 200% 200%; animation: gradient-shift 8s ease infinite; }
        .skill-progress { animation: skill-progress 1.5s ease-out forwards; }
        .whatsapp-bounce { animation: whatsapp-bounce 2s ease-in-out infinite; }
        .whatsapp-pulse { animation: whatsapp-pulse 2s infinite; }
        .slide-in-right { animation: slide-in-right 0.5s ease-out; }
        .shimmer { animation: shimmer 2s infinite; }
        
        /* New color scheme */
        .gradient-text { background: linear-gradient(135deg, #8B5CF6, #EC4899, #3B82F6); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
        .glass-effect { background: rgba(30, 41, 59, 0.5); backdrop-filter: blur(12px); border: 1px solid rgba(139, 92, 246, 0.2); }
        .hover-lift { transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); }
        .hover-lift:hover { transform: translateY(-8px); box-shadow: 0 25px 50px rgba(139, 92, 246, 0.25); }
        
        /* Responsive breakpoints */
        @media (max-width: 640px) {
          .hero-title { font-size: 2.5rem; }
          .hero-subtitle { font-size: 1.25rem; }
          .section-padding { padding: 3rem 1rem; }
          .card-padding { padding: 1.5rem; }
        }
        
        @media (min-width: 641px) and (max-width: 1024px) {
          .hero-title { font-size: 3.5rem; }
          .hero-subtitle { font-size: 1.75rem; }
          .section-padding { padding: 4rem 2rem; }
          .card-padding { padding: 2rem; }
        }
        
        @media (min-width: 1025px) {
          .hero-title { font-size: 4.5rem; }
          .hero-subtitle { font-size: 2.25rem; }
          .section-padding { padding: 5rem 4rem; }
          .card-padding { padding: 2.5rem; }
        }
      `}</style>

      {/* Navigation with new colors */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg shadow-purple-500/20 border-b border-purple-500/20' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <img 
                src="/logo.png" 
                alt="Amit Damor Logo" 
                className="h-20 w-auto sm:h-27 rounded-lg hover:scale-110 transition-transform cursor-pointer"
                onClick={() => scrollToSection('home')}
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML = '<div class="w-18 h-27 sm:w-16 sm:h-27 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center"><span class="text-white font-bold text-sm sm:text-base">AD</span></div>';
                }}
              />
              <span 
                className="text-xl sm:text-2xl font-bold gradient-text hidden sm:inline cursor-pointer"
                onClick={() => scrollToSection('home')}
              >
                Amit Damor
              </span>
            </div>
            
            <div className="hidden md:flex space-x-6 lg:space-x-8">
              {['home', 'about', 'experience', 'projects', 'skills', 'education', 'blogs', 'contact'].map(item => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize text-sm lg:text-base transition-all hover:text-purple-400 hover:scale-105 ${activeSection === item ? 'text-purple-400 font-semibold' : 'text-gray-300'}`}
                >
                  {item}
                </button>
              ))}
            </div>

            <button 
              className="md:hidden p-2 rounded-lg hover:bg-slate-800/50 transition-colors" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} className="text-purple-400" /> : <Menu size={24} className="text-purple-400" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden glass-effect">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['home', 'about', 'experience', 'projects', 'skills', 'education', 'blogs', 'contact'].map(item => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`block w-full text-left px-3 py-2 capitalize rounded-lg transition-all text-sm ${activeSection === item ? 'bg-purple-900/50 text-purple-400' : 'text-gray-300 hover:bg-slate-800/50'}`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Enhanced Hero Section with WhatsApp CTA */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-pink-900/20 animated-gradient" />
        
        {/* Enhanced floating code snippets */}
        {floatingCodeSnippets.map((snippet, index) => (
          <div
            key={index}
            className="absolute text-xs sm:text-sm font-mono floating-code hidden sm:block"
            style={{
              left: snippet.x,
              top: snippet.y,
              color: snippet.color,
              animationDelay: `${snippet.delay}ms`
            }}
          >
            {snippet.text}
          </div>
        ))}
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="mb-8 animate-fade-in">
            {/* Enhanced profile photo */}
            <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 mx-auto mb-4 sm:mb-6 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 p-1 shadow-2xl shadow-purple-500/50 animate-float pulse-glow">
              <div className="w-full h-full rounded-full overflow-hidden bg-slate-900">
                <img 
                  src="/profile.jpg" 
                  alt="Amit Damor - Software Developer"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = '<div class="w-full h-full bg-slate-900 flex items-center justify-center"><div class="text-4xl sm:text-5xl md:text-6xl font-bold gradient-text">AD</div></div>';
                  }}
                />
              </div>
            </div>
            
            <h1 className="hero-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 gradient-text animate-pulse">
              Amit Damor
            </h1>
            
            <div className="h-8 sm:h-10 md:h-12 mb-4 sm:mb-6">
              <h2 className="hero-subtitle text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-200 font-semibold">
                {typedText}
                <span className="typing-cursor">|</span>
              </h2>
            </div>
            
            <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto mb-6 sm:mb-8 px-4">
              Backend API Development & Testing | MERN Stack | Real-Time App Development
            </p>
            
            {/* Enhanced code display */}
            <div className="max-w-full sm:max-w-2xl mx-auto mb-6 sm:mb-8 p-3 sm:p-4 bg-slate-800/50 rounded-lg border border-purple-500/30">
              <div className="text-left font-mono text-xs sm:text-sm">
                {codeLines.map((line, index) => (
                  <div 
                    key={index}
                    className={`code-line ${
                      line.type === 'string' ? 'text-green-400' :
                      line.type === 'property' ? 'text-blue-400' :
                      line.type === 'boolean' ? 'text-yellow-400' :
                      line.type === 'array' ? 'text-purple-400' :
                      line.type === 'object' ? 'text-gray-400' :
                      'text-gray-300'
                    }`}
                    style={{ animationDelay: `${line.delay}ms` }}
                  >
                    {line.text}
                  </div>
                ))}
              </div>
            </div>
            
            {/* Enhanced CTA Buttons with WhatsApp */}
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 mb-6 sm:mb-8 px-4">
              <a 
                href="mailto:amitdamordhd@gmail.com" 
                className="flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 rounded-full transition-all transform hover:scale-105 shadow-lg shadow-purple-500/50 text-sm sm:text-base"
              >
                <Mail size={18} />
                Contact Me
              </a>
              
              {/* WhatsApp Button */}
              <button
                onClick={() => openWhatsApp('Hi Amit! I\'m interested in discussing a project opportunity.')}
                className="flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 rounded-full transition-all transform hover:scale-105 shadow-lg shadow-green-500/50 text-sm sm:text-base whatsapp-pulse"
              >
                <FaWhatsapp size={18} />
                WhatsApp
              </button>
              
              <a 
                href="/resume.pdf" 
                download="Amit_Damor_Resume.pdf" 
                className="flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-green-200 border-2 border-purple-400 hover:bg-purple-400/10 rounded-full transition-all shadow-lg shadow-purple-500/30 text-sm sm:text-base"
              >
                <Download size={18} />
                Download Resume
              </a>
            </div>
            
            <div className="flex justify-center gap-4 sm:gap-6">
              <a 
                href="https://www.linkedin.com/in/amit-damor-341241251" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-300 hover:text-purple-400 transition-all transform hover:scale-110"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="https://github.com/DamorAmitbhai" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-300 hover:text-purple-400 transition-all transform hover:scale-110"
              >
                <Github size={24} />
              </a>
              <a 
                href="mailto:amitdamordhd@gmail.com" 
                className="text-gray-300 hover:text-purple-400 transition-all transform hover:scale-110"
              >
                <Mail size={24} />
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
              I am a Software Developer Engineer with a Master's in Computer Applications (MCA) and strong experience in full-stack development,Mern stack Developer, backend systems, and real-time applications. I specialize in MERN stack development (MongoDB, Express.js, React.js, Node.js) to build scalable, secure, and high-performance web applications.
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
      
      {/* Enhanced Experience Section */}
      <section id="experience" className="section-padding bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center gradient-text">
            Work Experience
          </h2>
          <div className="space-y-6 sm:space-y-8">
            {experiences.map((exp, idx) => (
              <div key={idx} className="glass-effect rounded-2xl card-padding hover-lift border-l-4 border-purple-500">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl sm:text-2xl font-bold text-purple-400">{exp.role}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        exp.level === 'Senior' ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30' :
                        exp.level === 'Junior' ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30' :
                        'bg-green-500/20 text-green-300 border border-green-500/30'
                      }`}>
                        {exp.level}
                      </span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 text-gray-200 mb-2">
                      <div className="flex items-center gap-2">
                        <Building size={16} className="text-purple-400" />
                        <span className="font-semibold text-sm sm:text-base">{exp.company}</span>
                      </div>
                      <span className="text-gray-500 text-xs sm:text-sm">•</span>
                      <span className="text-xs sm:text-sm bg-slate-700/50 px-2 sm:px-3 py-1 rounded-full border border-slate-600/30">{exp.type}</span>
                    </div>
                    <div className="flex items-center gap-4 text-xs sm:text-sm text-gray-400">
                      <span className="flex items-center gap-1">
                        <Calendar size={14} />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin size={14} />
                        {exp.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={14} />
                        {exp.duration}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-200 mb-4 italic text-sm sm:text-base">{exp.description}</p>
                <ul className="space-y-2">
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-300 text-sm sm:text-base">
                      <ChevronRight className="text-purple-400 flex-shrink-0 mt-1" size={14} />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Projects Section */}
      <section id="projects" className="section-padding">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center gradient-text">
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {projects.map((project, idx) => {
              const Icon = project.icon;
              return (
                <div key={idx} className="glass-effect rounded-2xl overflow-hidden hover-lift group border border-slate-700/50">
                  {/* Project Header */}
                  <div className="relative h-2 bg-gradient-to-r" style={{ backgroundImage: `linear-gradient(to right, ${project.primaryColor}, ${project.secondaryColor})` }} />
                  
                  <div className="p-4 sm:p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="p-3 rounded-xl" style={{ backgroundColor: `${project.primaryColor}20` }}>
                        <Icon className="text-white" size={24} style={{ color: project.primaryColor }} />
                      </div>
                      <div className="flex items-center gap-2">
                        {project.status === 'active' && (
                          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                        )}
                        <span className="text-xs text-gray-400 uppercase tracking-wide">{project.category}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-1 group-hover:text-purple-400 transition-colors">{project.title}</h3>
                    <p className="text-sm text-gray-400 mb-2">{project.subtitle}</p>
                    <p className="text-gray-500 text-xs mb-3">{project.period}</p>
                    <p className="text-gray-300 text-sm mb-4 line-clamp-3">{project.description}</p>
                    
                    {/* Key Features */}
                    <div className="mb-4">
                      <h4 className="text-xs font-semibold text-gray-400 mb-2">Key Features:</h4>
                      <ul className="space-y-1">
                        {project.features.slice(0, 2).map((feature, i) => (
                          <li key={i} className="flex items-start gap-1 text-xs text-gray-400">
                            <ChevronRight className="text-purple-400 flex-shrink-0 mt-0.5" size={10} />
                            <span className="line-clamp-1">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.slice(0, 4).map((tech, i) => (
                        <span key={i} className="text-white bg-slate-700/50 hover:bg-slate-600/50 px-2 sm:px-3 py-1 rounded-full transition-colors border border-slate-600/30">
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 4 && (
                        <span className="text-white bg-slate-700/50 px-2 sm:px-3 py-1 rounded-full border border-slate-600/30">
                          +{project.tech.length - 4}
                        </span>
                      )}
                    </div>
                    
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Enhanced Skills Section */}
      <section id="skills" className="section-padding bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center gradient-text">
            Skills & Expertise
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {Object.entries(skills).map(([category, items], idx) => (
              <div key={idx} className="glass-effect rounded-2xl card-padding hover-lift">
                <h3 className="text-lg sm:text-xl font-bold text-purple-400 mb-6 flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full" />
                  {category}
                </h3>
                <div className="space-y-4">
                  {items.map((skill, i) => (
                    <div key={i} className="group">
                      <div className="flex justify-between items-center mb-2">
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-gray-200 group-hover:text-purple-400 transition-colors font-medium">
                            {skill.name}
                          </span>
                          <span className="text-xs text-gray-500">
                            {skill.years && `${skill.years} yrs`}
                          </span>
                        </div>
                        <span className="text-xs text-gray-400 font-medium">{skill.level}%</span>
                      </div>
                      <div className="relative">
                        <div className="w-full bg-slate-700 rounded-full h-3 overflow-hidden">
                          <div 
                            className="h-full rounded-full transition-all duration-1000 ease-out skill-progress relative overflow-hidden"
                            style={{ 
                              '--skill-level': `${skill.level}%`,
                              background: `linear-gradient(90deg, #8B5CF6 0%, #EC4899 50%, #3B82F6 100%)`
                            }}
                          >
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent shimmer" />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="section-padding">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center gradient-text">
            Education
          </h2>
          <div className="space-y-4 sm:space-y-6">
            {education.map((edu, idx) => (
              <div key={idx} className="glass-effect rounded-2xl p-4 sm:p-6 hover-lift border-l-4 border-blue-500">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="flex items-start gap-4 mb-4 md:mb-0">
                    <GraduationCap className="text-blue-400 flex-shrink-0 mt-1" size={28} />
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-blue-400">{edu.degree}</h3>
                      <p className="text-gray-200 text-sm sm:text-base">{edu.institution}</p>
                      <p className="text-gray-400 text-xs sm:text-sm">{edu.details}</p>
                      {edu.semesters && (
                        <div className="mt-2 flex flex-wrap gap-2">
                          {edu.semesters.map((sem, i) => (
                            <span key={i} className="text-xs bg-slate-700/50 px-2 py-1 rounded border border-slate-600/30 text-gray-300">
                              {sem.sem}: {sem.cpi} CPI
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-400 text-xs sm:text-sm">{edu.period}</p>
                    <p className="text-blue-400 font-semibold text-sm sm:text-base">{edu.grade}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="section-padding bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center gradient-text">
            Achievements & Awards
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {achievements.map((achievement, idx) => {
              const Icon = achievement.icon;
              return (
                <div key={idx} className="glass-effect rounded-2xl p-4 sm:p-6 hover-lift text-center border border-slate-700/50">
                  <div className="inline-flex p-3 sm:p-4 rounded-full mb-4" style={{ backgroundColor: `${achievement.color}20` }}>
                    <Icon className="text-white" size={28} style={{ color: achievement.color }} />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white mb-2">{achievement.title}</h3>
                  <p className="text-gray-200 mb-1 text-sm sm:text-base">{achievement.organization}</p>
                  <p className="text-gray-400 text-xs sm:text-sm">{achievement.date}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="section-padding">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center gradient-text">
            Testimonials
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 sm:gap-6">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="glass-effect rounded-2xl p-4 sm:p-6 hover-lift">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={14} />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic text-sm sm:text-base">"{testimonial.content}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center">
                    <User className="text-white" size={16} />
                  </div>
                  <div>
                    <p className="font-semibold text-purple-400 text-sm sm:text-base">{testimonial.name}</p>
                    <p className="text-xs sm:text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blogs Section */}
      <section id="blogs" className="section-padding bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center gradient-text">
            Latest Blog Posts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {blogs.map((blog, idx) => (
              <a 
                key={idx} 
                href={blog.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="glass-effect rounded-2xl overflow-hidden hover-lift cursor-pointer group border border-slate-700/50"
              >
                <div className="h-2" style={{ backgroundColor: blog.color }} />
                <div className="p-4 sm:p-6">
                  <div className="w-full h-24 sm:h-32 rounded-lg bg-gradient-to-br mb-4 flex items-center justify-center" style={{ backgroundImage: `linear-gradient(135deg, ${blog.color}20, ${blog.color}40)` }}>
                    <Book className="text-white" size={36} style={{ color: blog.color }} />
                  </div>
                  <span className="text-xs bg-slate-700/50 px-3 py-1 rounded-full border border-slate-600/30 text-gray-300">
                    {blog.category}
                  </span>
                  <p className="text-gray-400 text-xs sm:text-sm mt-3 mb-2 flex items-center gap-2">
                    <Calendar size={12} />
                    {blog.date} • <Clock size={12} /> {blog.readTime}
                  </p>
                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-purple-400 transition-colors mb-3">{blog.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm line-clamp-2">{blog.excerpt}</p>
                  <div className="flex flex-wrap gap-2">
                    {blog.tags.map((tag, i) => (
                      <span key={i} className="text-xs bg-slate-700/50 px-3 py-1 rounded-full border border-slate-600/30 text-gray-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Contact Section with WhatsApp */}
      <section id="contact" className="section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 gradient-text">
            Contact Me
          </h2>
          <div className="glass-effect rounded-2xl card-padding">
            <p className="text-base sm:text-lg text-gray-200 mb-6 sm:mb-8">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            
            <form onSubmit={handleFormSubmit} className="mb-6 sm:mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-gray-200 placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors text-sm sm:text-base"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-gray-200 placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors text-sm sm:text-base"
                  required
                />
              </div>
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-gray-200 placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors mb-4 text-sm sm:text-base"
                required
              />
              <button
                type="submit"
                className="px-6 sm:px-8 py-2 sm:py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 rounded-full transition-all transform hover:scale-105 shadow-lg shadow-purple-500/50 text-sm sm:text-base"
              >
                Send Message
              </button>
            </form>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-5">
            <a href="mailto:amitdamordhd@gmail.com" className="flex flex-col items-center gap-3 p-4 sm:p-6 bg-slate-800/50 rounded-xl hover:bg-slate-700/50 transition-all group border border-slate-600/50">
              <Mail className="text-purple-400 group-hover:scale-110 transition-transform" size={28} />
              <div>
                <p className="text-xs sm:text-sm text-gray-400">Email</p>
                <p className="text-purple-400 text-xs sm:text-sm">amitdamordhd@gmail.com</p>
              </div>
            </a>
            
            {/* WhatsApp - Primary */}
            <button
              onClick={() => openWhatsApp('Hi Amit! I\'d like to discuss a potential collaboration.')}
              className="flex flex-col items-center gap-3 p-4 sm:p-6 bg-gradient-to-br from-green-600/20 to-green-500/20 rounded-xl hover:from-green-600/30 hover:to-green-500/30 transition-all group border border-green-500/30 whatsapp-bounce"
            >
              <FaWhatsapp className="text-green-400 group-hover:scale-110 transition-transform" size={28} />
              <div>
                <p className="text-xs sm:text-sm text-gray-400">WhatsApp</p>
                <p className="text-green-400 text-xs sm:text-sm font-medium">+91 9512394858</p>
              </div>
            </button>
            
            <a href="tel:9512394858" className="flex flex-col items-center gap-3 p-4 sm:p-6 bg-slate-800/50 rounded-xl hover:bg-slate-700/50 transition-all group border border-slate-600/50">
              <Phone className="text-blue-400 group-hover:scale-110 transition-transform" size={28} />
              <div>
                <p className="text-xs sm:text-sm text-gray-400">Phone</p>
                <p className="text-blue-400 text-xs sm:text-sm">+91 9512394858</p>
              </div>
            </a>
            
            <div className="flex flex-col items-center gap-3 p-4 sm:p-6 bg-slate-800/50 rounded-xl border border-slate-600/50">
              <MapPin className="text-green-400" size={28} />
              <div>
                <p className="text-xs sm:text-sm text-gray-400">Location</p>
                <p className="text-green-400 text-xs sm:text-sm">Vadodara, Gujarat, India</p>
              </div>
            </div>
          </div>
          
          {/* Quick WhatsApp Actions */}
          <div className="mt-6 sm:mt-8 p-4 bg-gradient-to-r from-green-600/10 to-green-500/10 rounded-lg border border-green-500/30">
            <p className="text-sm text-gray-300 mb-3">Quick Actions:</p>
            <div className="flex flex-wrap justify-center gap-2">
              <button
                onClick={() => openWhatsApp('Hi Amit! I\'d like to hire you for a project.')}
                className="px-3 py-1 bg-green-600/20 hover:bg-green-600/30 text-green-400 rounded-lg text-xs transition-colors border border-green-500/30"
              >
                Hire Me
              </button>
              <button
                onClick={() => openWhatsApp('Hi Amit! I\'d like to collaborate on a project.')}
                className="px-3 py-1 bg-green-600/20 hover:bg-green-600/30 text-green-400 rounded-lg text-xs transition-colors border border-green-500/30"
              >
                Collaborate
              </button>
              <button
                onClick={() => openWhatsApp('Hi Amit! I have a question about your work.')}
                className="px-3 py-1 bg-green-600/20 hover:bg-green-600/30 text-green-400 rounded-lg text-xs transition-colors border border-green-500/30"
              >
                Ask Question
              </button>
              <button
                onClick={() => openWhatsApp('Hi Amit! Let\'s schedule a call to discuss opportunities.')}
                className="px-3 py-1 bg-green-600/20 hover:bg-green-600/30 text-green-400 rounded-lg text-xs transition-colors border border-green-500/30"
              >
                Schedule Call
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900/50 py-6 sm:py-8 px-4 border-t border-slate-700/50">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-300 text-sm sm:text-base">
            © ❤️ 2025 Amit Damor. All rights reserved. ❤️
          </p>
          <div className="flex justify-center gap-4 sm:gap-6 mt-4">
            <a href="https://www.linkedin.com/in/amit-damor-341241251" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-purple-400 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="https://github.com/DamorAmitbhai" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-purple-400 transition-colors">
              <Github size={20} />
            </a>
            <a href="mailto:amitdamordhd@gmail.com" className="text-gray-300 hover:text-purple-400 transition-colors">
              <Mail size={20} />
            </a>
            {/* WhatsApp in footer */}
            <button
              onClick={() => openWhatsApp()}
              className="text-gray-300 hover:text-green-400 transition-colors"
              aria-label="Contact on WhatsApp"
            >
              <FaWhatsapp size={20} />
            </button>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      {showWhatsApp && (
        <div className="fixed bottom-4 sm:bottom-8 right-6 sm:right-12 z-50 slide-in-right">
          <button
            onClick={() => openWhatsApp()}
            className="group relative p-4 sm:p-4 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 rounded-full shadow-2xl shadow-green-500/50 transition-all transform hover:scale-110 z-50 whatsapp-pulse"
            aria-label="Contact on WhatsApp"
          >
            <FaWhatsapp size={20} className="text-white" />
            {/* Tooltip */}
            <span className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-gray-800 text-white text-xs rounded-full opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
              Chat on WhatsApp
            </span>
          </button>
        </div>
      )}

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <div className="fixed bottom-4 sm:bottom-6 left-6 sm:left-8 z-50">
          <button
            onClick={scrollToTop}
            className="group relative p-3 sm:p-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 rounded-full shadow-2xl shadow-purple-500/50 transition-all transform hover:scale-110 animate-bounce"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} className="text-white" />
          </button>
          {/* Tooltip */}
          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-800 text-white text-xs rounded-full opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            Scroll to Top
            {/* Tooltip arrow */}
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1">
              <div className="border-4 border-transparent border-t-gray-800"></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;