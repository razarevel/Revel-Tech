import { useEffect } from "react";
import { useInView } from "react-hook-inview";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa6";
import { useSwiper } from "swiper/react";

export default function HeroSwiperBtn() {
  const swiper = useSwiper();
  const [ref, inView] = useInView();
  useEffect(() => {
    const intervalId = setInterval(() => {
      swiper.slideNext();
    }, 5000);
    return () => clearInterval(intervalId);
  }, [inView]);
  return (
    <div
      className="bg-black absolute  top-[50%] w-full flex items-center justify-between md:px-10 sm:px-4"
      ref={ref}
    >
      <button
        className="relative z-10 p-4 bg-white"
        onClick={() => swiper.slidePrev()}
      >
        <FaChevronLeft />
      </button>
      <button
        className="relative z-10 p-4 bg-white"
        onClick={() => swiper.slideNext()}
      >
        <FaChevronRight />
      </button>
    </div>
  );
}
