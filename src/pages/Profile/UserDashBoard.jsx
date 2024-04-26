import React, { useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "../../context/auth";
import { useNavigate } from "react-router-dom";
import {toast} from "react-toastify";
import Layout from "../../components/Layout/Layout";
import { NavLink } from "react-router-dom";
import UserMenu from "./UserMenu"
import UserWishList from "./UserWishlist";

const UserProfile = () => {
    const navigate = useNavigate();
    const [auth,setAuth] = useAuth();
    return (
        <Layout title={"User DashBoard"}>
            <div className="flex flex-row h-auto m-8 mx-24">
                <div class="basis-1/6 h-100% bg-slate-100">
                    <UserMenu />
                </div>
                <div class="basis-3/6 text-center m-4">
                    <div className="flex flex-grow">
                        <div className="flex flex-grow justify-around">
                            <div class="flex flex-col mx-4 w-1/2">
                                <label className="text-left"for="">Tên&nbsp;<span class="required">*</span></label>
                                <input className="form-control  w-full mr-16 mt-4 p-4 border-2 border-gray-300" ></input>
                            </div>
                            <div class="flex flex-col mx-4 w-1/2">
                                <label className="text-left"for="">Họ&nbsp;<span class="required">*</span></label>
                                <input className="form-control w-full mr-16 mt-4  p-4 border-2 border-gray-300" ></input>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-grow mt-8">
                        <div class="flex flex-col mx-4 w-full">
                            <label className="text-left"for="">Tên hiển thị&nbsp;<span class="required">*</span></label>
                            <input className="form-control  w-full mr-16 mt-4 p-4 border-2 border-gray-300" ></input>
                            <h3 className="text-left text-xl mt-4 italic" >Tên này sẽ được hiển thị ở phần tài khoản và bình luận</h3>
                        </div>
                    </div>
                    <div className="flex flex-grow mt-8">
                        <div class="flex flex-col mx-4 w-full">
                            <label className="text-left"for="">Địa chỉ email&nbsp;<span class="required">*</span></label>
                            <input className="form-control  w-full mr-16 mt-4 p-4 border-2 border-gray-300" ></input>
                        </div>
                    </div>
                    <div className="flex flex-grow mt-8">
                        <div class="flex flex-col mx-4 w-full">
                            <h2 className="text-left text-3xl my-8 font-semibold">Thay Đổi Mật Khẩu</h2>
                            <label className="text-left mt-4"for="">Mật khẩu hiện tại (để trống nếu không có thay đổi)<span class="required"></span></label>
                            <input className="form-control  w-full mr-16 mt-4 p-4 border-2 border-gray-300" ></input>
                            <label className="text-left mt-4"for="">Mật khẩu mới (để trống nếu không có thay đổi)<span class="required"></span></label>
                            <input className="form-control  w-full mr-16 mt-4 p-4 border-2 border-gray-300" ></input>
                            <label className="text-left mt-4"for="">Xác nhận mật khẩu mới<span class="required"></span></label>
                            <input className="form-control  w-full mr-16 mt-4 p-4 border-2 border-gray-300" ></input>
                        </div>
                    </div>
                    <div className="flex flex-grow mt-8 ml-4">
                        <button className="bg-black border border-black text-[20px] px-6 py-2 uppercase text-white cursor-pointer mt-2 font-bold" >
                            LƯU THAY ĐỔI
                        </button>
                    </div>
                    <div className="flex flex-col mt-8">
                        <h2 className="text-left text-3xl ml-4 my-8 font-semibold">Địa chỉ</h2>
                        <div class="flex flex-grow mx-4 w-full">
                            <div className="w-full md:flex md:flex-wrap md:justify-start">
                                <div>
                                    <button className="px-4 py-2 border-2 mr-4 border-gray-300 text-lg">1</button>
                                </div>
                                <div>
                                    <button className="px-4 py-2 border-2 mr-4 border-gray-300 text-lg">+</button>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col mt-8">
                            <div class="flex flex-col mx-4 mt-4 w-full">
                                <label className="text-left"for="">Họ và tên&nbsp;<span class="required">*</span></label>
                                <input className="form-control  w-full mr-16 mt-4 p-4 border-2 border-gray-300" ></input>
                            </div>
                            <div class="flex flex-col mx-4  mt-4 w-full">
                                <label className="text-left"for="">Địa chỉ&nbsp;<span class="required">*</span></label>
                                <input className="form-control  w-full mr-16 mt-4 p-4 border-2 border-gray-300" ></input>
                            </div>
                            <div class="flex flex-col mx-4  mt-4 w-full">
                                <label className="text-left"for="">Quận, huyện&nbsp;<span class="required">*</span></label>
                                <input className="form-control  w-full mr-16 mt-4 p-4 border-2 border-gray-300" ></input>
                            </div>
                            <div class="flex flex-col mx-4  mt-4 w-full">
                                <label className="text-left"for="">Tỉnh, thành phố&nbsp;<span class="required">*</span></label>
                                <input className="form-control  w-full mr-16 mt-4 p-4 border-2 border-gray-300" ></input>
                            </div>
                            <div class="flex flex-col mx-4  mt-4 w-full">
                                <label className="text-left"for="">Số điện thoại&nbsp;<span class="required">*</span></label>
                                <input className="form-control  w-full mr-16 mt-4 p-4 border-2 border-gray-300" ></input>
                            </div>
                            <div class="flex flex-col mx-4  mt-4 w-full">
                                <label className="text-left"for="">Địa chỉ email&nbsp;<span class="required">*</span></label>
                                <input className="form-control  w-full mr-16 mt-4 p-4 border-2 border-gray-300" ></input>
                            </div>
                            <div className="flex flex-grow mt-8 ml-4">
                                <button className="bg-black border border-black text-[20px] px-6 py-2 uppercase text-white cursor-pointer mt-2 font-bold" >
                                    CẬP NHẬT
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="basis-2/6 text-center">
                    <UserWishList />
                </div>
            </div>
        </Layout>
    );
};

export default UserProfile;
