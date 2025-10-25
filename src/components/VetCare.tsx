import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, Stethoscope, Syringe, Heart, Clock } from "lucide-react";

const services = [
  { icon: Stethoscope, name: "Health Checkup", description: "Complete physical examination" },
  { icon: Syringe, name: "Vaccination", description: "Essential immunizations" },
  { icon: Heart, name: "Emergency Care", description: "24/7 urgent care support" },
  { icon: Clock, name: "Regular Visits", description: "Scheduled wellness checks" }
];

export const VetCare = () => {
  const handleBooking = () => {
    const message = "Hi! I'd like to book vet care services for my pet.";
    window.open(`https://wa.me/918327507292?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <section className="py-20 bg-gradient-to-br from-secondary/10 to-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Professional <span className="text-secondary">Veterinary Services</span> in West Bengal
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Expert veterinary services in Berhampore, Murshidabad. Home visits, vaccinations, and health checkups delivered with care and compassion.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="border-2 hover:border-secondary transition-colors duration-300">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-secondary/10 text-secondary mb-4">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{service.name}</h3>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button 
            variant="whatsapp" 
            size="xl"
            onClick={handleBooking}
            className="shadow-lg"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Book Vet Care Now
          </Button>
        </div>
      </div>
    </section>
  );
};
