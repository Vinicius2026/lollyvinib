"use client";

import React, { useRef, Suspense, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Icosahedron, Box } from '@react-three/drei';
import * as THREE from 'three';
import { EffectComposer, Bloom } from '@react-three/postprocessing';

// --- GLSL Noise Function (Simplex 3D) ---
// (Crédito: Stefan Gustavson - https://github.com/stegu/webgl-noise)
const glslNoise = `
  vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
  vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }

  float snoise(vec3 v) {
    const vec2 C = vec2(1.0/6.0, 1.0/3.0);
    const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);

    vec3 i  = floor(v + dot(v, C.yyy));
    vec3 x0 = v - i + dot(i, C.xxx);

    vec3 g = step(x0.yzx, x0.xyz);
    vec3 l = 1.0 - g;
    vec3 i1 = min(g.xyz, l.zxy);
    vec3 i2 = max(g.xyz, l.zxy);

    vec3 x1 = x0 - i1 + C.xxx;
    vec3 x2 = x0 - i2 + C.yyy;
    vec3 x3 = x0 - D.yyy;

    i = mod289(i);
    vec4 p = permute(permute(permute(
      i.z + vec4(0.0, i1.z, i2.z, 1.0))
      + i.y + vec4(0.0, i1.y, i2.y, 1.0))
      + i.x + vec4(0.0, i1.x, i2.x, 1.0));

    float n_ = 0.142857142857; // 1.0/7.0
    vec3 ns = n_ * D.wyz - D.xzx;

    vec4 j = p - 49.0 * floor(p * ns.z * ns.z);

    vec4 x_ = floor(j * ns.z);
    vec4 y_ = floor(j - 7.0 * x_);

    vec4 x = x_ * ns.x + ns.yyyy;
    vec4 y = y_ * ns.x + ns.yyyy;
    vec4 h = 1.0 - abs(x) - abs(y);

    vec4 b0 = vec4(x.xy, y.xy);
    vec4 b1 = vec4(x.zw, y.zw);

    vec4 s0 = floor(b0)*2.0 + 1.0;
    vec4 s1 = floor(b1)*2.0 + 1.0;
    vec4 sh = -step(h, vec4(0.0));

    vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;
    vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;

    vec3 p0 = vec3(a0.xy,h.x);
    vec3 p1 = vec3(a0.zw,h.y);
    vec3 p2 = vec3(a1.xy,h.z);
    vec3 p3 = vec3(a1.zw,h.w);

    vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
    p0 *= norm.x;
    p1 *= norm.y;
    p2 *= norm.z;
    p3 *= norm.w;

    vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
    m = m * m;
    return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
  }
`;

// --- Shaders Atualizados ---
const vertexShader = glslNoise + `
  uniform float u_time;
  uniform float u_size;
  uniform float u_noise_freq;
  uniform float u_noise_amp;

  attribute float a_scale;

  varying float v_noise;

  void main() {
    vec3 pos = position;
    
    // Calcular noise 3D baseado na posição original e tempo
    float noise = snoise(pos * u_noise_freq + u_time * 0.2);
    v_noise = noise; // Passar noise para o fragment shader

    // Aplicar deslocamento baseado no noise (direção normal para fora)
    vec3 displacement = normalize(pos) * noise * u_noise_amp;
    pos += displacement;

    vec4 modelPosition = modelMatrix * vec4(pos, 1.0);
    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectedPosition = projectionMatrix * viewPosition;

    gl_Position = projectedPosition;
    
    // Tamanho baseado no noise e perspectiva
    gl_PointSize = u_size * (1.0 + noise * 0.5);
    gl_PointSize *= (1.0 / -viewPosition.z);
    gl_PointSize = max(1.0, gl_PointSize); // Garantir tamanho mínimo
  }
`;

