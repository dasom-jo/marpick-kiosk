<img src="https://github.com/user-attachments/assets/2c54d62b-a53f-4c9a-87db-69807f116cc4" width="600" height="400" style="object-fit: cover;" />

# 마라  PICK
https://github.com/user-attachments/assets/fc711949-519d-4f5b-bd43-d655a9db763f

## 1. 프로젝트 목표

Next.js의 서버 와 클라이어트에대한 이해와 recoil을 이용한 상태관리를 목표로
마라탕 을 주제로한 키오스크 개발

## 3. 개발 환경

<img src="https://img.shields.io/badge/HTML5-E34F26.svg?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5 Badge" /> <img src="https://img.shields.io/badge/React-20232A.svg?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React.js Badge" /> <img src="https://img.shields.io/badge/TypeScript-007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript Badge" /> <img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=javascript&logoColor=20232A" alt="JavaScript Badge" /> <img src="https://img.shields.io/badge/SCSS-CC6699.svg?style=for-the-badge&logo=sass&logoColor=white" alt="SCSS Badge" /> <img src="https://img.shields.io/badge/Next.js-000000.svg?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js Badge" /> <img src="https://img.shields.io/badge/MySQL-4479A1.svg?style=for-the-badge&logo=mysql&logoColor=white" alt="MySQL Badge" /> <img src="https://img.shields.io/badge/GitHub-181717.svg?style=for-the-badge&logo=github&logoColor=white" alt="GitHub Badge" />

## 3. 주요 기능

### [포장페이지]

- 헤더
- 포장하기/먹고가기 버튼
- 한/영버전 버튼
- 관리자페이지 버튼

<table>
  <tr>
    <td>키오스크예시</td>
    <td><img src="https://github.com/user-attachments/assets/74029cd3-39e6-4aac-a01a-33f1eb722df8" width="500" height="500" style="object-fit: cover;" /></td>
  </tr>
  <tr>
    <td>포장페이지</td>
    <td><img src="https://github.com/user-attachments/assets/acd9c39e-9b5d-4bce-927b-bfb6c7cbd5d7" width="500" height="500" style="object-fit: cover;" /></td>
  </tr>
</table>

### [메뉴선택페이지]

- 현재위치아이콘표시
- 재료및 맛선택(페이지네이션)
- 내가 고른 음식 리스트
- 이전 OR 다음단계 이동 버튼
- 음식 추가시 모달창
- 음식 추가 삭제가능

<table>
  <tr>
    <td>재료페이지</td>
    <td><img src="https://github.com/user-attachments/assets/9dfe9521-b5be-412b-b3ab-7b16c24025b2" width="500" height="700" style="object-fit: cover;" /></td>
  </tr>
  <tr>
    <td>맛페이지</td>
    <td><img src="https://github.com/user-attachments/assets/71770a17-2bba-4e9b-a228-143bd0b13741" width="500" height="700" style="object-fit: cover;" /></td>
  </tr>
</table>

### [결제페이지]

- 내가 고른 리스트 확인가능
- 결제버튼
- 이전페이지 이동 버튼

<table>
  <tr>
    <td>결제페이지</td>
    <td><img src="https://github.com/user-attachments/assets/aa77b1c8-312a-4dd7-9b27-b9748acea2df" width="500" height="700" style="object-fit: cover;" /></td>
  </tr>
  <tr>
    <td>토스 결제 페이지</td>
    <td><img src="https://github.com/user-attachments/assets/91540c28-7d78-40c6-aa1f-d5bf750b1168" width="500" height="700" style="object-fit: cover;" /></td>
  </tr>
</table>

### [결제완료/실패페이지]

- 결제 성공,실패유무 확인 페이지
- 첫페이지로 돌아가는 버튼

<table>
  <tr>
    <td>결제성공 페이지</td>
    <td><img src="https://github.com/user-attachments/assets/4bf02cf2-6271-4e6f-b855-88f48922c568" width="500" height="700" style="object-fit: cover;" /></td>
  </tr>
  <tr>
    <td>토스 결제실패 페이지</td>
    <td><img src="https://github.com/user-attachments/assets/65971f2d-b07b-4d58-9588-c4fb8ef7b74e" width="500" height="700" style="object-fit: cover;" /></td>
  </tr>
</table>

## 4. 구조

```
src
├─app
│  ├─api
│  │  ├─auth
│  │  └─map
│  ├─managelogin
│  ├─menu
│  ├─payment
│  ├─paymentfail
│  └─saleslist
├─components
│  ├─header
│  ├─ingredientBtn
│  ├─list
│  ├─location
│  ├─locationBtn
│  └─vegetableMeatOther
├─containers
│  ├─ManagePage
│  ├─OpenPage
│  ├─PayPage
│  └─SelectPage
├─contexts
├─hooks
├─img
├─lib
├─locales
│  ├─en
│  └─ko
├─pages
│  └─api
│      ├─auth
│      ├─managerpage
│      └─menu
├─recoil
│  ├─atoms
│  └─selector
├─services
├─styles
├─types
└─utils
```

## 5. 트러블 슈팅

### 💛**데이터 페이징 에러 해결**

