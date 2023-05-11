import React, { useState, useEffect } from "react";
import { getAuth } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { firestore } from "../api/Firebase/FirebaseConfig";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import useInput from "../hooks/useInput";
import FormInput from "../pages/FormInput";
import FormTextArea from "../pages/FormTextArea";

const Editor = () => {
  const { text, onHandleChange } = useInput();

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
      const docRef = doc(firestore, "db", user, "posting", `${text.title}`);
      // Firebase 데이터베이스에 저장할 객체 생성
      const data = {
        title: text.title,
        image: text.image || "",
        age: text.age,
        qualification: text.qualification,
        responsibility: text.responsibility,
        preference: text.preference,
        deadline: text.deadline,
        address: text.address,
        detailAddress: text.detailAddress,
        userId: user,
      };

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
    geocoder.addressSearch(text.address, (result, status) => {
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
            name="image"
            onChange={onHandleChange}
            className="w-full"
          />
        </div>
        <FormInput
          labelText="제목"
          placeholder="제목을 입력해주세요."
          name="title"
          onHandleChange={onHandleChange}
        />
        <FormInput
          labelText="모집 연령층"
          placeholder="모집 연령층을 입력해주세요."
          name="age"
          onHandleChange={onHandleChange}
        />
        <FormTextArea
          labelText="자격 요건"
          placeholder="자격 요건을 입력해주세요."
          name="qualification"
          onHandleChange={onHandleChange}
        />
        <FormTextArea
          labelText="담당 업무"
          placeholder="담당 업무를 입력해주세요."
          name="responsibility"
          onHandleChange={onHandleChange}
        />
        <FormTextArea
          labelText="우대 사항"
          placeholder="우대 사항 입력해주세요."
          name="preference"
          onHandleChange={onHandleChange}
        />
        <FormInput
          labelText="모집 마감일"
          placeholder="모집 마감일을 입력해주세요."
          name="deadline"
          onHandleChange={onHandleChange}
        />

        <div className=" space-y-3">
          <FormInput
            labelText="주소"
            placeholder="주소를 입력해주세요."
            name="address"
            onHandleChange={onHandleChange}
          />
          <button
            onClick={onHandleSearchLocation}
            className="w-1/5 rounded-md bg-slate-200 border-solid border-2 border-slate-300"
          >
            검색
          </button>
        </div>

        <FormInput
          labelText="상세 주소"
          placeholder="상세 주소를 입력해주세요"
          name="detailAddress"
          onHandleChange={onHandleChange}
        />
        <div id="map" style={{ width: "400px", height: "250px" }} />

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
