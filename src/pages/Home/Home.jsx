import BannerCate from "../../components/Home/BannerCate";
import { FaArrowRight } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import ProductItem from "../../components/Product/ProductItem";

const Home = () => {
    return (
        <section>
            <div className="w-full md:flex justify-between md:h-[600px] p-3 mx-auto">
                <div className="w-full md:h-[600px] md:w-1/2 p-3 relative">
                    <a href="">
                        <img
                            src="./src/assets/imgs/BST-COASTAL-SOFA-VANG-2.jpg"
                            alt=""
                            className="bg-cover h-full w-full"
                        />
                        <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-Montserrat font-medium text-2xl uppercase">
                            sofa
                        </span>
                    </a>
                </div>

                <div className="w-full md:w-1/2 md:h-[600px] md:flex md:flex-wrap">
                    <BannerCate
                        title="bàn ăn"
                        img="./src/assets/imgs/nha-xinh-banner-ban-an-vuong-24423.jpg"
                    />
                    <BannerCate
                        title="giường"
                        img="./src/assets/imgs/giuong-ngu-pio-1.jpg"
                    />
                    <BannerCate
                        title="armchair"
                        img="./src/assets/imgs/banner-armchair-nhaxinh-31-1-24.jpg"
                    />
                    <BannerCate
                        title="ghế ăn"
                        img="./src/assets/imgs/nha-xinh-ghe-an-phong-an-749x800.jpg"
                    />
                </div>
            </div>

            <div className="w-full justify-between h-auto p-3 mx-auto bg-[#ebebeb] md:mt-3">
                <div className="w-full md:h-[600px] md:flex md:mt-8">
                    <div className="p-3 md:w-1/2 md:h-[600px] md:relative">
                        <div className="md:absolute bg-cover md:w-6/7 h-full md:left-0 overflow-hidden">
                            <a className="cursor-pointer">
                                <img
                                    src="./src/assets/imgs/nha-xinh-banner-phong-khach-31-1-24.jpg"
                                    alt="img room"
                                    className="bg-cover w-full h-full hover:scale-110 ease-in-out duration-300"
                                />
                            </a>
                        </div>
                        <div className="mt-4 md:absolute md:w-[270px] md:right-[-300px] md:top-[100px]">
                            <h2 className="font-bold font-Montserrat mb-3 text-[25px] leading-10">
                                Không gian phòng khách
                            </h2>
                            <p className="text-xs font-light mb-3">
                                Phòng khách là không gian chính của ngôi nhà, là
                                nơi sum họp gia đình
                            </p>
                            <a
                                href=""
                                className="uppercaste text-[14px] text-[#A9A9B2] flex items-center"
                            >
                                Mẫu thiết kế <FaArrowRight className="ml-1" />
                            </a>
                        </div>
                    </div>
                    <div className="p-3 md:w-1/2 md:h-[600px] md:relative">
                        <div className="md:absolute md:w-3/5 md:h-[500px] md:right-0 md:top-0 overflow-hidden">
                            <a href="#" className="cursor-pointer">
                                <img
                                    src="./src/assets/imgs/nha-xinh-do-trang-tri-banner-31-1-24.jpg"
                                    alt="img room"
                                    className="bg-cover w-full h-full hover:scale-110 ease-in-out duration-300"
                                />
                            </a>
                        </div>
                        <div className="mt-4 md:absolute md:w-[225px] md:left-[100px] md:bottom-[100px]">
                            <h2 className="font-bold font-Montserrat mb-3 text-2xl leading-10">
                                Đồ trang trí
                            </h2>
                            <p className="text-xs font-light mb-3">
                                Mang lại những nguồn cảm hứng và nét sinh động
                                cho không gian
                            </p>
                            <a
                                href=""
                                className="uppercaste text-[14px] text-[#A9A9B2] flex items-center"
                            >
                                Khám phá <FaArrowRight className="ml-1" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="w-full md:h-[550px] md:flex md:mt-8">
                    <div className="p-3 md:w-1/2 md:h-[600px] md:relative">
                        <div className="bg-cover h-full md:absolute md:w-3/7 md:h-3/5 md:right-[160px] overflow-hidden">
                            <a href="#" className="cursor-pointer">
                                <img
                                    src="./src/assets/imgs/mau-phong-ngu-16-5-23.jpg"
                                    alt="img room"
                                    className="bg-cover w-full h-full hover:scale-110 ease-in-out duration-300"
                                />
                            </a>
                        </div>
                        <div className="mt-4 md:absolute md:w-[180px] md:right-[-60px] md:top-[100px]">
                            <h2 className="font-bold font-Montserrat mb-3 text-2xl leading-10">
                                Không gian phòng ngủ
                            </h2>
                            <p className="text-xs font-light mb-3 md:max-w-[200px]">
                                Những mẫu phòng ngủ của Nhà Xinh mang đến cảm
                                giác ấm cúng, gần gũi và thoải mái
                            </p>
                            <a
                                href=""
                                className="uppercaste text-[14px] text-[#A9A9B2] flex items-center"
                            >
                                Mẫu phòng ngủ <FaArrowRight className="ml-1" />
                            </a>
                        </div>
                    </div>
                    <div className="p-3 md:w-1/2 md:h-[600px] md:relative">
                        <div className="md:left-[100px] md:top-[-50px] md:absolute md:w-3/7 md:h-3/5 overflow-hidden">
                            <a href="#" className="cursor-pointer">
                                <img
                                    src="./src/assets/imgs/banner-phong-an-nha-xinh-12-9-22.jpg"
                                    alt="img room"
                                    className="bg-cover w-full h-full hover:scale-110 ease-in-out duration-300"
                                />
                            </a>
                        </div>
                        <div className="mt-4 md:absolute md:left-[100px] md:bottom-[160px] md:w-[400px]">
                            <h2 className="font-bold font-Montserrat mb-3 text-2xl leading-10">
                                Không gian phòng ăn
                            </h2>
                            <p className="text-xs font-light mb-3">
                                Một bữa ăn ngon luôn là mong ước của mỗi gia
                                đình. Không gian phòng ăn đóng vai trò rất quan
                                trọng trong văn hóa Việt
                            </p>
                            <a
                                href=""
                                className="uppercaste text-[14px] text-[#A9A9B2] flex items-center"
                            >
                                Mẫu phòng ăn <FaArrowRight className="ml-1" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white md:flex">
                <div className="md:w-1/2 relative p-10">
                    <div className="text-center md:w-[400px] md:absolute md:top-1/2 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2">
                        <h2 className="md:text-[28px] uppercase font-Montserrat font-bold leading-8 pb-3">NỘI THẤT TINH TẾ</h2>
                        <p className="md:text-[16px] text-[12px] pb-8 font-light font-Roboto">Với kinh nghiệm hơn 24 năm trong hoàn thiện nội thất, Nhà Xinh mang đến giải pháp toàn diện trong bao gồm thiết kế, trang trí và cung cấp nội thất trọn gói. Sở hữu đội ngũ chuyên nghiệp và hệ thống 10 cửa hàng, Nhà Xinh là lựa chọn cho không gian tinh tế và hiện đại.</p>
                        <a href="" className="border-2 py-2 px-6 border-[#7A9C59] text-[#7A9C59] font-Roboto leading-relaxed hover:bg-[#7a9c59] hover:text-white">Xem thêm</a>
                    </div>
                </div>
                <div className="md:w-1/2">
                    <img src="./src/assets/imgs/nha-xinh-thiet-ke-noi-that-ecopark-16523.jpg" alt="thiết kế nội thất" className="w-full h-full bg-cover" />
                </div>
            </div>

            <div className="p-3 mx-auto w-full md:w-[1200px] md:p-0">
                <div className="flex w-full">
                    <h2 className="uppercase font-Montserrat font-bold text-[18px]">sản phẩm mới</h2>
                    <a href="#" className="ml-3 text-[14px] font-Montserrat font-light flex items-center">Xem tất cả <FaChevronRight size={12} className="ml-2"/></a>
                </div>
                <div className="border-b-[1px] border-[#ececec] w-full mb-10"></div>

                <div className="w-full md:flex md:flex-wrap md:justify-between">
                    <ProductItem/>
                    <ProductItem/>
                    <ProductItem/>
                    <ProductItem/>
                    <ProductItem/>
                </div>

            </div>

        </section>
    );
};

export default Home;
