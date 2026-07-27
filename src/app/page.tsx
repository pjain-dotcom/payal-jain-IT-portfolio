import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import AIProjects from "@/components/AIProjects";
import Skills from "@/components/Skills";
import Achievements from "@/components/Achievements";
import Experience from "@/components/Experience";
import EducationCerts from "@/components/EducationCerts";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <Nav />
      <Hero />
      <AIProjects />
      <Skills />
      <Achievements />
      <Experience />
      <EducationCerts />
      <Footer />
    </div>
  );
}
