import { useEffect, useState } from "react";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";

const TopBrand = () => {
    const [topProducts, setTopProducts] = useState([]);
    useEffect(() => {
        fetch('topBrand.json')
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setTopProducts(data)
            })
    }, [])
    return (
        <div className="max-w-screen-xl mx-auto mb-10">
            <SectionTitle heading={"Top Brand"}></SectionTitle>
            <div className="grid grid-cols-3 md:grid-cols-8">
                {topProducts.map(topProduct => <div key={topProduct._id}>
                    <figure className="">
                        <img src={topProduct.image} alt="Brand Images" className=" bg-slate-50 my-2" />
                    </figure>
                    <div className="flex gap-2 ">
                        <div className=" items-center text-center">
                            <p>Brand Name</p>
                        </div>
                    </div>
                </div>)}
            </div>

        </div>
    );
};

export default TopBrand;