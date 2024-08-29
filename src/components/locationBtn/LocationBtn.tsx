import { countIcon } from "@/recoil/atoms/atoms";
import { useRecoilState } from "recoil";
import "./LocationBtn.scss"

const LocationBtn = () => {


    const [PlusMinus, setPlusMinus] = useRecoilState(countIcon);

    const plusCount = () =>{
        if (PlusMinus >= 0 && PlusMinus < 2) {
            setPlusMinus(prev => prev + 1)
        }else{
            setPlusMinus(0);
        }
    }
    const minusCount = () => {
        if (PlusMinus > 0 && PlusMinus <= 2) {
            setPlusMinus(prev => prev - 1)
        }else{
            setPlusMinus(0);
        }
    };

    return (
    <>
        <div id="LocationDoubleBtn">
            <div
                className="LocationBtn"
                style={{background:'rgb(69, 3, 71)'}}
                onClick={minusCount}>이전단계</div>
            <div
                className="LocationBtn"
                onClick={plusCount}>다음단계</div>
        </div>
    </>
    );
}

export default LocationBtn;