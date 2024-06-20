import React, { useState } from "react";
import { Apple, Search, Bag } from "../assets";
import FlyoutLink from "./dropdowns/FlyoutLink";
import StoreDropdown from "./dropdowns/StoreDropdown";
import MacDropdown from "./dropdowns/MacDropdown";
import IPadDropdown from "./dropdowns/IPadDropdown";
import IPhoneDropdown from "./dropdowns/IPhoneDropdown";
import WatchDropdown from "./dropdowns/WatchDropdown";
import AirPodsDropdown from "./dropdowns/AirPodsDropdown";
import TvHomeDropdown from "./dropdowns/TvHomeDropdown";
import SupportDropdown from "./dropdowns/SupportDropdown";
import EntertaimentDropdown from "./dropdowns/EntertaimentDropdown";
import AccessoriesDropdown from "./dropdowns/AccessoriesDropdown";
import { navigation } from "../constants/data"; // Ensure the path is correct

const Navbar = ({ isOpen, setIsOpen }) => {
  const [hovering, setHovering] = useState(null);

  console.log(hovering);

  const handleOpen = () => setIsOpen(!isOpen);

  const handleMouseEnter = (index) => {
    setHovering(index.toString());
  };

  const handleMouseLeave = (index) => {
    if (hovering === index.toString()) {
      setHovering(null);
    }
  };

  return (
    <>
      {/* Desktop Navbar */}
      <div className=" fixed top-0 w-full z-50 bg-[#f5f5f7] hidden lg:block">
        <div
          className="relative text-[13px] sm:px-2 py-4 lg:py-[0.7rem] max-w-full flex lg:justify-center sm:justify-evenly items-center sm:gap-3 lg:gap-[2.5rem] md:gap-4"
          onMouseLeave={() => setHovering(null)}
        >
          <div>
            <a href="#">
              <Apple width="20px" height="22px" />
            </a>
          </div>
          {[
            { href: "#", Content: StoreDropdown, label: "Store" },
            { href: "#", Content: MacDropdown, label: "Mac" },
            { href: "#", Content: IPadDropdown, label: "iPad" },
            { href: "#", Content: IPhoneDropdown, label: "iPhone" },
            { href: "#", Content: WatchDropdown, label: "Watch" },
            { href: "#", Content: AirPodsDropdown, label: "AirPods" },
            { href: "#", Content: TvHomeDropdown, label: "TV & Home" },
            {
              href: "#",
              Content: EntertaimentDropdown,
              label: "Entertainment",
            },
            { href: "#", Content: AccessoriesDropdown, label: "Accessories" },
            { href: "#", Content: SupportDropdown, label: "Support" },
          ].map((item, index) => (
            <div
              key={index}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              <FlyoutLink
                href={item.href}
                Content={item.Content}
                hovering={hovering === index.toString()}
              >
                {item.label}
              </FlyoutLink>
            </div>
          ))}
          <div>
            <a href="#">
              <Search className="size-[20px]" />
            </a>
          </div>
          <div>
            <a href="#">
              <Bag className="size-[20px]" />
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div
        className={`w-full justify-between py-4 px-4 bg-[#f5f5f7] lg:hidden ${
          isOpen ? "hidden" : "flex"
        }`}
      >
        <div>
          <a href="#">
            <Apple width="24px" height="24px" />
          </a>
        </div>
        <div className="flex gap-8 justify-center items-center">
          <a href="#">
            <Search className="size-[24px]" />
          </a>
          <a href="#">
            <Bag className="size-[24px]" />
          </a>
          <a href="#" onClick={handleOpen}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-[24px]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 9h16.5m-16.5 6.75h16.5"
              />
            </svg>
          </a>
        </div>
      </div>
      {isOpen && (
        <>
          <div className="relative max-w-full flex flex-col z-10 ">
            <div className="absolute right-6 top-5">
              <a href="#" onClick={handleOpen}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-8 text-gray-700 hover:text-gray-900"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </a>
            </div>
            <ul className="flex flex-col gap-5 absolute top-[50px] left-[50px]">
              {navigation.map((item, index) => (
                <li key={index}>
                  {item.isSvg === "no" && (
                    <a className="text-2xl font-bold cursor-pointer text-gray-700 hover:text-gray-900">
                      {item.title}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;
