import { useEffect, useState } from "react";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";


const ShopAllCategories = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('allProduct.json')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setProducts(data)
            })
    }, []);

    return (
        <div>
            <div className="max-w-screen-xl mx-auto ">
                <SectionTitle
                    heading={"Shop All Categories"}>

                </SectionTitle>
                <div className=" grid grid-cols-5 gap-2 mb-10  ">
                    {
                        products.map(product => <div key={product._id}>
                            <div className="flex card-side ">
                                <figure><img className="h-24 " src={product.image} alt="image" /></figure>
                                <div className="card-body bg-slate-50">
                                    <h2 className="font-semibold text-xl">{product.Name}</h2>
                                    
                                   
                                </div>
                            </div>

                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ShopAllCategories;