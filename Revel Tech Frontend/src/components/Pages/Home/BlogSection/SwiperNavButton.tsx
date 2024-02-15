import { useSwiper } from "swiper/react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
export default function SwiperNavButton() {
  const swiper = useSwiper();
  return (
    <div className="w-full flex items-center justify-between  absolute left-0 top-[25%]">
      <button
        className="bg-white p-4 -translate-x-8 shadow-md border z-10"
        onClick={() => swiper.slidePrev()}
      >
        <SlArrowLeft className="" />
      </button>
      <button
        className="bg-white p-4 translate-x- z-10 shadow-md"
        onClick={() => swiper.slideNext()}
      >
        <SlArrowRight className="" />
      </button>
    </div>
  );
}
