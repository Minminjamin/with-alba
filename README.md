# 🔍 With_Alba : 청소년들이 근무 가능한 알바처를 찾을 수 있는 웹 서비스, 위드알바입니다.

![untitled@2x](https://github.com/Minminjamin/with-alba/assets/122540708/7cbc321d-05ff-428f-966e-75ef70b511bb)

| | test account |
|-- | |
| ID | test123 |
| PassWord | testtest123 |

# 👉🏻 위드알바란?

## 💡 **배경 및 목적**

20대 이상의 성인은 비교적 쉽게 알바를 구할 수 있지만, 10대 청소년은 법적 제약과 사회적 인식으로 인해 알바 구직에 어려움을 겪습니다. 이러한 문제점을 보완하고 10대 후반부터 20대 초반의 청소년이 쉽게 알바 구직을 할 수 있도록 하는 것을 목표로 합니다

## 💡 **서비스 개요**

위드알바는 청소년들이 쉽게 알바 구인 정보를 찾을 수 있는 플랫폼으로, 청소년 고객이 알바 구인 정보를 등록하면 청소년 구직자들은 해당 정보를 검색하여 적합한 알바를 찾을 수 있습니다.

이러한 위드알바 서비스를 통해 청소년들이 쉽게 알바를 구할 수 있도록 돕고, 청소년들의 경제적 자립을 지원하여 성장과 발전에 기여하고자 합니다.

- 법정 청소년은 만 9세부터 만 24세로 정의하고 있지만 법에 따라 만 15세 이상, 의무교육 대상자가 아닌자, 이 두 가지 조건을 모두 충족하는 사람들을 타켓으로 삼고 있습니다.

# 🛠️ Tech Stack

## 🔨Front-End

- React
- Typescript
- tailwindcss
- Redux

## 🔨Back-End

- Firebase Authentication
- Firebase Firestore Database
- LocalStorage

# 📂 디렉토리 구조

📦src
┣ 📂api
┃ ┣ 📂Firebase
┃ ┃ ┗ 📜FirebaseConfig.ts
┣ 📂asset
┃ ┣ 📂img
┣ 📂conponents
┃ ┃ ┣ 📜HeaderMenu.tsx
┃ ┃ ┣ 📜HomeText.tsx
┃ ┃ ┗ 📜RouteEditor.tsx
┣ 📂hooks
┃ ┃ ┣ 📜useDetailData.ts
┃ ┃ ┗ 📜useInput.ts
┣ 📂pages
┃ ┃ ┣ 📜AlbaData.tsx
┃ ┃ ┣ 📜AllAlbaCard.tsx
┃ ┃ ┣ 📜FormInput.tsx
┃ ┃ ┣ 📜FormTextArea.tsx
┃ ┃ ┣ 📜Nodata.tsx
┃ ┃ ┣ 📜PostingCard.tsx
┃ ┃ ┗ 📜SearchMap.tsx
┣ 📂routes
┃ ┃ ┣ 📜Editor.tsx
┃ ┃ ┣ 📜Header.tsx
┃ ┃ ┣ 📜Home.tsx
┃ ┃ ┣ 📜Join.tsx
┃ ┃ ┣ 📜Login.tsx
┃ ┃ ┣ 📜MyPage.tsx
┃ ┃ ┣ 📜MyPosting.tsx
┃ ┃ ┗ 📜ShowAlbaData.tsx
┣ 📂store
┃ ┣ 📂config
┃ ┃ ┗ 📜ShowAlbaData.tsxindex.ts
┃ ┣ 📂modules
┃ ┃ ┣ 📜isLogin
┃ ┃ ┣ 📜isLoginAction.ts
┃ ┃ ┗ 📜isLoinReducer.ts
┃ ┣ 📜App.tsx
┃ ┣ 📜index.tsx
┗ ┗ 📜index.css

## 📂api

- 사용되는 api를 모아놓은 디렉토리입니다.

## 📂asset

- 이미지를 모아놓은 디렉토리입니다.

## 📂components

- 재사용이 불가능하고 단일로 사용되는 컴포넌트들을 모아놓은 디렉토리입니다.

## 📂hooks

- 커스텀 훅을 모아둔 디렉토리입니다.

## 📂pages

- 재사용이 가능한 컴포넌트들을 모아둔 디렉토리입니다.

## 📂routes

- 실제 라우팅되는 컴포넌트들을 모아둔 디렉토리입니다.

## 📂store

- redux에서 사용되는 리듀서와 액션을 정의한 파일을 모아둔 디렉토리입니다.

# 📄 Pages

## 📄 공통

- 모든 화면은 반응형으로 설계했습니다.
- 헤더(Header)은 어느 페이지든 항상 상단에 위치합니다
- 입력을 받는 모든 페이지는 placeholder을 통해 ‘00를/을 입력해주세요.’메세지를 출력합니다. 모든 페이지에 입력이 다 되야만 버튼을 눌려서 이동할 수 있습니다.

## 📄 Home

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/5b8d0afe-e5b6-4aa2-be3a-0d6c75b52389/Untitled.png)

