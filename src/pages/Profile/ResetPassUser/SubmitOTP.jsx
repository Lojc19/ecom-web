import React, { useState, useEffect } from "react";

const SubmitOTP = () => {
    const [checkOTP, setCheckOTP] = useState(false)

    const handleCheckOTP = (index) => {
        setCheckOTP(true);
    };
    // cái chỗ này ní click vô nút tiếp theo xong nó sẽ gửi API Check nếu success thì ní set giá trị thằng checkOTP thành true nhé tui test nên tui set thẳng true trước
    // xong nó true rồi nó sẽ chuyển tới form gửi new password nhé ní
    return (
        <>
            <div className="w-full md:w-[1320px] mx-auto h-[100px] mt-10 font-Roboto text-base">

                {checkOTP == false && (
                    <>
                        <h1 className="">Nhập OTP đã được gửi qua email.</h1>
                        <lable className="font-bold block mt-3">OTP</lable>
                        <input type="text" className="w-full md:w-[40%] border px-3 h-[44px] shadow-md mt-2 mb-3 block" />
                        <button className="border px-5 uppercase cursor-pointer bg-zinc-500 text-white w-[200px] h-[40px] mt-3" onClick={handleCheckOTP}>Tiếp theo</button>
                    </>
                )}

                
                {checkOTP == true && (
                    <>
                        <h1 className="">Nhập mật khẩu mới.</h1>
                        <lable className="font-bold block mt-3">Mật khẩu mới</lable>
                        <input type="password" className="w-full md:w-[40%] border px-3 h-[44px] shadow-md mt-2 mb-3 block" />
                        <button className="border px-5 uppercase cursor-pointer bg-zinc-500 text-white w-[300px] h-[40px] mt-3">Khôi phục mật khẩu</button>
                    </>
                )}
            </div>
        </>
    );
};

export default SubmitOTP;
