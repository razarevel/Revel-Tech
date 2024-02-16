import AboveSellCard from "./AboveSellCard/AboveSellCard";
import BlogSectionMain from "./BlogSection/BlogSectionMain";
import CompaninesMain from "./Companies/CompaniesMain";
import FooterMain from "./Footer/FooterMain";
import InfoSection from "./InfoSection/InfoSection";
import TopSectionMain from "./TopSection/TopSectionMain";

export default function HomeMain() {
  return (
    <>
      <AboveSellCard />
      <CompaninesMain />
      <BlogSectionMain />
      <InfoSection />
      <FooterMain />
    </>
  );
}
