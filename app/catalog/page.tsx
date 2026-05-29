"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const collections = [
  {
    number: "01",
    category: "Living Interior",
    title: "Sofa & Coffee Table Custom",
    description:
      "Dirancang untuk menghadirkan kenyamanan, estetika modern, dan karakter ruang yang lebih eksklusif.",
    image: "/images/catalog/sofa-tamu.jpg",
  },

  {
    number: "02",
    category: "Accent Seating",
    title: "Lounge Chair Premium",
    description:
      "Detail presisi dan material pilihan untuk menghadirkan kesan luxury modern.",
    image: "/images/catalog/kursi-lounge.jpg",
  },

  {
    number: "03",
    category: "Storage Interior",
    title: "Cabinet TV Minimalis",
    description:
      "Perpaduan desain bersih dan fungsi penyimpanan modern untuk interior kontemporer.",
    image: "/images/catalog/cabinet-tv.jpg",
  },
];

const diningCollections = [
  {
    number: "04",
    category: "Dining Interior",
    title: "Kitchen Set Custom",
    description:
      "Kitchen set premium dengan konfigurasi fleksibel dan finishing elegan.",
    image: "/images/catalog/kitchen-set.jpg",
  },

  {
    number: "05",
    category: "Dining Furniture",
    title: "Dining Table Solid Wood",
    description:
      "Meja makan premium dengan material kayu pilihan dan detail craftsmanship Jepara.",
    image: "/images/catalog/meja-makan.jpg",
  },
];

