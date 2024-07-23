"use client";
import { Card, CardContent } from "@/components/ui/card";
import CheckIcons from "@/public/icons/checklist.svg";
import Trophy from "@/public/icons/trophy.svg";
import { useParams } from "next/navigation";
import detailLomba from "@/lib/constant/detail-lomba";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { formatDateToWIB } from "@/lib/formatDate/format-date";
import Countdown from "@/components/countdown/countdown";

const LombaDetail = () => {
  const params = useParams();
  const { slug } = params;

  const lomba = detailLomba.find((item) => item.slug === slug);

  if (!lomba) {
    return <div>Competition not found</div>;
  }
  return (
    <>
      <div className="md:min-h-[350px] min-h-[200px] bg-secondary pad-x flex items-center">
        <div className="space-y-4 md:text-left text-center md:mt-12">
          <h1 className="md:text-4xl text-2xl font-bold uppercase">
            {lomba.title}
          </h1>
          <p className="md:text-lg text-sm font-bold text-primary">
            &quot;{lomba.theme}&quot;
          </p>
        </div>
      </div>
      <div className="pad-x md:flex py-12 gap-x-8 md:space-y-0 space-y-8">
        <div className="md:w-8/12">
          <div className="space-y-8">
            <Card>
              <CardContent>
                <div className="space-y-4">
                  <h1 className="text-2xl font-bold">Description</h1>
                  <p className="text-justify">{lomba.description}</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <div className="space-y-4">
                  <h1 className="text-2xl font-bold">Syarat</h1>
                  <ul className="space-y-4">
                    <li className="flex gap-x-4 items-center">
                      <div>
                        <CheckIcons />
                      </div>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Sapiente, asperiores.
                    </li>
                    <li className="flex gap-x-4 items-center">
                      <div>
                        <CheckIcons />
                      </div>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Sapiente, asperiores.
                    </li>
                    <li className="flex gap-x-4 items-center">
                      <div>
                        <CheckIcons />
                      </div>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Sapiente, asperiores.
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
            <div className="p-8 w-full bg-primary text-secondary rounded-md space-y-6">
              <div className="flex gap-x-4 items-center">
                <Trophy />
                <h1 className="text-lg font-bold">
                  Uang Penghargaan + Sertifikat
                </h1>
              </div>
              <div>
                <span className="text-md font-bold">Note :</span>
                <p className="font-medium">
                  Hadiah akan diumumkan ketika Technical Meeting berlangsung
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-4/12">
          <div>
            <Accordion type="single" collapsible className="w-full space-y-4">
              <AccordionItem value="item-1" className="border-0">
                <AccordionTrigger className="p-4 rounded-md bg-secondary text-white font-bold">
                  Gelombang 1
                </AccordionTrigger>
                <AccordionContent className="p-4 rounded-md bg-secondary mt-4">
                  <div className="space-y-8">
                    <div className="text-center space-y-2">
                      <h1 className="text-base font-semibold">
                        Biaya Pendaftaran
                      </h1>
                      <h1 className="text-2xl font-bold text-primary">
                        Rp {lomba.price}
                      </h1>
                    </div>
                    <div className="flex justify-center">
                      <Countdown targetDate={lomba.targetDate} />
                    </div>
                    <div className="text-center">
                      <p className="font-semibold">
                        {formatDateToWIB(lomba.targetDate)}
                      </p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="border-0">
                <AccordionTrigger className="p-4 rounded-md bg-secondary  text-white font-bold">
                  Gelombang 2
                </AccordionTrigger>
                <AccordionContent className="p-4 rounded-md bg-secondary mt-4">
                  <div className="space-y-4">
                    <div>
                      <h1 className="text-lg font-bold text-primary text-center">
                        Coming Soon
                      </h1>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="border-0">
                <AccordionTrigger className="p-4 rounded-md bg-secondary  text-white font-bold">
                  Gelombang 3
                </AccordionTrigger>
                <AccordionContent className="p-4 rounded-md bg-secondary mt-4">
                  <div className="space-y-4">
                    <div>
                      <h1 className="text-lg font-bold text-primary text-center">
                        Coming Soon
                      </h1>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </>
  );
};

export default LombaDetail;
