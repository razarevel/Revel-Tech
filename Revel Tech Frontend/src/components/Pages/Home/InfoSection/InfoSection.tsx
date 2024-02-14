import InfoContext from "./InfoContext";

export default function InfoSection() {
  return (
    <div className="bg-[#DCB47E] text-white">
      <div className="container max-w-7xl mx-auto flex flex-col items-center justify-center space-y-10 md:space-y-0 md:grid  md:grid-cols-2 lg:grid-cols-4 gap-10 py-14 px-4">
        {InfoContext.map((el, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center text-center max-w-[300px]"
          >
            <img src={el.img} alt="" />
            <h1 className="text-lg font-medium">{el.title}</h1>
            <p className="font-medium text-sm">{el.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
