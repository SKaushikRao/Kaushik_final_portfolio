import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { HiCode, HiDatabase } from 'react-icons/hi';
import { FaReact, FaNodeJs, FaGithub, FaPython, FaGitAlt } from 'react-icons/fa';
import { SiJavascript, SiTailwindcss, SiFigma, SiTensorflow, SiGooglecloud, SiBootstrap, SiWordpress, SiFirebase } from 'react-icons/si';
import { TbBrandFramerMotion } from 'react-icons/tb';
import { VscVscode } from 'react-icons/vsc';

const skills = [
    // Languages
    { name: "Python", icon: <FaPython className="w-5 h-5 sm:w-6 sm:h-6" />, size: "col-span-2 sm:col-span-1 md:col-span-2 row-span-1", category: "Languages" },
    { name: "JavaScript", icon: <SiJavascript className="w-5 h-5 sm:w-6 sm:h-6" />, size: "col-span-1 row-span-1", category: "Languages" },
    { name: "HTML5", icon: <HiCode className="w-5 h-5 sm:w-6 sm:h-6" />, size: "col-span-1 row-span-1", category: "Languages" },
    { name: "CSS3", icon: <HiCode className="w-5 h-5 sm:w-6 sm:h-6" />, size: "col-span-1 row-span-1", category: "Languages" },
    { name: "SQL", icon: <HiDatabase className="w-5 h-5 sm:w-6 sm:h-6" />, size: "col-span-1 row-span-1", category: "Languages" },
    
    // Frameworks & Libraries
    { name: "React.js", icon: <FaReact className="w-5 h-5 sm:w-6 sm:h-6" />, size: "col-span-2 sm:col-span-1 sm:row-span-2 row-span-1", category: "Frameworks" },
    { name: "Framer Motion", icon: <TbBrandFramerMotion className="w-5 h-5 sm:w-6 sm:h-6" />, size: "col-span-1 row-span-1", category: "Frameworks" },
    { name: "Bootstrap", icon: <SiBootstrap className="w-5 h-5 sm:w-6 sm:h-6" />, size: "col-span-1 row-span-1", category: "Frameworks" },
    { name: "TensorFlow", icon: <SiTensorflow className="w-5 h-5 sm:w-6 sm:h-6" />, size: "col-span-2 sm:col-span-1 md:col-span-2 row-span-1", category: "Frameworks" },
    
    // Cloud & DevOps
    { name: "Google Cloud", icon: <SiGooglecloud className="w-5 h-5 sm:w-6 sm:h-6" />, size: "col-span-2 sm:col-span-1 md:col-span-2 row-span-1", category: "Cloud" },
    { name: "Cloud IaaS", icon: <SiGooglecloud className="w-5 h-5 sm:w-6 sm:h-6" />, size: "col-span-1 row-span-1", category: "Cloud" },
    { name: "Vercel", icon: <VscVscode className="w-5 h-5 sm:w-6 sm:h-6" />, size: "col-span-1 row-span-1", category: "Cloud" },
    
    // Development
    { name: "Full-Stack", icon: <FaReact className="w-5 h-5 sm:w-6 sm:h-6" />, size: "col-span-2 sm:col-span-1 sm:row-span-2 row-span-1", category: "Development" },
    { name: "Mobile Dev", icon: <FaNodeJs className="w-5 h-5 sm:w-6 sm:h-6" />, size: "col-span-1 row-span-1", category: "Development" },
    { name: "REST APIs", icon: <FaNodeJs className="w-5 h-5 sm:w-6 sm:h-6" />, size: "col-span-1 row-span-1", category: "Development" },
    
    // AI/ML
    { name: "Machine Learning", icon: <SiTensorflow className="w-5 h-5 sm:w-6 sm:h-6" />, size: "col-span-2 sm:col-span-1 sm:row-span-2 row-span-1", category: "AI/ML" },
    { name: "Computer Vision", icon: <SiTensorflow className="w-5 h-5 sm:w-6 sm:h-6" />, size: "col-span-1 row-span-1", category: "AI/ML" },
    { name: "LLM Integration", icon: <SiTensorflow className="w-5 h-5 sm:w-6 sm:h-6" />, size: "col-span-1 row-span-1", category: "AI/ML" },
    { name: "Probability", icon: <SiTensorflow className="w-5 h-5 sm:w-6 sm:h-6" />, size: "col-span-1 row-span-1", category: "AI/ML" },
    { name: "Statistics", icon: <SiTensorflow className="w-5 h-5 sm:w-6 sm:h-6" />, size: "col-span-1 row-span-1", category: "AI/ML" },
    
    // Tools
    { name: "Git", icon: <FaGitAlt className="w-5 h-5 sm:w-6 sm:h-6" />, size: "col-span-1 row-span-1", category: "Tools" },
    { name: "WordPress", icon: <SiWordpress className="w-5 h-5 sm:w-6 sm:h-6" />, size: "col-span-1 row-span-1", category: "Tools" },
    { name: "Notion", icon: <VscVscode className="w-5 h-5 sm:w-6 sm:h-6" />, size: "col-span-1 row-span-1", category: "Tools" },
    { name: "Firebase", icon: <SiFirebase className="w-5 h-5 sm:w-6 sm:h-6" />, size: "col-span-1 row-span-1", category: "Tools" },
    { name: "Sanity CMS", icon: <VscVscode className="w-5 h-5 sm:w-6 sm:h-6" />, size: "col-span-1 row-span-1", category: "Tools" },
    { name: "Xano", icon: <VscVscode className="w-5 h-5 sm:w-6 sm:h-6" />, size: "col-span-1 row-span-1", category: "Tools" },
];

