import axios from "axios";
import { useEffect, useState } from "react";
import useZustand from "../../../../Zustand";
interface Data {
  id: number;
  img: string;
  name: string;
}
export default function CategoiresCard() {
  const [data, setData] = useState<Data[]>([]);
  const {
    sellerCollection_id,
    setSellerCollection_id,
    setSellerCollection_name,
  } = useZustand();
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/best_seller/collection")
      .then((res) => setData(res.data));
  }, []);
  return (
    <div className="border rounded-xl md:w-[80%] lg:w-[40%] xl:w-[35%]">
      {data.map((el, index) => (
        <div
          className="relative"
          key={index}
          onClick={() => {
            setSellerCollection_id(el.id);
            setSellerCollection_name(el.name);
          }}
        >
          {sellerCollection_id === el.id && (
            <div className="absolute rotate-90 top-[40%] -right-[10px] bg-[#59EDFF] Feature-clip w-4 h-4 hidden md:block"></div>
          )}
          <div
            className={
              "flex items-center border-b px-6 py-4 space-x-5 cursor-pointer " +
              (sellerCollection_id === el.id &&
                " bg-gradient-to-r from-[#C16AF5] to-[#59EDFF] ") +
              (el.id === 1 && " rounded-t-lg ") +
              (el.id === 6 && " rounded-b-lg ")
            }
          >
            <img src={el.img} alt="" className="relative z-10 max-w-28" />
            <p
              className={
                "text-lg max-w-[150px] relative z-10" +
                (sellerCollection_id === el.id && " text-white")
              }
            >
              {el.name}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
