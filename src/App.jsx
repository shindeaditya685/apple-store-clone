import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import EMI from "./components/EMI";
import Hero from "./components/Hero";
import CardSection from "./components/CardSection";
import HeadingForCardSTwo from "./components/HeadingForCardSTwo";
import CardSectionSecond from "./components/CardSectionSecond";
import HeadingForSmallCards from "./components/HeadingForSmallCards";
import SmallCardsSection from "./components/SmallCardsSection";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [hovering, setHovering] = useState(null);
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
    <div>
      <Navbar
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        hovering={hovering}
        setHovering={setHovering}
      />
      <div className={`lg:pt-[2.2rem]  ${hovering !== null ? "blur-md" : ""}`}>
        {!isOpen && (
          <>
            {!isInitialState && <EMI />}
            <div className="bg-[#F5F7FA]">
              <Hero />
              <CardSection />
              <HeadingForCardSTwo />
              <CardSectionSecond />
              <HeadingForSmallCards />
              <SmallCardsSection />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
