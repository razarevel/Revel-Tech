import axios from "axios";
import { useEffect, useState } from "react";
interface Data {
  id: number;
  name: string;
  img: string;
  price: number;
}
interface Product {
  heading: string;
  Data: Data[];
}
export default function BestOfferSection() {
  const [data, setData] = useState<Product[]>([]);
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/top_things/")
      .then((res) => setData(res.data));
  }, []);
  return (
    <div className="container max-w-7xl mx-auto px-4 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((el, index) => (
          <div key={index} className="space-y-14">
            {/* heading */}
            <div className="space-y-4">
              <p className="text-lg font-semibold">{el.heading}</p>
              <div className="w-full border"></div>
            </div>
            {/* lists */}
            <div className="space-y-12">
              {el.Data.map((el, index) => (
                <div
                  key={index}
                  className="flex space-x-6 cursor-pointer group"
                >
                  {/* img */}
                  <div className="p-[1px] bg-gray-200 group-hover:bg-gradient-to-r from-[#C16AF5] to-[#59EDFF]">
                    <div className="p-2 w-20 h-20 flex items-center justify-center bg-white">
                      <img src={el.img} alt="" />
                    </div>
                  </div>
                  <div>
                    <p className="font-medium">{el.name}</p>
                    <p className="font-medium opacity-70">${el.price}.00</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
