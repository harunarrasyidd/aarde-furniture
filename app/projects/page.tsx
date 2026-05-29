"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    title: "Luxury Living Room",
    category: "Residential Interior",
    description:
      "Interior ruang tamu premium dengan perpaduan material kayu solid, sofa custom, dan pencahayaan hangat untuk menghadirkan suasana elegan modern.",
    image: "/images/project-1.jpg",
  },

  {
    title: "Kitchen Set Modern",
    category: "Custom Interior",
    description:
      "Kitchen set modern dengan konfigurasi ergonomis, finishing premium, serta penyimpanan maksimal untuk kebutuhan hunian modern.",
    image: "/images/project-2.jpg",
  },

  {
    title: "Master Bedroom",
    category: "Private Residence",
    description:
      "Kamar tidur eksklusif dengan desain headboard custom, wardrobe premium, dan nuansa ruang yang nyaman serta mewah.",
    image: "/images/project-3.jpg",
  },

  {
    title: "Cafe Kazue Ramen",
    category: "Cafe & Restaurant",
    description:
      "Project interior cafe bernuansa modern Jepang dengan kombinasi elemen kayu dan ambience hangat untuk pengalaman customer lebih nyaman.",
    image: "/images/project-4.jpg",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8 },
  viewport: { once: true },
};

