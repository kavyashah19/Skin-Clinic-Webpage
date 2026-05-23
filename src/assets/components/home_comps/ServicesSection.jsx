import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import services from '../data/servicesData';

export default function ServicesSection() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="px-4 md:px-8 py-12 relative">
      {/* Header with arrows */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center w-full">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#5e4b3c] whitespace-nowrap">
            Our <span className="italic font-light">Services</span>
          </h2>
          <div className="border-t border-[#cdb9a8] flex-grow m-4"></div>
        </div>
        <div className="flex gap-4">
          <button
            ref={prevRef}
            className="w-12 h-12 rounded-full text-[#5e4b3c] border-[1px] border-[#5e4b3c] text-4xl pb-3 flex items-center justify-center hover:bg-[#c5a891]"
          >
            ‹
          </button>
          <button
            ref={nextRef}
            className="w-12 h-12 rounded-full text-[#5e4b3c] border-[1px] border-[#5e4b3c] text-4xl pb-3 flex items-center justify-center hover:bg-[#c5a891]"
          >
            ›
          </button>
        </div>
      </div>

      {/* Swiper Slider */}
      <Swiper
        modules={[Navigation]}
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        spaceBetween={5}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 5 },
        }}
      >
        {services.map((service, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center group">
              <div className="overflow-hidden rounded-lg shadow-md transition-transform duration-300 ease-in-out group-hover:scale-105">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-60 h-72 object-cover"
                />
              </div>
              <div className="text-center mt-2">
                <p className="text-xs text-gray-500 uppercase tracking-widest">
                  {service.category}
                </p>
                <p className="text-lg font-semibold text-[#5e4b3c]">
                  {service.title}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
