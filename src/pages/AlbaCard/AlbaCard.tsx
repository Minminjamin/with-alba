import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import React, { useEffect } from "react";
import { firestore } from "../../api/Firebase/FirebaseConfig";

const AlbaCard = () => {
  useEffect(() => {
    // const testConst = async () => {
    //   //컬렉션의 하위 컬렉션은 불러와지지 않아서 하위 컬렉션을 불러올 수 있는 코드를 만들어야 한다.
    //   const querySnapshot = await getDocs(collection(firestore, "testtest"));
    //   querySnapshot.forEach((doc) => {
    //     // doc.data() is never undefined for query doc snapshots
    //     console.log(doc.id, " => ", doc.data());
    //   });
    //   //https://yeoossi.tistory.com/13
    //   //https://www.google.com/search?q=react+firestore+%ED%95%98%EC%9C%84+%EC%BB%AC%EB%A0%89%EC%85%98&sxsrf=APwXEdc3_7_DTuAHI_wx9qtw4m4yeV-MHQ:1681280198460&gbv=2&sei=xkw2ZLPZG9uE2roPwqyzkAo
    // };
    // testConst();
  }, []);
  return (
    <div>
      <pre>{}</pre>
      <span>This is Alba Card Component</span>
    </div>
  );
};

export default AlbaCard;
