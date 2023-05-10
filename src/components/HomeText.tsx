import React from "react";

const HomeText = () => {
  return (
    <div className="flex flex-col text-center h-1/4 w-full">
      <h5 className="font-extrabold lg:text-xl lg:mt-10 sm:text-base">
        전국에 알바 찾는 사람 모여요!
      </h5>
      <span className="mt-10  lg:text-lg sm:text-sm">
        10대 후반부터 24세까지의 '청소년'층이 할 수 있는 아르바이트를
        찾아보아요!
      </span>
      <span className="mt-3 lg:text-lg sm:text-sm">
        여러분의 갓생과 좋은 일자리, 성공을 기원합니다.
      </span>
    </div>
  );
};

export default HomeText;
