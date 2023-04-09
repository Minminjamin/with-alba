import React, { useState, useEffect } from "react";
import { getAuth } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { firestore } from "../../Firebase/FirebaseConfig";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

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

  const isLoggedIn = useSelector((state: any) => state.isLogin.isLoginned);

  const [user, setUser] = useState<string | null>(null);
  const [markerPosition, setMarkerPosition] = useState<[number, number] | null>(
    null
  );

  const navigator = useNavigate();

  const onHandleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const auth = getAuth();
    const currentUser = auth.currentUser; //현재 로그인한 사용자의 정보

    if (isLoggedIn && currentUser) {
      //사용자가 로그인했나 확인
      setUser(currentUser.uid);
      const user: string = currentUser.uid;

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

      //유저 콜렉션에 해당 유저의 uid의 해당유저가 포스팅한 것에 제목으로 구분
      const docRef = doc(firestore, "users", user, "posting", `${title}`);
      setDoc(docRef, data);
      navigator("/");
    } else {
      alert("로그인해주세요");
      navigator("/login");
    }
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
    <div className="flex justify-center ">
      <form onSubmit={onHandleSubmit} className="px-10 py-20 space-y-8">
        <div className="flex flex-col space-y-2">
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
            className="w-full"
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label>제목</label>
          <input
            placeholder="제목을 입력해주세요."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border-solid border-2 border-gray-300 rounded-md w-full"
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label>모집 연령층</label>
          <input
            placeholder="모집 연령층을 입력해주세요"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="border-solid border-2 border-gray-300 rounded-md "
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label>자격 요건</label>
          <textarea
            placeholder="자격 요건을 입력해주세요"
            value={qualification}
            onChange={(e) => setQualification(e.target.value)}
            className="border-solid border-2 border-gray-300 rounded-md "
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label>담당 업무</label>
          <textarea
            placeholder="담당 업무를 입력해주세요"
            value={responsibility}
            onChange={(e) => setResponsibility(e.target.value)}
            className="border-solid border-2 border-gray-300 rounded-md "
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label>우대 사항</label>
          <textarea
            placeholder="우대 사항 입력해주세요"
            value={preference}
            onChange={(e) => setPreference(e.target.value)}
            className="border-solid border-2 border-gray-300 rounded-md "
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label>모집 마감일</label>
          <input
            placeholder="모집 마감일을 입력해주세요."
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
            className="border-solid border-2 border-gray-300 rounded-md "
          />
        </div>

        <div className="flex flex-col space-y-4">
          <div className="flex flex-col space-y-2">
            <label>주소</label>
            <div className="flex justify-between">
              <input
                placeholder="주소를 입력해주세요."
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="border-solid border-2 border-gray-300 rounded-md w-3/4 "
              />
              <button
                onClick={onHandleSearchLocation}
                className="w-1/5 rounded-md bg-slate-200 border-solid border-2 border-slate-300"
              >
                검색
              </button>
            </div>
          </div>

          <label>상세 주소</label>
          <input
            placeholder="상세 주소를 입력해주세요."
            value={detailAddress}
            onChange={(e) => setDetailAddress(e.target.value)}
            className="border-solid border-2 border-gray-300 rounded-md "
          />

          <div id="map" style={{ width: "400px", height: "250px" }} />
        </div>

        <div className="w-full flex justify-center">
          <button
            type="submit"
            className="rounded-md bg-green-500 w-1/4 text-white hover:bg-green-700"
          >
            업로드
          </button>
        </div>
      </form>
    </div>
  );
};

export default Editor;
