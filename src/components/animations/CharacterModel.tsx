import React, { useEffect, useRef } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface CharacterModelProps {
  url: string;
  scale?: number | [number, number, number];
  position?: [number, number, number];
  rotation?: [number, number, number];
}

export function CharacterModel({ 
  url, 
  scale = 1, 
  position = [0, 0, 0],
  rotation = [0, 0, 0] 
}: CharacterModelProps) {
  // Use useRef para garantir que a cena não seja recarregada desnecessariamente
  const group = useRef<THREE.Group>(null);
  // Carrega o modelo GLTF. useGLTF lida com o cache automaticamente.
  const { scene, animations } = useGLTF(url);
  // Obtém as ações de animação e associa ao ref da cena/grupo
  const { actions } = useAnimations(animations, group);

  // Toca a primeira animação encontrada quando o modelo carrega
  useEffect(() => {
    console.log('Model Loaded. Animations found:', animations); // Log para ver as animações
    
    // Comentado: Lógica para tocar a primeira animação
    /*
    const firstAnimationName = animations[0]?.name;
    console.log('Attempting to play animation:', firstAnimationName); // Log para ver qual animação tenta tocar
    if (firstAnimationName && actions[firstAnimationName]) {
      actions[firstAnimationName].reset().fadeIn(0.5).play();
    }
    // Função de limpeza para parar a animação ao desmontar
    return () => {
      if (firstAnimationName && actions[firstAnimationName]) {
        actions[firstAnimationName].fadeOut(0.5);
      }
    };
    */
  }, [actions, animations]);

  // Hook para animação de rotação contínua
  useFrame((state, delta) => {
    if (group.current) {
      // Rotaciona suavemente no eixo Y
      group.current.rotation.y += delta * 0.2; // Ajuste a velocidade (0.2) conforme necessário
    }
  });

  // Clona a cena para evitar mutações se o mesmo modelo for usado em vários lugares
  // Usa 'primitive' para renderizar o objeto carregado diretamente
  return (
    <primitive 
      ref={group} 
      object={scene.clone()} // Clona a cena para instâncias independentes
      scale={scale}
      position={position}
      rotation={rotation} 
    />
  );
}

// Pré-carrega o modelo para melhorar a performance inicial (opcional mas recomendado)
// Isso pode ser feito no componente pai ou aqui se for sempre o mesmo modelo.
// Por enquanto, vamos deixar o carregamento ocorrer via Suspense.
// useGLTF.preload(url); // Descomentar se quiser pré-carregar um URL específico 