import { useState } from "react";
import { useSwiper } from "swiper/react";

export default function BlogPagination() {
  const swiper = useSwiper();
  const [select, setSelect] = useState(0);
  const btn = [3, 6, 9];
  return (
    <div className="w-full flex items-center justify-center mt-10">
      <div className="space-x-4 bg-white border px-4 py-1 rounded-full shadow-sm ">
        {btn.map((el, index) => (
          <button
            disabled={select === index}
            key={index}
            className={
              " rounded-full w-3 h-3 cursor-pointer " +
              (index === select ? "bg-black" : " bg-slate-200")
            }
            onClick={() => {
              swiper.slideTo(el);
              setSelect(index);
            }}
          ></button>
        ))}
      </div>
    </div>
  );
}
