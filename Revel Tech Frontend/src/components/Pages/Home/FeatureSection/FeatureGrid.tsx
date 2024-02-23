import CategoiresCard from "./CategoiresCard";
import ProductGrid from "./ProductGrids";

export default function FeatureGrid() {
  return (
    <div className="container mx-auto max-w-7xl flex flex-col items-center justify-center space-y-10 md:flex-row md:justify-start md:items-start md:space-y-0 md:space-x-10 ">
      <CategoiresCard />
      <ProductGrid />
    </div>
  );
}
