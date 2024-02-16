import img1 from "../../../../assets/Footer/american-express.png";
import img2 from "../../../../assets/Footer/jcb.png";
import img3 from "../../../../assets/Footer/mastercard.png";
import img4 from "../../../../assets/Footer/paypal.png";
import img5 from "../../../../assets/Footer/visa.png";
import img6 from "../../../../assets/Footer/western-union.png";

export default function FooterBody() {
  const imgs = [img1, img2, img3, img4, img5, img6];
  return (
    <div className="bg-[#272727] px-4 py-10 text-white">
      <div className="container mx-auto max-w-7xl flex flex-col items-center justify-center space-y-10 md:flex-row md:justify-between md:space-y-0">
        <p className="opacity-20 text-sm ">
          © 2013-2024 Revel. All rights reserved.
        </p>
        <div className="grid grid-cols-3 gap-8 sm:grid-cols-4 md:grid-cols-6 md:gap-4 lg:gap-8">
          {imgs.map((el, index) => (
            <img src={el} alt="" key={index} className="w-12 cursor-pointer" />
          ))}
        </div>
      </div>
    </div>
  );
}
