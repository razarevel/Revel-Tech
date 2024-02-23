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
    productCollection_id,
    setproductCollection_id,
    setproductCollection_name,
  } = useZustand();
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/features_product/collection")
      .then((res) => setData(res.data));
  }, []);
  return (
    <div className="border rounded-xl md:w-[80%] lg:w-[40%] xl:w-[35%]">
      {data.map((el, index) => (
        <div
          className="relative"
          key={index}
          onClick={() => {
            setproductCollection_id(el.id);
            setproductCollection_name(el.name);
          }}
        >
          {productCollection_id === el.id && (
            <div className="absolute rotate-90 top-[40%] -right-[10px] bg-[#59EDFF] Feature-clip w-4 h-4 hidden md:block"></div>
          )}
          <div
            className={
              "flex items-center border-b px-6 py-4 space-x-5 cursor-pointer " +
              (productCollection_id === el.id &&
                " bg-gradient-to-r from-[#C16AF5] to-[#59EDFF] ") +
              (el.id === 1 && " rounded-t-lg ") +
              (el.id === 6 && " rounded-b-lg ")
            }
          >
            <img src={el.img} alt="" className="relative z-10" />
            <p
              className={
                "text-lg max-w-[150px] relative z-10" +
                (productCollection_id === el.id && " text-white")
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
