import React, { useState } from "react";

const Join = () => {
  const [name, setName] = useState<string>("");
  const [id, setId] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const onHandleJoin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      // await Firebase.auth()
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <form onSubmit={onHandleJoin}>
        <div>
          <label>이름</label>
          <input
            placeholder="이름을 입력해주세요."
            type="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label>아이디(ID)</label>
          <input
            placeholder="아이디를 입력해주세요."
            type="id"
            name="id"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </div>

        <div>
          <label>비밀번호(Password)</label>
          <input
            placeholder="비밀번호를 입력해주세요."
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div>
          <label>비밀번호 확인</label>
          <input
            placeholder="위에서 입력한 비밀번호를 다시 한 번 입력해주세요."
            type="confirmPassword"
            name="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        <button type="submit">회원가입 하기</button>
      </form>
    </div>
  );
};

export default Join;
