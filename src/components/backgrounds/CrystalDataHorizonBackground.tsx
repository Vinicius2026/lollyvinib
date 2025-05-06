import React from 'react';
import { motion } from 'framer-motion';
// Canvas import remains for future R3F, but not used in this 2D refinement

// Using CSS variables for easier management within the component if needed
const NEON_COLORS = {
  blue: 'var(--neon-blue, #00BFFF)', // Deep Sky Blue as an example
  purple: 'var(--neon-purple, #A020F0)',
  cyan: 'var(--neon-cyan, #00FFFF)',
  pink: 'var(--neon-pink, #FF007F)', // Added another color for variety
};

interface CrystalShapeProps {
  shapeType: 'triangle' | 'hexagon' | 'line' | 'quad'; // Added quad
  size: number;
  color: string;
  initialPosition: { x: string; y: string };
  animateTo: { x: string; y: string };
  duration: number;
  delay?: number;
  rotation?: number;
  opacity?: number;
}

const CrystalShape: React.FC<CrystalShapeProps> = ({
  shapeType,
  size,
  color,
  initialPosition,
  animateTo,
  duration,
  delay = 0,
  rotation = 0,
  opacity = 0.6, // Default to semi-transparent
}) => {
  const baseStyle: React.CSSProperties = {
    position: 'absolute',
    // Glow effect using filter: drop-shadow for better shape following
    filter: `drop-shadow(0 0 5px ${color}) drop-shadow(0 0 10px ${color})`,
    opacity: opacity,
    transformOrigin: 'center center', // Ensure rotation is around the center
  };

  let shapeSpecificStyle: React.CSSProperties = {};

  if (shapeType === 'triangle') {
    shapeSpecificStyle = {
      width: 0,
      height: 0,
      borderLeft: `${size * 0.5}px solid transparent`,
      borderRight: `${size * 0.5}px solid transparent`,
      borderBottom: `${size * 0.866}px solid ${color}`, // Equilateral-ish triangle
    };
  } else if (shapeType === 'hexagon') {
    shapeSpecificStyle = {
      width: `${size}px`,
      height: `${size * 0.866}px`, // For a regular hexagon
      backgroundColor: color,
      clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
    };
  } else if (shapeType === 'line') {
    const isVertical = Math.random() > 0.5; // Randomly make some lines vertical
    shapeSpecificStyle = {
      width: isVertical ? '2px' : `${size}px`,
      height: isVertical ? `${size}px` : '2px',
      backgroundColor: color,
      borderRadius: '1px', // Slightly rounded ends for lines
    };
  } else if (shapeType === 'quad') { // Simple quadrilateral
    shapeSpecificStyle = {
      width: `${size}px`,
      height: `${size * 0.7}px`,
      backgroundColor: color,
      clipPath: 'polygon(0% 0%, 100% 20%, 100% 80%, 0% 100%)', // Asymmetric quad
    };
  }

  // Generate slightly different random rotations for each mirrored part of the animation
  const randomRotationOffset = (Math.random() - 0.5) * 10; // +/- 5 degrees

  return (
    <motion.div
      style={{
        ...baseStyle,
        ...shapeSpecificStyle,
        left: initialPosition.x,
        top: initialPosition.y,
      }}
      initial={{
        rotate: rotation + randomRotationOffset, // Initial rotation
        scale: 0.8, // Start slightly smaller
        opacity: 0, // Start transparent for fade-in
      }}
      animate={{
        x: animateTo.x,
        y: animateTo.y,
        rotate: [rotation + randomRotationOffset, rotation - rotation + randomRotationOffset, rotation + randomRotationOffset], // Subtle rotation change
        scale: [0.8, 1, 0.8], // Pulse scale
        opacity: [0, opacity, 0], // Fade in, stay, fade out (for looping effect)
      }}
      transition={{
        duration: duration,
        delay: delay,
        repeat: Infinity,
        repeatType: 'loop', // Changed from mirror to loop for smoother visual on opacity
        ease: 'easeInOut',
      }}
    />
  );
};

const CrystalDataHorizonBackground: React.FC = () => {
  const numShapes = 15; // Increase density for more visual richness
  const shapes = Array.from({ length: numShapes }).map((_, i) => {
    const shapeTypes: CrystalShapeProps['shapeType'][] = ['triangle', 'hexagon', 'line', 'quad'];
    const shapeType = shapeTypes[Math.floor(Math.random() * shapeTypes.length)];
    const size = Math.random() * 80 + 30; // Sizes from 30 to 110
    const colors = Object.values(NEON_COLORS);
    const color = colors[Math.floor(Math.random() * colors.length)];
    const duration = Math.random() * 15 + 15; // Duration 15-30s
    const randomOpacity = Math.random() * 0.4 + 0.2; // Opacity 0.2 - 0.6

    // Ensure elements are spread across and some are partially off-screen
    const initialX = `${Math.random() * 120 - 10}vw`; // Allow -10vw to 110vw
    const initialY = `${Math.random() * 120 - 10}vh`;
    const animateToXOffset = (Math.random() - 0.5) * 20; // Move +/- 10vw
    const animateToYOffset = (Math.random() - 0.5) * 20;

    return (
      <CrystalShape
        key={`shape-${i}`}
        shapeType={shapeType}
        size={size}
        color={color}
        initialPosition={{ x: initialX, y: initialY }}
        animateTo={{ x: `calc(${initialX} + ${animateToXOffset}vw)`, y: `calc(${initialY} + ${animateToYOffset}vh)` }}
        duration={duration}
        delay={Math.random() * 5} // Stagger delays up to 5s
        rotation={Math.random() * 360}
        opacity={randomOpacity}
      />
    );
  });

  return (
    <>
      {/* CSS for global styles like noise & color variables (could be in a <style> tag or your global CSS) */}
      <style>{`
        :root {
          --neon-blue: #00BFFF; /* Deep Sky Blue */
          --neon-purple: #A020F0; /* Standard Purple */
          --neon-cyan: #00FFFF; /* Cyan */
          --neon-pink: #FF00FF; /* Magenta/Fuchsia for a Pinkish tone */
        }
        .noise-overlay::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
          opacity: 0.03; // Very subtle noise
          pointer-events: none;
          z-index: -1; // Ensure it's behind shapes but above main bg color
        }
      `}</style>
      <motion.div
        className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden noise-overlay" // -z-10, overflow-hidden, added noise
        style={{
          // Subtle radial gradient for more depth
          background: `radial-gradient(ellipse at center, rgba(10,10,20,0.9) 0%, #07070A 70%, #05050A 100%)`,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: 'linear' }} // Slower fade-in
      >
        {/* Render dynamically generated shapes */}
        {shapes}
      </motion.div>
    </>
  );
};

export default CrystalDataHorizonBackground;