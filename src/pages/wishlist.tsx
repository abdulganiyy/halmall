import { useState } from "react";
import Image from "next/image";
// import Accordion from "@/components/customs/Accordion";
import Button from "@/components/buttons/Button";
// import Link from "next/link";
import { FiLogOut } from "react-icons/fi";
import { RiDeleteBin5Line } from "react-icons/ri";
// import Label from "@/components/customs/Label";
// import { IoIosArrowForward } from "react-icons/io";
import ProfileLayout from "@/components/layouts/ProfileLayout";
import MainLayout from "@/components/layouts/MainLayout";
import { useSession, getSession } from "next-auth/react";

const Wishlist = () => {
  //   const [active, setActive] = useState(true);
  const { data: session } = useSession();

  return (
    <MainLayout>
      <ProfileLayout
        title="Profile"
        rightItem={
          <Button variant="outlined" leftIcon={<FiLogOut />}>
            Logout
          </Button>
        }
      >
        <>
          <h3>My Wishlist</h3>
        </>
      </ProfileLayout>
    </MainLayout>
  );
};

export default Wishlist;
