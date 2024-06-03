import Image from "next/image";
import React from "react";
import { Sparkle } from "lucide-react";

const Testimonial = () => {
  return (
    <div className="max-w-7xl md:grid grid-cols-12 w-full mx-auto mt-[30px]  items-center font-clash">
      <div className="md:col-span-6">
        <Image
          src={"/featured.png"}
          width={600}
          height={600}
          alt="featured-image"
        />
      </div>
      <div className="md:col-span-6">
        <p className="text-[#FF5555]">Features</p>

        <h2 className="text-[40px] capitalize font-bold">uifry premium</h2>

        {Array(3)
          .fill(0)
          .map((idx) => (
            <div className="my-5" key={idx}>
              <h3 className="my-2 capitalize flex items-center gap-2">
                {" "}
                <Sparkle color="#FF5555" size={15} /> budgeting intervals
              </h3>
              <p className="text-sm text-gray-500">
                Cum et convallis risus placerat aliquam, nunc. Scelerisque
                aliquet faucibus tincidunt eu adipiscing sociis arcu lorem
                porttitor.
              </p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Testimonial;
