import "./SelectMenu.scss";
import { useRecoilState, useRecoilValue } from "recoil";
import { foodList, langChange, tasteList } from "@/recoil/atoms/atoms";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { dataState, filterLanguage } from "@/recoil/selector/selectors";
import { menuType } from "./type";
const Taste = () => {
  const allData = useRecoilValue(dataState);
  const [data, setData] = useState<menuType[]>([]);
  const filtered = useRecoilValue(langChange);
  const [selectedTaste, setSelectedTaste] = useRecoilState(tasteList);
  const translations = useRecoilValue(filterLanguage);

  useEffect(() => {
    try {
      setData(allData.taste);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, [setData]);

  const filteredData = Array.isArray(data)
    ? data.filter((item: menuType) => item.language_code === filtered)
    : [];

  const handleTaste = (item: any) => {
    setSelectedTaste(item.translation);
    Swal.fire({
      position: "center",
      title: `"${item.translation}"${translations.selectmodalment}`,
      showConfirmButton: false,
      timer: 1000,
      width: "500px",
    });
  };

  return (
    <div className="DefaultBox">
      <div className="DefaultSmallBox">
        {filteredData.map((filteredItem) => (
          <div
            key={filteredItem.id}
            style={{ marginTop: "50px", marginLeft: "50px" }}
            onClick={() => handleTaste(filteredItem)}
          >
            <div className="menuImgBox">
              <img
                className="menuImg"
                src={filteredItem.img}
                alt={filteredItem.translation}
              />
            </div>
            <div className="menuName">{filteredItem.translation}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Taste;
