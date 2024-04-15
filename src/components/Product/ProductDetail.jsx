import React, { useState, useEffect } from "react";
import {
    FaChevronRight,
    FaChevronLeft,
    FaChevronDown,
    FaChevronUp,
} from "react-icons/fa";
import ModalImg from "./ModalImg";
import { CiHeart } from "react-icons/ci";
import BtnAddtocart from "../Button/BtnAddtocart";
import PlusMinusInput from "../Input/PlusMinusInput";

const ProductDetail = () => {
    const data = [
        {
            src: "https://nhaxinh.com/wp-content/uploads/2024/02/armchair-xoay-jadora-360-do-nhieu-lua-chon-15.jpg",
            alt: "Image 1 for carousel",
        },
        {
            src: "https://nhaxinh.com/wp-content/uploads/2024/02/armchair-xoay-jadora-360-do-nhieu-lua-chon-17.jpg",
            alt: "Image 2 for carousel",
        },
        {
            src: "https://nhaxinh.com/wp-content/uploads/2024/02/armchair-xoay-jadora-360-do-nhieu-lua-chon-16.jpg",
            alt: "Image 3 for carousel",
        },
        {
            src: "https://nhaxinh.com/wp-content/uploads/2024/02/armchair-xoay-jadora-360-do-nhieu-lua-chon-19.jpg",
            alt: "Image 3 for carousel",
        },
        {
            src: "https://nhaxinh.com/wp-content/uploads/2024/02/armchair-xoay-jadora-360-do-nhieu-lua-chon-4.jpg",
            alt: "Image 3 for carousel",
        },
    ];
    const [slide, setSlide] = useState(0);
    const [imgActive, setImgActive] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [clickedImgModal, setClickedImgModal] = useState(null);

    useEffect(() => {
        setImgActive(slide); // cập nhật lại ảnh active
    }, [slide]);

    const nextSlide = () => {
        setSlide(slide === data.length - 1 ? 0 : slide + 1);
    };

    const prevSlide = () => {
        setSlide(slide === 0 ? data.length - 1 : slide - 1);
    };
    const clickSlide = (index) => {
        setSlide(index);
        setImgActive(index);
    };

    const handleClickImage = (index) => {
        setIsModalOpen(true);
        setClickedImgModal(index)
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };
    return (
        <>
            <div className="container md:max-w-[1280px] flex mx-auto p-3">
                <a
                    href=""
                    className="cursor-pointer text-[#666666] font-light text-[14px]"
                >
                    Trang chủ <span>/</span>
                </a>
                <a
                    href=""
                    className="cursor-pointer text-[#666666] font-light text-[14px] ml-1"
                >
                    Phòng khách <span>/</span>
                </a>
                <a
                    href=""
                    className="cursor-pointer text-[#666666] font-light text-[14px] ml-1"
                >
                    Armchair
                </a>
            </div>

            <div className="p-3 mt-2 h-auto md:flex md:max-w-[1280px] justify-between mx-auto">
                <div className="w-full h-full md:w-[50%] overflow-hidden relative cursor-pointer group">
                    <div
                        className="flex transition-transform ease-in-out duration-500"
                        style={{ transform: `translateX(-${slide * 100}%)` }}
                    >
                        {data.map((item, index) => {
                            return (
                                <img
                                    src={item.src}
                                    alt={item.alt}
                                    key={index}
                                    className="w-full h-full bg-cover"
                                    onClick={() => handleClickImage(index)}                                
                                />
                            );
                        })}
                    </div>
                    <FaChevronLeft
                        onClick={prevSlide}
                        className="hidden absolute top-1/2 left-0 transform -translate-y-1/2 md:block cursor-pointer md:opacity-0 group-hover:opacity-100"
                        size={32}
                    />
                    <FaChevronRight
                        onClick={nextSlide}
                        className="hidden absolute top-1/2 right-0 transform -translate-y-1/2 md:block cursor-pointer md:opacity-0 group-hover:opacity-100"
                        size={32}
                    />
                </div>
                <div className="md:p-3 md:w-[10%] md:h-auto md:order-first relative">
                    <FaChevronUp
                        onClick={prevSlide}
                        className="mx-auto mb-2 hidden md:block cursor-pointer"
                        size={32}
                    />
                    <div className="w-full h-full md:h-[400px] overflow-hidden">
                        <div
                            className={`flex justify-between flex-wrap transition-transform ease-in-out duration-500 md:flex-col ${
                                slide === data.length - 2
                                    ? "md:translate-y-[-20%]"
                                    : ""
                            }`}
                        >
                            {data.map((item, index) => {
                                return (
                                    <img
                                        src={item.src}
                                        alt={item.alt}
                                        key={index}
                                        className={`cursor-pointer p-1 w-1/4 md:w-full h-[60px] md:h-[90px] md:mb-2 md:opacity-60 hover:opacity-100 ${
                                            imgActive === index
                                                ? "border border-slate-400"
                                                : ""
                                        }`}
                                        onClick={() => clickSlide(index)}
                                    />
                                );
                            })}
                        </div>
                    </div>
                    <FaChevronDown
                        onClick={nextSlide}
                        className="mx-auto mt-2 hidden md:block cursor-pointer"
                        size={32}
                    />
                </div>
                <div className="w-full h-full md:w-[40%] md:p-4">
                    <h1 className="text-[30px] font-Montserrat leading-tight font-semibold">
                        Armchair xoay Jadora màu xanh họa tiết tặng kèm gối
                    </h1>
                    <div className="border-2 w-[50px] mt-3"></div>
                    <div className="flex mt-4">
                        <CiHeart
                            className="w-1/10 cursor-pointer mr-3"
                            size={24}
                        />
                        <span className="block text-red-600 right-0 mr-3">
                            13,515,000đ
                        </span>
                        <span className="line-through right-0">
                            15,515,000đ
                        </span>
                    </div>
                    <div className="mt-4">
                        <div className="mt-4 font-Roboto">
                            <div className="mt-4">
                                <span className="font-bold">Vật liệu: </span>
                                <span className="border border-slate-200 px-2 py-1">
                                    Vải bọc, khung gỗ, xoay 360°
                                </span>
                            </div>
                            <div className="mt-4">
                                <span className="font-bold">Kích thước: </span>
                                <span className="border border-slate-200 px-2 py-1">
                                    D800 - R800 - C670 mm
                                </span>
                            </div>
                        </div>
                        <div className="mt-4">
                            <span>Mã sản phẩm: 3*113451</span>
                        </div>
                        <div className="mt-4">
                            <span>Danh mục: </span>
                            <a className="cursor-pointer">Airmchair, </a>
                            <a className="cursor-pointer">Phòng khách</a>
                        </div>
                        <div className="mt-4 md:w-[65%] md:flex md:h-[45px]">
                            <PlusMinusInput />
                            <button className="border min-w-[140px] h-full border-black text-[13px] px-4 py-2 uppercase bg-black text-white cursor-pointer md:mx-4 mr-3">
                                Mua ngay
                            </button>
                            <BtnAddtocart />
                        </div>
                    </div>
                </div>
            </div>
            
            <div>
                {isModalOpen && (
                    <ModalImg
                        data={data}
                        indexImgClick={clickedImgModal}
                        onClose={closeModal}
                    />
                )}
            </div>
        </>
    );
};

export default ProductDetail;
