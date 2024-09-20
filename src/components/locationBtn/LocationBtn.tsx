import { countIcon, ingredientNumber } from "@/recoil/atoms/atoms";
import { useRecoilState, useRecoilValue } from "recoil";
import "./LocationBtn.scss";
import { filterLanguage } from "@/recoil/selector/selectors";

const LocationBtn = () => {
  const translations = useRecoilValue(filterLanguage);
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
          {translations["previous step"]}
        </div>
        {PlusMinus !== 2 && (
          <div className="LocationBtn" onClick={plusCount}>
            {translations["next step"]}
          </div>
        )}
      </div>
    </>
  );
};

export default LocationBtn;
