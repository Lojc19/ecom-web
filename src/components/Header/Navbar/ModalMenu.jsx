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
                </ul>
                <div className="px-5 py-1 h-auto md:hidden">
                    <SearchInput />
                </div>
            </div>
        </div>
    );
};

export default ModalMenu;
