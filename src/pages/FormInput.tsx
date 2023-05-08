import React from "react";
import useInput from "../hooks/useInput";

const FormInput = (
  labeltext: string,
  placeholder: string,
  name: string,
  onHandleChange: any
) => {
  //   const { text, onHandleChange } = useInput();

  return (
    <div>
      <label>{labeltext}</label>
      <input placeholder={placeholder} name={name} onChange={onHandleChange} />
    </div>
  );
};

export default FormInput;
