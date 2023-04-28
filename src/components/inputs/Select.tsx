import React, { FC, HTMLAttributes } from "react";

interface SelectProps extends HTMLAttributes<HTMLSelectElement> {
  label?: string;
  options: string[];
  //   options: { key: string; value: string }[];
}

const Select: FC<SelectProps> = ({
  label,
  placeholder,
  id,
  options,
  ...rest
}) => {
  return (
    <div>
      {label && <label htmlFor={id}>{label}</label>}
      <select
        name={id}
        id={id}
        className={`bg-gray-100 px-2 outline-0 rounded-md w-full`}
        {...rest}
      >
        {options?.map((opt) => (
          <option key={opt} value={opt.split(" ")[1] || opt.split(" ")[0]}>
            {opt.split(" ")[0].charAt(0).toUpperCase() +
              opt.split(" ")[0].slice(1)}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
