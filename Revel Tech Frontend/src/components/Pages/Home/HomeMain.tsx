import FeatureMain from "./FeatureSection/FeatureMain";
import AboveSellCard from "./AboveSellCard/AboveSellCard";
import BlogSectionMain from "./BlogSection/BlogSectionMain";
import CompaninesMain from "./Companies/CompaniesMain";
import FooterMain from "./Footer/FooterMain";
import HdownCard from "./HdownCard/HdownCard";
import InfoSection from "./InfoSection/InfoSection";
import TopSectionMain from "./TopSection/TopSectionMain";
import BestSellerMain from "./BestSellerSection/FeatureMain";

export default function HomeMain() {
  return (
    <>
      <HdownCard />
      <FeatureMain />
      <AboveSellCard />
      <BestSellerMain />
      <CompaninesMain />
      <BlogSectionMain />
      <InfoSection />
      <FooterMain />
    </>
  );
}
