"use client"
import { eatOrGo } from "@/recoil/atoms/atoms";
import { useRouter } from "next/navigation";
import { useRecoilState } from "recoil";
import LocalMallIcon from '@mui/icons-material/LocalMall';
import FlatwareIcon from '@mui/icons-material/Flatware';
import Header from "@/components/header/Header";
import "../OpenPage/OpenMain.scss"
//메뉴리스트:선택메뉴
//마지막멘트데이터 : 결제금액,먹/포,결제방법
//관리자데이터:날짜,총금액,결제방법
const OpenMain = () => {
    const router = useRouter();
    const [wantHere, setWantHere] = useRecoilState(eatOrGo);

    const handleTakeOut = () =>{
        const updatedState = [...wantHere];
        updatedState[0] = "TakeOut"
        setWantHere(updatedState);
        router.push("/menu")
    }
    const handleForHere = () =>{;
        const updatedState = [...wantHere];
        updatedState[0] = "ForHere"
        setWantHere(updatedState);
        router.push("/menu")
    }
    return (
        <>
            <Header/>
            <div className="ClickBtn">
                <div id="TakeOut" onClick={handleTakeOut}>
                    <div className="Icon" >
                        <LocalMallIcon
                            style={{fontSize:"200px",
                                marginLeft:'50px',
                                marginTop:"10px",
                                color:"white"}}/>
                    </div>
                    <div className="ClickBtnText">
                        포장하기
                    </div>
                </div>
                <div id="ForHere" onClick={handleForHere}>
                    <FlatwareIcon
                        style={{fontSize:"200px",
                                marginLeft:'50px',
                                marginTop:"10px",
                                color:"white"}} />
                    <div className="ClickBtnText">
                        먹고가기
                    </div>
                </div>
            </div>
            <div id="ChangeBox">
                <div id="ChangeLanguage" >ENGLISH</div>
            </div>

        </>
    );
}

export default OpenMain;