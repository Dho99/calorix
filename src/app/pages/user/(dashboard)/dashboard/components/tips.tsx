import { BookType } from "lucide-react"

type TipsProps = {
    title: string;
    description: string;
}

export default function Tips(){

    const tips: TipsProps[] = [
        {
            title: "Menjaga Waktu Tidur yang Cukup dan Berkualitas",
            description: "Tetapkan jadwal tidur yang konsisten: Usahakan untuk tidur dan bangun pada waktu yang sama setiap hari, bahkan di akhir pekan."
        },
        {
            title: "Menjaga Konsumsi Kalori Harian yang Seimbang",
            description: "Hitung kebutuhan kalori harian Anda: Gunakan kalkulator kalori online atau konsultasikan dengan ahli gizi untuk mengetahui berapa kalori yang Anda butuhkan setiap hari berdasarkan usia, jenis kelamin, berat badan, tinggi badan, dan tingkat aktivitas fisik."
        },
        {
            title: " Berjalan Kaki Secara Teratur",
            description: "Jadikan berjalan kaki sebagai bagian dari rutinitas harian Anda: Berjalan kaki ke tempat kerja, sekolah, atau toko."
        }
    ]

    return (
        <div className="flex-col flex gap-6 w-full  bg-green-200 dark:bg-[#1B4242]/70 dark:text-white rounded-lg shadow-md py-5 px-3 border border-white/50">
            <div className="flex flex-row gap-x-3 items-center">
            <BookType className="w-8 h-8 dark:text-white" />
            <h2 className="text-2xl font-bold">Tips</h2>
            </div>
            <div className="flex flex-col gap-2">
                {tips.map((tip, index) => (
                    <div key={index} className="bg-black/10 border border-white p-4 rounded-lg shadow-md flex-col flex gap-3">
                        <h3 className="text-lg font-semibold">{tip.title}</h3>
                        <p className="dark:text-white/80 text-sm">{tip.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}