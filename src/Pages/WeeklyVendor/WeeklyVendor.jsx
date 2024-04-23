import image1 from "../../assets/images/b-2.png"
import image2 from "../../assets/images/b-1.png"
import image3 from "../../assets/images/b-3.png"
import image4 from "../../assets/images/b-4.png"
import image5 from "../../assets/images/b-5.png"
import SectionTitle from "../Shared/SectionTitle/SectionTitle"
import WeeklyVendors2 from "./WeeklyVendors2"
// import image6 from "../../assets/images/b-6.png"
const WeeklyVendor = () => {
    return (
        <div className="max-w-screen-xl mx-auto  mb-10">
            <SectionTitle heading={"Weekly Top Vendor"}></SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
                <img src={image1} alt="" />
                <img src={image2} alt="" />
                <img src={image3} alt="" />
                <img src={image4} alt="" />
                <img src={image5} alt="" />
            </div>
            <WeeklyVendors2></WeeklyVendors2>
        </div>
    );
};

export default WeeklyVendor;