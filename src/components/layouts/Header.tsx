import Link from "next/link";
import { FC } from "react";
import IconLink from "../links/IconLink";
import SearchBox from "../inputs/SearchBox";
import Logo from "../customs/Logo";
import { FaRegHeart, FaUser, FaShoppingCart } from "react-icons/fa";

type NavLinkProps = {
  to: string;
  title: string;
};

const NavLink: FC<NavLinkProps> = ({ to, title }) => {
  return (
    <Link
      href={to}
      className="font-medium text-[14px] leading-[18px] text-[#171520]"
    >
      {title}
    </Link>
  );
};

const Header = () => {
  return (
    <div className="flex justify-between h-[80px] items-center px-[20px]">
      <div className="flex gap-x-5">
        <Link href="/">
          <Logo />
        </Link>
        <div className="hidden md:flex justify-center gap-x-[20px] items-center">
          <NavLink to="/category?q=bags" title="HandBags" />
          <NavLink to="/category?q=watches" title="Watches" />
          <NavLink to="/category?q=skincare" title="Skincare" />
          <NavLink to="/category?q=jewelery" title="Jewelery" />
          <NavLink to="/category?q=apparels" title="Apparels" />
          <NavLink to="/signup" title="Sign Up" />
          <NavLink to="/signin" title="Sign In" />
        </div>
      </div>
      <div className="flex justify-center gap-x-[20px] items-center">
        <div className="hidden md:block">
          <SearchBox />
        </div>
        <IconLink to="/wishlist" icon={<FaRegHeart />} />
        <IconLink to="/profile" icon={<FaUser />} />
        <IconLink to="/cart" icon={<FaShoppingCart />} />
      </div>
    </div>
  );
};

export default Header;
