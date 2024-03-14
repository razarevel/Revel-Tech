
import logo from "../../../../../assets/logo.png";
import NavIcons from "./NavCom/NavIcons";
import NavSearchEngine from "./NavCom/NavSearchEngin";
export default function NavDesktop() {
  return (
    <nav
      className="hidden lg:block container max-w-7xl mx-auto py-16 px-4" 
    >
      {/* nav list */}
      <div className="flex items-center justify-between">
        {/* logo */}
        <div className="flex items-center justify-start space-x-4 ">
          <img src={logo} alt="" className="w-7" />
          <div>
            <h1 className="text-2xl font-semibold">R-Tech</h1>
            <p className="text-[0.7rem] font-medium opacity-80">
              The Online digital world
            </p>
          </div>
        </div>
        {/* search */}
        <NavSearchEngine />
        {/* icons */}
        <NavIcons />
      </div>
    </nav>
  );
}
