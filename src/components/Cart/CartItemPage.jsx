import React, { useState, useEffect } from "react";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

const CartItemPage = () => {
    
    return (
        <>
            <div className="flex justify-between items-center border-b py-4">
                <div className="w-[30%]">
                    <img src="https://nhaxinh.com/wp-content/uploads/2024/03/armchair-hung-king-300x200.jpg" alt="" />
                </div>
                <div className="w-[70%]">
                    <div className="flex justify-between">
                        <a href="#" className="text-[20px] font-Roboto">Armchair Hung King + Gối VACT3231</a>
                        <IoMdClose size="24" className="cursor-pointer"/>
                    </div>
                    <span className="block text-[16px] font-Roboto font-bold text-[#BC5B64] mt-4">13,900,000₫</span>
                    <div className="flex justify-between items-center mt-4">
                        <button> <IoIosHeartEmpty className="inline-block" size="20"/>Thêm vào Wishlist</button>
                        <div className="md:flex">
                            <span className="w-[30px] h-[30px] px-2 border bg-[#F3F6F7] hover:bg-slate-400 cursor-pointer ease-in-out duration-300">-</span>
                            <input type="number" className="w-[35px] h-[35px] pl-2 text-center" inputMode="numeric" min="0" max="10" autoComplete="off"/>
                            <span className="w-[30px] h-[30px] px-2 border bg-[#F3F6F7] hover:bg-slate-400 cursor-pointer ease-in-out duration-300" >+</span>
                        </div>
                    </div>
                </div>
            </div>
            <button class="btn uppercase text-white bg-black border px-4 py-2 font-bold text-sm font-Roboto mt-4">Cập nhật giỏ hàng</button>
        </>
    );
};

export default CartItemPage;
