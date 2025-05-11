"use client";

import Image from "next/image";
import HeroImage from "../../../../../public/assets/static/hero-image.png";
import { useRef, useEffect } from "react";
import { animate, stagger, hover } from "motion";
import { splitText } from "motion-plus";
import * as motion from "motion/react-client";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
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
      className="w-full min-h-dvh h-auto flex lg:flex-row flex-col gap-y-10 dark:text-white relative items-center py-20 justify-center"
      ref={ref}
    >
      <div className="lg:max-w-1/2 flex-col lg:order-1 order-2">
        <h1 className="lg:text-5xl md:text-5xl text-4xl font-bold break-keep leading-14">Atur Kalori, Wujudkan Gaya Hidup Sehat bersama Calorix</h1>
        <p className="lg:text-xl md:text-lg text-md mt-5">
          Kami siap membantu anda dengan bantuan AI <br />dan para aoohli di bidangnya
        </p>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            scale: { visualDuration: 0.4, bouncing: 0.2 },
          }}
          className="flex lg:flex-row md:flex-row flex-col gap-3 mt-15"
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
        className="w-max flex lg:ms-auto rounded-lg overflow-hidden drop-shadow-2xl/40 lg:order-2 order-1 lg:w-1/2 md:max-w-[500px] max-w-[300px] w-full "
      >
        <Image src={HeroImage} alt={"Hero Image"} width={500} height={500} />
      </motion.div>
    </div>
  );
}
