import React, { useState, useEffect } from "react";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

const CartItemPage = ({ product, quantity, updateQuantity, productId, images }) => {
    function incrementCount() {
      quantity = quantity + 1;
      updateQuantity(productId, quantity);
    }
    function decrementCount() {
      quantity = quantity - 1;
      updateQuantity(productId, quantity);
    }

    function deleteItem() {
        updateQuantity(productId, 0);
      }

    const formatCurrency = (total) => {
        return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(total);
    };

    const imageUrl = images.length > 0 ? images[0].url : './src/assets/imgs/product-test2.jpeg';

    useEffect(() => {
        
    }, [quantity]);

    return (
        <>
            <div className="flex justify-between items-center border-b py-4">
                <div className="w-[30%]">
                    <img src={imageUrl} alt="" />
                </div>
                <div className="w-[70%]">
                    <div className="flex justify-between">
                        <a href="#" className="text-[20px] font-Roboto">{product.product.name}</a>
                        <IoMdClose size="24" className="cursor-pointer" onClick={deleteItem}/>
                    </div>
                    <span className="block text-[16px] font-Roboto font-bold text-[#BC5B64] mt-4">{formatCurrency(product.totalPriceItem)}</span>
                    <div className="flex justify-between items-center mt-4">
                        <button> <IoIosHeartEmpty className="inline-block" size="20"/>Thêm vào Wishlist</button>
                        <div className="md:flex">
                            {/* <span className="w-[30px] h-[30px] px-2 border bg-[#F3F6F7] hover:bg-slate-400 cursor-pointer ease-in-out duration-300">-</span>
                            <input type="number" className="w-[35px] h-[35px] pl-2 text-center" inputMode="numeric" min="0" max="10" autoComplete="off"/>
                            <span className="w-[30px] h-[30px] px-2 border bg-[#F3F6F7] hover:bg-slate-400 cursor-pointer ease-in-out duration-300" >+</span> */}
                            <div className="md:flex w-full h-full md:w-auto mb-3">
                                {/* <span className="border w-[15%] md:w-[40px] h-full px-4 py-2 cursor-pointer text-center hover:bg-slate-200" onClick={decrementCount}>-</span>
                                <input className="md:w-[50px] w-[70%] h-full py-2 border text-center" type="text" value={quantity}/>
                                <span className="border w-[15%] md:w-[40px] h-full px-4 py-2 cursor-pointer text-center hover:bg-slate-200" onClick={incrementCount}>+</span> */}
                                <input className="md:w-[50px] w-[70%] h-full py-2  text-center" type="text" value={quantity}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CartItemPage;
