import React from "react";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Join from "./pages/Login/Join";
import Login from "./pages/Login/Login";
import MyPage from "./pages/MyPage/MyPage";
import Editor from "./pages/Editor/Editor";
import ShowAlbaData from "./pages/AlbaData/ShowAlbaData";
import MyPosting from "./pages/MyPage/MyPosting";

function App() {
  return (
    <BrowserRouter>
      <div className="mx-24 my-5 relative">
        <Header />
        <div className="">
          <Routes>
            <Route path=":userId/posting/:id" element={<ShowAlbaData />} />
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/login/join" element={<Join />} />
            <Route path=":userId/mypage" element={<MyPage />} />
            <Route path=":userId/mypage/:title" element={<MyPosting />} />
            <Route path="/editor" element={<Editor />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
