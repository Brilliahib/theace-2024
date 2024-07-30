import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

const FAQ = ({ faqData }) => {
  return (
    <div className="pad-x text-white py-24">
      <div className="text-center md:space-y-4 space-y-2 mb-12">
        <h1 className="md:text-3xl text-xl font-bold">FAQ</h1>
        <p className="md:text-base text-sm">
          Jika ada pertanyaan lain bisa{" "}
          <Link href="/contact" className="text-primary hover:underline">
            hubungi kami
          </Link>
        </p>
      </div>
      <Accordion type="single" collapsible className="w-full space-y-4">
        {faqData.map((item, index) => (
          <AccordionItem
            key={index}
            value={`item-${index + 1}`}
            className="border-0 bg-secondary rounded-md"
          >
            <AccordionTrigger className="p-4 px-5 text-white text-left font-semibold md:text-base text-sm">
              {item.question}
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4 px-5">
                <div>
                  <p className="md:text-md text-sm leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FAQ;
