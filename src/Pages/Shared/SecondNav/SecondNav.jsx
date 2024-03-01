import { FaSearch, FaShoppingCart, FaUser, } from "react-icons/fa";
const SecondNav = () => {
    return (
        <div>
            <div className="navbar bg-[#194E8A] h-[50px] flex justify-between ">
                <div className="text-white">
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
            </div>
        </div >
    );
};

export default SecondNav;