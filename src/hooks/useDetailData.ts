import React, { useEffect, useState } from "react";
import { firestore } from "../api/Firebase/FirebaseConfig";
import { doc, getDoc } from "@firebase/firestore";

const useDetailData = (user: string | undefined, title: string | undefined) => {
  const [data, setData] = useState<string | any>();

  useEffect(() => {
    const getDatas = async () => {
      const docRef = doc(firestore, `db/${user}/posting/${title}`);

      getDoc(docRef).then((docSnap) => {
        if (docSnap.exists()) {
          setData(docSnap.data());
        }
      });
    };

    getDatas();
  }, [user, title]);

  return [data];
};

export default useDetailData;
