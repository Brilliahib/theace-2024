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
      <div className="md:min-h-[50vh] bg-[#371a6c] pad-x flex items-center">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">{lomba.title}</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit
            ipsa, quaerat doloribus, aliquid officiis illo ipsam, dolorum
            repellat explicabo accusantium voluptas mollitia. Facilis reiciendis
            error officiis, provident velit tempore quas?
          </p>
        </div>
      </div>
    </>
  );
};

export default CardDetailLomba;
