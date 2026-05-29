"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Catalog", href: "/catalog" },
    { name: "About Us", href: "/about" },
    { name: "Projects", href: "/projects" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-3 md:px-6 pt-3 md:pt-6">

      <div className="max-w-7xl mx-auto bg-[#F8F6F2]/95 backdrop-blur-xl border border-stone-200 shadow-xl rounded-[24px] px-4 md:px-10 py-4 md:py-5 flex items-center justify-between">

        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3">

          <Image
            src="/images/logo.png"
            alt="AARDE Furniture"
            width={36}
            height={36}
            className="object-contain md:w-[42px] md:h-[42px]"
          />

          <div>

            <h1 className="text-lg md:text-3xl font-bold text-[#1A1A1A] leading-none">
              AARDE Furniture
            </h1>

            <p className="text-[9px] md:text-xs tracking-[0.25em] md:tracking-[0.35em] uppercase text-[#B08B57] mt-1">
              PT. Bumi Karya Abimana
            </p>

          </div>

        </Link>

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex items-center gap-10">

          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative text-[15px] transition duration-300 ${
                  isActive
                    ? "text-black font-semibold"
                    : "text-stone-600 hover:text-black"
                }`}
              >
                {item.name}

                <span
                  className={`absolute left-0 -bottom-2 h-[2px] bg-[#B08B57] transition-all duration-300 ${
                    isActive ? "w-full" : "w-0"
                  }`}
                />

              </Link>
            );
          })}

        </nav>

        {/* DESKTOP CTA */}
        <a
          href="https://wa.me/6281392330330"
          target="_blank"
          className="hidden md:flex bg-black text-white px-8 py-4 rounded-full text-sm font-medium hover:bg-[#B08B57] transition duration-300 shadow-lg"
        >
          WhatsApp Us
        </a>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden w-11 h-11 rounded-full bg-black text-white flex items-center justify-center"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>

      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden transition-all duration-500 overflow-hidden ${
          open ? "max-h-[500px] opacity-100 mt-3" : "max-h-0 opacity-0"
        }`}
      >

        <div className="bg-[#F8F6F2] border border-stone-200 shadow-xl rounded-[24px] p-6">

          <div className="flex flex-col gap-6">

            {navItems.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`text-base transition ${
                    isActive
                      ? "text-black font-semibold"
                      : "text-stone-600"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}

            <a
              href="https://wa.me/6281392330330"
              target="_blank"
              className="bg-black text-white text-center py-4 rounded-full font-medium mt-2"
            >
              WhatsApp Consultation
            </a>

          </div>

        </div>

      </div>

    </header>
  );
}