import React from "react";

export default function StoreDropdown() {
  return (
    <div className=" w-[100vw] ">
      {/* bg-[#f5f5f7] */}
      <div className="bg-[#f5f5f7] shadow-xl ">
        <div className=" flex w-full lg:px-[13.8rem] md:px-[0.8rem] md:pt-[1rem] lg:pt-[2rem] pb-[5rem]  gap-[4rem]">
          <div className="flex flex-col gap-2 justify-center items-start ">
            <h1 className=" text-gray-400 text-[1rem]">shop</h1>
            <ul className=" text-3xl font-bold flex flex-col gap-4 tracking-wide">
              <li>Shop the Latest</li>
              <li>Mac</li>
              <li>iPad</li>
              <li>iPhone</li>
              <li>Apple Watch</li>
              <li>Accessories</li>
            </ul>
          </div>
          <div className="flex flex-col gap-2   ">
            <h1 className=" text-gray-400 text-[1rem]">Quick Links</h1>
            <ul className=" flex flex-col gap-4">
              <li>Find a sotre</li>
              <li>Order Status</li>
              <li>Ways to Buy</li>
            </ul>
          </div>
          <div className="flex flex-col gap-2   ">
            <h1 className=" text-gray-400 text-[1rem]">Shop Special Stores</h1>
            <ul className=" flex flex-col gap-4">
              <li>Education</li>
              <li>Business</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
