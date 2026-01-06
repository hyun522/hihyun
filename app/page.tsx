'use client';

import { useEffect, useState, useCallback } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import type { Container, Engine } from '@tsparticles/engine';
import { loadSlim } from '@tsparticles/slim';

const ParticlesBackground = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = useCallback(async (container?: Container) => {
    console.log(container);
  }, []);

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      particlesLoaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: '#374151',
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: '',
            },
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          img: {
            value: 'url(../../../assets/html.png)',
          },
          move: {
            direction: 'none',
            enable: true,
            outModes: {
              default: 'bounce',
            },
            random: false,
            speed: 4,
            straight: false,
          },
          number: {
            density: {
              enable: true,
            },
            value: 60,
          },
          shape: {
            type: 'image',
            options: {
              image: [
                { src: '/assets/html.png' },
                { src: '/assets/java.svg' },
                { src: '/assets/javascript.svg' },
                { src: '/assets/react.png' },
                { src: '/assets/scss.png' },
                { src: '/assets/spring.png' },
                { src: '/assets/tailwind.png' },
              ],
            },
          },
          size: {
            value: { min: 3, max: 15 },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesBackground;
