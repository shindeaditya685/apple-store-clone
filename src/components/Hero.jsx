import React from "react";
import { chatStore } from "../constants/data";
import { ModelImg } from "../assets";
import LocationDot from "./svg/LocationDot";
import ImageSlider from "./ImageSlider";

export default function Hero() {
  return (
    <div>
      <div className=" lg:py-[6rem] py-[4rem] px-[1rem] lg:px-[1rem] xl:px-[10rem] grid grid-cols-3 lg:gap-[10rem] md:gap-[4rem] gap-[3rem] ">
        <div className="  md:col-span-2 col-span-3 ">
          <p className=" font-[500] text-[#7b7b80] lg:text-[3.5rem] text-[2.5rem] tracking-tight leading-[2.5rem] lg:leading-[3.8rem]">
            <span className=" text-[#1d1d1f]">Store.</span> The best way to buy
            the products you love.
          </p>
        </div>
        <div className="  md:col-span-1 col-span-3">
          <div className=" flex-col justify-center items-center">
            <div className=" pb-6 flex gap-3 items-center">
              <img className=" w-11 h-11 " src={ModelImg} alt="Model Image" />
              <div>
                <p className=" font-[500] text-[1rem]">Need shopping help?</p>
                <p className=" font-[400] text-[#0066cc] hover:underline hover:underline-offset-4 cursor-pointer">
                  Ask a Specialist
                </p>
              </div>
            </div>
            <div className=" flex gap-3 items-center">
              <div>
                <LocationDot width={43} height={34} />
              </div>
              <div>
                <p className="font-[500] text-[1rem]">Visit an Apple Store</p>
                <p className=" font-[400] text-[#0066cc] hover:underline hover:underline-offset-4 cursor-pointer">
                  Find one near you {">"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ImageSlider />
      <div className="lg:pt-[2.5rem] py-[4rem] px-[1rem] lg:px-[1rem] xl:px-[10rem]">
        <p className=" font-[500] text-[2.3rem] tracking-tight leading-[3.8rem] text-[#1d1d1f]">
          The latest.{" "}
          <span className="  text-[#7b7b80] ">
            Take a look at what’s new right now.
          </span>
        </p>
      </div>
    </div>
  );
}
