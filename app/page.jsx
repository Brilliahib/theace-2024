import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <>
      <div className="bg-[#0E1333] h-screen flex flex-col space-y-8 justify-center items-center">
        <div className="text-white text-6xl text-center font-semibold -mt-36 font-orbitron">
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
