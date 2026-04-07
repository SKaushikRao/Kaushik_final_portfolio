import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { config } from '../config.jsx';
import PillNav from './PillNav.jsx';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        ...config.NAV_ITEMS,
        { label: 'Download Resume', href: '/Final_Resume_Kaushik.pdf' }
    ];

    const logoNode = (
        <span className="text-black font-bold text-xl" style={{marginTop:'-2px'}}>
            {config.developer.name.charAt(0)}
        </span>
    );

    return (
        <motion.header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 flex items-center ${
                scrolled 
                    ? 'bg-black/80 backdrop-blur-xl border-b border-white/10 shadow-lg h-16' 
                    : 'bg-transparent h-20'
            }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
                <PillNav
                    logo={logoNode}
                    items={navItems}
                    activeHref={location.pathname === '/' ? '/' : location.pathname}
                    baseColor="#ffffff"
                    pillColor="#1a1a1a"
                    hoveredPillTextColor="#000000"
                    pillTextColor="#ffffff"
                />
            </div>
        </motion.header>
    );
};

export default Header;
