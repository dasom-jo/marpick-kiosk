import { menuRoute } from "@/pages/api/menu/menuRoute";
import "./SelectMenu.scss"
import { useQuery } from "@tanstack/react-query";
import { useRecoilState, useRecoilValue } from "recoil";
import { dataState, langChange } from "@/recoil/atoms/atoms";
import { useEffect } from "react";
import { menuType } from "./type";
//재료 선텍 컴포넌트입니다

const Vegetable  = () => {
    const [data, setData] = useRecoilState(dataState);
    const filtered = useRecoilValue(langChange);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/api/map');
                const result = await response.json();

                setData(result.menu);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [setData]);

    return (
        <div >
            <div className="DefaultSmallBox">
            {data && data.filter(item => item.language_code === filtered).map(filteredItem => (
                <div key={filteredItem.id}>
                <div className="menuImgBox">
                    <img className="menuImg"
                        src={filteredItem.img}
                        alt={filteredItem.translation}
                    />
                </div>
                <div className="menuName">
                    {filteredItem.translation}
                </div>

                </div>
            ))}</div>
        </div>
    );
}

export default Vegetable;