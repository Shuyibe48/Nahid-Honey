import Categories from "../Categories/Categories";
import Slider from "../Slider/Slider";

const Banner = () => {
    return (
        <div className="flex">
            <div className="w-full md:w-2/6 px-2">
                <Categories />
            </div>
            <div className="px-2 w-full">
                <Slider />
            </div>
        </div>
    );
};

export default Banner;