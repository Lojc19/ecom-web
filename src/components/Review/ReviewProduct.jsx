import React from "react";
import { MdAccessTime } from "react-icons/md";
import StarRating from "./StarRatting";
import { vi } from 'date-fns/locale';
import { formatDistanceToNow, parseISO } from 'date-fns';
const ReviewProduct = ({review}) => {
    const timeAgo = (dateString) => {
        const date = parseISO(dateString);
        return formatDistanceToNow(date, { addSuffix: true, locale: vi });
    };
    return (
        <>
            <div className="w-full h-auto border border-slate-300 rounded-[10px] p-3 bg-[#f9fafb]">
                <div className="flex justify-between">
                    <h3 className="font-Montserrat text-[16px] font-semibold">{review?.userID?.firstname} {review?.userID?.lastname}</h3>
                    <span className="font-Montserrat text-[14px]"> <MdAccessTime className="inline-block mr-2 mb-1"/>{timeAgo(review?.createdAt)}</span>
                </div>
                <div>
                    <StarRating rate={review?.star}/>
                </div>
                <div className="w-9/10 shadow-lg p-4 h-auto border rounded-[10px] ml-3 mt-2">{review?.comment}</div>
            </div>
        </>
    );
};

export default ReviewProduct;
