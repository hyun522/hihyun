'use client';

import type { RefObject } from 'react';
import Image from 'next/image';
import { Map } from 'react-kakao-maps-sdk';

const ROTATION_ITEMS = [
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

interface IntroduceSectionProps {
  sectionRef: RefObject<HTMLElement | null>;
  onOpenMap: () => void;
}

export default function IntroduceSection({
  sectionRef,
  onOpenMap,
}: IntroduceSectionProps) {
  return (
    <section className="sec2" ref={sectionRef} style={{ background: '#374151' }}>
      <div>
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
      <div className="flex justify-center items-center text-white w-[500px] mx-auto mt-[50px] p-[20px] gap-[50px] font-[nanum_gothic] font-semibold">
        <div>
          <Image
            src="/assets/profile.png"
            alt="증명사진 이미지"
            width={120}
            height={120}
          />
        </div>
        <div className="flex flex-col w-full">
          <p className="text-[40px] mb-[10px]">정현진</p>
          <p>생년월일 : 1996.11.15</p>
          <div className="flex gap-[20px] h-[30px] items-end w-full">
            주소 : 서울시 구로구 고척로
            <div className="relative w-[60px]" onClick={onOpenMap}>
              <span className="absolute bottom-[0px] z-10 left-[-10px] cursor-pointer animate-[wiggleLR_1.2s_ease-in-out_infinite]">
                <Image
                  src="/assets/location.png"
                  alt="위치 아이콘"
                  width={30}
                  height={30}
                />
              </span>
              <Map
                center={{ lat: 37.501581, lng: 126.846524 }}
                style={{ width: '100%', height: '60px', borderRadius: '50%' }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="box-border border border-[5px] border-t-0 border-b-0 border-[black] rounded-[40px] w-[900px] mx-auto my-[20px]">
        <div className="border-[20px] border-[#374151] bg-[#374151] w-[800px] mx-auto text-[white] text-">
          <p className="text-[20px] text-center font-bold">
            “사용자가 망설이지 않고 사용할 수 있는 화면을 만드는 프론트엔드
            개발자입니다.” <br />
          </p>
          <br />
          의료데이터를 다루는 웹서비스를 다루며 비즈니스의 가치를 고객에게
          온전히 전달하기위해 다양한 직무의 구성원들과{' '}
          <span className="font-bold bg-[linear-gradient(128.93deg,rgb(0,173,181)_22.41%,rgb(57,62,70)_93.45%)]">
            능동적으로 커뮤니케이션
          </span>
          하며, 협업해왔습니다.
          <br />
          <br />
          공통 코드를 줄이고 유지보수성을 높이기위한{' '}
          <span className="font-bold bg-[linear-gradient(128.93deg,rgb(0,173,181)_22.41%,rgb(57,62,70)_93.45%)]">
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
          프론트엔드뿐 아니라{' '}
          <span className="font-bold bg-[linear-gradient(128.93deg,rgb(0,173,181)_22.41%,rgb(57,62,70)_93.45%)]">
            개발하는 모든 것을 즐기고자하는 자세
          </span>
          로 임하고 있습니다.
          <br />
          <br />
        </div>
      </div>
      <div className="relative h-[180px]">
        <div className="absolute w-[300px] h-[300px] bottom-[40px] right-[9%] flex items-center animate-[spin_20s_linear_infinite_reverse]">
          {ROTATION_ITEMS.map((item, index) => {
            const angle = (360 / ROTATION_ITEMS.length) * index;

            return (
              <div
                key={`${item}-${index}`}
                className="absolute w-full h-full left-[150px] text-white"
                style={{
                  transform: `rotate(${angle}deg)`,
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
  );
}