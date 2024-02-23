interface Props {
  heading: string;
  btnHeading: string;
}
export default function SectionHeading({ heading, btnHeading }: Props) {
  return (
    <div className="container mx-auto max-w-7xl space-y-5 md:space-y-0">
      <div className=" flex items-center justify-between flex-col space-y-4 sm:flex-row sm:space-y-0">
        <h1 className="text-2xl font-medium sm:w-[300px] ">{heading}</h1>
        {/* button */}
        <div className="flex items-center justify-center w-full">
          <div className="border-t border-black w-full  opacity-5 hidden md:block"></div>
          <div className="flex items-center justify-center space-x-3 bg-white h-12 w-52 rounded-full group border shadow-sm hover:bg-black duration-300 cursor-pointer">
            <h1 className="font-semibold opacity-60 group-hover:opacity-100 group-hover:text-white duration-300">
              {btnHeading}
            </h1>
            <svg
              className="opacity-60 group-hover:opacity-100 group-hover:fill-white duration-300"
              fill="#000000"
              height="12px"
              width="12px"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 330 330"
            >
              <path
                id="XMLID_222_"
                d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001
	c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213
	C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606
	C255,161.018,253.42,157.202,250.606,154.389z"
              />
            </svg>
          </div>
        </div>
      </div>
      <p className="text-sm font-medium opacity-70 text-center sm:text-start">
        Real Activity Data from Chine Customs For Anyone
      </p>
    </div>
  );
}
