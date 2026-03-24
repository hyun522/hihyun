'use client';

import Image from 'next/image';
import { toast } from 'sonner';

export default function ProjectsSection() {
  return (
    <section
      className="sec4"
      style={{ background: '#374151', paddingBottom: '90px' }}
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
      <div className="font-[nanum_gothic] flex justify-center mt-[100px]">
        <div className="w-[1100px] flex flex-col gap-[200px]">
          <div className="reveal-title relative mx-auto w-full h-[830px] flex items-center">
            <div className="relative left-[70px] z-10 w-[50%] text-left">
              <h2 className="text-[31px] text-[white] font-bold mb-[15px]">
                YUMU 커머스
              </h2>
              <p className="text-[#8892b0] font-bold">2024/02/29 - 2024/4/7</p>
              <p className="text-[#8892b0] font-bold mb-[15px]">
                백엔드2 프론트2 디자인1
              </p>
              <div className="w-[400px] p-[25px] bg-[#3d4654] rounded-[8px] text-[#a8b2da] text-[18px] shadow-[0_10px_30px_-15px_rgba(2,12,27,.7)] mb-[15px]">
                판매하고자하는 미술작품을 등록하고 판매를 진행할수 있습니다 또
                원하는 작품을 검색하거나 찜할수있는 커머스 사이트입니다.
              </div>
              <div className="w-[400px] p-[25px] bg-[#3d4654] rounded-[8px] text-[#a8b2da] text-[18px] shadow-[0_10px_30px_-15px_rgba(2,12,27,.7)] mb-[15px]">
                <p className="font-bold text-[18px]">
                  문제 해결 및 사용자 경험 개선
                </p>
                <ol className="mt-[20px] list-decimal ml-[20px] leading-relaxed">
                  <li>
                    검색 조건을 URL로 관리해 새로고침·공유 시에도 동일한 결과를
                    유지
                  </li>
                  <li>
                    react-query의 useMutation으로 찜 기능을 처리하고, 성공 시
                    관련 useQuery 캐시를 갱신하여 불필요한 네트워크 요청을
                    줄이고 즉각 반응하는 UI를 구현
                  </li>
                  <li>
                    react-hook-form과 zod를 활용해 일관된 유효성 검사 구조를
                    구축
                  </li>
                  <li>
                    서버 CORS 설정과 Proxy 적용으로 프론트–백엔드 통신 문제를
                    해결
                  </li>
                </ol>
              </div>
              <p className="text-[#A8B2D1] font-bold mb-[15px]">
                typascript, next.js, shadcn-ui, reactHookForm,
                <br /> react-query, axios, tailwind css
              </p>
              <div className="flex gap-[10px]">
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
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[70%] h-[300px] z-0">
              <Image
                src="/assets/Yumu.png"
                alt="yumu이미지"
                fill
                className="object-contain"
              />
            </div>
          </div>

          <div className="reveal-title relative w-full h-[400px] flex justify-between items-center">
            <div className="relative w-[60%] h-[370px] z-0">
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
            <div className="absolute z-10 right-[70px] w-[50%] flex flex-col items-end text-end">
              <h2 className="text-[31px] text-[white] font-bold mb-[15px]">
                Chatting
              </h2>
              <p className="text-[#8892b0] font-bold">
                2024/08/01 - 2024/08/09
              </p>
              <p className="text-[#8892b0] font-bold mb-[15px]">1명</p>
              <div className="p-[25px] bg-[#3d4654] rounded-[8px] text-[#a8b2da] text-[18px] shadow-[0_10px_30px_-15px_rgba(2,12,27,.7)] w-[400px] mb-[15px]">
                PostgreSQL 기반, 인증 데이터베이스 파일 스토리지를 api로
                제공하는 Supabase를 활용하여 로그인 및 회원가입 / 프로필이미지
                추가 / 실시간 채팅 기능을 구현했습니다.
              </div>
              <p className="text-[#A8B2D1] font-bold mb-[15px]">
                react, tailwind, typescript
              </p>
              <div className="flex gap-[10px]">
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
                <button
                  onClick={() =>
                    toast.warning('현재 미제공 중입니다.', {
                      position: 'top-right',
                    })
                  }
                >
                  <Image
                    src="/assets/external-link.png"
                    alt="외부링크"
                    width={25}
                    height={25}
                  />
                </button>
              </div>
            </div>
          </div>

          <div className="reveal-title box-border w-full h-[400px] relative flex justify-between">
            <div className="relative z-10 left-[70px] w-[50%] text-left">
              <h2 className="text-[31px] text-[white] font-bold mb-[15px]">
                tripterior 가족여행기록 사이트
              </h2>
              <p className="text-[#8892b0] font-bold">
                2024/09/09 - 2024/10/19
              </p>
              <p className="text-[#8892b0] font-bold mb-[15px]">
                백엔드2 프론트2(팀장담당) 디자인1 기획자1
              </p>
              <div className="p-[25px] bg-[#3d4654] rounded-[8px] text-[#a8b2da] text-[18px] shadow-[0_10px_30px_-15px_rgba(2,12,27,.7)] w-[400px] mb-[15px]">
                가족 프로필을 생성, 가족 여행 기록을 남기기 댓글을 통해 소통할
                수 있습니다. 또한, 기념일을 설정하고 이를 저장하여 알림을 받을
                수 있는 사이트.
              </div>
              <p className="text-[#A8B2D1] font-bold mb-[15px]">
                Next.js, typascript, reducx, react-query, scss
              </p>
              <div className="flex gap-[10px]">
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
                <button
                  onClick={() =>
                    toast.warning('현재 미제공 중입니다.', {
                      position: 'top-right',
                    })
                  }
                >
                  <Image
                    src="/assets/external-link.png"
                    alt="외부링크"
                    width={25}
                    height={25}
                  />
                </button>
              </div>
            </div>
            <div className="absolute w-[60%] right-[0px] z-0">
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
  );
}
