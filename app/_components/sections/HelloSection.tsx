'use client';

import type { Container } from '@tsparticles/engine';
import Particles from '@tsparticles/react';
import Image from 'next/image';

interface HelloSectionProps {
  init: boolean;
  particlesLoaded: (container?: Container) => Promise<void>;
  onOpenTroubleshooting: () => void;
}

export default function HelloSection({
  init,
  particlesLoaded,
  onOpenTroubleshooting,
}: HelloSectionProps) {
  return (
    <>
      <section className="sec1">
        {init && (
          <Particles
            id="tsparticles"
            particlesLoaded={particlesLoaded}
            options={{
              fullScreen: { enable: false, zIndex: -1 },
              background: {
                color: {
                  value: '#374151',
                },
              },
              fpsLimit: 120,
              detectRetina: true,
              interactivity: {
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
              style: {
                position: 'absolute',
                height: '100%',
              },
              particles: {
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
            }}
          />
        )}
      </section>
      <section
        className="sec1-1"
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div className="box box-border w-[650px] max-w-[90%] bg-[#fff] p-[20px] m-auto rounded-[10px] flex flex-col justify-center items-center gap-[30px] font-medium shadow-[0_35px_35px_rgba(0,0,0,0.25)] opacity-[95%] tablet:w-full tablet:max-w-[calc(100%-2rem)]  mobile:w-full mobile:max-w-[calc(100%-2rem)]">
          <p className="font-[roboto_slab] text-[60px] text-center tablet:text-[48px] mobile:text-[36px]">
            Hello I'm hyunjin <br />
            front develop
          </p>
          <div className="flex gap-[20px] font-[roboto_slab] font-medium tablet:flex-wrap tablet:justify-center mobile:flex-col mobile:w-full mobile:items-stretch">
            <button
              onClick={onOpenTroubleshooting}
              className="border border-[#ddd] rounded-[6px] px-[15px] py-[8px] shadow-[0_5px_5px_rgba(91,90,90,0.25)] hover:bg-[#ddd] transition-all duration-300 mobile:justify-center"
            >
              Troubleshooting
            </button>
            <a
              href="https://github.com/hyun522"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-[5px] border border-[#ddd] rounded-[6px] px-[15px] py-[8px] shadow-[0_5px_5px_rgba(91,90,90,0.25)] hover:bg-[#ddd] transition-all duration-300 mobile:justify-center"
            >
              <Image
                src="/assets/github-log.svg"
                alt="git 이미지"
                width={25}
                height={25}
              />
              git
            </a>
            <a
              href="https://velog.io/@jhj1004v/posts"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-[5px] border border-[#ddd] rounded-[6px] px-[15px] py-[8px] shadow-[0_5px_5px_rgba(91,90,90,0.25)] hover:bg-[#ddd] transition-all duration-300 mobile:justify-center"
            >
              <Image
                src="/assets/velog-log.png"
                alt="velog 이미지"
                width={25}
                height={25}
              />
              velog
            </a>
            <a
              href="#mailgo"
              data-address="jhj1004v"
              data-domain="naver.com"
              className="flex items-center gap-[5px] border border-[#ddd] rounded-[6px] px-[15px] py-[8px] shadow-[0_5px_5px_rgba(91,90,90,0.25)] hover:bg-[#ddd] transition-all duration-300 mobile:justify-center"
            >
              <Image
                src="/assets/email.png"
                alt="mail 이미지"
                width={25}
                height={25}
              />
              mail
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
