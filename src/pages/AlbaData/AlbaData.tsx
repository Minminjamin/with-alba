import { doc, getDoc, DocumentData } from "@firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { firestore } from "../../api/Firebase/FirebaseConfig";

const AlbaData = () => {
  const { userId, id } = useParams<any>();
  const [albaData, setAlbaData] = useState<any>();
  const [markerPosition, setMarkerPosition] = useState<[number, number] | null>(
    null
  );
  useEffect(() => {
    const getPostingData = async () => {
      const docRef = doc(firestore, `db/${userId}/posting/${id}`); //벡틱으로 오류를 제거

      getDoc(docRef).then((docSnap) => {
        if (docSnap.exists()) {
          setAlbaData(docSnap.data());
        }
      });
      // console.log(userId);
      // console.log(id);
      // console.log(albaData);

      // const docSnap = await getDoc(docRef);

      // if (docSnap.exists()) {
      //   setAlbaData(docSnap.data());
      // }
    };

    getPostingData();
  }, [firestore, userId, id]);

  useEffect(() => {
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
  }, []);

  return (
    <div>
      {albaData ? (
        <div>
          <img src={require("../../asset/img/basicImg.png")} />
          <div>
            <h6>제목</h6>
            <span>{albaData.title}</span>
          </div>

          <div>
            <h6>모집 연령층</h6>
            <span>{albaData.age}</span>
          </div>

          <div>
            <h6>자격 요건</h6>
            <span>{albaData.qualification}</span>
          </div>

          <div>
            <h6>담당 업무</h6>
            <span>{albaData.responsibility}</span>
          </div>

          <div>
            <h6>우대 사항</h6>
            <span>{albaData.preference}</span>
          </div>

          <div>
            <h6>마감일</h6>
            <span>{albaData.deadline}</span>
          </div>

          <div>
            <h6>위치</h6>
            <div id="map" style={{ width: "400px", height: "250px" }} />
            <span>
              {albaData.address} {albaData.detailAddress}
            </span>
          </div>

          <div>
            <input type="checkbox" />
            <span>한 번 지원한 공고는 철회가 불가능합니다.</span>
          </div>
        </div>
      ) : (
        <div>
          <span>데이터가 없습니다.</span>
          <span>잠시 기다려주세요.</span>
          <span>그래도 데이터가 나타나지 않으면 새로고침을 해주세요.</span>
        </div>
      )}
    </div>
  );
};

export default AlbaData;
