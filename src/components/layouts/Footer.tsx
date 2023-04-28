import Link from "next/link";
import { FC } from "react";
import SocialLink from "../links/SocialLink";
// import IconLink from "../links/IconLink";
// import SearchBox from "../inputs/SearchBox";
// import Logo from "../customs/Logo";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaMapMarkerAlt,
} from "react-icons/fa";

type FooterLinksProps = {
  title: string;
  links: string[];
};

const FooterLinks: FC<FooterLinksProps> = ({ title, links }) => {
  return (
    <div className="flex flex-col gap-y-3">
      <h3 className="text-4 text-white leading-[22px] font-medium">{title}</h3>
      {links.map((link, i) => (
        <Link
          key={i}
          href={`/`}
          className="text-4 text-[#B6B6B6] leading-[22px] font-medium"
        >
          {link}
        </Link>
      ))}
    </div>
  );
};

const Footer = () => {
  return (
    <div className="flex flex-col gap-y-10 md:flex-row justify-between p-5 md:py-8 md:px-15 bg-[#1B4B66]">
      <div className="flex flex-col md:flex-row gap-y-5 md:gap-x-24">
        <FooterLinks
          title="Shop By Category"
          links={[
            "Skincare",
            "Personal Care",
            "Handbags",
            "Apparels",
            "Watches",
            "Eye Wear",
            "Jewelery",
          ]}
        />
        <FooterLinks
          title="About"
          links={["Contact Us", "About Us", "Careers", "Press"]}
        />
        <FooterLinks
          title="Policy"
          links={[
            "Return Policy",
            "Terms of Use",
            "Sitemap",
            "Security",
            "Privacy",
            "EPR Compliance",
          ]}
        />
      </div>
      <div className="flex flex-col gap-y-2">
        <div className="flex gap-x-2">
          <SocialLink to="/" icon={<FaFacebook />} />{" "}
          <SocialLink to="/" icon={<FaInstagram />} />
          <SocialLink to="/" icon={<FaTwitter />} />
          <SocialLink to="/" icon={<FaYoutube />} />
        </div>
        <div className="flex gap-x-2 items-center text-white">
          <FaMapMarkerAlt /> Nigeria
        </div>
        <p className="text-[#B6B6B6]">
          © 2023 | Halal Mall All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
