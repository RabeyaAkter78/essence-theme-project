import image from "../../assets/images/sofa.png"
const DealOfTheDay2 = () => {
    return (
        <div>
            <div className="flex flex-col md:flex-row gap-8 max-w-screen-xl justify-center items-center mb-10">
                <img className="w-full" src={image} alt="" />
                <img className="w-full" src={image} alt="" />
            </div>
            
        </div>
    );
};

export default DealOfTheDay2;