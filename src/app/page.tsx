import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import HowItWorks from "@/components/HowItWorks";
import AppFeatures from "@/components/AppFeatures";
import FAQ from "@/components/FAQ";
import CTAFinal from "@/components/CTAFinal";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Benefits />
      <HowItWorks />
      <AppFeatures />
      <FAQ />
      <CTAFinal />
      <Footer />
    </main>
  );
}
