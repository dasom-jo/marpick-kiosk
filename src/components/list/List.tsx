import { useRecoilState, useRecoilValue } from "recoil";
import "./List.scss";
import { filterLanguage } from "@/recoil/selector/selectors";
import { foodList } from "@/recoil/atoms/atoms";
import ClearIcon from '@mui/icons-material/Clear';
import { useEffect, useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { foodType } from "./type";

const List = () => {
    const translations = useRecoilValue(filterLanguage);
    const menuList = useRecoilValue(foodList);
    const [counts, setCounts] = useState<{ [id: string]: number }>({});
    const [filteredList,setFilteredList] = useRecoilState(foodList);


    const addIcon = (id: number) => {
        setCounts(prevCounts => ({
            ...prevCounts,
            [id]: Math.min((prevCounts[id] || 0) + 1, 10)
        }));
    };

    const removeIcon = (id: number) => {
        setCounts(prevCounts => ({
            ...prevCounts,
            [id]: Math.max((prevCounts[id] || 1) - 1, 1)
        }));
    };

    const getItemPrice = (price: string, count: number) => {
        const numericPrice = parseFloat(price.replace(/,/g, '')) || 0;
        return numericPrice * count;
    };

    const getTotalPrice = () => {
        return menuList.reduce((total, item) => {
            const itemCount = counts[item.id] || 1;
            const itemPrice = item.price;
            return total + getItemPrice(itemPrice, itemCount);
        }, 0);
    };
    
    const handleLocal = (id: number) => {
        const filterList = menuList.filter(item => item.id !== id)
        setFilteredList(filterList)
    };


    return (
        <div className="ListBox">
            <div className="ListName">
                <div className="ListName1">
                    {translations["Selected menu"]}
                </div>
                <div className="ListName1">
                    {translations.count}
                </div>
                <div className="ListName1">
                    {translations.amount}
                </div>
            </div>

            <div className="ListPrint">
                {Array.isArray(menuList) && menuList.map((item: foodType) => {
                    const itemCount = counts[item.id] || 1;
                    return (
                        <div key={item.id} className="ListItem">
                            <div className="ListItem1">
                                {item.translation}
                            </div>
                            <div className="ListItem2">
                                <div>{itemCount}</div>
                                <AddIcon onClick={() => addIcon(item.id)} />
                                <RemoveIcon onClick={() => removeIcon(item.id)} />
                            </div>
                            <div className="ListItem3">
                                {getItemPrice(item.price, itemCount)} ₩
                                <div
                                    onClick={()=>handleLocal(item.id)}
                                    className="ListItem4">
                                    <ClearIcon />
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className="ListSum">
                {translations["total amount"]} : {getTotalPrice()} ₩
            </div>
        </div>
    );
};

export default List;
