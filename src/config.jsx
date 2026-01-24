import React from 'react';
import { FaGithub, FaMapPin, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";
import { HiCode, HiCube, HiDatabase, HiMail, HiBriefcase } from "react-icons/hi";

export const config = {
    developer: {
        name: "Kaushik",
        title: "Full-Stack Developer & AI/ML Engineer",
        bio: "Full-stack builder creating digital experiences that respect humans and scale with clarity. Specializing in AI/ML integration and modern web technologies."
    },
    contact: {
        email: "skaushikrao@gmail.com",
        phone: "+91-7204185491",
        location: "Bengaluru, Karnataka, India",
        linkedin: "linkedin.com/in/s-kaushik-rao-33336a289",
        portfolio: "skaushikraoportfolio.vercel.app",
        github: "https://github.com/kaushikrao"
    },
    education: {
        university: "Manipal University Jaipur",
        degree: "Bachelor of Technology in Computer Science (AI & Machine Learning)",
        period: "August 2023 – May 2027",
        location: "Jaipur, India"
    },
    NAV_ITEMS: [
        { href: '/', label: 'Home' },
        { href: '/projects', label: 'Projects' },
        { href: '/contact', label: 'Contact' }
    ],
    skills: [
        {
            title: "Languages",
            icon: <HiCode />,
            description: "Programming & Markup",
            bgClass: "bg-blue-500/10",
            iconClass: "text-blue-500",
            skills: [
                { name: "Python", level: "Advanced", hot: true },
                { name: "JavaScript", level: "Advanced" },
                { name: "HTML5", level: "Expert" },
                { name: "CSS3", level: "Expert" },
                { name: "SQL", level: "Intermediate" }
            ]
        },
        {
            title: "Frameworks & Libraries",
            icon: <HiCube />,
            description: "Web Development",
            bgClass: "bg-emerald-500/10",
            iconClass: "text-emerald-500",
            skills: [
                { name: "React.js", level: "Advanced", hot: true },
                { name: "Framer Motion", level: "Advanced" },
                { name: "Bootstrap", level: "Intermediate" },
                { name: "MediaPipe", level: "Intermediate" },
                { name: "TensorFlow", level: "Intermediate" }
            ]
        },
        {
            title: "Cloud & DevOps",
            icon: <HiDatabase />,
            description: "Infrastructure & Deployment",
            bgClass: "bg-orange-500/10",
            iconClass: "text-orange-500",
            skills: [
                { name: "Google Cloud Platform", level: "Intermediate", hot: true },
                { name: "Cloud Computing IaaS", level: "Intermediate" },
                { name: "Vercel", level: "Advanced" },
                { name: "Firebase", level: "Intermediate" }
            ]
        },
        {
            title: "AI/ML",
            icon: <HiCube />,
            description: "Artificial Intelligence",
            bgClass: "bg-purple-500/10",
            iconClass: "text-purple-500",
            skills: [
                { name: "Machine Learning", level: "Intermediate", hot: true },
                { name: "Computer Vision", level: "Intermediate" },
                { name: "LLM Integration", level: "Intermediate" },
                { name: "Probability Theory", level: "Intermediate" },
                { name: "Statistics", level: "Intermediate" }
            ]
        },
        {
            title: "Tools",
            icon: <HiCube />,
            description: "Development Tools",
            bgClass: "bg-pink-500/10",
            iconClass: "text-pink-500",
            skills: [
                { name: "Git", level: "Advanced", hot: true },
                { name: "WordPress", level: "Intermediate" },
                { name: "Notion", level: "Intermediate" },
                { name: "Sanity CMS", level: "Intermediate" },
                { name: "Xano", level: "Intermediate" }
            ]
        }
    ],
    experiences: [
        {
            position: "Co-Founder",
            company: "Thriftz",
            period: "April 2025 – Present",
            location: "India",
            description: "Built full-stack web and Android mobile application serving 500+ active students across institution. Led product development, technical strategy, and go-to-market execution for circular economy platform.",
            responsibilities: [
                "Built full-stack web and Android mobile application serving 500+ active students",
                "Led product development, technical strategy, and go-to-market execution",
                "Developed circular economy platform with real-time features"
            ],
            technologies: ["React.js", "Android", "Node.js", "MongoDB", "Cloud Computing"]
        },
        {
            position: "Senior Technical Advisor",
            company: "IEEE GRSS MUJ",
            period: "August 2025 – Present",
            location: "Jaipur, India",
            description: "Architected and developed official chapter website with 3D components and advanced animations using Framer Motion.",
            responsibilities: [
                "Architected and developed official chapter website",
                "Implemented 3D components and advanced animations",
                "Achieved 95+ Lighthouse performance score"
            ],
            technologies: ["React.js", "Framer Motion", "Three.js", "3D Components"]
        },
        {
            position: "Projects and Research Director",
            company: "AIML Community MUJ",
            period: "June 2025 – Present",
            location: "Jaipur, India",
            description: "Led research initiatives and coordinated technical workshops for 200+ community members.",
            responsibilities: [
                "Led research initiatives and coordinated technical workshops",
                "Managed 200+ community members",
                "Organized AI/ML focused events and research projects"
            ],
            technologies: ["AI/ML", "Research", "Community Management", "Technical Workshops"]
        },
        {
            position: "Web Content Manager",
            company: "TechLearn Solutions",
            period: "May 2025 – Present",
            location: "Remote",
            description: "Managed digital content strategy and optimized web presence using SEO best practices and analytics.",
            responsibilities: [
                "Managed digital content strategy and optimized web presence",
                "Implemented SEO best practices and analytics",
                "Coordinated content creation workflows and maintained WordPress platform"
            ],
            technologies: ["WordPress", "SEO", "Analytics", "Content Management"]
        },
        {
            position: "Arcade Facilitator",
            company: "Google Cloud Skills Boost",
            period: "April 2025 – Present",
            location: "Remote",
            description: "Facilitated hands-on cloud computing workshops on GCP services for 100+ labs.",
            responsibilities: [
                "Facilitated hands-on cloud computing workshops on GCP services",
                "Mentored 100+ students on cloud architecture and deployment strategies",
                "Conducted Google Cloud learning labs and workshops"
            ],
            technologies: ["Google Cloud Platform", "Cloud Computing", "Mentoring", "Workshops"]
        },
        {
            position: "Full Stack Engineer",
            company: "ASR Aviation",
            period: "March 2025 – May 2025",
            location: "Remote",
            description: "Developed responsive web applications using React.js, JavaScript, HTML5, CSS3, and Bootstrap framework.",
            responsibilities: [
                "Developed responsive web applications using React.js and Bootstrap",
                "Collaborated with cross-functional teams to deliver customer-facing features",
                "Worked under tight deadlines with high-quality deliverables"
            ],
            technologies: ["React.js", "JavaScript", "HTML5", "CSS3", "Bootstrap"]
        }
    ],
    projects: [
        {
            id: 1,
            title: "AI Study Buddy",
            description: "Engineered real-time focus monitoring system using MediaPipe for webcam-based attention tracking with 85% accuracy. Integrated large language model API for interactive tutoring with gesture-based hand detection for doubt resolution. Built responsive React.js interface with real-time video processing pipeline handling 30 FPS performance.",
            image: "/projects/project-1.webp",
            technologies: ["Computer Vision", "LLM Integration", "MediaPipe", "React.js", "Real-time Processing"],
            github: "https://github.com/kaushikrao",
            demo: "#",
            featured: true
        },
        {
            id: 2,
            title: "Thriftz Platform",
            description: "Developed cross-platform solution with React.js web app and native Android application. Implemented user authentication, real-time chat, product listings, and transaction management features. Deployed on cloud infrastructure with 99.9% uptime; optimized database queries reducing latency by 60%.",
            image: "/projects/project-2.webp",
            technologies: ["React.js", "Android", "Node.js", "Real-time Chat", "Cloud Infrastructure"],
            github: "https://github.com/kaushikrao",
            demo: "#",
            featured: true
        },
        {
            id: 3,
            title: "IEEE GRSS Chapter Website",
            description: "Created interactive website featuring 3D components, smooth animations, and modern UI/UX design patterns. Utilized React.js and Framer Motion for performant animations; achieved 95+ Lighthouse performance score.",
            image: "/projects/project-3.webp",
            technologies: ["React.js", "Framer Motion", "3D Components", "Modern UI/UX", "Performance Optimization"],
            github: "https://github.com/kaushikrao",
            demo: "#",
            featured: true
        }
    ],
    achievements: [
        {
            title: "2x Hackathon Winner",
            description: "ACM Hacks 10.0 Finalist and Techgig National Hackathon winner (2X)",
            type: "award"
        },
        {
            title: "4x SEA Awardee",
            description: "Recognized for academic excellence and extracurricular contributions",
            type: "award"
        },
        {
            title: "Technical Head, Enviroclub MUJ",
            description: "Managed technology infrastructure and digital initiatives",
            period: "June 2024 – Aug 2025",
            type: "leadership"
        }
    ],
    certifications: [
        {
            name: "Introduction to Machine Learning",
            issuer: "Coursera",
            type: "certification"
        },
        {
            name: "Artificial Intelligence Course",
            issuer: "AI/ML Platform",
            type: "certification"
        },
        {
            name: "Business Communication",
            issuer: "Professional Development",
            type: "certification"
        }
    ],
    contactInfo: [
        {
            icon: <FaEnvelope className="w-5 h-5" />,
            label: "Email",
            value: "skaushikrao@gmail.com",
            link: "mailto:skaushikrao@gmail.com"
        },
        {
            icon: <FaPhone className="w-5 h-5" />,
            label: "Phone",
            value: "+91-7204185491",
            link: "tel:+91-7204185491"
        },
        {
            icon: <FaLinkedin className="w-5 h-5" />,
            label: "LinkedIn",
            value: "s-kaushik-rao-33336a289",
            link: "https://linkedin.com/in/s-kaushik-rao-33336a289"
        },
        {
            icon: <FaGithub className="w-5 h-5" />,
            label: "Portfolio",
            value: "skaushikraoportfolio.vercel.app",
            link: "https://skaushikraoportfolio.vercel.app"
        },
        {
            icon: <FaMapPin className="w-5 h-5" />,
            label: "Location",
            value: "Bengaluru, Karnataka, India",
            link: null
        }
    ]
}

