import { SquareArrowOutUpRight } from "lucide-react";
import React from "react";

const CardLombaHomePage = () => {
  const caption = [
    {
      title: "UI/UX Design",
      information:
        "Desain antarmuka aplikasi mobile yang inovatif dan ramah pengguna dengan tema yang ditentukan. Tingkat pelajar SMA/SMK/Sederajat dan mahasiswa D3/D4/S1 se-Indonesia.",
    },
    {
      title: "Essay",
      information:
        "Karya tulis yang menarik, inovatif dan mendalam tentang isu atau tema yang ditentukan. Tingkat pelajar SMA/SMK/Sederajat dan mahasiswa D3/D4/S1 se-Indonesia.",
    },
    {
      title: "Capture The Flag",
      information:
        "Tantangan keamanan siber untuk menguji keterampilan hacking dan pemecahan masalah. Tingkat pelajar SMA/SMK/Sederajat dan mahasiswa D3/D4/S1 se-Indonesia.",
    },
  ];
  return (
    <>
      <div className="flex md:flex-row flex-col gap-8 justify-center items-center mt-8">
        {caption.map((item, index) => (
          <div
            key={index}
            className="bg-[#371A6C] md:w-1/4 w-5/6 p-6 rounded-md space-y-4"
          >
            <div className="flex justify-between">
              <h1 className="font-bold md:text-xl text-lg">{item.title}</h1>
              <SquareArrowOutUpRight
                color="#FFE038"
                className="hover:cursor-pointer"
              />
            </div>
            <p>{item.information}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default CardLombaHomePage;
