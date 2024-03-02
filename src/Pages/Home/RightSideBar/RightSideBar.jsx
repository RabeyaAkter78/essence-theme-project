import img from "../../../assets/images/Frame 68.jpg"
const RightSideBar = () => {
    return (
        <div className=' w-3/12 px-4 '>
            <div className=" w-64 h-72 bg-white ">
                <div className="mb-2 p-2">
                <h2 className='mb-2'>Good Afternoon, John Smith</h2>
                    <h2 className="card-title  text-center">Flash Sale for You!</h2>
                    <p className="text-5xl font-bold  text-center text-[#194E8A]" >40% <span className="text-sm" >off</span></p>
                    <p className="font-bold " >After 12 hr this offer will be end. <span className="text-[#194E8A]">Get Now</span></p>
                </div>
                <figure><img className="" src={img} alt="Image" /></figure>
                <button className="btn btn-wide bg-[#194E8A] hover:bg-[#194E8A]  text-white my-2">Add To Cart</button>
            </div>
        </div>
    );
};

export default RightSideBar;