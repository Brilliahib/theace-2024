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
                  <div className="flex md:min-w-40 min-w-28 flex-col gap-y-3 overflow-hidden rounded-lg">
                    <TooltipTrigger asChild>
                      <Image
                        src={image.src}
                        width={100}
                        height={100}
                        className="md:w-[80px] md:h-[80px] w-[60px] h-[60px] grayscale hover:grayscale-0 cursor-pointer"
                        alt="Media Partner"
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
