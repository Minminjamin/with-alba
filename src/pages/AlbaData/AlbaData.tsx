import { doc, getDoc } from "@firebase/firestore";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { firestore } from "../../api/Firebase/FirebaseConfig";

const AlbaData = () => {
  const { userId, id } = useParams<any>();
  const navigate = useNavigate();
  const [albaData, setAlbaData] = useState<any>();
  const [markerPosition, setMarkerPosition] = useState<[number, number] | null>(
    null
  );
  const [isChecked, setIsChecked] = useState<boolean>(false); //useInput 훅 사용이 가능한가?

  const isLoggedIn = useSelector((state: any) => state.isLogin.isLoginned);
  useEffect(() => {
    const getPostingData = async () => {
      const docRef = doc(firestore, `db/${userId}/posting/${id}`); //벡틱으로 오류를 제거

      getDoc(docRef).then((docSnap) => {
        if (docSnap.exists()) {
          setAlbaData(docSnap.data());
        }
      });
    };

    getPostingData();
  }, [firestore, userId, id]);

  useEffect(() => {
    if (albaData && markerPosition === null) {
      const container = document.getElementById("map"); //지도 생성
      let map: kakao.maps.Map | null = null; //오류를 막기 위해서 if 위에 선언
      if (container !== null) {
        map = new kakao.maps.Map(container, {
          center: new kakao.maps.LatLng(37.54699, 126.94171),
          level: 3,
        }); // 초기화
      }
      const geocoder = new kakao.maps.services.Geocoder(); // 지도 검색 함수 생성
      geocoder.addressSearch(albaData.address, (result, status) => {
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
    }
  }, [albaData, markerPosition]);

  const onHandleButton = () => {
    if (isLoggedIn == false) {
      alert("로그인 후에 이용이 가능합니다.");
      navigate("/login");
    }
    if (isChecked == false) {
      alert("체크 박스에 동의를 해주세요.");
      return;
    }
    if (isLoggedIn == true && isChecked == true) {
      alert(`${albaData.title}에 지원하셨습니다.`);
      navigate(-1);
    }
  };

  return (
    <div className="flex justify-center ">
      {albaData ? (
        <div className="px-10 py-20 space-y-8">
          <img
            src={require("../../asset/img/basicImg.png")}
            className="w-full"
          />

          <div className="w-full">
            <h6 className="text-lg font-bold">제목</h6>
            <span className="mt-3 block">{albaData.title}</span>
          </div>

          <div className="w-full">
            <h6 className="text-lg font-bold">모집 연령층</h6>
            <span className="mt-3 block">{albaData.age}</span>
          </div>

          <div className="w-full">
            <h6 className="text-lg font-bold">자격 요건</h6>
            <span className="mt-3 block">{albaData.qualification}</span>
          </div>

          <div className="w-full">
            <h6 className="text-lg font-bold">담당 업무</h6>
            <span className="mt-3 block">{albaData.responsibility}</span>
          </div>

          <div className="w-full">
            <h6 className="text-lg font-bold">우대 사항</h6>
            <span className="mt-3 block">{albaData.preference}</span>
          </div>

          <div className="w-full">
            <h6 className="text-lg font-bold">마감일</h6>
            <span className="mt-3 block">{albaData.deadline}</span>
          </div>

          <div className="w-full">
            <h6 className="text-lg font-bold">위치</h6>
            <div
              id="map"
              style={{ width: "400px", height: "250px" }}
              className="mt-3 w-full"
            />
            <span className="mt-3 block">
              {albaData.address} {albaData.detailAddress}
            </span>
          </div>

          <div className="w-full flex justify-center">
            <input
              type="checkbox"
              className="shadow-md"
              checked={isChecked}
              onChange={() => setIsChecked(!isChecked)}
            />
            <span className=" mx-3">
              한 번 지원한 공고는 철회가 불가능합니다.
            </span>
          </div>

          <div className="w-full flex justify-center">
            <button
              className="bg-sky-500 rounded-md text-white hover:bg-sky-800 w-2/5"
              onClick={onHandleButton}
            >
              지원하기
            </button>
          </div>
        </div>
      ) : (
        <div className="flex justify-center flex-col text-center space-y-5 mt-36">
          <span className="w-full">데이터가 없습니다.</span>
          <span className="w-full font-bold text-red-600">
            잠시 기다려주세요.
          </span>
          <span className="w-full">
            그래도 데이터가 나타나지 않으면 새로고침을 해주세요.
          </span>
        </div>
      )}
    </div>
  );
};

export default AlbaData;
