import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";  
import LineageSection from "../components/LineageSection";
import Specialization from "../components/Specialization";
import BespokeCTA from "../components/BespokeCTA";

export default function HomePage() {
  return (
    <main className="bg-[#F6F2EC] text-[#111111]">
      <Hero />
      <LineageSection />
      <Specialization />
      <BespokeCTA />
    </main>
  );
}