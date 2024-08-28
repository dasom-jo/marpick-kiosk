import { colorIcon } from "@/recoil/atoms/atoms";
import { useRecoilState } from "recoil";
import "./LocationBtn.scss"

const LocationBtn = () => {
    const [color, setColor] = useRecoilState(colorIcon);

    const handleColorChange = (newColor: string) => {
        setColor(newColor);
    };
    return (
    <>
        <div id="LocationDoubleBtn">
            <div
                className="LocationBtn"
                style={{background:'rgb(69, 3, 71)'}}
                onClick={() => handleColorChange('red')}>이전단계</div>
            <div
                className="LocationBtn"
                onClick={() => handleColorChange('red')}>다음단계</div>
        </div>
    </>
    );
}

export default LocationBtn;