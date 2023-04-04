import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  // absolute bottom-0 right-0 mb-10 mr-10

  const onHandleClickPlus = () => {
    navigate("/editor");
  };

  return (
    <div className="text-center h-screen">
      <div className="flex flex-col items-center h-1/2">
        <h5 className=" font-extrabold text-xl">
          전국에 알바 찾는 사람 모여요!
        </h5>
        <span className="mt-10">
          10대 후반부터 24세까지의 '청소년'층이 할 수 있는 아르바이트를
          찾아보아요!
        </span>
        <span className="mt-3">
          여러분의 갓생과 좋은 일자리, 알바 구직 성공을 기원합니다.
        </span>
      </div>

      <div className="absolute bottom-0 right-0 mb-10 mr-10">
        <button
          className="rounded-full w-20 h-20 bg-red-200 text-5xl text-white border-pink-300 border-2 z-30"
          onClick={onHandleClickPlus}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Home;
