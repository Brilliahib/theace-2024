import Image from "next/image";
import { Button } from "../ui/button";
import logo from "/public/images/logo.png";
import { Phone } from "lucide-react";

const NavTop = () => {
  return (
    <>
      <div className="w-full sticky top-0 bg-secondary pad-x py-3 md:hidden block backdrop-filter backdrop-blur-lg z-50">
        <div className="flex justify-between items-center">
          <div className="flex flex-row items-center">
            {/* masupin gambar the ace */}
            <Image src={logo} alt="Logo" width={80} height={80} />
          </div>
          <div>
            <Button
              variant="outline"
              className="border p-5 flex text-primary bg-secondary rounded-full"
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
