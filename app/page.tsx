import { Sidebar } from "@/components/sidebar";
import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { Steps } from "@/components/steps";
import { Industries } from "@/components/industries";
import { Contact } from "@/components/contact";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Sidebar />
      <Hero />
      <Features />
      <Steps />
      <Industries />
      <Contact />
      <CTA />
      <Footer />
    </>
  );
}
