'use client';

export default function CareerExperienceSection() {
  return (
    <section
      className="sec3"
      style={{
        minHeight: '100vh',
        background: '#262728',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '50px',
        paddingBottom: '50px',
      }}
    >
      <div className="w-[90%] max-w-[1500px] h-[350px] flex justify-between gap-[10px] font-[nanum_gothic] bg-[#262728] tablet:flex-col tablet:h-auto tablet:gap-[30px] mobile:flex-col mobile:h-auto mobile:gap-[30px]">
        <div className="reveal-title p-[20px] w-[700px] tablet:w-full mobile:w-full bg-[#383B40] rounded-2xl hadow-[0_20px_5px_rgba(91,90,90,0.25)]">
          <h1
            className="
             relative
                    text-[50px] tablet:text-[38px] mobile:text-[28px]
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
            <h2 className="font-[nanum_gothic] text-white text-[30px] tablet:text-[22px] mobile:text-[18px] font-bold">
              서울대 병원
            </h2>
            <p className="mb-[10px] font-bold text-[#aaa]">
              2024.11.01 ~ 2025.12.31
            </p>
            <p className="inline font-bold p-[8px] rounded-[14px] bg-orange-300">
              FE 개발
            </p>
            <ul className="mt-[30px] text-white list-disc list-inside">
              <li>
                Admin 페이지 개발 React 기반 환경 구축 및 개발
                (typescript,sass,redux)
              </li>
              <li>
                회원가입 플로우 개선 기존 단일 회원가입 로직을 소셜
                로그인(OAuth2.0: Google, Physionet, ORCID) 및 이메일 인증 기반
                구조로 확장
              </li>
            </ul>
          </div>
        </div>
        <div className="reveal-title w-[700px] tablet:w-full h-[350px] tablet:h-auto mobile:w-full mobile:h-auto p-[20px] flex flex-col bg-[#383B40] rounded-2xl shadow-[0_10px_30px_-15px_rgba(2,12,27,.7)]">
          <h1
            className="
                    relative
                    text-[50px] tablet:text-[38px] mobile:text-[28px]
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
          <div>
            <h2 className="font-[nanum_gothic] text-[30px] tablet:text-[22px] mobile:text-[18px] font-bold text-white">
              코드잇 프론트엔드 부트캠프 2기{' '}
            </h2>
            <p className="mb-[10px] font-bold text-[#aaa]">2023.10 ~ 2024.04</p>
            <ul className="mt-[30px] text-white list-disc list-inside">
              <li>
                웹 개발 기초를 바탕으로 JavaScript, React, Next.js를 활용한
                컴포넌트 설계 및 동적 UI 구현 과정 이수
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
