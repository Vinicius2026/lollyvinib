import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, Environment } from '@react-three/drei';
import * as THREE from 'three';

// Componente da Esfera Simplificado
const SimpleSphere: React.FC = () => {
  const meshRef = useRef<THREE.Mesh>(null!);

  // Animação removida temporariamente
  // useFrame((state, delta) => { ... });

  return (
    <Sphere ref={meshRef} args={[1.5, 64, 64]} >
      {/* Usando material padrão simples */}
      <meshStandardMaterial color="orange" />
    </Sphere>
  );
};

const AnimatedSphere: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0 opacity-40 md:opacity-60">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        {/* Garantindo que não há espaços/texto entre os elementos */}
        <ambientLight intensity={1} />
        <pointLight position={[5, 5, 5]} intensity={50} />
        <SimpleSphere />
        {/* <Environment preset="sunset" blur={0.6}/> */}
      </Canvas>
    </div>
  );
};

export default AnimatedSphere; 