"use client";

import {
  Activity,
  Gauge,
  Check,
  SquareChartGantt,
  ScanQrCode,
} from "lucide-react";

interface IProps {
  link: string;
  title: string;
  description: string;
  imgName: string;
  icon: typeof Gauge;
}

export default function FeatureOne() {
  const features: IProps[] = [
    {
      link: "/pages/user/dashboard",
      title: "Dashboard Monitoring",
      description:
        "Fitur untuk memantau aktivitas harian anda dalam satu halaman",
      imgName: "dashboard-page.png",
      icon: Gauge,
    },
    {
      link: "/pages/user/activity",
      title: "Daftar Aktivitas",
      description: "Fitur untuk melihat daftar aktivitas yang telah anda buat",
      imgName: "create-activity.png",
      icon: Activity,
    },
    {
      link: "/pages/user/consultation",
      title: "Calorix Assist",
      description:
        "Fitur untuk konsultasi kesehatan dengan Calorix ChatBot Assistant",
      imgName: "consultation-page.png",
      icon: Check,
    },
    {
      link: "/pages/user/manage",
      title: "Akun dan Karakteristik",
      description: "Fitur untuk mengelola akun dan karakteristik tubuh anda",
      imgName: "account-management.png",
      icon: SquareChartGantt,
    },
    {
      link: "/pages/scan",
      title: "Food Nutrition Scanner",
      description:
        "Fitur untuk memindai makanan dan mendapatkan informasi nutrisinya",
      imgName: "nutriscan.png",
      icon: ScanQrCode,
    },
  ];

  return (
    <div
      className="w-full min-h-screen flex flex-col items-center justify-center py-20 px-6"
      id="features"
    >
      {/* Header Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-6">
          Kenalin Fitur - Fitur <span className="text-orange-500">Calorix</span>
        </h1>
        <p className="text-gray-600 text-lg mb-2 max-w-2xl mx-auto">
          Calorix membantu pengguna mengetahui kebutuhan kalori harian hanya
          dengan memasukkan data pribadi.
        </p>
      </div>

      {/* Features Layout */}
      <div className="w-full max-w-7xl">
        {/* Top Row - 2 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 relative">
          {/* Featured Card - Orange Border */}
          {features.slice(0, 2).map((feature, index) => (
            <div
              className="bg-white rounded-2xl p-8 shadow-lg border-2 hover:border-orange-500 hover:shadow-xl transition-shadow duration-300 hover:rotate-[-3deg] hover:scale-105 transition-all"
              key={index}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mr-4">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <feature.icon className="text-white" />
                    {/* <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z" /> */}
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800">
                  {feature.title}
                </h3>
              </div>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Bottom Row - 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.slice(2, 4).map((feature, index) => (
            <div
              className={`bg-white rounded-2xl p-8 shadow-lg border-2 hover:border-orange-500 hover:shadow-xl transition-shadow duration-300 hover:rotate-[-3deg] hover:scale-105 transition-all`}
              key={index}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mr-4">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <feature.icon className="text-white" />
                    {/* <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z" /> */}
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800">
                  {feature.title}
                </h3>
              </div>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
          {features[4] && (
            <div
              className={`bg-white rounded-2xl p-8 shadow-lg border-2 hover:border-orange-500 hover:shadow-xl transition-shadow duration-300 hover:rotate-[-3deg] hover:scale-105 transition-all md:col-span-2 lg:col-span-1`}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mr-4">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <ScanQrCode className="text-white" />
                    {/* <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z" /> */}
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800">
                  {features[4].title}
                </h3>
              </div>
              <p className="text-gray-600">{features[4].description}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
