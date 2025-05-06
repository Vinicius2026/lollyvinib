import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { MessageSquare, CalendarIcon, Zap, Shapes } from 'lucide-react';
import { cn } from '@/lib/utils';

// --- Mock Icon Components (Replace with actual icons if available) ---
const BrainNetworkIcon = () => ( // Placeholder for top icon
  <Shapes className="w-full h-full text-ailoop-blue animate-spin-slow opacity-80 filter drop-shadow-[0_0_8px_theme(colors.ailoop-neon-blue/0.6)]" />
);

// Simple placeholder for Neural Network Visualization
const NeuralNetworkVisualization = () => (
  <div className="relative w-full max-w-md h-64 mx-auto my-8 md:my-12 overflow-hidden">
    {/* Placeholder elements */}
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-3/4 h-3/4 border-2 border-ailoop-neon-blue/30 rounded-lg animate-pulse-slow"></div>
      <Zap className="absolute text-ailoop-purple opacity-50 w-12 h-12 animate-ping" />
    </div>
    {/* Add more complex SVG or Canvas animation here later */}
  </div>
);


// --- Animation Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Slightly slower stagger for elements
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const networkBuildVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] } // Expo out ease
    }
};

// --- Componente Principal Refatorado ---
const CTASection: React.FC = () => {
  return (
    <motion.section
      id="cta-section" // Added an ID
      className="relative bg-[#080810] text-white overflow-hidden py-20 md:py-28" // Slightly darker bg
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants} // Apply container variants for staggering children
    >
      {/* Background Noise Texture */}
      <div className="absolute inset-0 z-0 opacity-[0.03] bg-[url('/noise.png')]"></div> {/* Assuming noise.png exists */}

       {/* Refined Background Gradient (subtle radial) */}
       <div className="absolute inset-0 z-0 opacity-50 bg-[radial-gradient(ellipse_at_center,rgba(15,15,24,0.6),rgba(8,8,16,0.9))]"></div>


      {/* Main Card Container */}
      <motion.div
        className={cn(
            "relative container max-w-4xl mx-auto px-6 py-12 md:px-10 md:py-16 z-10 rounded-3xl", // Larger padding, more rounded
            "bg-gradient-radial from-[#0F0F18] to-[#080810]/90", // Dark radial gradient background
            "border border-transparent", // Base transparent border
             // Refined border gradient (inner glow effect)
            "shadow-[inset_0_0_0_1px_rgba(139,92,246,0.3),_inset_0_0_0_2px_rgba(34,211,238,0.3)]",
            "backdrop-blur-xl" // Stronger glass effect
        )}
        variants={itemVariants} // Animate the card itself
        style={{ perspective: '1000px' }} // Needed for 3D tilt/parallax
        whileHover={{ scale: 1.005 }} // Subtle respiratory movement base
        transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      >

        {/* Decorative Corner Brackets (Refined) */}
        <motion.div
            className="absolute -top-2 -left-2 w-16 h-16 border-l-2 border-t-2 border-ailoop-neon-blue/70 rounded-tl-xl opacity-60 filter drop-shadow-[0_0_5px_theme(colors.ailoop-neon-blue/0.5)] animate-pulse-subtle"
            initial={{ opacity: 0, x: -10, y: -10 }}
            animate={{ opacity: 0.6, x: 0, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
        ></motion.div>
        <motion.div
            className="absolute -bottom-2 -right-2 w-16 h-16 border-r-2 border-b-2 border-ailoop-purple/70 rounded-br-xl opacity-60 filter drop-shadow-[0_0_5px_theme(colors.ailoop-purple/0.5)] animate-pulse-subtle"
            initial={{ opacity: 0, x: 10, y: 10 }}
            animate={{ opacity: 0.6, x: 0, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
        ></motion.div>


        {/* Content Wrapper */}
        <div className="relative z-20 flex flex-col items-center text-center">

           {/* Animated Top Icon */}
            <motion.div
                className="w-16 h-16 mb-6 md:mb-8"
                 initial={{ opacity: 0, scale: 0.5 }}
                 animate={{ opacity: 1, scale: 1 }}
                 transition={{ delay: 0.2, duration: 0.7, type: 'spring', bounce: 0.5 }}
            >
                <BrainNetworkIcon />
            </motion.div>

          {/* Title (Larger, Gradient Text) */}
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-white via-blue-300 to-white bg-clip-text text-transparent"
            variants={itemVariants}
          >
            Quer entender como a IA pode acelerar seu negócio?
          </motion.h2>

          {/* Subtitle (Improved Spacing, Highlighted AILOOP) */}
          <motion.p
            className="text-lg md:text-xl text-neutral-300 max-w-2xl mb-8 md:mb-12 leading-relaxed" // Increased leading
            variants={itemVariants}
          >
            Fale agora com um especialista da <span className="text-ailoop-blue font-semibold filter drop-shadow-[0_0_4px_theme(colors.ailoop-neon-blue/0.5)]">AILOOP</span> e descubra como revolucionar sua presença digital.
          </motion.p>

          {/* Neural Network Visualization */}
          <motion.div
             variants={networkBuildVariants} // Custom animation for build-up
             className="w-full" // Ensure it takes width
          >
             <NeuralNetworkVisualization />
          </motion.div>


          {/* Button Container */}
          <motion.div
             className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 mt-8 md:mt-0" // Adjusted margin top
             variants={itemVariants} // Animate buttons as a group initially
          >
            {/* WhatsApp Button (Primary) */}
            <motion.button
              whileHover={{ scale: 1.03, filter: 'brightness(1.1)' }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 300, damping: 15 }}
              className={cn(
                  "relative group inline-flex items-center justify-center px-6 py-3 rounded-lg",
                  "bg-gradient-to-r from-[#0D9488] to-[#10B981] text-white font-medium shadow-md",
                  "hover:shadow-lg hover:shadow-emerald-500/30 transition-all duration-300",
                  "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#080810] focus:ring-emerald-500"
              )}
              // onClick={() => window.open('YOUR_WHATSAPP_LINK', '_blank')} // Add your link here
            >
               {/* Subtle pulsing border on hover */}
               <span className="absolute inset-[-2px] rounded-lg bg-gradient-to-r from-emerald-400 to-emerald-600 opacity-0 group-hover:opacity-70 group-hover:animate-pulse-border blur transition-opacity duration-300"></span>
               <span className="relative z-10 flex items-center">
                 <MessageSquare className="w-5 h-5 mr-2" />
                 WhatsApp direto
               </span>
            </motion.button>

            {/* Agendar Button (Secondary) */}
             <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 300, damping: 15 }}
              className={cn(
                  "relative group inline-flex items-center justify-center px-6 py-3 rounded-lg border",
                   // Border gradient
                  "border-transparent bg-clip-padding bg-[#0A0A14]/70", // Semi-transparent dark bg
                   "shadow-[inset_0_0_0_1px_rgba(139,92,246,0.5),_inset_0_0_0_2px_rgba(34,211,238,0.3)]", // Gradient border via shadow
                  "text-neutral-200 font-medium transition-all duration-300 overflow-hidden",
                  "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#080810] focus:ring-ailoop-blue"
              )}
               // onClick={() => window.open('YOUR_CALENDLY_LINK', '_blank')} // Add your link here
            >
               {/* Fill effect on hover */}
               <span className="absolute inset-0 bg-gradient-to-r from-ailoop-blue/20 via-ailoop-purple/20 to-transparent transition-all duration-500 ease-out opacity-0 group-hover:opacity-100 -translate-x-full group-hover:translate-x-0"></span>
               <span className="relative z-10 flex items-center">
                  <CalendarIcon className="w-5 h-5 mr-2" /> {/* Using Lucide icon */}
                  Agendar uma conversa
               </span>
            </motion.button>
          </motion.div>

        </div>
        {/* End Content Wrapper */}

      </motion.div>
      {/* End Main Card Container */}

       {/* Removed the "Para quem é o nosso Chat Agente?" section as it might belong elsewhere */}

    </motion.section>
  );
};

