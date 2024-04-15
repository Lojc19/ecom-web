import { RiStarFill, RiStarHalfLine } from "react-icons/ri";

const StarRating = (props) => {
    const star = Math.floor(props.rate);
    const numbers = Array.from({ length: star }, (_, index) => index + 1);
    const hasHalfStar = props.rate % 1 !== 0;
    const starGray = 5 - Math.round(props.rate);
    const numbers2 = Array.from({ length: starGray }, (_, index) => index + 1);
    console.log(numbers);
    return (
        <div className="flex items-cente mt-1">
            {numbers.map(() => (
                <RiStarFill color="#FDE047" className="mr-1" />
            ))}
            {hasHalfStar && <RiStarHalfLine color="#FDE047" className="mr-1" />}{" "}
            {numbers2.map(() => (
                <RiStarFill color="#d1d5db" className="mr-1" />
            ))}
        </div>
    );
};

export default StarRating;
