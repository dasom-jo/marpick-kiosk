
import "./SelectMenu.scss"
import IngredientBtn from "@/components/ingredientBtn/IngredientBtn";
import VegetableMeatOther from "../../components/vegetableMeatOther/VegetableMeatOther";


const Ingredient = () => {
    return (
        <div className="DefaultBox">
            <IngredientBtn />
            <VegetableMeatOther/>
        </div>
     );
}

export default Ingredient;