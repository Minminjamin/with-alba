import { collection, getDocs } from "@firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { firestore } from "../../api/Firebase/FirebaseConfig";

const MyPage = () => {
  const { userId } = useParams();
  const [myData, setMyData] = useState<any | string>();

  useEffect(() => {
    const getMyPostings = async () => {
      const myPostingSnapShot = await getDocs(
        collection(firestore, `db/${userId}/posting`)
      );

      const myPostingData = myPostingSnapShot.docs.map((doc) => doc.data());
      await setMyData(myPostingData);
    };

    getMyPostings();
  }, []);
  return (
    <div>
      <h6>내가 쓴 공고 보기</h6>
    </div>
  );
};

export default MyPage;
