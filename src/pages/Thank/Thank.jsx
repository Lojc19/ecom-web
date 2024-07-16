import React from 'react'
import Layout from "../../components/Layout/Layout";
import { useNavigate, useLocation } from "react-router-dom";
const Thank = () => {
  const navigate = useNavigate();
  return (
    <Layout title={"Thank for Order"}>
        <div className="flex flex-row w-full h-96 mt-12">
            <div className='w-full flex flex-col items-center'>
                <h1 className="text-5xl text-center font-semibold">Thank you</h1>
                <h1 className="text-3xl text-center mt-8">Your order was completeted Successfully</h1>
                <button className="bg-black border border-black text-[20px] px-6 py-2 uppercase text-white cursor-pointer mt-6 w-54"
                    onClick={() => navigate("/dashboard/orders")}
                >
                    Track your order here
                </button>
                <button className="bg-yellow-400 border border-black text-[20px] px-6 py-2 uppercase text-white cursor-pointer mt-6 w-54"
                    onClick={() => navigate("/")}
                >
                    Continue shopping
                </button>
            </div>
        </div>
    </Layout>
  )
}

export default Thank
