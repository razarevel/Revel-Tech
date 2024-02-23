import SectionHeading from "../../resusable/SectionHeading";
import BlogSlider from "./BlogSlider";

export default function BlogSectionMain() {
  return (
    <section id="blog">
      <div className="px-4 py-24 bg-[#F7F7F7] space-y-10">
        <SectionHeading heading="From Our Blog" btnHeading="View more" />
        <BlogSlider />
      </div>
    </section>
  );
}
