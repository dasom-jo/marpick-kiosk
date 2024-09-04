"use client"
import { eatOrGo, langChange } from "@/recoil/atoms/atoms";
import { useRouter } from "next/navigation";
import { useRecoilState, useRecoilValue } from "recoil";
import LocalMallIcon from '@mui/icons-material/LocalMall';
import FlatwareIcon from '@mui/icons-material/Flatware';
import "../OpenPage/OpenMain.scss"
import "../../app/globals.scss";
import { filterLanguage } from "@/recoil/selector/selectors";

//메뉴리스트:선택메뉴
//마지막멘트데이터 : 결제금액,먹/포,결제방법
//관리자데이터:날짜,총금액,결제방법
const OpenMain = () => {
    const router = useRouter();
    const [wantHere, setWantHere] = useRecoilState(eatOrGo);
    const [changeKR, setChangeKR] = useRecoilState(langChange);
    const translations = useRecoilValue(filterLanguage);

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

    const onChangeLang =(newLanguage:string)=>{
        setChangeKR(newLanguage)
        console.log(changeKR);
    }
    return (
        <>
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
                        {translations.takeOut}
                    </div>
                </div>
                <div id="ForHere" onClick={handleForHere}>
                    <FlatwareIcon
                        style={{fontSize:"200px",
                                marginLeft:'50px',
                                marginTop:"10px",
                                color:"white"}} />
                    <div className="ClickBtnText">
                        {translations.forHere}
                    </div>
                </div>
            </div>
            {changeKR === 'ko-KR'?
            <div id="ChangeBox">
            <div
                id="ChangeLanguage"
                onClick={()=>onChangeLang('en-US')}
                >ENGLISH</div>
            </div>
            :
            <div id="ChangeBox">
            <div
                id="ChangeLanguage"
                onClick={()=>onChangeLang('ko-KR')}
                >한국어</div>
        </div>
            }

        </>
    );
}

export default OpenMain;