import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { firestore } from "../api/Firebase/FirebaseConfig";
import { deleteDoc, doc } from "@firebase/firestore";
import useDetailData from "../hooks/useDetailData";
import AlbaData from "../pages/AlbaData";
import NoData from "../pages/Nodata";

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
    <div className="flex justify-center ">
      {data ? (
        <div>
          <AlbaData data={data} />

          <div className="w-full flex justify-center mt-8">
            <button
              onClick={isDelete}
              className="bg-red-600 rounded-md text-white hover:bg-red-900 w-1/5"
            >
              삭제하기
            </button>
          </div>
        </div>
      ) : (
        <NoData />
      )}
    </div>
  );
};

export default MyPosting;