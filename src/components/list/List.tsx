import { useRecoilValue } from "recoil";
import "./List.scss"
import { filterLanguage } from "@/recoil/selector/selectors";
import { foodList } from "@/recoil/atoms/atoms";
import ClearIcon from '@mui/icons-material/Clear';
import { useEffect, useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { foodType } from "./type";
const List = () => {
    const translations = useRecoilValue(filterLanguage);
    const menuList = useRecoilValue(foodList)

    const [counts, setCounts] =  useState<{ [id: string]: number }>({});

    useEffect(() => {

        const initialCounts = menuList.reduce((acc: { [key: string]: number }, item: foodType) => {
            acc[item.id] = 1;
            return acc;
        }, {});
        setCounts(initialCounts);
    }, [menuList]);

    const addIcon = (id: number) => {
        setCounts(prevCounts => ({
            ...prevCounts,
            [id]: Math.min(prevCounts[id] + 1, 10)
        }));
    };

    const removeIcon = (id: number) => {
        setCounts(prevCounts => ({
            ...prevCounts,
            [id]: Math.max(prevCounts[id] - 1, 1)
        }));
    };

    const totalPrice = () => {
        return menuList.reduce((total, item) => {
            const quantity = counts[item.id] || 1; // 수량 가져오기, 기본값 1
            const price = item.price ; // 가격이 없을 경우 기본값 0
            console.log(quantity);
            console.log(price);
            console.log(total);
            return total + (price * quantity); // 전체 가격 누적

        }, 0);
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
                { Array.isArray(menuList) && menuList.map((item:foodType) => (
                    <div key={item.id} className="ListItem">
                        <div className="ListItem1">
                            {item.translation}
                        </div>
                        <div className="ListItem2">
                            <div>{counts[item.id]}</div>
                            <AddIcon onClick={() => addIcon(item.id)} />
                            <RemoveIcon onClick={() => removeIcon(item.id)} />
                        </div>
                        <div className="ListItem3">
                            {totalPrice} ₩
                            <div className="ListItem4">
                                <ClearIcon />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="ListSum">
                {translations["total amount"]} :
            </div>
        </div>
    );
};

export default List;