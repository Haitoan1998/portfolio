import AboutMe from "./components/Section/AboutMe";
import Resume from "./components/Section/Resume";
import SkillsOrbit from "./components/Section/Skills";
import Company from "./components/Section/Company";
import Project from "./components/Section/Project";
import Contact from "./components/Section/Contact";

export default function Home() {
  return (
    <div className="min-h-screen w-[90%] xl:w-2/3 mx-auto">
      {/* Đặt ID tương ứng với các item trong menuItems */}
      <section id="aboutme">
        <AboutMe />
      </section>

      <section id="Resume">
        <Resume />
      </section>

      <section id="Company">
        <Company />
      </section>

      <section id="Skills">
        <SkillsOrbit />
      </section>

      <section id="Projects">
        <Project />
      </section>

      <section id="Contact">
        <Contact />
      </section>
    </div>
  );
}
