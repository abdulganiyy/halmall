import React, { FC, TextareaHTMLAttributes } from "react";

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
}

const TextArea: FC<TextAreaProps> = ({
  label,
  placeholder,
  id,
  //   sizes = "large",
  ...rest
}) => {
  return (
    <div className="flex flex-col min-w-[328px] gap-y-2">
      <label htmlFor={id}>{label}</label>
      <textarea
        // name={id}
        id={id}
        className="p-3 pt-4 min-h-52 bg-[#F1F1F1] border border-gray-200 rounded-md peer focus:outline-none focus:border-[#1B4B66] invalid:outline-none invalid:border-[#B00020] focus:shadow-sm"
        placeholder={placeholder}
        {...rest}
        // autoComplete="off"
      />
    </div>
  );
};

export default TextArea;
