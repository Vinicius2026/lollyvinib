import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

// Componente para o modelo 3D
const ModelViewer = () => {
  const { scene } = useGLTF('/models/cyberpunk_cats.glb');
  const modelRef = useRef<THREE.Group>(null);

  // Rotação lenta
  useFrame((_state, delta) => {
    if (modelRef.current) {
      modelRef.current.rotation.y += delta * 0.2;
    }
  });

  return (
    // Ajustada a posição: um pouco mais para cima (Y) e para a esquerda (X)
    <primitive ref={modelRef} object={scene} scale={4.5} position={[-0.5, -2.0, 0]} />
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
        {/* Coluna Esquerda: Visualizador 3D */}
        <div className="h-96 md:h-[500px] w-full relative">
          <Canvas camera={{ position: [0, 1, 7], fov: 50 }}> {/* Ajuste a posição da câmera se necessário */}
            <ambientLight intensity={0.8} />
            <directionalLight position={[5, 8, 5]} intensity={1.5} />
            <React.Suspense fallback={null}>
              <ModelViewer />
            </React.Suspense>
            {/* Removido OrbitControls para rotação automática e desabilitar interação */}
          </Canvas>
           {/* Overlay para evitar interação direta com o canvas, se necessário */}
           <div className="absolute inset-0"></div>
        </div>

        {/* Coluna Direita: Conteúdo Atualizado */}
        <div className="space-y-5 md:space-y-6"> {/* Ajustado espaçamento vertical */}
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-neon-purple">
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
            <span className="mr-2">🔍</span> {/* Emoji adicionado */}
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