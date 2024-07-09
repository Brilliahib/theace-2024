import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import bg from "/public/images/bg-particle.png";

export default function Home() {
  return (
    <>
      <div
        className="md:h-screen min-h-[70vh] flex flex-col space-y-8 justify-center items-center bg-cover bg-center"
        style={{ backgroundImage: `url(${bg.src})` }}
      >
        <div className="text-white text-4xl md:text-6xl text-center font-semibold font-orbitron">
          <p>
            Break the <a className="text-primary">algorithm</a>,
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
