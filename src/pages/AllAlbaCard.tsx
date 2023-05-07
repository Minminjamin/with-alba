import { collectionGroup, getDocs } from "@firebase/firestore";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { firestore } from "../api/Firebase/FirebaseConfig";
import PostingCard from "./PostingCard";

const AllAlbaCard = () => {
  const [postingData, setPostingData] = useState<any>([]);
  const navigator = useNavigate();

  useEffect(() => {
    const getPostings = async () => {
      const querySnapshot = await getDocs(
        collectionGroup(firestore, "posting")
      );
      const data = querySnapshot.docs.map((doc) => doc.data());
      setPostingData(data);
    };

    getPostings();
  }, []);

  const HandleClickPosting = (title: string, userId: string) => {
    navigator(`${userId}/posting/${title.trim()}`);
  };

  return (
    <div className="flex grid-rows-3 justify-around">
      <PostingCard postingData={postingData} clickEvent={HandleClickPosting} />
    </div>
  );
};

export default AllAlbaCard;
