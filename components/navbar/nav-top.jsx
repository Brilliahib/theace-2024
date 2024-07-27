"use client";
import Image from "next/image";
import { Button } from "../ui/button";
import logo from "/public/images/logo.png";
import { usePathname } from "next/navigation";
import Link from "next/link";

const NavTop = () => {
  const pathname = usePathname();
  const getBackgroundColor = () => {
    if (pathname === "/") {
      return "bg-transparent";
    }
  };

  const getBackgroundContact = () => {
    if (pathname === "/") {
      return "bg-[#241246]";
    } else {
      return "bg-secondary";
    }
  };
  return (
    <>
      <div
        className={`${getBackgroundColor()} w-full bg-secondary pad-x py-3 md:hidden block backdrop-filter backdrop-blur-lg z-50`}
      >
        <div className="flex justify-between items-center">
          <div className="flex flex-row items-center">
            {/* masupin gambar the ace */}
            <Image src={logo} alt="Logo" width={80} height={80} />
          </div>
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
      </div>
    </>
  );
};

export default NavTop;
