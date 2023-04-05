import React, { useState } from "react";
import Map from "./Map";

const Editor = () => {
  const [title, setTitle] = useState<string>(""); //제목
  const [age, setAge] = useState<string>(""); //연령층
  const [qualification, setQualification] = useState<string>(""); //자격 요건
  const [responsibility, setResponsibility] = useState<string>(""); //담당 업무
  const [preference, setPreference] = useState<string>(""); //우대 사항
  const [deadline, setDeadline] = useState<string>(""); //마감일
  const [location, setLocation] = useState<string>(""); //위치

  const onHandleSubmit = () => {};

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
          <input type="file" accept="image/*" />
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

        <Map />
        {/* 
        주소
        상세주소 */}
        <button type="submit">전송</button>
      </form>
    </div>
  );
};

export default Editor;
