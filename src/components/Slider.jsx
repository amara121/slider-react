import React, { useState, useEffect } from "react";
import data from "../data/data";

function Slider() {
  const [slideIndex, setSlideIndex] = useState(1);

  const defilementImage = () => {
    if (slideIndex !== data.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === data.length) {
      setSlideIndex(1);
    }
  };

  const decrement = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(data.length);
    }
  };

  const handleDot = (index) => {
    setSlideIndex(index);
  };

  useEffect(() => {
    const keyId = setInterval(defilementImage, 5000);

    return () => {
      clearInterval(keyId);
    };
  }, [slideIndex]);

  return (
    <div className="w-full flex justify-center">
      <div className="max-w-sm w-full relative h-60">
        {data.map((slider, index) => (
          <div
            key={slider.id}
            className={` ${
              slideIndex === index + 1 ? "opacity-100" : "opacity-0"
            } w-full absolute top-0 transition-opacity overflow-hidden`}
          >
            <p className="absolute text-white text-3xl m-10 z-20">
              {slider.titre}
            </p>
            <img
              className={`max-w-sm w-full h-60 transform transition-transform duration-1000 scale-100 ${
                slideIndex === index + 1 ? "scale-105" : "scale-0"
              }`}
              src={process.env.PUBLIC_URL + `/img/image${index + 1}.jpeg`}
              alt=""
            />
          </div>
        ))}
        <div className="w-full flex justify-between absolute z-50 top-1/2 -mt-3 text-white">
          <button onClick={decrement}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"
              />
            </svg>
          </button>
          <button onClick={defilementImage}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
        </div>
        <div className="relative flex justify-center w-full mt-10 z-10 top-3/4">
          {Array.from({ length: 5 }).map((item, index) => (
            <div className="w-6" key={index}>
              <span
                onClick={() => handleDot(index + 1)}
                className={`${
                  slideIndex === index + 1 ? "bg-blue-300" : "bg-transparent"
                } absolute w-3 h-3 border-2 border-blue-300 rounded-full`}
              ></span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Slider;
