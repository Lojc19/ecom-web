import React, { useState, useEffect } from "react";
import { BiSolidPhoneCall } from "react-icons/bi";
import { IoCartOutline, IoHeartOutline, IoLocationOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { Modal } from "antd";
import AuthForm from "../Form/AuthForm";
import { useAuth } from "../../context/auth"
import { useNavigate, useLocation } from "react-router-dom";
import {toast} from "react-toastify";
import axios from "axios";
import Navbar from "../Header/Navbar/Navbar"



const Header = () => {
    const [auth,setAuth] = useAuth()
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();
    const location = useLocation();
    const onClickRegister = () => {
      navigate("/register");
    };

    const onClickForgot = () => {
      navigate("/resetpassword");
    };
    const handleSubmit = async (e) => {
        try {
          const res = await axios.post("https://api-nhaxinh.onrender.com/api/user/loginUser", {
            username,
            password,
          });
          if (res && res.data.status == "success") {
            toast.success(res.data && res.data.message);
            setAuth({
              user: res.data.data,  
              token: res.data.data?.token,
            });
            localStorage.setItem("auth", JSON.stringify(res.data));
            navigate(location.state ||"/");
            setVisible(false);
          } else {
            toast.error(res.data.message);
          }
        } catch (error) {
          toast.error(error.response.data.message);
        }
      };
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
    const [visible, setVisible] = useState(false);
    return (
        <div className="h-[55px] w-full border-b-[1px] p-3">
            <div className="mx-auto md:max-w-[1320px] container h-full flex justify-between items-center text-[14px] font-Roboto">
                <div className="hidden md:flex justify-between gap-3">
                    <a href="" className="font-bold">
                        <BiSolidPhoneCall className=" inline-block mr-1" /> 1800
                        xxxx
                    </a>
                    {/* <a href="" className="text-[#666666D9]">
                        Giới thiệu
                    </a> */}
                    <a href="/sale" className="text-[#FE0808]">
                        Giảm giá đặc biệt
                    </a>
                </div>
                <div className="flex justify-between gap-5">
                    <a href=""><IoLocationOutline size={22}/></a>
                    <a href="/dashboard/wishlist"><IoHeartOutline size={22}/></a>
                    <a href="/cart"><IoCartOutline size={22}/></a>
                    {!auth?.user ? (
                        <>
                        <button href="" className=" text-[#666666D9] hover:text-black" onClick={()=>{setVisible(true)}}>Đăng nhập <FaRegUser className="inline-block ml-1" size={20}/></button>
                    </>
                    ) : (
                        <>
                            <button href="" className=" text-[#666666D9] hover:text-black" onClick={()=>{handleLogout()}}>Logout</button>
                            <button href="" className=" text-[#666666D9] hover:text-black" onClick={()=>{navigate(`/dashboard/profile`)}}><FaRegUser className="inline-block ml-1" size={20}/></button>
                        </>
                    )}
                    
                </div>
            </div>
            <Modal
                onCancel={() => setVisible(false)}
                width={1000} closable={false} footer={null}
                visible={visible}>
                <AuthForm
                    handleSubmit={handleSubmit}
                    userName={username}
                    setUserName={setUsername}
                    password={password}
                    setPassword={setPassword}
                    onClickRegister={onClickRegister}
                    onClickForgot={onClickForgot}
                />
            </Modal>
        </div>
    );
};

export default Header;
