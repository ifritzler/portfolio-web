"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isScrolled]);
  return (
    <nav
      className={`fixed z-50 top-0 left-0 right-0 transition duration-200 ${
        isScrolled ? "bg-[#f9f9f9] dark:bg-[#0B0B0B]" : ""
      }`}
    >
      <ul className="flex items-center justify-center gap-20 p-4 font-medium">
        <motion.li whileHover={{ scale: 1.1 }}>
          <Link
            href={"/"}
            className="flex items-center justify-center w-16 h-16 text-4xl font-bold text-white bg-black rounded-full dark:text-black dark:bg-white"
          >
            <span className="text-gradient">I</span>F
          </Link>
        </motion.li>
        <motion.li className="hidden" whileHover={{ scale: 1.1 }}>
          <Link href={"/"} className="hover:text-pink-700">
            Home page
          </Link>
        </motion.li>
        <motion.li className="hidden" whileHover={{ scale: 1.1 }}>
          <Link href={"/resume"} className="hover:text-pink-700">
            Resume
          </Link>
        </motion.li>
        <motion.li className="hidden" whileHover={{ scale: 1.1 }}>
          <Link href={"/contact"} className="hover:text-pink-700">
            Contact
          </Link>
        </motion.li>
      </ul>
    </nav>
  );
}

export default Navbar;
