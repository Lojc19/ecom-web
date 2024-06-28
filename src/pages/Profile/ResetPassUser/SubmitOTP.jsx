import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import Layout from "../../../components/Layout/Layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { el } from "date-fns/locale";
const SubmitOTP = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { email } = location.state || {};
    const [otp, setOtp] = useState("");

    const handleClick = () => {
        checkOtp();
        // const temp = {
        //     email: email,
        //     otp: otp,
        // };
        // navigate('/newpassword', { state: temp });
    };

      const checkOtp = async () => {
        try {
            const { data } = await axios.post(
                "https://api-nhaxinh.onrender.com/api/user/checkOtpResetPass/",
                {
                    otpCode: otp,
                    email: email,
                }
            );
            if(data.status === "success"){
                const temp = {
                    email: email,
                    otp: otp,
                  };
                // toast.success(data?.message, {
                //     onClose: () => {
                //         navigate('/newpassword', { state: temp });
                //     }
                // });
                navigate('/newpassword', { state: temp });
            }else{
                toast.error("Please try again!")
            }
        } catch (error) {
            console.log(error);
        }
    };  
    
    return (
        <Layout title={"Submit OTP"}>
            <>
            <div className="w-full h-96 flex flex-row justify-center">
                <div className="w-full md:w-[1320px] mx-auto h-[100px] mt-10 font-Roboto text-base">
                    <h1 className="">Nhập OTP đã được gửi qua email </h1>
                    <lable className="font-bold block mt-3">OTP</lable>
                    <input type="text" className="w-full md:w-[40%] border px-3 h-[44px] shadow-md mt-2 mb-3 block"
                        value={otp}
                        onChange={(e) => {setOtp(e.target.value)}}
                    />
                    <button className="border px-5 uppercase cursor-pointer bg-zinc-500 text-white w-[200px] h-[40px] mt-3"
                        onClick={(e)=>{
                            e.preventDefault();
                            handleClick();
                            //checkOtp();
                        }}
                    >Tiếp theo</button>
                </div>
            </div>
            </>
        </Layout>
    );
};

export default SubmitOTP;
