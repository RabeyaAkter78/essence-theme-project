import { useEffect, useState } from "react";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import { FaStar } from "react-icons/fa";

const MostViewedItem = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('mostViewed.json')
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setProducts(data)
            })
    }, [])

    return (
        <div className="max-w-screen-xl mx-auto ">
            <SectionTitle
                heading={"Most Viewed Items"}>

            </SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-6 gap-4 mb-10">
                {
                    products.map(product => <div key={product._id}>
                        <div className="card h-96 md:h-72 w-520 bg-base-100 shadow-xl">
                            <figure><img className="w-full h-38" src={product.image} alt="image" /></figure>
                            <div className="p-2 bg-slate-50">
                                <h2 className="font-semibold text-xl">Wireless Bluetooth Headset Single</h2>
                                <p>Wireless Bluetooth Headset Single</p>
                               <div className="flex  justify-center items-center my-2">
                               <FaStar></FaStar>
                               <FaStar></FaStar>
                               <FaStar></FaStar>
                               <FaStar></FaStar>
                               <FaStar></FaStar>
                               
                               </div>
                               <p className="text-center">(121 Review)</p>
                                <div className="flex justify-between">
                                    <p className="font-bold">$8</p>
                                    <p className="font-bold">$16</p>
                                    <p className="font-bold">-50%</p>
                                </div>
                            </div>
                        </div>

                    </div>)
                }
            </div>
        </div>
    );
};

export default MostViewedItem;