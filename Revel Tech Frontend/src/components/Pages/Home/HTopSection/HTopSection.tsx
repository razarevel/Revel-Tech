export default function HTopSection() {
  const list1 = [
    { id: 1, text: "Home" },
    { id: 2, text: "TV & Video" },
    { id: 3, text: "Home Audio & Theater" },
    { id: 4, text: "Camera, Photo & VideoCell" },
    { id: 5, text: "Phone & Accessories" },
  ];
  const list2 = [
    { id: 1, text: "Flash Details" },
    { id: 2, text: "Tech Discovery" },
    { id: 3, text: "Trending Style" },
    { id: 4, text: "Gift Cards" },
  ];
  return (
    <div className="items-center hidden md:flex space-x-4">
      {/* list 1 */}
      <div className="max-w-[60%] w-full flex border-t divide-x-2 items-center justify-center space-x-4">
        {list1.map((el) => (
          <div key={el.id} className="relative px-2 py-4 ">
            {el.id === 3 && (
              <div className="absolute bg-[#55D1E3] text-white px-3 py-0.5 rounded-full text-xs font-medium right-2 -top-2">
                <p>SALE</p>
                <div className="Feature-clip w-3 h-1.5 bg-[#55D1E3] absolute rotate-180 left-2 -bottom-1"></div>
              </div>
            )}
            {el.id === 4 && (
              <div className="absolute bg-[#FF5050] text-white px-3 py-0.5 rounded-full text-xs font-medium right-2 -top-2">
                <p>HOT</p>
              </div>
            )}
            <p className="font-medium text-sm">{el.text}</p>
          </div>
        ))}
      </div>
      {/* list 2 */}
      <div className="flex  bg-gradient-to-r from-[#BF6CF5] to-[#5DE7FE] max-w-[40%] w-full h-14 items-center nav-top-clip space-x-6 pl-20 ">
        {list2.map((el) => (
          <div className="text-white font-medium text-sm relative">
            {el.id === 2 && (
              <div className="absolute bg-[#42E9A8] text-white px-3 py-0.5 rounded-full text-xs font-medium right-0 -top-5">
                <p>New</p>
                <div className="Feature-clip w-3 h-1.5 bg-[#42E9A8] absolute rotate-180 left-2 -bottom-1"></div>
              </div>
            )}
            <p>{el.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
