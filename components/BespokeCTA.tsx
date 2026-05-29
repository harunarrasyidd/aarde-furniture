export default function BespokeCTA() {
  return (
    <section className="py-24 bg-[#F9F8F6]">

      <div className="max-w-7xl mx-auto px-6">

        <div
          className="relative rounded-[-3x1] overflow-hidden border border-stone-800 shadow-2xl"
          style={{
            backgroundImage:
              "url('/images/cta-bg.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >

          <div className="absolute inset-0 bg-black/75" />

          <div className="relative z-10 py-16 md:py-20 px-6 md:px-12 text-center text-white">

            <h2 className="text-xs tracking-[0.4em] uppercase text-stone-400 mb-6">
              Bespoke Production
            </h2>

            <h3 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
              Satu Visi. <br />

              <span className="italic text-stone-300">
                Ribuan Kemungkinan Kustomisasi.
              </span>
            </h3>

            <p className="max-w-2xl mx-auto text-stone-300 text-base leading-relaxed mb-8">
              Dari pemilihan kayu premium hingga detail finishing presisi,
              kami menghadirkan furniture eksklusif untuk kebutuhan residensial
              maupun proyek komersial berskala besar.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-6">

              <a
                href="https://wa.me/6281392330330"
                className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-stone-200 transition"
              >
                Mulai Proyek Custom
              </a>

              <a
                href="/projects"
                className="border border-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition"
              >
                Lihat Referensi Karya
              </a>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}