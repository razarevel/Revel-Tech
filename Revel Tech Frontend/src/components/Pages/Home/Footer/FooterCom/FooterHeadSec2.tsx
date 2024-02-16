import FooterHeadSecForm from "./FooterHeadSec2Form";

export default function FooterHeadSec2() {
  const list = [
    { text: "My Account", link: "" },
    { text: "Track your Order", link: "" },
    { text: "Return/Exchange", link: "" },
    { text: "FAQs", link: "" },
    { text: "Customer Services", link: "" },
  ];
  return (
    <div className="flex flex-col space-y-10 md:flex-row md:items-start md:justify-between md:text-start md:space-y-0 md:space-x-10">
      <div className="space-y-10">
        <h1 className="text-xl font-medium xl:w-[200px]">Customer Services</h1>
        <div className="flex flex-col space-y-3">
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
      <div className="space-y-10">
        <h1 className="text-xl font-medium">Hot Line</h1>
        <div className="space-y-5">
          <p className="text-sm font-medium opacity-90">Call Us For Free</p>
          <p className="text-xl">(+123) 456 789 or (+123) 666 888</p>
        </div>
        {/* Sub */}
        <FooterHeadSecForm />
      </div>
    </div>
  );
}
