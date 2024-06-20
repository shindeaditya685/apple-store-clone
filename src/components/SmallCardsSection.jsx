import React, { useState, useEffect, useRef } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { smallCards } from "../constants/data";
import { color } from "framer-motion";

export default function SmallCardsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [cardsToShowValue, setCardsToShowValue] = useState(1.2); // Default value
  const cardContainerRef = useRef(null);

  // Function to determine cards to show based on window width
  const calculateCardsToShow = () => {
    // xl, lg and md = 2, sm = 1.9, 1.2
    const width = window.innerWidth;
    if (width >= 1200) return 2.4;
    if (width >= 992) return 2.2;
    if (width >= 768) return 2;
    if (width >= 576) return 2.1;
    return 1.5; // Base case, default
  };

  // console.log(calculateCardsToShow());

  // Set initial value and update on window resize
  useEffect(() => {
    setCardsToShowValue(calculateCardsToShow());
    const handleResize = () => {
      setCardsToShowValue(calculateCardsToShow());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalCards = smallCards.length;
  const cardWidth = cardContainerRef.current
    ? cardContainerRef.current.clientWidth / cardsToShowValue
    : 0;

  const handlePrevious = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? 0 : prevSlide - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide >= totalCards - Math.ceil(cardsToShowValue)
        ? prevSlide
        : prevSlide + 1
    );
  };

  return (
    <div className="group relative lg:pb-[6rem] pb-[20rem] px-[1rem] xl:pb-[3rem] lg:px-[1rem] flex justify-center items-center overflow-hidden">
      {currentSlide > 0 && (
        <BsArrowLeftCircleFill
          onClick={handlePrevious}
          className="opacity-50 ease-in-out sm:hidden arrow left-8 hidden group-hover:block absolute transition-transform duration-900 hover:scale-125 hover:shadow-2xl cursor-pointer z-50"
        />
      )}
      <div ref={cardContainerRef} className="overflow-hidden w-full relative">
        <div
          className="flex mt-6 mb-4 gap-6 transition-transform duration-500"
          style={{
            transform: `translateX(-${currentSlide * cardWidth}px)`,
          }}
        >
          {smallCards.map((item) => {
            const SvgIcon = item.svg;
            return (
              <div
                key={item.id}
                className="cursor-pointer rounded-xl bg-white relative shadow-md w-[22rem] h-[16rem] aspect-w-12 aspect-h-10 transition-transform duration-300 flex-shrink-0 hover:scale-105 hover:rounded-xl overflow-hidden"
              >
                <div className=" pt-4 px-4 flex flex-col gap-2">
                  <div className={` bg-[${item.svgColor}] `}>
                    <SvgIcon color={item.svgColor} />
                  </div>
                  <div>
                    <p
                      className=" text-2xl font-[600]"
                      style={{ color: `${item.remainingTextColor}` }}
                    >
                      <span
                        className={`${
                          item.isSpecial === "yes" ? "linearG" : ""
                        }`}
                        style={{
                          color: `${
                            item.isSpecial === "yes" ? "" : item.spanTextColor
                          }`,
                        }}
                      >
                        {" "}
                        {item.spanText}
                      </span>
                      {item.remainingText}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {currentSlide < totalCards - Math.ceil(cardsToShowValue) && (
        <BsArrowRightCircleFill
          onClick={handleNext}
          className="sm:hidden opacity-50 arrow right-8 hidden group-hover:block absolute transition-transform duration-900 hover:scale-125 cursor-pointer z-50"
        />
      )}
    </div>
  );
}
