import { useEffect, useState } from "react";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";

const ShopDepartment = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('shopByCategory.json')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setCategories(data)
            })
    }, [])


    return (
        <div className="max-w-screen-xl mx-auto mb-10">
            <SectionTitle
                heading={"Shop by Department"}>

            </SectionTitle>
            <div className=" grid grid-cols-6 mb-2">
                {
                    categories.map(category => <div key={category._id}>
                        <div >
                            <div className="w-48  ">
                                <figure className="">
                                    <img src={category.image} alt="category images" className="" />
                                </figure>
                                <div className="items-center text-center">
                                    <h2 className="">{category.Name}</h2>

                                </div>
                            </div>
                        </div>

                    </div>)
                }
            </div>
        </div>
    );
};

export default ShopDepartment;