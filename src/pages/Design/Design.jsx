import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import { FaChevronDown } from "react-icons/fa";

const Design = () => {
    const [toggleState1, setToggleState1] = useState(false);
    const [toggleState2, setToggleState2] = useState(false);
    const [toggleState3, setToggleState3] = useState(false);

    const toggle1 = () => {
        setToggleState1(!toggleState1);
    };

    const toggle2 = () => {
        setToggleState2(!toggleState2);
    };

    const toggle3 = () => {
        setToggleState3(!toggleState3);
    };

    return (
        <Layout title={"Thiết kế nội thất"}>
            <div className="mt-5 relative w-full h-[960px]">
                <img src="/assets/imgs/nha-xinh-thiet-ke-noi-that-ecopark-16523.jpg" alt="" className='w-full h-full bg-cover' />
                <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white'>
                    <p className="text-[64px] font-Montserrat">THIẾT KẾ NỘI THẤT</p>
                    <p className='font-Roboto text-base mb-5'>Hẹn gặp ngay đội ngũ chuyên nghiệp và giàu kinh nghiệm từ LC Home để được tư vấn những giải pháp hoàn thiện nội thất cho ngôi nhà của bạn.</p>
                    <a className="font-Roboto cursor-pointer text-base font-bold px-4 py-2 border bg-[#7A9C59] border-[#7A9C59]">LIÊN HỆ NGAY: 1800xxxx</a>
                </div>
            </div>

            <div className="mt-6 w-full md:w-[1320px] mx-auto max-h-screen mb-6">
                <div className="text-center font-Montserrat mx-2">
                    <h1 className='text-2xl font-bold'>03 lý do nên chọn LC Home</h1>
                    <p className='text-base'>Với kinh nghiệm hơn 25 năm trong thiết kế và hoàn thiện nội thất cùng đội ngũ thiết kế chuyên nghiệp, LC Home mang đến giải pháp toàn diện trong nội thất.</p>
                </div>
                <div className="w-full px-2 h-auto md:flex justify-between font-Montserrat cursor-pointer mt-5">
                    <div className='border rounded-sm px-11 py-2 md:w-[400px] w-full h-fit' onClick={toggle1}>
                        <div className='w-full flex justify-between'>
                            <p className='ml-3 text-lg mr-3'>Thực tế giống với 3D</p>
                            <FaChevronDown
                                size={24}
                                className={`inline-block ${toggleState1
                                        ? "rotate-[-180deg] transition ease-in duration-300"
                                        : "transition ease-in duration-300"
                                    }`}
                            />
                        </div>
                        {toggleState1 &&
                            <>
                                <div className="px-11 mt-5 bg-[#7A9C59] w-full h-[500px] text-center items-center font-Montserrat text-white flex flex-col items-center justify-center">
                                    <p className="font-bold text-xl mb-5">Trải nghiệm thực tế trước khi đặt hàng</p>
                                    <p className=" text-base">Bạn thường gặp tình trạng bản phác thảo 3D khác xa với công trình thực tế? Đừng lo, tại LC Home, bạn hoàn toàn yên tâm bởi chất lượng luôn được bảo đảm từ đội ngũ tay nghề cao với thương hiệu hơn 23 năm tuổi. Đặc biệt, trên hệ thống 10 cửa hàng, bạn có thể dễ dàng tham khảo không gian và sản phẩm thực tế trước khi đặt hàng.</p>
                                </div>
                            </>}
                    </div>
                    <div className='border rounded-sm px-11 py-2 md:w-[400px] w-full h-fit' onClick={toggle2}>
                        <div className='w-full flex justify-between'>
                            <p className='ml-3 text-lg mr-3'>Luôn cá nhân hóa</p>
                            <FaChevronDown
                                size={24}
                                className={`inline-block ${toggleState2
                                        ? "rotate-[-180deg] transition ease-in duration-300"
                                        : "transition ease-in duration-300"
                                    }`}
                            />
                        </div>
                        {toggleState2 &&
                            <>
                                <div className="px-11 mt-5 bg-[#0693e3] w-full h-[500px] text-center items-center font-Montserrat text-white flex flex-col items-center justify-center">
                                    <p className="font-bold text-xl mb-5">Đa dạng thiết kế</p>
                                    <p className=" text-base">Bạn thường bắt gặp nhiều mẫu thiết kế giống nhau khi vô tình đến một địa điểm nào đó? Bạn muốn có một mẫu thiết kế đặc biệt dành riêng cho căn hộ của mình? Hãy nói cho LC Home biết nhu cầu và sở thích của bạn, đội ngũ thiết kế sẽ giúp bạn thể hiện gu thẩm mỹ đỉnh cao cùng cá tính độc đáo của bạn theo phong cách riêng.</p>
                                </div>
                            </>}
                    </div>
                    <div className='border rounded-sm px-11 py-2 md:w-[400px] w-full h-fit' onClick={toggle3}>
                        <div className='w-full flex justify-between'>
                            <p className='ml-3 text-lg mr-3'>Dịch vụ cao cấp</p>
                            <FaChevronDown
                                size={24}
                                className={`inline-block ${toggleState3
                                        ? "rotate-[-180deg] transition ease-in duration-300"
                                        : "transition ease-in duration-300"
                                    }`}
                            />
                        </div>
                        {toggleState3 &&
                            <>
                                <div className="px-11 mt-5 bg-[#7A9C59] w-full h-[500px] text-center items-center font-Montserrat text-white flex flex-col items-center justify-center">
                                    <p className="font-bold text-xl mb-5">Dịch vụ uy tín với thương hiệu bền vững</p>
                                    <p className=" text-base">Với quy trình làm việc chuyên nghiệp, đội ngũ LC Home sẽ tư vấn online và đến tận nơi để trao đổi ngay khi bạn liên hệ. Sau khi công trình hoàn thiện, LC Home luôn sẵn sàng bảo hành và sửa chữa nếu có vấn đề phát sinh.</p>
                                </div>
                            </>}
                    </div>
                </div>
            </div>
        </Layout>
    )
};

export default Design;
