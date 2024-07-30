import Link from "next/link";
import ContactCard from "@/components/contact/contact-card";

const contacts = {
  "UI/UX Design": [
    { name: "Mutiara Sabrina R.", phone: "+62 85803228042" },
    { name: "Edi Wicoro", phone: "+62 82325720215" },
  ],
  Essay: [
    { name: "Wahyu Ramadhani", phone: "+62 82241992151" },
    { name: "Daffa Ananda", phone: "+62 81946767250" },
    { name: "Syada Saleha", phone: "+62 82352460763" },
  ],
  "Capture The Flag": [
    { name: "Anastasya", phone: "+62 83822629004" },
    { name: "Tian Putra", phone: "+62 8976666609" },
    { name: "Shulhan Aziz", phone: "+62 83111147273" },
  ],
};

const ContactPage = () => (
  <>
    {/* Contact Section */}
    <div className="md:min-h-[350px] min-h-[200px] bg-secondary pad-x flex items-center">
      <div className="space-y-4 md:text-left text-center md:mt-12">
        <h1 className="md:text-4xl text-2xl font-normal uppercase font-boomBox2">
          CONTACT
        </h1>
        <p className="md:text-base text-sm mt-4">
          Tanyakan atau sampaikan pesan Anda kepada kami melalui halaman ini.
          Kami siap membantu!
        </p>
      </div>
    </div>

    {/* Content Sections */}
    <div className="flex flex-col items-center justify-center px-4 sm:px-8 lg:px-16 mt-16 md:mb-24 mb-12">
      {/* UI/UX Design Section */}
      <div className="mb-8">
        <p className="text-center font-bold md:mb-4 mb-2 text-white">
          Narahubung
        </p>
        <p className="text-center font-bold md:text-2xl text-xl text-primary mb-4">
          UI/UX Design
        </p>
      </div>
      <div className="flex justify-center flex-wrap gap-8 pad-x mb-16">
        {contacts["UI/UX Design"].map((contact) => (
          <Link
            href={`https://wa.me/${contact.phone.replace(/\D/g, "")}`}
            key={contact.phone}
          >
            <ContactCard
              role="UI/UX Design"
              name={contact.name}
              phone={contact.phone}
            />
          </Link>
        ))}
      </div>

      {/* Essay Section */}
      <div className="mb-8">
        <p className="text-center font-bold  md:mb-4 mb-2 text-white">
          Narahubung
        </p>
        <p className="text-center font-bold md:text-2xl text-xl text-primary mb-4">
          Essay
        </p>
      </div>
      <div className="flex justify-center flex-wrap gap-8 pad-x mb-16">
        {contacts["Essay"].map((contact) => (
          <Link
            href={`https://wa.me/${contact.phone.replace(/\D/g, "")}`}
            key={contact.phone}
          >
            <ContactCard
              role="Essay"
              name={contact.name}
              phone={contact.phone}
            />
          </Link>
        ))}
      </div>

      {/* Capture The Flag Section */}
      <div className="mb-8">
        <p className="text-center font-bold  md:mb-4 mb-2 text-white">
          Narahubung
        </p>
        <p className="text-center font-bold md:text-2xl text-xl text-primary mb-4">
          Capture The Flag
        </p>
      </div>
      <div className="flex justify-center flex-wrap gap-8 pad-x">
        {contacts["Capture The Flag"].map((contact) => (
          <Link
            href={`https://wa.me/${contact.phone.replace(/\D/g, "")}`}
            key={contact.phone}
          >
            <ContactCard
              role="Capture The Flag"
              name={contact.name}
              phone={contact.phone}
            />
          </Link>
        ))}
      </div>
    </div>
  </>
);

export default ContactPage;