export default function ProjectsPage() {

  const [selectedProject, setSelectedProject] = useState<any>(null);

  return (
    <main className="bg-[#F5F1EC] overflow-hidden">

      {/* HERO */}
      <section className="relative overflow-hidden pt-28 md:pt-40 pb-20 md:pb-28">

        <div className="absolute top-[-20%] right-[-10%] w-[500px] md:w-[700px] h-[500px] md:h-[700px] bg-[#C6A969]/20 blur-3xl rounded-full" />

        <div className="absolute bottom-[-30%] left-[-10%] w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-stone-300/30 blur-3xl rounded-full" />

        <motion.div
          className="max-w-7xl mx-auto px-5 md:px-6 relative z-10"
          {...fadeUp}
        >

          <div className="max-w-5xl">

            <p className="uppercase tracking-[0.35em] md:tracking-[0.45em] text-[10px] md:text-xs text-stone-400 mb-6">
              AARDE Furniture — Portfolio Projects
            </p>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-[#111111] leading-[1.05] mb-8">

              Interior Project
              <br />

              <span className="italic font-light text-stone-500">
                Portfolio Showcase.
              </span>

            </h1>

            <p className="max-w-3xl text-stone-600 text-base md:text-lg leading-relaxed">

              Dokumentasi project interior custom AARDE Furniture
              untuk hunian pribadi, villa, ruang kerja, cafe,
              restaurant, hingga kebutuhan komersial premium.

            </p>

          </div>

        </motion.div>

      </section>

      {/* PROJECT SLIDER */}
      <section className="relative pb-10 md:pb-20">

        <div className="overflow-x-auto overflow-y-hidden scrollbar-hide">

          <div className="flex gap-5 md:gap-8 px-5 md:px-6 w-max">

            {projects.map((project, index) => (

              <motion.div
                key={index}
                {...fadeUp}
                whileHover={{ y: -10 }}
                className="group relative w-[280px] sm:w-[320px] md:w-[420px] h-[520px] md:h-[720px] rounded-[28px] md:rounded-[40px] overflow-hidden shrink-0 bg-black cursor-pointer shadow-2xl"
              >

                {/* IMAGE */}
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition duration-700 ease-out group-hover:scale-110"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/10" />

                {/* CONTENT */}
                <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-10">

                  <div>

                    <p className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-stone-300 mb-4">
                      {project.category}
                    </p>

                    <h2 className="text-2xl md:text-4xl font-semibold text-white leading-tight max-w-[260px] md:max-w-[320px]">
                      {project.title}
                    </h2>

                  </div>

                  {/* BUTTON */}
                  <div className="flex justify-end">

                    <button
                      onClick={() => setSelectedProject(project)}
                      className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white flex items-center justify-center hover:bg-[#C6A969] transition duration-300 shadow-xl"
                    >

                      <ArrowUpRight className="w-5 h-5 md:w-7 md:h-7 text-black" />

                    </button>

                  </div>

                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* MODAL DETAIL */}
      <AnimatePresence>

        {selectedProject && (

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] bg-black/80 backdrop-blur-md flex items-center justify-center p-5"
          >

            <motion.div
              initial={{ scale: 0.9, y: 40 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 40 }}
              transition={{ duration: 0.4 }}
              className="relative w-full max-w-6xl bg-[#111111] rounded-[30px] overflow-hidden"
            >

              {/* CLOSE */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition"
              >
                <X />
              </button>

              <div className="grid lg:grid-cols-2">

                {/* IMAGE */}
                <div className="relative h-[320px] md:h-[700px]">

                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    fill
                    className="object-cover"
                  />

                </div>

                {/* CONTENT */}
                <div className="p-8 md:p-14 flex flex-col justify-center text-white">

                  <p className="uppercase tracking-[0.35em] text-xs text-stone-400 mb-6">
                    {selectedProject.category}
                  </p>

                  <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-8">

                    {selectedProject.title}

                  </h2>

                  <p className="text-stone-300 text-base md:text-lg leading-relaxed mb-10">

                    {selectedProject.description}

                  </p>

                  <Link
                    href="https://wa.me/6281392330330"
                    target="_blank"
                    className="inline-flex w-fit items-center justify-center bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-[#C6A969] transition duration-300"
                  >
                    Konsultasi Project
                  </Link>

                </div>

              </div>

            </motion.div>

          </motion.div>

        )}

      </AnimatePresence>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-5 md:px-6 py-20 md:py-32">

        <motion.div
          className="relative overflow-hidden rounded-[30px] md:rounded-[50px] bg-[#111111]"
          {...fadeUp}
        >

          <div className="absolute inset-0">

            <Image
              src="/images/project-cta.jpg"
              alt="AARDE Interior"
              fill
              className="object-cover opacity-20"
            />

          </div>

          <div className="absolute top-0 right-0 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-[#C6A969]/20 blur-3xl rounded-full" />

          <div className="relative z-10 py-20 md:py-32 px-6 md:px-20 text-center">

            <p className="uppercase tracking-[0.35em] md:tracking-[0.45em] text-[10px] md:text-xs text-stone-400 mb-8">
              Interior Custom Furniture Specialist
            </p>

            <h2 className="text-3xl sm:text-5xl md:text-7xl font-bold text-white leading-[1.1] max-w-5xl mx-auto mb-8 md:mb-10">

              Mengisi Setiap Sudut
              <br />

              Ruang Dengan

              <span className="italic font-light text-[#D6B87A]">
                {" "}Karakter.
              </span>

            </h2>

            <p className="max-w-3xl mx-auto text-stone-300 text-base md:text-lg leading-relaxed mb-12 md:mb-14">

              AARDE Furniture menghadirkan solusi interior custom
              premium dengan craftsmanship Jepara.

            </p>

          {/* BUTTON */} 
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-5"> 
            <Link href="https://wa.me/6281392330330" 
            target="_blank" 
            className="w-full sm:w-auto inline-flex items-center justify-center bg-white text-black px-8 md:px-10 py-4 md:py-5 rounded-full text-sm font-semibold hover:bg-[#C6A969] transition duration-300" 
            > Konsultasi Interior Sekarang 
            </Link> 
            <Link href="/catalog" 
            className="w-full sm:w-auto inline-flex items-center justify-center border border-stone-600 text-white px-8 md:px-10 py-4 md:py-5 rounded-full text-sm font-semibold hover:border-[#C6A969] hover:text-[#D6B87A] 
            transition duration-300" 
            > Lihat Koleksi Furniture 
            </Link> </div> 
            {/* LABEL */} 
            <div className="mt-14 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"> 
              {[ "Residential Interior", "Custom Furniture", "Hospitality Project", "Commercial Space", 

              ].map((item, index) => ( <motion.div key={index} whileHover={{ y: -5 }} 
                className="border border-stone-800 bg-white/5 backdrop-blur-sm rounded-2xl py-4 md:py-5 px-4" > 
                <p className="text-xs md:text-sm text-stone-300 tracking-wide"> 
                  {item} 
                  </p> 
                  </motion.div> 
                  )
                )
                } 
                </div>
              </div> 
            </motion.div> 
          </section> 
        </main> 
      ); 
    }