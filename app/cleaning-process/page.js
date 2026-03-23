import CallToAction from "@/components/CallToAction";
import CleaningProcessSection from "@/components/CleaningProcessSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function CleaningProcessPage() {
  return (
    <>
      <Header />
      <main className="overflow-hidden">
        <section className="px-4 pb-16 pt-12 sm:px-6 sm:pb-20 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-3xl py-10 sm:py-16">
              <h1 className="text-5xl font-black leading-[0.92] tracking-tight text-[#15213a] sm:text-6xl lg:text-7xl">
                Our Professional
                <span className="block text-[#0b8768]">
                  Cleaning Process
                </span>
              </h1>
              <p className="mt-8 max-w-2xl text-lg leading-9 text-[#556a74]">
                A boutique wellness approach to hygiene. We transform spaces
                through a curated workflow that balances surgical precision with
                artisanal care.
              </p>
            </div>
          </div>
        </section>

        <CleaningProcessSection />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}
