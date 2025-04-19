export default function About() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full bg-[#092635] text-white px-10 lg:px-20 py-10" id="about">
      <div className="flex flex-col items-center justify-center w-full h-full bg-black/30 rounded-lg shadow-lg p-10">
        <div className="flex flex-col items-center justify-center w-full h-full">
          <h1 className="text-4xl font-bold mb-4">Tentang Kami</h1>
          <p className="text-lg text-center mt-4">
            Calorix adalah aplikasi yang dirancang untuk membantu pengguna dalam
            menghitung kebutuhan kalori harian mereka. Dengan menggunakan
            algoritma yang canggih, Calorix dapat memberikan rekomendasi kalori
            yang tepat berdasarkan data pribadi pengguna seperti usia, jenis
            kelamin, tinggi badan, berat badan, dan tingkat aktivitas fisik.
            <br />
            <br />
            Selain itu, Calorix juga menyediakan fitur konsultasi dengan ahli
            gizi yang dapat membantu pengguna dalam merencanakan pola makan yang
            sehat dan seimbang. Dengan tampilan yang user-friendly dan mudah
            digunakan, Calorix adalah solusi tepat bagi siapa saja yang ingin
            menjaga kesehatan dan kebugaran tubuh mereka.
          </p>
        </div>
      </div>
    </div>
  );
}
