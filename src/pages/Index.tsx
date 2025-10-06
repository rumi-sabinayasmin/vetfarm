import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Products } from "@/components/Products";
import { VetCare } from "@/components/VetCare";
import { BookingSteps } from "@/components/BookingSteps";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Products />
      <VetCare />
      <BookingSteps />
      <Footer />
    </div>
  );
};

export default Index;
