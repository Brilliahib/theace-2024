"use client";
import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { ScrollArea } from "../ui/scroll-area";

const images = [
  "/images/1.jpg", // Ganti dengan URL gambar asli
  "/images/2.jpg",
  "/images/3.jpg",
  "/images/4.jpg",
  "/images/5.jpg",
  "/images/6.jpg",
  "/images/7.jpg",
  "/images/8.jpg",
  "/images/9.jpg",
];

export function MalamPuncakSection() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false })
  );
  return (
    <Card className="md:px-8 md:py-6 px-8 py-2 rounded-xl bg-secondary/60 rounded-3xl">
      <CardContent>
        <Carousel className="w-full" plugins={[plugin.current]}>
          <CarouselContent className="-ml-1">
            {images.map((image, index) => (
              <CarouselItem
                key={index}
                className="gap-x-12 md:basis-1/2 lg:basis-1/3"
              >
                <div>
                  <img
                    src={image}
                    alt={`Image ${index + 1}`}
                    className="w-full md:h-[300px] h-[150px] object-cover rounded-xl"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="bg-secondary border-white" />
          <CarouselNext className="bg-secondary border-white" />
          <div className="bg-secondary/90 mt-8 md:px-8 md:py-4 p-4 rounded-xl text-left">
            <ScrollArea className="md:h-full h-40 w-full">
              <p className="md:text-base text-sm font-semibold">
                Malam puncak adalah acara puncak dari rangkaian kegiatan The Ace
                yang sangat dinantikan. Pada malam ini, seluruh keluarga besar
                Teknik Komputer, yang mencakup dosen, mahasiswa, dan alumni,
                akan berkumpul bersama untuk merayakan ulang tahun Teknik
                Komputer Universitas Diponegoro. Acara ini dirancang untuk
                mempererat hubungan antara anggota keluarga besar Teknik
                Komputer. Dengan berbagai kegiatan menarik dan momen
                kebersamaan, malam puncak ini diharapkan akan menjadi malam yang
                tak terlupakan.
              </p>
            </ScrollArea>
          </div>
        </Carousel>
      </CardContent>
    </Card>
  );
}
