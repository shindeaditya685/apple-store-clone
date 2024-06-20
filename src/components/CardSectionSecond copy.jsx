import React, { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { cardSectionTwo } from "../constants/data";

export default function CardSectionSecond() {
  const [currentSlide, setCurrentSlide] = useState(0);
  // xl, lg and md = 2, sm = 1.9, 1.2
  const cardsToShow = 1.2; // Number of cards to show at once (considering screen width)
  const totalCards = cardSectionTwo.length;

  const handlePrevious = () => {
    setCurrentSlide(currentSlide === 0 ? 0 : currentSlide - 1);
  };

  const handleNext = () => {
    setCurrentSlide(
      currentSlide >= totalCards - cardsToShow ? currentSlide : currentSlide + 1
    );
  };

  return (
    <div className="group relative pb-[6rem] px-[1rem] xl:pb-[3rem] lg:px-[1rem] flex justify-center items-center overflow-hidden">
      {currentSlide > 0 && (
        <BsArrowLeftCircleFill
          onClick={handlePrevious}
          className="opacity-50 ease-in-out sm:hidden arrow left-8 hidden group-hover:block absolute transition-transform duration-900 hover:scale-125 hover:shadow-2xl cursor-pointer z-50"
        />
      )}
      <div className="overflow-hidden w-full relative">
        <div
          className="flex mt-6 mb-4 gap-6 transition-transform duration-500"
          style={{
            transform: `translateX(-${(currentSlide * 100) / cardsToShow}%)`,
          }}
        >
          {cardSectionTwo.map((item, index) => (
            <div
              key={index}
              className=" cursor-pointer relative lg:w-[480px] shadow-md lg:h-[500px] w-[300px] h-[450px]  aspect-w-12 aspect-h-10 transition-transform duration-300 flex-shrink-0 hover:scale-105 hover:rounded-xl overflow-hidden"
            >
              <img
                className="w-full h-full block object-cover rounded-xl shadow-xl"
                src={item.img}
                alt={item.title}
              />
              <div className="absolute lg:left-[0.5rem]  lg:top-[0.5rem] left-[0.5rem] top-[0.3rem] flex  w-[95%] flex-col gap-1 p-4 rounded-xl">
                <h3
                  className={`text-[0.8rem] font-[500] ${
                    item.bg === "black" ? "text-white" : "text-[#7f7f83]"
                  }`}
                >
                  {item.title}
                </h3>
                <h1
                  className={`lg:text-[2rem] text-2xl font-bold ${
                    item.bg === "black" ? "text-white" : "text-[#1d1d1f]"
                  }`}
                >
                  {item.tagLine}
                </h1>
                {item.subTitle && (
                  <p
                    className={`lg:text-[1.3rem] text-[1rem] leading-1 ${
                      item.bg === "black" ? "text-white" : "text-[#7f7f83]"
                    }`}
                  >
                    {item.subTitle}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      {currentSlide < totalCards - cardsToShow && (
        <BsArrowRightCircleFill
          onClick={handleNext}
          className="sm:hidden opacity-50 arrow right-8 hidden group-hover:block absolute transition-transform duration-900 hover:scale-125 cursor-pointer z-50"
        />
      )}
    </div>
  );
}
