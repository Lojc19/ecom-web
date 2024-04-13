import BtnAddtocart from "../Button/BtnAddtocart";
import { CiHeart } from "react-icons/ci";

const ProductItem = () => {
    return (
        <div className="group w-full h-auto md:w-[300px] md:h-[350px] hover:border p-4">
            <div className="h-full w-full relative">
                <a
                    href="#"
                    className="cursor-pointer text-[14px] font-Roboto md:w-9/10"
                >
                    <img
                        src="./src/assets/imgs/product-test2.jpeg"
                        alt="Product"
                        className="bg-cover h-1/2 w-ful group-hover:hidden"
                    />
                    <img
                        src="./src/assets/imgs/product-test.jpeg"
                        alt="Product"
                        className="hidden bg-cover h-1/2 w-full group-hover:block"
                    />{" "}
                </a>
                <div className="mt-2 md:flex">
                    <a
                        href=""
                        className="cursor-pointer text-[14px] font-Roboto md:w-9/10"
                    >
                        Armchair xoay Jadora màu xanh họa tiết tặng kèm gối
                    </a>
                    <CiHeart className="w-1/10 cursor-pointer" size={24} />
                </div>
                <div className="flex justify-end">
                    <div className="">
                        <span className="block text-red-600 right-0">
                            13,515,000đ
                        </span>
                        <span className="line-through right-0 ">
                            15,515,000đ
                        </span>
                    </div>
                </div>

                <div className="mt-4 opacity-0 group-hover:opacity-100 flex justify-between">
                    <BtnAddtocart />
                    <a className="bg-black border border-black text-[13px] px-4 py-2 uppercase text-white cursor-pointer ml-3">
                        Xem thêm
                    </a>
                </div>

                <span className="absolute inline-block top-0 right-0 bg-red-500 text-white text-sm font-semibold px-2 py-1 rounded">
                    15%
                </span>
            </div>
        </div>
    );
};

export default ProductItem;
