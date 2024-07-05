import React, { useState, useEffect } from "react";
import {
    FaChevronRight,
    FaChevronLeft,
    FaChevronDown,
    FaChevronUp,
} from "react-icons/fa";
import ModalImg from "../../components/Product/ModalImg";
import { CiHeart } from "react-icons/ci";
import BtnAddtocart from "../../components/Button/BtnAddtocart";
import PlusMinusInput from "../../components/Input/PlusMinusInput";
import ReviewProduct from "../../components/Review/ReviewProduct";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import ProductItem from "../../components/Product/ProductItem";
import Layout from "../../components/Layout/Layout";
import { useAuth } from "../../context/auth"
import {toast} from "react-toastify";
import { IoMdHeart } from "react-icons/io";
import { Rating } from "@material-tailwind/react";
import { useWishlist } from "../../hooks/useWhislist"
import { trackProductView, trackAddToCart } from "../../gtag"

const ProductDetail = () => {
    const data = [
        {
            src: "https://nhaxinh.com/wp-content/uploads/2024/02/armchair-xoay-jadora-360-do-nhieu-lua-chon-15.jpg",
            alt: "Image 1 for carousel",
        },
        {
            src: "https://nhaxinh.com/wp-content/uploads/2024/02/armchair-xoay-jadora-360-do-nhieu-lua-chon-17.jpg",
            alt: "Image 2 for carousel",
        },
        {
            src: "https://nhaxinh.com/wp-content/uploads/2024/02/armchair-xoay-jadora-360-do-nhieu-lua-chon-16.jpg",
            alt: "Image 3 for carousel",
        },
        {
            src: "https://nhaxinh.com/wp-content/uploads/2024/02/armchair-xoay-jadora-360-do-nhieu-lua-chon-19.jpg",
            alt: "Image 3 for carousel",
        },
        {
            src: "https://nhaxinh.com/wp-content/uploads/2024/02/armchair-xoay-jadora-360-do-nhieu-lua-chon-4.jpg",
            alt: "Image 3 for carousel",
        },
    ];
    const [slide, setSlide] = useState(0);
    const [imgActive, setImgActive] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [clickedImgModal, setClickedImgModal] = useState(null);
    const [toggleState, setToggleState] = useState(1);
    const params = useParams();
    const [product, setProduct] = useState({});
    const [category, setCategory] = useState({});
    const [room, setRoom] = useState({});
    const [dimensions, setdimensions] = useState({});
    const [collectiion, setcollection] = useState({});
    const [materials, setmaterials] = useState({});
    const [images, setImages] = useState([]);
    const [products, setProducts] = useState([]);
    const [count, setCount] = useState(0);
    const [auth,setAuth] = useAuth()
    const [reviews, setReviews] = useState([]);
    const { whisProducts, isInWishlist, toogleWishlist } = useWishlist();
    const [rated, setRated] = useState(4);
    const [commment, setComment] = useState("");


    const formatCurrency = (total) => {
        return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(total);
    };

    useEffect(() => {
        if (params?.slug){
            getProduct();
            window.scrollTo({ top: 0, behavior: 'smooth' });   
        }
    }, [params?.slug]);

    useEffect(() => {
        setImgActive(slide); // cập nhật lại ảnh active
    }, [slide]);

    useEffect(() => {
        getAllProducts();
    }, []);

    useEffect(() => {
        if(product?._id)
            getProductReview();
    }, [product?._id]);

    const getProductReview = async () => {
        //console.log(product._id);
        try {
            const { data } = await axios.get(`https://api-nhaxinh.onrender.com/api/review/byProduct/${product._id}`);
            setReviews(data.data);

        } catch (error) {
            toast.error(error.response.data.message);
        }
     };

     const createReview = async () => {
        try {
            const { data } = await axios.post('https://api-nhaxinh.onrender.com/api/review', {
                star: rated, productID: product._id, comment: commment
            });
            if(data.status == "success"){
                toast.success(data.message);
            }
            //setProducts(data.data.product);
        } catch (error) {
            toast.error(error.response.data.message);

        }
     };


    const getAllProducts = async () => {
        try {
            const { data } = await axios.get('https://api-nhaxinh.onrender.com/api/product');
            setProducts(data.data.product);
        } catch (error) {
            toast.error(error.response.data.message);

        }
     };

    const addToCart = async () => {
        try {
            // const { data } = await axios.post('https://api-nhaxinh.onrender.com/api/cart/addtoCart', {
            //     productId: params?.id
            // });
            if(!auth?.user){
                toast.error("Please Login to Add To Cart");
            }
            else{
                if(count <= 0){
                    toast.error("Please enter a valid quanity!");
                }else{
                    const { data } = await axios.post('https://api-nhaxinh.onrender.com/api/cart/addtoCart', {
                        productId: product._id , quantity: count
                    });
                    if(data?.status == "success"){
                        toast.success("Add to Cart Successfully!");
                    }
                }
            }
        } catch (error) {
            toast.error(error.response.data.message);

        }
     };

    const getProduct = async () => {
        //console.log("closeModal");
        try {
            const { data } = await axios.get(
                `https://api-nhaxinh.onrender.com/api/product/${params.slug}`
            );
            setProduct(data?.data);
            setImages(data?.data?.images);
            setCategory(data?.data?.category);
            setRoom(data?.data?.room);
            const specs = data?.data?.specs;
            if(specs.length > 0) {
                setdimensions(data?.data?.specs[0]);
            }
            if(specs.length > 2) {
                setmaterials(data?.data?.specs[2])
            }
            if(specs.length > 1){
                setcollection(data?.data?.specs[1])
            }
            //await getProductReview();
            trackProductView(data?.data)
        } catch (error) {
            toast.error(error.response.data.message);
        }
    };

    const toggleTab = (index) => {
        setToggleState(index);
    };

    const nextSlide = () => {
        setSlide(slide === data.length - 1 ? 0 : slide + 1);
    };

    const prevSlide = () => {
        setSlide(slide === 0 ? data.length - 1 : slide - 1);
    };

    const clickSlide = (index) => {
        setSlide(index);
        setImgActive(index);
    };

    const handleClickImage = (index) => {
        setIsModalOpen(true);
        setClickedImgModal(index);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };
    return (
        <Layout title={"Product"}>
            <>
            <div className="container md:max-w-[1280px] flex mx-auto p-3">
                <a
                    href=""
                    className="cursor-pointer text-[#666666] font-light text-[14px]"
                >
                    Trang chủ <span>/</span>
                </a>
                <a
                    href=""
                    className="cursor-pointer text-[#666666] font-light text-[14px] ml-1"
                >
                    Phòng khách <span>/</span>
                </a>
                <a
                    href=""
                    className="cursor-pointer text-[#666666] font-light text-[14px] ml-1"
                >
                    Armchair
                </a>
            </div>

            <div className="p-3 mt-2 h-auto md:flex md:max-w-[1280px] justify-between mx-auto">
                <div className="w-full h-full md:w-[50%] overflow-hidden relative cursor-pointer group">
                    <div
                        className="flex transition-transform ease-in-out duration-500"
                        style={{ transform: `translateX(-${slide * 100}%)` }}
                    >
                        {images.map((item, index) => {
                            return (
                                <img
                                    src={item.url}
                                    alt={item._id}
                                    key={index}
                                    className="w-full h-full bg-cover"
                                    onClick={() => handleClickImage(index)}
                                />
                            );
                        })}
                    </div>
                    <FaChevronLeft
                        onClick={prevSlide}
                        className="hidden absolute top-1/2 left-0 transform -translate-y-1/2 md:block cursor-pointer md:opacity-0 group-hover:opacity-100"
                        size={32}
                    />
                    <FaChevronRight
                        onClick={nextSlide}
                        className="hidden absolute top-1/2 right-0 transform -translate-y-1/2 md:block cursor-pointer md:opacity-0 group-hover:opacity-100"
                        size={32}
                    />
                </div>
                <div className="md:p-3 md:w-[10%] md:h-auto md:order-first relative">
                    <FaChevronUp
                        onClick={prevSlide}
                        className="mx-auto mb-2 hidden md:block cursor-pointer"
                        size={32}
                    />
                    <div className="w-full h-full md:h-[400px] overflow-hidden">
                        <div
                            className={`flex justify-between flex-wrap transition-transform ease-in-out duration-500 md:flex-col ${
                                slide === data.length - 2
                                    ? "md:translate-y-[-20%]"
                                    : ""
                            }`}
                        >
                            {images.map((item, index) => {
                                return (
                                    <img
                                        src={item.url}
                                        alt={item._id}
                                        key={index}
                                        className={`cursor-pointer p-1 w-1/4 md:w-full h-[60px] md:h-[90px] md:mb-2 md:opacity-60 hover:opacity-100 ${
                                            imgActive === index
                                                ? "border border-slate-400"
                                                : ""
                                        }`}
                                        onClick={() => clickSlide(index)}
                                    />
                                );
                            })}
                        </div>
                    </div>
                    <FaChevronDown
                        onClick={nextSlide}
                        className="mx-auto mt-2 hidden md:block cursor-pointer"
                        size={32}
                    />
                </div>
                <div className="w-full h-full md:w-[40%] md:p-4">
                    <h1 className="text-[30px] font-Montserrat leading-tight font-semibold">
                        {/* Armchair xoay Jadora màu xanh họa tiết tặng kèm gối */}
                        {product.name}
                    </h1>
                    <div className="border-2 w-[50px] mt-3"></div>
                    <div className="flex mt-8">
                        <button  onClick={(e)=>{
                            e.preventDefault();
                            toogleWishlist(product._id)
                        }}>
                            {isInWishlist(product._id) ? (
                                <IoMdHeart className="w-1/10 cursor-pointer mr-2" size={24}/>
                            ) : (
                                <CiHeart className="w-1/10 cursor-pointer mr-2" size={24}/>
                            )}
                        </button>
                        <span className="block text-red-600 right-0 mr-3">
                            {/* 13,515,000đ */}
                            {formatCurrency(product.priceSale)}
                        </span>
                        <span className="line-through right-0"> 
                            {/* 15,515,000đ */}
                            {formatCurrency(product.price)}
                        </span>
                    </div>
                    <div className="mt-8">
                        <div className="font-Roboto">
                            <div className="mb-6">
                                <span className="font-bold">Vật liệu: </span>
                                <span className="border border-slate-200 px-2 py-1">
                                    {/* Vải bọc, khung gỗ, xoay 360° */}
                                    {materials.v}
                                </span>
                            </div>
                            <div className="mb-6">
                                <span className="font-bold">Kích thước: </span>
                                <span className="border border-slate-200 px-2 py-1">
                                    {/* D800 - R800 - C670 mm */}
                                    {dimensions.v}
                                </span>
                            </div>
                            <div className="mb-6">
                                <span className="font-bold">Collection: </span>
                                <span className="border border-slate-200 px-2 py-1">
                                    {/* D800 - R800 - C670 mm */}
                                    {collectiion.v}
                                </span>
                            </div>
                        </div>
                        <div className="mt-4">
                            <span>Mã sản phẩm: {product.code}</span>
                        </div>
                        <div className="mt-4">
                            <span>Danh mục: </span>
                            <a className="cursor-pointer"> {category.nameCate}, </a>
                            <a className="cursor-pointer"> {room.nameRoom}</a>
                        </div>
                        <div className="mt-6 w-full md:flex md:h-[45px]">
                            <PlusMinusInput count={count} setCount={setCount} />
                            <button className="border w-auto h-full border-black text-[13px] px-4 py-2 uppercase bg-black text-white cursor-pointer md:mx-4 mr-3" 
                                onClick={addToCart}
                            >
                                Mua ngay
                            </button>
                            <BtnAddtocart id={product._id} quantity={count} />
                        </div>
                    </div>

                    <div className="mt-5 md:mt-10 w-full h-auto">
                        <div className="md:flex h-full md:border-b-[1px] border-slate-400 justify-start md:gap-8 relative">
                            <div
                                className={`md:w-fit w-full h-full mt-3 md:mt-0 text-[18px] font-Roboto cursor-pointer group ${
                                    toggleState === 1
                                        ? "mb-[-1px] pb-2 border-b-2 border-[#FBAF1A]"
                                        : ""
                                }`}
                                onClick={() => toggleTab(1)}
                            >
                                <span
                                    className={`w-full group-hover:text-black font-bold ${
                                        toggleState === 1
                                            ? "text-black"
                                            : "text-[#666666D9]"
                                    }`}
                                >
                                    Mô tả
                                </span>
                            </div>
                            <div
                                className={`md:w-fit w-full h-full mt-3 md:mt-0 text-[18px] font-Roboto cursor-pointer group ${
                                    toggleState === 2
                                        ? "mb-[-1px] pb-2 border-b-2 border-[#FBAF1A]"
                                        : ""
                                }`}
                                onClick={() => toggleTab(2)}
                            >
                                <span
                                    className={`w-full group-hover:text-black font-bold ${
                                        toggleState === 2
                                            ? "text-black"
                                            : "text-[#666666D9]"
                                    }`}
                                >
                                    Bảo hành
                                </span>
                            </div>
                            <div
                                className={`md:w-fit w-full h-full mt-3 md:mt-0 text-[18px] font-Roboto cursor-pointer group ${
                                    toggleState === 3
                                        ? "mb-[-1px] pb-2 border-b-2 border-[#FBAF1A]"
                                        : ""
                                }`}
                                onClick={() => toggleTab(3)}
                            >
                                <span
                                    className={`w-full group-hover:text-black font-bold ${
                                        toggleState === 3
                                            ? "text-black"
                                            : "text-[#666666D9]"
                                    }`}
                                >
                                    Vận chuyển
                                </span>
                            </div>
                            <div
                                className={`md:w-fit w-full h-full mt-3 md:mt-0 text-[18px] font-Roboto cursor-pointer group ${
                                    toggleState === 4
                                        ? "mb-[-1px] pb-2 border-b-2 border-[#FBAF1A]"
                                        : ""
                                }`}
                                onClick={() => toggleTab(4)}
                            >
                                <span
                                    className={`w-full group-hover:text-black font-bold ${
                                        toggleState === 4
                                            ? "text-black"
                                            : "text-[#666666D9]"
                                    }`}
                                >
                                    Đánh giá
                                </span>
                            </div>
                        </div>

                        {/* tab */}
                        <div
                            className={`py-4 text-justify md:py-8 ${
                                toggleState === 1 ? "block" : "hidden"
                            }`}
                        >
                            <span className="text-[14px] font font-Roboto">
                                {/* Sản phẩm armchair với kiểu dáng mềm mại và vô
                                cùng êm ái, đặc biệt có khả năng xoay 360 độ một
                                cách mượt mà giúp mang đến những giây phút thư
                                giãn tuyệt vời. */}
                                {product.description}
                            </span>
                        </div>
                        <div
                            className={`py-4 text-justify md:py-8 text-[14px] font-Roboto ${
                                toggleState === 2 ? "block" : "hidden"
                            }`}
                        >
                            <p>
                                Các sản phẩm nội thất tại LC đa số đều
                                được sản xuất tại nhà máy của công ty cổ phần
                                xây dựng kiến trúc AA với đội ngũ nhân viên và
                                công nhân ưu tú cùng cơ sở vật chất hiện đại
                                . LC đã
                                kiểm tra kỹ lưỡng từ nguồn nguyên liệu cho đến
                                sản phẩm hoàn thiện cuối cùng.
                            </p>
                            <p>
                                LC bảo hành một năm cho các trường hợp có
                                lỗi về kỹ thuật trong quá trình sản xuất hay lắp
                                đặt.
                            </p>
                            <p>
                                Quý khách không nên tự sửa chữa mà hãy báo ngay
                                cho LC qua hotline: 1800 7200.
                            </p>
                            <p>
                                Sau thời gian hết hạn bảo hành, nếu quý khách có
                                bất kỳ yêu cầu hay thắc mắc thì vui lòng liên hệ
                                với LC để được hướng dẫn và giải quyết các
                                vấn đề gặp phải.
                            </p>
                            <strong>
                                TUY NHIÊN LC KHÔNG BẢO HÀNH CHO CÁC TRƯỜNG
                                HỢP SAU:
                            </strong>
                            <p>
                                Khách hàng tự ý sửa chữa khi sản phẩm bị trục
                                trặc mà không báo cho LC.
                            </p>
                            <p>
                                Sản phẩm được sử dụng không đúng quy cách của sổ
                                bảo hành (được trao gửi khi quý khách mua sản
                                phẩm) gây nên trầy xước, móp, dơ bẩn hay mất
                                màu.
                            </p>
                            <p>
                                {" "}
                                Sản phẩm bị biến dạng do môi trường bên ngoài
                                bất bình thường (quá ẩm, quá khô, mối hay do tác
                                động từ các thiết bị điện nước, các hóa chất hay
                                dung môi khách hàng sử dụng không phù hợp).
                            </p>
                            <p>Sản phẩm hết hạn bảo hành.</p>
                            <p>
                                Sản phẩm không có phiếu bảo hành của LC.
                            </p>
                            <p>Xem nội dung sổ bảo hành</p>
                        </div>
                        <div
                            className={`py-4 text-[14px] font font-Roboto text-justify md:py-8 ${
                                toggleState === 3 ? "block" : "hidden"
                            }`}
                        >
                                <strong>GIAO HÀNG TẬN NƠI</strong>
                                <p>
                                    LC cung cấp dịch vụ giao hàng tận nơi,
                                    lắp ráp và sắp xếp vị trí theo đúng ý muốn
                                    của quý khách:
                                </p>
                                <p>
                                    - MIỄN PHÍ giao hàng trong các Quận nội
                                    thành Tp.Hồ Chí Minh và Hà Nội, áp dụng cho
                                    các đơn hàng trị giá trên 10 triệu.
                                </p>
                                <p>
                                    - Đối với khu vực các tỉnh lân cận: Tính phí
                                    hợp lý theo dựa trên quãng đường vận chuyển
                                </p>
                        </div>
                        <div
                            className={`py-4 text-[14px] font font-Roboto md:py-8 ${
                                toggleState === 4 ? "block" : "hidden"
                            }`}
                        >   
                            <Rating value={4} onChange={(value) => setRated(value)}/>;
                            {!auth?.user ? (
                                <>
                                    
                                </>
                                ) : (
                                <>
                                    <input
                                className="form-control w-full mr-16 mt-4  p-4 border-2 border-gray-300 text-lg"
                                placeholder="Type your review here"
                                value={commment}
                                onChange={(e) =>
                                    setComment(e.target.value)
                                }
                            ></input>

                            <div className="w-full flex flex-grow justify-end h-12 mt-4 mr-4 mb-4">
                                <button className="border w-auto h-full border-black text-[13px] px-4 py-2 uppercase bg-black text-white cursor-pointer md:mx-4 mr-3" 
                                    onClick={createReview}
                                >
                                    Đánh giá
                                </button>
                            </div>
                                </>
                            )}
                            
                            {reviews?.map((p, index) => (
                                <>
                                    <ReviewProduct review={p}/>
                                </>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full mx-auto md:max-w-[1200px]">
                <h2 className="text-center font-bold font-Montserrat text-[24px]">Có thể bạn sẽ thích</h2>
                <div className="w-full md:flex md:flex-wrap md:justify-between">
                    {products?.map((p, index) => (
                        <>
                            <ProductItem product={p} images={p.images}/>
                        </>
                    ))}
                </div>
            </div>

            <div>
                {isModalOpen && (
                    <ModalImg
                        data={images}
                        indexImgClick={clickedImgModal}
                        onClose={closeModal}
                    />
                )}
            </div>
        </>
        </Layout>
        
    );
};

export default ProductDetail;
