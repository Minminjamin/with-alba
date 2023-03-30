import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const onHandleLogo = () => {
    navigate("/");
  };

  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };
  return (
    <div>
      <header>
        <h1 onClick={onHandleLogo}>위드알바</h1>
      </header>

      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <span>My Page</span>
        {isOpen && (
          <div>
            <ul>
              <li>
                <h4>로그인</h4>
              </li>
              <li>
                <h4>마이페이지</h4>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
