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
    <div className="absolute bottom-0 right-0 mb-10 lg:mr-24">
      <button
        className="rounded-full bg-red-200 text-white border-pink-300 border-2 z-30 lg:w-20 lg:h-20 lg:text-5xl w-10 h-10 text-2xl"
        onClick={onHandleClickPlus}
      >
        +
      </button>
    </div>
  );
};

export default RouteEditor;
