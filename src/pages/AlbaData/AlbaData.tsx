import { doc, getDoc, DocumentData } from "@firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { firestore } from "../../api/Firebase/FirebaseConfig";

// public\img\basicImg.jpg
const AlbaData = () => {
  const { userId, id } = useParams<any>();
  const [albaData, setAlbaData] = useState<DocumentData | null>(null);

  useEffect(() => {
    const getPostingData = async () => {
      const docRef = doc(firestore, `db/${userId}/posting/${id}`); //벡틱으로 오류를 제거

      getDoc(docRef).then((docSnap) => {
        if (docSnap.exists()) {
          setAlbaData(docSnap.data());
        }
      });
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
    </div>
  );
};

export default AlbaData;
