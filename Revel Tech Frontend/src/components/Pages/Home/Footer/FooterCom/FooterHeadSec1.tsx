import FooterHeadSec1part1 from "./FooterHeadSec1pt1";
import FooterHeadSec1pt2 from "./FooterHeadSec1pt2";

export default function FooterHeadSec1() {
  return (
    <div className="grid grid-col-1 md:grid-cols-2 gap-8">
      {/* Section 1 */}
      <FooterHeadSec1part1 />
      {/* Section 2 */}
      <FooterHeadSec1pt2 />
    </div>
  );
}
