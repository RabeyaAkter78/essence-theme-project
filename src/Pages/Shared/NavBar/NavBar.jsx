import {  FaGreaterThan, FaLessThan } from "react-icons/fa";
const NavBar = () => {
    return (
        <div className="flex justify-between navbar bg-base-100">
           <div className="">
           <button className="btn btn-square btn-ghost">
                   <FaLessThan></FaLessThan>
                </button>
            </div>
            <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore </p>
            </div>
            <div className="">
                <button className="btn btn-square btn-ghost">
                    <FaGreaterThan></FaGreaterThan>
                </button>
            </div>
        </div>
    );
};

export default NavBar;