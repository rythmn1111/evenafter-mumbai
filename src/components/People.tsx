import Image from "next/image";

import { homeSpeakers, type Person } from "@/data/speakers";

function Avatar({ person }: { person: Person }) {
  return (
    <div className="w-[150px] h-[150px] sm:w-40 sm:h-40 lg:w-[150px] lg:h-[150px] rounded-4xl border-[5px] border-[#EBEBEB] bg-[#E2231A] overflow-visible relative ">
      <Image
        src={person.image}
        alt={person.name}
        width={150}
        height={185}
        className={`absolute bottom-0 left-[50%] -translate-x-1/2 object-cover rounded-3xl ${person.imageScale || "h-[118%]"}`}
        style={{
          width: "112%",
          objectPosition: "center 30%",
          borderBottomLeftRadius: "28px",
        }}
      />
      <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-10" />
      </div>
    </div>
  );
}

export default function People() {
  return (
    <section className="w-full bg-[#FFD600] py-10 px-4 sm:px-6 lg:px-8">
      <h2 className="text-black text-4xl mb-6 sm:text-5xl md:text-6xl lg:text-6xl font-[MPlusRounded1c] tracking-tighter font-medium text-center mb-8">
        Judges and Speaker @ EVENAFTER MUMBAI
      </h2>

      <div
        className="
          px-4 sm:px-8 lg:px-12
          grid
          grid-cols-2
          sm:grid-cols-3
          md:grid-cols-4
          lg:grid-cols-8
          justify-items-center
          gap-6 sm:gap-8 md:gap-10
          mb-12
          mx-auto
          max-w-[1600px]
        "
      >
        {homeSpeakers.map((person, index) => (
          <div
            key={index}
            className="flex flex-col items-center w-[150px] sm:w-40 lg:w-[150px] "
          >
            <div className="relative w-[150px] sm:w-40 lg:w-[150px] mb-3 pt-3 group">
              {person.xLink ? (
                <a
                  href={person.xLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer group"
                >
                  <Avatar person={person} />
                </a>
              ) : (
                <div className="cursor-default group">
                  <Avatar person={person} />
                </div>
              )}
            </div>
            <h3 className="text-[16px] leading-6 tracking-[-0.31px] text-[#0A0A0A] text-center mb-1">
              {person.name}
            </h3>
            <p className="text-[14px] leading-5 tracking-[-0.015px] text-[#575757] text-center">
              {person.company}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
