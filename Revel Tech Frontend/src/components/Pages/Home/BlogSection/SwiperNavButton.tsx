import { useSwiper } from "swiper/react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
export default function SwiperNavButton() {
  const swiper = useSwiper();
  return (
    <div className="w-full flex items-center justify-between swiper-nav-btn absolute left-0 top-[30%]  z-10">
      <button
        className="bg-white  p-4 -translate-x-3"
        onClick={() => swiper.slidePrev()}
      >
        <SlArrowLeft className="" />
      </button>
      <button className="bg-white p-4" onClick={() => swiper.slideNext()}>
        <SlArrowRight className="" />
      </button>
    </div>
  );
}
