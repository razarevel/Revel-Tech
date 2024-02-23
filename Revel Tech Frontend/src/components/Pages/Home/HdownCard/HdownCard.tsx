import { MdKeyboardArrowRight } from "react-icons/md";
import img1 from "../../../../assets/h2_blogPNG/h2_blog1.png";
import img2 from "../../../../assets/h2_blogPNG/h2_blog2.png";
import img3 from "../../../../assets/h2_blogPNG/h2_blog3.png";
export default function HdownCard() {
  const context = [
    { img: img1, heading: "Studio 3", text: "Stay above the noise" },
    { img: img2, heading: "Four-sided curved", text: "Ceramic body" },
    { img: img3, heading: "Photography Drone", text: "Sale up to 30%" },
  ];
  return (
    <div className="container mx-auto  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 py-32">
      {context.map((el, index) => (
        <div
          key={index}
          className="flex items-center justify-between bg-gradient-to-r from-slate-100 to-white relative w-full h-[250px] rounded-xl"
        >
          <div className="px-10 space-y-3">
            <div>
              <p className="text-xl font-medium">{el.heading}</p>
              <p className="font-medium opacity-60">{el.text}</p>
            </div>
            <div className="flex items-center justify-start space-x-1.5 group cursor-pointer">
              <p className="text-red-500 text-[0.9rem] font-medium">Show now</p>
              <MdKeyboardArrowRight
                color={"#EF4444"}
                size={18}
                className="group-hover:translate-x-1 duration-300"
              />
            </div>
          </div>
          <img
            src={el.img}
            alt=""
            className={
              "absolute -top-[10%]   max-w-[100px] sm:max-w-[200px] md:max-w-[150px] lg:max-w-[150px] xl:max-w-[250px] " +
              (index == 2
                ? " scale-150 top-[-10px] sm:scale-100 md:scale-110 lg:scale-100 md:-top-[-10%]  lg:top-[-15%] -right-3 "
                : " md:top-[-15%] -right-2")
            }
          />
        </div>
      ))}
    </div>
  );
}
