import React, { useState, useEffect } from "react";

export default function EMI() {
  const [isInitialState, setIsInitialState] = useState(true);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsInitialState(false);
    }, 3000);

    setVisible(true);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`-z-[100] w-full transition-all duration-700 transform ${
        visible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      }`}
    >
      <div
        className={`flex justify-center text-center items-center py-5 lg:p-6
           px-[1.5rem] ${
             isInitialState ? "bg-sky-500 text-white" : "bg-white text-gray-800"
           }`}
      >
        <p className="lg:text-[1.1rem] text-md lg:tracking-tight">
          Get up to 24 months No Cost EMI on all iPhone models from most leading
          banks.<sup>§</sup>
          <span
            className={`cursor-pointer hover:underline hover:underline-offset-4 ${
              !isInitialState && "text-sky-600"
            }`}
          >
            {" "}
            Learn more {">"}
          </span>
        </p>
      </div>
    </div>
  );
}
