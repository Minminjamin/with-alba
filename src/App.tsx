import React from "react";
import Header from "./component/Header/Header";
import Home from "./component/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Join from "./component/Login/Join";

function App() {
  return (
    <BrowserRouter>
      <div className="mx-24 my-5 relative">
        <Header />
        <div className="">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login/join" element={<Join />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
