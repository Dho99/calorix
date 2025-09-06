export default function About() {
  return (
    <div
      className="flex flex-col items-center justify-center w-full h-full"
      id="about"
    >
      <div className="flex flex-col items-center justify-center w-full h-full p-15">
        <div className="flex xl:flex-row flex-col w-full xl:space-x-25 space-x-0 items-center justify-center h-full">
            <h1 className="text-6xl font-semibold mb-4 xl:text-start text-center lg:w-5xl w-xl  xl:mb-0 mb-10">
              Kenapa Harus <span className="text-orange-500">Calorix</span> ?
            </h1>
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-8">
            <div className="flex flex-col items-center text-center p-6">
              <div className="mb-4">
                <svg className="w-12 h-12 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                </svg>
              </div>
              <h2 className="text-2xl font-semibold mb-3">Hitung Kalori Harian dengan Mudah</h2>
              <p className="text-gray-600 leading-relaxed">
                Calorix membantu pengguna mengetahui kebutuhan kalori harian hanya dengan memasukkan data pribadi.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6">
              <div className="mb-4">
                <svg className="w-12 h-12 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-2xl font-semibold mb-3 text-orange-500">Rekomendasi Personal</h2>
              <p className="text-gray-600 leading-relaxed">
                Calorix membantu pengguna mengetahui kebutuhan kalori harian hanya dengan memasukkan data pribadi.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6">
              <div className="mb-4">
                <svg className="w-12 h-12 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h2 className="text-2xl font-semibold mb-3">Algoritma Canggih</h2>
              <p className="text-gray-600 leading-relaxed">
                Calorix menggunakan algoritma canggih untuk memberikan rekomendasi kalori yang akurat berdasarkan data pribadi pengguna.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
