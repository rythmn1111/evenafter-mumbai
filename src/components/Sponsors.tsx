"use client";

import Image from "next/image";

import { currentSponsors, type Org } from "@/data/sponsors";

const TIER_STYLES = {
  one: {
    card: "w-full max-w-[300px] sm:max-w-[400px] aspect-[2.8/1]",
    imagePadding: "p-7 sm:p-10",
  },
  two: {
    card: "w-full max-w-[260px] sm:max-w-[320px] aspect-[2.6/1]",
    imagePadding: "p-6 sm:p-8",
  },
  three: {
    card: "w-full max-w-[210px] sm:max-w-[270px] aspect-[2.3/1]",
    imagePadding: "p-6 sm:p-7",
  },
  four: {
    card: "w-full max-w-[170px] sm:max-w-[210px] aspect-[2.1/1]",
    imagePadding: "p-5 sm:p-7",
  },
} as const;

type Tier = keyof typeof TIER_STYLES;

export default function Sponsors({
  sponsors = currentSponsors,
}: {
  sponsors?: Org[];
}) {
  const grouped: Record<Tier, Org[]> = { one: [], two: [], three: [], four: [] };
  sponsors.forEach((sponsor) => {
    grouped[(sponsor.tier ?? "three") as Tier].push(sponsor);
  });

  return (
    <section className="bg-[#3FA9F5] w-full py-10">
      <div className="flex justify-center pb-10">
        <h2 className="text-white text-4xl sm:text-5xl md:text-6xl tracking-tighter font-[MPlusRounded1c] font-medium">
          Sponsors
        </h2>
      </div>

      <div className="flex flex-col items-center space-y-12 md:space-y-8">
        {(Object.keys(grouped) as Tier[]).map((tier) => {
          const items = grouped[tier];
          const styles = TIER_STYLES[tier];

          if (!items.length) return null;

          return (
            <div key={tier} className="w-full max-w-[1400px] px-6 sm:px-12 lg:px-24">
              <div
                className={`
                  flex flex-col items-center gap-6

                  sm:grid
                  sm:justify-items-center
                  ${tier === "one" ? "sm:grid-cols-1" : tier === "two" || tier === "three" ? "sm:grid-cols-2" : "sm:grid-cols-3"}

                  lg:flex
                  lg:flex-row
                  lg:items-center
                  lg:justify-center

                  ${tier === "one" ? "lg:gap-16" : tier === "two" ? "lg:gap-12" : tier === "three" ? "lg:gap-8" : "lg:gap-6"}
                `}
              >
                {items.map((sponsor, index) => (
                  <div
                    key={index}
                    onClick={() =>
                      sponsor.twitter && window.open(sponsor.twitter, "_blank")
                    }
                    className={`
                      relative
                      ${styles.card}
                      rounded-[10px]
                      overflow-hidden
                      cursor-pointer
                      bg-[url('/assets/sponsors/sponsors-card.png')]
                      bg-cover
                      bg-center
                      hover:scale-105
                      transition-transform duration-200
                    `}
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Image
                        src={sponsor.logo}
                        alt={sponsor.name}
                        fill
                        className={`object-contain ${styles.imagePadding}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
