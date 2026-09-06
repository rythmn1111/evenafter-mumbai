"use client";

import { useLayoutEffect, useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { Calendar } from "lucide-react";

import RegistrationsClosed from "./RegistrationsClosed";
import cityscape from "@/assets/cityscape-cropped.png";
import road from "@/assets/road-cropped.png";
import bus from "@/assets/bus-cropped.png";

type Device = "mobile" | "tablet" | "desktop";

export default function Hero() {
  const [device, setDevice] = useState<Device>("desktop");
  const [isShort, setIsShort] = useState(false);

  useLayoutEffect(() => {
    const update = () => {
      const width = window.innerWidth;
      const height = window.visualViewport?.height || window.innerHeight;

      if (width < 640) setDevice("mobile");
      else if (width < 1024) setDevice("tablet");
      else setDevice("desktop");

      setIsShort(height < 700);
    };

    update();
    window.visualViewport?.addEventListener("resize", update);
    window.addEventListener("orientationchange", update);

    return () => {
      window.visualViewport?.removeEventListener("resize", update);
      window.removeEventListener("orientationchange", update);
    };
  }, []);

  const busInitialX = () =>
    device === "mobile"
      ? "calc(50vw + 100%)"
      : device === "tablet"
        ? "calc(60vw + 100%)"
        : "calc(50vw + 100%)";

  const busInitialY = () =>
    device === "mobile" ? -350 : device === "tablet" ? 20 : 40;

  const busInitialScale = () =>
    device === "mobile" || device === "tablet" ? 0.2 : 0.1;

  const busBottom = () =>
    device === "mobile" ? "45px" : device === "tablet" ? "60px" : "95px";

  return (
    <section className="relative flex min-h-screen h-[100svh] justify-center overflow-hidden bg-[#E2231A] text-white">
      <div
        className="absolute z-20 left-1/2 -translate-x-1/2 flex flex-col items-center w-full px-4
                      max-w-[95%] sm:max-w-[85%] md:max-w-[70%] lg:max-w-[60%]"
        style={{
          bottom:
            device === "mobile"
              ? isShort
                ? "44%"
                : "48%"
              : device === "tablet"
                ? isShort
                  ? "46%"
                  : "50%"
                : isShort
                  ? "48%"
                  : "52%",
        }}
      >
        <h1
          className="font-[MPlusRounded1c] font-extrabold tracking-[-0.05em]
                       text-[4rem] sm:text-[5.8rem] md:text-[5rem] lg:text-[6rem] leading-[1.05]"
        >
          EVENAFTER MUMBAI
        </h1>
        <p className="mt-[1rem] font-semibold text-lg sm:text-xl md:text-2xl lg:text-2xl text-gray-100">
          BEST Conference and Mini Hackathon
        </p>
        <div className="mt-[1.2rem] flex items-center gap-2 text-md sm:text-lg md:text-xl text-gray-100">
          <a
            title="Add to Calendar"
            target="_blank"
            rel="noopener noreferrer"
            href="https://calendar.google.com/calendar/?cid=Y180OTNlNmQ3YWRlYzIyMTA0NGE5OWYwOTY4MGVlMzZjZTZlOTkyYjA4ZWM3OTljZDVjMTQ3YzU3MzZiNDA1YjRkQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20"
          >
            <Calendar className="w-5 h-5 cursor-pointer" />
          </a>
          <span>8 – 9 September 2026</span>
        </div>
        <div className="mt-[1.5rem] sm:mt-[2rem] flex flex-col sm:flex-row items-center gap-5 sm:gap-4">
          <RegistrationsClosed />
        </div>
      </div>

      <motion.div
        className="absolute left-0 w-full pointer-events-none"
        animate={{ y: isShort ? 80 : 0 }}
        transition={{ duration: 0 }}
        style={{
          bottom:
            device === "mobile" ? "70px" : device === "tablet" ? "20px" : "0px",
        }}
      >
        <div className="relative w-full ">
          <Image
            src={cityscape}
            alt="Cityscape"
            unoptimized
            priority
            width={2000}
            height={600}
            sizes="(max-width: 640px) 1500px, (max-width: 1024px) 1800px, 2000px"
            className="w-full h-auto block origin-bottom transition-transform duration-300"
            style={{
              transform:
                device === "mobile"
                  ? "translateY(-50px)"
                  : device === "tablet"
                    ? "scale(1.2) translateY(-30px)"
                    : "scale(1) translateY(0px)",
            }}
          />
          <Image
            src={road}
            alt="Road"
            unoptimized
            priority
            width={2000}
            height={600}
            sizes="(max-width: 640px) 1500px, 
            (max-width: 1024px) 1800px,
            2000px"
            className="
              w-full h-auto block
              scale-[1.2]
              sm:scale-[1.3]
              md:scale-[1.1]
              lg:scale-[1]
              origin-bottom
              -translate-y-5
              transition-transform duration-300
            "
          />
          <motion.div
            className="absolute left-1/2 -translate-x-1/2"
            style={{ bottom: busBottom() }}
            initial={{
              x: busInitialX(),
              y: busInitialY(),
              scale: busInitialScale(),
              opacity: 0.8,
              rotate: 0,
            }}
            animate={{ x: 0, y: 0, scale: 1, opacity: 1 }}
            transition={{ duration: 3.5, ease: "easeOut", delay: 0 }}
          >
            <Image
              src={bus}
              alt="Bus"
              unoptimized
              className="
                w-auto h-auto
                scale-[1.1]
                sm:scale-[1.1]
                md:scale-[1]
                lg:scale-[0.6]
                origin-bottom
                transition-transform duration-300
              "
            />
          </motion.div>
        </div>
      </motion.div>

      <motion.img
        src="/assets/hero/balloon.svg"
        alt="Balloon"
        className="absolute z-[5] pointer-events-none select-none"
        style={{
          left:
            device === "mobile" ? "2vw" : device === "tablet" ? "6vw" : "22vw",
          top:
            device === "mobile"
              ? isShort
                ? "58vh"
                : "46vh"
              : device === "tablet"
                ? isShort
                  ? "52vh"
                  : "40vh"
                : isShort
                  ? "50vh"
                  : "38vh",
          width:
            device === "mobile" ? "35vw" : device === "tablet" ? "25vw" : "18vw",
        }}
        animate={{ translateY: [0, -12, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.img
        src="/assets/hero/plane.svg"
        alt="Plane"
        className="absolute w-auto h-auto z-[5] pointer-events-none select-none"
        style={{
          right: device === "desktop" ? "7vw" : "1vw",
          width:
            device === "mobile" ? "45vw" : device === "tablet" ? "30vw" : "20vw",
        }}
        initial={{
          y:
            device === "mobile"
              ? isShort
                ? "82vh"
                : "70vh"
              : device === "tablet"
                ? isShort
                  ? "67vh"
                  : "55vh"
                : isShort
                  ? "62vh"
                  : "50vh",
          x: -80,
          opacity: 0,
        }}
        animate={{
          y:
            device === "mobile"
              ? isShort
                ? "62vh"
                : "50vh"
              : device === "tablet"
                ? isShort
                  ? "57vh"
                  : "45vh"
                : isShort
                  ? "54vh"
                  : "42vh",
          x: 0,
          opacity: 1,
        }}
        transition={{ duration: 4, ease: "easeOut" }}
      />

      <motion.img
        src="/assets/hero/cloud-left.svg"
        alt="Cloud"
        className="absolute w-auto h-auto z-[5] pointer-events-none select-none"
        style={{
          left:
            device === "mobile" ? "5vw" : device === "tablet" ? "8vw" : "16vw",
          top:
            device === "mobile"
              ? isShort
                ? "68vh"
                : "55vh"
              : device === "tablet"
                ? isShort
                  ? "60vh"
                  : "48vh"
                : isShort
                  ? "58vh"
                  : "44vh",
          width:
            device === "mobile" ? "35vw" : device === "tablet" ? "25vw" : "18vw",
        }}
        animate={{ translateX: [0, 10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.img
        src="/assets/hero/cloud-right.svg"
        alt="Cloud"
        className="absolute w-auto h-auto pointer-events-none select-none"
        style={{
          right:
            device === "mobile" ? "5vw" : device === "tablet" ? "18vw" : "25vw",
          top:
            device === "mobile"
              ? isShort
                ? "72vh"
                : "58vh"
              : isShort
                ? "60vh"
                : "48vh",
          width:
            device === "mobile" ? "35vw" : device === "tablet" ? "30vw" : "15vw",
        }}
        animate={{ translateX: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
    </section>
  );
}
