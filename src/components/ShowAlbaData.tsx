import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import useDetailData from "../hooks/useDetailData";
import AlbaData from "../pages/AlbaData";
import NoData from "../pages/NoData";

const ShowAlbaData = () => {
  const { userId, id } = useParams<string>();
  const navigate = useNavigate();

  const [isChecked, setIsChecked] = useState<boolean>(false); //useInput 훅 사용이 가능한가?

  const isLoggedIn = useSelector((state: any) => state.isLogin.isLoginned);

  const [data] = useDetailData(userId, id);

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
      alert(`${data.title}에 지원하셨습니다.`);
      navigate(-1);
    }
  };

  return (
    <div className="flex justify-center ">
      {data ? (
        <div className="px-10 py-20 space-y-8">
          <AlbaData data={data} />

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
        <NoData />
      )}
    </div>
  );
};

export default ShowAlbaData;
