import ContactForm from "@/src/components/ContactForm";
import ContactHeaderSection from "@/src/components/sections/ContactHeaderSection";
import ContactNumberSection from "@/src/components/sections/ContactNumberSection";
import Image from "next/image";

export default function Contact() {
  return (
    <>
      <Image
        src="/img/header-bg.png"
        width={900}
        height={705}
        alt="pattern"
        className="absolute w-225 h-auto right-0"
        style={{ zIndex: -1 }}
      />
      <div className="container mt-29.25">
        <ContactHeaderSection />
        <ContactForm />
      </div>
      <ContactNumberSection />
    </>
  );
}
