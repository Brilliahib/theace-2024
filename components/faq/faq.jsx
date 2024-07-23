import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

export function FAQ() {
  return (
    <div className="pad-x text-white py-24">
      <div className="text-center space-y-4 mb-12">
        <h1 className="text-3xl font-bold">FAQ</h1>
        <p>
          Jika ada pertanyaan lain bisa{" "}
          <Link href="/contact" className="text-primary hover:underline">
            hubungi kami
          </Link>
        </p>
      </div>
      <Accordion type="single" collapsible className="w-full space-y-4">
        <AccordionItem value="item-1" className="border-0">
          <AccordionTrigger className="p-4 rounded-md bg-secondary text-white font-bold">
            Pertanyaan Seputar The Ace
          </AccordionTrigger>
          <AccordionContent className="p-4 rounded-md bg-secondary mt-4">
            <div className="space-y-4">
              <div className="border-b-2">
                <p className="mb-4">
                  Yes. It adheres to the WAI-ARIA design pattern.
                </p>
              </div>
              <div>Yes. It adheres to the WAI-ARIA design pattern.</div>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2" className="border-0">
          <AccordionTrigger className="p-4 rounded-md bg-secondary  text-white font-bold">
            Pertanyaan Seputar Lomba
          </AccordionTrigger>
          <AccordionContent className="p-4 rounded-md bg-secondary mt-4">
            <div className="space-y-4">
              <div className="border-b-2">
                <p className="mb-4">
                  Yes. It adheres to the WAI-ARIA design pattern.
                </p>
              </div>
              <div>Yes. It adheres to the WAI-ARIA design pattern.</div>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3" className="border-0">
          <AccordionTrigger className="p-4 rounded-md bg-secondary  text-white font-bold">
            Pertanyaan Seputar Seminar
          </AccordionTrigger>
          <AccordionContent className="p-4 rounded-md bg-secondary mt-4">
            <div className="space-y-4">
              <div className="border-b-2">
                <p className="mb-4">
                  Yes. It adheres to the WAI-ARIA design pattern.
                </p>
              </div>
              <div>Yes. It adheres to the WAI-ARIA design pattern.</div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
