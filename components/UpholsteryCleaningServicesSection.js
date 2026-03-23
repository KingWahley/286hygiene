import Image from "next/image";

const serviceItems = [
  {
    title: "Deep cleaning of sofas and chairs",
    image: "/images/service 1.png",
    alt: "Deep cleaning upholstery on a sofa",
    className: "md:col-span-1 md:row-span-1"
  },
  {
    title: "Stain removal",
    image: "/images/service 3.png",
    alt: "Treatment for upholstery stains",
    className: "md:col-span-1 md:row-span-1"
  },
  {
    title: "Odor elimination",
    image: "/images/heroimg.png",
    alt: "Fresh and odor-free upholstered seating",
    className: "md:col-span-1 md:row-span-1"
  },
  {
    title: "Dust and allergen removal",
    image: "/images/service 3.png",
    alt: "Removal of dust and allergens from upholstery",
    className: "md:col-span-2 md:row-span-1"
  },
  {
    title: "Fabric-safe cleaning methods",
    image: "/images/service 1.png",
    alt: "Gentle cleaning methods for fabric upholstery",
    className: "md:col-span-1 md:row-span-1"
  }
];

export default function UpholsteryCleaningServicesSection() {
  return (
    <>
      <section className="px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-8 py-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <article className="relative min-h-[16rem] overflow-hidden rounded-[1.8rem] shadow-[0_22px_50px_rgba(78,129,141,0.14)]">
            <Image
              src="/images/service 2.png"
              alt="Professional upholstery cleaning in progress"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(135deg,_rgba(86,194,220,0.78)_0%,_rgba(86,194,220,0.5)_48%,_rgba(86,194,220,0.74)_100%)]" />
            <div className="absolute inset-x-0 bottom-0 p-6">
              <p className="max-w-[18rem] text-sm leading-6 text-white">
                Regular upholstery cleaning helps maintain a clean and
                comfortable environment in both homes and offices.
              </p>
            </div>
          </article>

          <article className="rounded-[1.8rem] bg-white px-2 py-2">
            <p className="text-lg leading-8 text-[#2c3439] sm:text-[1.65rem] sm:leading-[1.45]">
              Furniture such as sofas and chairs can accumulate dust, stains,
              and bacteria over time. Our upholstery cleaning service is
              designed to restore the cleanliness and appearance of your
              furniture while improving indoor hygiene. 286 Hygiene uses
              professional cleaning techniques to safely clean and refresh your
              upholstery.
            </p>
          </article>
        </div>
      </section>

      <section className="bg-[linear-gradient(180deg,_#38a9cc_0%,_#2d9fc4_100%)] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-black uppercase tracking-[0.03em] text-white sm:text-4xl">
            Our Upholstery Cleaning Services
          </h2>

          <div className="mt-12 grid gap-px overflow-hidden bg-[#28c0e4] md:grid-cols-3">
            {serviceItems.map((item) => (
              <article
                key={item.title}
                className={`group relative min-h-[18rem] overflow-hidden bg-white ${item.className}`}
              >
                <div className="relative h-full min-h-[18rem]">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(19,29,35,0.04)_20%,_rgba(19,29,35,0.72)_100%)]" />
                  <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                    <h3 className="max-w-[18rem] text-[1.75rem] font-extrabold leading-tight text-white drop-shadow-[0_3px_10px_rgba(0,0,0,0.28)] sm:text-[2rem]">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
