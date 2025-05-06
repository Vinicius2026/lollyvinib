import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
// Removed User icon, will create a custom placeholder

// --- Custom Animated Placeholder --- 
const PresenceIndicator = () => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <defs>
      <filter id="indicator-glow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="3" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    {/* Outer ring */}
    <circle 
      cx="50" cy="50" r="45" 
      stroke="url(#pulse-gradient)" 
      strokeWidth="1" 
      strokeOpacity="0.5"
      className="opacity-50 group-hover:opacity-80 transition-opacity duration-300"
    />
    {/* Inner pulsing rings - subtle animation */}
    <circle cx="50" cy="50" r="35" stroke="url(#pulse-gradient)" strokeWidth="0.5" className="animate-pulse-ring-1 opacity-30 group-hover:opacity-60" />
    <circle cx="50" cy="50" r="25" stroke="url(#pulse-gradient)" strokeWidth="0.5" className="animate-pulse-ring-2 opacity-20 group-hover:opacity-50" />
    <circle cx="50" cy="50" r="15" stroke="url(#pulse-gradient)" strokeWidth="0.5" className="animate-pulse-ring-3 opacity-10 group-hover:opacity-40" />
    <linearGradient id="pulse-gradient" gradientTransform="rotate(90)">
      <stop offset="0%" stopColor="rgba(34, 211, 238, 0.6)" /> {/* ailoop-neon-blue-ish */} 
      <stop offset="100%" stopColor="rgba(139, 92, 246, 0.6)" /> {/* ailoop-purple-ish */} 
    </linearGradient>
     {/* Central subtle glow point */}
     <circle cx="50" cy="50" r="2" fill="rgba(200, 220, 255, 0.6)" filter="url(#indicator-glow)" className="opacity-50 group-hover:opacity-80" />
  </svg>
);


// --- Data for executives (No change) --- 
const executives = [
  { name: 'EdCred', title: 'CEO', gridSpan: 'md:col-span-2', alignment: 'items-center' },
  { name: 'Vinicius Beni', title: 'CTO', gridSpan: 'md:col-span-1', alignment: 'md:items-end' },
  { name: 'Bruno Padrin', title: 'Head of Engineering', gridSpan: 'md:col-span-1', alignment: 'md:items-start' },
];

// --- Animation Variants (Refined) --- 
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Slightly slower stagger
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.9 }, // Start further down and smaller
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }, // Expo out easing for smooth arrival
  },
};

// Refined hover effect - Removed filter animation due to invalid keyframe errors
const cardHoverEffect = {
  scale: 1.02, // Keep subtle scale
  // filter: 'drop-shadow(0px 8px 25px rgba(139, 92, 246, 0.15)) drop-shadow(0px 2px 10px rgba(34, 211, 238, 0.1))', // Removed from hover animation
  transition: { type: 'spring', stiffness: 280, damping: 20 }
};

