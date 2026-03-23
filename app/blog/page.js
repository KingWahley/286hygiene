import BlogArticleSection from "@/components/BlogArticleSection";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";

export default function BlogPage() {
  return (
    <>
      <Header />
      <main className="overflow-hidden">
        <PageHero
          title="The 286 Blog"
          backgroundImage="/images/heroimg.png"
          alt="Minimal interior representing the 286 blog"
          sectionClassName="px-4 pb-10 pt-4 sm:px-6 lg:px-8"
          imageClassName="h-[11rem] w-full object-cover sm:h-[14rem] lg:h-[16rem]"
          overlayClassName="bg-[linear-gradient(90deg,_rgba(245,246,243,0.22)_0%,_rgba(196,167,119,0.18)_52%,_rgba(114,86,44,0.16)_100%)]"
          contentClassName="absolute inset-y-0 left-0 flex max-w-[26rem] items-center px-4 sm:px-6"
          titleClassName="text-5xl font-black leading-none text-white sm:text-6xl"
        />
        <BlogArticleSection />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}
