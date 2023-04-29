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
      const data = querySnapshot.docs.map((doc) => doc.data);
      setPostingData(data);
      // await console.log(postingData);
    };

    getPostings();
  }, []);

  return (
    <div>
      <span>This is alba component</span>
    </div>
  );
};

export default AlbaCard;
