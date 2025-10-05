import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-pets.jpg";

export const Hero = () => {
  const scrollToProducts = () => {
    document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToBooking = () => {
    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/60" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Premium Care for Your
            <span className="bg-gradient-to-r from-primary to-[hsl(25_90%_65%)] bg-clip-text text-transparent"> Furry Friends</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            Quality nutrition and professional vet care, all in one place. Your pet deserves the best.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              variant="hero" 
              size="xl"
              onClick={scrollToProducts}
              className="group"
            >
              Shop Pet Food
            </Button>
            <Button 
              variant="outline" 
              size="xl"
              onClick={scrollToBooking}
              className="group"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Book Vet Care
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
