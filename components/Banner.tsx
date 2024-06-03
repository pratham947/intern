import React from "react";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="max-w-7xl w-full mx-auto p-4 mt-[50px]">
      <div className="relative w-full h-[500px] p-10">
        <Image alt="image" src="/frame.png" layout="fill" objectFit="contain" className="rounded" />
      </div>
    </div>
  );
};

export default Banner;
