"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden px-6">

      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{
        backgroundImage: "url('/images/home.jpg')",
        }}
        />

      <div className="absolute inset-0 bg-black/60" />

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center max-w-5xl"
      >

        <p className="uppercase tracking-[0.4em] text-[10px] md:text-xs text-stone-300 mb-6">
          AARDE Furniture — Interior Custom Jepara
        </p>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-tight mb-8">

          Premium Interior
          <br />

          <span className="italic font-light text-stone-300">
            Crafted in Jepara.
          </span>

        </h1>

        <p className="text-sm md:text-xl text-stone-200 leading-relaxed max-w-2xl mx-auto mb-10">
          Menghadirkan furniture custom berkualitas premium
          dengan pendekatan desain eksklusif untuk hunian,
          villa, workspace, hingga proyek interior modern.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">

          <a
            href="/catalog"
            className="w-full sm:w-auto bg-white text-black px-8 py-4 rounded-full font-semibold hover:scale-105 transition"
          >
            View Catalog
          </a>

          <a
            href="https://wa.me/6281392330330"
            className="w-full sm:w-auto border border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-black transition"
          >
            Contact WhatsApp
          </a>

        </div>

      </motion.div>

    </section>
  );
}