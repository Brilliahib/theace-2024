"use client";
import { Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import logo from "/public/images/logo.png";
import { Button } from "../ui/button";
import { NavigationMenuDemo } from "./nav-menu";

function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="bg-[#241246] pad-x py-3 fixed top-0 left-0 right-0 z-10 md:inline hidden">
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row items-center">
          <Image src={logo} alt="Logo" width={80} height={80} />
          <p className="text-white text-xl font-semibold ml-2">The ACE</p>
        </div>
        <NavigationMenuDemo />
        <div>
          <Link href="/contact">
            <Button
              className="flex flex-row gap-2 rounded-md font-bold text-primary"
              variant="outline"
            >
              <Phone size={20} className="text-primary" />
              Contact
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
