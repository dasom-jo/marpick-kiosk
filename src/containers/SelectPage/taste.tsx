import "./SelectMenu.scss";
import { useRecoilState, useRecoilValue } from "recoil";
import { dataState, foodList, langChange, tasteList } from "@/recoil/atoms/atoms";
import { useEffect } from "react";
import Swal from 'sweetalert2';
const Taste = () => {
    const [data, setData] = useRecoilState(dataState);
    const filtered = useRecoilValue(langChange);
    const [selectedTaste, setSelectedTaste] = useRecoilState(tasteList);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/api/map');
                const result = await response.json();
                setData(result.taste);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [setData]);

    const fiteredData = data.filter(item => item.language_code === filtered);

    const handleTaste = (item:any) => {
        setSelectedTaste(item.translation);
        Swal.fire({
            position: "center",
            title: `"${item.translation}"이(가) 선택되었습니다`,
            showConfirmButton: false,
            timer: 1000,
            width: '500px'
        });
    }

    return (
        <div className="DefaultBox">
            <div className="DefaultSmallBox">
                {fiteredData.map(filteredItem => (
                    <div key={filteredItem.id}
                        style={{ marginTop: "50px", marginLeft: '50px' }}
                        onClick={() => handleTaste(filteredItem)}
                    >
                        <div className="menuImgBox">
                            <img
                                className="menuImg"
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
