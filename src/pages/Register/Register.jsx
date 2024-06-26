import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import Layout from "../../components/Layout/Layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");

    function ValidateEmail(mail) 
    {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
        {
            return (true)
        }
            alert("You have entered an invalid email address!")
            return (false)
    }

    const register = () => {
        if(firstName == "" || phone == "" || email == "" || lastName == "" || userName == "" || password == ""){
            toast.error("Please Enter All Infomation!");
        }else{
            if(phone.length < 10){
                toast.error("Please Enter A Valid PhoneNumber");
            }else{
                if(ValidateEmail(email)){
                    axios.post('https://api-nhaxinh.onrender.com/api/user/register', {
                        firstname: firstName,
                        lastname: lastName,
                        email: email,
                        username: userName,
                        password: password,
                        phoneNumber: phone,
                    })
                    .then(response => {
                        const data = response.data;
                        if (data?.status === "success") {
                            toast.success(data?.message, {
                                onClose: () => {
                                    navigate(`/`);
                                }
                            });
                        } else {
                            toast.error(data?.message);
                            return Promise.reject("Order creation failed");
                        }
                    })
                    .catch(error => {
                        console.error("An error occurred:", error);
                        // Xử lý lỗi chung
                    });
                }else{
                    toast.error("Please Enter A Valid Email");
                }
            }
        };
    };

    return (
        <Layout title={"Register"}>
            <div className="flex flex-row h-auto mt-8 w-full justify-center mb-12">
                <div class="w-1/3 h-100% flex flex-col ">
                    <h2 className="text-3xl font-semibold mb-8 text-center">Đăng Ký</h2>
                    <div className="w-full md:flex md:flex-wrap md:justify-self-center">
                        <h3 className="text-xl font-semibold my-2">First Name</h3>
                        <div className="flex flex-row w-full">
                            <input
                                type="text"
                                className="form-control w-full  p-4 border-2 border-gray-400"
                                placeholder=""
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                        </div>
                        <h3 className="text-xl font-semibold my-2">Last Name</h3>
                        <div className="flex flex-row w-full">
                            <input
                                type="text"
                                className="form-control w-full  p-4 border-2 border-gray-400"
                                placeholder=""
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                        </div>
                        <h3 className="text-xl font-semibold my-2">Username *</h3>
                        <div className="flex flex-row w-full">
                            <input
                                type="text"
                                className="form-control w-full  p-4 border-2 border-gray-400"
                                placeholder=""
                                value={userName}
                                onChange={(e) => setUserName(e.target.value)}
                            />
                        </div>
                        <h3 className="text-xl font-semibold my-2">Password *</h3>
                        <div className="flex flex-row w-full">
                            <input
                                type="password"
                                className="form-control w-full  p-4 border-2 border-gray-400"
                                placeholder=""
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <h3 className="text-xl font-semibold my-2">Email *</h3>
                        <div className="flex flex-row w-full">
                            <input
                                type="text"
                                className="form-control w-full  p-4 border-2 border-gray-400"
                                placeholder=""
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <h3 className="text-xl font-semibold my-2">Phone Number *</h3>
                        <div className="flex flex-row w-full">
                            <input
                                type="text"
                                className="form-control w-full  p-4 border-2 border-gray-400"
                                placeholder=""
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                            />
                        </div>
                        <div className="flex flex-row w-full mt-2 justify-center">
                            <button className="bg-black border border-black text-[20px] px-6 py-2 uppercase text-white cursor-pointer mt-2"
                                onClick={(e) =>{
                                    e.preventDefault();
                                    register();
                                }}
                            >
                                ĐĂNG Ký
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Register
