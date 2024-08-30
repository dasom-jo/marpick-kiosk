
import "./SelectMenu.scss"
import IngredientBtn from "@/components/ingredientBtn/IngredientBtn";
import VegetableMeatOther from "./VegetableMeatOther";


const Ingredient = () => {
    return (
        <div className="DefaultBox">
            <IngredientBtn />
            <VegetableMeatOther/>
        </div>
     );
}

export default Ingredient;