import { Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "/public/images/logo.png";
import { Button } from "../ui/button";

function Navbar() {
  return (
    <nav className="bg-[#0E1333] py-4 px-16 sticky top-0 md:block hidden">
      <div className=" flex flex-row items-center justify-between px-4 rounded-xl border-4 border-primary">
        <div className="flex flex-row items-center">
          {/* masupin gambar the ace */}
          <Image src={logo} alt="Logo" width={80} height={80} />
          {/* title event */}
          <p className="text-white text-xl font-semibold">The ACE</p>
        </div>
        <ul className="flex flex-row items-center gap-10 text-base">
          <li>
            <Link
              href="/"
              className="text-[#DCE2F1] hover:text-primary hover:underline"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/lomba"
              className="text-[#DCE2F1] hover:text-primary hover:underline"
            >
              Lomba
            </Link>
          </li>
          <li>
            <Link
              href="/seminar"
              className="text-[#DCE2F1] hover:text-primary hover:underline"
            >
              Seminar
            </Link>
          </li>
          <Button className="flex flex-row gap-2 rounded-md font-bold text-black">
            <Phone size={20} fill="#000000" stroke="#000000" />
            Contact
          </Button>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
