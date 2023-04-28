import React, { FC, InputHTMLAttributes } from "react";
import { FaSearch } from "react-icons/fa";

interface SearchBoxProps extends InputHTMLAttributes<HTMLInputElement> {}

const SearchBox: FC<SearchBoxProps> = ({ className, ...rest }) => {
  return (
    <span
      className={`py-2.5 px-2 flex gap-x-2 h-11 w-[362px] rounded-md bg-[#F1F1F1] items-center ${className}`}
    >
      <FaSearch color="#13101E" />
      <input
        className="bg-[#F1F1F1] outline-0 flex-auto"
        placeholder="Search for products or brands....."
        {...rest}
      />
    </span>
  );
};

export default SearchBox;
