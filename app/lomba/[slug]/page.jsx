"use client";
import React, { useState } from "react";
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
import { Button } from "@/components/ui/button";
import TimeLine from "@/components/timeline/time-line";
import Link from "next/link";
import FAQ from "@/components/faq/faq";

const LombaDetail = () => {
  const params = useParams();
  const { slug } = params;

  const lomba = detailLomba.find((item) => item.slug === slug);

  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);

  if (!lomba) {
    return <div>Competition not found</div>;
  }

  const toggleDescription = () => {
    setIsDescriptionExpanded(!isDescriptionExpanded);
  };

  return (
    <>
      <div className="md:min-h-[350px] min-h-[200px] bg-secondary pad-x flex items-center">
        <div className="space-y-4 md:text-left text-center md:mt-12">
          <h1 className="md:text-4xl text-2xl font-semibold uppercase font-boomBox2">
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
                  <h1 className="md:text-2xl font-bold text-xl">Description</h1>
                  <p className="md:block hidden text-justify md:text-base text-sm">
                    {lomba.description}
                  </p>
                  <p className="text-justify md:hidden block md:text-base text-sm">
                    {isDescriptionExpanded
                      ? lomba.description
                      : `${lomba.description.substring(0, 100)}...`}
                  </p>
                  <button
                    onClick={toggleDescription}
                    className="text-primary underline md:hidden"
                  >
                    {isDescriptionExpanded ? "Read Less" : "Read More"}
                  </button>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <div className="space-y-4">
                  <h1 className="md:text-2xl font-bold text-xl">
                    Syarat dan Ketentuan
                  </h1>
                  <ul className="space-y-4">
                    {lomba.syarat.map((syarat, index) => (
                      <li
                        key={index}
                        className="flex gap-x-4 md:items-center md:text-base text-sm leading-relaxed"
                      >
                        <div>
                          <CheckIcons />
                        </div>
                        {syarat.list}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
            <div className="p-8 w-full bg-primary text-secondary rounded-md space-y-6">
              <div className="flex gap-x-4 items-center">
                <div>
                  <Trophy />
                </div>
                <h1 className="md:text-lg text-base font-bold">
                  Uang Penghargaan + Sertifikat
                </h1>
              </div>
              <div>
                <span className="md:text-base text-sm font-bold">Note :</span>
                <p className="md:text-base text-sm font-medium">
                  Hadiah akan diumumkan ketika Technical Meeting berlangsung
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-4/12">
          <div>
            <Accordion
              type="single"
              defaultValue="item-4"
              collapsible
              className="w-full space-y-4"
            >
              <AccordionItem value="item-1" className="border-0">
                <AccordionTrigger className="p-4 rounded-md bg-secondary text-white font-bold">
                  Pendaftaran Gelombang 1
                </AccordionTrigger>
                <AccordionContent className="p-4 rounded-md bg-secondary mt-4">
                  <div className="space-y-4">
                    <div>
                      <h1 className="text-lg font-bold text-red-600 text-center">
                        Registration is closed
                      </h1>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="border-0">
                <AccordionTrigger className="p-4 rounded-md bg-secondary text-white font-bold">
                  Pendaftaran Gelombang 2
                </AccordionTrigger>
                <AccordionContent className="p-4 rounded-md bg-secondary mt-4">
                  <div className="space-y-4">
                    <div>
                      <h1 className="text-lg font-bold text-red-600 text-center">
                        Registration is closed
                      </h1>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="border-0">
                <AccordionTrigger className="p-4 rounded-md bg-secondary text-white font-bold">
                  Pendaftaran Gelombang 3
                </AccordionTrigger>
                <AccordionContent className="p-4 rounded-md bg-secondary mt-4">
                  <div className="space-y-4">
                    <div>
                      <h1 className="text-lg font-bold text-red-600 text-center">
                        Registration is closed
                      </h1>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="border-0">
                <AccordionTrigger className="p-4 rounded-md bg-secondary text-white font-bold">
                  Pendaftaran Diperpanjang
                </AccordionTrigger>
                <AccordionContent className="p-4 rounded-md bg-secondary mt-4">
                  <div className="space-y-4">
                    <div>
                      <h1 className="text-lg font-bold text-red-600 text-center">
                        Registration is closed
                      </h1>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
      <div className="pad-x md:py-12 py-8 md:space-y-12 space-y-8">
        <div className="text-center space-y-3">
          <h1 className="md:text-3xl text-xl font-bold">Timeline</h1>
          <p className="md:text-base text-sm">
            Ikuti perjalanan dan jangan lewatkan setiap pembaruan menarik
          </p>
        </div>
        <TimeLine timeline={lomba.timeline} />
      </div>
      <div className="md:py-12">
        <FAQ faqData={lomba.faq} />
      </div>
    </>
  );
};

export default LombaDetail;
