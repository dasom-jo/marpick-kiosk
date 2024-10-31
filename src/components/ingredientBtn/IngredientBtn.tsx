import { useRecoilState, useRecoilValue } from "recoil";
import "./ingredientBtn.scss";
import { ingredientNumber } from "@/recoil/atoms/atoms";
import { useTranslation } from "react-i18next"; // useTranslation 추가

const IngredientBtn = () => {
  const { t } = useTranslation(); // t 함수로 번역 사용
  const [foodNumber, setFoodNumber] = useRecoilState(ingredientNumber);
  const pageNumber = useRecoilValue(ingredientNumber);
  const stepNumber = (Number: number) => {
    setFoodNumber(Number);
  };

  return (
    <div className="IngredientBtnBox">
      <div
        className={`IngredientBtnSmallBox ${pageNumber === 1 ? "white" : "black"}`}
        onClick={() => {
          stepNumber(1);
        }}
      >
        {t("vegetable")} {/* 다국어 번역 적용 */}
      </div>
      <div
        onClick={() => {
          stepNumber(2);
        }}
        className={`IngredientBtnSmallBox ${pageNumber === 2 ? "white" : "black"}`}
      >
        {t("meat")} {/* 다국어 번역 적용 */}
      </div>
      <div
        onClick={() => {
          stepNumber(3);
        }}
        className={`IngredientBtnSmallBox ${pageNumber === 3 ? "white" : "black"}`}
      >
        {t("other")} {/* 다국어 번역 적용 */}
      </div>
    </div>
  );
};

export default IngredientBtn;
