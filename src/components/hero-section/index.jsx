import Navbar from "components/Navbar";
import { AnimatedText } from "components/animated-text";
import React from "react";

const HeroSection = () => {
  return (
    <div className="hero-section  h-[18rem] md:h-[15rem] lg:h-[30rem] relative -mt-[6rem]">
      <div className="absolute bg-[#00000088] w-full h-full p-6">
        <AnimatedText />
      </div>
    </div>
  );
};

export default HeroSection;
