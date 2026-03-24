import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';
import { HiArrowRight, HiExternalLink } from 'react-icons/hi';
import { config } from '../config.jsx';

const containerAnimation = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            duration: 0.6,
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
};

const titleAnimation = {
    hidden: { opacity: 0, y: 20 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.23, 1, 0.32, 1]
        }
    }
};

const getProjectSize = (index) => {
    const sizes = [
        "col-span-2 sm:col-span-1 md:col-span-2 row-span-1",
        "col-span-1 sm:row-span-2 row-span-1",
        "col-span-1 row-span-1",
        "col-span-1 row-span-1",
        "col-span-1 row-span-1",
        "col-span-1 row-span-1",
    ];
    return sizes[index % sizes.length];
};

const ProjectCard = ({ project, size }) => {
    return (
        <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className={`relative group ${size}`}
        >
            <div className="bg-white/5 border border-white/10 p-4 md:p-5 rounded-xl sm:rounded-2xl backdrop-blur-sm cursor-pointer relative overflow-hidden h-full w-full min-h-[140px] flex flex-col shadow-lg hover:border-white/30 hover:bg-white/10 transition-all duration-300">
                {/* Shine effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent" style={{
                        animation: 'shimmer 3s infinite',
                        backgroundSize: '200% 100%'
                    }} />
                </div>

                <div className="relative flex flex-col gap-3 w-full z-10 h-full justify-between">
                    <div className="flex flex-col gap-3">
                        <div className="flex items-start justify-between gap-2">
                            <div className="flex items-center space-x-2 flex-1 min-w-0">
                                <FaGithub className="w-4 h-4 text-white flex-shrink-0" />
                                <h3 className="font-bold text-white text-sm truncate">
                                    {project.title}
                                </h3>
                            </div>
                            <HiExternalLink className="w-4 h-4 text-white/60 group-hover:text-white transition-colors shrink-0" />
                        </div>

                        <p className="text-xs text-white/70 line-clamp-3 leading-relaxed">
                            {project.description}
                        </p>
                    </div>

                    <div className="flex flex-col gap-2 mt-auto">
                        <div className="flex flex-wrap gap-1.5">
                            {project.technologies.slice(0, size.includes('row-span-2') ? 3 : 2).map((tech) => (
                                <span
                                    key={tech}
                                    className="text-[10px] bg-white/10 text-white px-2 py-0.5 rounded-full border border-white/10"
                                >
                                    {tech}
                                </span>
                            ))}
                            {project.technologies.length > (size.includes('row-span-2') ? 3 : 2) && (
                                <span className="text-[10px] text-white/50">
                                    +{project.technologies.length - (size.includes('row-span-2') ? 3 : 2)}
                                </span>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </motion.a>
    );
};

const ProjectsPage = () => {
    const projects = config.projects || [];

    return (
        <section className="py-16 md:py-24 relative min-h-screen">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    variants={containerAnimation}
                    initial="hidden"
                    animate="show"
                    className="space-y-12 md:space-y-16"
                >
                    {/* Section Title */}
                    <motion.div
                        variants={titleAnimation}
                        className="mb-12 md:mb-16 space-y-6"
                    >
                        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                            <div className="space-y-4 max-w-2xl">
                                <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full backdrop-blur-sm mb-4">
                                    <FaGithub className="w-4 h-4 sm:w-5 sm:h-5 text-white/80" />
                                    <span className="text-xs sm:text-sm font-semibold text-white/80">GitHub Projects</span>
                                </div>
                                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
                                    Open Source Projects
                                </h2>
                                <p className="text-sm sm:text-base md:text-lg text-white/60 leading-relaxed">
                                    A collection of my public repositories on GitHub,
                                    showcasing projects in{' '}
                                    <span className="text-white font-semibold">full-stack development</span>,{' '}
                                    <span className="text-white font-semibold">web technologies</span>, and{' '}
                                    <span className="text-white font-semibold">open source contributions</span>.
                                </p>
                            </div>

                            <motion.a
                                href="https://github.com/SKaushikRao"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="inline-flex items-center gap-2 px-6 py-3 sm:px-8 sm:py-4 rounded-full bg-white text-black font-semibold text-sm sm:text-base hover:bg-white/90 transition-all duration-300 shadow-lg shadow-white/20 w-full md:w-auto justify-center"
                            >
                                View GitHub
                                <HiArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1" />
                            </motion.a>
                        </div>

                        {/* Stats */}
                        <div className="flex items-center gap-6 pt-2 overflow-x-auto pb-2">
                            <div className="space-y-1 shrink-0">
                                <span className="text-2xl sm:text-3xl font-bold text-white">28</span>
                                <p className="text-xs sm:text-sm text-white/60 whitespace-nowrap">
                                    Public Repositories
                                </p>
                            </div>
                            <div className="space-y-1 shrink-0">
                                <span className="text-2xl sm:text-3xl font-bold text-white">3+</span>
                                <p className="text-xs sm:text-sm text-white/60 whitespace-nowrap">
                                    Years Experience
                                </p>
                            </div>
                            <div className="w-px h-8 sm:h-10 bg-white/10 shrink-0" />
                            <div className="space-y-1 shrink-0">
                                <span className="text-2xl sm:text-3xl font-bold text-white">{projects.length}</span>
                                <p className="text-xs sm:text-sm text-white/60 whitespace-nowrap">
                                    Featured Projects
                                </p>
                            </div>
                        </div>

                        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                    </motion.div>

                    {/* Projects Grid */}
                    <motion.div
                        variants={containerAnimation}
                        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 auto-rows-fr gap-4 w-full max-w-6xl mx-auto"
                    >
                        {projects.map((project, index) => (
                            <ProjectCard key={project.id} project={project} size={getProjectSize(index)} />
                        ))}
                    </motion.div>

                    {/* Back to Home */}
                    <motion.div
                        variants={titleAnimation}
                        className="text-center pt-8"
                    >
                        <Link
                            to="/"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 border border-white/20 text-white text-sm font-medium hover:bg-white/20 transition-all duration-300"
                        >
                            <HiArrowRight className="w-4 h-4 rotate-180" />
                            Back to Home
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default ProjectsPage;
