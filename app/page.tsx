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
import mailgo from 'mailgo';
import { FaArrowUp } from 'react-icons/fa';
import { Map, MapMarker } from "react-kakao-maps-sdk"
import { toast } from 'sonner';


gsap.registerPlugin(ScrollTrigger);

const ROTATIONITEMS = [
  'H',
  'T',
  'M',
  'L',
  ' ',
  'C',
  'S',
  'S',
  ' ',
  'R',
  'E',
  'A',
  'C',
  'T',
  ' ',
  'N',
  'E',
  'X',
  'T',
  '.',
  'J',
  'S',
  ' ',
  'T',
  'Y',
  'P',
  'E',
  'S',
  'C',
  'R',
  'I',
  'P',
  'T',
  ' ',
  'S',
  'A',
  'S',
  'S',
  ' ',
  'T',
  'A',
  'I',
  'L',
  'W',
  'I',
  'N',
  'D',
  ' ',
  'R',
  'E',
  'D',
  'U',
  'X',
  ' ',
];

export default function Page() {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const [init, setInit] = useState(false);
  const [showScrollBtn, setShowScrollBtn] = useState<boolean>(false);
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

  useEffect(() => {
    //scroll 이벤트가 발생되면  handleScroll 함수를 실행시키겠다.
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowScrollBtn(true);
      } else {
        setShowScrollBtn(false);
      }
    };

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
    mailgo();
  }, []);

  const particlesLoaded = useCallback(async (container?: Container) => {
    console.log(container);
  }, []);

  // if (!init) return null; //Particles 엔진이 초기화되기 전에는 <Particles />를 렌더하지 않게 하려고
  // initParticlesEngine 가 끝나기전에  <Particles />가 렌더되면
  // 환경에 따라 “엔진이 아직 준비 안 됐는데 렌더됨” 같은 문제(에러/경고/빈 화면/깜빡임)가 날 수 있음.
  // 그래서 페이지 전체를 null로 막아버리는 선택을 함.

  // if (!init) return null; 때문에 초기 렌더에서 DOM이 존재하지 않았고, 그 결과 useLayoutEffect([])가 실행될 때 rootRef.current가 null이라 GSAP/ScrollTrigger 등록이 스킵된 채로 끝났다.

  useEffect(() => {
    console.log('[Page] mount');
    return () => console.log('[Page] unmount');
  }, []);


  return (
    <div ref={rootRef}>
      <section className="sec1">
        {init && (
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
        <div className="box box-border w-[650px] bg-[#fff] p-[20px] m-auto rounded-[10px] flex flex-col justify-center items-center gap-[30px]  font-medium shadow-[0_35px_35px_rgba(0,0,0,0.25)] opacity-[95%]">
          <p className="font-[roboto_slab]  text-[60px] font-[roboto_slab] text-center">
            Hello I'm hyunjin <br />
            front develop
          </p>
          <div className="flex gap-[20px] font-[roboto_slab] font-medium">
            <button
              onClick={() => setIsOpen(true)}
              className="border border-[#ddd] rounded-[6px] px-[15px] py-[8px]  shadow-[0_5px_5px_rgba(91,90,90,0.25)] hover:bg-[#ddd]  transition-all duration-300"
            >
              Troubleshooting
            </button>
            <a
              href="https://github.com/hyun522"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-[5px] border border-[#ddd] rounded-[6px] px-[15px] py-[8px] shadow-[0_5px_5px_rgba(91,90,90,0.25)] hover:bg-[#ddd]  transition-all duration-300"
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
              className="flex items-center gap-[5px] border border-[#ddd] rounded-[6px] px-[15px] py-[8px] shadow-[0_5px_5px_rgba(91,90,90,0.25)] hover:bg-[#ddd]  transition-all duration-300"
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
              className="flex items-center gap-[5px] border border-[#ddd]  rounded-[6px] px-[15px] py-[8px] shadow-[0_5px_5px_rgba(91,90,90,0.25)] hover:bg-[#ddd]  transition-all duration-300"
            >
              <Image
                src="/assets/email.png"
                alt="velog 이미지"
                width={25}
                height={25}
              />
              mail
            </a>
          </div>
        </div>
      </section>
      <section
        className="sec2"
        style={{  background: '#374151' }}
      >
        <div className="relative">
          <h1
            className="reveal-title relative
                      text-[70px]
                      font-bold
                      text-black
                      z-10
                      p-[15px]
                      font-[nanum_gothic]
                      after:content-['Introduce']
                      after:absolute
                      after:text-white
                      after:top-[3px]
                      after:left-[3px]
                      after:bg-[#7C6CE8]
                      after:p-[15px]
                      after:z-[-2]
                    "
          >
            Introduce
          </h1>
        </div>
        <div className="flex justify-center items-center text-white w-[500px] mx-auto mt-[50px] p-[20px] gap-[50px] font-[nanum_gothic] font-semibold" >
          <div className="">
            <Image
              src="/assets/profile.png"
              alt="증명사진 이미지"
              width={120}
              height={120}
              
            />
          </div>
          <div className='flex flex-col w-full'>
            <p className='text-[40px] mb-[10px]'>정현진</p>
            <p>생년월일 : 1996.11.15</p>
            <div className='flex gap-[20px] h-[30px] items-end w-full '>
              주소 : 서울시 구로구 고척로
              <div className='relative w-[60px]' onClick={()=>setIsMapOpen(true)} >
                <span className='absolute bottom-[0px] z-10 left-[-10px] cursor-pointer animate-[wiggleLR_1.2s_ease-in-out_infinite]'>
                  <Image src="/assets/location.png"
                    alt="위치 아이콘"
                    width={30}
                    height={30}
                   
                  />
                </span>
                <Map
                  center={{ lat: 37.501581, lng: 126.846524 }}
                  style={{ width: "100%", height: "60px", borderRadius:'50%' }}
                  >
                  {/* <MapMarker position={{ lat: 33.55635, lng: 126.795841 }}>
                    <div style={{ color: "#000" }}>My House</div>
                  </MapMarker> */}
                </Map>
           
              </div>
            </div>
          </div>
        </div>
        <div className="box-border border border-[5px] border-t-0 border-b-0 border-[black] rounded-[40px] w-[700px] mx-auto my-[20px]">
          <div className="border-[20px] border-[#374151] bg-[#374151] w-[600px]  mx-auto text-[white] text-">
            의료데이터를 다루는 웹서비스를 다루며 비즈니스의 가치를 고객에게
            온전히 전달하기위해 다양한 직무의 구성원들과 <span className="bg-[linear-gradient(128.93deg,rgb(0,173,181)_22.41%,rgb(57,62,70)_93.45%)]">능동적으로 커뮤니케이션
            </span>
            하며, 협업해왔습니다.
            <br />
            <br />
            사용자가 실제로 서비스를 이용하며 겪을 수 있는 <span className="bg-[linear-gradient(128.93deg,rgb(0,173,181)_22.41%,rgb(57,62,70)_93.45%)]">
              불편함과 예외 상황을 미리 고민하는 자세
            </span>
            로 개발하고 있습니다.
            <br />
            <br />
            공통 코드를 줄이고 유지보수성을 높이기위한 <span className="bg-[linear-gradient(128.93deg,rgb(0,173,181)_22.41%,rgb(57,62,70)_93.45%)]">
              구조적 접근
            </span>
            을 선호하며, 코드 품질 향상을 중요하게 생각하고 꾸준히 개선하고자
            합니다.
            <br />
            <br />
            기록을 중요하게 생각합니다. 문제 발생 시 원인을 추적하고, 개선
            사항을 다음 개발에 반영하려 노력합니다.
            <br />
            <br />
            기획부터 개발에 참여하는 과정을 좋아합니다. 제가 기획한 것의
            한계를 인식하고, 그 과정에서 배우며 성장 해 나가고 있습니다.
            <br />
            <br />
            프론트엔드뿐 아니라 <span className="bg-[linear-gradient(128.93deg,rgb(0,173,181)_22.41%,rgb(57,62,70)_93.45%)]">
              개발하는 모든 것을 즐기고자하는 자세
            </span>
            로 임하고 있습니다.
            <br />
            <br />
          </div>
        </div>
        <div className="relative h-[180px]">
          <div className="absolute w-[300px] h-[300px] bottom-[90px] right-[18%] flex  items-center animate-[spin_20s_linear_infinite_reverse]">
            {ROTATIONITEMS.map((item, i) => {
              const angle = (360 / ROTATIONITEMS.length) * i; //회전에 갯수를 나누고 (아이템하나당 차지하는 각도) * 갯수의 순번(0~)을 곱하고? 360/36 10*
              return (
                <div
                  key={i}
                  className="absolute w-full h-full left-[150px] text-white" //보이지 않는 원을 만들고 각글자를 원둘레에 붙여서 회전시키는 방식
                  style={{
                    transform: `
                      rotate(${angle}deg)
                    `,
                    transformOrigin: '0 150px',
                  }}
                >
                  {item}
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section
        className="sec3 "
        style={{ height: '100vh', background: '#262728', display:'flex', justifyContent:'center', alignItems:'center'}}
      >
        <div className="w-[1500px]  h-[350px] flex  justify-between gap-[10px] font-[nanum_gothic] bg-[#262728] ">
          <div className='reveal-title  p-[20px] w-[700px]  bg-[#383B40] rounded-2xl hadow-[0_20px_5px_rgba(91,90,90,0.25)]'>
          <h1
            className="
             relative
                    text-[50px]
                    font-bold
                  text-[#FF9801]
                    z-10
                    after:content-['Career']
                    after:absolute
                    after:text-white
                    after:top-[4px]
                    after:left-[3px]
                    after:w-[270px]
                    after:z-[-2]
                    "
          >
            Career.
          </h1>
          <div>
            <h2 className='font-[nanum_gothic] text-white text-[30px] font-bold'>서울대 병원</h2>
            <p className='mb-[10px] font-bold text-[#aaa]'>2024.11.01 ~ 2025.12.31</p>
            <p className='inline font-bold p-[8px] rounded-[14px] bg-orange-300'>FE 개발</p>
            <ul className='mt-[30px]  text-white list-disc list-inside'>
              <li>
                Admin 페이지 개발 React 기반 환경 구축 및 개발(typescript,
                redux)
              </li>
              <li>
                회원가입 플로우 개선 기존 단일 회원가입 로직을 소셜
                로그인(OAuth2.0: Google, Physionet, OR C ID) 및 이메일 인증 기반
                구조로 확장
              </li>
            </ul>
          </div>
          </div>
          <div className='reveal-title w-[700px]  h-[350px]  p-[20px] flex flex-col bg-[#383B40] rounded-2xl  shadow-[0_10px_30px_-15px_rgba(2,12,27,.7)]' >
          <h1
            className="
                    relative
                    text-[50px]
                    font-bold
                    text-[#FF9801]
                    z-10
                    after:content-['Experience']
                    after:absolute
                    after:text-white
                    after:top-[4px]
                    after:left-[3px]
                    after:w-[270px]
                    after:z-[-2]
                    "
          >
            Experience
          </h1>
          <div >
            <h2 className='font-[nanum_gothic] text-[30px] font-bold text-white'>코드잇 프론트엔드 부트캠프 2기 </h2>
            <p className='mb-[10px] font-bold text-[#aaa]'>2023.10 ~ 2024.04</p>
            <ul className='mt-[30px] text-white list-disc list-inside'>
              <li>
                웹 개 발의 기초부터 립트 적용 등의 교 React와 Next.js를 활용한
                동적 웹 인터페이스 교육 이수
              </li>
            </ul>
          </div>
          </div>
        </div>
      </section>
      <section
        className="sec4"
        style={{  background: '#374151', paddingBottom:'90px' }}
      >
        <h1
          className="reveal-title relative
                      text-[70px]
                      font-bold
                      text-black
                      z-10
                      p-[15px]
                      font-[nanum_gothic]
                      after:content-['Project']
                      after:absolute
                      after:text-white
                      after:top-[3px]
                      after:left-[3px]
                      after:bg-[#7C6CE8]
                      after:p-[15px]
                      after:w-[270px]
                      after:z-[-2]
                    "
        >
          Project
        </h1>
        <div className="font-[nanum_gothic] flex justify-center mt-[100px] ">
          <div className='w-[1100px]  flex flex-col gap-[200px]' >
            <div className="reveal-title relative  mx-auto w-full h-[400px] flex justify-between  ">
              <div className="relative left-[70px] z-10   w-[50%] text-left z-0">
                <h2 className="text-[31px] text-[white] font-bold mb-[15px]">Chatting</h2>
                <p className="text-[#8892b0] font-bold">2024/08/01 - 2024/08/09 </p>
                <p className="text-[#8892b0] font-bold  mb-[15px]">1명</p>
                <div className="w-[400px] p-[25px] bg-[#3d4654] rounded-[8px] text-[#a8b2da] text-[18px] shadow-[0_10px_30px_-15px_rgba(2,12,27,.7)]  mb-[15px] ">
                  PostgreSQL 기반, 인증 데이터베이스 파일 스토리지를 api로
                  제공하는 Supabase를 활용하여 로그인 및 회원가입 / 프로필이미지
                  추가 / 실시간 채팅 기능을 구현했습니다.
                </div>
                <p className="text-[#A8B2D1] font-bold mb-[15px]">react, tailwind, typescrip</p>
                <div className='flex gap-[10px] '>
                  <a
                    href="https://github.com/hyun522/chatting"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/assets/github-log.svg"
                      alt="깃 이미지"
                      width={25}
                      height={25}
                    />
                  </a>
                  <button    onClick={()=>toast.warning('현재 미제공 중입니다.',{ position: "top-right" })}>
                  <Image
                    src="/assets/external-link.png"
                    alt="외부링크"
                    width={25}
                    height={25}
                  />
                  </button>
                </div>
              </div>
              <div className="absolute w-[60%] he right-[0px] z-0 h-full ">
                <video
                  className="w-full h-full"
                  preload="auto"
                  loop
                  autoPlay
                  muted
                  playsInline
                >
                  <source src="/assets/chatting.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
                <div className='reveal-title relative  w-full h-[400px]  flex justify-between items-center '>
                  <div  className='relative  w-[60%] h-[370px]  z-0'>
                    <Image 
                    src='/assets/Yumu.png'
                    alt='yumu이미지'
                    layout='fill'
                   
                    />
                  </div>
                  <div className="absolute z-10  right-[70px] w-[50%] flex flex-col items-end text-end">
                    <h2 className="text-[31px] text-[white] font-bold mb-[15px]">YUMU 커머스</h2>
                    <p className="text-[#8892b0] font-bold">2024/02/29 - 2024/4/7 </p>
                    <p className="text-[#8892b0] font-bold mb-[15px]">백엔드2 프론트2 디자인1</p>
                    <div className="p-[25px] bg-[#3d4654] rounded-[8px] text-[#a8b2da] text-[18px] shadow-[0_10px_30px_-15px_rgba(2,12,27,.7)] w-[400px] mb-[15px]">
                      판매하고자하는 미술작품을 등록하고 판매를 진행할수 있습니다 또
                      원하는 작품을 검색하거나 찜할수있는 커머스 사이트입니다.
                    </div>
                    <p className="text-[#A8B2D1] font-bold mb-[15px]"> typascript, next.js, shadcn-ui, reactHookForm,<br /> react-query, axios,
                    tailwind css</p>
                    <div className='flex gap-[10px]'>
                      <a
                      href="https://github.com/Team-YUMU/YUMU-FE?tab=readme-ov-file"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Image
                          src="/assets/github-log.svg"
                          alt="깃 이미지"
                          width={25}
                          height={25}
                        />
                      </a>
                      <a
                      href="https://yu-mu.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                  
                      >
                        <Image
                          src="/assets/external-link.png"
                          alt="외부링크"
                          width={25}
                          height={25}
                        />
                      </a>
                  </div>
                </div>
            </div>
            <div className="reveal-title box-border w-full   h-[400px]  relative flex justify-between ">
                <div className="relative z-10  left-[70px] w-[50%] text-left  ">
                  <h2 className="text-[31px] text-[white] font-bold mb-[15px]" >tripterior 가족여행기록 사이트</h2>
                  <p className="text-[#8892b0]  font-bold">2024/09/09 - 2024/10/19</p>
                  <p className="text-[#8892b0]  font-bold  mb-[15px]">백엔드2 프론트2(팀장담당) 디자인1 기획자1</p>
                  <div className="p-[25px] bg-[#3d4654] rounded-[8px] text-[#a8b2da] text-[18px] shadow-[0_10px_30px_-15px_rgba(2,12,27,.7)]   w-[400px]  mb-[15px] ">
                  가족 프로필을 생성, 가족 여행 기록을 남기기 댓글을 통해 소통할 수 있습니다. 또한, 기념일을 설정하고 이를 저장하여 알림을 받을 수 있는 사이트.
                  </div>
                  <p className="text-[#A8B2D1] font-bold mb-[15px]">Next.js, typascript, reducx, react-query,  scss</p>
                  <div  className='flex gap-[10px]'>
                    <a
                    href="https://github.com/SWYP-6-6/tripterrior"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src="/assets/github-log.svg"
                        alt="깃 이미지"
                        width={25}
                        height={25}
                      />
                    </a>
                    <button    onClick={()=>toast.warning('현재 미제공 중입니다.',{ position: "top-right" })}>
                    <Image
                      src="/assets/external-link.png"
                      alt="외부링크"
                      width={25}
                      height={25}
                    />
                    </button>
                  </div>
                </div>
                <div className="absolute  w-[60%] right-[0px]  z-0 ">
                  <video
                    className="w-full h-full"
                    preload="auto"
                    loop
                    autoPlay
                    muted
                    playsInline
                  >
                    <source src="/assets/tripterior.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>
          </div>
        </div>
      </section>
      <section>
        <button
          className={`w-[50px] h-[50px] bg-[white] rounded-[50%] text-[whiite] justify-center items-center fixed bottom-[20px] right-[20px] shadow-[0_35px_35px_rgba(0,0,0,0.25)]  ${showScrollBtn ? 'flex' : 'hidden'}`}
          onClick={() => handleScrollToTop()}
        >
          <FaArrowUp color="black" />
        </button>
      </section>
      {isOpen && (
        <div
          className="fixed left-0 top-0 z-20 flex h-screen w-screen items-center justify-center bg-[rgba(17,17,17,0.482)]"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="h-[80%] w-[80%] bg-white max-md:w-[90%] opacity-100 translate-y-0 scale-100"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src="https://low-baboon.super.site/"
              className="h-full w-full"
              loading="lazy"
              referrerPolicy="no-referrer"
            ></iframe>
          </div>
        </div>
      )}
      {isMapOpen &&(
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
            style={{ width: "100%", height: "100%" }}
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