export default CTASection;
// --- Helper CSS for Animations (Ensure these are in your global CSS or tailwind.config.js) ---
/*
@keyframes spin-slow {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
.animate-spin-slow {
  animation: spin-slow 15s linear infinite;
}

@keyframes pulse-subtle {
  0%, 100% { opacity: 0.6; filter: drop-shadow(0 0 5px currentColor); }
  50% { opacity: 0.8; filter: drop-shadow(0 0 8px currentColor); }
}
.animate-pulse-subtle {
  animation: pulse-subtle 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes pulse-border {
 0%, 100% { opacity: 0.7; }
 50% { opacity: 1; }
}
.animate-pulse-border {
 animation: pulse-border 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes pulse-slow {
  0%, 100% { opacity: 0.4; }
  50% { opacity: 0.7; }
}
.animate-pulse-slow {
 animation: pulse-slow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

*/

// --- Ensure Tailwind Theme Colors are Defined ---
/* tailwind.config.js example:
 theme: {
   extend: {
     colors: {
       'ailoop-blue': '#6366F1', // Example blue
       'ailoop-neon-blue': '#22D3EE', // Example cyan/neon
       'ailoop-purple': '#8B5CF6', // Example purple
       // ... other colors
     },
     backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
   }
 }
*/

// Make sure to install lucide-react if not already: npm install lucide-react
// Add noise.png to your public folder or adjust path.
// Add necessary animation keyframes and theme colors to your global CSS / tailwind config.
