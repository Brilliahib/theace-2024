import Link from "next/link";
import { Button } from "../ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";

const CardListLomba = () => {
  return (
    <>
      <div className="pad-x text-center py-12 space-y-4">
        <h1 className="font-bold text-3xl">Perlombaan</h1>
        <p className="text-[#DCE2F1]">Terdapat 3 perlombaan</p>
      </div>
      <div className="pad-x md:flex space-y-8 md:space-y-0 gap-x-8">
        <Card className="bg-[#182159] text-white">
          <CardHeader>
            <div className="bg-[#0e1333] rounded-xl w-full h-[200px]"></div>
          </CardHeader>
          <CardContent className="space-y-2">
            <h1 className="text-xl font-semibold">UI/UX Design</h1>
            <p className="text-[#DCE2F1]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia
              neque dicta unde. Veritatis, at qui!
            </p>
          </CardContent>
          <CardFooter>
            <Link href="/lomba/ui-ux" className="w-full">
              <Button className="w-full text-md text-[#041062] font-bold">
                See Details
              </Button>
            </Link>
          </CardFooter>
        </Card>
        <Card className="bg-[#182159] text-white">
          <CardHeader>
            <div className="bg-[#0e1333] rounded-xl w-full h-[200px]"></div>
          </CardHeader>
          <CardContent className="space-y-2">
            <h1 className="text-xl font-semibold">Capture The Flag</h1>
            <p className="text-[#DCE2F1]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia
              neque dicta unde. Veritatis, at qui!
            </p>
          </CardContent>
          <CardFooter>
            <Link href="/lomba/capture-the-flag" className="w-full">
              <Button className="w-full text-md text-[#041062] font-bold">
                See Details
              </Button>
            </Link>
          </CardFooter>
        </Card>
        <Card className="bg-[#182159] text-white">
          <CardHeader>
            <div className="bg-[#0e1333] rounded-xl w-full h-[200px]"></div>
          </CardHeader>
          <CardContent className="space-y-2">
            <h1 className="text-xl font-semibold">Essay</h1>
            <p className="text-[#DCE2F1]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia
              neque dicta unde. Veritatis, at qui!
            </p>
          </CardContent>
          <CardFooter>
            <Link href="/lomba/essay" className="w-full">
              <Button className="w-full text-md text-[#041062] font-bold">
                See Details
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
    </>
  );
};

export default CardListLomba;
