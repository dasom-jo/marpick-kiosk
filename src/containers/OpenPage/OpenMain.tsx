"use client";
import { eatOrGo, langChange } from "@/recoil/atoms/atoms";
import { useRouter } from "next/navigation";
import { useRecoilState } from "recoil";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import FlatwareIcon from "@mui/icons-material/Flatware";
import "../OpenPage/OpenMain.scss";
import "../../app/globals.scss";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const OpenMain = () => {
  const router = useRouter();
  const { t, i18n } = useTranslation();
  const [wantHere, setWantHere] = useRecoilState(eatOrGo);
  const [currentLang, setCurrentLang] = useRecoilState(langChange);

  useEffect(() => {
    localStorage.setItem("changeKR", currentLang);
  }, [currentLang]);

  const handleTakeOut = () => {
    const updatedState = [...wantHere];
    updatedState[0] = "TakeOut";
    setWantHere(updatedState);
    router.push("/menu");
  };

  const handleForHere = () => {
    const updatedState = [...wantHere];
    updatedState[0] = "ForHere";
    setWantHere(updatedState);
    router.push("/menu");
  };

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    setCurrentLang(lang);
  };

  const moveLogin = () => {
    router.push("/managelogin");
  };

  return (
    <>
      <div className="ClickBtn">
        <div id="TakeOut" onClick={handleTakeOut}>
          <div className="Icon">
            <LocalMallIcon
              style={{
                fontSize: "200px",
                marginLeft: "50px",
                marginTop: "10px",
                color: "white",
              }}
            />
          </div>
          <div className="ClickBtnText">{t("takeOut")}</div>
        </div>
        <div id="ForHere" onClick={handleForHere}>
          <FlatwareIcon
            style={{
              fontSize: "200px",
              marginLeft: "50px",
              marginTop: "10px",
              color: "white",
            }}
          />
          <div className="ClickBtnText">{t("forHere")}</div>
        </div>
      </div>
      <div>
        {currentLang === "ko-KR" ? (
          <div id="ChangeBox">
            <div id="ChangeLanguage" onClick={() => changeLanguage("en-US")}>
              ENGLISH
            </div>
          </div>
        ) : (
          <div id="ChangeBox">
            <div id="ChangeLanguage" onClick={() => changeLanguage("ko-KR")}>
              한국어
            </div>
          </div>
        )}
      </div>
      <div id="manageBtn">
        <div id="manageText" onClick={moveLogin}>
          관리자 페이지
        </div>
      </div>
    </>
  );
};

export default OpenMain;
