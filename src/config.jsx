import React from 'react';
import { FaGithub, FaMapPin, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";
import { HiCode, HiCube, HiDatabase, HiMail, HiBriefcase } from "react-icons/hi";

export const config = {
    developer: {
        name: "Kaushik",
        title: "Co-Founder, Thriftz Marketplace LLP, Full stack web and App developer",
        bio: "Full-stack builder creating digital experiences that respect humans and scale with clarity. Specializing in AI/ML integration and modern web technologies."
    },
    contact: {
        email: "skaushikrao@gmail.com",
        phone: "+91-7204185491",
        location: "Bengaluru, Karnataka, India",
        linkedin: "linkedin.com/in/s-kaushik-rao-33336a289",
        portfolio: "skaushikraoportfolio.vercel.app",
        github: "https://github.com/SKaushikRao"
    },
    education: {
        university: "Manipal University Jaipur",
        degree: "B.Tech in Computer Science (AI & Machine Learning)",
        period: "Aug 2023 – May 2027",
        location: "Jaipur, India",
        gpa: "8.05/10",
        coursework: "Linear Algebra, Probability & Statistics, Data Structures, Algorithms, Machine Learning"
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
                { name: "SQL", level: "Intermediate" },
                { name: "HTML5", level: "Expert" },
                { name: "CSS3", level: "Expert" }
            ]
        },
        {
            title: "Frameworks & Libraries",
            icon: <HiCube />,
            description: "Web Development & Data Processing",
            bgClass: "bg-emerald-500/10",
            iconClass: "text-emerald-500",
            skills: [
                { name: "React.js", level: "Advanced", hot: true },
                { name: "Apache Kafka", level: "Advanced" },
                { name: "Apicurio", level: "Intermediate" },
                { name: "Avro Schema", level: "Intermediate" },
                { name: "Framer Motion", level: "Advanced" },
                { name: "Bootstrap", level: "Intermediate" },
                { name: "MediaPipe", level: "Intermediate" },
                { name: "TensorFlow", level: "Intermediate" }
            ]
        },
        {
            title: "AI/ML",
            icon: <HiCube />,
            description: "Artificial Intelligence",
            bgClass: "bg-purple-500/10",
            iconClass: "text-purple-500",
            skills: [
                { name: "Computer Vision", level: "Advanced", hot: true },
                { name: "Representation Learning", level: "Advanced" },
                { name: "LLM Integration", level: "Advanced" },
                { name: "Metric Learning", level: "Intermediate" }
            ]
        },
        {
            title: "Vision",
            icon: <HiCube />,
            description: "Computer Vision Tools",
            bgClass: "bg-green-500/10",
            iconClass: "text-green-500",
            skills: [
                { name: "MediaPipe", level: "Advanced", hot: true },
                { name: "RetinaFace", level: "Advanced" },
                { name: "ArcFace", level: "Advanced" },
                { name: "OpenCV", level: "Advanced" },
                { name: "TensorFlow", level: "Advanced" }
            ]
        },
        {
            title: "Systems",
            icon: <HiDatabase />,
            description: "Infrastructure & Architecture",
            bgClass: "bg-orange-500/10",
            iconClass: "text-orange-500",
            skills: [
                { name: "Apache Kafka", level: "Intermediate", hot: true },
                { name: "Event-Driven Architectures", level: "Intermediate" },
                { name: "Distributed Pipelines", level: "Intermediate" },
                { name: "Apicurio", level: "Intermediate" },
                { name: "Avro Schema", level: "Intermediate" }
            ]
        },
        {
            title: "Cloud",
            icon: <HiDatabase />,
            description: "Cloud Platforms",
            bgClass: "bg-cyan-500/10",
            iconClass: "text-cyan-500",
            skills: [
                { name: "GCP (Silver League)", level: "Advanced", hot: true },
                { name: "AWS", level: "Intermediate" },
                { name: "Microsoft Azure", level: "Intermediate" }
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
                { name: "Firebase", level: "Advanced" },
                { name: "Vercel", level: "Advanced" }
            ]
        }
    ],
    experiences: [
        {
            position: "Co-Founder",
            company: "Thriftz",
            period: "Apr 2025 – Present",
            location: "India",
            description: "Architected and deployed full-stack marketplace (Web + Android/iOS) serving 1000+ active users. Selected Top 100 out of 23,000 startups nationwide; Winner – Most Innovative Startup Award. Finalist – IIT Roorkee E-Summit 2026.",
            responsibilities: [
                "Architected and deployed full-stack marketplace (Web + Android/iOS) serving 1000+ active users",
                "Designed real-time messaging and transaction pipelines; optimized backend queries reducing latency by 60%",
                "Led product experimentation cycles across pricing, trust scoring, and user retention mechanisms",
                "Selected Top 100 out of 23,000 startups nationwide; Winner – Most Innovative Startup Award",
                "Finalist – IIT Roorkee E-Summit 2026"
            ],
            technologies: ["Full-Stack", "Mobile Development", "Real-time Systems", "Backend Optimization"]
        },
        {
            position: "Consultant Developer",
            company: "Vital Vector",
            period: "Jan 2026 – Present",
            location: "India",
            description: "Developed large-scale facial recognition systems using RetinaFace detection and ArcFace embedding pipelines. Engineered optimized inference workflows for classroom and facility deployments under constrained compute.",
            responsibilities: [
                "Developed large-scale facial recognition systems using RetinaFace detection and ArcFace embedding pipelines",
                "Engineered optimized inference workflows for classroom and facility deployments under constrained compute",
                "Reduced latency and memory footprint while maintaining real-time detection accuracy"
            ],
            technologies: ["Computer Vision", "RetinaFace", "ArcFace", "Optimization"]
        },
        {
            position: "Senior Technical Advisor",
            company: "IEEE GRSS MUJ",
            period: "Aug 2025 – Present",
            location: "Jaipur, India",
            description: "Architected and developed official chapter website with 3D components and advanced animations using Framer Motion. Achieved 95+ Lighthouse performance score.",
            responsibilities: [
                "Architected and developed official chapter website with 3D components and advanced animations",
                "Implemented Framer Motion animations and interactive features",
                "Achieved 95+ Lighthouse performance score and optimized user experience"
            ],
            technologies: ["React.js", "Framer Motion", "Three.js", "3D Components", "Performance Optimization"]
        },
        {
            position: "Projects & Research Director",
            company: "AIML Community MUJ",
            period: "Jun 2025 – Present",
            location: "Jaipur, India",
            description: "Lead applied ML research initiatives; mentor 200+ students across CV systems, LLM integration, and experimentation. Organized technical workshops and research sprints bridging theory with real-world AI deployment.",
            responsibilities: [
                "Lead applied ML research initiatives; mentor 200+ students across CV systems, LLM integration, and experimentation",
                "Organized technical workshops and research sprints bridging theory with real-world AI deployment"
            ],
            technologies: ["Machine Learning", "Research", "Mentorship", "Workshops"]
        },
        {
            position: "Arcade Facilitator",
            company: "Google Cloud Skills Boost",
            period: "2025",
            location: "Remote",
            description: "Completed 100+ GCP labs; guided peers in cloud-native deployment, IAM, and scalable backend services. Achieved Silver League distinction.",
            responsibilities: [
                "Completed 100+ GCP labs; guided peers in cloud-native deployment, IAM, and scalable backend services",
                "Achieved Silver League distinction"
            ],
            technologies: ["Google Cloud Platform", "Cloud Architecture", "IAM", "Backend Services"]
        }
    ],
    projects: [
        {
            id: 1,
            title: "Virtual Laboratory Experience",
            description: "Interactive virtual laboratory platform providing hands-on learning experience with advanced simulation capabilities and real-time collaboration features.",
            image: "/projects/project-1.webp",
            technologies: ["React.js", "WebRTC", "Real-time Collaboration", "Educational Tech"],
            github: "https://github.com/SKaushikRao/virtual_laboratory_experience",
            demo: "https://virtual-laboratory-experience.vercel.app/",
            featured: true
        },
        {
            id: 2,
            title: "BuildIt Presentation Platform",
            description: "Modern presentation platform with advanced features for creating and delivering engaging presentations with real-time interaction capabilities.",
            image: "/projects/project-2.webp",
            technologies: ["React.js", "Presentation Framework", "Real-time Features", "Modern UI"],
            github: "https://github.com/SKaushikRao/buildit_presentation_kaushik",
            demo: "#",
            featured: true
        },
        {
            id: 3,
            title: "AI Assisted Exam Integrity System",
            description: "Advanced AI-powered proctoring system ensuring exam integrity through real-time monitoring, facial recognition, and anomaly detection.",
            image: "/projects/project-3.webp",
            technologies: ["Computer Vision", "AI/ML", "Real-time Processing", "Face Recognition"],
            github: "https://github.com/SKaushikRao/AI_assisted_exam_integrity_system",
            demo: "https://ai-assisted-exam-integrity-system.vercel.app/",
            featured: true
        },
        {
            id: 4,
            title: "Neuro-Symbolic Prototype for Real-Time Cognitive Load Estimation",
            description: "Designed dual-process AI architecture integrating 30 FPS CV signal extraction with event-triggered LLM reasoning. Implemented gaze variance, blink suppression (EAR), head pose estimation (PnP), and semantic override logic.",
            image: "/projects/project-1.webp",
            technologies: ["Computer Vision", "LLM Integration", "Real-time Processing", "Neuro-Symbolic AI"],
            github: "https://github.com/SKaushikRao",
            demo: "#",
            featured: true
        },
        {
            id: 5,
            title: "AI Proctor – Real-Time Identity & Event Streaming System",
            description: "Built RetinaFace + ArcFace identity verification system with Kafka-based event streaming architecture. Designed anomaly detection and automated alert pipelines for scalable monitoring.",
            image: "/projects/project-2.webp",
            technologies: ["RetinaFace", "ArcFace", "Apache Kafka", "Event Streaming", "Anomaly Detection"],
            github: "https://github.com/SKaushikRao",
            demo: "#",
            featured: true
        },
        {
            id: 6,
            title: "AI Study Buddy – Neuro-Symbolic Learning Assistant",
            description: "Engineered webcam-based engagement monitoring integrated with LLM-driven tutoring architecture.",
            image: "/projects/project-3.webp",
            technologies: ["Computer Vision", "LLM Integration", "MediaPipe", "Educational AI"],
            github: "https://github.com/SKaushikRao",
            demo: "#",
            featured: true
        }
    ],
    achievements: [
        {
            title: "5x Hackathon Winner",
            description: "Google Developers TechSprint 2026 (Winner), Sociothon 2026, WikiClub Hackathon, Ideastorm (IIT Roorkee), TechGig National (2x)",
            type: "award"
        },
        {
            title: "4x SEA Awardee",
            description: "Student Excellence Award (MUJ) for academic and extracurricular excellence",
            type: "award"
        },
        {
            title: "Top 100 Startups Nationwide",
            description: "Selected among Top 100 out of 23,000 startups nationwide (Campus Tank 2026)",
            type: "award"
        },
        {
            title: "Most Innovative Startup Award",
            description: "Winner – Most Innovative Startup Award",
            type: "award"
        },
        {
            title: "IIT Roorkee E-Summit Finalist",
            description: "Finalist – IIT Roorkee E-Summit 2026",
            type: "award"
        }
    ],
    certifications: [
        {
            name: "AWS Certified Programs",
            issuer: "Amazon Web Services",
            type: "certification"
        },
        {
            name: "Microsoft Learn Certifications",
            issuer: "Microsoft",
            type: "certification"
        },
        {
            name: "Google Cloud Skill Boost",
            issuer: "Google Cloud",
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
            label: "GitHub",
            value: "SKaushikRao",
            link: "https://github.com/SKaushikRao"
        },
        {
            icon: <FaMapPin className="w-5 h-5" />,
            label: "Location",
            value: "Bengaluru, Karnataka, India",
            link: null
        }
    ]
}

