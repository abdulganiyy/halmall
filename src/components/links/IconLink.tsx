import Link from "next/link";
import { FC, ReactNode } from "react";

type IconLinkProps = {
  to: string;
  icon: ReactNode;
};

const IconLink: FC<IconLinkProps> = ({ to, icon }) => {
  return (
    <Link href={to} className="text-[14px] text-[#171520]">
      {icon}
    </Link>
  );
};

export default IconLink;
