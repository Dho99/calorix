"use client";

import Image from "next/image";
import HeroImage from "../../../../../public/assets/static/hero-image.png";
import { useRef, useEffect } from "react";
import { animate, stagger, hover } from "motion";
import { splitText } from "motion-plus";
import { useTime } from "motion/react";
import * as motion from "motion/react-client";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const time = useTime();
  useEffect(() => {
    document.fonts.ready.then(() => {
      if (!ref.current) return;

      ref.current.style.visibility = "visible";

      const { words } = splitText(
        ref.current.querySelector("h1")! as HTMLElement
      );
      const { words: pWords } = splitText(
        ref.current.querySelector("p")! as HTMLElement
      );

      animate(
        pWords,
        { opacity: [0, 1], y: [10, 0] },
        {
          type: "spring",
          duration: 4,
          bounce: 0,
          delay: stagger(0.05),
        }
      );

      animate(
        words,
        { opacity: [0, 1], y: [10, 0] },
        {
          type: "spring",
          duration: 4,
          bounce: 0,
          delay: stagger(0.05),
        }
      );

      const button = document.querySelectorAll("#heroBtn")!;

      hover(button, (element) => {
        animate(element, {y: -10}, { duration: 0.2 });

        return () => animate(element, { y: 0 }, { duration: 0.2 });
      });
    });
  }, []);

  return (
    <div
      className="w-full min-h-dvh h-auto flex lg:flex-row flex-col gap-y-10 bg-[#092635] text-white relative items-center py-20 px-20"
      ref={ref}
    >
      <div className="lg:max-w-xl flex-col lg:order-1 order-2">
        <h1 className="lg:text-5xl text-7xl font-bold">Solusi dalam Merencanakan diet</h1>
        <p className="lg:text-lg text-2xl mt-5">
          Kami siap membantu anda dengan bantuan AI dan juga para ahli di
          bidangnya
        </p>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            scale: { visualDuration: 0.4, bouncing: 0.2 },
          }}
          // style={ball}
          className="flex flex-row gap-x-3 mt-15"
        >
          <button
            className="bg-[#5C8374] py-3 px-10 text-white font-bold rounded-lg  text-xl shadow-xl"
            id="heroBtn"
          >
            Get Started
          </button>
          <button
            className="bg-[#5C8374] py-3 px-10 text-white font-bold rounded-lg text-xl shadow-xl"
            id="heroBtn"
          >
            See FAQ
          </button>
        </motion.div>
      </div>
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: [0, -10, 0] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "loop",
        }}
        className="w-max flex lg:ms-auto mx-auto rounded-lg overflow-hidden drop-shadow-2xl/40 lg:order-2 order-1"
      >
        <Image src={HeroImage} alt={"Hero Image"} width={500} height={500} />
      </motion.div>
    </div>
  );
}
