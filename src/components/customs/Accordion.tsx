import { useState, FC, ReactNode } from "react";
import { BiPlus } from "react-icons/bi";

interface AccordionProps {
  icon?: ReactNode;
  name: ReactNode;
  children: ReactNode;
}

const Accordion: FC<AccordionProps> = ({
  name,
  icon = <BiPlus />,
  children,
}) => {
  const [show, setShow] = useState(false);
  return (
    <div className="border-b-[1px] pb-1 border-black/12">
      <div
        className="flex pt-1 justify-between cursor-pointer"
        onClick={() => setShow(!show)}
      >
        <span>{name}</span>
        <span className="text-[#13101E]">{icon}</span>
      </div>
      {show && <div>{children}</div>}
    </div>
  );
};

export default Accordion;
