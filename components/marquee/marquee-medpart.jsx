import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const images = [
  {
    src: "/images/Asset 14@4x.png",
    alt: "Himpunan Mahasiswa Informatika UNSOED",
  },
  { src: "/images/Asset 15@4x.png", alt: "Info Lomba IT" },
  { src: "/images/Asset 16@4x.png", alt: "HMA UNDIP" },
  { src: "/images/Asset 17@4x.png", alt: "HMI UNDIP" },
  { src: "/images/Asset 18@4x.png", alt: "Keluarga Mahasiswa Katolik UPI" },
  { src: "/images/Asset 19@4x.png", alt: "PRMK UNDIP" },
  { src: "/images/Asset 20@4x.png", alt: "Milenial News" },
  { src: "/images/Asset 21@4x.png", alt: "Enerc FT Unnes" },
  { src: "/images/Asset 22@4x.png", alt: "Polytechnic Computer Club" },
  { src: "/images/Asset 23@4x.png", alt: "FST UNDIP" },
  { src: "/images/Asset 24@4x.png", alt: "HIMPROTE UNNES" },
  { src: "/images/Asset 25@4x.png", alt: "infolomba" },
  { src: "/images/Asset 26@4x.png", alt: "KMK FMIPA Universitas Brawijaya" },
  { src: "/images/Asset 27@4x.png", alt: "GDSC Universitas Diponegoro" },
  { src: "/images/Asset 28@4x.jpg", alt: "Infolomba.mhs" },
];

const MarqueeMedpart = () => {
  return (
    <TooltipProvider>
      <div className="group flex gap-x-4 overflow-hidden p-2 bg-secondary md:py-12 py-10">
        {Array(6)
          .fill(0)
          .map((_, i) => (
            <div
              key={i}
              className="flex shrink-0 animate-marquee flex-row justify-around gap-4"
            >
              {images.map((image, index) => (
                <Tooltip key={index}>
                  <div className="flex gap-y-3 overflow-hidden rounded-lg">
                    <TooltipTrigger asChild>
                      <Image
                        src={image.src}
                        width={100}
                        height={100}
                        className="w-full md:mx-8 mx-5 md:h-[80px] max-h-[80px] grayscale hover:grayscale-0 cursor-pointer"
                        alt={image.src}
                      />
                    </TooltipTrigger>
                  </div>
                  <TooltipContent className="text-secondary">
                    <p>{image.alt}</p>
                  </TooltipContent>
                </Tooltip>
              ))}
            </div>
          ))}
      </div>
    </TooltipProvider>
  );
};

export default MarqueeMedpart;
