import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import img from "../../assets/images/img-1.png";
import img2 from "../../assets/images/img-2.png";
import Apple from "../Apple/Apple";
const OnSellingProduct2 = () => {
    return (
        <div className="mb-10 max-w-screen-xl mx-auto ">
            <SectionTitle heading={"On Selling Product"}></SectionTitle>
            <div className="flex flex-col md:flex-row gap-2" >
                <div className="w-full md:w-3/12 flex flex-col gap-4">
                    <img src={img} alt="" />
                    <img src={img} alt="" />
                </div>
                <div className="w-full md:w-6/12 ">
                    <img className="h-full" src={img2} alt="" />
                </div>
                <div className="w-full md:w-3/12 flex flex-col gap-4">
                    <img src={img} alt="" />
                    <img src={img} alt="" />
                </div>
            </div>
            <Apple></Apple>
        </div>
    );
};

export default OnSellingProduct2;