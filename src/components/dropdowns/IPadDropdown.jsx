import React from "react";

export default function IPadDropdown() {
  return (
    <div className=" w-[100vw] ">
      {/* bg-[#f5f5f7] */}
      <div className="bg-[#f5f5f7] shadow-xl ">
        <div className=" flex w-full lg:px-[13.8rem] md:px-[0.8rem] md:pt-[1rem] lg:pt-[2rem] pb-[5rem]  gap-[4rem]">
          <div className="flex flex-col gap-2 justify-center items-start ">
            <h1 className=" text-gray-400 text-[1rem]">Explore iPad</h1>
            <ul className=" text-3xl font-bold flex flex-col gap-4 tracking-wide">
              <li>Explore All iPad</li>
              <li>iPad Pro</li>
              <li>iPad Air</li>
              <li>iPad</li>
              <li>Apple Pencil</li>
              <li>Keyboards</li>
            </ul>
            <div className=" pt-2">
              <h1 className=" text-gray-400 text-[1rem]">Compare iPad</h1>
              <ul>
                <li className=" text-gray-400 pt-2">Why iPad</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-2   ">
            <h1 className=" text-gray-400 text-[1rem]">Shop iPad</h1>
            <ul className=" flex flex-col gap-4">
              <li>Shop iPad</li>
              <li>iPad Accessories</li>
              <li>Ways to Buy</li>
            </ul>
          </div>
          <div className="flex flex-col gap-2   ">
            <h1 className=" text-gray-400 text-[1rem]">More from Mac</h1>
            <ul className=" flex flex-col gap-4">
              <li>iPad Support</li>
              <li>AppleCare+ for iPad</li>
              <li>iPadOS 17</li>
              <li>Apps by Apple</li>
              <li>iClouds+</li>
              <li>Education</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
