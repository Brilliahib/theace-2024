import Image from "next/image";
import logo from "/public/images/logo.png";
import Marquee from "@/components/marquee/marquee-photo";
import Tiktok from "@/public/icons/tiktok.svg";
import Instagram from "@/public/icons/instagram.svg";
import Location from "@/public/icons/location.svg";
import Clock from "@/public/icons/clock.svg";
import Dress from "@/public/icons/dress.svg";
import Link from "next/link";
import { MalamPuncakSection } from "@/components/carousel/carousel-malpun";

const AboutPage = () => {
  return (
    <section className="overflow-hidden">
      <div className="pad-x md:min-h-[350px] min-h-[200px] bg-secondary flex items-center">
        <div className="md:mt-12">
          <div className="space-y-4 md:text-left text-center md:max-w-xl">
            <h1 className="md:text-4xl text-2xl font-bold uppercase font-boomBox2">
              About Us
            </h1>
            <p className="md:text-base text-sm">
              Yuk, kenalan dengan The Ace dan pelajari lebih lanjut tentang misi
              dan nilai-nilai yang mendasari setiap langkah kami!
            </p>
          </div>
        </div>
      </div>
      <div className="pad-x py-24 md:space-y-36 space-y-24">
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
              <h1 className="md:text-4xl text-xl font-bold">The Ace</h1>
              <p className="md:text-base text-sm leading-relaxed">
                The Ace 2024 adalah pengalaman yang dirancang untuk
                mempertemukan berbagai kelompok individu yang memiliki semangat
                yang sama terhadap inovasi, kreativitas, dan komunitas.
                Harapannya dapat menjadi terobosan baru yang akan muncul dari
                tahun - tahun sebelumnya dengan, menawarkan platform unik untuk
                berjejaring, belajar, dan berkembang.
              </p>
            </div>
            <div className="space-y-4">
              <h1 className="text-base">Our Social Media</h1>
              <div className="flex gap-x-4">
                <Link href="https://www.tiktok.com/@theace.2024">
                  <div>
                    <Tiktok />
                  </div>
                </Link>
                <Link href="https://www.instagram.com/theace.2024/">
                  <div>
                    <Instagram />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="text-center space-y-4">
            <div className="mb-12 space-y-4">
              <h1 className="md:text-3xl text-2xl font-bold">Malam Puncak</h1>
              <p className="md:text-base text-sm">
                Nantikan acara mewah ini dan rayakan malam puncak The Ace
                bersama kami!
              </p>
            </div>
            <div>
              <MalamPuncakSection />
            </div>
          </div>
        </div>
        <div className="bg-secondary rounded-md grid md:grid-cols-2 grid-cols-1 gap-x-8">
          <div className="md:p-8 p-4">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-xl font-bold">Lokasi</h1>
                <p className="md:text-base text-sm font-semibold">
                  Jl. Prof. Soedarto, Tembalang, Kec. Tembalang, Kota Semarang,
                  Jawa Tengah 50275
                </p>
              </div>
              <div className="space-y-4 md:text-base text-sm">
                <div className="flex gap-x-4 items-center">
                  <div>
                    <Location />
                  </div>
                  <span>Gedung Teknik Komputer Universitas Diponegoro</span>
                </div>
                <div className="flex gap-x-4 items-center">
                  <div>
                    <Clock />
                  </div>
                  <span>28 Oktober 2024, 16.00 WIB</span>
                </div>
                <div className="flex gap-x-4 items-center">
                  <div>
                    <Dress />
                  </div>
                  <span>Menyesuaikan</span>
                </div>
              </div>
              <div className="space-y-2 md:text-base text-sm">
                <span className="text-md font-bold">Note :</span>
                <p>
                  Tidak untuk umum, hanya untuk keluarga Teknik Komputer
                  Universitas Diponegoro
                </p>
              </div>
            </div>
          </div>
          <div className="md:p-0 p-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.6425265812795!2d110.43760927531852!3d-7.051224192951046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708d3d9c55e8cb%3A0x67f23b9ef2c77c35!2sDepartment%20of%20Computer%20Engineering%2C%20Diponegoro%20University!5e0!3m2!1sen!2sid!4v1721785410958!5m2!1sen!2sid"
              class="w-full md:h-full h-80 border-0 md:rounded-tr-md md:rounded-br-md rounded-md"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
