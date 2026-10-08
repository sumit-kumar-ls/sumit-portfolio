import React, { useState, useEffect } from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';

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

  // Soft springs for mouse follow tilt
  const rotateX = mousePos.y * -8;
  const rotateY = mousePos.x * 12;
  const translateX = mousePos.x * 6;
  const translateY = mousePos.y * 4;

  return (
    <div className="relative w-full max-w-[380px] sm:max-w-[440px] aspect-[4/5] mx-auto flex items-center justify-center select-none pointer-events-auto">
      {/* Background Organic Soft Shape */}
      <div className="absolute inset-4 rounded-[40%_60%_70%_30%/50%_60%_40%_50%] bg-gradient-to-tr from-[#E6DFC7] via-[#EFEAD8] to-[#DFD5B9] opacity-75 blur-[2px] transition-transform duration-700 ease-out" />
      
      {/* Secondary Soft Glow Circle */}
      <div className="absolute w-[80%] h-[80%] rounded-full bg-[#4A5D2E]/[0.06] blur-2xl top-10" />

      {/* Main Character 3D Graphic Group with Mouse Tracking */}
      <motion.div
        className="relative z-10 w-full h-full flex flex-col items-center justify-center"
        style={{
          transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translate3d(${translateX}px, ${translateY}px, 0px)`,
          transition: 'transform 0.15s ease-out'
        }}
      >
        {/* Soft 3D Stylized Boy Illustration Composite */}
        <svg
          viewBox="0 0 400 500"
          className="w-full h-full drop-shadow-[0_25px_35px_rgba(60,50,40,0.15)]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Skin & Hair Gradients */}
            <radialGradient id="skinGrad" cx="30%" cy="30%" r="70%">
              <stop offset="0%" stopColor="#FDE3D0" />
              <stop offset="70%" stopColor="#F5C4A3" />
              <stop offset="100%" stopColor="#E2A682" />
            </radialGradient>
            
            <radialGradient id="hairGrad" cx="30%" cy="20%" r="80%">
              <stop offset="0%" stopColor="#3D3028" />
              <stop offset="60%" stopColor="#2A201A" />
              <stop offset="100%" stopColor="#18120E" />
            </radialGradient>

            {/* Clothing Gradients - Muted Olive & Warm Cream */}
            <linearGradient id="hoodieGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#5B6E3F" />
              <stop offset="50%" stopColor="#4A5D2E" />
              <stop offset="100%" stopColor="#384722" />
            </linearGradient>

            <linearGradient id="hoodieHighlight" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#6C804F" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#4A5D2E" stopOpacity="0" />
            </linearGradient>

            <linearGradient id="pantsGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#2E3440" />
              <stop offset="100%" stopColor="#1E222A" />
            </linearGradient>

            <linearGradient id="laptopGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#E2E8F0" />
              <stop offset="100%" stopColor="#CBD5E1" />
            </linearGradient>

            <linearGradient id="shoeGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="100%" stopColor="#E2E8F0" />
            </linearGradient>

            {/* Soft Shadow Filter */}
            <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="12" stdDeviation="10" floodColor="#2C2B29" floodOpacity="0.12" />
            </filter>
            
            <filter id="ambientGlow" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="15" result="blur" />
            </filter>
          </defs>

          {/* Ground Soft Shadow Oval */}
          <ellipse cx="200" cy="460" rx="110" ry="18" fill="#3A3226" opacity="0.14" />
          <ellipse cx="200" cy="460" rx="75" ry="10" fill="#3A3226" opacity="0.22" />

          {/* Character Group */}
          <g filter="url(#softShadow)">
            {/* Legs & Pants */}
            <rect x="158" y="340" width="34" height="95" rx="16" fill="url(#pantsGrad)" />
            <rect x="208" y="340" width="34" height="95" rx="16" fill="url(#pantsGrad)" />

            {/* Sneakers */}
            <path d="M 148 425 Q 155 418 185 418 L 195 438 Q 180 445 148 440 Z" fill="url(#shoeGrad)" />
            <path d="M 252 425 Q 245 418 215 418 L 205 438 Q 220 445 252 440 Z" fill="url(#shoeGrad)" />
            <rect x="146" y="435" width="48" height="8" rx="4" fill="#4A5D2E" />
            <rect x="206" y="435" width="48" height="8" rx="4" fill="#4A5D2E" />

            {/* Body / Muted Olive Hoodie */}
            <path
              d="M 130 205 C 130 185, 270 185, 270 205 L 282 345 C 282 355, 118 355, 118 345 Z"
              fill="url(#hoodieGrad)"
            />
            {/* Hoodie Highlight Overlay */}
            <path
              d="M 130 205 C 150 190, 250 190, 270 205 L 265 280 C 200 290, 160 280, 135 280 Z"
              fill="url(#hoodieHighlight)"
            />

            {/* Hoodie Strings */}
            <path d="M 185 215 Q 182 245 186 260" stroke="#F4F0E8" strokeWidth="3" strokeLinecap="round" />
            <path d="M 215 215 Q 218 245 214 260" stroke="#F4F0E8" strokeWidth="3" strokeLinecap="round" />

            {/* Arms & Hands */}
            {/* Left Arm holding sleek laptop */}
            <path d="M 125 210 Q 100 270 135 300" stroke="url(#hoodieGrad)" strokeWidth="32" strokeLinecap="round" />
            
            {/* Right Arm relaxed at side */}
            <path d="M 275 210 Q 295 270 265 300" stroke="url(#hoodieGrad)" strokeWidth="32" strokeLinecap="round" />

            {/* Sleek Laptop Prop (Developer identity) */}
            <g transform="rotate(-12 150 285)">
              <rect x="110" y="275" width="75" height="52" rx="6" fill="url(#laptopGrad)" stroke="#CBD5E1" strokeWidth="1.5" />
              <rect x="114" y="279" width="67" height="44" rx="4" fill="#1E293B" />
              {/* Soft screen glow icon */}
              <circle cx="147.5" cy="301" r="8" fill="#4A5D2E" opacity="0.9" />
              <path d="M 143.5 301 L 146.5 304 L 151.5 298" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
            </g>

            {/* Hands Skin */}
            <circle cx="132" cy="300" r="12" fill="url(#skinGrad)" />
            <circle cx="268" cy="300" r="12" fill="url(#skinGrad)" />

            {/* Neck */}
            <rect x="184" y="172" width="32" height="24" rx="10" fill="url(#skinGrad)" />

            {/* Head */}
            <circle cx="200" cy="140" r="48" fill="url(#skinGrad)" />

            {/* Ears */}
            <circle cx="152" cy="142" r="10" fill="url(#skinGrad)" />
            <circle cx="248" cy="142" r="10" fill="url(#skinGrad)" />

            {/* Modern Stylish Hair */}
            <path
              d="M 150 140 C 145 95, 255 95, 250 140 C 245 110, 220 100, 200 100 C 180 100, 155 110, 150 140 Z"
              fill="url(#hairGrad)"
            />
            {/* Hair Front Tuft Layer */}
            <path
              d="M 158 128 Q 185 105 210 115 Q 235 110 244 125 Q 220 118 200 120 Q 180 118 158 128 Z"
              fill="url(#hairGrad)"
            />

            {/* Face Features: Soft Friendly Eyes, Glasses & Smile */}
            {/* Stylish Minimal Glasses */}
            <rect x="168" y="130" width="26" height="20" rx="6" stroke="#2C2B29" strokeWidth="2.5" fill="none" opacity="0.85" />
            <rect x="206" y="130" width="26" height="20" rx="6" stroke="#2C2B29" strokeWidth="2.5" fill="none" opacity="0.85" />
            <line x1="194" y1="138" x2="206" y2="138" stroke="#2C2B29" strokeWidth="2" />
            <line x1="158" y1="138" x2="168" y2="138" stroke="#2C2B29" strokeWidth="2" />
            <line x1="232" y1="138" x2="242" y2="138" stroke="#2C2B29" strokeWidth="2" />

            {/* Eyes */}
            <circle cx="181" cy="140" r="3.5" fill="#1A1918" />
            <circle cx="219" cy="140" r="3.5" fill="#1A1918" />
            <circle cx="182" cy="139" r="1" fill="#FFFFFF" />
            <circle cx="220" cy="139" r="1" fill="#FFFFFF" />

            {/* Friendly Warm Smile */}
            <path d="M 190 156 Q 200 164 210 156" stroke="#C86D51" strokeWidth="2.5" strokeLinecap="round" fill="none" />
            
            {/* Subtle Rosy Cheeks */}
            <circle cx="166" cy="148" r="6" fill="#E89A84" opacity="0.4" />
            <circle cx="234" cy="148" r="6" fill="#E89A84" opacity="0.4" />
          </g>
        </svg>

        {/* Floating Developer Badge Below Character */}
        <div className="absolute -bottom-2 px-4 py-1.5 rounded-full bg-white/90 border border-[#E2DAA8] shadow-warm-md backdrop-blur-md flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#4A5D2E] animate-pulse" />
          <span className="text-xs font-heading font-medium text-[#2C2B29]">
            Sumit Kumar • Student & Aspirant
          </span>
        </div>
      </motion.div>
    </div>
  );
};
