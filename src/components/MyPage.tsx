import { collection, getDocs } from "@firebase/firestore";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { firestore } from "../api/Firebase/FirebaseConfig";
import NoData from "../pages/NoData";
import PostingCard from "../pages/PostingCard";

const MyPage = () => {
  const { userId } = useParams();
  const navigator = useNavigate();

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

  const onHandleClick = (title: string) => {
    navigator(`${title}`);
  };

  return (
    <div>
      <span className="mt-20 border-2 w-1/6 text-center border-violet-100 text-indigo-400">
        내가 쓴 공고 보기
      </span>

      <div className="mt-28 grid grid-rows-3">
        {myData ? (
          <PostingCard postingData={myData} clickEvent={onHandleClick} />
        ) : (
          <NoData />
        )}
      </div>
    </div>
  );
};

export default MyPage;