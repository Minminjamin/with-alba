import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { firestore } from "../../api/Firebase/FirebaseConfig";
import { deleteDoc, doc } from "@firebase/firestore";
import useDetailData from "../../hooks/useDetailData";
import AlbaData from "../AlbaData";

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
        <div>
          <AlbaData data={data} />

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
