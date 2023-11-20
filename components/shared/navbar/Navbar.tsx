"use client";

import { motion } from "framer-motion";

import Sidebar from "../Sidebar";
import NavbarContent from "./NavbarContent";

const Navbar = () => {
  return (
    <nav className=" fixed h-20 w-full border-b-[1px] bg-background">
      <div className=" max-w-7xl m-auto flex items-center justify-between h-full px-5">
        <motion.span className="font-bold" drag>
          LOGO
        </motion.span>
        <div className="flex gap-5">
          <NavbarContent />
          <Sidebar />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
