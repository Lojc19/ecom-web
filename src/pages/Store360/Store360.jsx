import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout/Layout";

const Store360 = () => {
    return (
        <Layout title={"Store 360"}>
            <div className="w-full md:w-[1320px] mx-auto px-3 mt-5 mb-20">
                <h1 className="text-center font-semibold font-Montserrat text-[30px]">KHÁM PHÁ CỬA HÀNG 360 ĐỘ</h1>
                <p className="text-center text-lg font-Roboto">Trải nghiệm ngay sản phẩm của Home LC một cách chân thực trên tay bạn. Tham quan, xem thông tin sản phẩm chi tiết với góc nhìn 360 độ hoàn chỉnh.</p>
                <div className="w-full h-[650px]">
                    <p className="text-lg font-Roboto font-semibold mt-4">Không gian mẫu phòng khách</p>
                    <iframe className="w-full h-full" src='https://my.matterport.com/show/?m=d7PStfGvYeC' frameborder='0' allowfullscreen allow='xr-spatial-tracking'></iframe>
                </div>
            </div>
        </Layout>
    )
};

export default Store360;
