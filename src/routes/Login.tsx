import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../api/Firebase/FirebaseConfig";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { login } from "../store/modules/isLogin/isLoginAction";
import useInput from "../hooks/useInput";
import FormInput from "../pages/FormInput";

const Login = () => {
  const { text, onHandleChange } = useInput();

  const navigate = useNavigate();

  const dispatch = useDispatch();
  useSelector((state: any) => state.isLogin.isLogin);

  const onHandleJoin = () => {
    navigate("/login/join");
  };

  const onHandleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(text.id);
    if (text.id == "") {
      alert("아이디를 입력해주세요");
      return;
    }
    if (text.password == "") {
      alert("비밀번호를 입력해주세요");
      return;
    }

    try {
      await signInWithEmailAndPassword(
        auth,
        `${text.id}@withalba.com`,
        text.password
      );
      localStorage.setItem(
        "user",
        JSON.stringify({
          id: `${text.id}@withalba.com`,
          password: text.password,
        })
      );
      dispatch(login());
      navigate("/");
    } catch (error: any) {
      if (error.code === "auth/user-not-found") {
        alert("존재하지 않는 사용자입니다.");
      } else {
        console.log(error);
      }
    }
  };

  const inputRef = useRef<HTMLInputElement>();

  return (
    <div className="flex justify-center items-center h-screen w-full">
      <form
        onSubmit={onHandleLogin}
        className="border-solid border-2 border-gray-300 lg:h-3/5 lg:w-1/3 flex flex-col justify-center px-10 py-20 space-y-8 "
      >
        <div className="text-center">
          <h3 className=" text-xl font-bold">로그인</h3>
        </div>

        <FormInput
          labelText="아이디(ID)"
          name="id"
          placeholder="아이디를 입력해주세요."
          onHandleChange={onHandleChange}
          inputRef={inputRef}
        />

        <FormInput
          labelText="비밀번호(Password)"
          name="password"
          placeholder="비밀번호를 입력해주세요."
          onHandleChange={onHandleChange}
          inputRef={inputRef}
        />

        <button
          type="submit"
          className="bg-sky-500 rounded-md text-white hover:bg-sky-800 "
        >
          로그인
        </button>

        <div className="border-b-2 border-gray-300"></div>

        <button
          className=" bg-lime-500 rounded-md text-white hover:bg-lime-800"
          onClick={onHandleJoin}
        >
          회원가입
        </button>
      </form>
    </div>
  );
};

export default Login;
