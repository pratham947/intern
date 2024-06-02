import Image from "next/image";
import React from "react";
import { Sparkle } from "lucide-react";

const Customizable = () => {
  return (
    <div className="max-w-7xl md:grid grid-cols-12 w-full mx-auto mt-[30px]  items-center font-clash justify-center">
      <div className="md:col-span-6">
        <Image
          src={"/featured.png"}
          width={600}
          height={600}
          alt="featured-image"
        />
      </div>
      <div className="md:col-span-6">
        <div className="">
          <div className="flex my-4 gap-2">
            <div className="w-[30px] h-[30px] bg-red-500 flex justify-center items-center rounded-full">
              <Sparkle width={20} height={20} color="white" />
            </div>
            <h3 className="text-2xl capitalize"> fully customizable</h3>
          </div>
          <p className="text-gray-500">
            Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies.
            In ultrices malesuada elit mauris etiam odio. Duis tristique lacus,
            et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse
            sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien,
            suspendisse aliquam.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Customizable;
