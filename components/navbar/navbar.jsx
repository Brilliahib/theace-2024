'use client'
import { Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import logo from "/public/images/logo.png";
import { Button } from "../ui/button";

function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="pad-x py-8 fixed top-0 left-0 right-0 z-10 md:block hidden">
      <div className="bg-transparent flex flex-row items-center justify-between px-4 py-2 rounded-xl border-t-2 border-8 border-primary backdrop-filter backdrop-blur-lg">
        <div className="flex flex-row items-center">
          <Image src={logo} alt="Logo" width={80} height={80} />
          <p className="text-white text-xl font-semibold ml-2">The ACE</p>
        </div>
        <ul className="flex flex-row items-center gap-10 text-base font-semibold">
          <li>
            <Link
              href="/"
              className={`${pathname === "/" ? "text-primary underline" : "text-[#DCE2F1] hover:text-primary hover:underline"
                }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/lomba"
              className={`${pathname.startsWith("/lomba") ? "text-primary underline" : "text-[#DCE2F1] hover:text-primary hover:underline"
                }`}
            >
              Lomba
            </Link>
          </li>
          <li>
            <Link
              href="/seminar"
              className={`${pathname === "/seminar" ? "text-primary underline" : "text-[#DCE2F1] hover:text-primary hover:underline"
                }`}
            >
              Seminar
            </Link>
          </li>
          <Link href="/contact">
            <Button
              className={`flex flex-row gap-2 rounded-md font-bold ${pathname === "/contact" ? "text-primary" : "text-black"
                }`}
            >
              <Phone size={20} fill="#000000" stroke="#000000" />
              Contact
            </Button>
          </Link>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
