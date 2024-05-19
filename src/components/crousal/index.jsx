import { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import dummy1 from "assets/images/dummy1.jpg";
import dummy2 from "assets/images/dummy2.jpg";
import dummy3 from "assets/images/dummy3.jpg";



const ClientSlider = () => {
  const sliderRef = useRef();
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
  };

  const SliderData = [
    {
      text: "City Lights: Discovering the Enchanting Beauty and Vibrant Energy of Urban Nightscapes Around the World",
      spanText: "sales reports and profitability",
      remainText:
        "reports adds valuable functionalities. Quick response times and friendly and resourceful assistance",
      author: "Jack Brute",
      position: "Logistic Analyst",
      index: 0,
      img: dummy1,
    },
    {
      text: "Exploring the Depths: The Wonders and Mysteries of the Ocean Unveiled",
      spanText: "coordinating deliveries",
      remainText: "and optimizing routes a much smoother process",
      author: "Winston Thomas",
      position: "HR Manager",
      index: 1,
      img: dummy2,
    },
    {
      text:"Deserts: Unveiling the Surreal Beauty and Hidden Wonders of the World's Arid Landscapes",
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
        <div className="absolute bg-[#00000088] h-[20rem] top-0 p-6 text-white md:text-xl  font-semibold rounded-2xl overflow-hidden w-full text-left flex items-end">
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
