'use client'
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
    <nav className={`fixed z-50 top-0 left-0 right-0 transition duration-200 ${isScrolled ? "bg-[#f9f9f9] dark:bg-[#0B0B0B]" : ""}`} >
      <ul className="flex justify-center items-center p-4 gap-20 font-medium">
        <li>
          <div className="flex justify-center items-center text-white dark:text-black w-16 h-16 text-4xl font-bold bg-black dark:bg-white rounded-full">
            <span className="text-gradient">I</span>F
          </div>
        </li>
        <li>
          <Link href={"/"}>Home page</Link>
        </li>
        <li>
          <Link href={"/resume"}>Resume</Link>
        </li>
        <li>
          <Link href={"/contact"}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
