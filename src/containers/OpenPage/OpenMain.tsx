"use client";
import { eatOrGo, langChange } from "@/recoil/atoms/atoms";
import { useRouter } from "next/navigation";
import { useRecoilState, useRecoilValue } from "recoil";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import FlatwareIcon from "@mui/icons-material/Flatware";
import "../OpenPage/OpenMain.scss";
import "../../app/globals.scss";
import { filterLanguage } from "@/recoil/selector/selectors";
import { useEffect } from "react";

const OpenMain = () => {
  const router = useRouter();
  const [wantHere, setWantHere] = useRecoilState(eatOrGo);
  const [changeKR, setChangeKR] = useRecoilState(langChange);
  const translations = useRecoilValue(filterLanguage);

  useEffect(() => {
    localStorage.setItem("changeKR", changeKR);
  }, [changeKR]);

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

  const onChangeLang = (newLanguage: string) => {
    setChangeKR(newLanguage);
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
          <div className="ClickBtnText">{translations.takeOut}</div>
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
          <div className="ClickBtnText">{translations.forHere}</div>
        </div>
      </div>
      <div>
        {changeKR === "ko-KR" ? (
          <div id="ChangeBox">
            <div id="ChangeLanguage" onClick={() => onChangeLang("en-US")}>
              ENGLISH
            </div>
          </div>
        ) : (
          <div id="ChangeBox">
            <div id="ChangeLanguage" onClick={() => onChangeLang("ko-KR")}>
              한국어
            </div>
          </div>
        )}
      </div>
      <div id="manageBtn">
        <div id="manageText" onClick={moveLogin}>
          관리자페이지
        </div>
      </div>
    </>
  );
};

export default OpenMain;
