import React from 'react';
import { motion } from 'framer-motion';
import { HiBriefcase, HiCalendar, HiLocationMarker, HiExternalLink } from 'react-icons/hi';
import { config } from '../config.jsx';

const Experience = () => {
    console.log('Experience component rendering...');
    const experiences = config.experiences || [];
    console.log('Experiences:', experiences);

    if (!experiences || experiences.length === 0) {
        return (
            <section id="experience" className="py-20 md:py-32 relative">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
                            Professional Experience
                        </h2>
                        <p className="text-lg text-white/60 mt-4">
                            Loading experiences...
                        </p>
                    </div>
                </div>
            </section>
        );
    }

    // Find Thriftz experience and move it to front
    const thriftzIndex = experiences.findIndex(exp => exp.company === 'Thriftz');
    let orderedExperiences = [...experiences];
    if (thriftzIndex !== -1) {
        const thriftzExp = orderedExperiences.splice(thriftzIndex, 1)[0];
        orderedExperiences.unshift(thriftzExp);
    }

    const containerAnimation = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                duration: 0.8,
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const itemAnimation = {
        hidden: { opacity: 0, y: 50 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: [0.23, 1, 0.32, 1]
            }
        }
    };

    return (
        <section id="experience" className="py-20 md:py-32 relative">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    variants={containerAnimation}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="space-y-12"
                >
                    <div className="max-w-2xl mx-auto text-center space-y-4 mb-16">
                        <motion.h2
                            variants={itemAnimation}
                            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white"
                        >
                            Professional Experience
                        </motion.h2>
                        <motion.p
                            variants={itemAnimation}
                            className="text-lg text-white/60"
                        >
                            My journey through various roles and organizations
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-16 justify-items-center px-8">
                        {orderedExperiences.map((experience, index) => {
                            const isThriftz = experience.company === 'Thriftz';
                            
                            return (
                                <motion.div
                                    key={index}
                                    variants={itemAnimation}
                                    className={`${isThriftz ? 'scale-105 lg:scale-110' : ''} transition-transform duration-300`}
                                    animate={{
                                        y: [0, -10, 0],
                                    }}
                                    transition={{
                                        y: {
                                            duration: 3 + index * 0.5,
                                            repeat: Infinity,
                                            ease: "easeInOut"
                                        }
                                    }}
                                    whileHover={{
                                        scale: 1.05,
                                        y: -15,
                                        transition: { duration: 0.3 }
                                    }}
                                >
                                    <div className={`h-[420px] w-[320px] relative group cursor-pointer ${
                                        isThriftz 
                                            ? 'bg-gradient-to-br from-pink-500/15 to-pink-600/8' 
                                            : 'bg-gradient-to-br from-white/8 to-white/3'
                                    } backdrop-blur-2xl border ${
                                        isThriftz 
                                            ? 'border-pink-500/25 ring-2 ring-pink-500/30 ring-offset-2 ring-offset-black' 
                                            : 'border-white/15'
                                    } rounded-3xl p-7 flex flex-col justify-between text-white relative overflow-hidden shadow-2xl hover:shadow-pink-500/10 transition-all duration-500`}>
                                        
                                        {/* Translucent overlay for depth */}
                                        <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-transparent" />
                                        
                                        {/* Glass effect overlay on hover */}
                                        <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                        
                                        {/* Shimmer effect on hover */}
                                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent transform -skew-x-12" 
                                                 style={{
                                                     animation: 'shimmer 2s infinite',
                                                     backgroundSize: '200% 100%'
                                                 }} />
                                        </div>

                                        {/* Header */}
                                        <div className="space-y-4 relative z-10">
                                            <div className="flex items-start justify-between gap-3">
                                                <div className="flex-1">
                                                    <h3 className={`font-bold text-xl ${isThriftz ? 'text-pink-100' : 'text-white'} group-hover:scale-105 transition-transform duration-300`}>
                                                        {experience.position}
                                                    </h3>
                                                    <p className={`text-base ${isThriftz ? 'text-pink-200/90' : 'text-white/85'} font-medium group-hover:text-white transition-colors duration-300`}>
                                                        {experience.company}
                                                    </p>
                                                </div>
                                                {isThriftz && (
                                                    <a
                                                        href="https://thriftz.in"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-pink-300/90 hover:text-pink-100 hover:scale-110 transition-all duration-300"
                                                        title="Visit thriftz.in"
                                                    >
                                                        <HiExternalLink className="w-6 h-6" />
                                                    </a>
                                                )}
                                            </div>
                                            
                                            <div className="flex items-center gap-3 text-sm text-white/65 group-hover:text-white/75 transition-colors duration-300">
                                                <HiCalendar className="w-4 h-4" />
                                                <span>{experience.duration}</span>
                                            </div>
                                            
                                            <div className="flex items-center gap-3 text-sm text-white/65 group-hover:text-white/75 transition-colors duration-300">
                                                <HiLocationMarker className="w-4 h-4" />
                                                <span>{experience.location}</span>
                                            </div>
                                        </div>

                                        {/* Description */}
                                        <div className="flex-1 mt-4 relative z-10">
                                            <p className="text-sm text-white/75 leading-relaxed line-clamp-4 group-hover:text-white/85 transition-colors duration-300">
                                                {experience.description}
                                            </p>
                                        </div>

                                        {/* Skills */}
                                        <div className="space-y-3 relative z-10">
                                            {experience.skills && experience.skills.length > 0 && (
                                                <div className="flex flex-wrap gap-2">
                                                    {experience.skills.slice(0, 3).map((skill, skillIndex) => (
                                                        <span
                                                            key={skillIndex}
                                                            className={`text-xs px-3 py-1.5 rounded-full border transition-all duration-300 hover:scale-110 ${
                                                                isThriftz 
                                                                    ? 'bg-pink-500/15 text-pink-200/90 border-pink-500/30 hover:bg-pink-500/25' 
                                                                    : 'bg-white/8 text-white/85 border-white/20 hover:bg-white/15'
                                                            }`}
                                                        >
                                                            {skill}
                                                        </span>
                                                    ))}
                                                    {experience.skills.length > 3 && (
                                                        <span className="text-xs text-white/55 group-hover:text-white/70 transition-colors duration-300">
                                                            +{experience.skills.length - 3}
                                                        </span>
                                                    )}
                                                </div>
                                            )}
                                            
                                            {isThriftz && (
                                                <div className="text-center">
                                                    <span className="text-sm text-pink-300/90 font-semibold animate-pulse group-hover:text-pink-100 transition-colors duration-300">
                                                        🚀 Featured Achievement
                                                    </span>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Experience;