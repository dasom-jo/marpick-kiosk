import { selector } from "recoil";
import { langChange } from "../atoms/atoms";
import en from '../../locales/en';
import ko from '../../locales/ko';
import { menuType } from "@/containers/SelectPage/type";
//오픈페이지의 한영을 변경하는 코드
export const filterLanguage = selector({
    key:"filterLanguage",
    get:({get})=>{
        const language = get(langChange)

        switch(language){
            case 'en-US':
                return en;
            case 'ko-KR':
                return ko;
            default:
                return ko;
        }
    }
})

export const dataState = selector<{
        menu: menuType[],
        meat: menuType[],
        other: menuType[],
        taste:menuType[] }>({
    key: 'dataState',
    get: async () => {
        try {
            const response = await fetch('/api/map');
            const result = await response.json();

            // result.menu, result.meat, result.other를 함께 반환
            return {
                menu: result.menu || [],  // 채소 데이터
                meat: result.meat || [],  // 고기 데이터
                other: result.other || [], // 기타 데이터
                taste: result.taste || [],//맛데이터
            };
        } catch (error) {
            console.error("Failed to fetch data", error);

            // 오류 발생 시 빈 배열 반환
            return {
                menu: [],
                meat: [],
                other: [],
                taste:[]
            };
        }
    },
});