import InfiniteScroll from "@/components/home-parts/InfiniteScroll";
import Projects from "@/components/home-parts/Projects";
import Services from "@/components/home-parts/Services";
import Skills from "@/components/home-parts/Skills";
import Contact from "@/components/home-parts/Contact";
import Hero from "@/components/home-parts/Hero";

export default function Home() {
  return (
      <>
          <Hero/>
          <InfiniteScroll/>
          <Projects/>
          <Services/>
          <Skills/>
          <Contact/>
      </>
  );
}
