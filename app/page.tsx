import AboutMe from "@/blocks/aboutme";
import Experience from "@/blocks/experience";
import Footer from "@/blocks/footer";
import Header from "@/blocks/header";
import Projects from "@/blocks/projects";

export default function Home() {
  return (
    <main className="leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900 scroll-smooth">
      <div className="lg:flex lg:justify-between lg:gap-4 min-h-screen">
        <Header />
        <div className="pt-24 lg:w-1/2 lg:py-24">
          <AboutMe />
          <Experience />
          <Projects />
          <Footer />
        </div>
      </div>
    </main>
  );
}
