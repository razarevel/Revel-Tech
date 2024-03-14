import { FaRegHeart } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";

export default function NavIcons() {
  return (
    <div className="flex items-center justify-center space-x-8">
      <div className="cursor-pointer">
        <img
          className="w-8 h-8"
          src="https://img.icons8.com/parakeet-line/48/user.png"
          alt="user"
        />
      </div>
      <div className="cursor-pointer">
        <FaRegHeart size={28} />
      </div>
      <div className="cursor-pointer relative">
        <div className="bg-red-500 flex items-center justify-center rounded-full w-6 h-6 text-white text-sm absolute -right-[1.50rem] -top-3">
          <p>0</p>
        </div>
        <LuShoppingCart size={28} />
      </div>
    </div>
  );
}
