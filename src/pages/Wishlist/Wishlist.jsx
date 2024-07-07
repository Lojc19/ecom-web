import React, { useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "../../context/auth";
import { useNavigate } from "react-router-dom";
import {toast} from "react-toastify";
import Layout from "../../components/Layout/Layout";
import { NavLink } from "react-router-dom";
import UserMenu from "../Profile/UserMenu"
import ProductItem from "../../components/Product/ProductItem";
import { useWishlist } from "../../hooks/useWhislist"
const Wishlist = () => {
    const navigate = useNavigate();
    const [auth,setAuth] = useAuth();
    const [products, setProducts] = useState([]);
    const { whisProducts, isInWishlist, toogleWishlist } = useWishlist();
    return (
        <Layout title={"User Wislist"}>
            <div className="flex flex-row h-auto m-8 mx-24">
                <div class="basis-1/6 h-100% bg-slate-100">
                    <UserMenu />
                </div>
                <div class="basis-5/6 h-100% h-auto flex flex-col mx-8">
                    <h2 className="text-3xl font-semibold mb-8">My WishList</h2>
                    <div className="w-full md:flex md:flex-wrap md:justify-self-center">
                        {whisProducts?.map((p, index) => (
                            <>
                                <ProductItem product={p} images={p.images}/>
                            </>
                        ))}
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Wishlist;
