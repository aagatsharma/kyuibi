import Sidebar from "../Sidebar";
import NavbarContent from "./NavbarContent";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className=" fixed h-20 w-full border-b-[1px] bg-background">
      <div className=" max-w-7xl m-auto flex items-center justify-between h-full px-5">
        <Link className="font-bold" href={"/"}>
          LOGO
        </Link>
        <div className="flex gap-5">
          <NavbarContent />
          <Sidebar />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
