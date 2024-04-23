import { FaArrowDown } from "react-icons/fa";
import logo from "../../../assets/images/mainLogo.png"
import badge1 from "../../../assets/images/badge-1.png"
import badge2 from "../../../assets/images/badge-2.png"
import SocialIcons from "../../../assets/images/Socail Icons.png"
import SecondFooter from "./SecondFooter";
const FirstFooter = () => {

    return (
        <div className="bg-base-200">
            <footer className="footer p-10 text-base-content max-w-screen-xl mx-auto ">
                <aside>
                    <div className="flex justify-center items-center gp-2">
                        <img src={logo} alt="" />
                        <p className="font-bold font-serif text-xl text-[194E8A]">Essence</p>
                    </div>
                    <p>Got Question? Call us 24/7</p>
                    <p className="font-bold">(+1) 84382648364</p>
                    <p>Register now & get you 10%
                        offer from first order!</p>
                    <div className="flex mt-4 justify-center items-center gap-2">
                        <div>
                            <p>English (USA)</p>
                        </div>
                        <div>
                            <FaArrowDown></FaArrowDown>
                        </div>
                    </div>
                </aside>
                <nav >
                    <h6 className="text-md font-bold text-slate-900 uppercase">COMPANY</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Career</a>
                    <a className="link link-hover">Contact Us</a>
                    <a className="link link-hover">Start Selling</a>
                    <a className="link link-hover">Order History</a>
                </nav>
                <nav>
                    <h6 className="text-md font-bold text-slate-900 uppercase">My Account</h6>
                    <a className="link link-hover">Track My Order</a>
                    <a className="link link-hover">View Cart</a>
                    <a className="link link-hover">Sign In</a>
                    <a className="link link-hover">Help</a>
                    <a className="link link-hover">Wishlist</a>
                </nav>
                <nav>
                    <h6 className="text-md font-bold text-slate-900 uppercase">Customer Service</h6>
                    <a className="link link-hover">Payment Methods</a>
                    <a className="link link-hover">Money Return Policy</a>
                    <a className="link link-hover">Product Return</a>
                    <a className="link link-hover">Contact Seller</a>
                    <a className="link link-hover">Terms & Conditions</a>
                </nav>
                <nav>
                    <h6 className="text-md font-bold text-slate-900 uppercase">Download app</h6>
                    <div className="flex flex-col md:flex-row gap-2">
                        <img src={badge1} alt="" />
                        <img src={badge2} alt="" />
                    </div>
                    <div className="mt-10">
                        <img src={SocialIcons} alt="" />
                    </div>
                </nav>
            </footer>
            <SecondFooter></SecondFooter>
        </div>
    );
};

export default FirstFooter;