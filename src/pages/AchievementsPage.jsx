import React from 'react';
import FlowingMenu from '../components/FlowingMenu';
import { motion } from 'framer-motion';

const achievementsItems = [
  { link: '#', text: 'HULT Prize 2026 Nationalist', image: 'https://picsum.photos/600/400?random=1' },
  { link: '#', text: 'Campus Tank Top 100 Founders', image: 'https://picsum.photos/600/400?random=2' },
  { link: '#', text: 'Google Techspring \'26 Winner', image: 'https://picsum.photos/600/400?random=3' },
  { link: '#', text: 'Sociothon 2026 Winner', image: 'https://picsum.photos/600/400?random=4' },
  { link: '#', text: 'MIH 2026 Winner', image: 'https://picsum.photos/600/400?random=5' },
  { link: '#', text: 'TechGig LLM Hack Winner', image: 'https://picsum.photos/600/400?random=6' },
  { link: '#', text: 'TechGIG Prompt Eng Winner', image: 'https://picsum.photos/600/400?random=7' },
  { link: '#', text: 'Pixel to Product Hackathon', image: 'https://picsum.photos/600/400?random=8' },
  { link: '#', text: '6X Excellence Awards, MUJ', image: 'https://picsum.photos/600/400?random=9' },
  { link: '#', text: 'BUILD IT hackathon Winner 2026, MUJ', image: 'https://picsum.photos/600/400?random=10' },
  { link: '#', text: 'IIT ROORKEE E Summit Ideastorm Winner 2026', image: 'https://picsum.photos/600/400?random=11' }
];

const AchievementsPage = () => {
  return (
    <div className="pt-24 pb-12 min-h-screen bg-black w-full flex flex-col items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
        >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-white/90 to-white/60 bg-clip-text text-transparent mb-6">
                Hall of <span className="text-emerald-400">Achievements</span>
            </h1>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
                A timeline of competitive successes and recognitions in AI, Software Engineering, and Entrepreneurship.
            </p>
        </motion.div>
      </div>

      <div style={{ height: '700px', width: '100%', position: 'relative' }}>
        <FlowingMenu 
          items={achievementsItems}
          speed={20}
          textColor="#ffffff"
          bgColor="#060010"
          marqueeBgColor="#ffffff"
          marqueeTextColor="#000000"
          borderColor="rgba(255, 255, 255, 0.1)"
        />
      </div>
    </div>
  );
};

export default AchievementsPage;
