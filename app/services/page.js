import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ServicesGrid from "@/components/ServicesGrid";
import ServicesPageHero from "@/components/ServicesPageHero";

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="overflow-hidden">
        <ServicesPageHero />
        <ServicesGrid />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}
