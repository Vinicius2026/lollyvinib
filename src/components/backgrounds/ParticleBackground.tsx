import React from 'react';
import './ParticleBackground.css';

const ParticleBackground: React.FC = () => {
  return (
    <div className="particle-background">
      {[...Array(15)].map((_, i) => (
        <div key={i} className="particle"></div>
      ))}
    </div>
  );
};

export default ParticleBackground; 