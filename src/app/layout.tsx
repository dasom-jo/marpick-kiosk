"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <RecoilRoot>
      {/* atom등 상태관리 연결 */}
    <html >
      <body>{children}</body>
    </html>
    </RecoilRoot>
  );
}





