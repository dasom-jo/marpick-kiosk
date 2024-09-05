import "../../containers/SelectPage/SelectMenu.scss"
import { useRecoilState, useRecoilValue } from "recoil";
import { dataState, foodList, ingredientNumber, langChange} from "@/recoil/atoms/atoms";
import { useEffect, useState } from "react";
import { menuType } from "@/containers/SelectPage/type";
import Swal from 'sweetalert2';
import { foodType } from "../list/type";
import { filterLanguage } from "@/recoil/selector/selectors";
//재료 선텍 컴포넌트입니다

const VegetableMeatOther  = () => {
    const [data, setData] = useRecoilState<menuType[]>(dataState);
    const filtered = useRecoilValue(langChange);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;
    const pageNumber = useRecoilValue(ingredientNumber)
    const [SeletedMenu, setSeletedMenu] = useRecoilState<foodType[]>(foodList);
    const translations = useRecoilValue(filterLanguage);
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
                console.error(error);
            }
        };
        fetchData();
        setCurrentPage(1);
    }, [ pageNumber]);

    const filteredData = data.filter(item => item.language_code === filtered);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredData.slice(indexOfFirstItem,indexOfLastItem)

    const totalPages = Math.ceil(filteredData.length / itemsPerPage)

    const handlePageChange = (pageNumber:number) =>{
        setCurrentPage(pageNumber)
    }

    const Modal = (filteredItem: any) => {
        setSeletedMenu(prevMenuList => {
            // 이전 목록에 filteredItem이 있는지 확인
            const isItemAlreadyAdded = prevMenuList.some(item => item.id === filteredItem.id);

            if (!isItemAlreadyAdded) {
                // 아이템이 목록에 없는 경우 추가
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
                // 아이템이 목록에 이미 있는 경우 알림
                Swal.fire({
                    position: "center",
                    title: `"${filteredItem.translation}"${translations.selectedmodalment}`,
                    showConfirmButton: false,
                    color: 'red',
                    timer: 1500,
                    width: '500px',
                    backdrop: `rgba(0,0,0,0)`,
                });

                // 상태를 변경하지 않음 (이전 목록을 그대로 반환)
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