import Image from "next/image";
import Link from "next/link";
import logo from "/public/images/logo.png";

const Footer = () => {
  return (
    <>
      <div className="w-full bg-[#182159] pad-x md:py-12 py-4">
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
              <Link href="/contact">
                <p>Contact</p>
              </Link>
            </div>
          </div>
          <div className="text-white">
            <div className="mb-4">
              <h1 className="text-primary font-bold text-md">Event</h1>
            </div>
            <div className="flex flex-col space-y-2">
              <Link href="/about">
                <p>The Ace</p>
              </Link>
              <Link href="/lomba">
                <p>Lomba</p>
              </Link>
              <Link href="/seminar">
                <p>Seminar</p>
              </Link>
            </div>
          </div>
          <div>
            <div className="mb-4">
              <h1 className="text-primary font-bold text-md">Location</h1>
            </div>
            <div className="flex justify-center">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7919.2724300868185!2d110.43288020627327!3d-7.051962499999993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708c02787187c9%3A0x29bcf60b2c20aec!2sDiponegoro%20University!5e0!3m2!1sen!2sid!4v1720497604853!5m2!1sen!2sid"
                class="w-full h-64 border-0"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center text-white">
          <div>
            <p className="font-semibold">The ACE, All Rights Reserved @ 2024</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
