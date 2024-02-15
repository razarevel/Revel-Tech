import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import img1 from "../../../../assets/Companies/brandlogo1.png";
import img2 from "../../../../assets/Companies/brandlogo2.png";
import img3 from "../../../../assets/Companies/brandlogo3.png";
import img4 from "../../../../assets/Companies/brandlogo4.png";
import img5 from "../../../../assets/Companies/brandlogo5.png";
import img6 from "../../../../assets/Companies/brandlogo6.png";
import ComSliderBtn from "./ComSliderbtn";
import { useEffect, useState } from "react";
export default function CompaninesMain() {
  const images = [img1, img2, img3, img4, img5, img6, img2, img1];
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const sliderPerView = (w: number) => {
    if (w <= 620) return 2;
    if (w >= 620 && w <= 768) return 3;
    if (w >= 780 && w <= 1020) return 4;
    return 5;
  };
  return (
    <div className="py-32 px-4 container mx-auto max-w-7xl relative overflow-hidden">
      <Swiper
        spaceBetween={1}
        slidesPerView={sliderPerView(windowWidth)}
        loop={true}
        className="swiper-container"
      >
        {images.map((el, index) => (
          <SwiperSlide key={index}>
            <img
              src={el}
              alt=""
              className="opacity-50 cursor-pointer hover:opacity-100 duration-300"
            />
          </SwiperSlide>
        ))}
        <ComSliderBtn />
      </Swiper>
    </div>
  );
}
