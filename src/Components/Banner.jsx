import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Lottie from 'lottie-react';
import plantLottie from '../assets/plants-animation.json'

const Banner = () => {
  return (
    <header className="w-full bg-gray-100 border-[2px] border-transparent shadow-xl relative">
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={30}
        slidesPerView={1}
        loop
        className="relative"
      >
        <SwiperSlide>
          <div className="h-96 flex items-center justify-center">
            <img
              src="https://i.ibb.co/fGrYC9sm/indoor-plants-studio.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-96 flex items-center justify-center">
            <img
              src="https://i.ibb.co/35LPKJhN/green-leaves-plant-silver-can-wooden-desk-against-black-background.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-96 flex items-center justify-center">
            <img
              src="https://i.ibb.co/mFbRY49S/front-view-potted-plant-wooden-surface.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </SwiperSlide>
      </Swiper>

      {/* Lottie + Text Box */}
      <div className="absolute top-30 left-80 z-10 bg-[#75b72ebc] rounded-2xl hidden lg:flex items-center gap-4 p-5 border-[2px] border-transparent shadow-xl">
        <Lottie animationData={plantLottie} className="w-28 h-28" />
        <div>
          <h2 className="text-2xl font-bold text-gray leading-snug">
            Let's Explore!<br />
            All of our exclusive plants!
          </h2>
        </div>
      </div>
    </header>
  );
};

export default Banner;