// --- Component Definition --- 
const ExecutiveTeamSection: React.FC = () => {
  return (
    <motion.section
      id="executive-team"
      // Slightly adjusted padding, darker base background
      className="relative bg-[#05050A] text-white overflow-hidden py-24 md:py-32 px-4"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }} // Trigger slightly earlier
    >
      {/* More subtle background gradient effect */}
       <div className="absolute inset-0 z-0 opacity-[0.08] bg-[radial-gradient(ellipse_at_50%_-20%,rgba(139,92,246,0.25)_0%,transparent_60%)]"></div>
       {/* Added subtle noise texture via CSS class */}
       <div className="absolute inset-0 z-0 opacity-[0.015] bg-[url('/noise-light.png')] bg-repeat"></div>

      <div className="container mx-auto relative z-10 max-w-6xl"> {/* Increased max-width */}
        {/* Section Title - Removed gradient from Founders span, applied direct color */}
        <motion.h2
           // Using standard sans font, focusing on weight, size, and spacing for premium feel
          className="text-4xl md:text-5xl lg:text-6xl font-semibold text-center mb-20 md:mb-24 tracking-tight text-neutral-100"
          variants={itemVariants}
        >
          Executive Group <span className="text-ailoop-blue">Founders</span> {/* Removed gradient classes, applied text-ailoop-blue */}
        </motion.h2>

        {/* Executives Grid Layout - Increased gap */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 max-w-5xl mx-auto"> {/* Increased max-width, gap */}
          {executives.map((exec, index) => (
            <motion.div
              key={exec.name}
              className={cn(
                'flex flex-col', 
                exec.gridSpan, 
                 // Center CEO container, others align content within their grid cell
                 index === 0 ? 'items-center justify-center' : `items-center ${exec.alignment}` 
              )}
              variants={itemVariants}
            >
              {/* Card Refinement */}
              <motion.div
                 className={cn(
                   "group w-full max-w-[300px] md:max-w-xs flex flex-col items-center text-center p-6 md:p-8 rounded-2xl", // Slightly larger padding, more rounded
                   "bg-gradient-to-br from-neutral-900/60 to-neutral-850/50", // Subtle dark gradient
                   "border border-neutral-700/60", // Refined border color/opacity
                   "backdrop-blur-lg shadow-xl shadow-black/20", // Stronger blur, base shadow
                   "transition-all duration-300 ease-in-out" // Base transition for non-motion props
                 )}
                 whileHover={cardHoverEffect}
                 // Removed whileHover from inner div, applied to outer motion.div
              >
                {/* Refined Image Placeholder Area */}
                <div className="w-36 h-36 md:w-44 md:h-44 mb-6 md:mb-8 p-1 rounded-full border border-neutral-700/50 bg-gradient-to-br from-neutral-800 to-neutral-750">
                   <div className="w-full h-full rounded-full overflow-hidden bg-neutral-850/80 flex items-center justify-center shadow-inner">
                      {/* Using the animated presence indicator */} 
                      <PresenceIndicator /> 
                   </div>
                 </div>

                {/* Refined Typography */}
                <h3 className="text-2xl md:text-3xl font-medium text-neutral-100 mb-1.5 tracking-tight">{exec.name}</h3>
                <p className="text-sm md:text-base text-ailoop-neon-blue/90 font-normal tracking-wide opacity-90">{exec.title}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Descriptive Text - Changed color to text-neutral-300 for better visibility */}
        <motion.p
          className="text-center text-sm md:text-base text-neutral-300 max-w-xl mx-auto mt-24 md:mt-32 font-light leading-relaxed tracking-wide" // Changed text-neutral-400 to text-neutral-300
          variants={itemVariants}
          style={{ transitionDelay: '0.3s' }} // Delay fade-in slightly
        >
          Feito por Brasileiros imersivos em tecnologia, com apoio de 8 IAs em níveis de contextos diferentes.
        </motion.p>
      </div>
    </motion.section>
  );
};

export default ExecutiveTeamSection;

// --- Add Keyframes to global CSS or tailwind.config.js --- 
/*
@keyframes pulse-ring-1 {
  0%, 100% { transform: scale(0.8); opacity: 0.3; }
  50% { transform: scale(1); opacity: 0.6; }
}
@keyframes pulse-ring-2 {
  0%, 100% { transform: scale(0.85); opacity: 0.2; }
  50% { transform: scale(1.05); opacity: 0.5; }
}
@keyframes pulse-ring-3 {
  0%, 100% { transform: scale(0.9); opacity: 0.1; }
  50% { transform: scale(1.1); opacity: 0.4; }
}

.animate-pulse-ring-1 {
  animation: pulse-ring-1 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  transform-origin: center;
}
.animate-pulse-ring-2 {
  animation: pulse-ring-2 4.5s cubic-bezier(0.4, 0, 0.6, 1) infinite 0.2s;
  transform-origin: center;
}
.animate-pulse-ring-3 {
  animation: pulse-ring-3 5s cubic-bezier(0.4, 0, 0.6, 1) infinite 0.4s;
  transform-origin: center;
}
*/

// Assume noise-light.png exists in /public or adjust path
// Ensure AILOOP colors are defined in tailwind config