import { footer } from "@/utils/data/footer";
import React from "react";
import Image from "next/image";
import { Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <div className="max-w-7xl w-full flex flex-wrap justify-around mx-auto p-4 mt-[50px] font-clash">
      <div>
        <Image
          src={"/logo.png"}
          width={100}
          height={100}
          objectFit="contain"
          alt="logo"
        />
        <div className="flex my-4 gap-2">
          <Mail />
          <p>help@frybix.com</p>
        </div>
        <div className="flex my-4 gap-2">
          <Phone />
          <p>+1 234 456 678 89</p>
        </div>
      </div>
      {footer.map((data) => (
        <div key={data.title}>
          <h2 className="text font-medium text-xl">{data.title}</h2>
          <div>
            {data.subtitles.map((links) => (
              <div key={links} className="my-2 font-normal">
                <p>{links}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Footer;
