import { FC } from "react";

interface CounterProps {
  onIncrement: () => void;
  onDecrement: () => void;
  value: number;
}

const Counter: FC<CounterProps> = ({ onDecrement, onIncrement, value = 1 }) => {
  return (
    <span className="p-1 flex max-w-[73px] text-3.5 leading-4 gap-x-4 border-[1px] border-[#1B4B66] rounded-[4px]">
      <span onClick={() => onDecrement()} className="cursor-pointer">
        -
      </span>
      <span>{value}</span>
      <span onClick={() => onIncrement()} className="cursor-pointer">
        +
      </span>
    </span>
  );
};

export default Counter;
