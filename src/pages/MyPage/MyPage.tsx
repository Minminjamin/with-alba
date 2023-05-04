import { collection, getDocs } from "@firebase/firestore";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { firestore } from "../../api/Firebase/FirebaseConfig";

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
          myData.map((posting: any) => (
            <div
              key={posting.title}
              onClick={(e) => onHandleClick(posting.title)}
              className="rounded-lg border-2 w-1/5 flex flex-col items-start h-52 content-between justify-around shadow-lg cursor-pointer"
            >
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
    </div>
  );
};

export default MyPage;
