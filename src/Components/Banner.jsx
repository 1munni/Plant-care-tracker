import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const Banner = () => {

        return (
            <header className="w-full bg-gray-100 border-[2px] border-transparent shadow-xl ">
              <Swiper
                modules={[Navigation]}
                navigation
                spaceBetween={30}
                slidesPerView={1}
                loop
                className='absolute'
              >
                <SwiperSlide>
                  <div className="h-96 flex items-center justify-center text-white text-2xl">
                    <img src="https://i.ibb.co/fGrYC9sm/indoor-plants-studio.jpg" alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="h-96 flex items-center justify-center text-white text-2xl">
                   <img src="https://i.ibb.co/35LPKJhN/green-leaves-plant-silver-can-wooden-desk-against-black-background.jpg" alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="h-96 flex items-center justify-center text-white text-2xl">
              <img src="https://i.ibb.co/mFbRY49S/front-view-potted-plant-wooden-surface.jpg" alt="" />
                  </div>
                </SwiperSlide>
              </Swiper>
             <div className='relative -top-57 ml-160 z-1 bg-[#75b72ebc] rounded-2xl hidden lg:inline-block p-5 border-[2px] border-transparent shadow-xl'>
                <h2 className='text-2xl font-bold text-black '>Let's Explore!
                    <br />
                    All of our exclusive plants!
                </h2>
             </div>
            </header>
          );
        };
        

export default Banner;