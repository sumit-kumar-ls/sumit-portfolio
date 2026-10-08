import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

/**
 * 🎯 ISOLATED 3D CHARACTER ASSET CONFIGURATION
 * To replace the character in the future:
 * 1. Place your new 3D model (.glb/.gltf) or vector/image asset in `public/assets/character/`
 * 2. Update the CHARACTER_ASSET_PATH constant below to match your new file name.
 */
export const CHARACTER_ASSET_PATH = "/assets/character/sumit-boy.svg";

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
  const rotateX = mousePos.y * -8;
  const rotateY = mousePos.x * 12;
  const translateX = mousePos.x * 6;
  const translateY = mousePos.y * 4;

  return (
    <div className="relative w-full max-w-[380px] sm:max-w-[440px] aspect-[4/5] mx-auto flex items-center justify-center select-none pointer-events-auto">
      {/* Background Organic Soft Shape */}
      <div className="absolute inset-4 rounded-[40%_60%_70%_30%/50%_60%_40%_50%] bg-gradient-to-tr from-[#E6DFC7] via-[#EFEAD8] to-[#DFD5B9] opacity-75 blur-[2px] transition-transform duration-700 ease-out" />
      
      {/* Secondary Soft Ambient Glow Circle */}
      <div className="absolute w-[80%] h-[80%] rounded-full bg-[#4A5D2E]/[0.06] blur-2xl top-10" />

      {/* Main Character 3D Graphic Container with Mouse Tracking */}
      <motion.div
        className="relative z-10 w-full h-full flex flex-col items-center justify-center"
        style={{
          transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translate3d(${translateX}px, ${translateY}px, 0px)`,
          transition: 'transform 0.15s ease-out'
        }}
      >
        {/* Render Isolated Character Asset */}
        <img
          src={CHARACTER_ASSET_PATH}
          alt="Sumit Kumar — 3D Character Avatar"
          className="w-full h-full object-contain drop-shadow-[0_25px_35px_rgba(60,50,40,0.15)]"
        />

        {/* Floating Developer Badge Below Character */}
        <div className="absolute -bottom-2 px-4 py-1.5 rounded-full bg-white/90 border border-[#E2DAA8] shadow-warm-md backdrop-blur-md flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#4A5D2E] animate-pulse" />
          <span className="text-xs font-heading font-medium text-[#2C2B29]">
            Sumit Kumar • 1st Year BCA
          </span>
        </div>
      </motion.div>
    </div>
  );
};
