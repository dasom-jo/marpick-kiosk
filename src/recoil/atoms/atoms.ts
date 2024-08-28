import { atom } from "recoil";
//포장유무 상태관리
export const eatOrGo = atom({
    key:"eatOrGo",
    default:["","",""]
})

//단계버튼을 누르면 색을 변화시키는 상태관리
export const colorIcon = atom({
    key:"colorIcon",
    default:'black'
})