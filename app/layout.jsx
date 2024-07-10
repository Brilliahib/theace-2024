import { Orbitron } from "next/font/google";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/navbar";
import NavMobile from "@/components/navbar/nav-mobile";
import NavTop from "@/components/navbar/nav-top";
import Footer from "@/components/footer/footer";
import { FAQ } from "@/components/faq/faq";
import bg from "/public/images/bg-particle.png";
import EventComponent from "@/components/event/event";
import Documentation from "@/components/documentation/documentation";

const orbitron = Orbitron({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "The Ace 2024",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} bg-[#0E1333] bg-repeat bg-center text-white`}
        style={{ backgroundImage: `url(${bg.src})`, backgroundSize: "auto" }}
      >
        {/* Adding navbar from  "./navbar/navbar" */}
        <Navbar />
        <NavTop />
        <NavMobile />
        {children}
        <EventComponent />
        <Documentation />
        <FAQ />
        <Footer />
      </body>
    </html>
  );
}
