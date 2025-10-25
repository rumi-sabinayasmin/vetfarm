import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-pets.jpg";

export const Hero = () => {
  const scrollToProducts = () => {
    document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleWhatsAppContact = () => {
    const message = "Hi! I'd like to book vet care services for my pet.";
    window.open(`https://wa.me/918327507292?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/30 via-background/20 to-background/10" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl bg-background/80 backdrop-blur-sm rounded-2xl p-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-foreground">
            Best Pet Care Services in
            <span className="bg-gradient-to-r from-primary to-[hsl(25_90%_65%)] bg-clip-text text-transparent"> West Bengal</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            Expert veterinary consultations, vaccinations, and health checkups in Dhuliyan, Murshidabad. West Bengal's most trusted pet care service with home visits.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              variant="whatsapp" 
              size="xl"
              onClick={handleWhatsAppContact}
              className="group"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              WhatsApp a Vet
            </Button>
            <Button 
              variant="outline" 
              size="xl"
              onClick={scrollToProducts}
              className="group"
            >
              Order Pet Food
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
