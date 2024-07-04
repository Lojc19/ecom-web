import React, { useState, useEffect } from "react";
import CartItemPage from "../../components/Cart/CartItemPage";
import { LuMoveLeft } from "react-icons/lu";
import Layout from "../../components/Layout/Layout";
import { useNavigate } from "react-router-dom";
import {toast} from "react-toastify";
import axios from "axios";
import { useAuth } from "../../context/auth";


const Cart = () => {
    const [spanDiscount, setSpanDiscount] = useState(false);
    const [auth,setAuth] = useAuth();
    const [carts, setCarts] = useState({});
    const [price, setPrice] = useState(0);
    const [total, setTotal] = useState(0);
    const [coupon, setCoupon] = useState("");
    const [applycoupon, setApplyCoupon] = useState(null);

    const applyCoupon = async () => {
        try{
            const { data } = await axios.get(`https://api-nhaxinh.onrender.com/api/coupon/${coupon}`);
            if(data?.status == "success"){
                setSpanDiscount(true);
                setApplyCoupon(data?.data);
            }
        }
        catch(error){
            setSpanDiscount(false);
            setApplyCoupon(null);
            toast.error(error.response.data.message);
        }
    };

    const [products, setProducts] = useState([]);
    const submitDiscount = () => {
        if(total === 0){
            toast.info("Cart is Empty, Please buy something");
        }else{
            applyCoupon();
        }
    };
    const navigate = useNavigate();

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

    const updateQuantity = async (productId, newQuantity) => {
        try{
            const { data } = await axios.put('https://api-nhaxinh.onrender.com/api/cart/updateCart', {
                productId: productId , quantity: newQuantity
            });
            if(data?.status == "success"){
                toast.success("Update Successfully!");
                getCarts();
            }
        }
        catch(error){
            toast.error(error.response.data.message);
        }
    };
    

    useEffect(() => {
        getCarts();
    }, [auth?.user]);

    const getCarts = async () => {
        try {
            if(auth?.user){
                const { data } = await axios.get('https://api-nhaxinh.onrender.com/api/cart/getCart');
                setCarts(data?.data);
                setProducts(data.data.products);
            }
        } catch (error) {
            toast.error(error.response.data.message);
        }
     };

    const formatCurrency = (total) => {
        return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(total);
    };

    const formatCurrencyWithCoupon = (total) => {
        var newprice = total;
        if (applycoupon && applycoupon?.discount) {
            const discountAmount = total * (applycoupon.discount / 100);
            newprice -= discountAmount;
        }
        return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(newprice);
    };

    return (
        <Layout title={"Cart"}>
            <>
            <div className="mt-12 p-4 w-full md:max-w-[1320px] mx-auto">
                <div className="flex items-center">
                    <h1 className="font-Montserrat text-2xl font-semibold">Giỏ hàng</h1>
                    <div className="w-6 h-6 bg-[#BC5B64] flex items-center justify-center rounded-full ml-2">
                        <p className="text-white text-sm">{total}</p>
                    </div>                
                </div>

                <div className="w-full h-auto md:flex justify-between py-[30px] px-[15px]">
                    
                    <div className="md:w-[55%] mb-10">
                    {/* <button class="btn uppercase text-white bg-black border px-4 py-2 font-bold text-sm font-Roboto mt-4">Cập nhật giỏ hàng</button> */}
                        {products?.map((p, index) => (
                            <>
                                <CartItemPage
                                    key={p.product.id}
                                    product={p}
                                    quantity={p.quantity}
                                    productId={p.product._id}
                                    images={p.product.images}
                                    updateQuantity={updateQuantity}
                                />
                            </>
                        ))}
                    </div>
                    <div className="md:w-[45%] md:px-[40px]">
                        <div className="border border-[#A9A9B2] md:p-[30px] p-[15px]">
                            <h1 className="mb-5 font-Roboto text-2xl font-bold">Tóm tắt đơn hàng</h1>
                            <div className="flex justify-between font-Roboto text-sm">
                                <p>Thành tiền</p>
                                {spanDiscount ? (
                                    <>
                                      <p className="font-bold">{formatCurrencyWithCoupon(price)}</p>
                                    </>
                                ) : (
                                    <>
                                      <p className="font-bold">{formatCurrency(price)}</p>
                                    </>
                                )}
                            </div>

                            <div className="flex justify-between items-center font-Roboto mt-5 pb-4 border-b">
                                <p className="w-[25%] text-[12px] md:text-[16px]">Vận chuyển</p>
                                <div className="w-[75%] text-[12px] md:text-[14px] text-right">
                                    <p>Liên hệ phí vận chuyển sau</p>
                                    {/* <p className="md:whitespace-nowrap">Shipping options will be updated during checkout.</p> */}
                                </div>
                            </div>

                            <div className="w-full flex justify-between mt-5 text-[14px]">
                                <input type="text" className="w-[67%] border border-[#ddd] bg-white shadow-sm pl-4 py-2" placeholder="Mã giảm giá" value={coupon} onChange={
                                    (e) =>{
                                        setCoupon(e.target.value);
                                    }
                                }/>
                                <button className="w-[30%] px-3 py-2 text-white bg-black" onClick={submitDiscount}>SỬ DỤNG</button>
                            </div>

                            {spanDiscount && (
                                <span className="block mt-3 text-[14px] font-Roboto">Mã giảm giá {applycoupon?.name} giảm <span className="text-red-600">{applycoupon?.discount}%</span></span>)
                            }

                            <div className="flex justify-between font-Roboto text-sm mt-5">
                                <p>Tổng cộng</p>
                                {spanDiscount ? (
                                    <>
                                      <p className="font-bold">{formatCurrencyWithCoupon(price)}</p>
                                    </>
                                ) : (
                                    <>
                                      <p className="font-bold">{formatCurrency(price)}</p>
                                    </>
                                )}
                            </div>

                            <div className="text-[14px] font-Roboto">
                                <h1 className="mt-5 mb-1 font-Montserrat text-base font-bold">Thông tin giao hàng</h1>
                                <p className="mb-3">Đối với những sản phẩm có sẵn tại khu vực, LC sẽ giao hàng trong vòng 2-7 ngày. Đối với những sản phẩm không có sẵn, thời gian giao hàng sẽ được nhân viên LC thông báo đến quý khách.</p>
                                <p className="mb-3">Từ 2-6: 8:30 - 17:30</p>
                                <p>Thứ 7, CN: 9:30 - 16:30</p>
                            </div>

                            <div className="flex justify-between text-sm font-Roboto mt-5">
                                <button className="w-[48%] border border-black py-2 px-[15px] font-bold hover:text-white hover:bg-black" onClick={()=>{navigate(`/`)}}><LuMoveLeft className="inline-block" />TIẾP TỤC MUA HÀNG</button>
                                <button className="w-[48%] border py-2 px-[15px] font-bold text-white bg-black" onClick={()=>{
                                    //const hasProductGreaterThanTwo = products.some(product => product.quantity > 2);
                                    if (total === 0) {
                                        toast.error("Cart Is Empty!");
                                    } else {
                                        if(spanDiscount){
                                            const temp = {
                                                coupon: applycoupon,
                                            };
                                            navigate('/payment/checkout', { state: temp });
                                        }else{
                                            navigate(`/payment/checkout`);
                                        }
                                    }
                                }} >ĐẶT HÀNG</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
        </Layout>
    );
};

export default Cart;
