import React, { useState, useEffect } from "react";
import { GrFormViewHide } from "react-icons/gr";
import { LiaEyeSolid } from "react-icons/lia";

const NewPassword = () => {
    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
      };
    return (
        <>
            <div className="w-full md:w-[1320px] mx-auto h-[100px] mt-10 font-Roboto text-base">
                    <h1 className="">Nhập mật khẩu mới.</h1>
                    <lable className="font-bold block mt-3">Mật khẩu mới</lable>
                    <div className="relative w-full md:w-[40%] mt-2 mb-3">
                        <input 
                            type={showPassword ? "text" : "password"} 
                            className="w-full border px-3 h-[44px] shadow-md block" 
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
                    <button className="border px-5 uppercase cursor-pointer bg-zinc-500 text-white w-[300px] h-[40px] mt-3">Khôi phục mật khẩu</button>
            </div>
        </>
    );
};

export default NewPassword;