export default function CatalogPage() {

  const [selectedItem, setSelectedItem] = useState<any>(null);

  return (
    <main className="bg-[#F8F6F2] text-stone-900 overflow-hidden">

      {/* MODAL DETAIL */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-md flex items-center justify-center p-5"
          >

            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.45 }}
              className="relative w-full max-w-6xl bg-[#111111] rounded-[35px] overflow-hidden"
            >

              {/* CLOSE */}
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-5 right-5 z-20 w-12 h-12 rounded-full bg-white/10 text-white text-xl hover:bg-white hover:text-black transition"
              >
                ✕
              </button>

              <div className="grid lg:grid-cols-2">

                {/* IMAGE */}
                <div className="relative h-[350px] md:h-[700px]">

                  <Image
                    src={selectedItem.image}
                    alt={selectedItem.title}
                    fill
                    className="object-contain p-6 md:p-10"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

                </div>

                {/* CONTENT */}
                <div className="flex flex-col justify-center p-8 md:p-16 text-white">

                  <p className="uppercase tracking-[0.45em] text-xs text-stone-400 mb-6">
                    {selectedItem.number} — {selectedItem.category}
                  </p>

                  <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-8">
                    {selectedItem.title}
                  </h2>

                  <p className="text-stone-300 text-base md:text-lg leading-relaxed mb-10">
                    {selectedItem.description}
                  </p>

                  <div className="flex flex-col sm:flex-row gap-5">

                    <a
                      href="https://wa.me/6281392330330"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-[#C6A969] transition duration-300 text-center"
                    >
                      Konsultasi Produk
                    </a>

                    <button
                      onClick={() => setSelectedItem(null)}
                      className="border border-white/30 px-8 py-4 rounded-full hover:bg-white hover:text-black transition duration-300"
                    >
                      Kembali
                    </button>

                  </div>

                </div>

              </div>

            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden">

        {/* BG */}
        <div className="absolute inset-0">

          <Image
            src="/images/catalog/catalog-hero.png"
            alt="AARDE Furniture"
            fill
            priority
            className="object-cover scale-105 animate-[slowZoom_18s_ease-in-out_infinite_alternate]"
          />

          <div className="absolute inset-0 bg-black/60" />

          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-[#F8F6F2]" />

        </div>

        {/* GOLD BLUR */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#C6A969]/20 blur-3xl rounded-full" />

        {/* CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative z-10 max-w-7xl mx-auto px-5 md:px-6 w-full pt-32"
        >

          <div className="max-w-5xl">

            <p className="uppercase tracking-[0.45em] text-[10px] md:text-xs text-stone-300 mb-6 md:mb-8">
              AARDE Furniture — Interior Custom Jepara
            </p>

            <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold text-white leading-[0.95] mb-8 md:mb-10">

              Interior
              <br />

              Collection

              <span className="block italic font-light text-stone-300">
                Custom Premium.
              </span>

            </h1>

            <p className="max-w-3xl text-stone-300 text-base md:text-2xl leading-relaxed mb-10 md:mb-14">

              Menghadirkan furniture custom premium untuk hunian,
              villa, workspace, hospitality, hingga kebutuhan
              interior komersial dengan craftsmanship Jepara
              dan pendekatan desain modern elegan.

            </p>

            <div className="flex flex-col sm:flex-row gap-4 md:gap-5">

              <a
                href="https://wa.me/6281392330330"
                target="_blank"
                rel="noopener noreferrer"
                className="text-center bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-[#C6A969] transition duration-300"
              >
                Konsultasi Interior
              </a>

              <Link
                href="/projects"
                className="text-center border border-white/40 text-white px-8 py-4 rounded-full hover:bg-white hover:text-black transition duration-300"
              >
                Explore Projects
              </Link>

            </div>

          </div>

        </motion.div>

      </section>

      {/* LIVING COLLECTION */}
      <section className="py-20 md:py-28 bg-[#F8F6F2] overflow-hidden">

        <div className="max-w-7xl mx-auto px-5 md:px-6">
          </div>

          {/* HEADING */}
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16 md:mb-20"
          >

            <p className="uppercase tracking-[0.45em] text-[10px] md:text-xs text-stone-400 mb-5">
              Living Collection
            </p>

            <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-6">

              Ruang Tamu
              <br />

              <span className="italic font-light text-stone-500">
                Family Area
              </span>

            </h2>

            <p className="max-w-2xl mx-auto text-stone-500 text-base md:text-lg leading-relaxed italic">
                Interior ruang keluarga yang dirancang untuk
                menghadirkan kenyamanan, estetika, dan identitas visual
                yang menyatu dengan karakter hunian Anda
            </p>

          </motion.div>
        
          {/* GRID */}
<div className="grid lg:grid-cols-12 gap-5 md:gap-8">

  {/* LARGE */}
  <motion.div
    initial={{ opacity: 0, x: -80 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 1 }}
    viewport={{ once: true }}
    className="lg:col-span-8"
  >

    <div
      onClick={() => setSelectedItem(collections[0])}
      className="
        group
        relative
        h-[320px]
        sm:h-[380px]
        md:h-[650px]
        rounded-[26px]
        md:rounded-[36px]
        overflow-hidden
        cursor-pointer
      "
    >

      {/* IMAGE */}
      <Image
        src={collections[0].image}
        alt={collections[0].title}
        fill
        priority
        className="
          object-cover
          object-center
          transition
          duration-1000
          ease-out
          group-hover:scale-105
        "
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

      {/* CONTENT */}
      <div className="absolute inset-x-0 bottom-0 p-5 md:p-10 text-white">

        <p className="uppercase tracking-[0.28em] text-[9px] md:text-xs text-stone-300 mb-2 md:mb-4">
          {collections[0].number} — {collections[0].category}
        </p>

        <h3 className="text-[28px] leading-[1.1] sm:text-4xl md:text-5xl font-bold mb-3 md:mb-5 max-w-[90%]">
          {collections[0].title}
        </h3>

        <p className="max-w-xl text-xs sm:text-sm md:text-base text-stone-300 leading-relaxed">
          {collections[0].description}
        </p>

      </div>

    </div>

  </motion.div>

  {/* RIGHT */}
  <div className="lg:col-span-4 flex flex-col gap-5 md:gap-8">

    {collections.slice(1).map((item, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: index * 0.2 }}
        viewport={{ once: true }}
        onClick={() => setSelectedItem(item)}
        className="
          group
          relative
          h-[240px]
          sm:h-[260px]
          md:h-[310px]
          rounded-[24px]
          md:rounded-[32px]
          overflow-hidden
          cursor-pointer
        "
      >

        {/* IMAGE */}
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="
            object-cover
            object-center
            transition
            duration-1000
            ease-out
            group-hover:scale-105
          "
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

        {/* CONTENT */}
        <div className="absolute inset-x-0 bottom-0 p-4 md:p-7 text-white">

          <p className="uppercase tracking-[0.28em] text-[9px] md:text-[10px] text-stone-300 mb-2 md:mb-3">
            {item.number} — {item.category}
          </p>

          <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3 leading-tight">
            {item.title}
          </h3>

          <p className="text-[11px] md:text-sm text-stone-300 leading-relaxed">
            {item.description}
          </p>

        </div>

      </motion.div>
    ))}

  </div>

</div>
</section>
            {/* DINING */}
      <section className="py-20 md:py-28 bg-[#111111] text-white relative overflow-hidden">

        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#C6A969]/10 blur-3xl rounded-full" />

        <div className="max-w-7xl mx-auto px-5 md:px-6 relative z-10">

          <motion.div
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="mb-16 md:mb-20"
          >

            <p className="uppercase tracking-[0.45em] text-[10px] md:text-xs text-stone-500 mb-5">
              Dining Collection
            </p>

            <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-6 md:mb-8">

              Simfoni Kuliner
              <br />

              <span className="italic font-light text-stone-400">
                Dalam Interior Modern.
              </span>

            </h2>

            <p className="max-w-3xl text-stone-400 text-base md:text-lg leading-relaxed">
              Furniture dining custom yang menghadirkan pengalaman
              bersantap lebih hangat, elegan, dan menyatu
              dengan karakter ruang hunian premium.
            </p>

          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-10">

            {diningCollections.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: index * 0.2 }}
                viewport={{ once: true }}
                onClick={() => setSelectedItem(item)}
                className="group relative h-[500px] md:h-[720px] overflow-hidden rounded-[30px] md:rounded-[36px] border border-stone-800 cursor-pointer"
              >

                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition duration-1000 ease-out group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                <div className="absolute bottom-0 left-0 p-6 md:p-10">

                  <p className="uppercase tracking-[0.35em] text-[10px] md:text-xs text-stone-400 mb-4">
                    {item.number} — {item.category}
                  </p>

                  <h3 className="text-2xl md:text-4xl font-bold mb-4 md:mb-5">
                    {item.title}
                  </h3>

                  <p className="text-sm md:text-base text-stone-300 leading-relaxed max-w-lg">
                    {item.description}
                  </p>

                </div>

              </motion.div>
            ))}

          </div>

        </div>

      </section>

      {/* BEDROOM */}
      <section className="py-20 md:py-28 bg-[#F8F6F2] overflow-hidden">

        <div className="max-w-7xl mx-auto px-5 md:px-6">

          {/* HEADING */}
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16 md:mb-20"
          >

            <p className="uppercase tracking-[0.45em] text-[10px] md:text-xs text-stone-400 mb-5">
              Bedroom Collection
            </p>

            <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-6">

              Personal Comfort
              <br />

              <span className="italic font-light text-stone-500">
                Crafted Elegantly.
              </span>

            </h2>

            <p className="max-w-2xl mx-auto text-stone-500 text-base md:text-lg leading-relaxed italic">
              Ruang personal yang dirancang untuk menghadirkan
              ketenangan, kenyamanan, dan identitas visual premium.
            </p>

          </motion.div>

          {/* GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 items-center">

            {/* BED */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
              className="lg:col-span-7"
            >

              <div
                onClick={() =>
                  setSelectedItem({
                    number: "06",
                    category: "Master Bedroom",
                    title: "Tempat Tidur & Headboard Custom",
                    description:
                      "Desain tempat tidur eksklusif dengan detail headboard, dimensi presisi, dan finishing premium untuk menghadirkan pengalaman istirahat yang lebih berkelas.",
                    image: "/images/catalog/tempat-tidur.jpg",
                  })
                }
                className="group relative h-[420px] md:h-[550px] rounded-[30px] md:rounded-[36px] overflow-hidden shadow-2xl cursor-pointer"
              >

                <Image
                  src="/images/catalog/tempat-tidur.jpg"
                  alt="Bedroom"
                  fill
                  className="object-cover transition duration-1000 ease-out group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                <div className="absolute bottom-0 left-0 p-6 md:p-10 text-white">

                  <p className="uppercase tracking-[0.35em] text-[10px] md:text-xs text-stone-300 mb-4">
                    06 — Master Bedroom
                  </p>

                  <h3 className="text-2xl md:text-4xl font-bold mb-4">
                    Tempat Tidur & Headboard Custom
                  </h3>

                  <p className="max-w-xl text-sm md:text-base text-stone-300 leading-relaxed">
                    Desain tempat tidur eksklusif dengan detail headboard,
                    dimensi presisi, dan finishing premium.
                  </p>

                </div>

              </div>

            </motion.div>

            {/* WARDROBE */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
              className="lg:col-span-5"
            >

              <div
                onClick={() =>
                  setSelectedItem({
                    number: "07",
                    category: "Wardrobe System",
                    title: "Wardrobe Interior Custom",
                    description:
                      "Sistem penyimpanan premium yang menyatu dengan kebutuhan ruang modern dan karakter interior eksklusif.",
                    image: "/images/catalog/almari.jpg",
                  })
                }
                className="group relative h-[520px] md:h-[700px] rounded-[30px] md:rounded-[36px] overflow-hidden shadow-2xl cursor-pointer"
              >

                <Image
                  src="/images/catalog/almari.jpg"
                  alt="Wardrobe"
                  fill
                  className="object-cover transition duration-1000 ease-out group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                <div className="absolute bottom-0 left-0 p-6 md:p-8 text-white">

                  <p className="uppercase tracking-[0.35em] text-[10px] md:text-xs text-stone-300 mb-4">
                    07 — Wardrobe System
                  </p>

                  <h3 className="text-2xl md:text-3xl font-bold mb-4">
                    Wardrobe Interior Custom
                  </h3>

                  <p className="text-sm md:text-base text-stone-300 leading-relaxed">
                    Sistem penyimpanan premium yang menyatu
                    dengan kebutuhan ruang modern.
                  </p>

                </div>

              </div>

            </motion.div>

          </div>

        </div>

      </section>

      {/* EXECUTIVE WORKSPACE */}
      <section className="py-20 md:py-28 bg-white border-t border-stone-200 overflow-hidden">

        <div className="max-w-7xl mx-auto px-5 md:px-6 grid lg:grid-cols-2 gap-12 md:gap-16 items-center">

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            className="group"
          >

            <div
              onClick={() =>
                setSelectedItem({
                  number: "08",
                  category: "Executive Workspace",
                  title: "Meja Kantor Executive",
                  description:
                    "Furniture workspace premium yang dirancang ergonomis, elegan, dan mendukung produktivitas tinggi untuk ruang kerja profesional modern.",
                  image: "/images/catalog/meja-kantor.jpg",
                })
              }
              className="relative overflow-hidden rounded-tr-[60px] md:rounded-tr-[80px] rounded-bl-[30px] md:rounded-bl-[40px] h-[420px] md:h-[600px] shadow-2xl cursor-pointer"
            >

              <Image
                src="/images/catalog/meja-kantor.jpg"
                alt="Executive Workspace"
                fill
                className="object-cover transition duration-1000 ease-out group-hover:scale-110"
              />

            </div>

          </motion.div>

          {/* CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
          >

            <p className="uppercase tracking-[0.4em] text-[10px] md:text-xs text-stone-400 mb-5">
              08 — Executive Workspace
            </p>

            <h2 className="text-4xl md:text-6xl font-bold text-stone-900 leading-tight mb-8">

              Wibawa dalam
              <br />

              <span className="italic font-light text-stone-500">
                Ruang Kerja.
              </span>

            </h2>

            <p className="text-stone-600 text-base md:text-lg leading-relaxed mb-10">

              Furniture workspace premium yang dirancang ergonomis,
              elegan, dan mendukung produktivitas tinggi untuk ruang
              kerja eksekutif maupun kantor profesional modern.

            </p>

                        {/* REQUEST BOX */}
            <div className="bg-[#F8F6F2] p-6 md:p-8 border-l-4 border-[#C6A16E] rounded-r-[24px] shadow-xl">

              <h4 className="uppercase tracking-[0.3em] text-xs md:text-sm font-bold text-stone-900 mb-4">
                Exclusive Access Request
              </h4>

              <p className="text-stone-500 leading-relaxed mb-8 text-sm md:text-base">
                Dapatkan akses katalog eksklusif AARDE Furniture
                untuk kebutuhan proyek interior, workspace,
                maupun custom furniture premium.
              </p>

              <a
                href="mailto:support@aardefurniture.com"
                className="inline-flex items-center gap-3 bg-stone-900 text-white px-6 md:px-8 py-4 rounded-full text-sm font-semibold hover:bg-[#C6A16E] transition duration-500"
              >
                ✉️ Request Katalog Eksklusif
              </a>

            </div>

          </motion.div>

        </div>

      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-[#F8F6F2] overflow-hidden">

        <div className="max-w-6xl mx-auto px-5 md:px-6">

          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[30px] md:rounded-[40px] bg-[#111111]"
          >

            {/* BG IMAGE */}
            <Image
              src="/images/cta-bg.jpg"
              alt="CTA"
              fill
              className="object-cover opacity-20 scale-105 animate-[slowZoom_18s_ease-in-out_infinite_alternate]"
            />

            {/* GOLD EFFECT */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C6A969]/20 blur-3xl rounded-full" />

            <div className="relative z-10 py-20 md:py-24 px-6 md:px-20 text-center text-white">

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="uppercase tracking-[0.45em] text-[10px] md:text-xs text-stone-400 mb-6"
              >
                Custom Interior Consultation
              </motion.p>

              <motion.h2
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.1 }}
                viewport={{ once: true }}
                className="text-3xl sm:text-5xl md:text-7xl font-bold leading-tight mb-8 md:mb-10"
              >

                Wujudkan Interior
                <br />

                <span className="italic font-light text-[#D6B87A]">
                  Sesuai Karakter Ruang Anda.
                </span>

              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2 }}
                viewport={{ once: true }}
                className="max-w-3xl mx-auto text-stone-300 text-base md:text-lg leading-relaxed mb-10 md:mb-14"
              >

                Setiap furniture diproduksi secara custom berdasarkan
                kebutuhan ruang, material pilihan, serta identitas
                desain yang ingin Anda hadirkan.

              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.3 }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row justify-center gap-4 md:gap-5"
              >

                <a
                  href="https://wa.me/6281392330330"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-[#C6A969] hover:text-black transition duration-300"
                >
                  Konsultasi Sekarang
                </a>

                <Link
                  href="/projects"
                  className="border border-white/30 px-8 py-4 rounded-full hover:bg-white hover:text-black transition duration-300"
                >
                  Explore Projects
                </Link>

              </motion.div>

            </div>

          </motion.div>

        </div>

      </section>

    </main>
  );
}