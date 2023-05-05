import React from "react";

const Nodata = () => {
  return (
    <div className="flex justify-center flex-col text-center space-y-5 mt-36">
      <span className="w-full">데이터가 없습니다.</span>
      <span className="w-full font-bold text-red-600">잠시 기다려주세요.</span>
      <span className="w-full">
        그래도 데이터가 나타나지 않으면 새로고침을 해주세요.
      </span>
    </div>
  );
};

export default Nodata;
