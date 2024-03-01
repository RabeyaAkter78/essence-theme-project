import { IoIosRibbon } from "react-icons/io";
const LeftSideBar = () => {
    return (
        <div className=' w-3/12 p-5'>
            <div className="flex justify-center items-center gap-2 pb-4 ">
                <IoIosRibbon />
                <h2 className='mb-2 font-bold text-[#194E8A]'>All Categories</h2>
            </div>
            <div className="flex justify-center items-center gap-2 ">
                <IoIosRibbon />
                <h2 className='mb-2 '>Cars and Motorcycles</h2>
            </div>
            <div className="flex justify-center items-center gap-2">
                <IoIosRibbon />
                <h2 className='mb-2 '>Music and Books</h2>
            </div>
            <div className="flex justify-center items-center gap-2">
                <IoIosRibbon />
                <h2 className='mb-2 '>Arts and Crafts</h2>
            </div>
            <div className="flex justify-center items-center gap-2">
                <IoIosRibbon />
                <h2 className='mb-2 '>Moms and Babies</h2>
            </div>
            <div className="flex justify-center items-center gap-2">
                <IoIosRibbon />
                <h2 className='mb-2 '>Softwares</h2>
            </div>
            <div className="flex justify-center items-center gap-2">
                <IoIosRibbon />
                <h2 className='mb-2 '>Home & Garden</h2>
            </div>
            <div className="flex justify-center items-center gap-2">
                <IoIosRibbon />
                <h2 className='mb-2 '>Electronics</h2>
            </div>
            <div className="flex justify-center items-center gap-2">
                <IoIosRibbon />
                <h2 className='mb-2 '>Kids and Toy</h2>
            </div>
            <div className="flex justify-center items-center gap-2">
                <IoIosRibbon />
                <h2 className='mb-2 '>Clothing and Shoes</h2>
            </div>
            <div className="flex justify-center items-center gap-2">
                <IoIosRibbon />
                <h2 className='mb-2 '>Beauty and Health</h2>
            </div>
            <div className="flex justify-center items-center gap-2">
                <IoIosRibbon />
                <h2 className='mb-2 '>Sports</h2>
            </div>
            <div className="flex justify-center items-center gap-2">
                <IoIosRibbon />
                <h2 className='mb-2 '>Jewellery</h2>
            </div>
        </div>
    );
};

export default LeftSideBar;