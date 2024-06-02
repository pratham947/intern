import Image from "next/image";
import React from "react";
import { Sparkle } from "lucide-react";

const Advantages = () => {
  return (
    <div className="max-w-7xl md:grid grid-cols-12 w-full mx-auto mt-[30px]  items-center font-clash">
      <div className="md:col-span-6">
        <p className="text-[#FF5555]">Advantages</p>

        <h2 className="text-[40px] capitalize font-bold">why choose Uifry?</h2>

        <div className="my-5">
          <h3 className="my-2 capitalize flex items-center gap-2 text-lg font-medium">
            {" "}
            <div className="w-[30px] h-[30px] flex justify-center items-center rounded-full bg-[#FF5555]">
              <Sparkle size={15} color="white"/>
            </div>
            Clever notifications
          </h3>
          <p className="text-sm text-gray-500">
            Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies.
            In ultrices malesuada elit mauris etiam odio. Duis tristique lacus,
            et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse
            sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien,
            suspendisse aliquam.
          </p>
        </div>
      </div>
      <div className="md:col-span-6">
        <Image
          src={"/featured.png"}
          width={600}
          height={600}
          alt="featured-image"
        />
      </div>
    </div>
  );
};

export default Advantages;
