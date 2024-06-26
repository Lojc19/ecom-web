import React, { useState, useEffect } from "react";

const SubmitOTP = () => {
    return (
        <>
            <div className="w-full md:w-[1320px] mx-auto h-[100px] mt-10 font-Roboto text-base">
                <h1 className="">Nhập OTP đã được gửi qua email.</h1>
                <lable className="font-bold block mt-3">OTP</lable>
                <input type="text" className="w-full md:w-[40%] border px-3 h-[44px] shadow-md mt-2 mb-3 block" />
                <button className="border px-5 uppercase cursor-pointer bg-zinc-500 text-white w-[200px] h-[40px] mt-3" onClick={handleCheckOTP}>Tiếp theo</button>
            </div>
        </>
    );
};

export default SubmitOTP;
