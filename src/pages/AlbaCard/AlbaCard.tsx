import { collection, collectionGroup, getDocs } from "@firebase/firestore";
import { useEffect } from "react";
import { firestore } from "../../api/Firebase/FirebaseConfig";

const AlbaCard = () => {
  useEffect(() => {
    const getPostings = async () => {
      const querySnapshot = await getDocs(
        collectionGroup(firestore, "posting")
      );
      querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
      });
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
