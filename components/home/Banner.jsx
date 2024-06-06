"use client";
import Image from "next/image";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
const Banner = () => {
  return (
    <section className="relative flex items-center overflow-hidden bg-secondary/50 px-4 py-4 lg:min-h-[521.96px]">
      <Swiper
        modules={[ Autoplay ]}
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <Image
            alt="banner"
            className="rounded-3xl"
            src="/IMG_1098.webp"
            width={1920}
            height={720}
          />
        </SwiperSlide>
      </Swiper>
      <div className="absolute inset-0 -z-10">
        <div className="area pt-3">
          <ul className="circles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Banner;
