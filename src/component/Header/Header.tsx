import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { signOut } from "firebase/auth";
import { auth } from "../../Firebase/FirebaseConfig";
import { logout } from "../../redux/modules/isLogin/isLoginAction";

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state: any) => state.isLogin.isLoginned);

  const onHandleLogo = () => {
    navigate("/");
  };

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  const onHandleClickLogin = () => {
    navigate("/login");
  };

  const onHandleClickMyPage = () => {
    navigate("/mypage");
  };

  const onHandleClickLogout = async () => {
    try {
      await signOut(auth);
      alert("로그아웃되었습니다");
      dispatch(logout());
    } catch (error) {
      console.log(error);
      alert("로그아웃 중 에러가 발생했습니다");
    }
  };

  return (
    <div className="flex justify-between text-center z-10">
      <header>
        <h1
          onClick={onHandleLogo}
          className="font-extrabold text-3xl cursor-pointer"
        >
          위드알바
        </h1>
      </header>

      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="absolute right-0"
      >
        <h3>로그인/마이페이지</h3>
        {isOpen && (
          <div className="mt-4 bg-white rounded-lg shadow-lg">
            <ul>
              <li className="py-2 hover:bg-cyan-100 hover:text-white">
                {isLoggedIn ? (
                  <h4 className="font-medium" onClick={onHandleClickLogout}>
                    로그아웃
                  </h4>
                ) : (
                  <h4 className="font-medium" onClick={onHandleClickLogin}>
                    로그인
                  </h4>
                )}
              </li>
              <li className="py-2 border-t hover:bg-cyan-100 hover:text-white">
                <h4 className="font-medium" onClick={onHandleClickMyPage}>
                  마이페이지
                </h4>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
