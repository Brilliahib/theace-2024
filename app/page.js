import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <>
      <div className="bg-[#0E1333] h-screen flex flex-col gap-4 justify-center items-center">
        <div className="text-white text-6xl text-center font-semibold -mt-36 font-orbitron">
          <p>
            Break the <a className="text-[#FFA62D]">algorithm</a>,
          </p>
          <p>code the future</p>
        </div>
        <button className="flex flex-row gap-2 bg-[#FFA62D] p-2 rounded-md font-semibold text-black">
          Get Started
          <ArrowRight color="#000000" />
        </button>
      </div>
    </>
  );
}
