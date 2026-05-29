import Image from "next/image";
import Link from "next/link";

import {
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-white relative overflow-hidden border-t border-stone-800">

      {/* BACKGROUND BLUR */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#C6A969]/10 blur-3xl rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* TOP SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-14 py-20 border-b border-stone-800">

          {/* BRAND */}
          <div className="lg:col-span-5">

            <div className="flex items-center gap-4 mb-8">

              <div className="relative w-14 h-14 shrink-0">
                <Image
                  src="/images/logo.png"
                  alt="AARDE Furniture"
                  fill
                  className="object-contain"
                />
              </div>

              <div>
                <h2 className="text-2xl font-bold tracking-wide leading-tight">
                  AARDE Furniture
                </h2>

                <p className="text-xs tracking-[0.35em] uppercase text-[#C6A969] mt-1">
                  PT. Bumi Karya Abimana
                </p>
              </div>

            </div>

            <p className="text-stone-400 leading-relaxed max-w-md mb-10 text-sm md:text-base">
              AARDE Furniture menghadirkan furniture interior custom premium
              dengan craftsmanship Jepara dan pendekatan desain modern untuk
              kebutuhan residensial maupun proyek komersial.
            </p>

            {/* CONTACT */}
            <div className="space-y-5">

              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-[#C6A969] mt-1 shrink-0" />

                <p className="text-stone-400 leading-relaxed text-sm">
                  Jl. Segaran RT 08/05 Troso, Pecangaan,
                  Jepara, Jawa Tengah
                </p>
              </div>

              <div className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-[#C6A969] shrink-0" />

                <p className="text-stone-400 text-sm">
                  +62 813-9233-0330
                </p>
              </div>

              <div className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-[#C6A969] shrink-0" />

                <p className="text-stone-400 text-sm break-all">
                  support@bumikaryaabimana.com
                </p>
              </div>

            </div>

          </div>

          {/* NAVIGATION */}
          <div className="lg:col-span-2">

            <h3 className="uppercase tracking-[0.3em] text-xs text-white mb-8">
              Navigation
            </h3>

            <div className="flex flex-col gap-5">

              <Link
                href="/"
                className="text-stone-400 hover:text-white transition duration-300"
              >
                Home
              </Link>

              <Link
                href="/catalog"
                className="text-stone-400 hover:text-white transition duration-300"
              >
                Catalog Furniture
              </Link>

              <Link
                href="/about"
                className="text-stone-400 hover:text-white transition duration-300"
              >
                About Us
              </Link>

              <Link
                href="/projects"
                className="text-stone-400 hover:text-white transition duration-300"
              >
                Projects
              </Link>

            </div>

          </div>

          {/* SERVICES */}
          <div className="lg:col-span-2">

            <h3 className="uppercase tracking-[0.3em] text-xs text-white mb-8">
              Services
            </h3>

            <div className="flex flex-col gap-5 text-stone-400 text-sm">

              <p>Custom Furniture</p>
              <p>Kitchen Set</p>
              <p>Wardrobe Interior</p>
              <p>Hospitality Project</p>
              <p>Villa & Residential</p>

            </div>

          </div>

          {/* CTA */}
          <div className="lg:col-span-3">

            <h3 className="uppercase tracking-[0.3em] text-xs text-white mb-8">
              Consultation
            </h3>

            <p className="text-stone-400 leading-relaxed mb-8 text-sm">
              Diskusikan kebutuhan interior custom Anda bersama
              tim AARDE Furniture.
            </p>

            <a
              href="https://wa.me/6281392330330"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-white text-black px-8 py-4 rounded-full text-sm font-semibold hover:bg-[#C6A969] transition duration-300 w-full sm:w-auto"
            >
              WhatsApp Consultation
            </a>

            {/* INSTAGRAM */}
            <div className="mt-10">

              <p className="uppercase tracking-[0.3em] text-xs text-stone-500 mb-5">
                Follow Our Journey
              </p>

              <a
                href="https://www.instagram.com/aardefurniture?igsh=N3J6bHltM3lnd3Rs"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 bg-[#1A1A1A] border border-stone-800 rounded-2xl p-5 hover:border-[#C6A969] hover:bg-[#202020] transition duration-300"
              >

                {/* ICON */}
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCAF45] flex items-center justify-center shrink-0">

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 text-white"
                  >
                    <path d="M7.75 2C4.574 2 2 4.574 2 7.75v8.5C2 19.426 4.574 22 7.75 22h8.5C19.426 22 22 19.426 22 16.25v-8.5C22 4.574 19.426 2 16.25 2h-8.5Zm0 1.5h8.5A4.25 4.25 0 0 1 20.5 7.75v8.5a4.25 4.25 0 0 1-4.25 4.25h-8.5A4.25 4.25 0 0 1 3.5 16.25v-8.5A4.25 4.25 0 0 1 7.75 3.5Zm8.75 1.25a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5ZM12 6.5A5.5 5.5 0 1 0 17.5 12 5.507 5.507 0 0 0 12 6.5Zm0 1.5A4 4 0 1 1 8 12a4.005 4.005 0 0 1 4-4Z" />
                  </svg>

                </div>

                {/* TEXT */}
                <div className="flex-1 min-w-0">

                  <p className="text-sm text-stone-500 mb-1">
                    Instagram
                  </p>

                  <h4 className="text-white font-semibold text-base md:text-lg group-hover:text-[#D6B87A] transition">
                    @aardefurniture
                  </h4>

                  <p className="text-stone-400 text-xs md:text-sm mt-1">
                    Interior Custom • Furniture Jepara
                  </p>

                </div>

              </a>

            </div>

          </div>

        </div>

        {/* BOTTOM */}
        <div className="py-8 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-stone-500 text-sm text-center md:text-left">
            © 2026 AARDE Furniture — All Rights Reserved.
          </p>

          <p className="text-stone-600 text-xs md:text-sm tracking-[0.2em] uppercase text-center">
            Crafted in Jepara, Indonesia
          </p>

        </div>

      </div>

    </footer>
  );
}