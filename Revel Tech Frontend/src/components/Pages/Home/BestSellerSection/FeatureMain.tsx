import SectionHeading from "../../resusable/SectionHeading";
import SellerGrid from "./SellerGrid";

export default function BestSellerMain() {
  return (
    <section id="feature">
      <div className="py-14 space-y-14 px-4">
        <SectionHeading heading="Best Seller" btnHeading="Shop more" />
        <SellerGrid />
      </div>
    </section>
  );
}
