"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

type FAQProps = {
  title: string;
  content: string;
};

export default function FAQ() {
  const [openFAQ, setOpenFAQ] = useState<number>(0); // First item open by default
  // const [searchQuery, setSearchQuery] = useState("");

  const faqs: FAQProps[] = [
    {
      title: " Apa itu kalori dan mengapa penting untuk manajemen berat badan?",
      content: "Kalori adalah satuan energi yang didapatkan dari makanan dan minuman. Tubuh menggunakan kalori untuk menjalankan fungsi-fungsi vital seperti bernapas, berpikir, dan bergerak. Mengetahui asupan kalori membantu kita menjaga keseimbangan energi agar berat badan tetap ideal.",
    },
    {
      title: "Berapa banyak kalori yang saya butuhkan setiap hari?",
      content: "Kebutuhan kalori harian berbeda untuk tiap orang, tergantung usia, jenis kelamin, tingkat aktivitas fisik, dan tujuan (menurunkan, menaikkan, atau menjaga berat badan). Kalkulator kalori atau konsultasi dengan ahli gizi bisa membantu menentukan angka yang tepat.",
    },
    {
      title: "Apakah semua kalori sama?",
      content: "Secara energi, 1 kalori tetaplah 1 kalori. Namun, kualitas kalori berbeda tergantung sumbernya. Kalori dari sayuran, buah, dan protein memiliki nilai gizi lebih tinggi dibandingkan dari makanan tinggi gula dan lemak jenuh.",
    },
    {
      title: "Apakah saya harus menghitung kalori setiap hari?",
      content: "Tidak selalu. Menghitung kalori bisa membantu di awal untuk memahami pola makan, tapi seiring waktu, kamu bisa lebih fokus pada pola makan sehat dan mendengarkan sinyal lapar dan kenyang dari tubuhmu.",
    },
    {
      title: "Apakah aplikasi ini bisa membantu saya menghitung dan memantau asupan kalori?",
      content: "Ya! Website ini menyediakan fitur pelacakan makanan, kalkulator kalori, serta visualisasi aktivitas dan kalori terbakar untuk membantu kamu mencapai tujuan diet dengan lebih mudah.",
    },
    {
      title: "Apa itu BMI, BMR dan TDEE?",
      content: "BMI (Body Mass Index) adalah ukuran untuk menilai berat badan ideal berdasarkan tinggi badan. BMR (Basal Metabolic Rate) adalah jumlah kalori yang dibutuhkan tubuh saat istirahat. TDEE (Total Daily Energy Expenditure) adalah total kalori yang dibakar dalam sehari, termasuk aktivitas fisik.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? -1 : index);
  };

  // Filter FAQs based on search query
  // const filteredFAQs = faqs.filter(faq =>
  //   faq.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
  //   faq.content.toLowerCase().includes(searchQuery.toLowerCase())
  // );

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center py-20 px-6" id="faq">
      {/* Header Section */}
      <div className="text-center mb-12 max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-4">
          Frequently Asked <span className="text-orange-500">Questions</span>
        </h1>
        <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
          Calorix membantu pengguna mengetahui kebutuhan kalori harian hanya dengan 
          memasukkan data pribadi.
        </p>
        
        {/* Search Bar */}
        {/* <div className="relative max-w-md mx-auto">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Cari Pertanyaan"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
          />
        </div> */}
      </div>

      {/* FAQ Items */}
      <div className="w-full max-w-4xl space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full px-6 py-4 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors duration-200"
            >
              <h3 className="text-lg font-semibold text-left text-gray-800">
                {faq.title}
              </h3>
              <div className="flex-shrink-0 ml-4">
                {openFAQ === index ? (
                  <div className="w-8 h-8 rounded-full border-2 border-gray-400 flex items-center justify-center">
                    <Minus className="h-4 w-4 text-gray-600" />
                  </div>
                ) : (
                  <div className="w-8 h-8 rounded-full border-2 border-gray-400 flex items-center justify-center">
                    <Plus className="h-4 w-4 text-gray-600" />
                  </div>
                )}
              </div>
            </button>
            
            {openFAQ === index && (
              <div className="px-6 pb-4 bg-gray-50 border-t border-gray-200">
                <p className="text-gray-600 leading-relaxed pt-4">
                  {faq.content}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* No results message */}
      {/* {filteredFAQs.length === 0 && searchQuery && (
        <div className="text-center mt-8">
          <p className="text-gray-500">Tidak ada pertanyaan yang cocok dengan pencarian &quot;{searchQuery}&quot;</p>
        </div>
      )} */}
    </div>
  );
}
