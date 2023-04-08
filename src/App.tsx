import React, { useState } from "react";
import Header from "./component/Header/Header";
import Home from "./component/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Join from "./component/Login/Join";
import Login from "./component/Login/Login";
import MyPage from "./component/MyPage/MyPage";
import Editor from "./component/Editor/Editor";

function App() {
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
