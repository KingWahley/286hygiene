import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="px-4 pb-12 pt-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl rounded-[2.2rem] bg-white  shadow-[0_24px_60px_rgba(55,124,147,0.1)] ">
        <div className="relative overflow-hidden rounded-[1.8rem]">
          <Image
            src="/images/heroimg.png"
            alt="286 Hygiene cleaning team in action"
            width={1600}
            height={900}
            className="h-[15rem] w-full object-cover sm:h-[20rem] lg:h-[23rem]"
            priority
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,_rgba(8,58,53,0.64)_0%,_rgba(8,58,53,0.34)_42%,_rgba(8,58,53,0.1)_100%)]" />

          <div className="absolute inset-y-0 left-0 flex max-w-[28rem] items-center px-6 sm:px-10">
            <h1 className="text-3xl font-black uppercase leading-[1.15] text-white ">
              To deliver professional hygiene solutions that make every space
              sparkle.
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
