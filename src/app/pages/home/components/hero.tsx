"use client";

import Image from "next/image";
import { useRef, useEffect } from "react";
import { animate, stagger, hover } from "motion";
import { splitText } from "motion-plus";
import * as motion from "motion/react-client";
import { useRouter } from "next/navigation";
import { ArrowUpNarrowWide, Camera, Check } from "lucide-react";

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

  const router = useRouter()

  return (
    <section className="relative w-full min-h-screen overflow-hidden mt-20" ref={ref}>
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/assets/static/images/hero-img.png" 
          alt="Hero Background"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex items-center justify-between min-h-screen px-6 lg:px-16 xl:px-24">
        {/* Left Content */}
        <div className="flex-1 max-w-2xl text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Atur Kalori, Wujudkan Gaya Hidup Sehat Bersama Calorix!
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-200 leading-relaxed">
            Ini adalah paragraf Ini adalah paragraf Ini adalah paragrafini adalah paragrafini adalah paragrafini adalah paragrafini adalah paragraf
          </p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1,
              scale: { visualDuration: 0.4, bouncing: 0.2 },
            }}
          >
            <button
              className="bg-white text-orange-600 transition-colors duration-300 py-4 px-8 font-bold rounded-xl text-xl shadow-2xl"
              id="heroBtn"
              onClick={() => {router.push(`/pages/user/dashboard`)}}
            >
              Get Started
            </button>
          </motion.div>
        </div>

        {/* Right Content - Feature Cards */}
        <div className="hidden lg:flex flex-col relative space-y-6 ml-8">
          {/* Pantau Kalori Card */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="bg-[#8B8B8B]/20 backdrop-blur-sm rounded-2xl p-6 shadow-xl min-w-[280px] xl:-mt-30 mt-0"
          >
              <div className="flex items-center space-x-3 relative">
              <div className="w-6 h-6 bg-orange-500 rounded-full absolute -top-8 -left-8"></div>
              <ArrowUpNarrowWide className="text-white" />
              <span className="text-white font-semibold text-lg">Pantau kalori</span>
            </div>
          </motion.div>

          {/* Cek Progress Card */}
          <div className="relative xl:mt-30 mt-0">
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="bg-[#8B8B8B]/20 backdrop-blur-sm rounded-2xl p-6 shadow-xl w-full absolute xl:right-70 right-0 "
          >
            <div className="flex items-center space-x-3 relative">
              <div className="w-6 h-6 bg-orange-500 rounded-full absolute -top-8 -left-8"></div>
              <Camera className="text-white" />
              <span className="text-white font-semibold text-lg">Cek Progress</span>
            </div>
          </motion.div>
        </div>

          {/* Buat Goals Card */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="bg-[#8B8B8B]/20 backdrop-blur-sm rounded-2xl p-6 shadow-xl min-w-[280px] xl:mt-25 mt-20"
          >
             <div className="flex items-center space-x-3 relative">
              <div className="w-6 h-6 bg-orange-500 rounded-full absolute -top-8 -left-8"></div>
              <Check className="text-white" />
              <span className="text-white font-semibold text-lg">Buat Goals</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Mobile Feature Cards */}
      <div className="lg:hidden relative z-10 px-6 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg"
          >
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
              <span className="text-gray-800 font-semibold">Pantau kalori</span>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg"
          >
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
              <span className="text-gray-800 font-semibold">Cek Progress</span>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg"
          >
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
              <span className="text-gray-800 font-semibold">Buat Goals</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
