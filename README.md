<img src="https://github.com/user-attachments/assets/2c54d62b-a53f-4c9a-87db-69807f116cc4" width="600" height="400" style="object-fit: cover;" />

# 마라  PICK

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
#### - 메뉴선택 페이지
#### - 원인

페이지를 넘길시 데이터가 순간 전체 데이터가 보였다가 사라진후 다음페이지로 이동하는 에러가 생겼습니다. 이유는 useEffect에서 데이터를 전부 호출후 조건에 맞는 데이터를 출력하는과정에서 화면에 호출된 데이터가 보이는걸로 추측되었습니다.

#### - 해결

데이터 출력을 selector 에서 각 조건별로 가공후 useEffect는 가공된 데이터만을 가지고 페이지를 넘길시 가공데이터를 출력하도록 하여서 에러가 사라졌으며 혹시 빈데이터 나 데이터 호출 에러가 생길경우를 대비해 빈배열을 출력하게하여 사용자입장에서 에러를 인지하지못하게하였습니다.

#### - 결제완료/실패페이지

#### - 원인
처음 해당페이지를 생성시 pages/api내부에서 작성하였으나 Next.js 구조적인 특성상 api 내부에서는 서버사이드를 동작하는 API라우트이기에 클라이언트 사이드페이지는 구현되지않았습니다.

#### -해결
NextApiRequest와 NextApiResponse를 이용하여Next.js의 pages/api에서는API Routes를 만들어 HTTP 요청과 응답을 처리하여 결제의 성공여부를 확인하고  app/pagement.tsx or pagementFail파일을 생성해 해당 페이지 구현하였습니다.

## 6. 개발 후기

처음진행하는 개인 프로젝트여서 기획부터 리팩토링까지 전부 컨트롤 하게되었지만 아직 부족한 실력으로 다사다나한 과정을 겪었습니다. next.js에대해 이해도도
   부족하여 트러블 슈팅이 만들어지며 예상보다 개발기간이 늦어졌지만 덕분에 많이 디버깅 과정과 기획 서류제작에대해 배울수있는 좋은 기회였고 무엇보다 많은 분량에 팀원들의 소중함을 알게되는 계기가되었습니다


## 7. 개선사항
- 더많은 결제기능 구현