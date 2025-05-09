"use client";

import * as motion from "motion/react-client";

export default function FeatureOne() {
  const features = [
    {
      link: "#",
      title: "Feature 1",
      description: "Description of feature 1",
    },
    {
      link: "#",
      title: "Feature 2",
      description: "Description of feature 1",
    },
    {
      link: "#",
      title: "Feature 3",
      description: "Description of feature 1",
    },
  ];

  return (
    <div
      className="w-full h-[dvh] flex flex-row bg-[#092635] text-white relative py-15 px-20 items-center justify-center"
      id="features"
    >
      <div className="flex flex-col">
        <p className="text-4xl font-bold text-center">
          Beberapa Fitur Menarik yang Bisa Anda Coba{" "}
        </p>
        <div className="flex lg:flex-row flex-col gap-10 grid-cols-1 justify-evenly items-center w-full py-15">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-slate-300 h-72 lg:w-72 w-3/4 w-full rounded-lg p-3 shadow-lg"
              whileHover={{ rotate: 10 }}
            >
              <a href={feature.link} className="text-center">
                <p className="text-xl font-bold">{feature.title}</p>
                <p>{feature.description}</p>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
