const BannerCate = (props) => {
    return (
        <div className="w-full h-[280px] md:w-1/2 md:h-1/2 p-3 relative cursor-pointer">
            <div className="w-full h-full">
                <img
                    src={props.img}
                    alt="image"
                    className="bg-cover h-full w-full"
                />
                <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-Montserrat font-medium text-2xl md:text-base uppercase">
                    {props.title}
                </span>
            </div>
        </div>
    );
};

export default BannerCate;