const fragmentShader = `
  uniform float u_time;
  varying float v_noise; // Receber noise do vertex shader

  void main() {
    float dist = distance(gl_PointCoord, vec2(0.5));
    float strength = smoothstep(0.5, 0.1, dist); // Ponto mais suave

    // Cor base varia entre ciano e roxo baseado no noise
    vec3 colorA = vec3(0.0, 0.88, 1.0); // Ciano
    vec3 colorB = vec3(0.4, 0.05, 0.8); // Roxo
    vec3 color = mix(colorA, colorB, smoothstep(-1.0, 1.0, v_noise) * 0.8 + 0.1); // Mix suave

    // Adicionar um pouco de brilho extra baseado no tempo e noise
    color += sin(u_time + v_noise * 5.0) * 0.1;

    gl_FragColor = vec4(color, strength * 0.8); // Cor com alfa
    if (strength < 0.01) discard; // Otimização: descartar pixels totalmente transparentes
  }
`;
// --- Fim Shaders ---

// --- Componente NeuralNetworkParticles Atualizado ---
function NeuralNetworkParticles() {
  const pointsRef = useRef<THREE.Points>(null!);
  const materialRef = useRef<THREE.ShaderMaterial>(null!);
  const { viewport, mouse } = useThree();

  // Ajustar parâmetros para estética
  const count = 8000; // Mais partículas para preencher
  const radius = 6; // Um pouco maior

  const positions = useMemo(() => {
    const posArray = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const phi = Math.acos(-1 + (2 * i) / count);
      const theta = Math.sqrt(count * Math.PI) * phi;
      const r = Math.cbrt(Math.random()) * radius; // Distribuição mais uniforme dentro da esfera
      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);
      posArray[i * 3] = x;
      posArray[i * 3 + 1] = y;
      posArray[i * 3 + 2] = z;
    }
    return posArray;
  }, [count, radius]);

  const uniforms = useMemo(() => ({
    u_time: { value: 0.0 },
    u_size: { value: 4.0 }, // Pontos um pouco menores
    u_noise_freq: { value: 0.8 }, // Frequência do noise
    u_noise_amp: { value: 0.6 } // Amplitude do noise
  }), []);

  useFrame((state) => {
    const { clock } = state;
    if (materialRef.current) {
      materialRef.current.uniforms.u_time.value = clock.elapsedTime;
    }
    if (pointsRef.current) {
      const mouseXOffset = mouse.x * viewport.width * 0.03; // Reduzir um pouco o parallax do mouse
      const mouseYOffset = mouse.y * viewport.height * 0.03;
      pointsRef.current.position.lerp(new THREE.Vector3(mouseXOffset, mouseYOffset, 0), 0.05);
      pointsRef.current.rotation.y = clock.elapsedTime * 0.02 + mouse.x * 0.01; // Rotação mais lenta
      pointsRef.current.rotation.x = clock.elapsedTime * 0.01 + mouse.y * 0.01;
    }
  });

  return (
    <points ref={pointsRef} position={[0, 0, 0]}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={positions.length / 3} array={positions} itemSize={3} />
      </bufferGeometry>
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        transparent={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}
// --- Fim NeuralNetworkParticles ---

// --- Componente FloatingShapes Refinado ---
function FloatingShapes() {
  const { viewport, mouse } = useThree();
  const groupRef = useRef<THREE.Group>(null!);

  const shapes = useMemo(() => {
    // Reduzir número, ajustar distribuição Z
    return Array.from({ length: 4 }).map((_, i) => ({
      position: [
        THREE.MathUtils.randFloatSpread(viewport.width * 0.7),
        THREE.MathUtils.randFloatSpread(viewport.height * 0.8),
        THREE.MathUtils.randFloat(1, 4) // Mais próximos da câmera
      ] as [number, number, number],
      rotationSpeed: (Math.random() - 0.5) * 0.3,
      scale: Math.random() * 0.15 + 0.1,
    }));
  }, [viewport.width, viewport.height]);

  useFrame((state) => {
    if (groupRef.current) {
      const mouseXOffset = mouse.x * viewport.width * 0.1; // Parallax mouse reduzido
      const mouseYOffset = mouse.y * viewport.height * 0.1;
      groupRef.current.position.lerp(new THREE.Vector3(mouseXOffset, mouseYOffset, 0), 0.07);
      groupRef.current.children.forEach((mesh, index) => {
         if (mesh instanceof THREE.Mesh) {
             mesh.rotation.y += state.delta * shapes[index].rotationSpeed;
             mesh.rotation.x += state.delta * shapes[index].rotationSpeed * 0.5;
         }
      });
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {shapes.map((shape, i) => (
        <Icosahedron key={i} args={[1, 0]} position={shape.position} scale={shape.scale}>
          {/* Material mais sutil */}
          <meshPhysicalMaterial
            color="#00E1FF"
            transmission={0.9} // Mais transparente
            roughness={0.2}
            thickness={1.0}
            envMapIntensity={0.5}
            transparent
            opacity={0.15} // Opacidade reduzida
          />
        </Icosahedron>
      ))}
    </group>
  );
}
// --- Fim FloatingShapes ---

// --- Componente FloatingMessages (Novo) ---
function FloatingMessages() {
  const { viewport, mouse } = useThree();
  const groupRef = useRef<THREE.Group>(null!);
  const whatsappGreen = "#25D366";

  const messages = useMemo(() => {
    return Array.from({ length: 3 }).map((_, i) => ({
      position: [
        THREE.MathUtils.randFloatSpread(viewport.width * 0.6),
        THREE.MathUtils.randFloatSpread(viewport.height * 0.7),
        THREE.MathUtils.randFloat(2, 5) // Distribuídos um pouco mais longe que os icosaedros
      ] as [number, number, number],
      rotationSpeed: (Math.random() - 0.5) * 0.2,
      scale: Math.random() * 0.2 + 0.15, // Escala similar aos icosaedros
    }));
  }, [viewport.width, viewport.height]);

  useFrame((state) => {
    if (groupRef.current) {
      // Parallax um pouco diferente das outras formas
      const mouseXOffset = mouse.x * viewport.width * 0.07;
      const mouseYOffset = mouse.y * viewport.height * 0.07;
      groupRef.current.position.lerp(new THREE.Vector3(mouseXOffset, mouseYOffset, 0), 0.06); 
      groupRef.current.children.forEach((mesh, index) => {
        if (mesh instanceof THREE.Mesh) {
            mesh.rotation.y += state.delta * messages[index].rotationSpeed;
            mesh.rotation.x += state.delta * messages[index].rotationSpeed * 0.3;
        }
      });
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {messages.map((msg, i) => (
        // Usar Box para simular balão de chat
        <Box key={i} args={[1.5, 0.8, 0.2]} position={msg.position} scale={msg.scale}>
          <meshStandardMaterial // Usar Standard para cor emissiva mais fácil
            color={whatsappGreen}
            emissive={whatsappGreen} // Fazer brilhar um pouco
            emissiveIntensity={0.3}
            roughness={0.4}
            metalness={0.1} // Leve toque metálico
            transparent
            opacity={0.6} // Semi-transparente
          />
        </Box>
      ))}
    </group>
  );
}
// --- Fim FloatingMessages ---

// Componente de Cena 3D Atualizado
function Scene() {
  return (
    <> {/* Usar Fragment para agrupar sem nó extra */}
      <Suspense fallback={null}>
        <NeuralNetworkParticles />
        <FloatingShapes />
        <FloatingMessages /> {/* Adicionar novo componente */} 
      </Suspense>
      {/* Adicionar Pós-processamento */}
      <EffectComposer>
        <Bloom 
          intensity={0.4} // Intensidade do brilho
          luminanceThreshold={0.3} // A partir de qual brilho aplicar (0 = tudo, 1 = muito brilhante)
          luminanceSmoothing={0.6} // Suavização do threshold
          mipmapBlur // Desfoque mais eficiente e suave
        />
      </EffectComposer>
    </>
  )
}

// Componente principal da animação (sem alterações na estrutura externa)
const HeroAnimation3D: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0 bg-brand-dark pointer-events-none">
      <Canvas camera={{ position: [0, 0, 8], fov: 75 }}>
        <Scene />
      </Canvas>
    </div>
  );
};

export default HeroAnimation3D;