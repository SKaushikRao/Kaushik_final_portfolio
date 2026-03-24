import React from 'react';
import { motion } from 'framer-motion';
import { config } from '../config.jsx';
import ProfileCard from './ProfileCard.jsx';

const Experience = () => {
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
        // Handle contact click - could open contact form, email, etc.
        console.log('Contact clicked for:', experience.company);
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
                            <ProfileCard
                                name={experience.position}
                                title={`${experience.company} • ${experience.location}`}
                                handle={experience.period}
                                status={experience.technologies.slice(0, 3).join(' • ')}
                                contactText="View Details"
                                avatarUrl="/assets/img4.jpg" // You can customize avatar per experience
                                showUserInfo={true}
                                enableTilt={true}
                                enableMobileTilt={false}
                                behindGlowEnabled={true}
                                behindGlowColor="rgba(125, 190, 255, 0.67)"
                                innerGradient="linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)"
                                onContactClick={() => handleContactClick(experience)}
                                className="w-full max-w-sm"
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Experience;