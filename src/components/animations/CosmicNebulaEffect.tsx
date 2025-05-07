import * as THREE from 'three';
import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, extend } from '@react-three/fiber';
import { shaderMaterial } from '@react-three/drei';

// Definindo o ShaderMaterial de forma declarativa
const NebulaParticleMaterial = shaderMaterial(
  // Uniforms
  {
    uTime: 0,
    uSize: 10.0,
    uColor: new THREE.Color(0.5, 0.2, 0.8),
  },
  // Vertex Shader
  `
    uniform float uTime;
    uniform float uSize;

    // varying vec3 vColor; // Atualmente não usado, cor é uniforme

    void main() {
      vec4 modelPositionOriginal = vec4(position, 1.0); // Usar a posição original da partícula para calcular o movimento
      vec4 animatedPosition = modelPositionOriginal;
      
      // Animação das Partículas:
      float timeFactor = uTime * 0.25; // Reduzir a velocidade geral da animação
      // Adicionar um deslocamento baseado na posição original para individualizar o movimento
      animatedPosition.x += sin(timeFactor + position.y * 0.8) * 0.4; 
      animatedPosition.y += cos(timeFactor + position.x * 0.7) * 0.5;
      animatedPosition.z += sin(timeFactor + position.z * 0.9) * 0.35;
      
      // Aplicar a matriz do modelo APÓS a animação baseada na posição local
      vec4 modelViewPosition = modelMatrix * animatedPosition;
      vec4 viewPosition = viewMatrix * modelViewPosition;
      vec4 projectedPosition = projectionMatrix * viewPosition;

      gl_Position = projectedPosition;
      gl_PointSize = uSize * (150.0 / -viewPosition.z);
    }
  `,
  // Fragment Shader
  `
    uniform vec3 uColor;
    // varying vec3 vColor; // Não usado

    void main() {
      float distanceToCenter = distance(gl_PointCoord, vec2(0.5));
      float alpha = 1.0 - smoothstep(0.45, 0.5, distanceToCenter);

      if (alpha < 0.01) discard;

      gl_FragColor = vec4(uColor, alpha);
    }
  `
);

extend({ NebulaParticleMaterial });

interface CosmicNebulaEffectProps {
  particleCount?: number;
  baseColor?: THREE.Color | string;
  baseSize?: number;
  shapeVolume?: 'sphere' | 'box';
  volumeDimensions?: THREE.Vector3;
}

export const CosmicNebulaEffect: React.FC<CosmicNebulaEffectProps> = ({
  particleCount = 10000,
  baseColor = new THREE.Color(0.8, 0.2, 1.0),
  baseSize = 15.0,
  shapeVolume = 'box',
  volumeDimensions = new THREE.Vector3(20, 20, 20),
}) => {
  const pointsRef = useRef<THREE.Points>(null!);
  const materialRef = useRef<any>(null!); 

  const positions = useMemo(() => {
    const verts = new Float32Array(particleCount * 3);
    const radius = volumeDimensions.x;
    for (let i = 0; i < particleCount * 3; i += 3) {
      if (shapeVolume === 'sphere') {
        const theta = Math.random() * 2 * Math.PI;
        const phi = Math.acos(2 * Math.random() - 1);
        const r = Math.pow(Math.random(), 1/3) * radius;
        verts[i]     = r * Math.sin(phi) * Math.cos(theta);
        verts[i + 1] = r * Math.sin(phi) * Math.sin(theta);
        verts[i + 2] = r * Math.cos(phi);
      } else { // box
        verts[i]     = THREE.MathUtils.randFloatSpread(volumeDimensions.x);
        verts[i + 1] = THREE.MathUtils.randFloatSpread(volumeDimensions.y);
        verts[i + 2] = THREE.MathUtils.randFloatSpread(volumeDimensions.z);
      }
    }
    return verts;
  }, [particleCount, shapeVolume, volumeDimensions]);

  useFrame(({ clock }) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = clock.getElapsedTime();
    }
    if (pointsRef.current) {
      pointsRef.current.rotation.y += 0.0005;
      pointsRef.current.rotation.x += 0.0002;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      {/* @ts-ignore next line */}
      <nebulaParticleMaterial 
        ref={materialRef}
        uColor={baseColor instanceof THREE.Color ? baseColor : new THREE.Color(baseColor)}
        uSize={baseSize}
        transparent={true}
        depthWrite={false} 
        blending={THREE.AdditiveBlending} 
      />
    </points>
  );
};

export const NebulaSceneWrapper: React.FC<CosmicNebulaEffectProps> = (props) => {
  return (
    <Canvas 
      camera={{ position: [0, 0, 15], fov: 75 }} 
      style={{ background: '#000010', position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}
    >
      <ambientLight intensity={0.5} />
      <CosmicNebulaEffect {...props} />
    </Canvas>
  );
}; 