import { FaArrowRight,FaArrowLeft } from "react-icons/fa";
import React, { useState } from "react";

const ModalImg = (props) => {
    const [slide, setSlide] = useState(props.indexImgClick);

    const nextSlide = (event) => {
        event.stopPropagation();
        setSlide(slide === props.data.length - 1 ? 0 : slide + 1);
    };

    const prevSlide = (event) => {
        event.stopPropagation();
        setSlide(slide === 0 ? props.data.length - 1 : slide - 1);
    };

    return (
        <>
            <div
                className="fixed left-0 top-0 bg-black bg-opacity-50 w-screen h-screen opacity-100 p-5"
                onClick={props.onClose}
            >
              <span className="text-white font-Montserrat text-[16px]">{slide+1}/{props.data.length}</span>
                <FaArrowLeft
                    onClick={prevSlide}
                    className="bg-black rounded-full md:bg-transparent p-2 absolute top-1/2 left-0 transform -translate-y-1/2 cursor-pointer z-10"
                    size={32}
                    color="white"
                />

                <FaArrowRight
                    onClick={nextSlide}
                    className="bg-black rounded-full md:bg-transparent p-2 absolute top-1/2 right-0 transform -translate-y-1/2 cursor-pointer z-10"
                    size={32}
                    color="white"
                />
                <div className="absolute w-full md:w-auto top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    {props.data.map((item, index) => {
                        return (
                            <img
                                src={item.src}
                                alt={item.alt}
                                key={index}
                                className={`w-full h-full ${
                                    slide === index ? "block" : "hidden"
                                }`}
                            />
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default ModalImg;
