export default function LineageSection() {
  return (
    <section
      className="relative py-32 bg-fixed bg-cover bg-center"
      style={{
        backgroundImage:
          "url('/images/pabrik-bg.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="bg-white/85 backdrop-blur-md p-10 md:p-16 shadow-2xl border border-white/50 rounded-3xl">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* LEFT */}
            <div className="lg:col-span-5">
              <h2 className="text-xs font-bold tracking-[0.4em] uppercase text-stone-500 mb-6 border-l-2 border-stone-500 pl-3">
                The Power Behind AARDE
              </h2>

              <h3 className="text-4xl md:text-5xl font-bold text-stone-900 leading-tight mb-4">
                Didukung oleh <br />

                <span className="italic text-stone-600">
                  PT Bumi Karya Abimana.
                </span>
              </h3>
            </div>

            {/* RIGHT */}
            <div className="lg:col-span-7">
              <p className="text-lg md:text-xl text-stone-700 leading-relaxed mb-6">
                AARDE Furniture adalah unit strategis dari PT Bumi Karya Abimana
                yang didirikan untuk menjawab kebutuhan pasar furnitur premium
                dan bespoke interior dengan dukungan fasilitas produksi modern di
                Jepara.
              </p>

              <p className="text-stone-600 leading-relaxed">
                Kemitraan ini memungkinkan kami mengakses material kayu pilihan
                terbaik dan tenaga pengrajin ahli berskala besar untuk memastikan
                kualitas, ketepatan waktu, dan presisi pengerjaan.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}