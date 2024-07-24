"use client";
import { Home, Trophy, Users } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

const NavMobile = () => {
  const pathname = usePathname();
  return (
    <>
      <nav className="bg-secondary w-full md:hidden block fixed bottom-0 pad-x py-4 z-50">
        <div className="text-white justify-around items-center flex w-full text-sm">
          <Link
            href="/"
            className={`${
              pathname === "/" ? "text-primary" : "text-neutral-400"
            }`}
          >
            <div className="flex flex-col justify-center items-center gap-y-1.5 text-sm">
              <Home />
              <p className="text-xs">Home</p>
            </div>
          </Link>
          <Popover href="/lomba">
            <PopoverTrigger asChild>
              <div
                className={`flex flex-col justify-center items-center gap-y-1.5 text-sm ${
                  pathname.startsWith("/lomba")
                    ? "text-primary"
                    : "text-neutral-400 "
                }`}
              >
                <Trophy />
                <p className="text-xs">Competition</p>
              </div>
            </PopoverTrigger>
            <PopoverContent className="shadow-xl w-60 py-6 rounded-xl bg-secondary/50  backdrop-blur border-0">
              <div className="space-y-5 text-center">
                <div>
                  <Link
                    href={"/lomba/ui-ux"}
                    className="font-semibold text-primary hover:bg-secondary p-4 rounded-full"
                  >
                    UI/UX Competition
                  </Link>
                </div>
                <div>
                  <Link
                    href={"/lomba/capture-the-flag"}
                    className="font-semibold text-primary hover:bg-secondary p-4 rounded-full"
                  >
                    Capture The Flag
                  </Link>
                </div>
                <div>
                  <Link
                    href={"/lomba/essay"}
                    className="font-semibold text-primary hover:bg-secondary p-4 rounded-full"
                  >
                    Essay Competition
                  </Link>
                </div>
              </div>
            </PopoverContent>
          </Popover>
          <Link
            href="/seminar"
            className={`${
              pathname === "/seminar" ? "text-primary" : "text-neutral-400 "
            }`}
          >
            <div className="flex flex-col justify-center items-center gap-y-1.5 text-sm">
              <Users />
              <p className="text-xs">Seminar</p>
            </div>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default NavMobile;
