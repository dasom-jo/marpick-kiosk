import { useRecoilState, useRecoilValue } from "recoil";
import "./ingredientBtn.scss"
import { ingredientNumber } from "@/recoil/atoms/atoms";
import { filterLanguage } from "@/recoil/selector/selectors";

const IngredientBtn = () => {
    const translations = useRecoilValue(filterLanguage);
    const [foodNumber, setFoodNumber] = useRecoilState(ingredientNumber);
    const pageNumber = useRecoilValue(ingredientNumber);
    const stepNumber = (Number:number) =>{
        setFoodNumber(Number)
    }

    return (
        <div className="IngredientBtnBox">
            <div
                className={`IngredientBtnSmallBox ${pageNumber === 1 ? 'white' : 'black'}`}
                onClick={()=>{stepNumber(1)}}
                >{translations.vegetable}</div>
            <div
                onClick={()=>{stepNumber(2)}}
                className={`IngredientBtnSmallBox ${pageNumber === 2 ? 'white' : 'black' }`}>
                {translations.meat}</div>
            <div
                onClick={()=>{stepNumber(3)}}
                className={`IngredientBtnSmallBox ${pageNumber === 3 ? 'white' : 'black' }`}>
                {translations.other}</div>
        </div>
     );
}

export default IngredientBtn;