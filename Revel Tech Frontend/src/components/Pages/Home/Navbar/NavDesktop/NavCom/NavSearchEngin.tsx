import axios from "axios";
import { useEffect, useState } from "react";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import navZustand from "../../../../../../NavZustand";
interface Data {
  id: number;
  name: string;
}
export default function NavSearchEngine() {
  const [list, setList] = useState<Data[]>([]);
  const [selected, setSelected] = useState("");
  const { show, setShow } = navZustand();
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/features_product/collection")
      .then((res) => setList(res.data));
  }, []);
  return (
    <div className="flex items-center justify-between border-2 rounded-full max-w-3xl w-full relative">
      <div className="px-6 py-3 w-[40%]" onClick={() => setShow(!show)}>
        <input
          type="text"
          placeholder="I'm shopping for.."
          className="focus:outline-none w-full"
        />
      </div>
      <div className="flex items-center justify-between space-x-5">
        <div className="w-0.5 h-12 bg-black opacity-10"></div>
        <div className="flex items-center justify-between">
          {/* categories */}
          <div
            className="flex items-center justify-center space-x-3 cursor-pointer group"
            onClick={() => setShow(!show)}
          >
            <p className="opacity-50 font-medium text-[0.9rem] group-hover:opacity-100 duration-300">
              {selected !== "" ? selected : "All categroies"}
            </p>
            <div
              className={
                "duration-300 cursor-pointer " +
                (!show ? "-rotate-90" : "rotate-90")
              }
            >
              <FaCaretLeft />
            </div>
          </div>
          {/* Search btn */}
        </div>
      </div>
      <div
        className="bg-[#333333] rounded-full p-3"
        onClick={() => setShow(!show)}
      >
        <IoMdSearch color="white" size={23} />
      </div>
      {/* list */}
      {show && (
        <div className="absolute flex flex-col  bg-white rounded-md nav-shadow right-10 top-[140%] z-20 space-y-4 px-4 py-5 pr-14">
          <div className="Feature-clip bg-white w-16 h-10 absolute right-10 -top-2.5"></div>
          {list.map((el) => (
            <div
              onClick={() => {
                setShow(!show);
                if (selected === el.name) return setSelected("");
                setSelected(el.name);
              }}
              key={el.id}
              className="flex items-center space-x-3 text-sm font-medium opacity-70 hover:opacity-100 cursor-pointer"
            >
              <FaCaretRight />
              <p>{el.name}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
