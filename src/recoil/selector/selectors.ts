import { selector } from "recoil";
import { langChange } from "../atoms/atoms";
import en from '../../locales/en';
import ko from '../../locales/ko';
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