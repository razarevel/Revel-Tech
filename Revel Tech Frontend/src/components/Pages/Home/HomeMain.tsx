import FeatureMain from "./FeatureSection/FeatureMain";
import AboveSellCard from "./AboveSellCard/AboveSellCard";
import BlogSectionMain from "./BlogSection/BlogSectionMain";
import CompaninesMain from "./Companies/CompaniesMain";
import FooterMain from "./Footer/FooterMain";
import HdownCard from "./HdownCard/HdownCard";
import InfoSection from "./InfoSection/InfoSection";
import BestSellerMain from "./BestSellerSection/FeatureMain";
import BestOfferSection from "./BestOffer/BestOfferSection";
import HeroMainSecion from "./HeroMainSection/HeroMainSection";
import NavDesktop from "./Navbar/NavDesktop/NavDesk";
import NavMobile from "./Navbar/NavMobile/NavMobile";
import navZustand from "../../../NavZustand";
import HTopSection from "./HTopSection/HTopSection";
import SupDealSec from "./SuperDealSection/SupDealSec";

export default function HomeMain() {
  const { show, setShow } = navZustand();

  return (
    <section
      onClick={() => {
        if (show) setShow(false);
      }}
    >
      <NavMobile />
      <NavDesktop />
      <HTopSection />
      <HeroMainSecion />
      <HdownCard />
      <SupDealSec />
      <FeatureMain />
      <AboveSellCard />
      <BestSellerMain />
      <CompaninesMain />
      <BlogSectionMain />
      <BestOfferSection />
      <InfoSection />
      <FooterMain />
    </section>
  );
}
