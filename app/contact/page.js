import CallToAction from "@/components/CallToAction";
import ContactPageSection from "@/components/ContactPageSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="overflow-hidden">
        <ContactPageSection />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}
