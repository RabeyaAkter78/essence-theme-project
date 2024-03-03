import img1 from "../../../assets/images/s-1.png"
import img2 from "../../../assets/images/s-2.png"
import img3 from "../../../assets/images/s-3.png"
import img4 from "../../../assets/images/s-4.png"
const SecondFooter = () => {
    return (
        <div>
            <footer className="footer items-center p-4 bg-slate-400 text-black">
                <aside className="items-center grid-flow-col">
                    <p>All Rights Reserved. © 2024 zcart.com</p>
                </aside>
                <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end justify-center items-center">
                    <p>
                        We are using safe for
                    </p>
                    <div className="flex gap-2 ml-5">
                        <img src={img1} alt="" />
                        <img src={img2} alt="" />
                        <img src={img3} alt="" />
                        <img src={img4} alt="" />
                    </div>
                </nav>
            </footer>
        </div>
    );
};

export default SecondFooter;