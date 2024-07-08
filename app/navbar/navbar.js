import { Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "/public/images/logo.png";

function Navbar() {
  return (
    <nav className="bg-[#0E1333] py-4 px-16">
      <div className=" flex flex-row items-center justify-between px-4 rounded-xl border-8 border-t-4 border-[#FFA62D]">
        <div className="flex flex-row items-center">
          {/* masupin gambar the ace */}
          <Image src={logo} alt="Logo" width={100} height={100} />
          {/* title event */}
          <p className="text-white text-xl font-semibold">THE ACE</p>
        </div>
        <ul className="flex flex-row items-center gap-10">
          <li>
            <Link
              href="/"
              className="text-[#DCE2F1] hover:text-[#FFA62D] hover:underline"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/Lomba"
              className="text-[#DCE2F1] hover:text-[#FFA62D] hover:underline"
            >
              Lomba
            </Link>
          </li>
          <li>
            <Link
              href="/Seminar"
              className="text-[#DCE2F1] hover:text-[#FFA62D] hover:underline"
            >
              Seminar
            </Link>
          </li>
          <button className="flex flex-row gap-2 bg-[#FFA62D] p-2 rounded-md font-semibold text-black">
            <Phone size={20} fill="#000000" stroke="#000000" />
            Contact
          </button>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
