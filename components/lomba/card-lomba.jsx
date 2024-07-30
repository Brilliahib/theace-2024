import { SquareArrowOutUpRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const CardLombaHomePage = () => {
  const caption = [
    {
      title: "UI/UX Design",
      information:
        "Desain antarmuka aplikasi mobile yang inovatif dan ramah pengguna dengan tema yang ditentukan. Tingkat pelajar SMA/SMK/Sederajat dan mahasiswa D3/D4/S1 se-Indonesia.",
      href: "/lomba/ui-ux",
    },
    {
      title: "Essay",
      information:
        "Karya tulis yang menarik, inovatif dan mendalam tentang isu atau tema yang ditentukan. Tingkat pelajar SMA/SMK/Sederajat dan mahasiswa D3/D4/S1 se-Indonesia.",
      href: "/lomba/essay",
    },
    {
      title: "Capture The Flag",
      information:
        "Tantangan keamanan siber untuk menguji keterampilan hacking dan pemecahan masalah. Tingkat pelajar SMA/SMK/Sederajat dan mahasiswa D3/D4/S1 se-Indonesia.",
      href: "/lomba/capture-the-flag",
    },
  ];
  return (
    <>
      <div className="pad-x flex grid md:grid-cols-3 grid-cols-1 md:gap-8 gap-6">
        {caption.map((item, index) => (
          <Link
            href={item.href}
            key={index}
            className="bg-[#371A6C] p-8 rounded-md space-y-4 hover:border-primary border-2 border-transparent"
          >
            <div className="flex justify-between">
              <h1 className="font-bold text-xl hover:underline">
                {item.title}
              </h1>
              <SquareArrowOutUpRight
                color="#FFE038"
                className="hover:cursor-pointer"
              />
            </div>
            <p className="md:text-base text-sm">{item.information}</p>
          </Link>
        ))}
      </div>
    </>
  );
};

export default CardLombaHomePage;
