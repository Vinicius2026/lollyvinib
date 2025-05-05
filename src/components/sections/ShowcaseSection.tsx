import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';
// Importações para Post-processing
import { EffectComposer, Bloom, Selection, Select } from '@react-three/postprocessing';
import { KernelSize } from 'postprocessing';

// // Cor emissiva Neon Purple (Removida - usaremos Bloom)
// const emissiveColor = new THREE.Color(0xA020F0);

// Componente para o modelo 3D com direção de rotação, posição e efeitos visuais
const ModelViewer = ({ rotationDirection = 1, positionOffset = [0, 0, 0] }: { rotationDirection?: number, positionOffset?: [number, number, number] }) => {
  const { scene } = useGLTF('/models/cyberpunk_cats.glb');
  const modelRef = useRef<THREE.Group>(null);
  const time = useRef(0);

  // Clonar a cena para ter instâncias independentes
  const clonedScene = scene.clone();

  // // Aplicar efeito emissivo (Removido - substituído por Bloom)
  // useEffect(() => {
  //   clonedScene.traverse((child) => {
  //     if (child instanceof THREE.Mesh && child.material instanceof THREE.MeshStandardMaterial) {
  //       child.material.emissive = emissiveColor;
  //       child.material.emissiveIntensity = 1.5;
  //       child.material.needsUpdate = true;
  //     }
  //   });
  // }, [clonedScene]);

  // Rotação e Oscilação
  useFrame((state, delta) => {
    time.current += delta;
    if (modelRef.current) {
      // Rotação Y existente
      modelRef.current.rotation.y += delta * 0.2 * rotationDirection;

      // Oscilação vertical sutil
      const oscillation = Math.sin(time.current * 1.5) * 0.08;
      modelRef.current.position.y = -1.5 + positionOffset[1] + oscillation;
    }
  });

  return (
    // Envolvido por <Select> no componente pai para o Bloom seletivo
    <primitive
      ref={modelRef}
      object={clonedScene} // Usa a cena clonada
      scale={4.5}
      // Posição inicial (sem oscilação, que é aplicada no useFrame)
      position={[positionOffset[0], -1.5 + positionOffset[1], positionOffset[2]]}
    />
  );
};

const ShowcaseSection: React.FC = () => {
  return (
    <motion.section
      // Adicionado box-shadow para efeito de brilho suave roxo neon
      className="py-16 md:py-24 text-brand-white relative overflow-hidden shadow-[0_0_30px_5px_rgba(160,32,240,0.2)]"
      style={{
        background: 'radial-gradient(ellipse at center, #1a1a1a 0%, #0a0a0a 70%)'
      }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
       {/* Adiciona um pseudo-elemento para um efeito de vinheta ou brilho sutil, se necessário */}
       {/* <div className="absolute inset-0 bg-black/30 pointer-events-none"></div> */}

      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center relative z-10">
        {/* Coluna Esquerda: Canvas Único com Dois Modelos e Bloom */}
        <div className="h-96 md:h-[500px] w-full relative">
          <Canvas camera={{ position: [0, 1, 10], fov: 50 }}>
            <ambientLight intensity={0.5} /> {/* Reduzi um pouco a luz ambiente */ }
            <directionalLight position={[5, 8, 5]} intensity={1.0} /> {/* Reduzi um pouco a luz direcional */ }

            {/* Selection para habilitar o Selective Bloom */ }
            <Selection>
              {/* EffectComposer para aplicar efeitos */ }
              <EffectComposer autoClear={false}>
                <Bloom
                  luminanceThreshold={0.2} // Ajuste para controlar o que brilha (valores mais baixos brilham mais coisas)
                  luminanceSmoothing={0.1} // Suavização do threshold
                  intensity={1.2}        // Intensidade do brilho
                  kernelSize={KernelSize.MEDIUM} // Tamanho do kernel do blur (SMALL, MEDIUM, LARGE, VERY_LARGE, HUGE)
                  mipmapBlur={true}         // Usa mipmaps para um blur mais performático e suave
                />
              </EffectComposer>

              {/* Suspense para carregamento do modelo */}
              <React.Suspense fallback={null}>
                {/* Modelo 1 envolvido por Select */ }
                <Select enabled>
                  <ModelViewer rotationDirection={1} positionOffset={[-2.5, 0, 0]} />
                </Select>
                {/* Modelo 2 envolvido por Select */ }
                <Select enabled>
                  <ModelViewer rotationDirection={-1} positionOffset={[2.5, 0, 0]} />
                </Select>
              </React.Suspense>
            </Selection>

            {/* <OrbitControls /> */ } {/* Mantido comentado */}
          </Canvas>
          {/* <div className="absolute inset-0"></div> */ } {/* Comentado pois pode interferir com post-processing */}
        </div>

        {/* Coluna Direita: Conteúdo Atualizado */}
        <div className="space-y-5 md:space-y-6">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-neon-purple">
            A inteligência artificial não substitui nossa decisão. Ela a fortalece.
          </h2>
          {/* Descrição dividida em parágrafos */}
          <p className="text-lg text-white/80 font-sans">
            Na era da informação, tomar decisões com base apenas na intuição ou na experiência já não é o bastante.
          </p>
          <p className="text-lg text-white/80 font-sans">
            A AILOOP combina dados avançados e inteligência algorítmica para revelar caminhos mais claros, eficientes e estratégicos.
          </p>
          <p className="text-lg text-white/80 font-sans">
             Em vez de decidir no escuro, você vê o que a IA vê — e age com confiança.
          </p>
           <p className="text-lg text-white/90 font-sans font-medium italic">
             Na AILOOP, sua melhor decisão é sempre baseada na melhor sugestão.
          </p>
          <Button
            variant="outline"
            className="mt-6 bg-transparent border-neon-purple text-neon-purple hover:bg-neon-purple/10 hover:text-neon-purple group text-base"
          >
            <span className="mr-2">🔍</span> {/* Emoji adicionado */ }
            Todos os Serviços
            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </motion.section>
  );
};

useGLTF.preload('/models/cyberpunk_cats.glb');

export default ShowcaseSection; 