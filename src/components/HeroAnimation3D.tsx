"use client";

import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import * as THREE from 'three';

// Componente interno para a lógica das estrelas e rotação
function StarField() {
  const ref = useRef<THREE.Points>(null!);

  // Animação de rotação sutil
  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 15;
      ref.current.rotation.y -= delta / 20;
    }
  });

  return (
    <Stars
      ref={ref}
      radius={100} // Raio da esfera onde as estrelas são geradas
      depth={50}   // Profundidade (influencia a distribuição)
      count={5000} // Número de estrelas
      factor={5}   // Fator de tamanho das estrelas
      saturation={0} // Saturação (0 = branco)
      fade         // Estrelas diminuem perto das bordas
      speed={1}    // Velocidade da animação interna (se houver)
    />
  );
}

// Componente principal da animação
const HeroAnimation3D: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 1] }}> {/* Posição da câmera simples */}
        <Suspense fallback={null}> {/* Suspense é bom para carregamento de modelos/texturas */}
          <ambientLight intensity={0.5} /> {/* Luz ambiente básica */}
          <StarField />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default HeroAnimation3D; 