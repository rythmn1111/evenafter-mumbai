import Image from "next/image";

import logoIllustrated from "@/assets/ethmumbai-logo-illustrated.svg";
import xWhite from "@/assets/x-white.png";
import telegramWhite from "@/assets/telegram-white.png";

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#E2231A] pt-5 px-6 sm:px-8 lg:px-12 text-[14px] leading-6 ">
      <div className="flex flex-col sm:flex-row sm:justify-between gap-6 w-full py-5">
        <div className="sm:w-1/2 w-full text-white p-4 font-medium">
          <Image
            src={logoIllustrated}
            alt="Twitter"
            width={200}
            height={100}
            className="block"
          />
          <div className="flex flex-col gap-3 mt-6 items-stretch">
            <h2 className=" flex-1 text-2xl">BEST Conference &amp; Hackathon</h2>
            <p className=" font-medium text-lg">8 - 9 September 2026</p>
          </div>
        </div>

        <div className="flex flex-col xl:gap-30 xl:px-10 2xl:gap-40 2xl:px-20 md:gap-10 md:px-5 gap-5">
          <div className="p-4  text-white">
            <div className="mt-6 flex flex-col gap-3 font-light">
              <a
                href="https://www.mumbaiblockchainweek.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-[#E2231A] text-white font-light w-fit hover:underline"
              >
                Mumbai Blockchain Week
              </a>
              <a
                href="https://drive.google.com/drive/folders/1Pz_gd9-Nqy8ol9t1vuDiGK7mOTf4wtJs"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-[#E2231A] text-white font-light w-fit hover:underline"
              >
                Brand Kit
              </a>
              <a
                href="https://2024.ethmumbai.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-[#E2231A] text-white font-light w-fit hover:underline"
              >
                EVENAFTER MUMBAI 2024
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 px-4 border-t flex flex-col sm:flex-row items-center sm:items-start justify-between gap-5 pb-10">
        <div className="flex flex-row items-center">
          <p className="text-medium text-white text-[14px] leading-6 text-center">
            All EVENAFTER MUMBAI conference tickets are
            <br className="md:block sm:hidden" /> non-cancellable, and
            non-refundable.
          </p>
        </div>
        <div className="flex flex-row items-center">
          <p className="text-medium text-white text-[14px] leading-6 text-center">
            © 2026 EVENAFTER MUMBAI. All rights reserved.
          </p>
        </div>
        <div className="flex gap-5">
          <a
            href="https://x.com/ethmumbai"
            target="_blank"
            rel="noopener noreferrer"
            className="group w-10 h-10 bg-[#E2231A] border-2 border-transparent flex items-center justify-center transition-all duration-300 ease-in-out "
          >
            <Image
              src={xWhite}
              alt="Twitter"
              width={20}
              height={20}
              className="block"
            />
          </a>
          <a
            href="https://t.me/ethmumbai"
            target="_blank"
            rel="noopener noreferrer"
            className="group w-10 h-10 bg-[#E2231A] border-2 border-transparent flex items-center justify-center  transition-all duration-300 ease-in-out"
          >
            <Image
              src={telegramWhite}
              alt="Twitter"
              width={20}
              height={20}
              className="block"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
