import React from "react";

const AuthForm = ({ handleSubmit, userName, setUserName, password, setPassword }) => {
  return (
    <>
      <div className="flex flex-row p-4">
        <div class="basis-1/2">
            <h2 className="text-3xl font-semibold">ĐĂNG NHẬP</h2>
            <h3 className="text-xl font-semibold my-2">Tên đăng nhập hoặc địa chỉ email *</h3>
            <div className="flex flex-row w-full">
                <input
                    type="text"
                    className="form-control  w-full mr-16 p-4 border-2 border-gray-400"
                    placeholder=""
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                />
            </div>
            <h3 className="text-xl font-semibold my-2 mt-8">Mật khẩu *</h3>
            <div className="flex flex-row w-full">
                <input
                    type="password"
                    className="form-control  w-full mr-16 p-4 border-2 border-gray-400"
                    placeholder=""
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div className="flex flex-row w-full mt-4">
                <input
                    type="checkbox"
                    className="form-control p-4 border-2 border-gray-400"
                    placeholder=""
                />
                <h3 className="text-xl font-semibold mx-4">Lưu thông tin đăng nhập</h3>
            </div>
            
            <div className="flex flex-row w-full mt-2">
                <button className="bg-black border border-black text-[20px] px-6 py-2 uppercase text-white cursor-pointer mt-2"
                    onClick={()=>{
                        handleSubmit();
                    }}
                >
                    ĐĂNG NHẬP
                </button>
            </div>
            <div className="flex flex-row w-full mt-2">
                <a className="text-xl font-semibold">Quên mật khẩu?</a>
            </div>
        </div>
        <div class="basis-1/2">
            <h2 className="text-3xl font-semibold">ĐĂNG KÝ</h2>
            <h3 className="text-xl font-semibold my-2">Địa chỉ email *</h3>
            <div className="flex flex-row w-full">
                <input
                    type="text"
                    className="form-control  w-full mr-16 p-4 border-2 border-gray-400"
                    placeholder=""
                />
            </div>
            <h3 className="text-xl font-normal my-4">Mật khẩu mới sẽ được gửi tới email của bạn.*</h3>
            <h3 className="text-lg font-normal my-4">
                Dữ liệu cá nhân của bạn sẽ được sử dụng để hỗ trợ trải nghiệm của bạn trên toàn bộ trang web này, để quản lý quyền truy cập vào tài khoản của bạn và cho các mục đích khác được mô tả trong chính sách bảo mật của chúng tôi.
            </h3>
            <div className="flex flex-row w-full mt-2">
                <button className="bg-black border border-black text-[20px] px-6 py-2 uppercase text-white cursor-pointer mt-2" >
                    ĐĂNG KÝ
                </button>
            </div>
        </div>
      </div>
    </>
  );
};

export default AuthForm;