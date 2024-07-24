"use client";
import Image from "next/image";
import { Button } from "../ui/button";
import logo from "/public/images/logo.png";
import { usePathname } from "next/navigation";

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
            <Button
              variant="outline"
              className={`${getBackgroundContact()} border p-5 flex text-primary rounded-full`}
            >
              Contact
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavTop;
