import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const UserWishList = () => {
    
    return (
        <>
        <div className="p-4 border-2 border-gray-300 flex flex-col">
            <div className="flex flex-grow">
                <h2 className="text-left ml-4 text-2xl font-semibold p-4">Danh sách yêu thích</h2>
                <div className="w-10 h-10 mt-4 bg-red-400 rounded-full">
                    <h3 className="text-lg text-white font-bold mx-auto mt-1">1</h3>
                </div>
            </div>
            <div className="w-full md:flex md:flex-wrap md:justify-start md:items-start mt-4 ml-4">
                <div>
                    <button className="w-28 h-32 m-4">
                        <img
                            src="./src/assets/imgs/product-test2.jpeg"
                            alt="Product"
                            className="bg-cover h-1/2 w-full group-hover:hidden"
                        />
                    </button>
                    <button className="w-28 h-32 m-4">
                        <img
                            src="./src/assets/imgs/product-test2.jpeg"
                            alt="Product"
                            className="bg-cover h-1/2 w-full group-hover:hidden"
                        />
                    </button>
                    <button className="w-28 h-32 m-4">
                        <img
                            src="./src/assets/imgs/product-test2.jpeg"
                            alt="Product"
                            className="bg-cover h-1/2 w-full group-hover:hidden"
                        />
                    </button>
                    <button className="w-28 h-32 m-4">
                        <img
                            src="./src/assets/imgs/product-test2.jpeg"
                            alt="Product"
                            className="bg-cover h-1/2 w-full group-hover:hidden"
                        />
                    </button>
                    <button className="w-28 h-32 m-4">
                        <img
                            src="./src/assets/imgs/product-test2.jpeg"
                            alt="Product"
                            className="bg-cover h-1/2 w-full group-hover:hidden"
                        />
                    </button>
                    <button className="w-28 h-32 m-4">
                        <img
                            src="./src/assets/imgs/product-test2.jpeg"
                            alt="Product"
                            className="bg-cover h-1/2 w-full group-hover:hidden"
                        />
                    </button>
                </div>
            </div>
        </div>
        
        </>
    );
};

export default UserWishList;
