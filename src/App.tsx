import React, { useEffect, useState } from "react";
import Header from "./component/Header/Header";
import Home from "./component/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Join from "./component/Login/Join";
import Login from "./component/Login/Login";
import MyPage from "./component/MyPage/MyPage";
import Editor from "./component/Editor/Editor";

// import { firestore } from "./Firebase/FirebaseConfig";
// import { collection, getDocs } from "firebase/firestore";

function App() {
  // const [test, setTest] = useState([]);
  // const usersCollectionRef = collection(firestore, "posting");
  // useEffect(() => {
  //   // 비동기로 데이터 받을준비
  //   const getUsers = async () => {
  //     // getDocs로 컬렉션안에 데이터 가져오기
  //     const data = await getDocs(usersCollectionRef);
  //     console.log(data);
  //   };

  //   getUsers();
  // }, []);
  return (
    <BrowserRouter>
      <div className="mx-24 my-5 relative">
        <Header />
        <div className="">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/login/join" element={<Join />} />
            <Route path="/mypage" element={<MyPage />} />
            <Route path="/editor" element={<Editor />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
