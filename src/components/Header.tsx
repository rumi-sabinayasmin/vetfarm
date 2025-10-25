import logoImage from "@/assets/vetfarm-logo.jpg";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

export const Header = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleWhatsAppContact = () => {
    const message = "Hi! I'd like to get in touch about your pet care services.";
    window.open(`https://wa.me/918327507292?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center gap-4">
            <img 
              src={logoImage} 
              alt="VetFarm Logo" 
              className="h-12 w-12 rounded-lg object-cover"
            />
            <div className="hidden sm:block">
              <h2 className="text-2xl font-bold text-foreground">VetFarm</h2>
              <p className="text-sm text-muted-foreground">Bengal's most trusted pet care service</p>
            </div>
          </div>

          <nav className="flex items-center gap-2 md:gap-6">
            <button
              onClick={() => scrollToSection("products")}
              className="text-sm md:text-base text-muted-foreground hover:text-foreground transition-colors font-medium"
            >
              Pet Food
            </button>
            <Button 
              variant="whatsapp"
              size="default"
              onClick={handleWhatsAppContact}
              className="shadow-[var(--shadow-soft)]"
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              <span className="hidden sm:inline">WhatsApp Us</span>
              <span className="sm:hidden">WhatsApp</span>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};
