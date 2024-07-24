import ContactCard from "@/components/contact/contact-card";

const ContactPage = () => {
  return (
    <>
      {/* Contact Section */}
      <div className="md:min-h-[350px] min-h-[200px] bg-secondary pad-x flex items-center">
        <div className="space-y-4 md:text-left text-center md:mt-12">
          <h1 className="md:text-4xl text-2xl font-bold uppercase font-boomBox2">
            CONTACT
          </h1>
          <p className="text-base mt-4">
            Tanyakan atau sampaikan pesan Anda kepada kami melalui halaman ini.
            Kami siap membantu!
          </p>
        </div>
      </div>

      {/* Content Sections */}
      <div className="flex flex-col items-center justify-center px-4 sm:px-8 lg:px-16 mt-16">
        {/* UI/UX Design Section */}
        <div className="text-center font-bold mb-4 text-white">Narahubung</div>
        <div className="text-center font-bold text-2xl text-primary mb-4">
          UI/UX Design
        </div>
        <div className="flex justify-center flex-wrap gap-8 pad-x mb-16">
          <ContactCard
            role="UI/UX Design"
            name="Mutiara Sabrina R."
            phone="+62 85803228042"
          />
          <ContactCard
            role="UI/UX Design"
            name="Edi Wicoro"
            phone="+62 82325720215"
          />
        </div>

        {/* Essay Section */}
        <div className="text-center font-bold mb-4 text-white">Narahubung</div>
        <div className="text-center font-bold text-2xl text-primary mb-4">
          Essay
        </div>
        <div className="flex justify-center flex-wrap gap-8 pad-x mb-16">
          <ContactCard
            role="Essay"
            name="Wahyu Ramadhani"
            phone="+62 82241992151"
          />
          <ContactCard
            role="Essay"
            name="Daffa Ananda"
            phone="+62 81946767250"
          />
          <ContactCard
            role="Essay"
            name="Syada Saleha"
            phone="+62 82352460763"
          />
        </div>

        {/* Capture The Flag Section */}
        <div className="text-center font-bold mb-4">Narahubung</div>
        <div className="text-center font-bold text-2xl text-primary mb-4">
          Capture The Flag
        </div>
        <div className="flex justify-center flex-wrap gap-8 pad-x">
          <ContactCard
            role="Capture The Flag"
            name="Anastasya"
            phone="+62 83822629004"
          />
          <ContactCard
            role="Capture The Flag"
            name="Tian Putra"
            phone="+62 8976666609"
          />
          <ContactCard
            role="Capture The Flag"
            name="Shulhan Aziz"
            phone="+62 83111147273"
          />
        </div>
      </div>
    </>
  );
};

export default ContactPage;
