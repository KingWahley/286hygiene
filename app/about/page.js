import AboutHero from "@/components/AboutHero";
import AboutTimeline from "@/components/AboutTimeline";
import CallToAction from "@/components/CallToAction";
import CoreValuesSection from "@/components/CoreValuesSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="overflow-hidden">
        <AboutHero />
        <AboutTimeline />
        <CoreValuesSection />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}
