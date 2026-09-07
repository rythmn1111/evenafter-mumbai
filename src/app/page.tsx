import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import EventCards from "@/components/EventCards";
import People from "@/components/People";
import Sponsors from "@/components/Sponsors";
import Partners from "@/components/Partners";
import Venues from "@/components/Venue";
import Team from "@/components/Team";
import Volunteers from "@/components/Volunteers";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";

export default function Home() {
  return (
    <>
      <StructuredData />

      {/* Crawlable context for the hero, which is otherwise mostly imagery.
          No <h1> here — the hero owns the single h1 on the page. */}
      <section className="sr-only">
        <h2>EVENAFTER MUMBAI 2026 — Conference &amp; Hackathon</h2>
        <p>
          EVENAFTER (also known as EVENAFTER MUMBAI) is an Ethereum-focused
          conference and mini hackathon taking place in Mumbai, India on 8–9
          September 2026. The EVENAFTER conference runs at Yashwantrao Chavan
          Centre, Nariman Point, with talks, panels, sponsor activations and open
          networking, followed by the EVENAFTER hackathon across three tracks:
          DeFi, Privacy and AI. EVENAFTER events bring together builders,
          speakers, judges and mentors from across the Ethereum ecosystem.
        </p>
      </section>

      <div className="flex min-h-screen flex-col bg-[#FFD600] font-sans">
        <Navbar />
        <main className="flex min-h-screen w-full flex-col">
          <Hero />
          <EventCards />
          <People />
          <Sponsors />
          <Partners />
          <Venues />
          <Team />
          <Volunteers />
          <FAQ />
          <Footer />
        </main>
      </div>
    </>
  );
}
