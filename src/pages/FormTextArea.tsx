import React from "react";

interface propTypes {
  labelText: string;
  placeholder: string;
  name: string;
  onHandleChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  inputRef: React.MutableRefObject<HTMLTextAreaElement>;
}

const FormTextArea = ({
  labelText,
  placeholder,
  name,
  onHandleChange,
  inputRef,
}: propTypes) => {
  return (
    <div className="flex flex-col space-y-1">
      <label>{labelText}</label>
      <textarea
        placeholder={placeholder}
        name={name}
        onChange={onHandleChange}
        ref={inputRef}
        className="border-solid border-2 border-gray-300 rounded-md "
      />
    </div>
  );
};

export default FormTextArea;
