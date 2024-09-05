
import { foodType } from "@/components/list/type";
import { menuType } from "@/containers/SelectPage/type";
import { atom, useRecoilValue } from "recoil";
import { filterLanguage } from "../selector/selectors";

//포장유무 상태관리
export const eatOrGo = atom({
    key:"eatOrGo",
    default:["","",""]
})

//이전,다음단계 버튼 클릭시 현재위치 알려주는 상태관리
export const countIcon = atom<number>({
    key:"countIcon",
    default:0
})

//한영변환
export const langChange = atom<string>({
    key:"langChange",
    default:'ko-KR'
})

//재료 페이지 전환 상태관리
export const ingredientNumber = atom<number>({
    key:"ingredientNumber",
    default:1
})

//추가한 음식 리스트 상태관리
export const foodList = atom<foodType[]>({
    key: 'foodList',
    default: [],
});
//맛 선택 상태관리
export const tasteList = atom<string>({
    key: 'tasteList',
    default: "",
});
//총금액 상태관리
export const totalPay = atom<string>({
    key: 'totalPay',
    default: "",
});