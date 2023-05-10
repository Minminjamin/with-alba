import React from "react";
import SearchMap from "./SearchMap";

const AlbaData = ({ data }: any) => {
  //간접적으로 접근하도록 수정
  // px-10 py-20
  return (
    <div className="space-y-8 flex flex-col sm:flex-row sm:mx-3 sm:items-center">
      <img src={require("../../src/asset/img/basicImg.png")} />
      <div className="w-full">
        <h6 className="text-lg font-bold">제목</h6>
        <span className="mt-3 block">{data.title}</span>
      </div>

      <div className="w-full">
        <h6 className="text-lg font-bold">모집 연령층</h6>
        <span className="mt-3 block">{data.age}</span>
      </div>

      <div className="w-full">
        <h6 className="text-lg font-bold">자격 요건</h6>
        <span className="mt-3 block">{data.qualification}</span>
      </div>

      <div className="w-full">
        <h6 className="text-lg font-bold">담당 업무</h6>
        <span className="mt-3 block">{data.responsibility}</span>
      </div>

      <div className="w-full">
        <h6 className="text-lg font-bold">우대 사항</h6>
        <span className="mt-3 block">{data.preference}</span>
      </div>

      <div className="w-full">
        <h6 className="text-lg font-bold">마감일</h6>
        <span className="mt-3 block">{data.deadline}</span>
      </div>

      <div className="w-full">
        <h6 className="text-lg font-bold">위치</h6>
        <SearchMap data={data} address={data.srting} />
        <span className="mt-3 block">
          {data.address} {data.detailAddress}
        </span>
      </div>
    </div>
  );
};

export default AlbaData;
