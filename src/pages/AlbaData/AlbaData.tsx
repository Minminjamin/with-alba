import { doc, getDoc, DocumentData } from "@firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { firestore } from "../../api/Firebase/FirebaseConfig";

// public\img\basicImg.jpg
const AlbaData = () => {
  const { userId, id } = useParams<any>();
  const [albaData, setAlbaData] = useState<any>();

  useEffect(() => {
    const getPostingData = async () => {
      const docRef = doc(firestore, `db/${userId}/posting/${id}`); //벡틱으로 오류를 제거

      getDoc(docRef).then((docSnap) => {
        if (docSnap.exists()) {
          setAlbaData(docSnap.data());
        }
      });
      // console.log(userId);
      // console.log(id);
      // console.log(albaData);

      // const docSnap = await getDoc(docRef);

      // if (docSnap.exists()) {
      //   setAlbaData(docSnap.data());
      // }
      // await console.log(albaData);
    };

    getPostingData();
  }, [firestore, userId, id]);

  return (
    <div>
      <img src={require("../../asset/img/basicImg.png")} />
      <h6>제목</h6>
      {albaData ? (
        <span>{albaData.title}</span>
      ) : (
        <div>
          <span>데이터가 없습니다.</span>
          <span>잠시 기다려주세요.</span>
          <span>그래도 데이터가 나타나지 않으면 새로고침을 해주세요.</span>
        </div>
      )}
    </div>
  );
};

export default AlbaData;
