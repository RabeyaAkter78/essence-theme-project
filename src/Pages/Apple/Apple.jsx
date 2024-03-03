import { useEffect, useState } from "react";
import logo from "../../assets/images/logo.png"
const Apple = () => {
    const [apples, setApples] = useState([]);
    useEffect(() => {
        fetch('apple.json')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setApples(data)
            })
    }, [])


    return (
        <div>
            <div className="flex justify-between items-center font-semibold">
                <div className="flex gap-1 justify-center items-center">
                    <img src={logo} alt="" />
                    <h3>Apple</h3>
                </div>
                <div>
                    <p>See More Products</p>
                </div>
            </div>

            <div>
                <div className=" grid grid-cols-6 mb-2">
                    {
                        apples.map(apple => <div key={apple._id}>
                            <div >
                                <div className="w-48  ">
                                    <figure className="">
                                        <img src={apple.image} alt="apple images" className="" />
                                    </figure>
                                    <div className="items-center text-center">
                                        <h2 className="">{apple.Name}</h2>

                                    </div>
                                </div>
                            </div>

                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Apple;