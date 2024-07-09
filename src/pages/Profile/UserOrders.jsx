import React, { useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "../../context/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Layout from "../../components/Layout/Layout";
import { NavLink } from "react-router-dom";
import UserMenu from "./UserMenu"
import UserWishList from "./UserWishlist";
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
} from "@material-tailwind/react";

const UserOrders = () => {
    const navigate = useNavigate();
    const [auth, setAuth] = useAuth();
    const [activeTab, setActiveTab] = React.useState("html");
    const [orders, setOrders] = useState([]);

    const [searchQuery, setSearchQuery] = useState('');
    const [foundOrders, setFoundOrders] = useState([]);

    const findOrdersByIdSubstring = (query) => {
        if (!query) return orders;
        return orders.filter(order => order.orderId != null && order.orderId.toString().includes(query));
    };

    const handleSearch = () => {
        const orders = findOrdersByIdSubstring(searchQuery);
        setFoundOrders(orders);
    };

    useEffect(() => {
        handleSearch();
    }, [orders]);

    useEffect(() => {
        getOrders();
    }, []);

    const getOrders = async () => {
        try {
            const { data } = await axios.get(
                "https://api-nhaxinh.onrender.com/api/order/myOrder"
            );
            setOrders(data?.data);
        } catch (error) {
            toast.error(error.response.data.message);
        }
    };

    const filterOrder = async (statusOrder) => {
        setSearchQuery('');
        handleSearch();
        if (statusOrder != "All") {
            // const { data } = await axios.get(
            //     "https://api-nhaxinh.onrender.com/api/order/myOrder"
            // );
            const filteredOrders = orders.filter(order => order.status === statusOrder);
            setFoundOrders(filteredOrders);
        } else {
            getOrders();
        }
    };

    // Hàm convert giá trị total sang định dạng tiền tệ VND (Ví dụ: 203.400.000 VND)
    const formatCurrency = (total) => {
        return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(total);
    };

    // Hàm convert thời gian đơn hàng sang định dạng ngày/tháng/năm (Ví dụ: 29/3/2024)
    const formatDate = (orderTime) => {
        const date = new Date(orderTime);
        const day = date.getDate();
        const month = date.getMonth() + 1; // Tháng bắt đầu từ 0
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    };

    const statuses = { Delivered: 'text-green-400', Processing: 'text-orange-400', Cancelled: 'text-red-400', Dispatched: 'text-yellow-400' };

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

    const getProductImage = (order) => {
        if (order && order.products && order.products.length > 0) {
            const product = order.products[0];
            if (product && product.product && product.product.images && product.product.images.length > 0) {
                return product.product.images[0].url;
            }
        }
        // Nếu không tìm thấy hình ảnh hợp lệ, trả về URL của hình ảnh mặc định
        return '../src/assets/imgs/product-test2.jpeg';
    };
    const data = [
        {
            label: "All",
            value: "All",
            desc: `It really matters and then like it really doesn't matter.
          What matters is the people who are sparked by it. And the people 
          who are like offended by it, it doesn't matter.`,
        },
        {
            label: "Processing",
            value: "Processing",
            desc: `Because it's about motivating the doers. Because I'm here
          to follow my dreams and inspire other people to follow their dreams, too.`,
        },
        {
            label: "Dispatched",
            value: "Dispatched",
            desc: `We're not always in the position that we want to be at.
          We're constantly growing. We're constantly making mistakes. We're
          constantly trying to express ourselves and actualize our dreams.`,
        },
        {
            label: "Delivered",
            value: "Delivered",
            desc: `Because it's about motivating the doers. Because I'm here
          to follow my dreams and inspire other people to follow their dreams, too.`,
        },
        {
            label: "Cancelled",
            value: "Cancelled",
            desc: `We're not always in the position that we want to be at.
          We're constantly growing. We're constantly making mistakes. We're
          constantly trying to express ourselves and actualize our dreams.`,
        },
    ];
    return (
        <Layout title={"Lịch sử mua hàng"}>
            <div className="flex flex-row h-auto m-8 mx-24">
                <div className="basis-1/6 h-100% bg-slate-100">
                    <UserMenu />
                </div>
                <div className="basis-5/6">
                    <h2 className="text-3xl font-semibold mb-8 ml-4">Đơn hàng của tôi</h2>
                    <Tabs value={activeTab} className="m-4">
                        <TabsHeader
                            className="rounded-none border-b border-blue-gray-50 bg-transparent p-0"
                            indicatorProps={{
                                className:
                                    "bg-transparent border-b-2 border-gray-900 shadow-none rounded-none",
                            }}
                        >
                            {data.map(({ label, value }) => (
                                <Tab
                                    key={value}
                                    value={value}
                                    onClick={() => {
                                        filterOrder(value);
                                        setActiveTab(value);
                                    }}
                                    className={activeTab === value ? "text-gray-900 border-b-2 border-yellow-500" : ""}
                                >
                                    {label}
                                </Tab>
                            ))}
                        </TabsHeader>
                        <TabsBody>
                        <form className="max-w-md mx-auto mt-4 mb-4">   
                            <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                    </svg>
                                </div>
                                <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 borde rounded-lg" placeholder="Search by Order Id" required 
                                   value={searchQuery}
                                   onChange={(e) => setSearchQuery(e.target.value)} />
                                <button onClick={(e) => {
                                    e.preventDefault();
                                    handleSearch();  
                                }}
                                type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                            </div>
                        </form>
                            {foundOrders?.map((order, index) => (<>
                                <div className="mt-5 cursor-pointer w-full md:w-3/4" onClick={() => navigate(`${order._id}`)}>
                                    <div className="mx-3 flex justify-between items-center bg-[#2F5ACF] rounded-t-xl">
                                        <div className="p-3 text-white font-semibold font-Roboto">
                                            <p className="text-lg">Mã đơn hàng: {order.orderId}</p>
                                            <p className="text-xs">{formatDate(order.orderTime)}</p>
                                        </div>
                                        <div className="p-3">
                                            <div className="rounded-3xl p-2 text-sm bg-white text-black font-semibold font-Roboto">{order.status}</div>
                                        </div>
                                    </div>
                                    {order.products.map((p, index) => (<>
                                        <div className="mx-3 bg-[#0000001A]">
                                            <div className="flex items-center w-1/2 py-4 px-7">
                                                <img className="w-[100px] h-[100px] bg-cover" src={p.product.images[0].url} alt="" />
                                                <div className="font-Roboto ml-5">
                                                    <p className="text-sm font-bold text-black">{p.product.name}</p>
                                                    <p className="text-sm text-[#00000099] my-3">Số lượng: {p.quantity}</p>
                                                    <p className="text-sm font-bold text-black">Tổng: {formatCurrency(p.totalPriceItem)}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </>))}
                                    <div className="mx-3 rounded-b-xl font-Roboto border-[#d9d9d9] border-t flex justify-between items-center px-7 py-3 bg-[#0000001A]">
                                        {/* {order.coupon && (
                                            <p className="text-sm font-bold text-black">Mã giảm giá: {order.coupon}</p>
                                        )} */}
                                        <p className="text-sm font-bold text-black">Tổng đơn hàng:</p>
                                        <p className="text-sm font-bold text-black">{formatCurrency(order.total)} </p>
                                    </div>
                                </div>
                            </>))}
                        </TabsBody>
                    </Tabs>
                </div>
            </div>
        </Layout>
    );
};

export default UserOrders;
