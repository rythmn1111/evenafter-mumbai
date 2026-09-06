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

export default function Home() {
  return (
    <>
      <section className="sr-only">
        <h1>EVENAFTER MUMBAI 2026</h1>
        <p>
          EVENAFTER MUMBAI is an Ethereum-focused conference &amp; hackathon happening
          in Mumbai from 8–9 September 2026.
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
