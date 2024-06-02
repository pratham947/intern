import { navbarLinks } from "@/utils/data/navbarlinks";
import React from "react";
import Link from "next/link";

const NavbarLinks = () => {
  return (
    <div className="hidden md:flex items-center gap-9">
      {navbarLinks.map(({ id, title }) => (
        <Link
          href="/"
          key={id}
          className={`text-lg font-noraml ${
            title == "Home" && "text-[#FF5555] font-bold"
          }`}
        >
          {title}
        </Link>
      ))}
    </div>
  );
};

export default NavbarLinks;
