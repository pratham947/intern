import Image from "next/image";
import Link from "next/link";
import NavbarLinks from "./subcomponents/NavbarLinks";

const Navbar = () => {
  return (
    <nav className="relative max-w-7xl w-full flex md:grid grid-cols-12 items-center px-4 py-4 md:px-8 mx-auto font-clash">
      <div className="flex items-center md:col-span-8">
        <Link href={"/"}>
          <Image
            src="/logo.png"
            width={100}
            height={100}
            alt="logo"
            objectFit="contain"
          />
        </Link>
        <div className="mx-9">
          <NavbarLinks />
        </div>
      </div>
      <div className="md:col-span-4 flex justify-end">
        <button className="w-[140px] h-[50px] bg-[#000000] text-white">
          Download
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
