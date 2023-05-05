import React, { useState } from "react";

const useInput = () => {
  const [text, setText] = useState<any | null | string | null | number>();
  const onChange = (event: any) => {
    const {
      target: { value: text },
    } = event;
    setText(text);
  };
  return { text, onChange };
};

export default useInput;
