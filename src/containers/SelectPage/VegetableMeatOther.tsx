import "../../containers/SelectPage/SelectMenu.scss"
import { useRecoilState, useRecoilValue } from "recoil";
import {  dataState, ingredientNumber, langChange } from "@/recoil/atoms/atoms";
import { useEffect, useState } from "react";
//재료 선텍 컴포넌트입니다

const VegetableMeatOther  = () => {
    const [data, setData] = useRecoilState(dataState);
    const filtered = useRecoilValue(langChange);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;
    const pageNumber = useRecoilValue(ingredientNumber)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/api/map');
                const result = await response.json();
                //채소페이지
                if (pageNumber === 1) {
                    setData(result.menu);
                    //고기페이지
                } else if (pageNumber === 2) {
                    setData(result.meat);
                    //기타 페이지
                } else if (pageNumber === 3) {
                    setData(result.other);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
        setCurrentPage(1);
    }, [ pageNumber]);

    const fiteredData = data.filter(item => item.language_code === filtered);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = fiteredData.slice(indexOfFirstItem,indexOfLastItem)

    const totalPages = Math.ceil(fiteredData.length / itemsPerPage)

    const handlePageChange = (pageNumber:number) =>{
        setCurrentPage(pageNumber)
    }
    return (
        <div >
            <div className="DefaultSmallBox">
                {currentItems.map(filteredItem => (
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
                ))}
            </div>
            {/* 페이지네이션 */}
            <div className="pagination">
                {[...Array(totalPages)].map((_, index) => (
                    <button
                        key={index + 1}
                        onClick={() => handlePageChange(index + 1)}
                        className={currentPage === index + 1 ? 'active' : ''}
                        style={{border:'none',margin:'15px 5px',fontSize:"25px",
                            cursor:"pointer",boxShadow:"1px 1px 1px gray",
                            backgroundColor:'white'
                    }}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default VegetableMeatOther;