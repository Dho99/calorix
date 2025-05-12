export default function About() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full dark:text-white py-10" id="about">
      <div className="flex flex-col items-center justify-center w-full h-full bg-[#092635]/30 dark:bg-black/30 rounded-lg shadow-lg p-10">
        <div className="flex flex-col items-center justify-center w-full h-full">
          <h1 className="text-4xl font-bold mb-4 text-center">Mengapa Harus Calorix ?</h1>
          <p className="text-lg text-center mt-4">
            Calorix adalah aplikasi yang dirancang untuk membantu pengguna dalam
            menghitung kebutuhan kalori harian mereka. Dengan menggunakan
            algoritma yang canggih, Calorix dapat memberikan rekomendasi kalori
            yang tepat berdasarkan data pribadi pengguna seperti usia, jenis
            kelamin, tinggi badan, berat badan, dan tingkat aktivitas fisik.
            <br />
          </p>
        </div>
      </div>
    </div>
  );
}
