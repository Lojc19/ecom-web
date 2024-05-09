import React, { useState, useEffect } from "react";
import CartItemPage from "../../components/Cart/CartItemPage";
import { LuMoveLeft } from "react-icons/lu";

const Cart = () => {
    const [spanDiscount, setSpanDiscount] = useState(false);
    const submitDiscount = () => {
        setSpanDiscount(true);
    };
    return (
        <>
            <div className="mt-12 p-4 w-full md:max-w-[1320px] mx-auto">
                <div className="flex items-center">
                    <h1 className="font-Montserrat text-2xl font-semibold">Giỏ hàng</h1>
                    <div class="w-6 h-6 bg-[#BC5B64] flex items-center justify-center rounded-full ml-2">
                        <p class="text-white text-sm">1</p>
                    </div>                
                </div>

                <div className="w-full h-auto md:flex justify-between py-[30px] px-[15px]">
                    <div className="md:w-[55%] mb-10">
                        <CartItemPage/>
                    </div>
                    <div className="md:w-[45%] md:px-[40px]">
                        <div className="border border-[#A9A9B2] md:p-[30px] p-[15px]">
                            <h1 className="mb-5 font-Roboto text-2xl font-bold">Tóm tắt đơn hàng</h1>
                            <div className="flex justify-between font-Roboto text-sm">
                                <p>Thành tiền</p>
                                <p className="font-bold">17,275,000₫</p>
                            </div>

                            <div className="flex justify-between items-center font-Roboto mt-5 pb-4 border-b">
                                <p className="w-[25%] text-[12px] md:text-[16px]">Vận chuyển</p>
                                <div className="w-[75%] text-[12px] md:text-[14px] text-right">
                                    <p>Liên hệ phí vận chuyển sau</p>
                                    <p className="md:whitespace-nowrap">Shipping options will be updated during checkout.</p>
                                </div>
                            </div>

                            <div className="w-full flex justify-between mt-5 text-[14px]">
                                <input type="text" className="w-[67%] border border-[#ddd] bg-white shadow-sm pl-4 py-2" placeholder="Mã giảm giá"/>
                                <button className="w-[30%] px-3 py-2 text-white bg-black" onClick={submitDiscount}>SỬ DỤNG</button>
                            </div>

                            {spanDiscount && (
                                <span className="block mt-3 text-[14px] font-Roboto">Mã giảm giá ABC-XYZ giảm <span className="text-red-600">10%</span></span>)
                            }

                            <div className="flex justify-between font-Roboto text-sm mt-5">
                                <p>Tổng cộng</p>
                                <p className="font-bold">17,275,000₫</p>
                            </div>

                            <div className="text-[14px] font-Roboto">
                                <h1 className="mt-5 mb-1 font-Montserrat text-base font-bold">Thông tin giao hàng</h1>
                                <p className="mb-3">Đối với những sản phẩm có sẵn tại khu vực, Nhà Xinh sẽ giao hàng trong vòng 2-7 ngày. Đối với những sản phẩm không có sẵn, thời gian giao hàng sẽ được nhân viên Nhà Xinh thông báo đến quý khách.</p>
                                <p className="mb-3">Từ 2-6: 8:30 - 17:30</p>
                                <p>Thứ 7, CN: 9:30 - 16:30</p>
                            </div>

                            <div className="flex justify-between text-sm font-Roboto mt-5">
                                <button className="w-[48%] border border-black py-2 px-[15px] font-bold hover:text-white hover:bg-black"><LuMoveLeft className="inline-block"/>TIẾP TỤC MUA HÀNG</button>
                                <button className="w-[48%] border py-2 px-[15px] font-bold text-white bg-black">ĐẶT HÀNG</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Cart;
