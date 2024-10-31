// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// 번역 리소스를 설정합니다.
const resources = {
  en: {
    translation: {
            takeOut: "Take Out",
            forHere: "For Here",
            ingredients : "Ingredients",
            pay : 'Pay',
            taste : "Taste",
            previous_step : "Previous Step",
            next_step : 'Next Step',
            vegetable : "Vegetable",
            meat : "Meat",
            other : "Other",
            Selected_menu:'Selected Menu',
            count:'Count',
            amount :'Amount',
            total_amount:'Total Amount',
            selectmodalment: 'has been added',
            selectedmodalment: 'has already been added',
            onlycard :'Only card payment is possible',
            success:"Payment has been completed successfully",
            Complete_payment:"Complete payment",
            Payment_failed :'Payment failed',
            again:"Please try again from the beginning.",
            back : 'back to beginning',
            amountpay:"amountpay"
    },
  },
  ko: {
    translation: {
            takeOut: "포장하기",
            forHere: "먹고가기",
            ingredients : "재료",
            taste : "맛",
            pay : '결제',
            previous_step : "이전단계",
            next_step : '다음단계',
            vegetable : "채소",
            meat : "고기",
            other : "기타",
            Selected_menu:'선택한 메뉴',
            count: '개수',
            amount : '금액',
            total_amount:'총액',
            selectmodalment: '이(가) 추가되었습니다',
            selectedmodalment: '이(가) 이미 추가되었습니다',
            onlycard :'카드결제만 가능합니다',
            success:"결제가 정상적으로 완료되었습니다",
            Complete_payment:"결제 완료하기",
            Payment_failed:'결제가 실패하였습니다',
            again:"처음부터 다시해주시길 바랍니다",
            back:"처음으로 돌아가기",
            amountpay:"총액"
    },
  },
};

// i18n을 초기화합니다.
i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'ko', // 기본 언어 설정
    fallbackLng: 'en', // 지원하지 않는 언어일 경우 사용할 언어
    interpolation: {
      escapeValue: false, // React는 자동으로 escaping을 처리하므로 설정하지 않음
    },
  });

export default i18n;
