import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../context/auth"
import {toast} from "react-toastify";
import { useNavigate, useLocation } from "react-router-dom";

const UserMenu = () => {
    const [auth,setAuth] = useAuth()
    const navigate = useNavigate();

    const handleLogout = () => {
        setAuth({
          ...auth,
          user: null,
          token: "",
        });
        localStorage.removeItem("auth");
        toast.success("Logout Successfully");
        navigate('/');
      };
    return (
        <>
        <div>
            <div>
                <h3 className="text-2xl p-2 my-4 text-gray-800 font-semibold border-l-4 border-yellow-500">Tài khoản cá nhân</h3>
            </div>
            <div className="flex flex-col">
                        <NavLink
                            to={`/dashboard/profile`}
                            className="p-4 text-lg"
                        >
                            Thông tin của tôi
                        </NavLink>
                        <NavLink
                            to={`/dashboard/orders`}
                            className="p-4 text-lg"
                        >
                            Đơn hàng
                        </NavLink>
                        <NavLink
                            to={`/dashboard/wishlist`}
                            className="p-4 text-lg"
                        >
                            Wishlist
                        </NavLink>
                    </div>
                    <button className="inline-block m-4 text-lg"  onClick={()=>{handleLogout()}}>Đăng xuất</button>
        </div>
        </>
    );
};

export default UserMenu;
