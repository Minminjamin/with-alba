import React, { useEffect } from "react";
import Header from "./routes/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Join from "./routes/Join";
import Login from "./routes/Login";
import MyPage from "./routes/MyPage";
import Editor from "./routes/Editor";
import ShowAlbaData from "./routes/ShowAlbaData";
import MyPosting from "./routes/MyPosting";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./api/Firebase/FirebaseConfig";
import { useDispatch, useSelector } from "react-redux";
import { login } from "./store/modules/isLogin/isLoginAction";

function App() {
  const dispatch = useDispatch();
  useSelector((state: any) => state.isLogin.isLogin);

  useEffect(() => {
    const autoLogin = async () => {
      const user = JSON.parse(localStorage.getItem("user"));

      if (user) {
        const id: string = user.id;
        const password: string = user.password;

        await signInWithEmailAndPassword(auth, id, password);
        dispatch(login());
      }
    };
    autoLogin();
  }, []);

  return (
    <BrowserRouter>
      <div className=" lg:mx-24 lg:mt-10">
        <Header />
        <div>
          <Routes>
            <Route path=":userId/posting/:id" element={<ShowAlbaData />} />
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/login/join" element={<Join />} />
            <Route path=":userId/mypage" element={<MyPage />} />
            <Route path=":userId/mypage/:title" element={<MyPosting />} />
            <Route path="/editor" element={<Editor />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
