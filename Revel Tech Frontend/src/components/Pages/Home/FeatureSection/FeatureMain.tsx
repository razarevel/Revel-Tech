import SectionHeading from "../../resusable/SectionHeading";
import FeatureGrid from "./FeatureGrid";

export default function FeatureMain() {
  return (
    <section id="feature">
      <div className="py-14 space-y-14 px-4">
        <SectionHeading heading="Featured Products" btnHeading="Shop more" />
        <FeatureGrid />
      </div>
    </section>
  );
}
