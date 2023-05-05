import { useNavigate } from "react-router-dom";
import HeaderMenu from "../../pages/HeaderMenu";

const Header = () => {
  const navigate = useNavigate();

  const onHandleLogo = () => {
    navigate("/");
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

      <HeaderMenu />
    </div>
  );
};

export default Header;
