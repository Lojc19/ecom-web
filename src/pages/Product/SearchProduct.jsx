import { React, useState, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";
import axios from "axios";
import { useAuth } from "../../context/auth.jsx";
import { useNavigate, useParams } from "react-router-dom";
import {toast} from "react-toastify";
import Layout from "../../components/Layout/Layout";
import ProductItem from "../../components/Product/ProductItem";
import { useLoading } from "../../context/loading.jsx";

const SearchProduct = () => {
    const [dropdowns, setDropdowns] = useState(false);
    const { showLoading, hideLoading } = useLoading();
    const [textFilter, setTextFilter] = useState("Theo mức độ phổ biến");
    const navigate = useNavigate();
    const [auth,setAuth] = useAuth();
    const [products, setProducts] = useState([]);
    const params = useParams();
    // const categories = useCategory();
    const [key, setKey]   = useState("");

    useEffect(() => {
        if (params?.key){
            setKey(params.key);
            searchProduct(params.key);
            window.scrollTo({ top: 0, behavior: 'smooth' });   
        }
    }, [params?.key]);

    

    const sortProductsByPriceAsc = () => {
        const sortedProducts = [...products].sort((a, b) => a.price - b.price);
        setProducts(sortedProducts);
    };

    // Function to sort products by price in descending order
    const sortProductsByPriceDesc = () => {
        const sortedProducts = [...products].sort((a, b) => b.price - a.price);
        setProducts(sortedProducts);
    }

    const searchProduct = async (key) => {
        showLoading();
        try {
            const { data } = await axios.get(`https://api-nhaxinh.onrender.com/api/product/search/${key}`);
            setProducts(data.data);
            hideLoading();
        } catch (error) {
            hideLoading();
            toast.error(error.response.data.message);
        }
    };

    const TextFilter = (filter) => {
        setTextFilter(filter);
    };

    const toggleDropdown = () => {
        if (dropdowns === true) {
            setDropdowns(false);
        } else {
            setDropdowns(true);
        }
    };
    return (
        <Layout title={"Shop"}>
            <>
            <div className="w-full h-[486px] bg-[url(https://nhaxinh.com/wp-content/uploads/2022/04/banner-trang-chu-san-pham-dep-oki.jpg)] bg-cover relative">
                <div className="md:w-[1320px] md:mx-auto py-5 px-[15px] text-center absolute left-0 right-0 bottom-[32px]">
                    <h1 className="font-Montserrat text-white text-[28px] leading-7 text-center mb-3 md:text-left">
                        Search result for "{key}"
                    </h1>
                    <div className="absolute left-[15px]">
                        <a
                            href=""
                            className="cursor-pointer text-white text-[14px]"
                        >
                            Trang chủ <span>/</span>
                        </a>
                        <a
                            href=""
                            className="cursor-pointer text-white text-[14px] ml-1"
                        >
                            Sản phẩm <span>/</span>
                        </a>
                        <a
                            href=""
                            className="cursor-pointer text-white text-[14px] ml-1 font-bold"
                        >
                            Search result for "{key}"
                        </a>
                    </div>
                </div>
            </div>

            <form
                action=""
                className="p-3 w-full h-auto md:w-[1320px] mx-auto md:flex justify-between items-center mt-5"
            >
                <div
                    className="w-full md:w-[260px] h-[40px] cursor-pointer relative"
                    onClick={toggleDropdown}
                >
                    <span className="block text-[14px] font-Montserrat font-bold">
                        Giá
                    </span>
                    <div className="w-full h-full border-b border-[#929292] py-2 flex justify-between items-center">
                        <span className="text-[14px] font-Roboto">
                            {textFilter}{" "}
                        </span>
                        <FaChevronDown size={12} />
                    </div>
                    {dropdowns && (
                        <div className="absolute w-full top-[70px] border border-[#929292] bg-white rounded p-[15px] z-10">
                            <ul className="flex flex-col gap-2 text-[14px] font-Roboto">
                                <li
                                    onClick={() =>
                                        TextFilter("Theo mức độ phổ biến")
                                    }
                                >
                                    Theo mức độ phổ biến
                                </li>
                                <li onClick={() => TextFilter("Mới nhất")}>
                                    Mới nhất
                                </li>
                                <li
                                    onClick={() =>{
                                        TextFilter("Theo giá: thấp đến cao");
                                        sortProductsByPriceAsc();
                                    }
                                    }
                                >
                                    Theo giá: thấp đến cao
                                </li>
                                <li
                                    onClick={() =>{
                                        TextFilter("Theo giá: cao đến thấp");
                                        sortProductsByPriceDesc();
                                    }
                                    }
                                >
                                    Theo giá: cao đến thấp
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            </form>

            <div className="w-full md:w-[1320px] mx-auto md:flex md:flex-wrap md:justify-between mt-10">
                {products?.map((p, index) => (
                    <>
                        <ProductItem product={p} images={p.images}/>
                    </>
                ))}
                {products.length > 0 ? (
                    <>
                    
                    </>
                ) : (
                    <>
                        <div className="w-full text-center mb-8">
                            <h1 className="text-4xl">No product found</h1>
                            <h1 className="text-2xl mt-4 font-thin">You search did not match any products</h1>
                            <h1 className="text-2xl mt-4 font-thin">Please try again</h1>
                        </div>
                        
                    </>
                )}
            </div>
        </>
        </Layout>
    );
}

export default SearchProduct
