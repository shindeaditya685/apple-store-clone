import React, { useState, useEffect, useRef } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { cardSection } from "../constants/data";

export default function CardSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [cardsToShowValue, setCardsToShowValue] = useState(3.5); // Default value
  const cardContainerRef = useRef(null);

  // Function to determine cards to show based on window width
  const calculateCardsToShow = () => {
    const width = window.innerWidth;
    if (width >= 1200) return 3.2;
    if (width >= 992) return 3.5;
    if (width >= 768) return 2.1;
    if (width >= 576) return 2.5;
    return 1.2; // Base case, default
  };

  console.log(calculateCardsToShow());

  // Set initial value and update on window resize
  useEffect(() => {
    setCardsToShowValue(calculateCardsToShow());
    const handleResize = () => {
      setCardsToShowValue(calculateCardsToShow());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalCards = cardSection.length;
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
    <div className="group relative px-[1rem] xl:pb-[4rem] lg:px-[1rem] flex justify-center items-center overflow-hidden">
      {currentSlide > 0 && (
        <BsArrowLeftCircleFill
          onClick={handlePrevious}
          className="opacity-50 ease-in-out sm:hidden arrow left-8 hidden group-hover:block absolute transition-transform duration-900 hover:scale-125 cursor-pointer z-50"
        />
      )}
      <div ref={cardContainerRef} className="overflow-hidden w-full relative">
        <div
          className="flex xl:my-6 mt-6 mb-10 gap-6 transition-transform duration-500"
          style={{
            transform: `translateX(-${currentSlide * cardWidth}px)`,
          }}
        >
          {cardSection.map((item, index) => (
            <div
              key={index}
              className="cursor-pointer relative lg:w-[400px] lg:h-[500px] shadow-md w-[300px] h-[450px] aratio transition-transform duration-300 flex-shrink-0 hover:scale-105 hover:rounded-xl overflow-hidden"
            >
              <img
                className="w-full h-full object-cover rounded-xl shadow-xl"
                src={item.image}
                alt={item.tagline}
              />
              <div className="absolute left-[2rem] top-[1.5rem] flex xl:w-[50%] flex-col gap-2">
                <h3
                  className={`text-[0.8rem] font-[500] ${
                    item.bg === "black" ? "text-[#ffffff]" : "text-[#7f7f83]"
                  }`}
                >
                  {item.productName}
                </h3>
                <h1
                  className={`text-2xl font-bold ${
                    item.bg === "black" ? "text-[#ffffff]" : "text-[#1d1d1f]"
                  }`}
                >
                  {item.tagline}
                </h1>
                <p
                  className={`${
                    item.bg === "black" ? "text-[#ffffff]" : "text-[#7f7f83]"
                  }`}
                >
                  {item.price}
                </p>
              </div>
            </div>
          ))}
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
