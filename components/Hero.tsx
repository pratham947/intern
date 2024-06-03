import React from "react";
import { MoveRight, CirclePlay } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="md:grid grid-cols-12 max-w-7xl w-full mx-auto mt-[70px] font-clash">
      <div className="relative md:col-span-6 px-14">
        <div>
          <h1 className="text-5xl capitalize font-bold">
            Make The best <br /> financial decisions
          </h1>

          <p className="mt-5">
            Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
            faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
          </p>

          <div className="mt-5 flex gap-5">
            <button className="flex items-center gap-2 bg-[#000000] text-white p-4 justify-center">
              Get started <MoveRight />{" "}
            </button>
            <button className="flex items-center justify-center gap-2">
              <CirclePlay />
              watch video
            </button>
          </div>

          <Image
            src="/ribin.png"
            width={450}
            height={450}
            objectFit="contain"
            alt="ribin"
          />
        </div>
      </div>

      <div className="relative md:col-span-6">
        <Image className="absolute right-20" src={"/ring.png"} width={500} height={500} alt="ring"/>
        <Image
          className="absolute z-30"
          width={450}
          height={450}
          src={"/phone1.png"}
          alt="phone1"
        />
        <Image
          className="absolute z-20 top-[50px] left-[100px]"
          width={450}
          height={450}
          src={"/phone1.png"}
          alt="phone1"
        />
        <Image
          className="absolute z-10 top-[90px] left-[200px]"
          width={450}
          height={450}
          src={"/phone1.png"}
          alt="phone1"
        />
      </div>
    </div>
  );
};

export default Hero;
