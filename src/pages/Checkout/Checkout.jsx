import { Checkbox } from "antd";
import React, { useState } from "react";
import { AiOutlineBank } from "react-icons/ai";
import { CiMoneyCheck1 } from "react-icons/ci";
import { FaCcPaypal } from "react-icons/fa";
import ProductItemCheckOut from "../../components/Checkout/ProductItemCheckOut";
const Checkout = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };
    return (
        <>
            <div className="w-full md:max-w-[1320px] mx-auto px-3 mt-5 mb-10">
                <form className="w-full md:flex justify-between">
                    <div className="w-full md:w-[55%]">
                        <h3 className="font-Montserrat text-[18px] leading-5 uppercase font-semibold mb-2">
                            Địa chỉ giao hàng
                        </h3>
                        <div className="w-full mb-3">
                            <label
                                htmlFor=""
                                className="block font-Roboto text-xs mb-1"
                            >
                                Họ và tên
                                <span className="text-red-600"> *</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Nhập họ và tên"
                                className="w-full h-[40px] border border-[#ddd] px-3 shadow-inner text-base font-Montserrat"
                            ></input>
                        </div>
                        <div className="w-full md:flex justify-between">
                            <div className="md:w-[48%] mb-3">
                                <label
                                    htmlFor=""
                                    className="block font-Roboto text-xs mb-1"
                                >
                                    Số điện thoại
                                    <span className="text-red-600"> *</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Nhập số điện thoại của bạn"
                                    className="w-full h-[40px] border border-[#ddd] px-3 shadow-inner text-base font-Montserrat"
                                ></input>
                            </div>
                            <div className="md:w-1/2 mb-3">
                                <label
                                    htmlFor=""
                                    className="block font-Roboto text-xs mb-1"
                                >
                                    Địa chỉ email
                                    <span className="text-red-600"> *</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Nhập email"
                                    className="w-full h-[40px] border border-[#ddd] px-3 shadow-inner text-base font-Montserrat"
                                ></input>
                            </div>
                        </div>
                        <div className="w-full md:flex justify-between">
                            <div className="md:w-[48%] mb-3">
                                <label
                                    htmlFor=""
                                    className="block font-Roboto text-xs mb-1"
                                >
                                    Tỉnh / Thành phố
                                    <span className="text-red-600"> *</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Nhập Tỉnh / Thành phố"
                                    className="w-full h-[40px] border border-[#ddd] px-3 shadow-inner text-base font-Montserrat"
                                ></input>
                            </div>
                            <div className="md:w-1/2 mb-3">
                                <label
                                    htmlFor=""
                                    className="block font-Roboto text-xs mb-1"
                                >
                                    Quận / Huyện
                                    <span className="text-red-600"> *</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Nhập Quận / Huyện"
                                    className="w-full h-[40px] border border-[#ddd] px-3 shadow-inner text-base font-Montserrat"
                                ></input>
                            </div>
                        </div>
                        <div className="w-full mb-3">
                            <label
                                htmlFor=""
                                className="block font-Roboto text-xs mb-1"
                            >
                                Phường / Xã
                                <span className="text-red-600"> *</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Nhập xã"
                                className="w-full h-[40px] border border-[#ddd] px-3 shadow-inner text-base font-Montserrat"
                            ></input>
                        </div>
                        <div className="w-full mb-3">
                            <label
                                htmlFor=""
                                className="block font-Roboto text-xs mb-1"
                            >
                                Địa chỉ
                                <span className="text-red-600"> *</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Nhập địa chỉ"
                                className="w-full h-[38px] border border-[#ddd] px-3 shadow-inner text-base font-Montserrat"
                            ></input>
                        </div>
                        <Checkbox>Create an account?</Checkbox>
                        <div className="w-full mt-3">
                            <h3 className="font-Montserrat text-[18px]leading-5 uppercase font-semibold mb-2">
                                Thông tin thêm
                            </h3>

                            <h2 className="text-[14px] font-Roboto leading-4 font-semibold mb-2">
                                Lưu ý đơn cho hàng (tùy chọn)
                            </h2>

                            <textarea
                                name=""
                                id=""
                                className="w-full h-[120px] border border-[#ddd] px-3 pt-3"
                                placeholder="Viết các lưu ý cho đơn hàng của bạn, ví dụ: lưu ý đặc biệt khi vận chuyển"
                            ></textarea>
                        </div>
                        <div className="w-full mt-3 mb-5">
                            <h3 className="font-Montserrat text-[18px]leading-5 uppercase font-semibold mb-2">
                                Phương thức thanh toán
                            </h3>

                            <div className="flex justify-start">
                                <div
                                    className={`w-[110px] h-[140px] md:w-[200px] md:h-[120px] text-center pt-5 px-[5px] border border-[#ddd] text-[13px] text-[#4b4e51] font-Roboto mr-5 cursor-pointer ${
                                        toggleState === 1 ? "border-black" : ""
                                    }`}
                                    onClick={() => toggleTab(1)}
                                >
                                    <AiOutlineBank
                                        size={44}
                                        className="mx-auto"
                                    />
                                    <span className="block">
                                        Chuyển khoản ngân hàng
                                    </span>
                                </div>
                                <div
                                    className={`w-[110px] h-[140px] md:w-[200px] md:h-[120px] text-center pt-5 px-[5px] border border-[#ddd] text-[13px] text-[#4b4e51] font-Roboto mr-5 cursor-pointer ${
                                        toggleState === 2 ? "border-black" : ""
                                    }`}
                                    onClick={() => toggleTab(2)}
                                >
                                    <CiMoneyCheck1
                                        size={44}
                                        className="mx-auto"
                                    />
                                    <span className="block">
                                        Thanh toán khi nhận hàng
                                    </span>
                                </div>
                                <div
                                    className={`w-[110px] h-[140px] md:w-[200px] md:h-[120px] text-center pt-5 px-[5px] border border-[#ddd] text-[13px] text-[#4b4e51] font-Roboto mr-5 cursor-pointer ${
                                        toggleState === 3 ? "border-black" : ""
                                    }`}
                                    onClick={() => toggleTab(3)}
                                >
                                    <FaCcPaypal size={44} className="mx-auto" />
                                    <span className="block">
                                        Thanh toán Paypal
                                    </span>
                                </div>
                            </div>
                        </div>
                        {toggleState === 1 && (
                            <div className="mb-5">
                                <h3 className="font-Montserrat text-[18px]leading-5 uppercase font-semibold mb-2">
                                    Ngân hàng Abc
                                </h3>
                                <p className="text-[15px] font-Roboto">
                                    Số tài khoản : 012345678910
                                </p>
                                <p className="text-[15px] font-Roboto">
                                    Tên chủ tài khoản: <br />
                                    ABC-XYZ.
                                </p>
                            </div>
                        )}

                        {toggleState === 2 && (
                            <div className="mb-5">
                                <p className="text-[15px] font-Roboto">
                                    Pay with cash upon delivery.
                                </p>
                            </div>
                        )}

                        {toggleState === 3 && (
                            <div className="mb-5">
                                <p className="text-[15px] font-Roboto">
                                    Coming soon
                                </p>
                            </div>
                        )}
                    </div>
                    <div className="w-full h-fit md:w-[43%] p-[30px] border border-[#ddd]">
                        <h3 className="font-Montserrat text-[18px]leading-5 uppercase font-semibold mb-2">
                            Tóm tắt đơn hàng
                        </h3>
                        <div className="flex justify-between items-center border-b border-[#ddd] py-2">
                            <p className="text-sm font-Roboto">Thành tiền</p>
                            <p className="text-sm font-Roboto">54,000,000₫</p>
                        </div>
                        <div className="flex justify-between items-center border-b border-[#ddd] py-2">
                            <p className="text-sm font-Roboto">VẬN CHUYỂN</p>
                            <p className="text-sm font-Roboto">
                                Liên hệ phí vận chuyển sau
                            </p>
                        </div>
                        <div className="flex justify-between items-center border-b border-[#ddd] py-2">
                            <p className="text-base font-Robot font-mediumo">
                                TỔNG CỘNG
                            </p>
                            <p className="text-sm font-Roboto">54,000,000₫</p>
                        </div>

                        <div className="flex items-center justify-start py-[9px] mt-3 border-b border-[#ddd]">
                            <h2 className="text-[16px] font-Roboto leading-4 font-semibold">
                                Sản phẩm
                            </h2>
                            <div className="w-6 h-6 bg-[#BC5B64] flex items-center justify-center rounded-full ml-2">
                                <p className="text-white text-sm">2</p>
                            </div>
                        </div>

                        <ProductItemCheckOut />
                        <ProductItemCheckOut />


                        <div className="scroll-auto	h-[200px] mt-4 p-4 overflow-auto">
                            <strong className="font-Montserrat text-[16px] leading-4 uppercase font-semibold">
                            CHÍNH SÁCH BÁN HÀNG
                            </strong>
                            <p className="text-base font-Roboto font-bold mt-3">1. Thanh toán</p>
                            <p className="text-sm font-Roboto font-medium mt-2">Nhà Xinh chỉ áp dụng duy nhất một hình thức thanh toán online qua thẻ tín dụng, chuyển khoản, cụ thể:</p>
                            <ul className="text-sm font-Roboto font-medium mt-2">
                                <li>Bước 1: Khách hàng tìm hiểu thông tin về sản phẩm.</li>
                                <li>Bước 2: Khách hàng xác thực đơn hàng (điện thoại, tin nhắn, email).</li>
                                <li>Bước 3: Khách hàng đồng ý các điều khoản mua hàng, chi phí giao hàng và lắp đặt.</li>
                                <li>Bước 4: Khách hàng thanh toán qua các thẻ ATM/VISA/CREDIT CARD.</li>
                                <li>Bước 5: Hệ thống Nhà Xinh xác nhận thông tin khách hàng và giao hàng.</li>
                                <li>Bước 6: Khách hàng nhận hàng, kiểm tra và xác nhận với nhân viên.</li>
                            </ul>
                        </div>

                        <Checkbox className="pl-2 text-[14px] text-balance font-bold font-Roboto">Tôi đã đọc và đồng ý điều kiện đổi trả hàng, giao hàng, chính sách bảo mật, điều khoản dịch vụ mua hàng online *</Checkbox>

                        <button className="py-[10px] px[25px] w-full border bg-black text-white text-[21px] leading-5 font-Roboto uppercase mt-3">Đặt mua</button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Checkout;
