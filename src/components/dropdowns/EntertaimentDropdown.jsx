import React from "react";

export default function EntertaimentDropdown() {
  return (
    <div className=" w-[100vw] ">
      {/* bg-[#f5f5f7] */}
      <div className="bg-[#f5f5f7] shadow-xl ">
        <div className=" flex w-full lg:px-[13.8rem] md:px-[0.8rem] md:pt-[1rem] lg:pt-[2rem] pb-[5rem]  gap-[4rem]">
          <div className="flex flex-col gap-2   items-start ">
            <h1 className=" text-gray-400 text-[1rem]">
              Explore Entertainment
            </h1>
            <ul className=" text-3xl font-bold flex flex-col gap-4 tracking-wide">
              <li>Explore Entertainment </li>
              <li>Apple One</li>
              <li>Apple TV+</li>
              <li>Apple Music</li>
              <li>Apple Arcade</li>
              <li>Apple Podcasts</li>
              <li>Apple Books</li>
              <li>App Store</li>
            </ul>
          </div>
          <div className="flex flex-col gap-2   ">
            <h1 className=" text-gray-400 text-[1rem]">Support</h1>
            <ul className=" flex flex-col gap-4">
              <li>Apple TV+ Support</li>
              <li>Apple Music Support</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
