import MemberGrid from "./MemberGrid";
import { team } from "@/data/team";

export default function Team() {
  return (
    <section
      id="conference-speakers"
      className="w-full bg-white py-10 px-4 sm:px-6 lg:px-8"
    >
      <p className="text-center text-black text-sm font-medium mb-2">
        Built With Love By
      </p>
      <h2 className="text-black text-4xl pb-3 sm:text-5xl md:text-6xl lg:text-6xl font-[MPlusRounded1c] tracking-tighter font-medium text-center mb-8">
        EVENAFTER MUMBAI Mitra Mandal
      </h2>

      <MemberGrid members={team} />

      <a
        href="https://docs.fileverse.io/0xe59f51d0fd360e0dc5c73f17d2cfaf314244bbb8/0#key=e-MSDsPvPh4H92CVFBCrivuIo6kqqsDT31ZcdqwBEcW3baeCn_vL4-F55ca08Tkc"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="flex justify-center">
          <button className="bg-[#D63A2F] text-white text-lg md:text-xl px-10 py-3 rounded-xl cursor-pointer transition-all duration-200 hover:opacity-90 hover:scale-105 hover:shadow-lg">
            About Us
          </button>
        </div>
      </a>
    </section>
  );
}
