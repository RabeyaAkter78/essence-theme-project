import { useEffect, useState } from "react";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";

const OnSellingProduct = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('onSellingProduct.json')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setProducts(data)
            })
    }, [])

    return (
        <div className="max-w-screen-xl mx-auto ">
            <SectionTitle
                heading={"On Selling Products"}>

            </SectionTitle>
            <div className=" grid grid-cols-1 md:grid-cols-3 gap-4 mb-10  ">
                {
                    products.map(product => <div key={product._id}>
                        <div className="flex flex-col md:flex-row card-side ">
                            <figure><img className="h-52 " src={product.image} alt="image" /></figure>
                            <div className="card-body bg-slate-50">
                                <h2 className="font-semibold text-xl">Wireless Bluetooth Headset Single</h2>
                                <p>Wireless Bluetooth Headset Single</p>
                                <div className="flex ">
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

export default OnSellingProduct;