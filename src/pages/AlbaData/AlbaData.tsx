import {
  collection,
  collectionGroup,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "@firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { firestore } from "../../api/Firebase/FirebaseConfig";

const AlbaData = () => {
  const { id } = useParams();
  const [albaData, setAlbaData] = useState<any>(null);

  useEffect(() => {
    const getPostingData = async () => {
      // const postingData = collection(firestore, "posting");
      // const postingDoc = doc(postingData, id);
      // const getPostingData = await getDoc(postingDoc);
      // if (getPostingData.exists()) {
      //   setAlbaData(getPostingData.data());
      //   console.log("this is ", albaData);
      // }
    };

    getPostingData();
  }, [id]);

  return (
    <div>
      <span>This is Alba Data Component</span>
    </div>
  );
};

export default AlbaData;
