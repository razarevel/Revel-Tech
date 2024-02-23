import { useEffect, useState } from "react";
import useZustand from "../../../../Zustand";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { IoMdShare } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import axios from "axios";
interface Data {
  id: number;
  img: string;
  name: string;
  price: string;
  discount: boolean;
}
export default function ProductGrid() {
  const { sellerCollection_id, sellerCollection_name } = useZustand();
  const [data, setData] = useState<Data[]>([]);
  const [like, setlike] = useState(false);
  useEffect(() => {
    axios
      .get(
        `http://127.0.0.1:8000/api/best_seller/collection/${sellerCollection_id}?limit=6`
      )
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, [sellerCollection_id]);
  const [key, setKey] = useState(0);
  useEffect(() => {
    setKey(key + 1);
  }, [like]);
  const idInLocal = (id: number) => {
    if (localStorage.getItem("likeItem")) {
      // visited
      const storedLikeItem = localStorage.getItem("likeItem");
      let likeItemArray = storedLikeItem ? JSON.parse(storedLikeItem) : [];
      const index = likeItemArray.indexOf(id);
      if (index !== -1) {
        likeItemArray.splice(index, 1);
      } else {
        likeItemArray.push(id);
      }
      localStorage.setItem("likeItem", JSON.stringify(likeItemArray));
    } else {
      // first visit
      const likeItem = [id];
      localStorage.setItem("likeItem", JSON.stringify(likeItem));
    }
  };
  const checkId = (id: number): boolean => {
    const storedLikeItem = localStorage.getItem("likeItem");
    const likeItemArray = storedLikeItem ? JSON.parse(storedLikeItem) : [];

    // Check if the id exists in the array
    return likeItemArray.includes(id);
  };
  return (
    <div
      className="grid gird-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-12 w-full"
      key={key}
    >
      {data.map((el, index) => (
        <div
          className="flex flex-col border rounded-lg hover:rounded-b-none w-full  py-4 relative space-y-4 group duration-300 hover:shadow-lg"
          key={index}
        >
          {el.discount && (
            <div className="absolute bg-red-500 text-white w-14 h-14 flex items-center justify-center rounded-full right-[5%]">
              -30%
            </div>
          )}
          {/* image */}
          <div className="w-full h-[300px] flex items-center justify-center">
            <img src={el.img} alt="" className="w-22 max-h-40" />
          </div>
          {/* heading */}
          <div className="space-y-1 px-4">
            <p className="text-sm opacity-60 font-medium">
              {sellerCollection_name}
            </p>
            <p className="text-[0.93rem] font-medium">{el.name}</p>
            <div className="flex items-center">
              <p
                className={
                  "text-lg font-medium opacity-80 " +
                  (el.discount && "text-red-500")
                }
              >
                ${el.price}.00
              </p>
            </div>
          </div>
          {/* buy card */}
          <div className="flex items-center justify-between px-4 select-none border py-3 absolute w-[101%] -left-[1px] bottom-[-8%] lg:bottom-[-5%] group-hover:-bottom-[8%] rounded-b-lg  bg-white lg:opacity-0 group-hover:opacity-100 duration-300">
            <div className="group/cart">
              <FiShoppingCart
                className="group-hover/cart:opacity-100 opacity-50 duration-300 cursor-pointer"
                size={20}
              />
            </div>
            <div
              className="group/heart"
              onClick={() => {
                setlike(!like);
                idInLocal(el.id);
              }}
            >
              {checkId(el.id) ? (
                <FaHeart
                  color="red"
                  size={20}
                  className="group-hover/heart:opacity-100 opacity-50 duration-300 cursor-pointer"
                />
              ) : (
                <FaRegHeart
                  size={20}
                  className="group-hover/heart:opacity-100 opacity-50 duration-300 cursor-pointer"
                />
              )}
            </div>
            <div className="group/share">
              <IoMdShare
                size={20}
                className="group-hover/share:opacity-100 opacity-50 duration-300 cursor-pointer"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
