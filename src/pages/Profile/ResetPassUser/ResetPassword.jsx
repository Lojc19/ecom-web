import React, { useState, useEffect } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { toast } from "react-toastify";
import Layout from "../../../components/Layout/Layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useLoading } from "../../../context/loading";
// 6LfR9AEqAAAAAHuFWmkoKdaSaHe2LBOQavQpGM2E
const ResetPassword = () => {
    const navigate = useNavigate();
    const { showLoading, hideLoading } = useLoading();
    const [capVal, SetCapVal] = useState(null);
    const [email, setEmail] = useState("");
    const handleClick = () => {
        if(capVal && ValidateEmail(email)){
            forgotPass();
            // const temp = {
            //     email: email,
            // };
            // navigate('/submitOtp', { state: temp });
        }
    };

    const forgotPass = async () => {
        showLoading();
        try {
            const { data } = await axios.post(
                "https://api-nhaxinh.onrender.com/api/user/forgot-password",
                {
                    email: email,
                }
            );
            if(data?.status == "success"){
                const temp = {
                    email: email,
                };
                hideLoading();
                navigate('/submitOtp', { state: temp });
            }else{
                hideLoading();
                toast.error("Email Not Found!");
            }
        } catch (error) {
            hideLoading();
            toast.error(error.response.data.message);
        }
    };

    function ValidateEmail(mail) 
    {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
        {
            return (true)
        }
           toast.error("Please enter a valid Email!");
            return (false)
    }
    return (
        <Layout title={"Reset Password"}>
            <>
            <div className="w-full h-96 flex flex-row justify-center">
                <div className="w-full md:w-[1320px] mx-auto h-[100px] mt-10 font-Roboto text-base">
                    <h1 className="">Quên mật khẩu? Vui lòng nhập vào email. Bạn sẽ nhận mã OTP quên mật khẩu thông qua email.</h1>

                    <div>
                        <lable className="font-bold block mt-3">Email</lable>
                        <input type="text" className="w-full md:w-[40%] border px-3 h-[44px] shadow-md mt-2 mb-3"
                            value={email}
                            onChange={(e) => {setEmail(e.target.value)}}
                        />
                        <ReCAPTCHA
                            sitekey="6LfR9AEqAAAAAHuFWmkoKdaSaHe2LBOQavQpGM2E"
                            onChange={(val) => SetCapVal(val)}
                        />
                        <button className="border px-5 uppercase cursor-pointer bg-zinc-500 text-white w-[200px] h-[40px] mt-3" disabled={!capVal} 
                        onClick={(e)=>{
                            e.preventDefault();
                            handleClick();
                        }}>Tiếp theo</button>
                    </div>
                </div>
            </div>
        </>
        </Layout>
    );
};

export default ResetPassword;
