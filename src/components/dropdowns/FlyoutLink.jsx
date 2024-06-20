import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function FlyoutLink({ children, href, Content, hovering }) {
  const [open, setOpen] = useState(false);

  const showFlyout = open && Content;
  return (
    <div
      className=" "
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <a href={href} className=" relative">
        {children}
      </a>
      <AnimatePresence>
        {showFlyout && (
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            // style={{ zIndex: 100 }}
          >
            {/* bg-[#f5f5f7] */}
            <div className=" absolute lg:top-9 md:top-[2.4rem]  bg-[#f5f5f7] left-0 right-0 h-7 " />
            <div className="  hidden md:block absolute lg:top-14 md:top-[4rem] left-0 right-0 md:left-1/2 md:transform md:-translate-x-1/2 w-screen max-w-full text-black">
              <Content />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
