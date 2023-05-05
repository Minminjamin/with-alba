import React, { useState } from "react";

const useInput = () => {
  const [text, setText] = useState<any | string | number | null>();

  const onHandleChange = (e: any) => {
    const { name, value } = e.target;
    setText({ ...text, [name]: value });
  };
  return { text, onHandleChange };
};

export default useInput;
