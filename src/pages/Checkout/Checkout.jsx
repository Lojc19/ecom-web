import { Checkbox } from "antd";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "../../context/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AiOutlineBank } from "react-icons/ai";
import { CiMoneyCheck1 } from "react-icons/ci";
import { FaCcPaypal } from "react-icons/fa";
import ProductItemCheckOut from "../../components/Checkout/ProductItemCheckOut";
import Layout from "../../components/Layout/Layout";
import { Modal } from "antd";
import AddressForm from "../../components/Form/AddressForm";



const Checkout = () => {
    const [toggleState, setToggleState] = useState(1);
    const [auth,setAuth] = useAuth();

    const [fullname, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

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
            console.log(error);
        }
    };

    const getDisctrict = async (id) => {
        try {
            const { data } = await axios.get(
                `https://vapi.vnappmob.com/api/province/district/${id}`
            );
            setDisctricts(data?.results);
        } catch (error) {
            console.log(error);
        }
    };

    const getWards = async (id) => {
        try {
            const { data } = await axios.get(
                `https://vapi.vnappmob.com/api/province/ward/${id}`
            );
            setYards(data?.results);
        } catch (error) {
            console.log(error);
        }
    };

    const getAddresses = async () => {
        try {
            const { data } = await axios.get(
                "https://api-nhaxinh.onrender.com/api/address"
            );
            setAddresses(data?.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        setAddress(null);
        getAddresses();
        getProvinces();
        getCarts();
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

    const handleCreate = async (e) => {
        setVisible(false);
        getAddresses();
    };

    const [products, setProducts] = useState([]);
    const [carts, setCarts] = useState({});
    const [price, setPrice] = useState(0);
    const [total, setTotal] = useState(0);

    const [accept, setAccept] = useState(false);


    useEffect(() => {
        if(products && products.length > 0){
            const totalTemp = products.length;
            setTotal(totalTemp);
            setPrice(carts.cartTotal);
        }
        else{
            setPrice(0);
            setTotal(0);
        }
    }, [products]);

    const getCarts = async () => {
        try {
            if(auth?.user){
                const { data } = await axios.get('https://api-nhaxinh.onrender.com/api/cart/getCart');
                setCarts(data?.data);
                setProducts(data.data.products);
            }
        } catch (error) {
            toast.error("Someething Went Wrong");
        }
     };

    const formatCurrency = (total) => {
        return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(total);
    };

    const placeOrder = async () => {
        if(!accept){
            toast.error("Please Accept Policy!");
        }else{
            if(fullname == "" || phone == "" || email == ""){
                toast.error("Please Enter All Infomation!");
            }else{
                if(!address){
                    toast.error("Please Choose A Address");
                }else{
                    try {
                        if(phone.length < 10){
                            toast.error("Please Enter A Valid PhoneNumber");
                        }else{
                            console.log("Name: " + fullname);
                            console.log("Email: " + email);
                            console.log("PhoneNumber: " + phone);
                            console.log("Province: " + province);
                            console.log("Disctrict: " + disctrict);
                            console.log("Yard: " + yard);
                            console.log(("Note: " + note));

                            const { data } = await axios.post('https://api-nhaxinh.onrender.com/api/order', 
                                {PaymentMethod: "COD", name: fullname, email: email, phoneNumber: phone, addressShipping: {
                                    province: province,
                                    district: disctrict,
                                    ward: yard,
                                    note: note,
                                }}
                            );
                            if(data?.status == "success"){
                                toast.success("Order Successfully!");
                            }
                        }
                    } catch (error) {
                        toast.error("Someething Went Wrong");
                    }
                }
            }
        }
    };

    const toggleTab = (index) => {
        setToggleState(index);
    };
    return (
        <Layout title={"Checkout"}>
            <>
            <div className="w-full md:max-w-[1320px] mx-auto px-3 mt-5 mb-10">
                <form className="w-full md:flex justify-between">
                    <div className="w-full md:w-[55%]">
                        <h3 className="font-Montserrat text-[18px] leading-5 uppercase font-semibold mb-2">
                            Thông tin đặt hàng
                        </h3>
                        <div className="w-full mb-3">
                            <label
                                htmlFor=""
                                className="block font-Roboto text-xs mb-1"
                            >
                                Họ và tên
                                <span className="text-red-600"> *</span>
                            </label>
                            <input
                                type="text"
                                value={fullname}
                                onChange={(e) => setFullName(e.target.value)}
                                placeholder="Nhập họ và tên"
                                className="w-full h-[40px] border border-[#ddd] px-3 shadow-inner text-base font-Montserrat"
                            ></input>
                        </div>
                        <div className="w-full md:flex justify-between">
                            <div className="md:w-[48%] mb-3">
                                <label
                                    htmlFor=""
                                    className="block font-Roboto text-xs mb-1"
                                >
                                    Số điện thoại
                                    <span className="text-red-600"> *</span>
                                </label>
                                <input
                                    type="text"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    placeholder="Nhập số điện thoại của bạn"
                                    className="w-full h-[40px] border border-[#ddd] px-3 shadow-inner text-base font-Montserrat"
                                ></input>
                            </div>
                            <div className="md:w-1/2 mb-3">
                                <label
                                    htmlFor=""
                                    className="block font-Roboto text-xs mb-1"
                                >
                                    Địa chỉ email
                                    <span className="text-red-600"> *</span>
                                </label>
                                <input
                                    type="text"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Nhập email"
                                    className="w-full h-[40px] border border-[#ddd] px-3 shadow-inner text-base font-Montserrat"
                                ></input>
                            </div>
                        </div>
                        {/* <div className="w-full md:flex justify-between">
                            <div className="md:w-[48%] mb-3">
                                <label
                                    htmlFor=""
                                    className="block font-Roboto text-xs mb-1"
                                >
                                    Tỉnh / Thành phố
                                    <span className="text-red-600"> *</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Nhập Tỉnh / Thành phố"
                                    className="w-full h-[40px] border border-[#ddd] px-3 shadow-inner text-base font-Montserrat"
                                ></input>
                            </div>
                            <div className="md:w-1/2 mb-3">
                                <label
                                    htmlFor=""
                                    className="block font-Roboto text-xs mb-1"
                                >
                                    Quận / Huyện
                                    <span className="text-red-600"> *</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Nhập Quận / Huyện"
                                    className="w-full h-[40px] border border-[#ddd] px-3 shadow-inner text-base font-Montserrat"
                                ></input>
                            </div>
                        </div>
                        <div className="w-full mb-3">
                            <label
                                htmlFor=""
                                className="block font-Roboto text-xs mb-1"
                            >
                                Phường / Xã
                                <span className="text-red-600"> *</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Nhập xã"
                                className="w-full h-[40px] border border-[#ddd] px-3 shadow-inner text-base font-Montserrat"
                            ></input>
                        </div>
                        <div className="w-full mb-3">
                            <label
                                htmlFor=""
                                className="block font-Roboto text-xs mb-1"
                            >
                                Địa chỉ
                                <span className="text-red-600"> *</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Nhập địa chỉ"
                                className="w-full h-[38px] border border-[#ddd] px-3 shadow-inner text-base font-Montserrat"
                            ></input>
                        </div>
                        <Checkbox>Create an account?</Checkbox>
                        <div className="w-full mt-3">
                            <h3 className="font-Montserrat text-[18px]leading-5 uppercase font-semibold mb-2">
                                Thông tin thêm
                            </h3>

                            <h2 className="text-[14px] font-Roboto leading-4 font-semibold mb-2">
                                Lưu ý đơn cho hàng (tùy chọn)
                            </h2>

                            <textarea
                                name=""
                                id=""
                                className="w-full h-[120px] border border-[#ddd] px-3 pt-3"
                                placeholder="Viết các lưu ý cho đơn hàng của bạn, ví dụ: lưu ý đặc biệt khi vận chuyển"
                            ></textarea>
                        </div> */}
                        <div className="w-full mb-3">
                            <h3 className="font-Montserrat text-[18px] leading-5 uppercase font-semibold mb-2">
                                Địa chỉ giao hàng
                            </h3>
                        </div>
                        <div class="flex flex-grow w-full">
                            <div className="w-full md:flex md:flex-wrap md:justify-start">
                                {addresses?.map((p, index) => (
                                    <div>
                                        <div
                                            className="px-4 py-2 border-2 mr-4 border-gray-300 text-lg cursor-pointer"
                                            onClick={() => {
                                                setAddress(p);
                                            }}
                                        >
                                            {index + 1}
                                        </div>
                                    </div>
                                ))}
                                <div>
                                    <div
                                        className="px-4 py-2 border-2 mr-4 border-gray-300 text-lg cursor-pointer"
                                        onClick={() => {
                                            setVisible(true);
                                        }}
                                    >
                                        +
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
                        </div>
                        {address ? (
                        <>
                            <div className="flex flex-col   ">
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
                                {/* <div class="flex flex-col mt-4 w-full">
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
                                </div> */}
                            </div>
                        </>
                    ) : (
                        <></>
                    )}
                        <div className="w-full mt-3 mb-5">
                            <h3 className="font-Montserrat text-[18px]leading-5 uppercase font-semibold mb-2">
                                Phương thức thanh toán
                            </h3>

                            <div className="flex justify-start">
                                <div
                                    className={`w-[110px] h-[140px] md:w-[200px] md:h-[120px] text-center pt-5 px-[5px] border border-[#ddd] text-[13px] text-[#4b4e51] font-Roboto mr-5 cursor-pointer ${
                                        toggleState === 1 ? "border-black" : ""
                                    }`}
                                    onClick={() => toggleTab(1)}
                                >
                                    <AiOutlineBank
                                        size={44}
                                        className="mx-auto"
                                    />
                                    <span className="block">
                                        Chuyển khoản ngân hàng
                                    </span>
                                </div>
                                <div
                                    className={`w-[110px] h-[140px] md:w-[200px] md:h-[120px] text-center pt-5 px-[5px] border border-[#ddd] text-[13px] text-[#4b4e51] font-Roboto mr-5 cursor-pointer ${
                                        toggleState === 2 ? "border-black" : ""
                                    }`}
                                    onClick={() => toggleTab(2)}
                                >
                                    <CiMoneyCheck1
                                        size={44}
                                        className="mx-auto"
                                    />
                                    <span className="block">
                                        Thanh toán khi nhận hàng
                                    </span>
                                </div>
                                <div
                                    className={`w-[110px] h-[140px] md:w-[200px] md:h-[120px] text-center pt-5 px-[5px] border border-[#ddd] text-[13px] text-[#4b4e51] font-Roboto mr-5 cursor-pointer ${
                                        toggleState === 3 ? "border-black" : ""
                                    }`}
                                    onClick={() => toggleTab(3)}
                                >
                                    <FaCcPaypal size={44} className="mx-auto" />
                                    <span className="block">
                                        Thanh toán Paypal
                                    </span>
                                </div>
                            </div>
                        </div>
                        {toggleState === 1 && (
                            <div className="mb-5">
                                <h3 className="font-Montserrat text-[18px]leading-5 uppercase font-semibold mb-2">
                                    Ngân hàng Abc
                                </h3>
                                <p className="text-[15px] font-Roboto">
                                    Số tài khoản : 012345678910
                                </p>
                                <p className="text-[15px] font-Roboto">
                                    Tên chủ tài khoản: <br />
                                    ABC-XYZ.
                                </p>
                            </div>
                        )}

                        {toggleState === 2 && (
                            <div className="mb-5">
                                <p className="text-[15px] font-Roboto">
                                    Pay with cash upon delivery.
                                </p>
                            </div>
                        )}

                        {toggleState === 3 && (
                            <div className="mb-5">
                                <p className="text-[15px] font-Roboto">
                                    Coming soon
                                </p>
                            </div>
                        )}
                    </div>
                    <div className="w-full h-fit md:w-[43%] p-[30px] border border-[#ddd]">
                        <h3 className="font-Montserrat text-[18px]leading-5 uppercase font-semibold mb-2">
                            Tóm tắt đơn hàng
                        </h3>
                        <div className="flex justify-between items-center border-b border-[#ddd] py-2">
                            <p className="text-sm font-Roboto">Thành tiền</p>
                            <p className="text-sm font-Roboto">{formatCurrency(price)}</p>
                        </div>
                        <div className="flex justify-between items-center border-b border-[#ddd] py-2">
                            <p className="text-sm font-Roboto">VẬN CHUYỂN</p>
                            <p className="text-sm font-Roboto">
                                Liên hệ phí vận chuyển sau
                            </p>
                        </div>
                        <div className="flex justify-between items-center border-b border-[#ddd] py-2">
                            <p className="text-base font-Robot font-mediumo">
                                TỔNG CỘNG
                            </p>
                            <p className="text-sm font-Roboto">{formatCurrency(price)}</p>
                        </div>

                        <div className="flex items-center justify-start py-[9px] mt-3 border-b border-[#ddd]">
                            <h2 className="text-[16px] font-Roboto leading-4 font-semibold">
                                Sản phẩm
                            </h2>
                            <div className="w-6 h-6 bg-[#BC5B64] flex items-center justify-center rounded-full ml-2">
                                <p className="text-white text-sm">{total}</p>
                            </div>
                        </div>
                        {products?.map((p, index) => (
                            <>
                                <ProductItemCheckOut 
                                    product={p}
                                    images={p.product.images}
                                />
                            </>
                        ))}
                        {/* <ProductItemCheckOut />
                        <ProductItemCheckOut /> */}


                        <div className="scroll-auto	h-[200px] mt-4 p-4 overflow-auto">
                            <strong className="font-Montserrat text-[16px] leading-4 uppercase font-semibold">
                            CHÍNH SÁCH BÁN HÀNG
                            </strong>
                            <p className="text-base font-Roboto font-bold mt-3">1. Thanh toán</p>
                            <p className="text-sm font-Roboto font-medium mt-2">Nhà Xinh chỉ áp dụng duy nhất một hình thức thanh toán online qua thẻ tín dụng, chuyển khoản, cụ thể:</p>
                            <ul className="text-sm font-Roboto font-medium mt-2">
                                <li>Bước 1: Khách hàng tìm hiểu thông tin về sản phẩm.</li>
                                <li>Bước 2: Khách hàng xác thực đơn hàng (điện thoại, tin nhắn, email).</li>
                                <li>Bước 3: Khách hàng đồng ý các điều khoản mua hàng, chi phí giao hàng và lắp đặt.</li>
                                <li>Bước 4: Khách hàng thanh toán qua các thẻ ATM/VISA/CREDIT CARD.</li>
                                <li>Bước 5: Hệ thống Nhà Xinh xác nhận thông tin khách hàng và giao hàng.</li>
                                <li>Bước 6: Khách hàng nhận hàng, kiểm tra và xác nhận với nhân viên.</li>
                            </ul>
                        </div>

                        <Checkbox className="pl-2 text-[14px] text-balance font-bold font-Roboto"
                            onChange={(e) => {
                                setAccept(e.target.checked);
                            }}
                            checked={accept}
                        >Tôi đã đọc và đồng ý điều kiện đổi trả hàng, giao hàng, chính sách bảo mật, điều khoản dịch vụ mua hàng online *</Checkbox>

                        <button className="py-[10px] px[25px] w-full border bg-black text-white text-[21px] leading-5 font-Roboto uppercase mt-3"
                            onClick={(e) => {
                                e.preventDefault();
                                placeOrder();
                            }}
                        >Đặt mua</button>
                    </div>
                </form>
            </div>
        </>
        </Layout>
        
    );
};

export default Checkout;
