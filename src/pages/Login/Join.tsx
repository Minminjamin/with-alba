import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../api/Firebase/FirebaseConfig";
import useInput from "../../hooks/useInput";

const Join = () => {
  const { text, onChange } = useInput();

  const navigatge = useNavigate();

  const onHandleJoin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const nameRegex = /^[a-zA-Z가-힣]*$/;
    const idRegex = /^[a-zA-Z0-9]{6,12}$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,12}$/;

    if (!nameRegex.test(text.name)) {
      alert("이름은 영어와 한글만 포함해야 합니다.");
      return;
    }
    if (!idRegex.test(text.id)) {
      alert(
        "아이디는 영어와 숫자를 포함해 6자 이상 12자 이하로 입력해야 합니다."
      );
      return;
    }
    if (!passwordRegex.test(text.password)) {
      alert(
        "비밀번호는 영어와 숫자를 포함해 6자 이상 12자 이하로 입력해야 합니다."
      );
      return;
    }
    if (text.confirmPassword !== text.password) {
      alert("입력한 비밀번호가 일치하지 않습니다.");
      return;
    }

    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        `${text.id}@withalba.com`,
        text.password
      );

      await updateProfile(user, { displayName: text.name });
      alert("회원가입에 성공하셨습니다");
      navigatge(-1);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        onSubmit={onHandleJoin}
        className="border-solid border-2 border-gray-300 h-2/3 w-1/3 flex flex-col justify-center px-10 py-20 space-y-6"
      >
        <div className="text-center">
          <h3 className=" text-xl font-bold">회원가입</h3>
        </div>

        <div className="flex flex-col space-y-1">
          <label>이름*</label>
          <input
            placeholder="이름을 입력해주세요."
            name="name"
            onChange={onChange}
            className="border-solid border-2 border-gray-300 rounded-md "
          />
        </div>

        <div className="flex flex-col space-y-1">
          <label>아이디(ID)*</label>
          <input
            placeholder="아이디를 입력해주세요."
            name="id"
            onChange={onChange}
            className="border-solid border-2 border-gray-300 rounded-md "
          />
        </div>

        <div className="flex flex-col space-y-1">
          <label>비밀번호(Password)*</label>
          <input
            placeholder="비밀번호를 입력해주세요."
            name="password"
            onChange={onChange}
            className="border-solid border-2 border-gray-300 rounded-md "
          />
        </div>

        <div className="flex flex-col space-y-1">
          <label>비밀번호 확인*</label>
          <input
            placeholder="비밀번호를 다시 한 번 입력해주세요."
            name="confirmPassword"
            onChange={onChange}
            className="border-solid border-2 border-gray-300 rounded-md "
          />
        </div>

        <button
          type="submit"
          className="bg-indigo-500 rounded-md text-white hover:text-orange-100 hover:bg-indigo-800"
        >
          회원가입
        </button>
      </form>
    </div>
  );
};

export default Join;
