import { AnimatedText } from "components/animated-text";
import React from "react";

const HeroSection = ({ title }) => {
  return (
    <div
      className={`${
        title === "COMPOSE" ? "hero-section-create " : "hero-section-blogs"
      } h-[18rem] md:h-[15rem] lg:h-[30rem] relative -mt-[6rem]`}
    >
      <div className="absolute bg-[#00000088] w-full h-full p-6">
        <AnimatedText title={title} />
      </div>
    </div>
  );
};

export default HeroSection;
