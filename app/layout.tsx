import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import '@/app/global.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

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
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
