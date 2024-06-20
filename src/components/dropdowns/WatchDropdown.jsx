import React from "react";

export default function WatchDropdown() {
  return (
    <div className=" w-[100vw] ">
      {/* bg-[#f5f5f7] */}
      <div className="bg-[#f5f5f7] shadow-xl ">
        <div className=" flex w-full lg:px-[13.8rem] md:px-[0.8rem] md:pt-[1rem] lg:pt-[2rem] pb-[5rem]  gap-[4rem]">
          <div className="flex flex-col gap-2 justify-center items-start ">
            <h1 className=" text-gray-400 text-[1rem]">Explore Watch</h1>
            <ul className=" text-3xl font-bold flex flex-col gap-4 tracking-wide">
              <li>Explore All Apple Watch</li>
              <li>Apple Watch Series 9</li>
              <li>Apple Watch Ultra 2</li>
              <li>Apple Watch SE</li>
              <li>Apple Watch Nike</li>
            </ul>
            <div className=" pt-2">
              <h1 className=" text-gray-400 text-[1rem]">Compare Watch</h1>
              <ul>
                <li className=" text-gray-400 pt-2">Why Apple Watch</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-2   ">
            <h1 className=" text-gray-400 text-[1rem]">Shop Watch</h1>
            <ul className=" flex flex-col gap-4">
              <li>Shop Apple Watch</li>
              <li>Apple Watch Straps</li>
              <li>Apple Watch Accessories</li>
              <li>Ways to Buy</li>
            </ul>
          </div>
          <div className="flex flex-col gap-2   ">
            <h1 className=" text-gray-400 text-[1rem]">More from Watch</h1>
            <ul className=" flex flex-col gap-4">
              <li>Apple Watch Support</li>
              <li>AppleCare+ </li>
              <li>watchOS 10</li>
              <li>Apps by Apple</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
