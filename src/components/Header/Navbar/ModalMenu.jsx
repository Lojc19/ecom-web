import { React, useState, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";
import SearchInput from "./SearchInput";

const ModalMenu = (props) => {
    const [dropdowns, setDropdowns] = useState({});
    useEffect(() => {
        // Initialize dropdowns based on rooms length
        const initialDropdowns = {};
        props.rooms.forEach((room, index) => {
          initialDropdowns[`item${index + 1}`] = false;
        });
        setDropdowns(initialDropdowns);
      }, [props.rooms]);

    const toggleDropdown = (itemName) => {
        setDropdowns({
            ...dropdowns,
            [itemName]: !dropdowns[itemName],
        });
    };

    const clickOnMenu = (event) => {
        event.stopPropagation(); // Ngăn sự kiện click từ việc lan truyền lên đến div cha
    };
    return (
        <div
            className="fixed left-0 top-0 bg-black bg-opacity-50 w-screen h-screen p-5 z-10"
            onClick={props.closeMenu}
        >
            <div
                className="md:w-[400px] w-[95vw] bg-white absolute h-screen top-0 left-0 py-8 overflow-auto z-10"
                onClick={clickOnMenu}
            >
                <IoIosClose
                    className="absolute cursor-pointer top-[5px] right-[5px]"
                    size={40}
                    onClick={props.closeMenu}
                />
                <ul className="text-base font-normal font-Roboto mt-5">
                    {props.rooms?.map((p, index) => (
                        <>
                            <li className="px-5 py-1 cursor-pointer h-auto">
                                <div
                                    className="flex justify-between items-center"
                                    onClick={() => toggleDropdown(`item${index + 1}`)}
                                >
                                    <div className="py-[6px]">{p.nameRoom}</div>
                                    <FaChevronDown
                                        className={`inline-block ${
                                            dropdowns[`item${index + 1}`]
                                                ? "rotate-[-180deg] transition ease-in duration-300"
                                                : "transition ease-in duration-300"
                                        }`}
                                    />
                                </div>
                                {dropdowns[`item${index + 1}`] && (
                                    <div className="">
                                        <ul className="ml-3">
                                            {p.categories.map((p, index) => (
                                                // eslint-disable-next-line react/jsx-key
                                                <li>
                                                    <a
                                                        href={`/category/${p.slug}`}
                                                        key={index}
                                                    >
                                                        {p.nameCate}
                                                    </a>
                                                </li>
                                            ))}
                                            {/* <li>Sofa</li>
                                                        <li>Sofa góc</li>
                                                        <li>Armchair</li>
                                                        <li>Ghế dài & đôn</li>
                                                        <li>Ghế thư giãn</li> */}
                                        </ul>
                                    </div>
                                )}
                            </li>
                        </>
                        // eslint-disable-next-line react/jsx-key
                        // <div className="flex flex-col">
                        //     <li className="">
                        //         <p
                        //             href=""
                        //             className="text-black font-semibold text-[18px]"
                        //             key={index}
                        //         >
                        //             {p.nameRoom}
                        //         </p>
                        //     </li>
                        //     {p.categories.map((p, index) => (
                        //         // eslint-disable-next-line react/jsx-key
                        //         <li className="">
                        //             <a
                        //                 href={`/category/${p.slug}`}
                        //                 className="hover:text-black text-[#777777] font-normal text-[18px]"
                        //                 key={index}
                        //             >
                        //                 {p.nameCate}
                        //             </a>
                        //         </li>
                        //     ))}
                        // </div>
                    ))}
                    {/* <li className="px-5 py-1 cursor-pointer h-auto">
                        <div
                            className="flex justify-between items-center"
                            onClick={() => toggleDropdown("item1")}
                        >
                            <div className="py-[6px]">Sofa và Armchair</div>
                            <FaChevronDown
                                className={`inline-block ${
                                    dropdowns.item1
                                        ? "rotate-[-180deg] transition ease-in duration-300"
                                        : "transition ease-in duration-300"
                                }`}
                            />
                        </div>
                        {dropdowns.item1 && (
                            <div className="">
                                <ul className="ml-3">
                                    <li>Sofa</li>
                                    <li>Sofa góc</li>
                                    <li>Armchair</li>
                                    <li>Ghế dài & đôn</li>
                                    <li>Ghế thư giãn</li>
                                </ul>
                            </div>
                        )}
                    </li> */}
                    {/* <li className="px-5 py-1 cursor-pointer h-auto border-[#ececec] border-t">
                        <div
                            className="flex justify-between items-center"
                            onClick={() => toggleDropdown("item2")}
                        >
                            <div className="py-[6px]">Bàn</div>
                            <FaChevronDown
                                className={`inline-block ${
                                    dropdowns.item2
                                        ? "rotate-[-180deg] transition ease-in duration-300"
                                        : "transition ease-in duration-300"
                                }`}
                            />
                        </div>
                        {dropdowns.item2 && (
                            <div className="">
                                <ul className="ml-3">
                                    <li>Bàn nước</li>
                                    <li>Bàn ăn</li>
                                    <li>Bàn bên</li>
                                    <li>Bàn làm việc</li>
                                    <li>Bàn trang điểm</li>
                                </ul>
                            </div>
                        )}
                    </li>
                    <li className="px-5 py-1 cursor-pointer h-auto border-[#ececec] border-t">
                        <div
                            className="flex justify-between items-center"
                            onClick={() => toggleDropdown("item3")}
                        >
                            <div className="py-[6px]">Ghế</div>
                            <FaChevronDown
                                className={`inline-block ${
                                    dropdowns.item3
                                        ? "rotate-[-180deg] transition ease-in duration-300"
                                        : "transition ease-in duration-300"
                                }`}
                            />
                        </div>
                        {dropdowns.item3 && (
                            <div className="">
                                <ul className="ml-3">
                                    <li>Ghế ăn</li>
                                    <li>Ghế bar</li>
                                    <li>Ghế làm việc</li>
                                </ul>
                            </div>
                        )}
                    </li>
                    <li className="px-5 py-1 cursor-pointer h-auto border-[#ececec] border-t">
                        <div
                            className="flex justify-between items-center"
                            onClick={() => toggleDropdown("item4")}
                        >
                            <div className="py-[6px]">Giường ngủ</div>
                            <FaChevronDown
                                className={`inline-block ${
                                    dropdowns.item4
                                        ? "rotate-[-180deg] transition ease-in duration-300"
                                        : "transition ease-in duration-300"
                                }`}
                            />
                        </div>
                        {dropdowns.item4 && (
                            <div className="">
                                <ul className="ml-3">
                                    <li>Giường</li>
                                    <li>Bàn đầu giường</li>
                                    <li>Nệm</li>
                                </ul>
                            </div>
                        )}
                    </li>
                    <li className="px-5 py-1 cursor-pointer h-auto border-[#ececec] border-t">
                        <div
                            className="flex justify-between items-center"
                            onClick={() => toggleDropdown("item5")}
                        >
                            <div className="py-[6px]">Tủ và kệ</div>
                            <FaChevronDown
                                className={`inline-block ${
                                    dropdowns.item5
                                        ? "rotate-[-180deg] transition ease-in duration-300"
                                        : "transition ease-in duration-300"
                                }`}
                            />
                        </div>
                        {dropdowns.item5 && (
                            <div className="">
                                <ul className="ml-3">
                                    <li>Tủ tivi</li>
                                    <li>Tủ trưng bày</li>
                                    <li>Tủ ly</li>
                                    <li>Tủ rượu</li>
                                    <li>Xe đẩy</li>
                                    <li>Tủ hộc kéo</li>
                                    <li>Tủ áo</li>
                                    <li>Tủ âm tường</li>
                                    <li>Tủ giày</li>
                                    <li>Kệ phòng khách</li>
                                </ul>
                            </div>
                        )}
                    </li>
                    <li className="px-5 py-1 cursor-pointer h-auto border-[#ececec] border-t">
                        <div
                            className="flex justify-between items-center"
                            onClick={() => toggleDropdown("item6")}
                        >
                            <div className="py-[6px]">Bếp</div>
                            <FaChevronDown
                                className={`inline-block ${
                                    dropdowns.item6
                                        ? "rotate-[-180deg] transition ease-in duration-300"
                                        : "transition ease-in duration-300"
                                }`}
                            />
                        </div>
                        {dropdowns.item6 && (
                            <div className="">
                                <ul className="ml-3">
                                    <li>Tủ bếp</li>
                                    <li>Phụ kiện bếp</li>
                                    <li>Đảo bếp</li>
                                    <li>Quầy bar</li>
                                </ul>
                            </div>
                        )}
                    </li>
                    <li className="px-5 py-1 cursor-pointer h-auto border-[#ececec] border-t">
                        <div
                            className="flex justify-between items-center"
                            onClick={() => toggleDropdown("item7")}
                        >
                            <div className="py-[6px]">Hàng trang trí</div>
                            <FaChevronDown
                                className={`inline-block ${
                                    dropdowns.item7
                                        ? "rotate-[-180deg] transition ease-in duration-300"
                                        : "transition ease-in duration-300"
                                }`}
                            />
                        </div>
                        {dropdowns.item7 && (
                            <div className="">
                                <ul className="ml-3">
                                    <li>Bình trang trí</li>
                                    <li>Đèn trang trí</li>
                                    <li>Đồ trang trí Noel</li>
                                    <li>Đồng hồ</li>
                                    <li>Dụng cụ bếp</li>
                                    <li>Gối và thú bông</li>
                                    <li>Hàng trang trí khác</li>
                                    <li>Hoa & Cây</li>
                                    <li>Khung gương</li>
                                    <li>Khung hình</li>
                                    <li>Nệm</li>
                                    <li>Sản phẩm khác</li>
                                    <li>Thảm</li>
                                    <li>Mền</li>
                                    <li>Tranh</li>
                                    <li>Tượng trang trí</li>
                                </ul>
                            </div>
                        )}
                    </li>
                    <li className="px-5 py-1 cursor-pointer h-auto border-[#ececec] border-t">
                        <div
                            className="flex justify-between items-center"
                            onClick={() => toggleDropdown("item8")}
                        >
                            <div className="py-[6px]">Ngoại thất</div>
                            <FaChevronDown
                                className={`inline-block ${
                                    dropdowns.item8
                                        ? "rotate-[-180deg] transition ease-in duration-300"
                                        : "transition ease-in duration-300"
                                }`}
                            />
                        </div>
                        {dropdowns.item8 && (
                            <div className="">
                                <ul className="ml-3">
                                    <li>Bàn ngoài trời</li>
                                    <li>Ghế ngoài trời</li>
                                </ul>
                            </div>
                        )}
                    </li> */}
                </ul>
                <div className="px-5 py-1 h-auto md:hidden">
                    <SearchInput />
                </div>
            </div>
        </div>
    );
};

export default ModalMenu;
