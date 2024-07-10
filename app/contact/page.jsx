import ContactCard from '@/components/contact/contact-card';

const ContactPage = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center px-4 sm:px-8 lg:px-16 md:pt-36">
        <h1 className="text-center text-4xl font-bold mb-2">Kontak Kami</h1>
        <p className="text-center mb-[64px]">Silahkan hubungi kami sesuai nomor yang tertera dibawah.</p>
        <div className="flex justify-center flex-wrap gap-8">
          <ContactCard role="Admin" name="Muhammad Alwan" phone="+62 0812301382103" />
          <ContactCard role="Admin" name="Muhammad Alwan" phone="+62 0812301382103" />
          <ContactCard role="Admin" name="Muhammad Alwan" phone="+62 0812301382103" />
          <ContactCard role="Admin" name="Muhammad Alwan" phone="+62 0812301382103" />
          <ContactCard role="Admin" name="Muhammad Alwan" phone="+62 0812301382103" />
          <ContactCard role="Admin" name="Muhammad Alwan" phone="+62 0812301382103" />
        </div>
      </div>
    </>
  );
};

export default ContactPage;
