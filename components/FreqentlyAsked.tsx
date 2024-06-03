import { frequentlyquestions } from "@/utils/data/frequentlyquestinon";
import React from "react";

const FreqentlyAsked = () => {
  return (
    <div className="md:max-w-7xl mx-auto p-4 mt-[50px] font-clash">
      <div>
        <p className="text-[#FF5555]">FAQ</p>
        <h2 className="text-[40px] capitalize font-bold">
          Frequently asked <br /> questions
        </h2>
      </div>
      <div className="w-full md:flex flex-wrap mt-[10px] justify-between">
        {frequentlyquestions.map((question) => (
          <div
            className={`mt-5 w-[100%] md:w-[48%] bg-[${question.bg}] p-5 rounded`}
            key={question.id}
          >
            <div>
              <h3
                className={`${
                  question.bg == "white" ? "text-black" : "text-white"
                } text-[20px] capitalize my-3 `}
              >
                {question.title}
              </h3>
              <p
                className={`${
                  question.bg == "white" ? "text-gray-500" : "text-white"
                }`}
              >
                {question.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FreqentlyAsked;
