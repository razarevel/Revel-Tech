import axios from "axios";
import { useEffect, useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
interface Data {
  id: number;
  img: string;
  name: string;
  price: string;
  collection: number;
}
export default function AboveSellCard() {
  const [data1, setData1] = useState<Data>();
  const [data2, setData2] = useState<Data>();

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/features_product/product/32")
      .then((res) => setData1(res.data));
  }, []);
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/features_product/product/43")
      .then((res) => setData2(res.data));
  }, []);
  const data = [data1, data2];
  return (
    <div className="container max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4 mt-16">
      {data.map((el, index) => (
        <div
          key={index}
          className="bg-gray-200 p-6 w-full grid grid-cols-2 max-h-[350px] rounded-2xl"
        >
          <div className="space-y-4">
            <h1 className="text-2xl font-semibold">
              Make the noise music in pro
            </h1>
            <div className="flex items-end justify-start space-x-1">
              <p className="font-medium opacity-70">From</p>{" "}
              <p className="text-3xl font-medium text-red-500">
                {el?.price}.99
              </p>
              <p className="text-red-500 -translate-y-3 font-medium">$</p>
            </div>
            <div className="flex items-center justify-start space-x-1.5 group cursor-pointer">
              <p className="text-red-500 text-sm font-medium">Show now</p>
              <MdKeyboardArrowRight
                color={"#EF4444"}
                size={18}
                className="group-hover:translate-x-1 duration-300"
              />
            </div>
          </div>
          <img src={el?.img} alt="" className="" />
        </div>
      ))}
    </div>
  );
}
