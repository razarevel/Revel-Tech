import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SwiperNavButton from "./SwiperNavButton";

export default function BlogSlider() {
  return (
    <div className="container mx-auto w-full h-full relative border">
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        loop={true}
        modules={[Navigation, Pagination]}
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <div className="bg-black w-[500px] h-[500px]"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-red-500 w-[500px] h-[500px]"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-red-500 w-[500px] h-[500px]"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-yellow-500 w-[500px] h-[500px]"></div>
        </SwiperSlide>
      <SwiperNavButton />
      </Swiper>
    </div>
  );
}
