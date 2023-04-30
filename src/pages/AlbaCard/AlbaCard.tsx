import { collection, collectionGroup, getDocs } from "@firebase/firestore";
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
    <div>
      {postingData.map((posting: any) => (
        <div key={posting.title}>
          <h3>{posting.title}</h3>
          <span>나이 : {posting.age}</span>
          <span>마감일 : {posting.deadline}</span>
        </div>
      ))}
    </div>
  );
};

export default AlbaCard;
