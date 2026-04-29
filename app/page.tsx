import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import QuienesSomos from "@/components/QuienesSomos";
import Servicios from "@/components/Servicios";
import Infraestructura from "@/components/Infraestructura";
import VisionMision from "@/components/VisionMision";
import Valores from "@/components/Valores";
import Contacto from "@/components/Contacto";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <Marquee />
      <QuienesSomos />
      <Servicios />
      <Infraestructura />
      <VisionMision />
      <Valores />
      <Contacto />
      <Footer />
    </main>
  );
}
