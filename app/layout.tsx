import type { Metadata } from 'next';
import {  Roboto_Slab, Nanum_Gothic  } from 'next/font/google';
import '@/app/global.css';
import Script from 'next/script';


const RobotoSlab = Roboto_Slab({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
  display: 'swap',
});

const NanumGothic = Nanum_Gothic({
  subsets: ['latin'],
  weight: [ '400', '700', '800'],
  display: 'swap',
});

// Roboto Slab
export const metadata: Metadata = {
  title: 'Frontend Portfolio | Hyunjin Jeong',
  description:
    'React, TypeScript, Next.js 기반으로 관리자(Admin) 시스템과 사용자 중심 웹 서비스를 구현한 프론트엔드 개발자 정현진의 포트폴리오입니다.',
  keywords: [
    'Frontend Developer',
    'React',
    'TypeScript',
    'Next.js',
    '웹 포트폴리오',
    '프론트엔드 개발자',
  ],
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const key = process.env.NEXT_PUBLIC_KAKAO_KEY;

  return (
    <html lang="en">
      <body
        // className={`antialiased`}
        className={`${RobotoSlab.className} ${NanumGothic.className} antialiased`}
      > 
         <Script
          src={`https://dapi.kakao.com/v2/maps/sdk.js?appkey=${key}&libraries=services,clusterer&autoload=false`}
          strategy="afterInteractive"
          // onLoad={() => console.log('[Kakao] script loaded')}
          // onError={(e) => console.log('[Kakao] script error', e)}
        />
        {children}
      </body>
    </html>
  );
}
