import React, { useState } from "react";

const Map = () => {
  const [location, setLocation] = useState<string>(""); //위치
  const [detailLocation, setDetailLocation] = useState<string>(""); //상세주소

  const onHandleSearchLocation = () => {};
  return (
    <div>
      <input
        placeholder="주소를 입력해주세요."
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <button onClick={onHandleSearchLocation}>검색하기</button>
    </div>
  );
};

export default Map;
