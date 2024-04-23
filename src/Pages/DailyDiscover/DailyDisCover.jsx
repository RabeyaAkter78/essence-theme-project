import { useEffect, useState } from "react";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import img from "../../assets/images/star.png"
const DailyDisCover = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/dailyDiscoverProducts')
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setProducts(data)
            })
    }, [])
    return (
        <div className="max-w-screen-xl mx-auto ">
        <SectionTitle
            heading={"Daily Discover"}>

        </SectionTitle>
        <div className=" grid grid-cols-1 md:grid-cols-6 gap-4 mb-10  ">
            {
                products.map(product => <div key={product._id}>
                    <div className=" ">
                        <figure><img className=" " src={product.image} alt="image" /></figure>
                        <div className="card-body bg-slate-50">
                            <h2 className="font-semibold text-xl">Wireless Bluetooth Headset Single</h2>
                           <div className="flex flex-col justify-center items-center">
                            <img src={img} alt="" />
                            <p>(121 Review)</p>
                           </div>

                            <div className="flex font-bold">
                                <p className="">$8</p>
                                <p className="">$16</p>
                                <p className="">-50%</p>
                            </div>
                        </div>
                    </div>

                </div>)
            }
        </div>
    </div>
    );
};

export default DailyDisCover;