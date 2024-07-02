import React, { useState, useEffect } from "react";
import { GrFormViewHide } from "react-icons/gr";
import { LiaEyeSolid } from "react-icons/lia";
import { toast } from "react-toastify";
import Layout from "../../../components/Layout/Layout";
import axios from "axios";
import { useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const NewPassword = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { email, otp } = location.state || {};
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState("");
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleClick = () => {
        if(password != ""){
            resetPass();
        }
    };

    const resetPass = async () => {
        try {
            const { data } = await axios.put(
                "https://api-nhaxinh.onrender.com/api/user/reset-password/",
                {
                    otpCode: otp,
                    email: email,
                    password: password,
                }
            );
            if(data.status === "success"){
                toast.success(data?.message, {
                    onClose: () => {
                        navigate(`/`);
                    }
                });
            }
        } catch (error) {
            toast.error(error.response.data.message);
        }
    };
     
    return (
        <Layout title={"New Password"}>
            <>
            <div className="w-full h-96 flex flex-row justify-center">
            <div className="w-full md:w-[1320px] mx-auto h-[100px] mt-10 font-Roboto text-base">
                    <h1 className="">Nhập mật khẩu mới.</h1>
                    <lable className="font-bold block mt-3">Mật khẩu mới</lable>
                    <div className="relative w-full md:w-[40%] mt-2 mb-3">
                        <input 
                            type={showPassword ? "text" : "password"} 
                            className="w-full border px-3 h-[44px] shadow-md block" 
                            value={password}
                            onChange={(e) => {setPassword(e.target.value)}}
                        />
                        <button 
                            type="button" 
                            onClick={togglePasswordVisibility} 
                            className="absolute right-3 top-[50%] transform -translate-y-[50%]"
                        >
                            {showPassword ? (
                                <GrFormViewHide size={24}/>
                            ) : (
                                <LiaEyeSolid size={24}/>
                            )}
                        </button>
                    </div>
                    <button className="border px-5 uppercase cursor-pointer bg-zinc-500 text-white w-[300px] h-[40px] mt-3"
                        onClick={(e)=>{
                            e.preventDefault();
                            handleClick();
                        }}
                    >Khôi phục mật khẩu</button>
            </div>
            </div>
            
        </>
        </Layout>
        
    );
};

export default NewPassword;
