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

import { initParticlesEngine } from '@tsparticles/react';
import type { Container, Engine } from '@tsparticles/engine';
import { loadSlim } from '@tsparticles/slim';
import mailgo from 'mailgo';
import { FaArrowUp } from 'react-icons/fa';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import { FaArrowDown } from 'react-icons/fa';
import CareerExperienceSection from '@/app/_components/sections/CareerExperienceSection';
import HelloSection from '@/app/_components/sections/HelloSection';
import IntroduceSection from '@/app/_components/sections/IntroduceSection';
import ProjectsSection from '@/app/_components/sections/ProjectsSection';

gsap.registerPlugin(ScrollTrigger);

export default function Page() {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const sec2Ref = useRef<HTMLElement | null>(null);
  const [init, setInit] = useState(false);
  const [showScrollBtn, setShowScrollBtn] = useState<boolean>(false);
  const [scrollBtnMounted, setScrollBtnMounted] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isMapOpen, setIsMapOpen] = useState<boolean>(false);

  useLayoutEffect(() => {
    if (!init) return;
    // if (!rootRef.current) return;

    const ctx = gsap.context(() => {
      // 타이틀 공통 애니메이션
      gsap.utils.toArray<HTMLElement>('.reveal-title').forEach((el) => {
        gsap.fromTo(
          el,
          { y: 40, opacity: 0 }, // 초기: 아래 + 투명
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'back.out(3)', // "툭" 튀어나오는 느낌
            scrollTrigger: {
              trigger: el, // 또는 el.closest("section")
              start: 'top 70%', // 화면 80% 지점에 닿으면 시작
              toggleActions: 'play none none reverse', // 내려오면 등장, 올라가면 다시 숨김
              markers: false,
            },
          },
        );
      });
    }, rootRef);

    return () => ctx.revert();
  }, [init]);

  useLayoutEffect(() => {
    //스크롤이 발생할때 마다 이게 작동한다고? 의존성이 없는데?
    //scroll 이벤트가 발생되면  handleScroll 함수를 실행시키겠다.
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowScrollBtn(true); //up 버튼
      } else {
        setShowScrollBtn(false); //down 버튼
      }
    };

    // 새로고침 직후 현재 스크롤 위치를 즉시 반영한 뒤 버튼을 표시
    handleScroll();
    setScrollBtnMounted(true);

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  useEffect(() => {
    mailgo(); //왜이걸 useEffect 안에 넣어준거지?
  }, []);

  const particlesLoaded = useCallback(async (container?: Container) => {
    console.log(container);
  }, []);

  // if (!init) return null; //Particles 엔진이 초기화되기 전에는 <Particles />를 렌더하지 않게 하려고
  // initParticlesEngine 가 끝나기전에  <Particles />가 렌더되면
  // 환경에 따라 “엔진이 아직 준비 안 됐는데 렌더됨” 같은 문제(에러/경고/빈 화면/깜빡임)가 날 수 있음.
  // 그래서 페이지 전체를 null로 막아버리는 선택을 함.

  // if (!init) return null; 때문에 초기 렌더에서 DOM이 존재하지 않았고, 그 결과 useLayoutEffect([])가 실행될 때 rootRef.current가 null이라 GSAP/ScrollTrigger 등록이 스킵된 채로 끝났다.

  return (
    <div ref={rootRef}>
      <HelloSection
        init={init}
        particlesLoaded={particlesLoaded}
        onOpenTroubleshooting={() => setIsOpen(true)}
      />
      <IntroduceSection
        sectionRef={sec2Ref}
        onOpenMap={() => setIsMapOpen(true)}
      />
      <CareerExperienceSection />
      <ProjectsSection />
      {scrollBtnMounted && (
        <section>
          <button
            aria-label="scroll-to-top"
            className={`rounded-[50%] justify-center items-center fixed   
             ${showScrollBtn ? 'w-[50px] h-[50px] bg-[white]  bottom-[20px] right-[20px] flex  shadow-[0_35px_35px_rgba(0,0,0,0.25)] ' : 'bottom-[40px] right-[50%] bg-[none] right-[50%] pointer-events-none animate-[scrollHint_1.2s_ease-in-out_infinite]'}`}
            onClick={handleScrollToTop}
          >
            {showScrollBtn ? (
              <FaArrowUp color="black" />
            ) : (
              <FaArrowDown size="2em" />
            )}
          </button>
        </section>
      )}
      {isOpen && (
        <div
          className="fixed left-0 top-0 z-20 flex h-screen w-screen items-center justify-center bg-[rgba(17,17,17,0.482)]"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="h-[80%] w-[80%] bg-white max-md:w-[90%] opacity-100 translate-y-0 scale-100 overflow-y-scroll"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src="https://low-baboon.super.site/"
              className="w-full h-full border-none"
              loading="lazy"
              referrerPolicy="no-referrer"
              style={{ overflowY: 'scroll' }}
            />
          </div>
        </div>
      )}
      {isMapOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
          onClick={() => setIsMapOpen(false)}
        >
          <div
            className="w-[90%] max-w-[800px] h-[70vh] bg-white rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <Map
              center={{ lat: 37.501581, lng: 126.846524 }}
              style={{ width: '100%', height: '100%' }}
              level={3}
            >
              <MapMarker position={{ lat: 37.501581, lng: 126.846524 }} />
            </Map>
          </div>
        </div>
      )}
    </div>
  );
}
