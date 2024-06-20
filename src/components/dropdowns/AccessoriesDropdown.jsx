import React from "react";

export default function AccessoriesDropdown() {
  return (
    <div className=" w-[100vw] ">
      {/* bg-[#f5f5f7] */}
      <div className="bg-[#f5f5f7] shadow-xl ">
        <div className=" flex w-full lg:px-[13.8rem] md:px-[0.8rem] md:pt-[1rem] lg:pt-[2rem] pb-[5rem]  gap-[4rem]">
          <div className="flex flex-col gap-2   items-start ">
            <h1 className=" text-gray-400 text-[1rem]">Shop Accessories</h1>
            <ul className=" text-3xl font-bold flex flex-col gap-4 tracking-wide">
              <li>Shop All Accessories </li>
              <li>Mac</li>
              <li>iPad</li>
              <li>iPhone</li>
              <li>Apple Watch</li>
              <li>AirPods</li>
              <li>TV & Home</li>
            </ul>
          </div>
          <div className="flex flex-col gap-2   ">
            <h1 className=" text-gray-400 text-[1rem]">Explore Accessories</h1>
            <ul className=" flex flex-col gap-4">
              <li>Made by Apple</li>
              <li>Beats by Dr. Dre</li>
              <li>AirTag</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
