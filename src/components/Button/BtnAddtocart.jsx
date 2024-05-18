import { useAuth } from "../../context/auth"
import axios from "axios";
import {toast} from "react-toastify";


const BtnAddtocart = ({id}) => {
  const [auth,setAuth] = useAuth()

    const addToCart = async () => {
        try {
            if(!auth?.user){
                toast.error("Please Login to Add To Cart");
            }
            else{
                if(count <= 0){
                    toast.error("Please enter a valid quanity!");
                }else{
                    const { data } = await axios.post('https://api-nhaxinh.onrender.com/api/cart/addtoCart', {
                        productId: id , quantity: 1
                    });
                    if(data?.status == "success"){
                        toast.success("Add to Cart Successfully!");
                    }
                }
            }
        } catch (error) {
            console.log(error);
            toast.error("Someething Went Wrong");
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
