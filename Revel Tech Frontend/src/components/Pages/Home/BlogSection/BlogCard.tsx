import { LiaCommentDotsSolid } from "react-icons/lia";
interface Props {
  img: string;
  title: string;
  description: string;
  comments: number;
}
export default function BlogCard({ img, title, description, comments }: Props) {
  return (
    <div className="max-w-[450px] space-y-6">
      {/* img */}
      <div className="overflow-hidden rounded-lg">
        <img
          src={img}
          alt=""
          className="w-full hover:scale-105 duration-300 cursor-pointer"
        />
      </div>
      {/* body */}
      <div className="space-y-3">
        <div className="w-full flex items-center space-x-4">
          {/* bander */}
          <div
            className="bg-gradient-to-br from-[#AB86F7] from-15%  to-[#68D6FD] to-85% 
        rounded-full w-16 h-16 flex flex-col items-center justify-center overflow-hidden text-white"
          >
            <p className="">14</p>
            <div className="border-b w-5"></div>
            <p>Dec</p>
          </div>
          <p className="text-lg font-semibold cursor-pointer duration-300 hover:opacity-60">
            {title}
          </p>
        </div>
        <p className="text-sm font-medium opacity-70">{description}</p>
      </div>
      {/* footer */}
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium ">
          <span className="opacity-70">Posted by </span>
          <span className="">Revel</span>
        </p>
        <div className="flex items-center justify-center space-x-2">
          <LiaCommentDotsSolid size={20}/>
          <p className="opacity-70">{comments}</p>
        </div>
      </div>
    </div>
  );
}
