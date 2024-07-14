import { React, useState, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";
import axios from "axios";
import { useAuth } from "../../context/auth.jsx";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Layout from "../../components/Layout/Layout";
import ProductItem from "../../components/Product/ProductItem";


const ProductSale = () => {
    const [dropdowns, setDropdowns] = useState(false);
    const [textFilter, setTextFilter] = useState("Theo mức độ phổ biến");
    const navigate = useNavigate();
    const [auth, setAuth] = useAuth();
    const [saleproducts, setSaleProducts] = useState([]);


    useEffect(() => {
        saleProduct()
    }, []);


    const sortProductsByNewest = () => {
        const sortedProducts = [...saleproducts].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        setSaleProducts(sortedProducts);
    };

    const sortProductsBySold = () => {
        const sortedProducts = [...saleproducts].sort((a, b) => b.sold - a.sold);
        setSaleProducts(sortedProducts);
    };


    const sortProductsByPriceAsc = () => {
        const sortedProducts = [...saleproducts].sort((a, b) => a.price - b.price);
        setSaleProducts(sortedProducts);
    };

    // Function to sort products by price in descending order
    const sortProductsByPriceDesc = () => {
        const sortedProducts = [...saleproducts].sort((a, b) => b.price - a.price);
        setSaleProducts(sortedProducts);
    }

    const saleProduct = async () => {
        try {
            const { data } = await axios.get(`https://api-nhaxinh.onrender.com/api/product/sale`);
            setSaleProducts(data.data);
        } catch (error) {
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
                                        onClick={() => {
                                            TextFilter("Theo mức độ phổ biến");
                                            sortProductsBySold();
                                        }
                                        }
                                    >
                                        Theo mức độ phổ biến
                                    </li>
                                    <li onClick={() => {
                                        TextFilter("Mới nhất");
                                        sortProductsByNewest();
                                    }
                                    }>
                                        Mới nhất
                                    </li>
                                    <li
                                        onClick={() => {
                                            TextFilter("Theo giá: thấp đến cao");
                                            sortProductsByPriceAsc();
                                        }
                                        }
                                    >
                                        Theo giá: thấp đến cao
                                    </li>
                                    <li
                                        onClick={() => {
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
                    {saleproducts?.map((p, index) => (
                        <>
                            <ProductItem product={p} images={p.images} />
                        </>
                    ))}
                </div>
            </>
        </Layout>
    );
}

export default ProductSale
