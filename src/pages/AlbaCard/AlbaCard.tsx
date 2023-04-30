import { collectionGroup, getDocs } from "@firebase/firestore";
import { useEffect, useState } from "react";
import { firestore } from "../../api/Firebase/FirebaseConfig";

const AlbaCard = () => {
  const [postingData, setPostingData] = useState<any>([]);

  useEffect(() => {
    const getPostings = async () => {
      const querySnapshot = await getDocs(
        collectionGroup(firestore, "posting")
      );
      const data = querySnapshot.docs.map((doc) => doc.data());
      setPostingData(data);
      // await console.log(data);
    };

    getPostings();
  }, []);

  return (
    <div className="flex grid-rows-3 justify-around ">
      {postingData.map((posting: any) => (
        <div
          key={posting.title}
          className="rounded-lg border-2 w-1/4 flex flex-col items-start h-52 content-between justify-around shadow-lg cursor-pointer"
        >
          <h3 className="font-bold text-xl text-center w-full justify-items-center">
            {posting.title}
          </h3>
          <span className="ml-4">{posting.deadline}</span>
          <span className="ml-4">나이 : {posting.age}</span>
          <span className="ml-4">{posting.address}</span>
        </div>
      ))}
    </div>
  );
};

export default AlbaCard;
