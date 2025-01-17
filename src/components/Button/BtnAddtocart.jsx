import { useAuth } from "../../context/auth"
import axios from "axios";
import {toast} from "react-toastify";
import { trackAddToCart } from "../../gtag"
import { useLoading } from "../../context/loading";

const BtnAddtocart = ({id, quantity}) => {
  const { showLoading, hideLoading } = useLoading();
  const [auth,setAuth] = useAuth()

    const addToCart = async () => {
        try {
            if(!auth?.user){
                toast.error("Please Login to Add To Cart");
            }
            else{
              showLoading();
              const { data } = await axios.post('https://api-nhaxinh.onrender.com/api/cart/addtoCart', {
                productId: id , quantity: quantity
              });
              if(data?.status == "success"){
                  toast.success("Add to Cart Successfully!");
                  trackAddToCart(data);
              }
              hideLoading();
            }
        } catch (error) {
            hideLoading();
            toast.error(error.response.data.message);
        }
     };
  
  return (
    <button className="border md:min-w-[80px] h-full border-black text-black text-[13px] px-4 py-2 uppercase hover:bg-black hover:text-white cursor-pointer"
      onClick={addToCart}
    >
      Thêm vào giỏ
    </button>
  )
}

export default BtnAddtocart
