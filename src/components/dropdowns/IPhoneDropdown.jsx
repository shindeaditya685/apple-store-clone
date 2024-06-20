import React from "react";

export default function IPhoneDropdown() {
  return (
    <div className=" w-[100vw] ">
      {/* bg-[#f5f5f7] */}
      <div className="bg-[#f5f5f7] shadow-xl ">
        <div className=" flex w-full lg:px-[13.8rem] md:px-[0.8rem] md:pt-[1rem] lg:pt-[2rem] pb-[5rem]  gap-[4rem]">
          <div className="flex flex-col gap-2 justify-center items-start ">
            <h1 className=" text-gray-400 text-[1rem]">Explore iPhone</h1>
            <ul className=" text-3xl font-bold flex flex-col gap-4 tracking-wide">
              <li>Explore All iPhone</li>
              <li>iPhone 15 Pro</li>
              <li>iPhone 15</li>
              <li>iPhone 14</li>
              <li>iPhone 13</li>
              <li>iPhone SE</li>
            </ul>
            <div className=" pt-2">
              <h1 className=" text-gray-400 text-[1rem]">Compare iPhone</h1>
              <ul>
                <li className=" text-gray-400 pt-2">Switch from Android</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-2   ">
            <h1 className=" text-gray-400 text-[1rem]">Shop iPhone</h1>
            <ul className=" flex flex-col gap-4">
              <li>Shop iPhone</li>
              <li>iPhone Accessories</li>
              <li>Apple Trade In</li>
              <li>Ways to Buy</li>
            </ul>
          </div>
          <div className="flex flex-col gap-2   ">
            <h1 className=" text-gray-400 text-[1rem]">More from iPhone</h1>
            <ul className=" flex flex-col gap-4">
              <li>iPhone Support</li>
              <li>AppleCare+ for iPhone</li>
              <li>iOS 17</li>
              <li>Apps by Apple</li>
              <li>iPhone Privacy</li>
              <li>iClouds+</li>
              <li>Wallet</li>
              <li>Siri</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
