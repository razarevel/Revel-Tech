import BlogSectionMain from "./BlogSection/BlogSectionMain";
import CompaninesMain from "./Companies/CompaniesMain";
import InfoSection from "./InfoSection/InfoSection";
import TopSectionMain from "./TopSection/TopSectionMain";

export default function HomeMain() {
  return (
    <>
      <CompaninesMain />
      <BlogSectionMain />
      <InfoSection />
    </>
  );
}
