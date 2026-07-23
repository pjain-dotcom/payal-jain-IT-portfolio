import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Achievements from "@/components/Achievements";
import Experience from "@/components/Experience";
import AICallout from "@/components/AICallout";
import EducationCerts from "@/components/EducationCerts";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <Hero />
      <Skills />
      <Achievements />
      <Experience />
      <AICallout />
      <EducationCerts />
      <Footer />
    </div>
  );
}
