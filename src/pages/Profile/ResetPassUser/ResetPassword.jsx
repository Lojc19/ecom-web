import React, { useState, useEffect } from "react";
import ReCAPTCHA from "react-google-recaptcha";

// 6LfR9AEqAAAAAHuFWmkoKdaSaHe2LBOQavQpGM2E
const ResetPassword = () => {
    const [capVal, SetCapVal] = useState(null);
    return (
        <>
            <div className="w-full md:w-[1320px] mx-auto h-[100px] mt-10 font-Roboto text-base">
                <h1 className="">Quên mật khẩu? Vui lòng nhập vào email. Bạn sẽ nhận mã OTP quên mật khẩu thông qua email.</h1>

                <div>
                    <lable className="font-bold block mt-3">Email</lable>
                    <input type="text" className="w-full md:w-[40%] border px-3 h-[44px] shadow-md mt-2 mb-3" />
                    <ReCAPTCHA
                        sitekey="6LfR9AEqAAAAAHuFWmkoKdaSaHe2LBOQavQpGM2E"
                        onChange={(val) => SetCapVal(val)}
                    />
                    <button className="border px-5 uppercase cursor-pointer bg-zinc-500 text-white w-[200px] h-[40px] mt-3" disabled={!capVal}>Tiếp theo</button>
                </div>
            </div>
        </>
    );
};

export default ResetPassword;
