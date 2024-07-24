import Documentation from "@/components/documentation/documentation";
import EventComponent from "@/components/event/event";
import Marquee from "@/components/marquee/marquee-photo";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import bgLanding from '/public/images/the-ace-landing.png';


export default function Home() {
  return (
    <>
      <div
        className="md:h-screen min-h-[70vh] flex flex-col space-y-8 justify-center items-start bg-cover bg-center pad-x"
        style={{ backgroundImage: `url(${bgLanding.src})` }}
      >
        <div
          className={`text-white text-2xl md:text-4xl space-y-4 text-left font-semibold font-boomBox2`}
        >
          <p>
            Break the <span className="text-[#FF29BB]">algorithm</span>,
          </p>
          <p>code the future</p>
        </div>
        <p className="w-1/2 text-pretty">
          Kami mengundang kalian semua untuk bergabung dalam serangkaian lomba seru dan menantang yang kami adakan! Apakah kamu siap untuk mengasah kemampuan dan menunjukkan bakatmu? Inilah saat yang tepat untuk berpartisipasi
        </p>
        <Button className="flex flex-row gap-2 rounded-md font-bold text-black h-12">
          Daftar Sekarang
          <ArrowRight color="#000000" />
        </Button>
      </div>
      <Marquee />
      <EventComponent />
      <Documentation />
    </>
  );
}
