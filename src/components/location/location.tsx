"use client";
import { countIcon } from "@/recoil/atoms/atoms";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useRecoilValue } from "recoil";
import "./Location.scss";
import { useTranslation } from "react-i18next"; // react-i18next 사용

const Location = () => {
  const iconNumber = useRecoilValue(countIcon);
  const { t } = useTranslation(); // useTranslation 훅 사용

  return (
    <>
      <div className="icon">
        <div className={`icon1 ${iconNumber === 0 ? "red" : "black"}`}>
          <div>{t("ingredients")}</div> {/* 번역 적용 */}
          <ShoppingCartOutlinedIcon style={{ fontSize: "50px" }} />
        </div>

        <div className={`icon1 ${iconNumber === 1 ? "red" : "black"}`}>
          <div className="taste">{t("taste")}</div> {/* 번역 적용 */}
          <ShoppingCartOutlinedIcon style={{ fontSize: "50px" }} />
        </div>

        <div className={`icon1 ${iconNumber === 2 ? "red" : "black"}`}>
          <div>{t("pay")}</div> {/* 번역 적용 */}
          <ShoppingCartOutlinedIcon style={{ fontSize: "50px" }} />
        </div>
      </div>
    </>
  );
};

export default Location;
