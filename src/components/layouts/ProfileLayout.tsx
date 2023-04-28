import { FC, ReactNode, useState } from "react";
import H2 from "@/components/typography/H2";
import Image from "next/image";
import Accordion from "@/components/customs/Accordion";
import TextInput from "@/components/inputs/TextInput";
import Button from "@/components/buttons/Button";
import Link from "next/link";
import { FiLogOut } from "react-icons/fi";
import { RiDeleteBin5Line } from "react-icons/ri";
import Label from "@/components/customs/Label";
import { IoIosArrowForward } from "react-icons/io";

interface ProfileLayoutProps {
  title: string;
  children: ReactNode;
  rightItem?: ReactNode;
}

const ProfileLayout: FC<ProfileLayoutProps> = ({
  title,
  children,
  rightItem,
}) => {
  const [active, setActive] = useState(true);

  return (
    <div className="p-5">
      <div className="flex justify-between">
        <H2>{title}</H2>
        {rightItem && rightItem}
      </div>
      <div className="flex flex-col md:flex-row mt-4 gap-x-2">
        <div className="md:w-[286px]">
          <div className="flex flex-col gap-y-3 bg-[#F1F1F1]">
            <span
              className={`flex justify-between py-2 items-center ${
                active ? "border-l-[4px] border-[#17494D]" : ""
              }`}
            >
              <span>Profile Information </span>
              <IoIosArrowForward />
            </span>
            <span
              className={`flex justify-between py-2 items-center ${
                active ? "border-l-[4px] border-[#17494D]" : ""
              }`}
            >
              <span>Refer and Earn </span>
              <IoIosArrowForward />
            </span>
            <span
              className={`flex justify-between py-2 items-center ${
                active ? "border-l-[4px] border-[#17494D]" : ""
              }`}
            >
              <span>My Wish List </span>
              <IoIosArrowForward />
            </span>
            <span
              className={`flex justify-between py-2 items-center ${
                active ? "border-l-[4px] border-[#17494D]" : ""
              }`}
            >
              <span>My Orders </span>
              <IoIosArrowForward />
            </span>
            <span
              className={`flex justify-between py-2 items-center ${
                active ? "border-l-[4px] border-[#17494D]" : ""
              }`}
            >
              <span>My Reviews </span>
              <IoIosArrowForward />
            </span>
            <span
              className={`flex justify-between py-2 items-center ${
                active ? "border-l-[4px] border-[#17494D]" : ""
              }`}
            >
              <span>My Address Book </span>
              <IoIosArrowForward />
            </span>
            <span
              className={`flex justify-between py-2 items-center ${
                active ? "border-l-[4px] border-[#17494D]" : ""
              }`}
            >
              <span>My Saved Cards </span>
              <IoIosArrowForward />
            </span>
          </div>
        </div>
        <div className="flex-auto py-2">{children}</div>
      </div>
    </div>
  );
};

export default ProfileLayout;
