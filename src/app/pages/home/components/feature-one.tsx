"use client";

import Image from "next/image";
import Link from "next/link";

export default function FeatureOne() {
  const features = [
    {
      link: "/pages/user/dashboard",
      title: "Dashboard Monitoring",
      description: "Fitur untuk memantau aktivitas harian anda dalam satu halaman",
      imgName: "dashboard-page.png",
    },
    {
      link: "/pages/user/activity",
      title: "Daftar Aktivitas",
      description: "Fitur untuk melihat daftar aktivitas yang telah anda buat",
      imgName: "create-activity.png",
    },
    {
      link: "/pages/user/consultation",
      title: "Calorix Assist",
      description: "Fitur untuk konsultasi kesehatan dengan Calorix ChatBot Assistant",
      imgName: "consultation-page.png",
    },
    {
      link: "/pages/user/manage",
      title: "Akun dan Karakteristik",
      description: "Fitur untuk mengelola akun dan karakteristik tubuh anda",
      imgName: "account-management.png",
    },
    {
      link: "/pages/scan",
      title: "Food Nutrition Scanner",
      description: "Fitur untuk memindai makanan dan mendapatkan informasi nutrisinya",
      imgName: "nutriscan.png",
    },
  ];

  return (
    <div
      className="w-full h-[dvh] flex flex-row dark:text-white relative py-15 items-center justify-center"
      id="features"
    >
      <div className="flex flex-col">
        <p className="text-4xl font-bold text-center">
          Fitur - Fitur Calorix
        </p>
        <p className="text-center text-lg mt-5">
          Calorix memiliki fitur yang sangat membantu dalam mengelola
          aktivitas sehari-hari
        </p>
        <div className="flex w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mt-10 justify-center items-center gap-10">
          {features.slice(0,3).map((feature, index) => (
            <Link
              key={index}
              href={feature.link}
              className={`h-full lg:w-72 w-3/4 w-full rounded-lg p-3 shadow-lg flex flex-col gap-5 dark:bg-white/20 bg-black/10 ${index === 2 ? 'lg:col-span-1 md:col-span-2 col-span-1' : ''}`}
            >
              <div className="flex justify-center">
                <Image
                  src={`/assets/static/images/${feature.imgName}`}
                  alt={feature.title}
                  width={500}
                  height={500}
                  quality={100}
                  className="rounded-lg"
                />
              </div>
              <div className="text-center flex flex-col gap-2 dark:bg-black/20 bg-black/10 py-3 rounded-lg">
                <p className="text-xl font-bold">{feature.title}</p>
                <p className="text-base">{feature.description}</p>
              </div>
            </Link>
          ))}
          <div className="lg:col-span-3 md:col-span-2 w-full lg:flex lg:flex-row grid md:grid-cols-2 grid-cols-1 flex gap-10 justify-center items-center">
          {features.slice(3).map((feature, index) => (
            <Link
              key={index}
              href={feature.link}
              className="h-full lg:w-72 w-full rounded-lg p-3 shadow-lg flex flex-col gap-5 dark:bg-white/20 bg-black/10"
            >
              <div className="flex justify-center">
                <Image
                  src={`/assets/static/images/${feature.imgName}`}
                  alt={feature.title}
                  width={500}
                  height={500}
                  quality={100}
                  className="rounded-lg"
                />
              </div>
              <div className="text-center flex flex-col gap-2 dark:bg-black/20 bg-black/10 py-3 rounded-lg">
                <p className="text-xl font-bold">{feature.title}</p>
                <p className="text-base">{feature.description}</p>
              </div>
            </Link>
          ))}
          </div>
        </div>
      </div>
    </div>
  );
}
