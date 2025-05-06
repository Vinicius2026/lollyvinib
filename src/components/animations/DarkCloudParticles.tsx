"use client";
import React, { useCallback, useMemo } from "react";
import Particles from "@tsparticles/react";
// Remover importação explícita de tipos - deixar inferir
// import type { Container, Engine, ISourceOptions } from "@tsparticles/engine";
import type { ISourceOptions } from "@tsparticles/engine"; // Manter ISourceOptions se necessário
import { loadSlim } from "tsparticles-slim";

const DarkCloudParticles: React.FC = () => {
  // Remover tipos explícitos dos parâmetros
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    // console.log("Dark clouds loaded", container);
  }, []);

  // Usar useMemo para as opções para evitar recriação desnecessária
  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        color: {
          value: "transparent",
        },
      },
      fpsLimit: 60,
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "repulse",
          },
          // Remover resize: true - agora é automático ou configurado diferente
        },
        modes: {
          repulse: {
            distance: 100,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: ["#00334d", "#004d4d", "#0d0d0d"], // Tons escuros
        },
        links: {
          enable: false, // Manter links desabilitados
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "out",
          },
          random: true,
          speed: 0.5,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            // Renomeado: value_area -> area na v2/v3?
            area: 1000, 
          },
          value: 30,
        },
        opacity: {
          value: { min: 0.4, max: 0.8 },
          animation: { // Estrutura da animação pode ter mudado
            enable: true,
            speed: 0.5,
            // minimumValue -> min agora?
            // sync: false, // Verificar se ainda é válido
          },
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 50, max: 150 },
          animation: { // Estrutura da animação pode ter mudado
            enable: true,
            speed: 3,
            // minimumValue -> min agora?
            // sync: false, // Verificar se ainda é válido
          },
        },
      },
      detectRetina: true,
    }),
    [],
  );

  if (!options) return null; // Ou um loader, evita renderizar antes das opções estarem prontas

  return (
    <Particles
      id="tsparticles-dark-clouds"
      init={particlesInit}
      loaded={particlesLoaded}
      options={options}
      className="absolute inset-0 w-full h-full z-0"
    />
  );
};

export default DarkCloudParticles; 