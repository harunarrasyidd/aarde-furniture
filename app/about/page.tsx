"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8 },
  viewport: { once: true },
};

export default function AboutPage() {
  return (
    <main className="bg-[#F6F3EE] text-[#1A1A1A] overflow-hidden">

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#F5F1EC]">

        {/* BACKGROUND */}
        <div className="absolute top-[-10%] right-[-5%] w-[500px] md:w-[700px] h-[500px] md:h-[700px] bg-[#C6A969]/20 blur-3xl rounded-full" />

        <div className="absolute bottom-[-20%] left-[-10%] w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-stone-300/30 blur-3xl rounded-full" />

        <div className="max-w-7xl mx-auto px-5 md:px-6 pt-28 md:pt-40 pb-20 md:pb-28 relative z-10">

          <div className="grid lg:grid-cols-12 gap-14 items-center">

            {/* LEFT */}
            <motion.div
              className="lg:col-span-6"
              {...fadeUp}
            >

              <p className="uppercase tracking-[0.35em] md:tracking-[0.45em] text-[10px] md:text-xs text-stone-400 mb-6 md:mb-8">
                Tentang AARDE Furniture
              </p>

              <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-[#111111] leading-[1.05] mb-6 md:mb-8">

                Crafting Visions
                <br />

                <span className="italic font-light text-stone-500">
                  into Reality.
                </span>

              </h1>

              <p className="text-stone-600 text-base md:text-lg leading-relaxed max-w-2xl mb-10 md:mb-12">

                AARDE Furniture menghadirkan furniture interior custom
                premium dengan craftsmanship Jepara dan pendekatan desain
                modern untuk hunian eksklusif, villa, apartment,
                hospitality, hingga kebutuhan proyek komersial.

              </p>

              {/* STATS */}
              <div className="grid grid-cols-3 gap-4 md:gap-6">

                <div>
                  <h3 className="text-2xl md:text-4xl font-bold text-[#111111] mb-2">
                    100%
                  </h3>

                  <p className="text-xs md:text-sm text-stone-500 leading-relaxed">
                    Custom Interior
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl md:text-4xl font-bold text-[#111111] mb-2">
                    Jepara
                  </h3>

                  <p className="text-xs md:text-sm text-stone-500 leading-relaxed">
                    Craftsmanship
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl md:text-4xl font-bold text-[#111111] mb-2">
                    Premium
                  </h3>

                  <p className="text-xs md:text-sm text-stone-500 leading-relaxed">
                    Quality Standard
                  </p>
                </div>

              </div>

            </motion.div>

            {/* RIGHT IMAGE */}
            <motion.div
              className="lg:col-span-6 relative"
              {...fadeUp}
            >

              <div className="group relative h-[420px] md:h-[700px] rounded-[30px] md:rounded-[40px] overflow-hidden shadow-2xl">

                <Image
                  src="/images/ptbka.jpg"
                  alt="AARDE Interior"
                  fill
                  className="object-cover transition duration-700 ease-out group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition duration-700" />

                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />

              </div>

              {/* FLOATING CARD */}
              <div className="relative md:absolute md:-bottom-10 md:-left-10 bg-white shadow-2xl rounded-[25px] md:rounded-[30px] p-6 md:p-8 max-w-sm border border-stone-200 mt-6 md:mt-0">

                <p className="uppercase tracking-[0.3em] text-[10px] text-stone-400 mb-4">
                  Interior Specialist
                </p>

                <h3 className="text-xl md:text-2xl font-semibold text-[#111111] leading-snug mb-4">
                  Furniture Custom
                  dengan Identitas
                  Visual Eksklusif.
                </h3>

                <p className="text-stone-500 leading-relaxed text-sm">
                  Setiap detail dirancang mengikuti karakter ruang,
                  fungsi, dan visi estetika setiap klien.
                </p>

              </div>

            </motion.div>

          </div>

        </div>

      </section>

      {/* PROFILE */}
      <section className="py-20 md:py-28 bg-white border-t border-[#E8E2D9]">

        <div className="max-w-7xl mx-auto px-5 md:px-6">

          <div className="grid lg:grid-cols-12 gap-14 items-center">

            <motion.div
              className="lg:col-span-5"
              {...fadeUp}
            >

              <div className="group relative h-[400px] md:h-[700px] rounded-[30px] md:rounded-[40px] overflow-hidden shadow-2xl">

                <Image
                  src="/images/produksi.jpeg"
                  alt="Produksi AARDE"
                  fill
                  className="object-cover transition duration-700 ease-out group-hover:scale-110"
                />

              </div>

            </motion.div>

            <motion.div
              className="lg:col-span-7"
              {...fadeUp}
            >

              <p className="uppercase tracking-[0.35em] text-[10px] md:text-xs text-[#8B7355] mb-5">
                Profil Perusahaan
              </p>

              <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-8 md:mb-10">
                Interior Custom Premium
                <span className="block italic font-light text-[#7D7366]">
                  Dari Jepara Untuk Dunia.
                </span>
              </h2>

              <div className="space-y-6 text-[#5F5A54] leading-relaxed text-base md:text-lg">

                <p className="border-l-2 border-[#C6A969] pl-6">
                  AARDE Furniture merupakan brand interior custom
                  di bawah naungan PT Bumi Karya Abimana yang
                  berfokus pada produksi furniture premium,
                  kitchen set, wardrobe, built-in interior,
                  hingga kebutuhan proyek residensial dan komersial.
                </p>

                <p>
                  Kami memadukan craftsmanship khas Jepara
                  dengan pendekatan desain modern sehingga
                  setiap produk mampu menyesuaikan karakter
                  ruang dan identitas visual klien.
                </p>

                <p>
                  Seluruh produk dibuat secara custom berdasarkan
                  kebutuhan ukuran, material, warna finishing,
                  hingga detail desain pelanggan.
                </p>

              </div>

            </motion.div>

          </div>

        </div>

      </section>

      {/* PRODUCTION */}
      <section className="py-20 md:py-32 bg-[#EFEAE2] relative overflow-hidden">

        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#EADBC8]/40 blur-3xl rounded-full" />

        <div className="max-w-7xl mx-auto px-5 md:px-6 relative z-10">

          <motion.div
            className="max-w-4xl mb-16 md:mb-24"
            {...fadeUp}
          >

            <p className="uppercase tracking-[0.35em] text-[10px] md:text-xs text-[#8B7355] mb-5">
              Production Capabilities
            </p>

            <h2 className="text-3xl md:text-6xl font-bold leading-tight mb-6 md:mb-8">
              Skala Produksi Profesional.
              <span className="block italic font-light text-[#7D7366]">
                Presisi Interior Custom.
              </span>
            </h2>

            <p className="text-[#5F5A54] text-base md:text-lg leading-relaxed">
              Workshop produksi kami di Jepara mendukung kebutuhan
              interior custom untuk residensial premium, villa,
              hospitality, hingga proyek komersial skala besar.
            </p>

          </motion.div>

          <div className="grid lg:grid-cols-12 gap-8">

            {/* BIG IMAGE */}
            <motion.div
              className="lg:col-span-7"
              {...fadeUp}
            >

              <div className="relative h-[400px] md:h-[650px] rounded-[30px] md:rounded-[40px] overflow-hidden shadow-2xl group">

                <Image
                  src="/images/kontainer.jpg"
                  alt="Production"
                  fill
                  className="object-cover group-hover:scale-105 transition duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                <div className="absolute bottom-0 left-0 p-6 md:p-10 text-white">

                  <p className="uppercase tracking-[0.3em] text-[10px] md:text-xs mb-4 text-stone-300">
                    Export & Commercial Project
                  </p>

                  <h3 className="text-2xl md:text-4xl font-bold mb-4">
                    Standar Produksi
                    <span className="block italic font-light">
                      Quality Control Premium.
                    </span>
                  </h3>

                </div>

              </div>

            </motion.div>

            {/* RIGHT */}
            <motion.div
              className="lg:col-span-5 grid gap-6"
              {...fadeUp}
            >

              <div className="bg-[#F6F3EE] p-8 md:p-10 rounded-[30px] shadow-lg">

                <div className="text-5xl md:text-6xl font-bold text-[#C6A969] mb-4">
                  40 HC
                </div>

                <h4 className="uppercase tracking-[0.3em] text-[10px] md:text-xs font-semibold mb-5">
                  Kapasitas Ekspor
                </h4>

                <p className="text-[#5F5A54] leading-relaxed">
                  Mendukung pengiriman furniture custom dan proyek
                  interior skala besar.
                </p>

              </div>

              <div className="bg-[#1A1A1A] text-white p-8 md:p-10 rounded-[30px] shadow-lg">

                <div className="text-5xl md:text-6xl font-bold text-[#D6B87A] mb-4">
                  500+
                </div>

                <h4 className="uppercase tracking-[0.3em] text-[10px] md:text-xs font-semibold mb-5">
                  Produksi Bulanan
                </h4>

                <p className="text-stone-300 leading-relaxed">
                  Kapasitas produksi furniture custom dengan
                  quality control premium export.
                </p>

              </div>

            </motion.div>

          </div>

        </div>

      </section>

    </main>
  );
}