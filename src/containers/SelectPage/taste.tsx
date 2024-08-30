import "./SelectMenu.scss"
import { useRecoilState, useRecoilValue } from "recoil";
import {  countIcon, dataState, ingredientNumber, langChange } from "@/recoil/atoms/atoms";
import { useEffect, useState } from "react";
//재료 선텍 컴포넌트입니다

const Taste  = () => {
    const [data, setData] = useRecoilState(dataState);
    const filtered = useRecoilValue(langChange);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/api/map');
                const result = await response.json();
                setData(result.taste)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [setData]);

    const fiteredData = data.filter(item => item.language_code === filtered);

    return (
        <div className="DefaultBox">
            <div className="DefaultSmallBox">
                {fiteredData.map(filteredItem => (
                    <div key={filteredItem.id} style={{marginTop:"50px",marginLeft:'50px'}}>
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
                ))}
            </div>
        </div>
    );
}

export default Taste;