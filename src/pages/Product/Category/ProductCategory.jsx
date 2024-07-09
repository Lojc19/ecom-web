import { React, useState, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";
import axios from "axios";
import { useAuth } from "../../../context/auth";
import { useNavigate, useParams } from "react-router-dom";
import {toast} from "react-toastify";
import Layout from "../../../components/Layout/Layout";
import ProductItem from "../../../components/Product/ProductItem";
import useCategory from "../../../hooks/useCategory";

const ProductCategory = () => {
    const [dropdowns, setDropdowns] = useState(false);
    const [textFilter, setTextFilter] = useState("Theo mức độ phổ biến");
    const navigate = useNavigate();
    const [auth,setAuth] = useAuth();
    const [products, setProducts] = useState([]);
    const params = useParams();
    const categories = useCategory();
    const [cateName, setCateName]   = useState("");

    useEffect(() => {
        if (params?.id){
            getProductCategories(params?.id);
            window.scrollTo({ top: 0, behavior: 'smooth' });   
        }
    }, [params?.id]);

    useEffect(() => {
        if (params?.id) {
            const matchingCategory = categories.find(category => category._id === params.id);
            if (matchingCategory) {
                setCateName(matchingCategory.nameCate);  // Assuming categories have a 'name' field
            }
        }
    }, [params?.id, categories]);

    const sortProductsByNewest = () => {
        const sortedProducts = [...products].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        setProducts(sortedProducts);
    };

    const sortProductsBySold = () => {
        const sortedProducts = [...products].sort((a, b) => b.sold - a.sold);
        setProducts(sortedProducts);
    };

    const sortProductsByPriceAsc = () => {
        const sortedProducts = [...products].sort((a, b) => a.price - b.price);
        setProducts(sortedProducts);
    };

    // Function to sort products by price in descending order
    const sortProductsByPriceDesc = () => {
        const sortedProducts = [...products].sort((a, b) => b.price - a.price);
        setProducts(sortedProducts);
    }

    const getProductCategories = async (id) => {
        try {
            const { data } = await axios.get(`https://api-nhaxinh.onrender.com/api/product/category/${id}`);
            setProducts(data.data);
        } catch (error) {
            console.log(error);
            toast.error("Someething Went Wrong");
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
                        {cateName}
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
                            {cateName}
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
                                    onClick={() =>{
                                        TextFilter("Theo mức độ phổ biến");
                                        sortProductsBySold()
                                    }
                                }
                                >
                                    Theo mức độ phổ biến
                                </li>
                                <li onClick={() => {
                                    TextFilter("Mới nhất"); 
                                    sortProductsByNewest();
                                }}>
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
                {/* <div className="w-full md:w-[260px] h-[40px]"></div>
                <div className="w-full md:w-[260px] h-[40px]"></div> */}
                {/* <button className="bg-black text-white text-base font-Roboto uppercase py-[6px] px-3">
                    Áp dụng
                </button> */}
            </form>

            <div className="w-full md:w-[1320px] mx-auto md:flex md:flex-wrap md:justify-start md:items-start mt-10">
                {products?.map((p, index) => (
                    <>
                        <ProductItem product={p} images={p.images}/>
                    </>
                ))}
            </div>
        </>
        </Layout>
    );
};

export default ProductCategory;
