import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Pagination } from 'swiper/modules';
import image from "../../../assets/images/Frame-61.jpg"
import banner1 from"../../../assets/images/banner-1.png"
import banner2 from"../../../assets/images/banner-2.png"
import banner3 from"../../../assets/images/banner-3.png"
import banner4 from"../../../assets/images/banner-4.png"
import banner5 from"../../../assets/images/banner-5.png"
import banner6 from"../../../assets/images/banner-6.png"
const MiddleBar = () => {
    return (
        <div className=' w-full md:w-6/12  '>
            <>
                <Swiper pagination={true} modules={[Pagination]} className="mySwiper ">
                    <SwiperSlide>
                        <img src={image} className='' alt="" />
                    </SwiperSlide>
                    <SwiperSlide><img src={image} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={image} alt="" /></SwiperSlide>
                </Swiper>
               <div className='flex flex-col md:flex-row gap-6 px-2 bg-white'>
               <div >
                    <figure className="">
                        <img src={banner1} alt="Brand Images" className="rounded-full h-[88px] w-[88px] bg-slate-300 mt-2" />
                    </figure>
                    <div className=" items-center text-center">
                        <p>Brand Name</p>
                    </div>
                </div>
               <div >
                    <figure className="">
                        <img src={banner2} alt="Brand Images" className="rounded-full h-[88px] w-[88px] bg-slate-300 mt-2" />
                    </figure>
                    <div className=" items-center text-center">
                        <p>Brand Name</p>
                    </div>
                </div>
               <div >
                    <figure className="">
                        <img src={banner3} alt="Brand Images" className="rounded-full h-[88px] w-[88px] bg-slate-300 mt-2" />
                    </figure>
                    <div className=" items-center text-center">
                        <p>Brand Name</p>
                    </div>
                </div>
               <div >
                    <figure className="">
                        <img src={banner4} alt="Brand Images" className="rounded-full h-[88px] w-[88px] bg-slate-300 mt-2" />
                    </figure>
                    <div className=" items-center text-center">
                        <p>Brand Name</p>
                    </div>
                </div>
               <div >
                    <figure className="">
                        <img src={banner5} alt="Brand Images" className="rounded-full h-[88px] w-[88px] bg-slate-300 mt-2" />
                    </figure>
                    <div className=" items-center text-center">
                        <p>Brand Name</p>
                    </div>
                </div>
               <div >
                    <figure className="">
                        <img src={banner6} alt="Brand Images" className="rounded-full h-[88px] w-[88px] bg-slate-300 mt-2" />
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