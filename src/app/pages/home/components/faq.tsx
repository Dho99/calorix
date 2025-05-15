import Image from "next/image";
import FAQImage from "../../../../../public/assets/static/faq.png";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type FAQProps = {
  title: string;
  content: string;
};


export default function FAQ() {

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
    ]

  return (
    <div className="w-full h-[dvh] flex flex-col justify-between dark:text-white relative py-10 items-center" id="faq">
      <p className="text-4xl font-bold text-center">Frequently Asked Questions</p>
      <div className="flex lg:flex-row w-full mt-7">
        <div className="rounded-lg lg:flex hidden w-3/4 flex-row items-center justify-center">
          <Image
            src={FAQImage}
            alt={"FAQImage"}
            width={450}
            height={450}
          ></Image>
        </div>
        <div className="w-full flex items-center justify-center">
          <Accordion type="single" collapsible className=" w-full dark:bg-white/10 bg-black/10 px-5 rounded-lg shadow-lg">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="my-2">
                <AccordionTrigger className="dark:text-white text-base">{faq.title}</AccordionTrigger>
                <AccordionContent className="dark:text-white text-md">{faq.content}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}
