import logo from "../../../../../assets/logo.png";
import { TfiLocationPin } from "react-icons/tfi";
import { LuPhone } from "react-icons/lu";
import { BsEnvelope } from "react-icons/bs";
import { CiClock2 } from "react-icons/ci";
import {
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagramSquare,
} from "react-icons/fa";
export default function FooterHeadSec1part1() {
  const sec1List = [
    {
      img: <TfiLocationPin size={18} />,
      context: "45 Grand Central Terminal New York,NY 1017 United State USA",
    },
    { img: <LuPhone size={18} />, context: "(+123) 456 789 - (+123) 666 888" },
    { img: <BsEnvelope size={18} />, context: "razarevel@gmail.com" },
    {
      img: <CiClock2 size={18} />,
      context: "Mon-Sat 9:00pm - 5:00pm     Sun : Closed",
    },
  ];
  const folloImages = [
    {
      img: <FaTwitter color="white" className="z-10 relative" />,
      link: "https://twitter.com/RazaRevel",
    },
    {
      img: <FaFacebookF color="white" className="z-10 relative" />,
      link: "https://www.facebook.com/profile.php?id=100093500498917",
    },
    {
      img: <FaLinkedinIn color="white" className="z-10 relative" />,
      link: "https://www.linkedin.com/in/raza-revel-4241a5276/",
    },
    {
      img: <FaInstagramSquare color="white" className="z-10 relative" />,
      link: "https://www.instagram.com/otakuraza/",
    },
  ];
  return (
    <>
      <div className="flex flex-col space-y-6">
        {/* img */}
        <div className="flex items-center justify-start space-x-4 ">
          <img src={logo} alt="" className="w-7" />
          <div>
            <h1 className="text-2xl font-semibold">R-Tech</h1>
            <p className="text-[0.7rem] font-medium opacity-80">
              The Online digital world
            </p>
          </div>
        </div>
        {/* list */}
        <div className="space-y-4">
          {sec1List.map((el, index) => (
            <div className="flex items-center space-x-4" key={index}>
              {el.img}
              <p className="max-w-[300px] text-sm font-semibold opacity-90">
                {el.context}
              </p>
            </div>
          ))}
        </div>
        {/* Follow */}
        <div className=" space-y-6">
          <h1 className="text-2xl font-medium">Follow us</h1>
          <div className="flex items-center space-x-3">
            {folloImages.map((el, index) => (
              <a href={el.link} target="_blank" key={index}>
                <div className="bg-black p-3 rounded-full relative overflow-hidden group">
                  {el.img}
                  <div className="absolute  w-full h-full rounded-full top-0 left-0 bg-gradient-to-br from-[#AB86F7] from-15%  to-[#68D6FD] to-85% opacity-0 group-hover:opacity-100 duration-300"></div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
