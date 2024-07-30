"use client";
import { useState, useEffect } from "react";
import { Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "/public/images/logo.png";
import { Button } from "../ui/button";
import { NavigationMenuDemo } from "./nav-menu";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === "/") {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 0);
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [pathname]);

  // kalo di slash lain jadi ga berlaku si scroll-scroll ini
  const getBackgroundColor = () => {
    if (pathname === "/") {
      return isScrolled ? "bg-[#241246]/80" : "bg-transparent";
    }
    return "bg-[#241246]/80";
  };

  return (
    <nav
      className={`${getBackgroundColor()} pad-x py-3 backdrop-blur fixed top-0 left-0 right-0 z-10 md:inline hidden transition-colors duration-300`}
    >
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row items-center">
          <Image src={logo} alt="Logo" width={80} height={80} />
          {/* <p className="text-white text-xl font-semibold ml-2">The ACE</p> */}
        </div>
        <NavigationMenuDemo />
        <div>
          <Link href="/contact">
            <Button
              variant="outline"
              className="border p-5 flex font-semibold text-primary bg-[#241246] rounded-full hover:bg-primary hover:text-secondary"
            >
              Contact
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
