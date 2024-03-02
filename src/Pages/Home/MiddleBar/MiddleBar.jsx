import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Pagination } from 'swiper/modules';
import image from "../../../assets/images/Frame-61.jpg"

const MiddleBar = () => {
    return (
        <div className='w-6/12'>
            <>
                <Swiper pagination={true} modules={[Pagination]} className="mySwiper ">
                    <SwiperSlide>
                        <img src={image} alt="" />
                    </SwiperSlide>
                    <SwiperSlide><img src={image} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={image} alt="" /></SwiperSlide>
                </Swiper>
               <div className='flex gap-6 px-2 bg-white'>
               <div >
                    <figure className="">
                        <img src="../../../assets/images/Frame 26928.jpg" alt="Brand Images" className="rounded-full h-[88px] w-[88px] bg-slate-300 mt-2" />
                    </figure>
                    <div className=" items-center text-center">
                        <p>Brand Name</p>
                    </div>
                </div>
               <div >
                    <figure className="">
                        <img src="../../../assets/images/Frame 26928.jpg" alt="Brand Images" className="rounded-full h-[88px] w-[88px] bg-slate-300 mt-2" />
                    </figure>
                    <div className=" items-center text-center">
                        <p>Brand Name</p>
                    </div>
                </div>
               <div >
                    <figure className="">
                        <img src="../../../assets/images/Frame 26928.jpg" alt="Brand Images" className="rounded-full h-[88px] w-[88px] bg-slate-300 mt-2" />
                    </figure>
                    <div className=" items-center text-center">
                        <p>Brand Name</p>
                    </div>
                </div>
               <div >
                    <figure className="">
                        <img src="../../../assets/images/Frame 26928.jpg" alt="Brand Images" className="rounded-full h-[88px] w-[88px] bg-slate-300 mt-2" />
                    </figure>
                    <div className=" items-center text-center">
                        <p>Brand Name</p>
                    </div>
                </div>
               <div >
                    <figure className="">
                        <img src="../../../assets/images/Frame 26928.jpg" alt="Brand Images" className="rounded-full h-[88px] w-[88px] bg-slate-300 mt-2" />
                    </figure>
                    <div className=" items-center text-center">
                        <p>Brand Name</p>
                    </div>
                </div>
               <div >
                    <figure className="">
                        <img src="../../../assets/images/Frame 26928.jpg" alt="Brand Images" className="rounded-full h-[88px] w-[88px] bg-slate-300 mt-2" />
                    </figure>
                    <div className=" items-center text-center">
                        <p>Brand Name</p>
                    </div>
                </div>
               </div>
            </>
        </div>
    );
};

export default MiddleBar;