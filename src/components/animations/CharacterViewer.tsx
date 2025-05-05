import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, SpotLight, PointLight, SpotLightHelper } from '@react-three/drei';
import { CharacterModel } from './CharacterModel'; // Importa o modelo
import * as THREE from 'three'; // Importar THREE para usar cores

interface CharacterViewerProps {
  modelUrl: string;
  canvasHeight?: string; 
  canvasWidth?: string;
  showControls?: boolean; // Para habilitar/desabilitar OrbitControls
  modelScale?: number | [number, number, number];
  modelPosition?: [number, number, number];
  modelRotation?: [number, number, number];
  ambientLightIntensity?: number;
  directionalLightIntensity?: number;
  directionalLightPosition?: [number, number, number];
}

export function CharacterViewer({
  modelUrl,
  canvasHeight = '300px', // Altura padrão do canvas
  canvasWidth = '100%',  // Largura padrão do canvas
  showControls = false, // Controles desabilitados por padrão
  modelScale = 1,
  modelPosition = [0, -1, 0], // Posição padrão um pouco abaixo
  modelRotation = [0, 0, 0],
  ambientLightIntensity = 0.8, // Ajustar intensidade ambiente se necessário (era 1.0)
  directionalLightIntensity = 1.2, // Ajustar direcional (era 1.5)
  directionalLightPosition = [5, 8, 5] // Ajustar posição da luz direcional (era [5, 5, 5])
}: CharacterViewerProps) {
  return (
    <Canvas 
      style={{ height: canvasHeight, width: canvasWidth }} 
      camera={{ position: [0, 1, 4], fov: 55 }} // Aproximar câmera e ajustar FOV (era [0,0,5], fov 50)
      shadows // Habilita sombras
    >
      {/* Suspense mostra um fallback enquanto o modelo carrega */}
      <Suspense fallback={null}> 
        {/* Luz ambiente para iluminar toda a cena */}
        <ambientLight intensity={ambientLightIntensity} />
        {/* Luz direcional para criar sombras e destaques */}
        <directionalLight 
          position={directionalLightPosition} 
          intensity={directionalLightIntensity} 
          castShadow // Permite que esta luz projete sombras
        />
        {/* Luz de spot vindo de cima/frente */}
        <SpotLight
          position={[0, 5, 5]} // Posição da luz
          angle={0.5} // Ângulo do cone de luz
          penumbra={0.5} // Suavidade das bordas da sombra
          intensity={2} // Intensidade da luz
          castShadow
          distance={15} // Até onde a luz alcança
          color="#ffffff" // Cor branca padrão
        />
        {/* Luz de ponto com cor neon sutil (ex: ciano) */}
        <pointLight
          position={[-3, 1, 3]} // Posição à esquerda/frente
          intensity={1.5} // Intensidade
          color="#00FFFF" // Cor Ciano (ajustar se necessário)
          distance={10} // Alcance
        />
         <pointLight
          position={[3, 1, 3]} // Posição à direita/frente
          intensity={1.5} // Intensidade
          color="#A020F0" // Cor Roxo (ajustar se necessário)
          distance={10} // Alcance
        />
        {/* O componente que carrega e exibe o modelo */}
        <CharacterModel 
          url={modelUrl} 
          scale={modelScale}
          position={modelPosition}
          rotation={modelRotation}
        />
        {/* Controles de órbita (opcional, útil para debug) */}
        {showControls && <OrbitControls />}
      </Suspense>
    </Canvas>
  );
} 