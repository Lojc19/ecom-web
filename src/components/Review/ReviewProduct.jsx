import React from "react";
import { MdAccessTime } from "react-icons/md";
import StarRating from "./StarRatting";
const ReviewProduct = () => {
    return (
        <>
            <div className="w-full h-auto border border-slate-300 rounded-[10px] p-3 bg-[#f9fafb]">
                <div className="flex justify-between">
                    <h3 className="font-Montserrat text-[16px] font-semibold">Nguyễn văn A</h3>
                    <span className="font-Montserrat text-[14px]"> <MdAccessTime className="inline-block"/> 1 tuần trước</span>
                </div>
                <div>
                    <StarRating rate="3.5"/>
                </div>
                <div className="w-9/10 shadow-lg p-4 h-auto border rounded-[10px] ml-3 mt-2">Sản phẩm này rất tốt</div>
            </div>
        </>
    );
};

export default ReviewProduct;
