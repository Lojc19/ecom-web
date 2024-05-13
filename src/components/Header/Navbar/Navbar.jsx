import { IoMenu } from "react-icons/io5";
import SearchInput from "./SearchInput";
import { FaChevronDown } from "react-icons/fa";
import { useState, useEffect } from "react";
import ModalMenu from "./ModalMenu";
import { IoCartOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";

const Navbar = () => {
    const [activeMenu, setActiveMenu] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [scrolled2, setScrolled2] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 40) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        // Cleanup
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const openMenu = () => {
        setActiveMenu(true);
    };
    const closeMenu = () => {
        if (window.innerWidth > 768 && window.innerHeight > 768) {
            setActiveMenu(false);
            // Code để xử lý trên máy tính PC ở đây
        }
        setActiveMenu(false);
    };
    const dataRoom = [
        "Phòng khách",
        "Phòng ăn",
        "Phòng ngủ",
        "Phòng làm việc",
        "Tủ bếp",
        "Hàng trang trí",
        "Ngoại thất",
    ];
    const itemsCate = [
        "Sofa",
        "Sofa góc",
        "Ghế thư giãn",
        "Armchair",
        "Ghế dài & đôn",
        "Bàn bên",
        "Bàn nước",
        "Bàn Console",
        "Tủ tivi",
        "Kệ trưng bày",
        "Tủ giày",
        "Bàn ăn",
        "Ghế ăn",
        "Ghế Bar",
        "Tủ ly",
        "Xe đẩy",
        "Tủ bếp",
        "Thiết bị bếp",
        "Giường ngủ",
        "Bàn đầu giường",
        "Bàn trang điểm",
        "Tủ áo",
        "Tủ âm tường",
        "Tủ hộc kéo",
        "Nệm",
        "Bàn làm việc",
        "Ghế làm việc",
        "Kệ sách",
        "Bàn ngoài trời",
        "Ghế ngoài trời",
        "Đèn trang trí",
        "Thảm trang trí",
        "Michael Aram",
        "Đồ trang trí noel",
        "Bình trang trí",
        "Tranh",
        "Gương",
        "Hoa và cây",
        "Đồng hồ",
        "Khung hình",
        "Tượng trang trí",
        "Gối và thú bông",
        "Nến & chân nến",
        "Dụng cụ bếp",
        "Hàng trang trí khác",
        "Tinh dầu",
    ];

    return (
        <>
            <div
                className={`w-screen fixed h-auto px-3 bg-white items-center border-b-[1px] z-10 ${
                    scrolled
                        ? "fixed top-0 left-0 shadow-lg animate-navbar"
                        : ""
                }`}
            >
                <div className="container px-4 md:max-w-[1320px] h-[90px] mx-auto flex justify-between items-center relative">
                    <div className="flex items-center">
                        <IoMenu
                            size={32}
                            className="mr-4 md:mr-3 cursor-pointer"
                            onClick={openMenu}
                        />
                        <a href="">
                            <img
                                src="src/assets/imgs/logo-nha-xinh-moi-200422.png"
                                alt=""
                                className="w-auto h-auto bg-cover"
                            />
                        </a>
                    </div>
                    <div className="md:block hidden">
                        <ul className="flex justify-between items-center gap-4 text-[14px] font-normal text-[#303036]">
                            <li className=" hover:text-[#FFB236] group py-9">
                                <a href="">
                                    SẢN PHẨM{" "}
                                    <FaChevronDown className="inline-block" />
                                </a>
                                <div className="container p-5 left-0 top-[92px] absolute md:max-w-[1320px] border border-[#ffffff4D] h-auto bg-white shadow-md hidden group-hover:block">
                                    <div className="w-full h-full flex justify-between ">
                                        <ul className="w-4/5 grid grid-cols-4 gap-4">
                                            {itemsCate?.map((p, index) => (
                                                // eslint-disable-next-line react/jsx-key
                                                <li className="">
                                                    <a
                                                        href=""
                                                        className="hover:text-black text-[#777777] font-normal text-[18px]"
                                                        key={index}
                                                    >
                                                        {p}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                        <img
                                            src="https://nhaxinh.com/wp-content/uploads/2021/10/nha-xinh-phong-khach-hien-dai-poppy-1.jpg"
                                            alt=""
                                            className="w-1/5 h-fit bg-cover"
                                        />
                                    </div>
                                </div>
                            </li>
                            <li className="hover:text-[#FFB236] relative group py-9">
                                <a href="">
                                    PHÒNG{" "}
                                    <FaChevronDown className="inline-block" />
                                </a>
                                <div className="p-5 left-0 top-[80px] absolute w-[200px] border-[2px] border-solid border-[#ffffff4D] h-auto bg-white shadow-xl hidden group-hover:block">
                                    <ul className="w-full">
                                        {dataRoom?.map((p, index) => (
                                            // eslint-disable-next-line react/jsx-key
                                            <li className="border-b mb-4">
                                                <a
                                                    href=""
                                                    className="hover:text-black text-[#777777] font-normal text-[18px]"
                                                    key={index}
                                                >
                                                    {p}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </li>
                            <li className="hover:text-[#FFB236]">
                                <a href="">BỘ SƯU TẬP</a>
                            </li>
                            <li className="hover:text-[#FFB236]">
                                <a href="">THIẾT KẾ NỘI THẤT</a>
                            </li>{" "}
                            <li className="hover:text-[#FFB236]">
                                <a href="">CỬA HÀNG 360 ĐỘ</a>
                            </li>
                            <li className="hover:text-[#FFB236]">
                                <a href="">GÓC CẢM HỨNG</a>
                            </li>{" "}
                        </ul>
                    </div>

                    <div className="md:hidden flex justify-between items-center gap-3">
                        <a href="">
                            <IoCartOutline size={22} />
                        </a>
                        <a href="">
                            <FaRegUser
                                className="inline-block ml-1"
                                size={20}
                            />
                        </a>
                    </div>

                    <div className="w-[273px] h-auto hidden md:block">
                        <SearchInput />
                    </div>
                </div>
            </div>

            {/* menu */}
            {activeMenu && <ModalMenu closeMenu={closeMenu} />}
        </>
    );
};

export default Navbar;
