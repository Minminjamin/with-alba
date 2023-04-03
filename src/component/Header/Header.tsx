import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = ({ isLogin }: { isLogin: boolean }) => {
  const navigate = useNavigate();

  const onHandleLogo = () => {
    navigate("/");
  };

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  const onHandleClickLogin = () => {
    navigate("/login");
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
                {isLogin ? (
                  <h4 className="font-medium">로그아웃</h4>
                ) : (
                  <h4 className="font-medium" onClick={onHandleClickLogin}>
                    로그인
                  </h4>
                )}
              </li>
              <li className="py-2 border-t hover:bg-cyan-100 hover:text-white">
                <h4 className="font-medium">마이페이지</h4>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
