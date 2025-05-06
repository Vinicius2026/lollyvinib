"use client";
import React, { useCallback, useMemo } from "react";
import Particles from "@tsparticles/react";
import type { ISourceOptions } from "@tsparticles/engine";
import { loadSlim } from "tsparticles-slim";

const SmokeParticles: React.FC = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    // console.log("Smoke particles loaded", container);
  }, []);

  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        color: {
          value: "transparent", // Fundo transparente
        },
      },
      fpsLimit: 60,
      interactivity: {
        events: {
          onHover: {
            enable: false, // Desabilitar interação no hover para fumaça
          },
        },
      },
      particles: {
        color: {
          value: ["#ffffff", "#cccccc", "#dddddd"], // Tons de cinza/branco
        },
        links: {
          enable: false,
        },
        move: {
          direction: "top", // Movimento para cima
          enable: true,
          outModes: {
            default: "out",
            top: "destroy", // Destruir partículas que saem por cima
          },
          random: true, // Movimento um pouco aleatório
          speed: 0.6,    // Velocidade lenta
          straight: false,
          drift: 1,     // Adiciona um leve movimento lateral (drift)
          decay: 0.02,  // Partículas perdem velocidade com o tempo
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: 50, // Número de partículas
        },
        opacity: {
          value: { min: 0.05, max: 0.3 }, // Opacidade baixa e variável
          animation: {
            enable: true,
            speed: 0.5,
            sync: false,
            destroy: "min", // Destruir partículas quando ficam muito transparentes
            startValue: "random",
          },
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 40, max: 100 }, // Tamanho grande e variável
          animation: {
            enable: true,
            speed: 4,
            sync: false,
            destroy: "max", // Destruir partículas quando ficam muito grandes
            startValue: "random",
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
      id="tsparticles-smoke" // ID diferente
      init={particlesInit}
      loaded={particlesLoaded}
      options={options}
      className="absolute inset-0 w-full h-full z-0 pointer-events-none" // Garantir que não capture eventos do mouse
    />
  );
};

export default SmokeParticles; 