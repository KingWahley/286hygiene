import Image from "next/image";

export default function ServicesPageHero() {
  return (
    <section className="px-4 pb-12 pt-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl rounded-[2.2rem] bg-white  shadow-[0_24px_60px_rgba(55,124,147,0.1)] ">
        <div className="relative overflow-hidden rounded-[1.8rem]">
          <Image
            src="/images/heroimg.png"
            alt="286 Hygiene cleaning team delivering services"
            width={1600}
            height={900}
            className="h-[16rem] w-full object-cover sm:h-[20rem] lg:h-[24rem]"
            priority
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,_rgba(37,168,201,0.76)_0%,_rgba(37,168,201,0.62)_45%,_rgba(37,168,201,0.32)_100%)]" />

          <div className="absolute inset-y-0 left-0 flex max-w-[34rem] items-center px-6 sm:px-10">
            <h1 className="text-3xl font-black uppercase leading-[1.15] text-white ">
              Our services are designed to maintain hygienic, healthy
              environments.
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}



