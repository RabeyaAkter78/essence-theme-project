import image from "../../assets/images/DOTD-1.png"
import image2 from "../../assets/images/DOTD-2.png"
import { FaShoppingCart, FaStar } from "react-icons/fa";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";
const DealOfTheDay = () => {
    return (
        <div className=" max-w-screen-xl mx-auto mb-10">
            <SectionTitle
                heading={"Deal of The Day"}
            ></SectionTitle>
            <div className="flex gap-4">

                <div className="card lg:card-side bg-base-100 shadow-xl">
                    <figure><img className="h-full" src={image} alt="Album" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Wireless Bluetooth Headset Single Ear Earplugs Ultra...</h2>
                        <div className="flex gap-2 justify-center items-center">
                            <div className="flex gap-1 fill-orange-500">
                                <FaStar></FaStar>
                                <FaStar></FaStar>
                                <FaStar></FaStar>
                                <FaStar></FaStar>
                                <FaStar></FaStar>
                            </div>
                            <p>4.5 (121)</p>
                        </div>
                        <div className="flex justify-center items-center">
                            <p className="text-4xl">$ <span className="text-4xl font-bold">6</span> </p>
                            <p>$16</p>
                            <p>-50%</p>
                        </div>
                        <div className="flex gap-2">
                            <button className="flex gap-1 btn">
                                <img src="../../../src/assets/images/scan-eye.png" alt="" />
                                Preview
                            </button>
                            <button className="flex gap-1 btn">
                                <img src="../../../src/assets/images/Vector.png" alt="" />
                                Compare
                            </button>

                        </div>
                        <p className="text-slate-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...</p>
                        <div className="flex gap-2 btn-wide btn bg-[#194E8A] hover:bg-[#194E8A] text-white">
                            <FaShoppingCart></FaShoppingCart>
                            <button className=" ">Add to Cart</button>
                        </div>
                    </div>
                </div>
                <div className="card lg:card-side bg-base-100 shadow-xl">
                    <div>
                        <figure><img className="relative h-full" src={image2} alt="Album" /></figure>
                        <div className="flex gap-10 absolute top-1/2 left-48 transform -translate-x-1/2 -translate-y-1/4 bg-white p-4">
                            <div className="text-center">
                                <h1 className="text-red-500 font-semibold">06</h1>
                                <p>Days</p>
                            </div>
                            <div className="text-center">
                                <h1 className="text-red-500 font-semibold">23</h1>
                                <p>Hours</p>
                            </div>
                            <div className="text-center">
                                <h1 className="text-red-500 font-semibold">55</h1>
                                <p>Minutes</p>
                            </div>
                            <div className="text-center">
                                <h1 className="text-red-500 font-semibold" >05</h1>
                                <p>Seconds</p>
                            </div>
                        </div>
                    </div>



                    <div className="card-body">
                        <h2 className="card-title">Wireless Bluetooth Headset Single Ear Earplugs Ultra...</h2>
                        <div className="flex gap-2 justify-center items-center">
                            <div className="flex gap-1 fill-orange-500">
                                <FaStar></FaStar>
                                <FaStar></FaStar>
                                <FaStar></FaStar>
                                <FaStar></FaStar>
                                <FaStar></FaStar>
                            </div>
                            <p>4.5 (121)</p>
                        </div>
                        <div className="flex justify-center items-center">
                            <p className="text-4xl">$ <span className="text-4xl font-bold">6</span> </p>
                            <p>$16</p>
                            <p>-50%</p>
                        </div>
                        <div className="flex gap-2">
                            <button className="flex gap-1 btn">
                                <img src="../../../src/assets/images/scan-eye.png" alt="" />
                                Preview
                            </button>
                            <button className="flex gap-1 btn">
                                <img src="../../../src/assets/images/Vector.png" alt="" />
                                Compare
                            </button>

                        </div>
                        <p className="text-slate-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...</p>
                        <div className="flex gap-2 btn-wide btn bg-[#194E8A] hover:bg-[#194E8A] text-white">
                            <FaShoppingCart></FaShoppingCart>
                            <button className=" ">Add to Cart</button>
                        </div>
                    </div>



                </div>
            </div>
        </div>
    );
};

export default DealOfTheDay;