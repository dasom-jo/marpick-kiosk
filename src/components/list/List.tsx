import { useRecoilState, useRecoilValue } from "recoil";
import "./List.scss";
import { filterLanguage } from "@/recoil/selector/selectors";
import { eatOrGo, foodList, tasteList, totalPay } from "@/recoil/atoms/atoms";
import ClearIcon from '@mui/icons-material/Clear';
import { useEffect, useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { foodType } from "./type";

const List = () => {
    //백엔드에 보낼것: 날짜 총액
    const translations = useRecoilValue(filterLanguage);
    const menuList = useRecoilValue(foodList);
    const [counts, setCounts] = useState<{ [id: string]: number }>({});
    const [filteredList,setFilteredList] = useRecoilState(foodList);
    const seletedList = useRecoilValue(tasteList)
    const takeOut = useRecoilValue(eatOrGo)
    const [sumPay, setSumPay] = useRecoilState(totalPay);

    useEffect(() => {
        localStorage.setItem('sumPay', sumPay.toString());
    }, [sumPay]);

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

    const getItemPrice = (price: string , count: number) => {
        const numericPrice = parseFloat(price.replace(/,/g, '')) || 0;
        return numericPrice * count;
    };

    const getTotalPrice = () => {
        if (menuList) {
            // reduce로 총 가격 계산
            const total = menuList.reduce((total, item) => {
                const itemCount = counts[item.id] || 1;
                const itemPrice = item.price;
                return total + getItemPrice(itemPrice, itemCount);
            }, 0);

            // 상태 업데이트
            setSumPay(total.toString());
        }
    };

    // menuList 또는 counts가 변경될 때마다 총 가격을 계산
    useEffect(() => {
        getTotalPrice();
    }, [menuList, counts]);

    const handleLocal = (id: number) => {
        const filterList = menuList.filter(item => item.id !== id)
        setFilteredList(filterList)

        setCounts(prevCounts => {
            const newCounts = { ...prevCounts };
            delete newCounts[id];
            return newCounts;
        });
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
            <div className="seletedList">
                [{translations.taste}]: {seletedList} /
                [{translations.takeOut}] : {takeOut}
            </div>
            <div className="ListSum">
                {translations["total amount"]} : {sumPay} ₩
            </div>
        </div>
    );
};

export default List;
