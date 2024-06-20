import React from "react";

export default function AirPodsDropdown() {
  return (
    <div className=" w-[100vw] ">
      {/* bg-[#f5f5f7] */}
      <div className="bg-[#f5f5f7] shadow-xl ">
        <div className=" flex w-full lg:px-[13.8rem] md:px-[0.8rem] md:pt-[1rem] lg:pt-[2rem] pb-[5rem]  gap-[4rem]">
          <div className="flex flex-col gap-2 justify-center items-start ">
            <h1 className=" text-gray-400 text-[1rem]">Explore AirPods</h1>
            <ul className=" text-3xl font-bold flex flex-col gap-4 tracking-wide">
              <li>Explore All AirPods</li>
              <li>AirPods Pro 2nd generation</li>
              <li>AirPods 2nd generation</li>
              <li>AirPods 3rd generation</li>
              <li>AirPods Max</li>
            </ul>
            <div className=" pt-2">
              <h1 className=" text-gray-400 text-[1rem]">Compare AirPods</h1>
            </div>
          </div>
          <div className="flex flex-col gap-2   ">
            <h1 className=" text-gray-400 text-[1rem]">Shop AirPods</h1>
            <ul className=" flex flex-col gap-4">
              <li>Shop AirPods</li>
              <li>AirPods Accessories</li>
            </ul>
          </div>
          <div className="flex flex-col gap-2   ">
            <h1 className=" text-gray-400 text-[1rem]">More from AirPods</h1>
            <ul className=" flex flex-col gap-4">
              <li>AirPods Support</li>
              <li>AppleCare+ for Headphones</li>
              <li>Apple Music</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
