import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../Firebase/FirebaseConfig";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { login } from "../../redux/modules/isLogin/isLoginAction";

const Login = () => {
  const [id, setId] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const navigate = useNavigate();

  const dispatch = useDispatch();
  useSelector((state: any) => state.isLogin.isLogin);

  const onHandleJoin = () => {
    navigate("/login/join");
  };

  const onHandleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (id == "") {
      alert("아이디를 입력해주세요");
      return;
    }
    if (password == "") {
      alert("비밀번호를 입력해주세요");
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, `${id}@withalba.com`, password);
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

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        onSubmit={onHandleLogin}
        className="border-solid border-2 border-gray-300 h-2/3 w-1/3 flex flex-col justify-center px-10 py-20 space-y-6"
      >
        <div className="text-center">
          <h3 className=" text-xl font-bold">로그인</h3>
        </div>

        <div className="flex flex-col space-y-1">
          <label>아이디(ID)</label>
          <input
            placeholder="아이디를 입력해주세요."
            value={id}
            onChange={(e) => setId(e.target.value)}
            className="border-solid border-2 border-gray-300 rounded-md "
          />
        </div>

        <div className="flex flex-col space-y-1">
          <label>비밀번호(Password)</label>
          <input
            placeholder="비밀번호를 입력해주세요."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border-solid border-2 border-gray-300 rounded-md "
          />
        </div>

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
