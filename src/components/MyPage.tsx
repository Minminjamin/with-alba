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
    <div className="w-full h-screen lg:mt-16 mt-10">
      <span className="border-2 w-1/6 text-center border-violet-100 text-indigo-400 ml-3">
        내가 쓴 공고 보기
      </span>

      <div className="grid grid-rows-3 lg:mt-16 mt-5">
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
