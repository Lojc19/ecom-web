import React, { useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "../../context/auth";
import { useNavigate } from "react-router-dom";
import {toast} from "react-toastify";
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
    const [auth,setAuth] = useAuth();
    const [activeTab, setActiveTab] = React.useState("html");
    const data = [
        {
          label: "Tất cả đơn hàng",
          value: "All",
          desc: `It really matters and then like it really doesn't matter.
          What matters is the people who are sparked by it. And the people 
          who are like offended by it, it doesn't matter.`,
        },
        {
          label: "Đang xử lí",
          value: "Pending",
          desc: `Because it's about motivating the doers. Because I'm here
          to follow my dreams and inspire other people to follow their dreams, too.`,
        },
        {
          label: "Đang giao",
          value: "Processing",
          desc: `We're not always in the position that we want to be at.
          We're constantly growing. We're constantly making mistakes. We're
          constantly trying to express ourselves and actualize our dreams.`,
        },
        {
          label: "Đã hoàn thành",
          value: "Complete",
          desc: `Because it's about motivating the doers. Because I'm here
          to follow my dreams and inspire other people to follow their dreams, too.`,
        },
        {
          label: "Trả lại",
          value: "Cancel",
          desc: `We're not always in the position that we want to be at.
          We're constantly growing. We're constantly making mistakes. We're
          constantly trying to express ourselves and actualize our dreams.`,
        },
      ];
    return (
        <Layout title={"User Profile"}>
            <div className="flex flex-row h-auto m-8 mx-24">
                <div class="basis-1/6 h-100% bg-slate-100">
                    <UserMenu />
                </div>
                <div class="basis-3/6">
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
                            onClick={() => setActiveTab(value)}
                            className={activeTab === value ? "text-gray-900 border-b-2 border-yellow-500" : ""}
                        >
                            {label}
                        </Tab>
                        ))}
                    </TabsHeader>
                    <TabsBody>
                        {/* {data.map(({ value, desc }) => (
                            <TabPanel key={value} value={value}>
                                {desc}
                            </TabPanel>
                        ))} */}
                        <div className="w-full md:flex md:flex-wrap md:justify-between">
                            <div className="w-full h-44 bg-slate-200 m-4 rounded-lg flex flex-row">
                                <button className="basic 1/6 flex items-center">
                                    <img
                                    src="./src/assets/imgs/product-test2.jpeg"
                                    //src={imageUrl}
                                    alt="Product"
                                    className="bg-cover h-full w-full group-hover:hidden p-4"
                                    />
                                </button>
                                <div className="basic 5/6 flex flex-col m-4 justify-around">
                                    <h3 className="text-xl font-bold">Status: <span className="text-2xl text-gray-500">PENDING</span></h3>
                                    <h3 className="text-xl font-bold">Total Price: <span className="text-2xl">19,000,000vnd</span></h3>
                                    <h3 className="text-xl font-bold">Order Day: <span className="text-2xl">29/4/2024</span></h3>
                                </div>
                            </div>
                            <div className="w-full h-44 bg-slate-200 m-4 rounded-lg flex flex-row">
                                <button className="basic 1/6 flex items-center">
                                    <img
                                    src="./src/assets/imgs/product-test2.jpeg"
                                    //src={imageUrl}
                                    alt="Product"
                                    className="bg-cover h-full w-full group-hover:hidden p-4"
                                    />
                                </button>
                                <div className="basic 5/6 flex flex-col m-4 justify-around">
                                    <h3 className="text-xl font-bold">Status: <span className="text-2xl text-gray-500">PENDING</span></h3>
                                    <h3 className="text-xl font-bold">Total Price: <span className="text-2xl">19,000,000vnd</span></h3>
                                    <h3 className="text-xl font-bold">Order Day: <span className="text-2xl">29/4/2024</span></h3>
                                </div>
                            </div>
                            <div className="w-full h-44 bg-slate-200 m-4 rounded-lg flex flex-row">
                                <button className="basic 1/6 flex items-center">
                                    <img
                                    src="./src/assets/imgs/product-test2.jpeg"
                                    //src={imageUrl}
                                    alt="Product"
                                    className="bg-cover h-full w-full group-hover:hidden p-4"
                                    />
                                </button>
                                <div className="basic 5/6 flex flex-col m-4 justify-around">
                                    <h3 className="text-xl font-bold">Status: <span className="text-2xl text-gray-500">PENDING</span></h3>
                                    <h3 className="text-xl font-bold">Total Price: <span className="text-2xl">19,000,000vnd</span></h3>
                                    <h3 className="text-xl font-bold">Order Day: <span className="text-2xl">29/4/2024</span></h3>
                                </div>
                            </div>
                            <div className="w-full h-44 bg-slate-200 m-4 rounded-lg flex flex-row">
                                <button className="basic 1/6 flex items-center">
                                    <img
                                    src="./src/assets/imgs/product-test2.jpeg"
                                    //src={imageUrl}
                                    alt="Product"
                                    className="bg-cover h-full w-full group-hover:hidden p-4"
                                    />
                                </button>
                                <div className="basic 5/6 flex flex-col m-4 justify-around">
                                    <h3 className="text-xl font-bold">Status: <span className="text-2xl text-gray-500">PENDING</span></h3>
                                    <h3 className="text-xl font-bold">Total Price: <span className="text-2xl">19,000,000vnd</span></h3>
                                    <h3 className="text-xl font-bold">Order Day: <span className="text-2xl">29/4/2024</span></h3>
                                </div>
                            </div>
                        </div>
                    </TabsBody>
                </Tabs>
                </div>
                <div class="basis-2/6 text-center">
                    <UserWishList />
                </div>
            </div>
        </Layout>
    );
};

export default UserOrders;