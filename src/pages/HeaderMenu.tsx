import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { signOut, getAuth } from "firebase/auth";
import { auth } from "../api/Firebase/FirebaseConfig";
import { logout } from "../store/modules/isLogin/isLoginAction";

const HeaderMenu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const navigate = useNavigate();

  const isLoggedIn: boolean = useSelector(
    (state: any) => state.isLogin.isLoginned
  );

  const dispatch = useDispatch();

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
    if (isLoggedIn == true) {
      const auth = getAuth();
      const currentUser: any = auth.currentUser;

      const userId: string = currentUser.uid;
      navigate(`${userId}/mypage`);
    } else {
      alert("로그인 후에 이용이 가능합니다.");
      navigate("/login");
    }
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
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="absolute top-0 right-0 lg:mx-24 lg:mt-10"
    >
      <h3 className=" font-semibold lg:text-lg">로그인/마이페이지</h3>
      {isOpen && (
        <div className="mt-4 bg-white rounded-lg shadow-lg text-center ">
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
  );
};

export default HeaderMenu;
