'use client';

import {
  useLayoutEffect,
  useRef,
  useEffect,
  useState,
  useCallback,
} from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Particles, { initParticlesEngine } from '@tsparticles/react';
import type { Container, Engine } from '@tsparticles/engine';
import { loadSlim } from '@tsparticles/slim';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

export default function Page() {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const [init, setInit] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useLayoutEffect(() => {
    if (!rootRef.current) return;

    const ctx = gsap.context(() => {
      gsap.to('.box2', {
        x: 300,
        scrollTrigger: {
          trigger: '.sec2',
          start: 'top top',
          end: '+=100%',
          scrub: true,
          markers: true,
        },
      });

      gsap.to('.box3', {
        rotation: 360,
        scrollTrigger: {
          trigger: '.sec3',
          start: 'top top',
          end: '+=100%',
          scrub: true,
          markers: true,
        },
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

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

  const handleClick = () => {
    setIsOpen(true);
  };

  return (
    <div ref={rootRef}>
      <section className="sec1">
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={{
            fullScreen: { enable: true, zIndex: -1 },
            background: {
              color: {
                value: '#374151',
              },
            },
            fpsLimit: 120,
            detectRetina: true,

            interactivity: {
              // events: {
              //   onHover: {
              //     enable: true,
              //     mode: '',
              //   },
              // },
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
            // detectRetina: true,
          }}
        />
      </section>

      <section
        className="sec2"
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div className="box w-[300px] h-[200px] bg-[#fff] m-auto rounded-[10px] flex justify-center items-center text-[20px] font-medium shadow-[0_35px_35px_rgba(0,0,0,0.25)]">
          Hello im hyunjin <br />
          front develop <button onClick={() => handleClick()}>클릭</button>
        </div>
        {isOpen && (
          <div className="w-[560px] h-[400px] bg-pink">
            <Image
              src="/assets/photo.jpg"
              alt="증명사진 이미지"
              width={100}
              height={100}
            />
            <div>
              <p>정현진</p>
              <p>이메일 : jhj1004v@naver.com</p>
              <p>연락처 : 01052619519</p>

              <p>
                사용자가 실제로 서비 스를 이용하며 겪을 수 있는 불편함과 예외
                상황을 미 리 고민하는 개 발자입니다. 단순히 화면을 구현하는 데
                그치지 않고, 피그마 설계에서 사용자 경험을 검토하며 개선점을
                제안합니다. 예를 들어, 입력창 유효성 검증을 추가하거나
                페이지네이션의 클릭 영역·가시성을 개선하여 실제 사용성을
                높였습니다. 또한 공통 코드를 줄이고 유지보수성을 높이는 구조적
                접근을 선호합니다 custom hook을 통한 로직 재사 용, variables 및
                mixin 폴더를 활용한 스타일 일원화 등 코드 품질 향상을 위해
                꾸준히 개선해왔습니다. 에러 로그를 세밀하게 남기며, 문제 발생
                원인을 추적·학습하는 과정을 중요하게 생각합니다. 기술적 완성도뿐
                아니라 사용자 경험과 협업 효율 모두를 개선하는 프론트엔드 개
                발자로 성장하고 있습니 다.
              </p>
              <p>
                SKIll : HTML, css, javascript, react, Next.js, typescript, sass,
                tailwind, styledComponents, redux
              </p>
              <p>github</p>
              <p>velog</p>
            </div>
          </div>
        )}
      </section>

      <section className="sec3" style={{ height: '100vh' }}>
        <h1>Activity </h1>
      </section>
      <section className="sec4" style={{ height: '100vh' }}>
        <h1>Project </h1>
      </section>
    </div>
  );
}
