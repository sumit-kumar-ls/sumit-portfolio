import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

/**
 * 🎯 ISOLATED 3D CHARACTER ASSET CONFIGURATION
 * To replace the character in the future:
 * 1. Place your new 3D avatar (.webp, .png, .glb) inside `public/assets/character/`
 * 2. Update the CHARACTER_ASSET_PATH constant below to point to your file.
 */
export const CHARACTER_ASSET_PATH = `${import.meta.env.BASE_URL}assets/character/sumit-boy.png`;

export const Character3D = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX - innerWidth / 2) / (innerWidth / 2);
      const y = (e.clientY - innerHeight / 2) / (innerHeight / 2);
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Soft springs for 3D mouse follow tilt
  const rotateX = mousePos.y * -6;
  const rotateY = mousePos.x * 10;
  const translateX = mousePos.x * 5;
  const translateY = mousePos.y * 3;

  return (
    <div className="relative w-full max-w-[380px] sm:max-w-[460px] aspect-[3/4] mx-auto flex items-center justify-center select-none pointer-events-auto">
      {/* Background Organic Soft Glow Shape */}
      <div className="absolute inset-2 rounded-[40%_60%_70%_30%/50%_60%_40%_50%] bg-gradient-to-tr from-[#E6DFC7]/60 via-[#EFEAD8]/80 to-[#DFD5B9]/50 blur-[2px] pointer-events-none" />
      
      {/* Soft Ambient Radial Blur Glow */}
      <div className="absolute w-[85%] h-[85%] rounded-full bg-[#4A5D2E]/[0.05] blur-2xl top-10 pointer-events-none" />

      {/* Main 3D Character Asset Container with Mouse Interactive Tilt */}
      <motion.div
        className="relative z-10 w-full h-full flex flex-col items-center justify-center"
        style={{
          transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translate3d(${translateX}px, ${translateY}px, 0px)`,
          transition: 'transform 0.15s ease-out'
        }}
      >
        {/* Transparent Rendered 3D Young Student Avatar */}
        <img
          src={CHARACTER_ASSET_PATH}
          alt="Sumit Kumar — 3D Character Avatar"
          className="w-full h-full object-contain filter drop-shadow-[0_20px_30px_rgba(60,50,40,0.12)]"
        />

        {/* Soft Realistic Contact Shadow at Feet */}
        <div className="w-[60%] h-4 rounded-full bg-[#3A3226]/15 blur-sm mt-[-15px]" />

        {/* Floating Developer Identity Pill */}
        <div className="absolute -bottom-3 px-4 py-1.5 rounded-full bg-white/90 border border-[#E2DAA8] shadow-warm-md backdrop-blur-md flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#4A5D2E] animate-pulse" />
          <span className="text-xs font-heading font-medium text-[#2C2B29]">
            Sumit Kumar • 1st Year BCA
          </span>
        </div>
      </motion.div>
    </div>
  );
};
