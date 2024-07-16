// import { useState, useEffect } from "react";
// import axios from "axios";
// import { useAuth } from "../context/auth"
// import {toast} from "react-toastify";

// export default function useWishlist() {
//   const [whisProducts, setWhisProducts] = useState([]);
//   const [auth,setAuth] = useAuth()

//   //get cat
//   const getWishlists = async () => {
//     try {
//       const { data } = await axios.get("https://api-nhaxinh.onrender.com/api/user/wishlist");
//       setWhisProducts(data?.data);
//     } catch (error) {
//       //toast.error(error.response.data.message);
//     }
//   };

//   const isInWishlist = (productId) => {
//     if(!auth?.user)
//       return false;
//     return whisProducts.some(product => product._id === productId);
//   };

//   const toogleWishlist = async (productId) => {
//     if(auth?.user){
//       try{
//         const { data } = await axios.post("https://api-nhaxinh.onrender.com/api/user/wishlist", 
//           {
//             prodId: productId,
//           }
//         );
//         if(data.status == "success"){
//           toast.success("Change Successfully");
//           await getWishlists();
//         }
//       } catch(error){
//         console.log(error);
//       }
//     }else{
//       toast.error("Please Login To Add");
//     }
//   };

//   useEffect(() => {
//     if(auth?.user){
//         getWishlists();
//     }
//   }, [auth?.user]);

//   return {
//     whisProducts,
//     isInWishlist,
//     toogleWishlist
//   };
// }

import React, { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";
import { useAuth } from "../context/auth";
import { toast } from "react-toastify";
import { useLoading } from "../context/loading";
const WishlistContext = createContext();

const WishlistProvider = ({ children }) => {
  const [whisProducts, setWhisProducts] = useState([]);
  const [auth, setAuth] = useAuth();
  const { showLoading, hideLoading } = useLoading();
  const getWishlists = async () => {
    try {
      const { data } = await axios.get("https://api-nhaxinh.onrender.com/api/user/wishlist");
      setWhisProducts(data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  const isInWishlist = (productId) => {
    if (!auth?.user) return false;
    return whisProducts.some(product => product._id === productId);
  };

  const toogleWishlist = async (productId) => {
    if (auth?.user) {
      showLoading();
      try {
        const { data } = await axios.post("https://api-nhaxinh.onrender.com/api/user/wishlist", {
          prodId: productId,
        });
        if (data.status === "success") {
          toast.success("Change Successfully");
          await getWishlists();
        }
        hideLoading();
      } catch (error) {
        hideLoading();
        console.log(error);
      }
    } else {
      toast.error("Please Login To Add");
    }
  };

  useEffect(() => {
    if (auth?.user) {
      getWishlists();
    }
  }, [auth?.user]);

  return (
    <WishlistContext.Provider value={{ whisProducts, isInWishlist, toogleWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};
const useWishlist = () => useContext(WishlistContext);


export { useWishlist, WishlistProvider };