- 제일 처음 접속되는 페이지 입니다.
- Header에서 오른쪽 상단의 로고를 클릭하면 항상 이 페이지로 이동합니다.
- Header의 왼쪽 상단의 메뉴에 마우스를 올리면(hover) 로그인/마이페이지가 슬라이딩 됩니다. 슬라이드 메뉴에서 로그인 여부에 따라 로그인/로그아웃 메뉴가 결정되며 로그인 여부는 리덕스(Redux)로 관리합니다. 로그인을 클릭할 경우 로그인 페이지로, 마이페이지를 클릭할 경우 마이페에지 페이지로 이동하며 로그인이 되어있지 않을 시 로그인 페이지로 이동합니다. 로그 아웃 버튼을 누른다면 로그아웃과 동시에 로컬스토리지(Localstorage)에 있는 로그인 값들이 삭제됩니다.
- 중앙의 알바 목록에서는 모든 위드알바에 있는 모든 데이터를 출력합니다. 목록을 클릭시 해당 알바 공고의 상세 모집 요강을 확인할 수 있습니다.
- 오른쪽 하단의 + 버튼을 클릭하면 글쓰기(Editor)페이지로 이동합니다.

## 📄 알바 공고 상세 보기

![알바 공고 상세 보기](https://github.com/Minminjamin/with-alba/assets/122540708/a7dc97d5-9279-4e7d-b4ec-781139fe6bb5)

- Home 페이지에 있는 알바 공고를 클릭하면 해당 공고의 상세 정보를 볼 수 있는 페이지입니다.
- Kakao Map API를 통해 알바 장소를 확인할 수 있습니다.
- 체크박스에 ‘확인’기능이 있습니다.
- 체크박스에 체크해야만 지원하기 버튼을 눌러서 정상적으로 지원할 수 있습니다.

## 📄 로그인

![로그인](https://github.com/Minminjamin/with-alba/assets/122540708/74b58c3a-f1a9-4606-bcf4-8e3e18f9038e)

- 로그인이 페이지입니다.
- 로그인 버튼을 클릭 시 로그인이 되며 리덕스는 로그인 상태로 업데이트됩니다. 새로 고침해도 로그인이 유지될 수 있도록 로컬 스토리지에 아이디(Id)와 비밀번호(Password)를 저장합니다.
- 회원가입을 클릭하면 회원가입 페이지로 이동합니다.

## 📄회원가입

![회원가입](https://github.com/Minminjamin/with-alba/assets/122540708/6bb7689b-1070-4673-8af7-0f297b7c20a6)

- 회원가입 페이지입니다.
- 비밀번호와 비밀번호 확인 form에 입력받은 값이 동일한지 확인합니다.
- 회원가입 버튼을 클릭 시 회원정보는 데이터베이스에 저장되며 이전 페이지로 이동합니다.

## 📄 글쓰기

![글쓰기](https://github.com/Minminjamin/with-alba/assets/122540708/728c0b78-17d6-435b-bd5a-ecf99015ed65)

- 알바 공고를 쓰는 글쓰기 페이지 입니다.
- 로그인 상태여만 접근이 가능한 페이지입니다.
- 주소를 입력하고 검색 버튼을 클릭 시 Kakao Map API를 통해 위치 출력이 가능합니다.
- 자격 요건과 담당 업무, 우대 사항은 textarea를 통해 긴 내용을 입력할 수 있습니다.
- 업로드 버튼을 클릭하면 Home 페이지로 이동함과 동시에 알바 공고는 데이터베이스에 저장됩니다.

## 📄 마이페이지

![마이페이지](https://github.com/Minminjamin/with-alba/assets/122540708/b2b47278-0e47-48ad-aff2-c61b88a9834e)

- 마이페이지입니다.
- 로그인 상태여만 접근이 가능한 페이지입니다.
- 중앙의 알바 목록에서는 사용자 본인이 작성한 모든 데이터를 출력합니다. 목록을 클릭 시 해당 알바 공고의 상세 모집 요강을 확인할 수 있습니다.

## 📄 내가 쓴 글 확인

![내가 쓴 글 확인](https://github.com/Minminjamin/with-alba/assets/122540708/732a5891-d8a0-49a9-b6fa-d89316658291)

- 내가 쓴 글을 확인할 수 있는 페이지입니다.
- 로그인 상태여만 접근이 가능한 페이지입니다.
- Kakao Map API를 통해 알바 장소를 확인할 수 있습니다.
- ‘삭제하기’ 버튼을 클릭 시 글을 데이터베이스에서 삭제할 수 있습니다.
