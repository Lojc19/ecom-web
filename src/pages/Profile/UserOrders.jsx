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
        if (statusOrder != "All") {
            const { data } = await axios.get(
                "https://api-nhaxinh.onrender.com/api/order/myOrder"
            );
            const filteredOrders = data?.data.filter(order => order.status === statusOrder);
            setOrders(filteredOrders);
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
                <div class="basis-1/6 h-100% bg-slate-100">
                    <UserMenu />
                </div>
                <div class="basis-5/6">
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
                            {/* <div className="w-full md:flex md:flex-wrap md:justify-between">
                            {orders?.map((p, index) => (
                                <>
    
                                <div className="w-full h-44 bg-slate-200 m-4 rounded-lg flex flex-row">
                                    <button className="basic 1/6 flex items-center" onClick={() => navigate(`${p._id}`)}>
                                        <img
                                        src={getProductImage(p)}
                                        //src={imageUrl}
                                        alt="Product"
                                        className="bg-cover h-full w-full group-hover:hidden p-4"
                                        />
                                    </button>
                                    <div className="basic 5/6 flex flex-col m-4 justify-around">
                                        <h3 className="text-xl font-bold">Status: <span className="text-2xl text-gray-500">{p.status}</span></h3>
                                        <h3 className="text-xl font-bold">Total Price: <span className="text-2xl">{formatCurrency(p.total)}</span></h3>
                                        <h3 className="text-xl font-bold">Order Day: <span className="text-2xl">{formatDate(p.orderTime)}</span></h3>
                                    </div>
                                </div>
                                </>
                            ))}
                        </div> */}
                            {orders?.map((order, index) => (<>
                                <div className="mt-5 cursor-pointer w-full md:w-3/4">
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
                            {/* <div className="mt-8 flow-root ml-4">
                            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                                <table className="min-w-full divide-y divide-gray-300">
                                <tbody className="divide-y divide-gray-200 bg-white">
                                    {orders.map((p) => (
                                    <tr key={p?._id}>
                                        <td className="whitespace-nowrap py-5 pl-4 pr-3 text-sm sm:pl-0">
                                        <div className="flex items-center">
                                            <div className="h-11 w-11 flex-shrink-0">
                                            <img className="h-11 w-11 rounded-full cursor-pointer" src={getProductImage(p)} alt="" onClick={() => navigate(`${p._id}`)} />
                                            </div>
                                            <div className="ml-4">
                                            <div className="font-medium text-gray-900">Order Id:</div>
                                            <div className="mt-1 text-gray-500">{p?.orderId}</div>
                                            </div>
                                        </div>
                                        </td>
                                        <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                                        <div className="text-gray-900">{formatCurrency(p.total)}</div>
                                        <div className="mt-1 text-gray-500"></div>
                                        </td>
                                        <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">{formatDate(p.orderTime)}</td>
                                        <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                                        <span 
                                            className={classNames(statuses[p.status], 'inline-flex items-center rounded-md bg-white px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20')}
                                        >
                                            {p.status}
                                        </span>
                                        </td>
                                        <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                                        <div className="text-gray-900">{p?.PaymentMethod}</div>
                                        </td>
                                    </tr>
                                    ))}
                                </tbody>
                                </table>
                            </div>
                            </div>
                        </div> */}
                        </TabsBody>
                    </Tabs>
                </div>
                {/* <div class="basis-2/6 text-center">
                    <UserWishList />
                </div> */}
            </div>
        </Layout>
    );
};

export default UserOrders;
