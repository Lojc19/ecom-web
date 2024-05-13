import React from "react";

const ProductItemCheckOut = () => {
    return (
        <div className="w-full h-[84px] flex justify-between items-center py-[15px] border-b border-[#ddd]">
            <a href="#" className="w-[20%]">
                <img
                    src="https://nhaxinh.com/wp-content/uploads/2023/08/sofa-1-cho-ona-him-da-xanh-2-600x400.jpg"
                    alt=""
                    className="bg-cover opacity-50 transition ease-in-out duration-300 hover:opacity-100 hover:border hover:border-[#ddd]"
                />
            </a>
            <p className="w-[60%] px-5 text-sm font-Roboto text-[#666666]">
                Sofa ONA HIM 1 chỗ da xanh S4 <span className="font-semibold ml-2">× 1</span>
            </p>
            <p className="text-sm font-Roboto">13,900,000₫</p>
        </div>
    );
};

export default ProductItemCheckOut;
