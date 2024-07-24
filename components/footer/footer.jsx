import Image from "next/image";
import Link from "next/link";
import logo from "/public/images/logo.png";
import Tiktok from "@/public/icons/tiktok.svg";
import Instagram from "@/public/icons/instagram.svg";

const Footer = () => {
  return (
    <>
      <div className="w-full bg-secondary pad-x md:py-12 py-4">
        <div className="md:flex justify-between mb-24 md:space-y-0 space-y-8">
          <div>
            <div className="flex flex-col justify-start space-y-4">
              <Image
                src={logo}
                width={80}
                height={80}
                alt="The Ace 2024"
              ></Image>
              <p className="text-[#DCE2F1] max-w-xs">
                Jl. Prof. Soedarto, Tembalang, Kec. Tembalang, Kota Semarang,
                Jawa Tengah 50275
              </p>
            </div>
          </div>
          <div className="text-white">
            <div className="mb-4">
              <h1 className="text-primary font-bold text-md">Menu</h1>
            </div>
            <div className="flex flex-col space-y-2">
              <Link href="/">
                <p>Home</p>
              </Link>
              <Link href="/about">
                <p>About</p>
              </Link>
              <Link href="/contact">
                <p>Contact</p>
              </Link>
            </div>
          </div>
          <div className="text-white">
            <div className="mb-4">
              <h1 className="text-primary font-bold text-md">Competition</h1>
            </div>
            <div className="flex flex-col space-y-2">
              <Link href="/lomba/ui-ux">
                <p>UI/UX Design</p>
              </Link>
              <Link href="/lomba/capture-the-flag">
                <p>Capture The Flag</p>
              </Link>
              <Link href="/lomba/essay">
                <p>Essay</p>
              </Link>
            </div>
          </div>
          <div>
            <div className="mb-4">
              <h1 className="text-primary font-bold text-md">Social Media</h1>
            </div>
            <div className="flex flex-col space-y-2">
              <div className="flex gap-x-2">
                <div>
                  <Tiktok />
                </div>
                <div>
                  <Instagram />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center text-white">
          <div>
            <p>@ 2024 The Ace. All Rights Reserved </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
