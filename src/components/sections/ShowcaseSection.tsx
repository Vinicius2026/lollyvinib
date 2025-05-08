import React, { useRef, useEffect, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, Points, PointMaterial } from '@react-three/drei';
import { motion } from 'framer-motion';
import { EffectComposer, Bloom, Selection, Select } from '@react-three/postprocessing';
import { KernelSize } from 'postprocessing';
import * as THREE from 'three';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { CosmicNebulaEffect } from '@/components/animations/CosmicNebulaEffect';

const ModelViewer = ({ position = [0, 0, 0], direction = 1 }: { position: [number, number, number], direction?: number }) => {
  const { scene } = useGLTF('/models/cyberpunk_cats.glb');
  const modelRef = useRef<THREE.Group>(null);
  const time = useRef(0);
  const cloned = useMemo(() => scene.clone(), [scene]);

  useFrame((_, delta) => {
    time.current += delta;
    if (modelRef.current) {
      modelRef.current.rotation.y += delta * 0.25 * direction;
      modelRef.current.position.y = position[1] + Math.sin(time.current * 1.5) * 0.07;
    }
  });

  return <primitive ref={modelRef} object={cloned} scale={4.5} position={position} />;
};

export const ShowcaseSection = () => {
  return (
    <motion.section
      className="py-32 text-brand-white relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1.0 }}
    >
      {/* Efeito de mesclagem no topo - sobrepõe o conteúdo */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#08080A] to-transparent z-20 pointer-events-none" />

      {/* Aviso de dashboard - sobrepõe o conteúdo */}
      <div className="text-center pt-4 pb-4 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-block backdrop-blur-sm border-2 border-purple-400 text-purple-300 text-xs font-semibold uppercase tracking-wider px-4 py-2 rounded-full shadow-lg shadow-purple-500/40"
        >
          AGÊNCIA IA ON DEMAND
        </motion.div>
      </div>

      {/* Container principal com o grid de 2 colunas */}
      <div className="container mx-auto px-5 grid md:grid-cols-2 gap-8 md:gap-16 items-center relative z-10 pt-12 md:pt-16">
        
        {/* Coluna da Esquerda: Contém a imagem e a nébula atrás */}
        <div className="h-80 md:h-96 w-full relative flex items-center justify-center">
          
          {/* Div para posicionar o Canvas da Nébula - Fica atrás (z-0) */}
          <div style={{ position: 'absolute', top: '50%', left: '50%', width: '100%', height: '100%', transform: 'translate(-50%, -50%)', zIndex: 0 }}>
            <Canvas camera={{ position: [0, 0, 6], fov: 65 }} style={{ background: 'transparent' }}>
              {/* Configuração da nébula compacta */}
              <CosmicNebulaEffect
                particleCount={700}
                baseColor="#013220"
                baseSize={3.5}
                shapeVolume='box'
                volumeDimensions={new THREE.Vector3(2.5, 2.5, 1.75)}
              />
            </Canvas>
          </div>

          {/* Imagem - Fica na frente (z-10) */}
          <motion.img
            src="/image_grande/icon-za-medio-2.png"
            alt="Zap IA AILoop"
            className="max-h-[70%] max-w-[70%] md:max-h-[80%] md:max-w-[80%] object-contain relative z-10"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          />
        </div> {/* Fim da Coluna da Esquerda */}

        {/* Coluna da Direita: Conteúdo de texto - Fica na frente (z-10 implícito pelo container) */}
        <motion.div
          className="space-y-6 relative z-10"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-neon-purple">
              IA não substitui sua decisão.
            </h2>
            <p className="text-xl md:text-2xl font-display text-neon-purple/80 mt-1 md:mt-2">
              Ela amplia sua visão.
            </p>
          </div>
          <div className="space-y-4 max-w-lg"> {/* Adicionado max-w-lg para conter a largura da descrição */}
            <p className="text-lg text-white/80 font-sans">
              Tomar decisões com base apenas na experiência é coisa do passado.
            </p>
            <p className="text-lg text-white/80 font-sans">
              A AILOOP revela possibilities com inteligência algorítmica e percepção aumentada.
            </p>
            <p className="text-lg text-white/90 italic font-medium">
              A melhor decisão começa com o melhor dado.
            </p>
          </div>
        </motion.div> {/* Fim da Coluna da Direita */}

      </div> {/* Fim do Container Grid */}
    </motion.section> /* Fim da Seção Principal */
  );
};

// useGLTF.preload('/models/cyberpunk_character.glb'); // Removido para otimização
