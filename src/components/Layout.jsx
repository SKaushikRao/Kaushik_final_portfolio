import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Galaxy from './Galaxy';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden relative">
      {/* Galaxy Backdrop */}
      <div className="fixed inset-0 z-0">
        <Galaxy 
          mouseRepulsion
          mouseInteraction
          density={1}
          glowIntensity={0.3}
          saturation={0}
          hueShift={140}
          twinkleIntensity={0.3}
          rotationSpeed={0.1}
          repulsionStrength={5}
          autoCenterRepulsion={0}
          starSpeed={0.5}
          speed={1}
          transparent={true}
        />
      </div>
      
      <div className="relative z-10">
        <Header />
        <main className="pt-16 md:pt-20">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;


