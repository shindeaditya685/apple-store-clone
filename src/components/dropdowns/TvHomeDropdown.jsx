import React from "react";

export default function TvHomeDropdown() {
  return (
    <div className=" w-[100vw] ">
      {/* bg-[#f5f5f7] */}
      <div className="bg-[#f5f5f7] shadow-xl ">
        <div className=" flex w-full lg:px-[13.8rem] md:px-[0.8rem] md:pt-[1rem] lg:pt-[2rem] pb-[5rem]  gap-[4rem]">
          <div className="flex flex-col gap-2   items-start ">
            <h1 className=" text-gray-400 text-[1rem]">Explore TV & Home</h1>
            <ul className=" text-3xl font-bold flex flex-col gap-4 tracking-wide">
              <li>Explore TV & Home</li>
              <li>Apple TV 4K</li>
              <li>HomePod</li>
              <li>HomePod mini</li>
            </ul>
          </div>
          <div className="flex flex-col gap-2   ">
            <h1 className=" text-gray-400 text-[1rem]">Shop TV & Home</h1>
            <ul className=" flex flex-col gap-4">
              <li>Shop Apple TV & 4K</li>
              <li>Shop HomePod</li>
              <li>Shop HomePod mini</li>
              <li>Shop Siri Remote</li>
              <li>TV & Home Accessories</li>
            </ul>
          </div>
          <div className="flex flex-col gap-2   ">
            <h1 className=" text-gray-400 text-[1rem]">More from TV & Home</h1>
            <ul className=" flex flex-col gap-4">
              <li>Apple TV Support</li>
              <li>HomePod Support</li>
              <li>AppleCare+</li>
              <li>Apple TV app</li>
              <li>App TV+</li>
              <li>Home app</li>
              <li>Apple Music</li>
              <li>Siri</li>
              <li>AirPlay</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
