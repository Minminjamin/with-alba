import React, { useState, useEffect } from "react";
// import { getDatabase, ref, set } from "firebase/database";
// import { uid } from "uid";
// import firebase from "firebase/app";
// import "firebase/database";
// import { auth } from "../../Firebase/FirebaseConfig";
import firebase from "firebase/app";
import { getDatabase, ref, set, push } from "firebase/database";

declare global {
  interface Window {
    kakao: any;
  }
}

const Editor = () => {
  const [title, setTitle] = useState<string>(""); //제목
  const [image, setImage] = useState<File | null>(null); //사진
  const [age, setAge] = useState<string>(""); //연령층
  const [qualification, setQualification] = useState<string>(""); //자격 요건
  const [responsibility, setResponsibility] = useState<string>(""); //담당 업무
  const [preference, setPreference] = useState<string>(""); //우대 사항
  const [deadline, setDeadline] = useState<string>(""); //마감일
  const [address, setAddress] = useState<string>(""); //위치
  const [detailAddress, setDetailAddress] = useState<string>(""); //상세주소

  const [markerPosition, setMarkerPosition] = useState<[number, number] | null>(
    null
  );

  const onHandleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Firebase 데이터베이스 연결
    const database = getDatabase();

    // Firebase 데이터베이스에 저장할 객체 생성
    const data = {
      title: title,
      image: image,
      age: age,
      qualification: qualification,
      responsibility: responsibility,
      preference: preference,
      deadline: deadline,
      address: address,
      detailAddress: detailAddress,
    };

    // Firebase 데이터베이스 저장 경로 설정
    const databaseRef = ref(database, "recruitments");
    const newRef: any = push(databaseRef);

    // Firebase 데이터베이스에 데이터 저장
    set(newRef.key, data).then(() => {
      console.log("데이터 저장 완료");
    });
    // const user = auth.currentUser;

    // const database = getDatabase();
    // const newPostKey = uid();
    // if (user) {
    //   const { uid, displayName } = user;
    //   // 글의 고유 키 생성

    //   // 데이터베이스에 저장할 객체 생성
    //   const postData = {
    //     author: displayName,
    //     title,
    //     image: null, // 파일 업로드를 통해 이미지 업로드 기능을 구현하면 이 부분을 수정합니다.
    //     age,
    //     qualification,
    //     responsibility,
    //     preference,
    //     deadline,
    //     address,
    //     detailAddress,
    //   };

    //   // 글을 데이터베이스에 저장합니다.
    //   set(ref(database, `posts/${newPostKey}`), postData)
    //     .then(() => {
    //       console.log("글이 생성되었습니다.");
    //       // 글 생성 후 필요한 처리를 여기서 합니다.
    //     })
    //     .catch((error) => {
    //       console.error(error);
    //       // 에러 처리를 여기서 합니다.
    //     });
    // } else {
    //   console.log("로그인이 필요합니다.");
    //   // 로그인 필요한 경우 처리를 여기서 합니다.
    // }
  };
  //파이어베이스 처리

  const onHandleSearchLocation = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const container = document.getElementById("map"); //지도 생성
    let map: kakao.maps.Map | null = null; //오류를 막기 위해서 if 위에 선언
    if (container !== null) {
      map = new kakao.maps.Map(container, {
        center: new kakao.maps.LatLng(37.54699, 126.94171),
        level: 3,
      }); // 초기화
    }
    const geocoder = new kakao.maps.services.Geocoder(); // 지도 검색 함수 생성
    geocoder.addressSearch(address, (result, status) => {
      //지도 검색
      if (status === kakao.maps.services.Status.OK) {
        const position = new kakao.maps.LatLng(
          Number(result[0].y),
          Number(result[0].x)
        );
        setMarkerPosition([Number(result[0].y), Number(result[0].x)]);
        if (map !== null) {
          map.setCenter(position);
        }
      }
    });
  };

  useEffect(() => {
    //일단 지도는 생성해놓고 보자
    let container = document.getElementById("map");
    let options = {
      center: new window.kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    };

    let map = new window.kakao.maps.Map(container, options);
  }, []);

  return (
    <div>
      <form onSubmit={onHandleSubmit}>
        <div>
          <label>제목</label>
          <input
            placeholder="제목을 입력해주세요."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div>
          <label>사진</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => {
              if (e.target.files && e.target.files.length > 0) {
                setImage(e.target.files[0]);
              } else {
                const defaultImg = require("../Editor/asset/null.png");
                setImage(defaultImg);
              }
            }}
          />
        </div>

        <div>
          <label>모집 연령층</label>
          <input
            placeholder="모집 연령층을 입력해주세요"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>

        <div>
          <label>자격 요건</label>
          <textarea
            placeholder="자격 요건을 입력해주세요"
            value={qualification}
            onChange={(e) => setQualification(e.target.value)}
          />
        </div>

        <div>
          <label>담당 업무</label>
          <textarea
            placeholder="담당 업무를 입력해주세요"
            value={responsibility}
            onChange={(e) => setResponsibility(e.target.value)}
          />
        </div>

        <div>
          <label>우대 사항</label>
          <textarea
            placeholder="우대 사항 입력해주세요"
            value={preference}
            onChange={(e) => setPreference(e.target.value)}
          />
        </div>

        <div>
          <label>모집 마감일</label>
          <input
            placeholder="모집 마감일을 입력해주세요."
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
          />
        </div>

        <div>
          <div>
            <label>주소</label>
            <input
              placeholder="주소를 입력해주세요."
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <button onClick={onHandleSearchLocation}>검색하기</button>
          </div>

          <label>상세 주소</label>
          <input
            placeholder="상세 주소를 입력해주세요."
            value={detailAddress}
            onChange={(e) => setDetailAddress(e.target.value)}
          />

          <div id="map" style={{ width: "400px", height: "250px" }} />
        </div>

        <button type="submit">저장하기</button>
      </form>
    </div>
  );
};

export default Editor;
