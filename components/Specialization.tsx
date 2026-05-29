import Image from "next/image";

const items = [
  {
    title: "Precision Design",
    desc: "Pengerjaan custom mengikuti detail arsitektur ruangan hingga milimeter terkecil.",
    image: "/images/spesialis-1.jpg",
  },
  {
    title: "Material Selection",
    desc: "Pemilihan kayu, warna finishing, kain, dan aksesoris premium sesuai kebutuhan.",
    image: "/images/spesialis-2.jpg",
  },
  {
    title: "B2B Integration",
    desc: "Solusi pengadaan furniture skala besar untuk proyek villa, hotel, cafe, dan properti.",
    image: "/images/spesialis-3.jpg",
  },
];

export default function Specialization() {
  return (
    <section className="py-24 bg-[#F9F8F6]">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start md:items-center mb-10 md:mb-16">

  {/* LEFT */}
  <div className="md:col-span-7">

    <h2 className="text-[10px] sm:text-xs font-bold tracking-[0.28em] md:tracking-[0.4em] uppercase text-stone-400 mb-3 md:mb-5">
      Specialization
    </h2>

    <h3 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-[1.05]">

      The Art of
      <br />

      <span className="italic font-light text-stone-500">
        Customization
      </span>

    </h3>

  </div>

  {/* RIGHT */}
  <div
    className="
      md:col-span-5
      md:border-l-2
      border-stone-300
      md:pl-8
      pt-1
      md:pt-0
    "
  >

    <p className="text-sm sm:text-base md:text-lg text-stone-600 italic leading-[1.9]">

      “Ruangan Anda adalah cerminan visi Anda.
      Kami memastikan visi tersebut tidak
      terkompromi oleh pilihan yang terbatas.”

    </p>

  </div>

</div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          {items.map((item, index) => (
            <div
              key={index}
              className="group relative h-[450px] overflow-hidden rounded-3xl shadow-2xl"
            >

              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-110 transition duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

              <div className="absolute bottom-0 p-8 text-white">
                <h4 className="text-2xl font-bold mb-4">
                  {item.title}
                </h4>

                <p className="text-stone-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}