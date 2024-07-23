import Image from "next/image";
import logo from "/public/images/logo.png";
import Marquee from "@/components/marquee/marquee-photo";
import Tiktok from "@/public/icons/tiktok.svg";
import Instagram from "@/public/icons/instagram.svg";

const AboutPage = () => {
  return (
    <section className="overflow-hidden">
      <div className="pad-x md:min-h-[350px] min-h-[200px] bg-secondary flex items-center">
        <div className="md:mt-12">
          <div className="space-y-4 md:text-left text-center">
            <h1 className="md:text-4xl text-2xl font-bold uppercase">
              About Us
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis,
              deleniti.
            </p>
          </div>
        </div>
      </div>
      <div className="pad-x py-24 md:space-y-48 space-y-24">
        <div className="flex grid md:grid-cols-2 grid-cols-1 gap-4 space-y-8 md:space-y-0 items-center">
          <div className="flex justify-center md:justify-start">
            <Image
              src={logo}
              alt="The Ace 2024"
              className="md:max-w-[550px] max-w-[300px]"
            />
          </div>
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="md:text-4xl text-2xl font-bold">The Ace</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
                amet hic nobis quam cumque qui, illum incidunt officia,
                similique saepe vel repudiandae minus deleniti aut porro nam rem
                iure explicabo!
              </p>
            </div>
            <div className="space-y-4">
              <h1 className="text-base">Our Social Media</h1>
              <div className="flex gap-x-4">
                <div>
                  <Tiktok />
                </div>
                <div>
                  <Instagram />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="text-center space-y-4">
            <div className="mb-12 space-y-4">
              <h1 className="md:text-3xl text-2xl font-bold">Dokumentasi</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Accusantium, quis.
              </p>
            </div>
            <div>
              <Marquee />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
