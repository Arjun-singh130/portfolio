import About from "./About";
import ContactSection from "./contact/ContactSection";
import ExperienceSection from "./ExperienceSection";
import MobileHero from "./MobileHero";
import ProjectsSection from "./ProjectsSection";
import Section from "./Section";
import SkillsSection from "./skills/SkillsSection";

export default function MainContent() {
  return (
    <section className="w-full lg:w-[55%] py-24 space-y-28">

      <MobileHero />
      
      <Section id="about" title="About">
        <About/>
      </Section>

      <Section id="experience" title="Experience">
        <ExperienceSection/>
      </Section>

      <Section id="projects" title="Projects">
        <ProjectsSection/>
      </Section>

      <Section id="skills" title="Skills">
        <SkillsSection/>
      </Section>

      <Section id="contact" title="Contact">
        <ContactSection/>
      </Section>
    </section>
  );
}
