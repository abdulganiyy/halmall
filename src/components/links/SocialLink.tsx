import Link from "next/link";
import { FC, ReactNode } from "react";

type SocialLinkProps = {
  to: string;
  icon: ReactNode;
};

const SocialLink: FC<SocialLinkProps> = ({ to, icon }) => {
  return (
    <Link
      href={to}
      className="h-[38px] w-[38px] rounded-full flex justify-center items-center bg-[#639599] text-[#1B4B66]"
    >
      {icon}
    </Link>
  );
};

export default SocialLink;
