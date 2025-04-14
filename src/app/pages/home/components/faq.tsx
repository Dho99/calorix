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
    ]

  return (
    <div className="w-full h-[dvh] flex flex-col justify-between bg-[#092635] text-white relative py-10 px-20 items-center">
      <p className="text-4xl font-bold">Frequently Asked Questions</p>
      <div className="flex flex-row w-full mt-15">
        <div className="rounded-lg overflow-hidden w-full">
          <Image
            src={FAQImage}
            alt={"FAQImage"}
            width={450}
            height={450}
          ></Image>
        </div>
        <div className="w-full flex items-center justify-center">
          <Accordion type="single" collapsible className="w-full bg-white/10 px-5 rounded-lg shadow-lg">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="my-2">
                <AccordionTrigger className="text-white text-base">{faq.title}</AccordionTrigger>
                <AccordionContent className="text-white text-md">{faq.content}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}
