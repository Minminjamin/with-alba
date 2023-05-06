import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const RouteEditor = () => {
  const navigate = useNavigate();

  const isLoggedIn = useSelector((state: any) => state.isLogin.isLoginned);
  //스토어에서 isLoginReducer을 isLogin라고 정의했기 때문에 isLogin이라고 써야한다.

  const onHandleClickPlus = () => {
    if (isLoggedIn == false) {
      alert("로그인 후에 이용이 가능합니다.");
      navigate("/login");
      return;
    }
    if (isLoggedIn == true) {
      navigate("/editor");
      return;
    }
  };
  return (
    <div className="absolute bottom-0 right-0 mb-10 mr-10">
      <button
        className="rounded-full w-20 h-20 bg-red-200 text-5xl text-white border-pink-300 border-2 z-30"
        onClick={onHandleClickPlus}
      >
        +
      </button>
    </div>
  );
};

export default RouteEditor;
