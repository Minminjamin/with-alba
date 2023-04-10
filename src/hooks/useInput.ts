import React, { useState } from "react";

export const useInput = () => {
  const [inputValue, setInputValue] = useState<any | string | number | null>();

  const onHandleChange = (e: any) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  return { inputValue, onHandleChange };
};
