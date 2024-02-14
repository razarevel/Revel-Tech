import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SwiperNavButton from "./SwiperNavButton";
import BlogPagination from "./BlogPagination";
import { useEffect, useState } from "react";
import axios from "axios";
import BlogCard from "./BlogCard";
interface Blogs {
  id: number;
  img: string;
  title: string;
  description: string;
  comments: number;
}

export default function BlogSlider() {
  const [data, setData] = useState<Blogs[]>([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/blogs")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);
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
    if (w <= 620) return 1;
    if (w >= 620 && w <= 1024) return 2;
    return 3;
  };
  return (
    <div className="container mx-auto w-full h-full relative px-6 overflow-hidden ">
      <Swiper
        spaceBetween={30}
        slidesPerView={sliderPerView(windowWidth)}
        loop={true}
        modules={[Navigation, Pagination]}
        className="swiper-container"
      >
        {data.map((el, index) => (
          <SwiperSlide>
            <BlogCard
              key={index}
              img={el.img}
              title={el.title}
              description={el.description}
              comments={el.comments}
            />
          </SwiperSlide>
        ))}
        <SwiperNavButton />
        <BlogPagination />
      </Swiper>
    </div>
  );
}
