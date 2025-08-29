import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { AppsSection } from "@/components/apps-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="bg-background min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <AppsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
