import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { firestore } from "../../api/Firebase/FirebaseConfig";
import { deleteDoc, doc, getDoc } from "@firebase/firestore";
import useDetailData from "../../hooks/useDetailData";
import SearchMap from "../SearchMap";

const MyPosting = () => {
  const { userId, title } = useParams<any>();
  const navigate = useNavigate();

  const [data] = useDetailData(userId, title);

  const isDelete = async () => {
    const docRef = doc(firestore, `db/${userId}/posting/${title}`);
    await deleteDoc(docRef);

    navigate("/");
  };
  return (
    <div>
      {data ? (
        <div className="px-10 py-20 space-y-8">
          <img
            src={require("../../asset/img/basicImg.png")}
            className="w-full"
          />

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

          <div className="w-full flex justify-center">
            <button
              onClick={isDelete}
              className="bg-red-600 rounded-md text-white hover:bg-red-900 w-1/5"
            >
              삭제하기
            </button>
          </div>
        </div>
      ) : (
        <div className="flex justify-center flex-col text-center space-y-5 mt-36">
          <span className="w-full">데이터가 없습니다.</span>
          <span className="w-full font-bold text-red-600">
            잠시 기다려주세요.
          </span>
          <span className="w-full">
            그래도 데이터가 나타나지 않으면 새로고침을 해주세요.
          </span>
        </div>
      )}
    </div>
  );
};

export default MyPosting;
