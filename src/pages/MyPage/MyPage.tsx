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
      // await console.log(myData);
    };

    getMyPostings();
  }, []);
  return (
    <div>
      <h6>내가 쓴 공고 보기</h6>

      {myData ? (
        myData.map((posting: any) => (
          <div key={posting.title}>
            <h3 className="font-bold text-xl text-center w-full justify-items-center">
              {posting.title}
            </h3>
            <span className="ml-4">{posting.deadline}</span>
            <span className="ml-4">나이 : {posting.age}</span>
            <span className="ml-4">{posting.address}</span>
          </div>
        ))
      ) : (
        <div>
          <span>데이터가 없습니다</span>
        </div>
      )}
    </div>
  );
};

export default MyPage;
