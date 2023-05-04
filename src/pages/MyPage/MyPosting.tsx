import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { firestore } from "../../api/Firebase/FirebaseConfig";
import { deleteDoc, doc, getDoc } from "@firebase/firestore";
import { async } from "@firebase/util";

const MyPosting = () => {
  const { userId, title } = useParams<any>();
  const navigate = useNavigate();

  const [myAlbaData, setMyAlbaData] = useState<any>();
  const [markerPosition, setMarkerPosition] = useState<[number, number] | null>(
    null
  );

  useEffect(() => {
    const getPostingData = async () => {
      const docRef = doc(firestore, `db/${userId}/posting/${title}`);

      getDoc(docRef).then((docSnap) => {
        if (docSnap.exists()) {
          setMyAlbaData(docSnap.data());
        }
      });
      // await console.log(myAlbaData);
    };

    getPostingData();
  }, []);

  useEffect(() => {
    if (myAlbaData && markerPosition === null) {
      const container = document.getElementById("map"); //지도 생성
      let map: kakao.maps.Map | null = null; //오류를 막기 위해서 if 위에 선언
      if (container !== null) {
        map = new kakao.maps.Map(container, {
          center: new kakao.maps.LatLng(37.54699, 126.94171),
          level: 3,
        }); // 초기화
      }
      const geocoder = new kakao.maps.services.Geocoder(); // 지도 검색 함수 생성
      geocoder.addressSearch(myAlbaData.address, (result, status) => {
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
  }, [myAlbaData, markerPosition]);

  const isDelete = async () => {
    const docRef = doc(firestore, `db/${userId}/posting/${title}`);
    await deleteDoc(docRef);

    navigate("/");
  };
  return (
    <div>
      {myAlbaData ? (
        <div className="px-10 py-20 space-y-8">
          <img
            src={require("../../asset/img/basicImg.png")}
            className="w-full"
          />

          <div className="w-full">
            <h6 className="text-lg font-bold">제목</h6>
            <span className="mt-3 block">{myAlbaData.title}</span>
          </div>

          <div className="w-full">
            <h6 className="text-lg font-bold">모집 연령층</h6>
            <span className="mt-3 block">{myAlbaData.age}</span>
          </div>

          <div className="w-full">
            <h6 className="text-lg font-bold">자격 요건</h6>
            <span className="mt-3 block">{myAlbaData.qualification}</span>
          </div>

          <div className="w-full">
            <h6 className="text-lg font-bold">담당 업무</h6>
            <span className="mt-3 block">{myAlbaData.responsibility}</span>
          </div>

          <div className="w-full">
            <h6 className="text-lg font-bold">우대 사항</h6>
            <span className="mt-3 block">{myAlbaData.preference}</span>
          </div>

          <div className="w-full">
            <h6 className="text-lg font-bold">마감일</h6>
            <span className="mt-3 block">{myAlbaData.deadline}</span>
          </div>

          <div className="w-full">
            <h6 className="text-lg font-bold">위치</h6>
            <div
              id="map"
              style={{ width: "400px", height: "250px" }}
              className="mt-3 w-full"
            />
            <span className="mt-3 block">
              {myAlbaData.address} {myAlbaData.detailAddress}
            </span>
          </div>

          <div className="w-full flex justify-center">
            <button>삭제하기</button>
            {/* <button
              className="bg-sky-500 rounded-md text-white hover:bg-sky-800 w-2/5"
              onClick={onHandleButton}
            >
              지원하기
            </button> */}
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

export default MyPosting;
