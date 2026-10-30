import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustBar from "./components/TrustBar";
import Products from "./components/Products";
import Science from "./components/Science";
import Process from "./components/Process";
import Diagnostics from "./components/Diagnostics";
import Clinics from "./components/Clinics";
import FAQ from "./components/FAQ";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";

export default function App() {
  return (
    <div className="min-h-screen overflow-x-clip">
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Products />
        <Science />
        <Process />
        <Diagnostics />
        <Clinics />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
