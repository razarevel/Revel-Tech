import FeatureMain from "./FeatureSection/FeatureMain";
import AboveSellCard from "./AboveSellCard/AboveSellCard";
import BlogSectionMain from "./BlogSection/BlogSectionMain";
import CompaninesMain from "./Companies/CompaniesMain";
import FooterMain from "./Footer/FooterMain";
import HdownCard from "./HdownCard/HdownCard";
import InfoSection from "./InfoSection/InfoSection";
import BestSellerMain from "./BestSellerSection/FeatureMain";
import BestOfferSection from "./BestOffer/BestOfferSection";


export default function HomeMain() {
  return (
    <>
      <HdownCard />
      <FeatureMain />
      <AboveSellCard />
      <BestSellerMain />
      <CompaninesMain />
      <BlogSectionMain />
      <BestOfferSection />
      <InfoSection />
      <FooterMain />
    </>
  );
}
