"use client";
import { useState, useEffect } from "react";
import LombaPage from "@/components/lomba/lomba";
import Marquee from "@/components/marquee/marquee-photo";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import bgLanding from "/public/images/the-ace-landing.png";
import bgMobile from "/public/images/bg-mobile.png";
import AboutCompetition from "@/components/competition/about-competition";
import Alur from "@/components/alur/alur";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const backgroundImage = isMobile ? bgMobile.src : bgLanding.src;

  return (
    <>
      <div
        className="md:min-h-screen min-h-[120vh] flex flex-col space-y-8 justify-start sm:justify-center items-center md:items-start bg-cover bg-center pad-x"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <div className="md:space-y-8 space-y-6 md:mt-0 mt-10">
          <div
            className={`text-white leading-relaxed text-3xl md:text-4xl md:space-y-4 text-left font-semibold font-boomBox2`}
          >
            <p>
              Break the <span className="text-[#FF29BB]">algorithm</span>,
            </p>
            <p>code the future</p>
          </div>
          <p className="md:w-1/2 w-5/6 text-pretty md:text-base text-sm">
            Kami mengundang kalian semua untuk bergabung dalam serangkaian lomba
            seru dan menantang yang kami adakan! Apakah kamu siap untuk mengasah
            kemampuan dan menunjukkan bakatmu? Inilah saat yang tepat untuk
            berpartisipasi
          </p>
          <Button className="flex flex-row gap-2 rounded-md font-bold text-black h-12">
            Daftar Sekarang
            <ArrowRight color="#000000" />
          </Button>
        </div>
      </div>
      <LombaPage />
      <AboutCompetition />
      {/* belom responsif sih alur.. maap buru2 */}
      <Alur />
    </>
  );
}
