/* eslint-disable jsx-a11y/img-redundant-alt */
/** external deps */
import { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import dummy1 from "assets/images/dummy1.jpg";
import dummy2 from "assets/images/dummy2.jpg";
import dummy3 from "assets/images/dummy3.jpg";

/** internal deps */
// import { RArrow } from "@/assets/icons/RArrow";
// import FirstSlide from "./slide1";
// import { LArrow } from "@/assets/icons/LArrow";

// const NextArr = ({ gotoNext }) => {
//   return (
//     <button
//       aria-label="nextArrow"
//       type="button"
//       className=" group h-10 w-10 border border-black transition-all duration-700 hover:bg-black ease-in-out p-2 rounded-xl absolute right-4 md:right-12 lg:right-7 -bottom-4 md:-bottom-2 2xl:h-12 2xl:w-12"
//       onClick={gotoNext}
//     >
//       {/* <RArrow svgClass="fill-black group-hover:fill-white" /> */}
//     </button>
//   );
// };

// const PrevArr = ({ gotoPrev }) => {
//   return (
//     <button
//       aria-label="prevArrow"
//       type="button"
//       className=" group h-10 w-10 border border-black transition-all duration-700 hover:bg-black ease-in-out  p-2 rounded-xl absolute -bottom-4 md:-bottom-2 right-16 md:right-24 lg:right-20 2xl:h-12 2xl:w-12"
//       onClick={gotoPrev}
//     >
//       {/* <LArrow svgClass="fill-black group-hover:fill-white" /> */}
//     </button>
//   );
// };

const ClientSlider = () => {
  const sliderRef = useRef();

  // const gotoNext = () => {
  //   return sliderRef.current.slickNext();
  // };
  // const gotoPrev = () => {
  //   return sliderRef.current.slickPrev();
  // };

  const [currentSlide, setCurrentSlide] = useState(0);

  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 3000,
    beforeChange: (current, next) => setCurrentSlide(next),
    customPaging: (i) => (
      <div
        className={`h-2 w-2 -ml-4 md:ml-0 rounded-[3px] transition-all duration-500 ${
          i === currentSlide ? "w-full ease-linear  bg-primary" : "bg-gray-300"
        } `}
      ></div>
    ),
    // nextArrow: <NextArr gotoNext={gotoNext} />,
    // prevArrow: <PrevArr gotoPrev={gotoPrev} />,
  };

  const SliderData = [
    {
      text: "Convenience in monitoring past orders is notable, and the inclusion of  ",
      spanText: "sales reports and profitability",
      remainText:
        "reports adds valuable functionalities. Quick response times and friendly and resourceful assistance",
      author: "Jack Brute",
      position: "Logistic Analyst",
      index: 0,
      img: dummy1,
    },
    {
      text: "Our dispatch team loves the real-time visibility and control your system provides. It has made  ",
      spanText: "coordinating deliveries",
      remainText: "and optimizing routes a much smoother process",
      author: "Winston Thomas",
      position: "HR Manager",
      index: 1,
      img: dummy2,
    },
    {
      text: "Your CRM system has enhanced our client relationships. We now have a better understanding of their needs and can proactively address their concerns ",
      spanText: ", leading to increased customer",
      remainText: "satisfaction",
      author: "Albert Flores",
      position: "Product Manager",
      index: 2,
      img: dummy3,
    },
  ];

  const mySliderUi = SliderData.map((ele) => {
    const { text, img } = ele;
    return (
      <div className="relative h-[20rem] w-full">
        <img
          src={img}
          className="h-[20rem] object-cover w-full rounded-2xl"
          alt="image"
        />
        <div className="absolute bg-[#00000088] h-[20rem] top-0 p-6 text-white text-xl font-semibold rounded-2xl overflow-hidden w-full text-left flex items-end">
          {text}
        </div>
      </div>
    );
  });

  return (
    <div className=" h-full w-full flex flex-col items-center">
      <div className="h-full text-center w-full">
        <Slider ref={sliderRef} {...settings}>
          {mySliderUi}
        </Slider>
      </div>
    </div>
  );
};

export default ClientSlider;
