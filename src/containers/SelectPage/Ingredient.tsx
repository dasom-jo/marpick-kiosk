import Vegetable from "./Vegetable";
import "./SelectMenu.scss"
import Meat from "./Meat";
import Other from "./Other";
import IngredientBtn from "@/components/ingredientBtn/IngredientBtn";
import { useRecoilValue } from "recoil";
import { ingredientNumber } from "@/recoil/atoms/atoms";

const Ingredient = () => {
    const pageNumber = useRecoilValue(ingredientNumber)

    return (
        <div className="DefaultBox">
            <IngredientBtn />
            {pageNumber === 1 && <Vegetable/>}
            {pageNumber === 2 && <Meat/>}
            {pageNumber === 3 && <Other/>}
        </div>
     );
}

export default Ingredient;