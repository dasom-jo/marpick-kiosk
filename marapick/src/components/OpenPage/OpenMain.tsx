"use client"
import { eatOrGo } from "@/recoil/atoms/atoms";
import { useRouter } from "next/navigation";
import { useRecoilState } from "recoil";
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
    }
    const handleForHere = () =>{;
        const updatedState = [...wantHere];
        updatedState[0] = "ForHere"
        setWantHere(updatedState);
    }
    return (
        <>
            <h1>마라 PICK
                <div></div>
            </h1>
            <div onClick={handleTakeOut}>포장하기</div>
            <br/>
            <div onClick={handleForHere}>먹고가기</div>
            <div>english</div>
        </>
    );
}

export default OpenMain;