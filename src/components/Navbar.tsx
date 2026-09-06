"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

import logo from "@/assets/ethmumbai-logo.svg";
import xWhite from "@/assets/x-white.png";
import telegramWhite from "@/assets/telegram-white.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  return (
    <nav className="fixed left-0 w-full h-16 bg-white/80 border-b border-gray-200 backdrop-blur-md z-50 box-border">
      <div className="mx-auto flex items-center justify-between h-full px-4 sm:px-6 md:px-8">
        <Link href="/">
          <Image src={logo} alt="EVENAFTER MUMBAI Logo" width={128} height={40} />
        </Link>

        <div className="hidden md:flex items-center gap-6 lg:gap-8 text-sm lg:text-base font-medium text-gray-800">
          <span>Conference</span>
          <span>Hackathon</span>
        </div>

        <div className="hidden md:flex items-center gap-4 lg:gap-6">
          <div className="flex flex-row items-center gap-3 sm:gap-4">
            <div
              className="w-10 h-10 bg-[#E2231A] rounded-full flex items-center justify-center shadow-md 
                border-2 border-transparent"
            >
              <Image
                src={xWhite}
                alt="Twitter"
                width={20}
                height={20}
              />
            </div>
            <div
              className="w-10 h-10 bg-[#E2231A] rounded-full flex items-center justify-center shadow-md 
                border-2 border-transparent"
            >
              <Image
                src={telegramWhite}
                alt="Telegram"
                width={20}
                height={20}
              />
            </div>
          </div>
        </div>

        <button
          onClick={() => setOpen(true)}
          className="md:hidden p-2 text-black"
        >
          <Menu size={22} />
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 bg-white z-[100] flex flex-col min-h-screen">
          <div className="flex items-center justify-between px-4 pt-4 bg-white">
            <Image src={logo} alt="EVENAFTER MUMBAI Logo" width={120} height={40} />
            <button onClick={() => setOpen(false)} className="p-2 text-[#E2231A]">
              <X size={26} />
            </button>
          </div>

          <div className="flex flex-col items-center justify-center gap-10 flex-1 bg-white">
            <span className="bg-[#D63A2F] text-white text-xl px-12 py-4 rounded-full">
              Conference
            </span>
            <span className="bg-[#D63A2F] text-white text-xl px-12 py-4 rounded-full">
              Hackathon
            </span>
          </div>

          <div className="flex items-center justify-center gap-6 pb-10 bg-white">
            <div
              className="w-12 h-12 bg-[#E2231A] rounded-full flex items-center justify-center shadow-md 
          border-2 border-transparent"
            >
              <Image
                src={xWhite}
                alt="Twitter"
                width={24}
                height={24}
              />
            </div>
            <div
              className="w-12 h-12 bg-[#E2231A] rounded-full flex items-center justify-center shadow-md 
          border-2 border-transparent"
            >
              <Image
                src={telegramWhite}
                alt="Telegram"
                width={24}
                height={24}
              />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
