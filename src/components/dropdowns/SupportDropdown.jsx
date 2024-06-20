import React from "react";

export default function SupportDropdown() {
  return (
    <div className=" w-[100vw] ">
      {/* bg-[#f5f5f7] */}
      <div className="bg-[#f5f5f7] shadow-xl ">
        <div className=" flex w-full lg:px-[13.8rem] md:px-[0.8rem] md:pt-[1rem] lg:pt-[2rem] pb-[5rem]  gap-[4rem]">
          <div className="flex flex-col gap-2   items-start ">
            <h1 className=" text-gray-400 text-[1rem]">Explore Support</h1>
            <ul className=" text-3xl font-bold flex flex-col gap-4 tracking-wide">
              <li>iPhone</li>
              <li>Mac</li>
              <li>iPad</li>
              <li>Watch</li>
              <li>AirPods</li>
              <li>Music</li>
              <li>TV</li>
            </ul>
            <div className=" pt-2">
              <h1 className="text-gray-400 text-[1rem]">Explore Support</h1>
            </div>
          </div>
          <div className="flex flex-col gap-2   ">
            <h1 className=" text-gray-400 text-[1rem]">Get Help</h1>
            <ul className=" flex flex-col gap-4">
              <li>Community</li>
              <li>Check Coverage</li>
              <li>Repair</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="flex flex-col gap-2   ">
            <h1 className=" text-gray-400 text-[1rem]">Helpful Topics</h1>
            <ul className=" flex flex-col gap-4">
              <li>Get AppleCare+</li>
              <li>Apple ID & Password</li>
              <li>Billing & Subscriptions</li>
              <li>Find My</li>
              <li>Accessibility</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
