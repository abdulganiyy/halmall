import { FC, ReactNode } from "react";
import {
  TbIndentDecrease,
  TbUsers,
  TbCategory,
  TbBrandAirtable,
} from "react-icons/tb";
import { RiHome6Line } from "react-icons/ri";
import {
  IoCartOutline,
  IoAddCircleOutline,
  IoLogoDropbox,
  IoNotificationsOutline,
} from "react-icons/io5";
import Image from "next/image";
import IconLink from "../links/IconLink";

import Link from "next/link";
import { useRouter } from "next/router";

interface DashboardWrapperProps {
  children: ReactNode;
  title?: string;
}

interface NavLinkProps {
  icon: ReactNode;
  isActive?: boolean;
  title: string;
  href: string;
}

const NavLink: FC<NavLinkProps> = ({ icon, isActive, title, href }) => {
  return (
    <Link
      href={href}
      className={`flex py-[9px] px-4 gap-x-2 rounded-md ${
        isActive ? "bg-[#F3F4F8]" : "text-[#8B909A]"
      }`}
    >
      <span className="text-[22px]">{icon}</span>
      <span>{title}</span>
    </Link>
  );
};

const DashboardWrapper: FC<DashboardWrapperProps> = ({
  children,
  title = "Dashboard",
}) => {
  const router = useRouter();

  return (
    <div className="max-h-screen flex">
      <div className="max-h-screen basis-1/6 grow-0 p-4 overflow-auto">
        <div className="flex items-center justify-between">
          <span>LOGO</span>
          <TbIndentDecrease />
        </div>
        <div className="mt-[35px]">
          <h4 className="text-[11px] leading-[14px] text-[#8B909A]">
            MAIN MENU
          </h4>
          <div className="mt-[15px] flex flex-col">
            <NavLink
              icon={<RiHome6Line />}
              title="Dashboard"
              href="/dashboard-admin"
              isActive={router.pathname === "/dashboard-admin"}
            />
            <NavLink
              icon={<IoCartOutline />}
              title="Orders"
              href="/dashboard-admin/order"
              isActive={router.pathname === "/dashboard-admin/order"}
            />
            <NavLink
              icon={<TbUsers />}
              title="Users"
              href="/dashboard-admin/user"
              isActive={router.pathname === "/dashboard-admin/user"}
            />
            <NavLink
              icon={<TbCategory />}
              title="Categories"
              href="/dashboard-admin/category"
              isActive={router.pathname === "/dashboard-admin/category"}
            />
            <NavLink
              icon={<TbBrandAirtable />}
              title="Brand"
              href="/dashboard-admin/brand"
              isActive={router.pathname === "/dashboard-admin/brand"}
            />
          </div>
        </div>
        <div className="mt-[35px]">
          <h4 className="text-[11px] leading-[14px] text-[#8B909A]">
            PRODUCTS
          </h4>
          <div className="mt-[15px] flex flex-col">
            <NavLink
              icon={<IoAddCircleOutline />}
              title="Add Product"
              href="/dashboard-admin/product/add"
              isActive={router.pathname === "/dashboard-admin/product/add"}
            />
            <NavLink
              icon={<IoLogoDropbox />}
              title="Products List"
              href="/dashboard-admin/product"
              isActive={router.pathname === "/dashboard-admin/product"}
            />
          </div>
        </div>
      </div>
      <div className="max-h-screen basis-5/6 bg-[#FAFAFA] p-4 overflow-auto">
        <div className="flex justify-between items-center mb-5">
          <span>{title}</span>
          <div className="flex gap-x-2 items-center">
            <span>
              <IconLink
                to="/dashboard-admin"
                icon={<IoNotificationsOutline size={20} />}
              />
            </span>
            <span className="relative w-5 h-5 overflow-hidden rounded-full">
              <Image src="/womanavatar.jpg" alt="" fill objectFit="cover" />
            </span>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};

export default DashboardWrapper;
