import { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
const SearchInput = () => {
    const [valueSearch, setValueSearch] = useState("")
    //const [activeSearch, setActiveSearch] = useState(false)
    const navigate = useNavigate();
    // const searchData = setTimeout((valueSearch) => {
    //   console.log({valueSearch})
    // },500)

    const handleChange = (event) => {
      const { value } = event.target;
      //setActiveSearch(true);
      setValueSearch(value);
      //console.log(value);
      //searchData(valueSearch);
    };

    return (
        <>
            <div className="relative">
                <input
                    type="text"
                    className="w-full h-[40px] text-[12px] px-6 py-3 border text-black font-Roboto border-[#ddd] bg-[#f7f7f7] rounded-[99px] text-sm"
                    placeholder="Tìm sản phẩm"
                    onChange={handleChange}
                />
                <IoSearchOutline
                    className="absolute cursor-pointer inline-block right-[14px] top-1/2 transform -translate-y-1/2"
                    size={22}
                    onClick={(e)=>{
                      e.preventDefault();
                      if(valueSearch != ""){
                        navigate(`/search/${valueSearch}`) 
                      }else{
                        toast.warning("Please enter a value to search!")
                      }
                    }}
                />
                {/* <div className={`absolute p-3 hidden bg-slate-200 w-full h-auto z-10 ${activeSearch ? 'md:block' : ''}`}>
                  <a href="" className="p-2">
                    <div className="flex items-center">
                      <img src="src/assets/imgs/product-test2.jpeg" alt="" className="w-[40px] h-[40px] bg-cover rounded-full"/>
                      <p>Armchair + Đôn Cabo PMA42005 KD1092-12</p>
                      <span>23,000,000đ</span>
                    </div>
                  </a>
                </div> */}
            </div>
        </>
    );
};

export default SearchInput;
