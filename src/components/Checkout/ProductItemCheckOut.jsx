import React from "react";

const ProductItemCheckOut = ({product, images}) => {
    const formatCurrency = (total) => {
        return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(total);
    };

    const imageUrl = images.length > 0 ? images[0].url : '"https://nhaxinh.com/wp-content/uploads/2023/08/sofa-1-cho-ona-him-da-xanh-2-600x400.jpg"';
    return (
        <div className="w-full h-[84px] flex justify-between items-center py-[15px] border-b border-[#ddd]">
            <a href="#" className="w-[20%]">
                <img
                    src={imageUrl}
                    alt=""
                    className="bg-cover opacity-50 transition ease-in-out duration-300 hover:opacity-100 hover:border hover:border-[#ddd]"
                />
            </a>
            <p className="w-[60%] px-5 text-sm font-Roboto text-[#666666]">
                    {product.product.name} <span className="font-semibold ml-2">× {product.quantity}</span>
            </p>
            <p className="text-sm font-Roboto">{formatCurrency(product.totalPriceItem)}</p>
        </div>
    );
};

export default ProductItemCheckOut;
