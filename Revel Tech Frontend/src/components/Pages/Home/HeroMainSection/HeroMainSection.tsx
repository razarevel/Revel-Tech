import img1 from "../../../../assets/heroPNG/h2_s1.jpg";
import img2 from "../../../../assets/heroPNG/h2_s2.jpg";
import img3 from "../../../../assets/heroPNG/h2_s3.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import HeroSwiperBtn from "./heroSwiperbtn";

export default function HeroMainSecion() {
  const context = [
    { heading: "SMART PHONE X", img: img1 },
    { heading: "Galaxy s9 plus", img: img2 },
    { heading: "Beoplay super bass", img: img3 },
  ];
  return (
    <div className="relative flex items-center justify-center">
      <Swiper slidesPerView={1} loop={true}>
        {context.map((el, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-full bg-cover text-center lg:text-start lg:h-[700px] flex flex-col items-center justify-center"
              style={{ backgroundImage: `url("${el.img}")` }}
            >
              <div className="container max-w-7xl mx-auto py-32 space-y-10">
                <p className="font-medium opacity-70">{el.heading}</p>
                <div>
                  <p className="text-5xl ">Say hello to the future</p>
                  <p className="text-2xl opacity-70">Sales up to 60% off</p>
                </div>
                <button className="px-10 py-2 bg-gradient-to-r from-[#F95775] to-[#F7C1B2] rounded-full text-white hero-shadow duration-300">
                  Shop now
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <HeroSwiperBtn />
      </Swiper>
    </div>
  );
}
