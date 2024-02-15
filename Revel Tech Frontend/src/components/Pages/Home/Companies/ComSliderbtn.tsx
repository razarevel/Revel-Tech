import { useSwiper } from "swiper/react";
import { FaAngleRight } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";
export default function ComSliderBtn() {
  const swiper = useSwiper();
  return (
    <div className="space-x-4  w-full h-full flex items-center justify-between absolute left-0 top-[0%]">
      <div className="bg-white h-full flex items-center justify-start z-10 w-14 -translate-x-4">
        <button className="relative z-10" onClick={() => swiper.slidePrev()}>
          <FaAngleLeft size={24} />
        </button>
      </div>

      <div className="bg-white h-full flex items-center justify-start z-10 w-14 translate-x-4">
        <button className=" relative z-10" onClick={() => swiper.slideNext()}>
          <FaAngleRight size={24} />
        </button>
      </div>
    </div>
  );
}
