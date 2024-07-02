import React, { useState, useEffect } from "react";
import axios from "axios";
import {toast} from "react-toastify";

const AddressForm = ({handleSubmit}) => {
    // Address
    const [provinces, setProvinces] = useState([]);
    const [disctricts, setDisctricts] = useState([]);
    const [yards, setYards] = useState([]);
    const [province, setProvince] = useState("");
    const [disctrict, setDisctrict] = useState("");
    const [yard, setYard] = useState("");
    const [name, setName] = useState("");
    const [note, setNote] = useState("");
    const [check, setCheck] = useState(false);
    const [count, setCount] = useState(0);

    useEffect(() => {
        setDisctricts(null);
        setYards(null);
        getProvinces();
    }, [count]);

    const handleIncrement = () => {
        setCount(count + 1);
    };

    const createAddress = async () => {
        // console.log(name);
        // console.log(note);
        // console.log(province);
        // console.log(disctrict);
        // console.log(yard);
        // console.log(check);
        try {
            const { data } = await axios.post(
                "https://api-nhaxinh.onrender.com/api/address/",
                { nameAddress: name, province: province, district: disctrict, ward: yard, note: note, default: check }
            );
            if(data?.status == "success"){
                toast.success("Create Address Successfully!");
                handleSubmit();
            }
        } catch (error) {
            toast.error(error.response.data.message);
        }
    };

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

  return (
    <>
        <div className="flex flex-col">
            <div class="flex flex-col mt-4 w-full">
                <label className="text-left"for="">Tên địa chỉ&nbsp;<span class="required">*</span></label>
                <input className="form-control  w-full mr-16 mt-4 p-4 border-2 border-gray-300"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                ></input>
            </div>
            <div class="flex flex-col  mt-4 w-full">
                <label className="text-left my-4"for="province">Tỉnh, thành phố&nbsp;<span class="required">*</span></label>
                <select id="province" class="block w-full px-4 py-3 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    onChange={(e) => {
                        getDisctrict(e.target.value);
                        const selectedProvince = provinces.find((p) => p.province_id === e.target.value);
                        setProvince(selectedProvince?.province_name);
                    }}
                >
                    <option selected>Chọn tỉnh, thành phố</option>
                    {provinces?.map((p, index) => (
                        <option key={p.province_id} value={p.province_id}>{p.province_name}</option>
                    ))}
                </select>
            </div>
            <div class="flex flex-col  mt-4 w-full">
                <label className="text-left my-4"for="district">Quận, huyện&nbsp;<span class="required">*</span></label>
                <select id="district" class="block w-full px-4 py-3 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    onChange={(e) => {
                        getWards(e.target.value);
                        const selectedDisctrict = disctricts.find((p) => p.district_id === e.target.value);
                        setDisctrict(selectedDisctrict?.district_name);
                    }}
                >
                    <option selected>Chọn quận, huyện</option>
                    {disctricts?.map((p, index) => (
                        <option key={p.district_id} value={p.district_id}>{p.district_name}</option>
                    ))}
                </select>
            </div>
            <div class="flex flex-col  mt-4 w-full">
                <label className="text-left my-4"for="district">Xã, thị trấn&nbsp;<span class="required">*</span></label>
                <select id="district" class="block w-full px-4 py-3 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    onChange={(e) => {
                        //setYard(e.target.value);
                        const selectedYard = yards.find((p) => p.ward_id === e.target.value);
                        setYard(selectedYard?.ward_name);
                    }} value={yard}
                >
                    <option selected>Chọn xã, thị trấn</option>
                    {yards?.map((p, index) => (
                        <option key={p.ward_id} value={p.ward_id}>{p.ward_name}</option>
                    ))}
                </select>
            </div>
            <div class="flex flex-col mt-4 w-full">
                <label className="text-left"for="">Ghi chú&nbsp;<span class="required">*</span></label>
                <input className="form-control  w-full mr-16 mt-4 p-4 border-2 border-gray-300"
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                ></input>
            </div>
            <div class="flex flex-col mt-4 w-full">
            <div class="inline-flex items-center">
                <label class="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="check">
                    <input type="checkbox"
                    class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
                    id="check"
                        onChange={(e) => {
                            setCheck(e.target.checked);
                        }}
                    />
                    <span
                    class="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                        stroke="currentColor" stroke-width="1">
                        <path fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"></path>
                    </svg>
                    </span>
                </label>
                <label class="mt-px text-gray-700 cursor-pointer select-none text-lg" htmlFor="check">
                    Đặt làm địa chỉ mặc định
                </label>
            </div> 
            </div>
            <div className="flex flex-grow mt-4">
                <button className="bg-black border border-black text-[20px] px-6 py-2 uppercase text-white cursor-pointer mt-2 font-bold" onClick={createAddress} >
                    THÊM ĐỊA CHỈ
                </button>
                <button className="bg-black border border-black text-[20px] px-6 py-2 uppercase text-white cursor-pointer mt-2 font-bold mx-4" onClick={handleIncrement} >
                    Reset
                </button>
            </div>
        </div>
    </>
  );
};

export default AddressForm;