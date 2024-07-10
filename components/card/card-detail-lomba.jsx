"use client";
import { useParams } from "next/navigation";
import detailLomba from "@/lib/constant/detail-lomba";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Book } from "lucide-react";
import Countdown from "@/components/countdown/countdown";
import { formatDateToWIB } from "@/lib/formatDate/format-date";
import { Orbitron } from "next/font/google";

const orbitron = Orbitron({ subsets: ["latin"] });

const CardDetailLomba = () => {
  const params = useParams();
  const { slug } = params;

  const lomba = detailLomba.find((item) => item.slug === slug);

  if (!lomba) {
    return <div>Competition not found</div>;
  }
  return (
    <>
      <Card className="bg-[#182159] md:p-6 p-4 text-white w-full border-t-4 border-b-8 border-r-8 border-l-8">
        <CardHeader>
          <span className="text-muted-foreground">Bidang Lomba</span>
        </CardHeader>
        <CardContent>
          <div className="md:flex gap-x-8">
            <div className="space-y-8">
              <h1
                className={`md:text-6xl text-4xl font-bold ${orbitron.className}`}
              >
                {lomba.title}
              </h1>
              <p className="text-[#DCE2F1]">
                Kembangkan kreativitas dan keterampilan desainmu! Buatlah
                antarmuka pengguna yang menarik dan mudah digunakan untuk
                menunjukkan kepiawaianmu dalam dunia desain. Jangan sampai
                ketinggalan kesempatan emas ini! Segera daftarkan dirimu dan
                buktikan bahwa kamu adalah yang terbaik di bidangmu!
              </p>
              <div className="space-y-4">
                <Countdown targetDate={lomba.targetDate} />
                <p className="font-semibold">
                  {formatDateToWIB(lomba.targetDate)}
                </p>
              </div>
              <div className="flex gap-x-4">
                <Button className="w-[200px] text-[#0E1333] font-bold text-md">
                  Daftar
                </Button>
                <Button
                  variant="outline"
                  className="w-[200px] text-primary font-bold text-md flex gap-x-2"
                >
                  {" "}
                  <Book />
                  Guidebook
                </Button>
              </div>
            </div>
            <div>
              <div className="bg-[#0E1333] md:w-[400px] md:h-[400px] rounded-xl"></div>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default CardDetailLomba;
