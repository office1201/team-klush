# 🚀 프로젝트 소개

## 1. 프로젝트명
KLUSH (React와 Django를 이용한 LUSH 사이트 클론 프로젝트)

## 2. 팀원

Front-end
: 정새미, 김희열, 김태현

Back-end
: 김현영, 이병재, 황수민

## 3. 프로젝트 기간
2021.04.12 ~ 2021.04.23

## 4. 시연 영상
https://youtu.be/B32hsgJaz10

# 🎯 기술 스택

## Front-end
* HTML/CSS
* JavaScript
* React
* SCSS

## Back-end
* Python 
* Django
* bcrypt
* pyjwt
* MySQL
* AqueryTool
* AWS EC2
* AWS RDS

## Communication Tools
* Slack
* GitHub
* Trello

# 💡 기능구현

## Front-end

### 메인 페이지
* 캐러셀 (이미지 배너)
* 캐러셀 (추천 상품)

### 네비게이션 바
* 메뉴탭

### 장바구니
* 상품 추가 기능
* 각 상품 수량 변경 기능

### 상품 리스트 페이지 
* 라벨링 기능
* 가격순 정렬 기능
* 동적라우팅

### 상품 디테일 페이지 
* 수량 조절 기능
* 상품 정보 탭 기능
* 제품 이미지 선택 기능

## Back-end

### 모델링
- AqueryTool을 이용한 ERD 작성

### 엔드포인트 구현

#### 김현영
- 메인 페이지 Nav바 카테고리 데이터 전달 
- 메인 페이지 상품 리스트 데이터 전달  
- 상품 페이지 카테고리 별 상품 데이터 전달
  - Query Parameter를 사용하여 검색, 정렬, 필터 기능 구현

#### 황수민
- 회원가입: 정규표현식 작성하여 조건 부여, 비밀번호 암호화
- 로그인: 토큰 발행, 로그인 데코레이터
- 댓글 CRUD
- 장바구니 CRUD

#### 이병재
- 제품 상세 페이지 상품 데이터 전달
- 제품에 별점 부여,출력 데이터 전달
- 장바구니 CRUD 코드 리팩토링

### 배포
- AWS EC2에 가상환경 구축하여 프로젝트 배포
- AWS RDS에 데이터베이스 구축

# References
- 이 프로젝트는 [러쉬 코리아](https://lush.co.kr/main/index.php)를 참고하여 학습목적으로 만들었습니다.
- 이 프로젝트에서 사용한 이미지는 모두 [unsplashed](https://unsplash.com/)에서 가져온 이미지입니다.

