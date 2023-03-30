import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./component/Header/Header";
import Home from "./component/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
