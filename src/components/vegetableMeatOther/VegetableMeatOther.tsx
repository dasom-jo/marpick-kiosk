import "../../containers/SelectPage/SelectMenu.scss"
import { useRecoilState, useRecoilValue } from "recoil";
import {  foodList, ingredientNumber, langChange} from "@/recoil/atoms/atoms";
import { useEffect, useState } from "react";
import { menuType } from "@/containers/SelectPage/type";
import Swal from 'sweetalert2';
import { foodType } from "../list/type";
import { dataState, filterLanguage } from "@/recoil/selector/selectors";
//재료 선택 컴포넌트입니다

const VegetableMeatOther  = () => {
    const filtered = useRecoilValue(langChange);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;
    const pageNumber = useRecoilValue(ingredientNumber)
    const [SeletedMenu, setSeletedMenu] = useRecoilState<foodType[]>(foodList);
    const translations = useRecoilValue(filterLanguage);
    const allData = useRecoilValue(dataState)
    const [data, setData] = useState<menuType[]>([]);

    useEffect(() => {
            try {
                //채소페이지
                if (pageNumber === 1) {
                    setData(allData.menu);
                    //고기페이지
                } else if (pageNumber === 2) {
                    setData(allData.meat);
                    //기타 페이지
                } else if (pageNumber === 3) {
                    setData(allData.other);
                }
            } catch (error) {
                console.error(error);
            }
        setCurrentPage(1);
    }, [ pageNumber]);

    const filteredData = Array.isArray(data)
    ? data.filter((item:menuType) => item.language_code === filtered)
    : [];

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredData.slice(indexOfFirstItem,indexOfLastItem)

    const totalPages = Math.ceil(filteredData.length / itemsPerPage)

    const handlePageChange = (pageNumber:number) =>{
        setCurrentPage(pageNumber)
    }

    const Modal = (filteredItem: any) => {
        setSeletedMenu(prevMenuList => {
            const isItemAlreadyAdded = prevMenuList.some(item => item.id === filteredItem.id);

            if (!isItemAlreadyAdded) {
                Swal.fire({
                    position: "center",
                    title: `"${filteredItem.translation}"${translations.selectmodalment}`,
                    showConfirmButton: false,
                    timer: 1000,
                    width: '500px',
                    backdrop: `rgba(0,0,0,0)`,
                });

                return [...prevMenuList, filteredItem];
            } else {
                Swal.fire({
                    position: "center",
                    title: `"${filteredItem.translation}"${translations.selectedmodalment}`,
                    showConfirmButton: false,
                    color: 'red',
                    timer: 1500,
                    width: '500px',
                    backdrop: `rgba(0,0,0,0)`,
                });

                return prevMenuList;
            }
        });
    };

    return (
        <div >
            <div className="DefaultSmallBox">
                {currentItems.map(filteredItem => (
                    <div key={filteredItem.id} onClick={()=>Modal(filteredItem)}>
                        <div className="menuImgBox">
                            <img className="menuImg"
                                src={filteredItem.img}
                                alt={filteredItem.translation}
                            />
                        </div>
                        <div className="menuName">
                            {filteredItem.translation}<br/>
                            {filteredItem.price} ₩
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