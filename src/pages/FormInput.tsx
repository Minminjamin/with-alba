import React from "react";
import useInput from "../hooks/useInput";

interface propTypes {
  labelText: string;
  placeholder: string;
  name: string;
  onHandleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormInput = ({
  labelText,
  placeholder,
  name,
  onHandleChange,
}: propTypes) => {
  return (
    <div className="flex flex-col space-y-1">
      <label>{labelText}</label>
      <input
        placeholder={placeholder}
        name={name}
        onChange={onHandleChange}
        className="border-solid border-2 border-gray-300 rounded-md "
      />
    </div>
  );
};

export default FormInput;
