import ContactCard from "@/components/contact/contact-card";

const ContactPage = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center px-4 sm:px-8 lg:px-16 md:mt-56 mt-16">
        <div className="space-y-4 mb-16">
          <h1 className="text-center md:text-4xl text-2xl font-bold mb-2">
            Kontak Kami
          </h1>
          <p className="text-center text-[#DCE2F1]">
            Silahkan hubungi kami sesuai nomor yang tertera dibawah.
          </p>
        </div>
        <div className="flex justify-center flex-wrap gap-8 pad-x">
          <ContactCard
            role="Admin"
            name="Muhammad Alwan"
            phone="+62 0812301382103"
          />
          <ContactCard
            role="Admin"
            name="Muhammad Alwan"
            phone="+62 0812301382103"
          />
          <ContactCard
            role="Admin"
            name="Muhammad Alwan"
            phone="+62 0812301382103"
          />
          <ContactCard
            role="Admin"
            name="Muhammad Alwan"
            phone="+62 0812301382103"
          />
          <ContactCard
            role="Admin"
            name="Muhammad Alwan"
            phone="+62 0812301382103"
          />
          <ContactCard
            role="Admin"
            name="Muhammad Alwan"
            phone="+62 0812301382103"
          />
        </div>
      </div>
    </>
  );
};

export default ContactPage;
