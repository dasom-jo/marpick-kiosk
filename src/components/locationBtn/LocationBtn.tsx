import { countIcon, ingredientNumber } from "@/recoil/atoms/atoms";
import { useRecoilState, useRecoilValue } from "recoil";
import "./LocationBtn.scss";
import { useTranslation } from "react-i18next"; // useTranslation 추가

const LocationBtn = () => {
  const { t } = useTranslation(); // useTranslation 훅으로 t 함수 가져오기
  const [PlusMinus, setPlusMinus] = useRecoilState(countIcon);

  const plusCount = () => {
    if (PlusMinus >= 0 && PlusMinus < 2) {
      setPlusMinus((prev) => prev + 1);
    } else {
      setPlusMinus(0);
    }
  };

  const minusCount = () => {
    if (PlusMinus > 0 && PlusMinus <= 2) {
      setPlusMinus((prev) => prev - 1);
    } else {
      setPlusMinus(0);
    }
  };

  return (
    <>
      <div id="LocationDoubleBtn">
        <div
          className="LocationBtn"
          style={{ background: "rgb(69, 3, 71)" }}
          onClick={minusCount}
        >
          {t("previous_step")} {/* 번역 적용 */}
        </div>
        {PlusMinus !== 2 && (
          <div className="LocationBtn" onClick={plusCount}>
            {t("next_step")} {/* 번역 적용 */}
          </div>
        )}
      </div>
    </>
  );
};

export default LocationBtn;
