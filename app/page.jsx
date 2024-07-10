import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Orbitron } from "next/font/google";

const orbitron = Orbitron({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className="md:h-screen min-h-[70vh] flex flex-col space-y-8 justify-center items-center">
        <div
          className={`text-white text-4xl md:text-6xl text-center font-semibold font-orbitron ${orbitron.className}`}
        >
          <p>
            Break the <span className="text-primary">algorithm</span>,
          </p>
          <p>code the future</p>
        </div>
        <Button className="flex flex-row gap-2 rounded-md font-bold text-black">
          Get Started
          <ArrowRight color="#000000" />
        </Button>
      </div>

    </>
  );
}
