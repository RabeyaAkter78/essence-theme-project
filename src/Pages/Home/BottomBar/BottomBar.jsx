import icon from "../../../assets/images/icon.jpg"
const BottomBar = () => {
    return (
        <div className="flex flex-col md:flex-row gap-6 md:px-14 mt-8">
            <div className=" flex justify-center items-center gap-2 h-[75px] md:w-[500px] mb-4 px-2 ">
                <div className="flex gap-2 p-2 bg-neutral-50 ">
                    <img src={icon} alt="" className="h-12 w-12"/>
                    <div>
                        <h2 className="font-semibold">Quick & Easy Store Pickup</h2>
                        <p>Get your order as little as 1hr</p>
                    </div>
                </div>
            </div>
            <div className="flex gap-4 justify-center items-center h-[75px] md:w-[500px] mb-4 px-2 ">
                <div className="flex gap-2 p-4 bg-neutral-50 ">
                    <img src={icon} alt="" className="h-12 w-12"/>
                    <div>
                        <h2 className="font-semibold">Low Price Guarantee</h2>
                        <p>We won’t be beat on price</p>
                    </div>
                </div>
            </div>
            <div className=" flex gap-4 justify-center items-center h-[75px] md:w-[500px] mb-4 px-2 ">
                <div className="flex gap-2 p-1 bg-neutral-50 ">
                    <img src={icon} alt="" className="h-12 w-12"/>
                    <div>
                        <h2 className="font-semibold">Knowledgeable Advice</h2>
                        <p>Answer to your tech questions</p>
                    </div>
                </div>
            </div>
            <div className=" flex gap-4 justify-center items-center h-[75px] md:w-[500px] mb-4 px-2">
                <div className="flex gap-2 p-1 bg-neutral-50 ">
                    <img src={icon} alt="" className="h-12 w-12"/>
                    <div>
                        <h2 className="font-semibold">Lates & Greatest Tech</h2>
                        <p>Discover whats new & excitings</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BottomBar;