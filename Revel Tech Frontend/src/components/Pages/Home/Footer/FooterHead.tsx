import FooterHeadSec1 from "./FooterCom/FooterHeadSec1";
import FooterHeadSec2 from "./FooterCom/FooterHeadSec2";

export default function FooterHead() {
  return (
    <div className="container mx-auto max-w-7xl py-14 px-4 flex flex-col space-y-10 lg:flex-row lg:space-y-0">
      <FooterHeadSec1 />
      <FooterHeadSec2 />
    </div>
  );
}
