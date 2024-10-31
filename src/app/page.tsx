"use client";
import OpenMain from "@/containers/OpenPage/OpenMain";
import "./globals.scss";
import React, { Suspense } from "react";
import "../i18n";
export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <OpenMain />
    </Suspense>
  );
}
