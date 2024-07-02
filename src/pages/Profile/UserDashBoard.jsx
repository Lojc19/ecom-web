import React, { useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "../../context/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Layout from "../../components/Layout/Layout";
import { NavLink } from "react-router-dom";
import UserMenu from "./UserMenu";
import UserWishList from "./UserWishlist";
import { Modal } from "antd";
import AddressForm from "../../components/Form/AddressForm";

const UserProfile = () => {
    const navigate = useNavigate();
    const [auth, setAuth] = useAuth();
    //Profile
    const [username, setUsername] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    // Password
    const [passwordNow, setPasswordNow] = useState("");
    const [passwordNew, setPasswordNew] = useState("");
    const [cfpassWord, setCfpassWord] = useState("");
    // Address
    const [addresses, setAddresses] = useState([]);
    const [address, setAddress] = useState({});

    // Form Create
    const [visible, setVisible] = useState(false);

    // Location Datas Update
    const [provinces, setProvinces] = useState([]);
    const [disctricts, setDisctricts] = useState([]);
    const [yards, setYards] = useState([]);

    // Current Address
    const [selectedProvinceId, setSelectedProvinceId] = useState("");
    const [selectedDisctrictId, setSelectedDisctrictId] = useState("");
    const [selectedYardId, setSelectedYardId] = useState("");
    const [province, setProvince] = useState("");
    const [disctrict, setDisctrict] = useState("");
    const [yard, setYard] = useState("");
    const [name, setName] = useState("");
    const [note, setNote] = useState("");
    const [check, setCheck] = useState(false);

    const getProvinces = async () => {
        try {
            const { data } = await axios.get(
                "https://vapi.vnappmob.com/api/province/"
            );
            setProvinces(data?.results);
        } catch (error) {
            toast.error(error.response.data.message);
            
        }
    };

    const getDisctrict = async (id) => {
        try {
            const { data } = await axios.get(
                `https://vapi.vnappmob.com/api/province/district/${id}`
            );
            setDisctricts(data?.results);
        } catch (error) {
            toast.error(error.response.data.message);
            
        }
    };

    const getWards = async (id) => {
        try {
            const { data } = await axios.get(
                `https://vapi.vnappmob.com/api/province/ward/${id}`
            );
            setYards(data?.results);
        } catch (error) {
            toast.error(error.response.data.message);
            
        }
    };

    useEffect(() => {
        setAddress(null);
        getUserInfo();
        getAddresses();
        getProvinces();
    }, []);

    useEffect(() => {
        if (address && address.province) {
            const temp = provinces.find(
                (p) => p.province_name === address.province
            );
            setSelectedProvinceId(temp?.province_id);
            getDisctrict(temp?.province_id);
            setProvince(address.province);
            setDisctrict(address.district);
            setYard(address.ward);
            setName(address.nameAddress);
            setNote(address.note);
            setCheck(address.default);
        }
    }, [address]);

    useEffect(() => {
        if (address && address.district) {
            const temp = disctricts.find(
                (p) => p.district_name === address.district
            );
            setSelectedDisctrictId(temp?.district_id);
            getWards(temp?.district_id);
        }
    }, [disctricts]);

    useEffect(() => {
        if (address && address.ward) {
            const temp = yards.find((p) => p.ward_name === address.ward);
            setSelectedYardId(temp?.ward_id);
        }
    }, [yards]);

    const updateAddress = async () => {
        // console.log(name);
        // console.log(note);
        // console.log(province);
        // console.log(disctrict);
        // console.log(yard);
        // console.log(check);
        try {
            const { data } = await axios.put(
                `https://api-nhaxinh.onrender.com/api/address/${address?._id}`,
                {
                    nameAddress: name,
                    province: province,
                    district: disctrict,
                    ward: yard,
                    note: note,
                    default: check,
                }
            );
            if (data?.status == "success") {
                toast.success("Update Address Successfully!");
                setAddress(null);
                getAddresses();
            }
        } catch (error) {
            toast.error(error.response.data.message);
        }
    };

    const deleteAddress = async () => {
        // console.log(name);
        // console.log(note);
        // console.log(province);
        // console.log(disctrict);
        // console.log(yard);
        // console.log(check);
        try {
            if (address?.default) {
                toast.error("Cannot Delete Default Address!");
            } else {
                const { data } = await axios.delete(
                    `https://api-nhaxinh.onrender.com/api/address/${address?._id}`
                );
                if (data?.status == "success") {
                    toast.success("Delete Address Successfully!");
                    setAddress(null);
                    getAddresses();
                }
            }
        } catch (error) {
            toast.error(error.response.data.message);
        }
    };

    const getAddresses = async () => {
        try {
            const { data } = await axios.get(
                "https://api-nhaxinh.onrender.com/api/address"
            );
            setAddresses(data?.data);
        } catch (error) {
            toast.error(error.response.data.message);
        }
    };

    const getUserInfo = async () => {
        try {
            const { data } = await axios.get(
                "https://api-nhaxinh.onrender.com/api/user/info-user"
            );
            setUsername(data?.data.username);
            setFirstName(data?.data.firstname);
            setLastName(data?.data.lastname);
            setEmail(data?.data.email);
        } catch (error) {
            toast.error(error.response.data.message);
            
        }
    };

    const updateUserInfo = async () => {
        try {
            let emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
            if (!emailRegex.test(email)) {
                toast.error("Error! you have entered invalid email.");
            } else {
                const { data } = await axios.put(
                    "https://api-nhaxinh.onrender.com/api/user/update-user",
                    {
                        firstname: firstName,
                        lastname: lastName,
                        username: username,
                        email: email,
                    }
                );
                if (data?.status == "success") {
                    toast.success("Update Profile Successfully!");
                }
            }
        } catch (error) {
            toast.error(error.response.data.message);
            
        }
    };

    const updatePassword = async () => {
        try {
            if (passwordNew != passwordNow) {
                if (passwordNew == cfpassWord) {
                    const { data } = await axios.put(
                        "https://api-nhaxinh.onrender.com/api/user/updatepass",
                        { passwordNow: passwordNow, passwordNew: passwordNew }
                    );
                    if (data.status == "success") {
                        toast.success("Update Password Successfully!");
                        setCfpassWord("");
                        setPasswordNew("");
                        setPasswordNow("");
                    } else {
                        toast.error(data.data?.message);
                    }
                } else {
                    toast.warn("Password does not match!");
                }
            } else {
                toast.warn("Please Enter A New Password");
            }
        } catch (error) {
            toast.error(error.response.data.message);

        }
    };

    const handleCreate = async (e) => {
        setVisible(false);
        getAddresses();
    };

    return (
        <Layout title={"User DashBoard"}>
            <div className="flex flex-row h-auto m-8 mx-24">
                <div class="basis-1/6 h-100% bg-slate-100">
                    <UserMenu />
                </div>
                <div class="basis-4/6 text-center m-4">
                    <div className="flex flex-grow">
                        <div className="flex flex-grow justify-around">
                            <div class="flex flex-col mx-4 w-1/2">
                                <label className="text-left" for="">
                                    Tên&nbsp;<span class="required">*</span>
                                </label>
                                <input
                                    className="form-control  w-full mr-16 mt-4 p-4 border-2 border-gray-300"
                                    value={lastName}
                                    onChange={(e) =>
                                        setLastName(e.target.value)
                                    }
                                ></input>
                            </div>
                            <div class="flex flex-col mx-4 w-1/2">
                                <label className="text-left" for="">
                                    Họ&nbsp;<span class="required">*</span>
                                </label>
                                <input
                                    className="form-control w-full mr-16 mt-4  p-4 border-2 border-gray-300"
                                    value={firstName}
                                    onChange={(e) =>
                                        setFirstName(e.target.value)
                                    }
                                ></input>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-grow mt-8">
                        <div class="flex flex-col mx-4 w-full">
                            <label className="text-left" for="">
                                Tên hiển thị&nbsp;
                                <span class="required">*</span>
                            </label>
                            <input
                                className="form-control  w-full mr-16 mt-4 p-4 border-2 border-gray-300"
                                disabled={true}
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            ></input>
                            <h3 className="text-left text-xl mt-4 italic">
                                Tên này sẽ được hiển thị ở phần tài khoản và
                                bình luận
                            </h3>
                        </div>
                    </div>

                    <div className="flex flex-grow mt-8">
                        <div class="flex flex-col mx-4 w-full">
                            <label className="text-left" for="">
                                Địa chỉ email&nbsp;
                                <span class="required">*</span>
                            </label>
                            <input
                                className="form-control  w-full mr-16 mt-4 p-4 border-2 border-gray-300"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            ></input>
                        </div>
                    </div>
                    <div className="flex flex-grow mt-8 ml-4">
                        <button
                            className="bg-black border border-black text-[20px] px-6 py-2 uppercase text-white cursor-pointer mt-2 font-bold"
                            onClick={() => {
                                updateUserInfo();
                            }}
                        >
                            CẬP NHẬT THÔNG TIN
                        </button>
                    </div>
                    <div className="flex flex-grow mt-8">
                        <div class="flex flex-col mx-4 w-full">
                            <h2 className="text-left text-3xl my-8 font-semibold">
                                Thay Đổi Mật Khẩu
                            </h2>
                            <label className="text-left mt-4" for="">
                                Mật khẩu hiện tại (để trống nếu không có thay
                                đổi)<span class="required"></span>
                            </label>
                            <input
                                type="password"
                                className="form-control  w-full mr-16 mt-4 p-4 border-2 border-gray-300"
                                value={passwordNow}
                                onChange={(e) => setPasswordNow(e.target.value)}
                            ></input>
                            <label className="text-left mt-4" for="">
                                Mật khẩu mới (để trống nếu không có thay đổi)
                                <span class="required"></span>
                            </label>
                            <input
                                type="password"
                                className="form-control  w-full mr-16 mt-4 p-4 border-2 border-gray-300"
                                value={passwordNew}
                                onChange={(e) => setPasswordNew(e.target.value)}
                            ></input>
                            <label className="text-left mt-4" for="">
                                Xác nhận mật khẩu mới
                                <span class="required"></span>
                            </label>
                            <input
                                type="password"
                                className="form-control  w-full mr-16 mt-4 p-4 border-2 border-gray-300"
                                value={cfpassWord}
                                onChange={(e) => setCfpassWord(e.target.value)}
                            ></input>
                        </div>
                    </div>
                    <div className="flex flex-grow mt-8 ml-4">
                        <button
                            className="bg-black border border-black text-[20px] px-6 py-2 uppercase text-white cursor-pointer mt-2 font-bold"
                            onClick={() => {
                                updatePassword();
                            }}
                        >
                            ĐỔI MẬT KHẨU
                        </button>
                    </div>
                    <div className="flex flex-col mt-8">
                        <h2 className="text-left text-3xl ml-4 my-8 font-semibold">
                            Địa chỉ
                        </h2>
                        <div class="flex flex-grow w-full">
                            <div className="w-full md:flex md:flex-wrap md:justify-start">
                                {addresses?.map((p, index) => (
                                    <div>
                                        <button
                                            className="px-4 py-2 border-2 mr-4 border-gray-300 text-lg cursor-pointer"
                                            onClick={() => {
                                                setAddress(p);
                                            }}
                                        >
                                            {index + 1}
                                        </button>
                                    </div>
                                ))}
                                <div>
                                    <button
                                        className="px-4 py-2 border-2 mr-4 border-gray-300 text-lg"
                                        onClick={() => {
                                            setVisible(true);
                                        }}
                                    >
                                        +
                                    </button>
                                </div>
                            </div>
                        </div>
                        <Modal
                            onCancel={() => setVisible(false)}
                            closable={false}
                            footer={null}
                            width={640}
                            visible={visible}
                        >
                            <AddressForm handleSubmit={handleCreate} />
                        </Modal>
                    </div>
                    {address ? (
                        <>
                            <div className="flex flex-col">
                                <div class="flex flex-col mt-4 w-full">
                                    <label className="text-left" for="">
                                        Tên địa chỉ&nbsp;
                                        <span class="required">*</span>
                                    </label>
                                    <input
                                        className="form-control  w-full mr-16 mt-4 p-4 border-2 border-gray-300"
                                        value={name}
                                        onChange={(e) =>
                                            setName(e.target.value)
                                        }
                                    ></input>
                                </div>
                                <div class="flex flex-col  mt-4 w-full">
                                    <label
                                        className="text-left my-4"
                                        for="province"
                                    >
                                        Tỉnh, thành phố&nbsp;
                                        <span class="required">*</span>
                                    </label>
                                    <select
                                        id="province"
                                        class="block w-full px-4 py-3 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        value={selectedProvinceId}
                                        onChange={(e) => {
                                            getDisctrict(e.target.value);
                                            const selectedProvince =
                                                provinces.find(
                                                    (p) =>
                                                        p.province_id ===
                                                        e.target.value
                                                );
                                            setProvince(
                                                selectedProvince?.province_name
                                            );
                                            setSelectedProvinceId(
                                                e.target.value
                                            );
                                        }}
                                    >
                                        <option>Chọn tỉnh, thành phố</option>
                                        {provinces?.map((p, index) => (
                                            <option
                                                key={p.province_id}
                                                value={p.province_id}
                                            >
                                                {p.province_name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div class="flex flex-col  mt-4 w-full">
                                    <label
                                        className="text-left my-4"
                                        for="district"
                                    >
                                        Quận, huyện&nbsp;
                                        <span class="required">*</span>
                                    </label>
                                    <select
                                        id="district"
                                        class="block w-full px-4 py-3 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        value={selectedDisctrictId}
                                        onChange={(e) => {
                                            getWards(e.target.value);
                                            const selectedDisctrict =
                                                disctricts.find(
                                                    (p) =>
                                                        p.district_id ===
                                                        e.target.value
                                                );
                                            setDisctrict(
                                                selectedDisctrict?.district_name
                                            );
                                            setSelectedDisctrictId(
                                                e.target.value
                                            );
                                        }}
                                    >
                                        <option selected>
                                            Chọn quận, huyện
                                        </option>
                                        {disctricts?.map((p, index) => (
                                            <option
                                                key={p.district_id}
                                                value={p.district_id}
                                            >
                                                {p.district_name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div class="flex flex-col  mt-4 w-full">
                                    <label
                                        className="text-left my-4"
                                        for="district"
                                    >
                                        Xã, thị trấn&nbsp;
                                        <span class="required">*</span>
                                    </label>
                                    <select
                                        id="district"
                                        class="block w-full px-4 py-3 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        value={selectedYardId}
                                        onChange={(e) => {
                                            const selectedYard = yards.find(
                                                (p) =>
                                                    p.ward_id === e.target.value
                                            );
                                            setYard(selectedYard?.ward_name);
                                            setSelectedYardId(e.target.value);
                                        }}
                                    >
                                        <option selected>
                                            Chọn xã, thị trấn
                                        </option>
                                        {yards?.map((p, index) => (
                                            <option
                                                key={p.ward_id}
                                                value={p.ward_id}
                                            >
                                                {p.ward_name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div class="flex flex-col mt-4 w-full">
                                    <label className="text-left" for="">
                                        Ghi chú&nbsp;
                                        <span class="required">*</span>
                                    </label>
                                    <input
                                        className="form-control  w-full mr-16 mt-4 p-4 border-2 border-gray-300"
                                        value={note}
                                        onChange={(e) =>
                                            setNote(e.target.value)
                                        }
                                    ></input>
                                </div>
                                <div class="flex flex-col mt-4 w-full">
                                    <div class="inline-flex items-center">
                                        <label
                                            class="relative flex items-center p-3 rounded-full cursor-pointer"
                                            htmlFor="check"
                                        >
                                            <input
                                                type="checkbox"
                                                class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
                                                id="check"
                                                onChange={(e) => {
                                                    setCheck(e.target.checked);
                                                }}
                                                checked={check}
                                            />
                                            <span class="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    class="h-3.5 w-3.5"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    stroke="currentColor"
                                                    stroke-width="1"
                                                >
                                                    <path
                                                        fill-rule="evenodd"
                                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                        clip-rule="evenodd"
                                                    ></path>
                                                </svg>
                                            </span>
                                        </label>
                                        <label
                                            class="mt-px text-gray-700 cursor-pointer select-none text-lg"
                                            htmlFor="check"
                                        >
                                            Đặt làm địa chỉ mặc định
                                        </label>
                                    </div>
                                </div>
                                <div className="flex flex-grow mt-4">
                                    <button
                                        className="bg-black border border-black text-[20px] px-6 py-2 uppercase text-white cursor-pointer mt-2 font-bold"
                                        onClick={updateAddress}
                                    >
                                        CẬP NHẬT ĐỊA CHỈ
                                    </button>
                                    <button
                                        className="bg-black border border-black text-[20px] px-6 py-2 uppercase text-white cursor-pointer mt-2 font-bold mx-4"
                                        onClick={deleteAddress}
                                    >
                                        XÓA ĐỊA CHỈ
                                    </button>
                                </div>
                            </div>
                        </>
                    ) : (
                        <></>
                    )}
                </div>
                {/* <div class="basis-2/6 text-center">
                    <UserWishList />
                </div> */}
            </div>
        </Layout>
    );
};

export default UserProfile;
