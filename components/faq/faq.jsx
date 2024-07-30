import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

export function FAQ() {
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
        <AccordionItem
          value="item-1"
          className="border-0 bg-secondary rounded-md"
        >
          <AccordionTrigger className="p-4 px-5 text-white text-left font-semibold md:text-base text-sm">
            Apa itu The Ace?
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4 px-5">
              <div>
                <p className="md:text-md text-sm">
                  The Ace merupakan acara terbesar Teknik Komputer UNDIP untuk
                  memperingati hari lahir Teknik Komputer, dan telah menjadi
                  acara dari tahun ke tahun. Acara ini bertujuan untuk membuka
                  minat bagi khalayak luar yang berpotensi di bidang Teknologi.
                </p>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-2"
          className="border-0 bg-secondary rounded-md"
        >
          <AccordionTrigger className="p-4 px-5 text-white text-left font-semibold md:text-base text-sm">
            Kapan pendaftaran Competition The Ace dibuka?
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4 px-5">
              <div>
                <p className="md:text-md text-sm">
                  The Ace merupakan acara terbesar Teknik Komputer UNDIP untuk
                  memperingati hari lahir Teknik Komputer, dan telah menjadi
                  acara dari tahun ke tahun. Acara ini bertujuan untuk membuka
                  minat bagi khalayak luar yang berpotensi di bidang Teknologi.
                </p>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-3"
          className="border-0 bg-secondary rounded-md"
        >
          <AccordionTrigger className="p-4 px-5 text-white text-left font-semibold md:text-base text-sm">
            Ada lomba apa saja?
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4 px-5">
              <div>
                <p className="md:text-md text-sm">
                  Pada tahun ini, The Ace memiliki 3 cabang lomba, di antaranya
                  Lomba Capture The Flag (CTF), Lomba Essay, dan Lomba UI/UX
                  Design. Perlombaan ini merupakan perlombaan tingkat nasional
                  yang diperuntukkan bagi pelajar SMA/SMK/sederajat
                  se-Indonesia.
                </p>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
