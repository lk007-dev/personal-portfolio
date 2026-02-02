'use client';

import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import ExperienceSection from '../components/ExperienceSection';
import SkillsSection from '../components/SkillsSection';
import ProjectsSection from '../components/ProjectsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import FloatingEmail from '../components/FloatingEmail';

export default function Home() {
  return (
    <main className="min-h-screen bg-transparent relative z-0">
      <Hero />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
      <FloatingEmail />
    </main>
  );
}
