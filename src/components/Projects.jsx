import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaGithub, FaCode } from 'react-icons/fa';
import { HiExternalLink, HiArrowRight } from 'react-icons/hi';
import { config } from '../config.jsx';
import InfiniteMenu from './InfiniteMenu.jsx';

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
                            <HiExternalLink className="w-4 h-4 text-white/60 group-hover:text-white transition-colors flex-shrink-0" />
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

const Projects = () => {
    const containerAnimation = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemAnimation = {
        hidden: { opacity: 0, y: 20 },
        show: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.4 }
        }
    };

    const featuredProjects = [
        {
            image: 'https://picsum.photos/512/512?random=1',
            link: 'https://github.com/SKaushikRao/virtual_laboratory_experience',
            title: 'Virtual Laboratory',
            description: 'Interactive virtual laboratory platform'
        },
        {
            image: 'https://picsum.photos/512/512?random=2',
            link: 'https://github.com/SKaushikRao/buildit_presentation_kaushik',
            title: 'BuildIt Presentation',
            description: 'Modern presentation platform'
        },
        {
            image: 'https://picsum.photos/512/512?random=3',
            link: 'https://github.com/SKaushikRao/AI_assisted_exam_integrity_system',
            title: 'AI Exam Integrity',
            description: 'AI-powered exam proctoring system'
        },
        {
            image: 'https://picsum.photos/512/512?random=4',
            link: 'https://github.com/SKaushikRao?tab=repositories',
            title: 'GitHub Repository',
            description: 'Complete project collection'
        },
        {
            image: 'https://picsum.photos/512/512?random=5',
            link: 'https://thriftz.in',
            title: 'Thriftz Marketplace',
            description: 'Sustainable fashion platform'
        }
    ];

    return (
        <section id="projects" className="py-20 md:py-32 relative">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* InfiniteMenu Section */}
                <motion.div
                    variants={containerAnimation}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="mb-20"
                >
                    <div className="max-w-2xl mx-auto text-center space-y-4 mb-12">
                        <motion.div variants={itemAnimation} className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                            <FaCode className="w-4 h-4 text-white/80" />
                            <span className="text-sm font-semibold text-white/80">Featured Projects</span>
                        </motion.div>
                        <motion.h2
                            variants={itemAnimation}
                            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white"
                        >
                            Interactive Project Gallery
                        </motion.h2>
                        <motion.p
                            variants={itemAnimation}
                            className="text-lg text-white/60"
                        >
                            Explore my featured projects in this interactive 3D gallery
                        </motion.p>
                    </div>

                    <motion.div
                        variants={itemAnimation}
                        className="relative w-full h-[600px] bg-black/20 rounded-3xl overflow-hidden border border-white/10 backdrop-blur-sm"
                    >
                        <InfiniteMenu items={featuredProjects} scale={1} />
                    </motion.div>
                </motion.div>

                {/* GitHub Projects Section */}
                <motion.div
                    variants={containerAnimation}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="space-y-12"
                >
                    <div className="max-w-2xl mx-auto text-center space-y-4">
                        <motion.div
                            variants={itemAnimation}
                            className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full backdrop-blur-sm"
                        >
                            <FaGithub className="w-4 h-4 text-white/80" />
                            <span className="text-sm font-semibold text-white/80">Latest Github Projects</span>
                        </motion.div>
                        <motion.h2
                            variants={containerAnimation}
                            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white"
                        >
                            Open Source Projects
                        </motion.h2>
                        <motion.p
                            variants={containerAnimation}
                            className="text-lg text-white/60"
                        >
                            Check out my public portfolio projects on Github
                        </motion.p>
                    </div>

                    <motion.div
                        variants={containerAnimation}
                        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 auto-rows-fr gap-4 w-full max-w-6xl mx-auto"
                    >
                        {config.projects.map((project, index) => (
                            <ProjectCard key={project.id} project={project} size={getProjectSize(index)} />
                        ))}
                    </motion.div>

                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Link
                                to="/projects"
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-semibold text-sm hover:bg-white/90 transition-all duration-300 shadow-lg shadow-white/20"
                            >
                                View All Projects
                                <HiArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                            </Link>
                        </motion.div>

                        <motion.a
                            href="https://github.com/SKaushikRao"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 border border-white/20 text-white text-sm font-medium hover:bg-white/20 transition-all duration-300"
                        >
                            <FaGithub className="w-4 h-4" />
                            View on Github
                        </motion.a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;