const containerAnimation = {
    hidden: { opacity: 0, x: -30 },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.6,
            staggerChildren: 0.08,
            delayChildren: 0.2
        }
    }
};

const itemAnimation = {
    hidden: { opacity: 0, y: 20, scale: 0.9, x: -30 },
    show: {
        opacity: 1,
        y: 0,
        scale: 1,
        x: 0,
        transition: {
            duration: 0.6,
            ease: [0.23, 1, 0.32, 1]
        }
    }
};

const SkillsShowcase = () => {
    const shouldReduceMotion = useReducedMotion();
    
    // Group skills by category
    const skillsByCategory = skills.reduce((acc, skill) => {
        if (!acc[skill.category]) {
            acc[skill.category] = [];
        }
        acc[skill.category].push(skill);
        return acc;
    }, {});
    
    const categories = Object.keys(skillsByCategory);
    
    return (
        <motion.div
            variants={containerAnimation}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "0px" }}
            className="w-full mt-20"
            style={{ transform: 'translateZ(0)', willChange: 'scroll-position' }}
        >
            <div className="container mx-auto px-4 sm:px-6 md:px-8">
                <motion.div 
                    variants={itemAnimation} 
                    className="flex items-center gap-2 mb-12 sm:mb-16 justify-center"
                >
                    <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-6 py-3 rounded-full backdrop-blur-sm shadow-lg">
                        <HiCode className="w-5 h-5 text-white/80" />
                        <span className="text-sm font-semibold text-white/80">Skills & Expertise</span>
                    </div>
                </motion.div>

                {categories.map((category, categoryIndex) => (
                    <motion.div
                        key={category}
                        variants={containerAnimation}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: "-50px" }}
                        className="mb-16 last:mb-0"
                    >
                        <motion.h3
                            variants={itemAnimation}
                            className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center"
                        >
                            {category}
                        </motion.h3>
                        
                        <motion.div
                            variants={containerAnimation}
                            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4 md:gap-5 w-full"
                            style={{ 
                                gridAutoRows: 'minmax(100px, auto)',
                                gridAutoFlow: 'row dense',
                                perspective: '1000px'
                            }}
                        >
                            {skillsByCategory[category].map((skill, index) => (
                                <motion.div
                                    key={`${category}-${index}`}
                                    variants={itemAnimation}
                                    className={`relative group ${skill.size}`}
                                    style={{ 
                                        perspective: '1000px',
                                        transformStyle: 'preserve-3d',
                                        willChange: 'transform',
                                        backfaceVisibility: 'hidden',
                                        WebkitBackfaceVisibility: 'hidden'
                                    }}
                                >
                                    <motion.div
                                        className="relative w-full h-full"
                                        style={{ 
                                            transformStyle: 'preserve-3d',
                                            height: '100%',
                                            willChange: 'transform',
                                            backfaceVisibility: 'hidden',
                                            WebkitBackfaceVisibility: 'hidden'
                                        }}
                                        whileHover={shouldReduceMotion ? {} : { 
                                            rotateY: 8,
                                            rotateX: 8,
                                            scale: 1.05,
                                            transition: { duration: 0.3, ease: "easeOut" }
                                        }}
                                    >
                                        <div
                                            className="
                                                bg-white/5
                                                border-white/10
                                                border 
                                                p-3 sm:p-4 md:p-5
                                                rounded-xl sm:rounded-xl md:rounded-2xl
                                                backdrop-blur-sm 
                                                cursor-default
                                                relative overflow-hidden
                                                h-full
                                                w-full
                                                min-h-[100px] sm:min-h-[120px]
                                                flex flex-col items-center justify-center
                                                box-border
                                                shadow-[0_8px_16px_rgba(0,0,0,0.3),0_0_0_1px_rgba(255,255,255,0.1)]
                                                transition-all duration-300
                                                group-hover:border-white/30
                                                group-hover:bg-white/10
                                                group-hover:shadow-[0_12px_24px_rgba(0,0,0,0.4),0_0_0_1px_rgba(255,255,255,0.2)]
                                            "
                                            style={{ 
                                                transform: shouldReduceMotion ? 'none' : 'translate3d(0, 0, 12px)',
                                                height: '100%',
                                                willChange: 'transform',
                                                backfaceVisibility: 'hidden',
                                                WebkitBackfaceVisibility: 'hidden'
                                            }}
                                        >
                                            {/* Shiny overlay effect */}
                                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent" style={{
                                                    animation: 'shimmer 3s infinite',
                                                    backgroundSize: '200% 100%'
                                                }} />
                                            </div>
                                            
                                            {/* Glossy shine effect */}
                                            <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-300">
                                                <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/20 to-transparent rounded-t-2xl" />
                                            </div>
                                            
                                            <div className="relative flex flex-col items-center gap-2 sm:gap-3 md:gap-4 w-full z-10">
                                                {/* Icon container */}
                                                <div className="relative">
                                                    <div className="relative w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-md sm:rounded-lg md:rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shadow-lg transition-all duration-300 group-hover:border-white/30 group-hover:shadow-white/10">
                                                        <div className="text-white drop-shadow-lg transition-transform duration-300 group-hover:scale-110">
                                                            {skill.icon}
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                                {/* Skill name */}
                                                <div className="flex flex-col items-center gap-0.5 sm:gap-1 w-full px-0.5 sm:px-1">
                                                    <span className="text-[10px] sm:text-[11px] md:text-xs lg:text-sm font-bold text-white text-center tracking-tight transition-all duration-300 group-hover:text-white/90 break-words leading-tight">
                                                        {skill.name}
                                                    </span>
                                                    <div className="w-5 sm:w-6 md:w-8 h-0.5 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-full transition-all duration-300 group-hover:via-white/60" />
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

export default SkillsShowcase;

