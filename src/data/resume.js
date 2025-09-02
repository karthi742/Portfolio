// Resume data extracted and organized
export const resumeData = {
 personal: {
    name: "Karthi B",
    title: "Full Stack Developer",
    email: "karthiazp@gmail.com",
    phone: "+91 6374564278",
    location: "Thanjavur, Tamil Nadu, India",
    website: "https://www.karthicodes.online/",
    summary:
      "Full Stack Developer with 3.5 years of experience in PHP (Laravel), Node.js (Express, NestJS), and React. Proven track record of building scalable web applications, REST APIs, and CMS platforms. Skilled in backend development, frontend integration, cloud deployment, and cross-team collaboration. Recently expanded expertise into React for modern UI development."
  },
  
  social: {
    github: "https://github.com/karthi742",
    linkedin: "https://www.linkedin.com/in/karthi-b-9a3a67381/",
    portfolio: "#"
  },

 skills: {
  frontend: [
    { name: "React", level: 50 },
    { name: "JavaScript", level: 85 },
    { name: "TypeScript", level: 60 },
    { name: "HTML5/CSS3", level: 80 } 
  ],
  backend: [
    { name: "PHP", level: 90 },
    { name: "Node.js", level: 85 },
    { name: "Express.js", level: 82 },
    { name: "NestJS", level: 80 },
    { name: "Laravel", level: 90 }
  ],
  database: [
    { name: "MySQL", level: 85 },
    { name: "SQL", level: 85 }
  ],
  cloud: [
    { name: "AWS", level: 75 },
    { name: "Azure", level: 70 },
    { name: "Docker", level: 75 },
    { name: "GitHub", level: 90 }
  ]
},

 experience: [
    {
      id: 1,
      company: "Xangam Pvt. Ltd",
      position: "Full Stack Developer",
      duration: "May 2023 – June 2025",
      location: "India",
      achievements: [
        "Developed REST APIs using NestJS to support multiple modules in the Orion project.",
        "Implemented admin-user access control in MyInfoHub for managing policies and performing data updates.",
        "Built workflow system in MyTravel module for handling travel requests and approvals, improving efficiency.",
        "Deployed applications on AWS with server, database, and storage configuration."
      ],
      technologies: ["NestJS", "Node.js", "Microsoft Azure", "MySQL"]
    },
    {
      id: 2,
      company: "Cogere InfoTech Pvt. Ltd",
      position: "Junior Software Engineer",
      duration: "Feb 2022 – Apr 2023",
      location: "India",
      achievements: [
        "Developed backend APIs for EzyCart smart trolley application using Node.js and deployed them securely.",
        "Implemented OAuth authentication with Passport.js for secure user access.",
        "Built ApacFin financial platform in Laravel with EMI calculator and CMS panel for managing content and rates.",
        "Enhanced CMS for Attendance Management System with shift scheduling and automated notifications."
      ],
      technologies: ["Node.js", "Laravel", "MySQL", "OAuth", "AWS"]
    }
  ],

  education: [
    {
      id: 1,
      institution: "Hindusthan Institute of Technology, Coimbatore",
      degree: "Bachelor of Engineering in Computer Science",
      duration: "2017 – 2021",
      gpa: "CGPA: 7.9/10",
    }
  ],

 certifications: [
  {
    name: "Basic Python Certification",
    issuer: "JIT Academy",
    date: "October 2021",
    credentialId: "JIT-PYTHON-2021-001",
    url: "/pythoncerificate.jpg"
  }
],

  projects: [
    {
      id: 1,
      title: "Orion",
      description:
        "Backend services developed using NestJS for multiple modules including policy management and travel request workflows.",
      image: "/MHB-Logo-latest 1.png",
      technologies: ["NestJS", "Node.js", "MySQL", "Microsoft Azure"],
      liveUrl: "https://orion.karthib.dev",
      githubUrl: "https://github.com/karthib/orion",
      featured: true
    },
    {
      id: 2,
      title: "Attendance Management System (AMS - Malaysia, Onsite)",
      description:
        "Built using Laravel with shift scheduling, overtime calculations, and Python-based face recognition login system. Deployed on AWS with automated notifications.",
      image: "/ams.png",
      technologies: ["Laravel", "Python", "AWS", "MySQL"],
      liveUrl: "https://ams.karthib.dev",
      githubUrl: "https://github.com/karthib/ams",
      featured: true
    },
    {
      id: 3,
      title: "EzyCart",
      description:
        "Smart trolley application with backend APIs built in Node.js, OAuth authentication with Passport.js, and secure deployment.",
      image: "/Retailetics-White.png",
      technologies: ["Node.js", "Passport.js", "OAuth", "MySQL"],
      liveUrl: "https://ezycart.karthib.dev",
      githubUrl: "https://github.com/karthib/ezycart",
      featured: true
    },
    {
      id: 4,
      title: "ApacFin",
      description:
        "Financial platform built with Laravel featuring EMI calculator and CMS panel for efficient loan management.",
      image: "/apac_financial_services_logo.jpeg",
      technologies: ["Laravel", "PHP", "MySQL"],
      liveUrl: "https://apacfin.karthib.dev",
      githubUrl: "https://github.com/karthib/apacfin",
      featured: true
    }
  ]
};