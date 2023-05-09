import React from "react";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Join from "./components/Join";
import Login from "./components/Login";
import MyPage from "./components/MyPage";
import Editor from "./components/Editor";
import ShowAlbaData from "./components/ShowAlbaData";
import MyPosting from "./components/MyPosting";

function App() {
  return (
    <BrowserRouter>
      <div className=" lg:mx-24 mt-10">
        <Header />
        <div>
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
