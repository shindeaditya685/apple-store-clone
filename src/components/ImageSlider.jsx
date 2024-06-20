import React, { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { imageSlider } from "../constants/data";

export default function ImageSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevious = () => {
    setCurrentSlide(currentSlide === 0 ? 0 : currentSlide - 1);
  };

  const handleNext = () => {
    setCurrentSlide(
      currentSlide === imageSlider.length - 8 ? currentSlide : currentSlide + 1
    );
  };

  return (
    <div className="  group  relative lg:py-[1rem] px-[1rem] lg:px-[1rem] xl:pl-[10rem] flex justify-center items-center">
      {currentSlide > 0 && (
        <BsArrowLeftCircleFill
          onClick={handlePrevious}
          className="opacity-50 ease-in-out sm:hidden arrow left-8 hidden group-hover:block absolute transition-transform duration-900 hover:scale-125 cursor-pointer z-50"
        />
      )}
      <div className="  overflow-hidden w-full relative">
        <div
          className="flex overflow-x-auto hideScroll gap-6 transition-transform duration-500"
          style={{ transform: `translateX(-${currentSlide * 12.5}%)` }} // Adjust for smooth scrolling
        >
          {imageSlider.map((item, index) => (
            <div
              key={index}
              className=" cursor-pointer flex-shrink-0 flex flex-col gap-4  text-center"
            >
              <img
                className=" hover:scale-105 object-fit w-[140px] h-[100px] mx-auto"
                src={item.img}
                alt={item.title}
              />
              <p>{item.title}</p>
            </div>
          ))}
        </div>
      </div>
      {currentSlide < imageSlider.length - 8 && (
        <BsArrowRightCircleFill
          onClick={handleNext}
          className="opacity-50 sm:hidden arrow right-8 hidden group-hover:block absolute transition-transform duration-900 hover:scale-125 cursor-pointer z-50"
        />
      )}
    </div>
  );
}
