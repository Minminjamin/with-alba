import React, { useEffect, useState } from "react";

const SearchMap = (data: string | any, address: string | any) => {
  const [markerPosition, setMarkerPosition] = useState<[number, number] | null>(
    null
  );

  useEffect(() => {
    if (data && markerPosition === null) {
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
    }
  }, [data, markerPosition]);
  // 에디터에서는 button을 누르면 값이 업데이트 되는 것으로

  return (
    <div>
      <div
        id="map"
        style={{ width: "400px", height: "250px" }}
        className="mt-3 w-full"
      />
    </div>
  );
};

export default SearchMap;
