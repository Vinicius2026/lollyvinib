import React, { useRef, useEffect, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, Points, PointMaterial } from '@react-three/drei';
import { motion } from 'framer-motion';
import { EffectComposer, Bloom, Selection, Select } from '@react-three/postprocessing';
import { KernelSize } from 'postprocessing';
import * as THREE from 'three';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

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
      className="pb-20 text-brand-white relative overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      {/* Efeito de mesclagem no topo */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#08080A] to-transparent z-20 pointer-events-none" />

      {/* Aviso de dashboard */}
      <div className="text-center pt-4 pb-4 relative z-30">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-block backdrop-blur-sm border-2 border-purple-400 text-purple-300 text-xs font-semibold uppercase tracking-wider px-4 py-2 rounded-full shadow-lg shadow-purple-500/40"
        >
          AGÊNCIA IA ON DEMAND
        </motion.div>
      </div>

      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-16 items-center relative z-10 pt-16">
        <div className="h-96 md:h-[500px] w-full relative rounded-2xl overflow-hidden shadow-xl ring-1 ring-white/10 bg-gradient-to-b from-[#0a0a0f] to-[#0e0e1a]">
          <Canvas camera={{ position: [0, 1.5, 9], fov: 50 }} gl={{ alpha: true }}>
            <color attach="background" args={['#0e0e1a']} />
            <fog attach="fog" args={['#0e0e1a', 10, 20]} />

            <ambientLight intensity={0.3} color="#aaffff" />
            <directionalLight position={[4, 8, 4]} intensity={0.6} color="#ffffff" />

            <Selection>
              <EffectComposer autoClear={false}>
                <Bloom
                  intensity={0.45}
                  luminanceThreshold={0.4}
                  luminanceSmoothing={0.2}
                  kernelSize={KernelSize.SMALL}
                  mipmapBlur
                />
              </EffectComposer>
              <React.Suspense fallback={null}>
                {/* Dupla Esquerda */}
                <Select enabled>
                  <ModelViewer position={[-2.2, -1.5, 0]} direction={-1} />
                </Select>
                <Select enabled>
                  <ModelViewer position={[-1.0, -1.5, 0]} direction={-1} />
                </Select>

                {/* Dupla Direita */}
                <Select enabled>
                  <ModelViewer position={[1.0, -1.5, 0]} direction={1} />
                </Select>
                <Select enabled>
                  <ModelViewer position={[2.2, -1.5, 0]} direction={1} />
                </Select>
              </React.Suspense>
            </Selection>
          </Canvas>
        </div>

        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-neon-purple">
            IA não substitui sua decisão. Ela amplia sua visão.
          </h2>
          <p className="text-lg text-white/80 font-sans">
            Tomar decisões com base apenas na experiência é coisa do passado.
          </p>
          <p className="text-lg text-white/80 font-sans">
            A AILOOP revela possibilidades com inteligência algorítmica e percepção aumentada.
          </p>
          <p className="text-lg text-white/90 italic font-medium">
            A melhor decisão começa com o melhor dado.
          </p>
          <Button
            variant="outline"
            className="mt-6 bg-white/5 backdrop-blur-sm border border-white/10 text-white hover:bg-black/30 hover:border-white/20 group text-base transition-colors duration-300"
          >
            Todos os Serviços
            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
};

// useGLTF.preload('/models/cyberpunk_character.glb'); // Removido para otimização
