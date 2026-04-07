import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { config } from '../config.jsx';
import SpotlightCard from './SpotlightCard.jsx';

const Experience = () => {
    const [expandedCards, setExpandedCards] = useState({});
    const experiences = config.experiences || [];

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
            transition: { duration: 0.6 }
        }
    };

    const handleContactClick = (experience) => {
        setExpandedCards(prev => ({ ...prev, [experience.company]: !prev[experience.company] }));
    };

    return (
        <section id="experience" className="py-20 md:py-32 relative">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <motion.h2
                        variants={itemAnimation}
                        className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
                    >
                        Professional Experience
                    </motion.h2>
                    <motion.p
                        variants={itemAnimation}
                        className="text-lg text-white/60 max-w-2xl mx-auto"
                    >
                        My journey through various roles and companies, building innovative solutions and leading technical teams.
                    </motion.p>
                </motion.div>

                <motion.div
                    variants={containerAnimation}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12"
                >
                    {orderedExperiences.map((experience, index) => (
                        <motion.div
                            key={`${experience.company}-${experience.position}`}
                            variants={itemAnimation}
                            className="flex justify-center"
                        >
                            <SpotlightCard className="h-full w-full max-w-sm flex flex-col" spotlightColor="rgba(0, 229, 255, 0.2)">
                                <div className="z-10 relative flex-1">
                                    <h3 className="text-xl font-bold text-white mb-2">{experience.position}</h3>
                                    <p className="text-white/80 font-medium mb-1">{experience.company} • {experience.location}</p>
                                    <p className="text-white/60 text-sm mb-4">{experience.period}</p>
                                    <AnimatePresence>
                                        {expandedCards[experience.company] && (
                                            <motion.div 
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                className="overflow-hidden"
                                            >
                                                <p className="text-white/70 text-sm mt-4 mb-2 leading-relaxed">
                                                    {experience.description}
                                                </p>
                                                {experience.responsibilities && (
                                                    <ul className="list-disc list-inside text-white/60 text-sm space-y-1 mb-4">
                                                        {experience.responsibilities.map((resp, i) => (
                                                            <li key={i}>{resp}</li>
                                                        ))}
                                                    </ul>
                                                )}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                                <div className="z-10 relative mt-8 pt-4 border-t border-white/10">
                                    <p className="text-white/50 text-sm font-medium mb-4">{experience.technologies.slice(0, 3).join(' • ')}</p>
                                    <button 
                                        onClick={() => handleContactClick(experience)}
                                        className="w-full py-2.5 bg-white/5 hover:bg-white/10 transition-colors rounded-xl text-sm text-white/80 font-medium"
                                    >
                                        {expandedCards[experience.company] ? 'Hide Details' : 'View Details'}
                                    </button>
                                </div>
                            </SpotlightCard>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Experience;