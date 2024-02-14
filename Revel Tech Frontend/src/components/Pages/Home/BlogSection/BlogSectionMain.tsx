import BlogHeading from "./BlogHeading";
import BlogSlider from "./BlogSlider";

export default function BlogSectionMain() {
  return (
    <section id="blog">
      <div className="px-4 py-24 bg-[#F7F7F7] space-y-10">
        <BlogHeading />
        <BlogSlider />
      </div>
    </section>
  );
}
