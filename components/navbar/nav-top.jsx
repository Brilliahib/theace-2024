import Image from "next/image";
import { Button } from "../ui/button";
import logo from "/public/images/logo.png";
import { Phone } from "lucide-react";

const NavTop = () => {
  return (
    <>
      <div className="w-full bg-transparent pad-x py-1 md:hidden block backdrop-filter backdrop-blur-lg">
        <div className="flex justify-between items-center">
          <div className="flex flex-row items-center">
            {/* masupin gambar the ace */}
            <Image src={logo} alt="Logo" width={80} height={80} />
          </div>
          <div>
            <Button className="flex flex-row gap-2 rounded-md font-bold text-black">
              <Phone size={20} fill="#000000" stroke="#000000" />
              Contact
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavTop;
