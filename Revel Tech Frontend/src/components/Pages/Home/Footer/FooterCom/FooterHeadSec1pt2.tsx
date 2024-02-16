export default function FooterHeadSec1pt2() {
  const list = [
    { text: "TV & Video", link: "" },
    { text: "Home Audio & Theater", link: "" },
    { text: "Camera, Photo & Video", link: "" },
    { text: "Cell Phones & Accessories", link: "" },
    { text: "Headphones", link: "" },
    { text: "Video Games", link: "" },
    { text: "Bluetooth & Wireless Speakers", link: "" },
    { text: "Smart Watches", link: "" },
  ];
  return (
    <div className="space-y-10">
      <h1 className="text-xl font-medium">Quick memu</h1>
      <div className="flex flex-col space-y-2">
        {list.map((el, index) => (
          <a
            href={el.link}
            key={index}
            className="text-sm font-medium opacity-90 hover:text-red-500 duration-300"
          >
            {el.text}
          </a>
        ))}
      </div>
    </div>
  );
}
