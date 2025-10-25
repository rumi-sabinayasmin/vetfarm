import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Products } from "@/components/Products";
import { VetCare } from "@/components/VetCare";
import { BookingSteps } from "@/components/BookingSteps";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Products />
      <VetCare />
      <BookingSteps />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
