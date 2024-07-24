import { Orbitron } from "next/font/google";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/navbar";
import NavMobile from "@/components/navbar/nav-mobile";
import NavTop from "@/components/navbar/nav-top";
import Footer from "@/components/footer/footer";
import { FAQ } from "@/components/faq/faq";
import bg from "/public/images/bg-particle.png";

const orbitron = Orbitron({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "The Ace 2024",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} bg-[#241246] text-white`} style={{ backgroundImage: `url(${bg.src})`, backgroundSize: "auto" }}>
        {/* Adding navbar from  "./navbar/navbar" */}
        <Navbar />
        <NavTop />
        <NavMobile />
        {children}
        <FAQ />
        <Footer />
      </body>
    </html>
  );
}
