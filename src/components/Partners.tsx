"use client";

import Image from "next/image";

import { partners } from "@/data/partners";

export default function Partners() {
  const total = partners.length;
  const remainder = total % 5;
  const fullRowCount = remainder === 0 ? total : total - remainder;

  return (
    <section className="bg-white w-full pt-10 pb-15">
      <div className="flex pb-6 items-center justify-center w-full">
        <h2 className="text-black text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-[MPlusRounded1c] tracking-tighter font-medium text-center mb-8">
          Friends of EVENAFTER MUMBAI
        </h2>
      </div>

      <div
        className="
    max-w-[1600px] mx-auto
    px-3 sm:px-6 md:px-10 lg:px-12 xl:px-16 2xl:px-20
    grid
    grid-cols-1
    sm:grid-cols-2
    lg:grid-cols-5
    justify-items-center sm:justify-items-stretch
    gap-x-10 gap-y-10
  "
      >
        {partners.map((partner, index) => {
          const isLastRow = index >= fullRowCount;

          return (
            <div
              key={index}
              onClick={() =>
                partner.twitter && window.open(partner.twitter, "_blank")
              }
              className={`
                relative
                h-[107px]
                flex items-center justify-center
                px-6
                w-[75%] sm:w-full
                bg-[#F9FAFB]
                border-[2.8px] border-[#E5E7EB]
                rounded-[29px]
                cursor-pointer
                transition-transform duration-200 hover:scale-105
                ${isLastRow && remainder === 3 && index === fullRowCount ? "lg:col-start-2" : ""}
              `}
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                fill
                className="object-contain p-5"
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}
