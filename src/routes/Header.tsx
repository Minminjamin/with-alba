import { useNavigate } from "react-router-dom";
import HeaderMenu from "../components/HeaderMenu";

const Header = () => {
  const navigate = useNavigate();

  const onHandleLogo = () => {
    navigate("/");
  };

  return (
    <div className="fixed w-full flex justify-between items-center">
      <h1
        onClick={onHandleLogo}
        className="font-extrabold lg:text-3xl cursor-pointer text-xl "
      >
        위드알바
      </h1>

      <HeaderMenu />
    </div>
  );
};

export default Header;
