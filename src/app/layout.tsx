"use client";
import React from "react";
import { RecoilRoot } from "recoil";
import Header from "@/components/header/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <RecoilRoot>
          <Header />
          <main>{children}</main>
        </RecoilRoot>
      </body>
    </html>
  );
}
