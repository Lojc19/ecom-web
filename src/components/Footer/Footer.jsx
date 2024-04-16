import React from "react";

const Footer = () => {
    return (
        <div className="w-full h-auto bg-[#303036] pb-6 md:pb-0">
            <div className="container h-auto md:max-w-[1320px] bg-[#303036] mx-auto md:h-[300px] pt-8 md:flex justify-between font-Roboto text-white">
                <div className="px-4 w-full md:w-1/4 mb-6">
                    <span className="text-base uppercase block">
                        Kết nối với Nhà Xinh
                    </span>
                    <div className="w-[30px] bg-[#ffffff4D] h-[3px] my-3"></div>
                    <img
                        src="./src/assets/imgs/logo-footer.png"
                        className="bg-cover"
                    ></img>
                    <div className="mt-6 text-white font-Montserrat text-[14px] font-light">
                        <p>FOLLOW US</p>
                        <p className="mb-6">
                            <a href="https://www.instagram.com/nha_xinh/">
                                Instagram -{" "}
                            </a>
                            <a href="https://www.youtube.com/c/Nh%C3%A0Xinhvn">
                                Youtube -{" "}
                            </a>
                            <a href="https://www.facebook.com/nhaxinhvn">
                                Facebook
                            </a>
                        </p>
                        <a
                            className="border bordeer-white px-2 md:px-5 py-2"
                            href=""
                        >
                            HỆ THỐNG CỬA HÀNG
                        </a>
                    </div>
                </div>

                <div className="px-4 w-full md:w-1/4 mb-6">
                    <span className="text-base uppercase block">Nhà Xinh</span>
                    <div className="w-[30px] bg-[#ffffff4D] h-[3px] my-3"></div>
                    <div className="mt-6 text-white font-Montserrat text-[14px]">
                        <ul className="text-white font-extralight font-Roboto text-[14px] flex flex-col justify-between gap-1">
                            <li>
                                <a href="">Giới thiệu</a>
                            </li>
                            <li>
                                <a href="">Chuyện nhà xinh</a>
                            </li>
                            <li>
                                <a href="">Tổng công ty</a>
                            </li>
                            <li>
                                <a href="">Tuyển dụng</a>
                            </li>
                            <li>
                                <a href="">Thẻ hội viên</a>
                            </li>
                            <li>
                                <a href="">Đổi trả hàng</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="px-4 w-full md:w-1/4 mb-6">
                    <span className="text-base uppercase block">
                        CẢM HỨNG #NHAXINH
                    </span>
                    <div className="w-[30px] bg-[#ffffff4D] h-[3px] my-3"></div>
                    <div className="mt-6 text-white font-Montserrat text-[14px]">
                        <ul className="text-white font-extralight font-Roboto text-[14px] flex flex-col justify-between gap-1">
                            <li>
                                <a href="">Sản phẩm</a>
                            </li>
                            <li>
                                <a href="">Ý tưởng và cảm hứng</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="px-4 w-full md:w-1/4 mb-6">
                    <span className="text-base uppercase block">
                        CẢM HỨNG #NHAXINH
                    </span>
                    <div className="w-[30px] bg-[#ffffff4D] h-[3px] my-3"></div>
                    <div className="mt-6 text-white font-Montserrat text-[14px] flex flex-col gap-3">
                        <p>
                            Hãy để lại email của bạn để nhận được những ý tưởng
                            trang trí mới và những thông tin, ưu đãi từ Nhà Xinh
                        </p>
                        <p>Email: nhaxinhcare@akacompany.com.vn</p>
                        <p>Hotline: 18007200</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
