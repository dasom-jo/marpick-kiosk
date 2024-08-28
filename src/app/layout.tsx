"use client";
import Header from '@/components/header/Header';
import React from 'react';
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';




export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <RecoilRoot>
      {/* atom등 상태관리 연결 */}
    <html >
      <body>{children}</body>
    </html>
    </RecoilRoot>
  );
}





