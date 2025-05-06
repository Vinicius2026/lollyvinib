"use client";
import React, { useCallback, useMemo } from "react";
import Particles from "@tsparticles/react";
import type { ISourceOptions } from "@tsparticles/engine";
import { loadSlim } from "tsparticles-slim"; 

const GreenRainEffect: React.FC = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine); 
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    // console.log("Green rain loaded", container);
  }, []);

  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        color: {
          value: "transparent",
        },
      },
      fpsLimit: 60,
      particles: {
        number: {
          value: 100, // Reduzir um pouco para não sobrecarregar com círculos grandes
          density: {
            enable: true,
            area: 800,
          },
        },
        color: {
          value: "#22c55e", // Verde (Tailwind green-500)
        },
        shape: {
          type: "circle", // Mudar para círculo para teste
        },
        opacity: {
          value: { min: 0.8, max: 1.0 }, // Deixar quase sólido para teste
        },
        size: {
          value: { min: 5, max: 10 }, // Tamanho maior para círculos
        },
        links: {
            enable: false,
        },
        move: {
          enable: true,
          speed: 3, // Reduzir velocidade para observar melhor
          direction: "bottom",
          straight: true,
          outModes: {
            default: "out",
            top: "destroy",
            bottom: "destroy",
          },
        },
      },
      detectRetina: true,
    }),
    [],
  );

  if (!options) return null;

  return (
    <Particles
      id="tsparticles-green-rain"
      init={particlesInit}
      loaded={particlesLoaded}
      options={options}
      className="absolute inset-0 w-full h-full z-0 pointer-events-none"
    />
  );
};

export default GreenRainEffect; 