- **원인**

    페이지 전환 시 데이터가 순간적으로 전체 표시되었다가 사라진 후 새로운 페이지 데이터가 나타나는 문제가 발생했습니다. 이는 `useEffect`에서 모든 데이터를 호출 후 조건에 따라 데이터를 필터링하는 과정에서, 전체 데이터가 화면에 일시적으로 표시된 것으로 추정되었습니다.

- **해결**

    데이터를 `selector`에서 조건별로 미리 가공하여 `useEffect`는 가공된 데이터만을 사용하도록 설정했습니다. 페이지 전환 시 필터링된 데이터만 출력하도록 함으로써 에러를 해결했으며, 빈 배열을 출력하는 방어 코드를 추가하여 데이터가 비어있거나 호출에 실패한 경우 사용자에게 오류가 노출되지 않도록 처리했습니다.

- **알게 된 점**

    데이터를 미리 가공하여 필요한 조건에 맞게 필터링된 데이터를 사용하는 것은 성능과 사용자 경험을 모두 개선할 수 있는 방법임을 배웠습니다. 또한, 에러 핸들링을 통해 사용자에게 안정적인 화면을 제공하는 것이 중요함을 깨달았습니다.



### 💛**클라이언트 사이드 페이지 구현 문제 해결**

- **원인**

    페이지 생성 시 `pages/api` 내부에 작성하여, Next.js의 API Routes 특성 상 서버 사이드에서만 작동하고 클라이언트 사이드 페이지가 구현되지 않는 문제가 있었습니다.

- **해결**

    `NextApiRequest`와 `NextApiResponse`를 활용하여 `pages/api`에서 API Routes를 통해 결제 성공 여부를 처리하는 API를 구축했습니다. 클라이언트 사이드 페이지는 `app/payment.tsx` 및 `paymentFail.tsx` 파일로 분리하여 각각의 결제 상태를 처리하는 페이지를 구현했습니다.

- **알게 된 점**

    Next.js의 구조적 특성에 따라 서버와 클라이언트의 역할을 명확히 구분하는 것이 중요함을 배웠습니다. 또한, API Routes와 클라이언트 사이드 페이지를 분리해 동작을 명확히 하면 개발 과정에서 혼란을 줄이고 더 안정적인 결과를 얻을 수 있음을 깨달았습니다.



## 6.리팩토링

- **이유:**  초기에 한/영 변환을 위해 Recoil을 사용하여 애플리케이션 내에서 한글과 영어 문장을 각각 번역해 관리하였습니다.

    그러나 이후  React를 학습하면서, react-i18next  같은 라이브러리들이 적합하다는 것을 알게 되었습니다. 이를 통해 다국어 지원을 최적화하고, 번역 관리의 복잡성을 줄일 수 있어 해당 방식을 적용한 리팩토링을 결정하게 되었습니다.

- **결과:**   react-i18next를 적용함으로써 애플리케이션의 다국어 지원이 더욱 원활해졌습니다. 사용자는 언어를 전환할 때 페이지를 새로 고침하지 않고도 변경된 언어를 즉시 확인할 수 있게 되었으며, 번역 파일을 별도로 관리하여 코드의 복잡성도 줄어들었습니다. 또한, 특정 페이지나 컴포넌트에서만 필요한 번역 파일을 로드하도록 설정해 로딩 속도가 향상되었습니다. 이로 인해 전반적인 사용자 경험과 유지보수 효율성 또한 크게 향상되었습니다.
- **알게 된 점 :**

    **1. 실시간 언어 전환 기능:**

    `react-i18next`를 통해 페이지 새로 고침 없이 실시간으로 언어 전환이 가능해져, 사용자 경험이 크게 향상되었습니다.

    **2. 번역 파일 독립적 관리:**

    번역 파일을 개별적으로 관리하면서 코드의 복잡성이 줄고, 새로운 번역 추가 및 수정이 훨씬 간편해졌습니다.

    **3. 필요 컴포넌트별 번역 로드:**

    특정 컴포넌트에서 필요한 번역만 로드하여 성능을 최적화하고, 로딩 속도를 개선할 수 있음을 알게 되었습니다.



### ♥️리팩토링&트러블 슈팅

- **문제**: TypeError: i18n.changeLanguage is not a function 라는 에러는  `i18n` 인스턴스에 `changeLanguage` 함수가 정의되지 않아 생기는 에러로 추측됩니다.
- **해결**:`i18n`을 `PaymentPage`에서 직접 임포트하고, `i18n.changeLanguage(savedLang)`을 호출하여 언어를 변경합니다.
- 알게 된 점 :

    **i18n 인스턴스 직접 사용의 중요성**

    react-i18next에서는i18n인스턴스를 직접 임포트하여 사용하는 방식이 필요할 수 있음을 알게 되었습니다. 이를 통해 언어 변경 기능을 보다 안정적으로 구현할 수 있었습니다.



## 7. 개발 후기

처음진행하는 개인 프로젝트여서 기획부터 리팩토링까지 전부 컨트롤 하게되었지만 아직 부족한 실력으로 다사다나한 과정을 겪었습니다. next.js에대해 이해도도
   부족하여 트러블 슈팅이 만들어지며 예상보다 개발기간이 늦어졌지만 덕분에 많이 디버깅 과정과 기획 서류제작에대해 배울수있는 좋은 기회였고 무엇보다 많은 분량에 팀원들의 소중함을 알게되는 계기가되었습니다
