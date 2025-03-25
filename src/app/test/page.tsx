"use client";
import React, { Suspense } from "react";
import { useTranslation } from "react-i18next";
import "../../i18n";

export default function TestPage() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string | undefined) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div>
        <h1>{t("test")}</h1>{" "}
        {/* 번역 키에 따라 "테스트입니다" 또는 "This is a test"가 출력됩니다 */}
        <button onClick={() => changeLanguage("en")}>English</button>
        <button onClick={() => changeLanguage("ko")}>Korean</button>
      </div>
    </Suspense>
  );
}
