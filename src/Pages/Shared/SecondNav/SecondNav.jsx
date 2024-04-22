// import { FaSearch, FaShoppingCart, FaUser, } from "react-icons/fa";

import { FaShoppingCart, FaUser } from "react-icons/fa";

import logo from "../../../assets/images/Akash.png"
const SecondNav = () => {
    const navOptions = <>
        <label className="input input-bordered flex items-center gap-6 w-72 md:w-96">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-8 h-8 text-[#194E8A]"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
            <input type="text" className="grow" placeholder="Example: Wallet" />
        </label>
    </>

    return (
        <div className="bg-[#194E8A] ">
            {/* from daisy ui */}
            <div className="navbar max-w-screen-xl mx-auto h-[50px] flex justify-between ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <div className="flex justify-center items-center text-white ">
                        <img src={logo} alt="Logo " className="hidden md:block lg:block" />
                        <a className="btn btn-ghost normal-case text-xl md:text-xl ">Essence</a>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end flex gap-1 md:gap-11 text-white">
                    <div className="flex gap-2 justify-center items-center">
                        <h1>SignIn</h1>
                        <FaUser></FaUser>
                    </div>
                    <div className="flex gap-2 justify-center items-center">
                        <h1>Cart</h1>
                        <FaShoppingCart></FaShoppingCart>
                    </div>
                </div>
            </div>


        </div >
    );
};

export default SecondNav;



{/* <div className="navbar max-w-screen-xl mx-auto h-[50px] flex justify-between ">
                <div className="flex justify-center items-center text-white">
                    <img src={logo} alt="" />
                    <a className="btn btn-ghost normal-case text-xl md:text-xl">Essence</a>
                </div>
                <div className="w-full max-w-[250px] lg:max-w-[500px] ">
                    <input
                        type="search"

                        color="blue"
                        className="pr-50 w-full max-w-[500px] h-10 rounded-full "
                    />
                    <button className="!absolute ml-4 border-r border-gray-900">
                        <FaSearch></FaSearch>
                    </button>
                    <input className="!absolute ml-16  " placeholder="Example: Wallet..." type="text" />
                </div>
                <div>
                    <div className="dropdown dropdown-end flex gap-11 text-white">
                        <div className="flex gap-2 justify-center items-center">
                            <h1>SignIn</h1>
                            <FaUser></FaUser>
                        </div>
                        <div className="flex gap-2 justify-center items-center">
                            <h1>Cart</h1>
                            <FaShoppingCart></FaShoppingCart>
                        </div>
                    </div>
                </div>
            </div> */}