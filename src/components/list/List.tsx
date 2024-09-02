import { useRecoilValue } from "recoil";
import "./List.scss"
import { filterLanguage } from "@/recoil/selector/selectors";
import { foodList } from "@/recoil/atoms/atoms";
const List = () => {
    const translations = useRecoilValue(filterLanguage);
    const menuList = useRecoilValue(foodList)
    return (
        <div className="ListBox">
            <div className="ListName">
                <div className="ListName1">
                    {translations ["Selected menu"]}
                </div>
                <div className="ListName1">
                    {translations.count}
                </div>
                <div className="ListName1">
                    {translations.amount}
                </div>
            </div>

            <div className="ListPrint">

                </div>
            <div className="ListSum">
            {translations["total amount"]} :
            </div>
        </div>
     );
}

export default List;