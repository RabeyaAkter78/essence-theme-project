import image1 from "../../assets/images/w-1.png"
import image2 from "../../assets/images/w-2.png"
import image3 from "../../assets/images/w-3.png"
import image4 from "../../assets/images/w-4.png"
import image5 from "../../assets/images/w-5.png"
import image6 from "../../assets/images/w-6.png"
const WeeklyVendors2 = () => {
    return (
        <div>
            <div className="grid grid-cols-3 mt-20 gap-3">
                <img className="h-full" src={image1} alt="" />
                <img className="h-full" src={image2} alt="" />
                <img className="h-full" src={image3} alt="" />
                <img className="h-full" src={image4} alt="" />
                <img className="h-full" src={image5} alt="" />
                <img className="h-full" src={image6} alt="" />
            </div>
        </div>
    );
};

export default WeeklyVendors2;