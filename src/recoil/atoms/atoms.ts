import { atom } from "recoil";
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

export const langChange = atom<string>({
    key:"langChange",
    default:'ko-KR'
})