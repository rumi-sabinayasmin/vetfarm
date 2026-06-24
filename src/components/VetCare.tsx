import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, Stethoscope, Syringe, Heart, Clock } from "lucide-react";

const services = [
  { icon: Stethoscope, name: "Health Checkup", description: "Thorough examination by a registered vet" },
  { icon: Syringe, name: "Vaccination", description: "Core and booster immunizations" },
  { icon: Heart, name: "Emergency Care", description: "Prompt urgent care when your pet needs it" },
  { icon: Clock, name: "Home Visits", description: "Vet comes to your doorstep in Murshidabad" }
];

export const VetCare = () => {
  const handleBooking = () => {
    const message = "Hi! I'd like to book a consultation with the registered veterinary practitioner.";
    window.open(`https://wa.me/918436517292?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <section id="vet-care" className="py-20 bg-gradient-to-br from-secondary/10 to-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Registered <span className="text-secondary">Veterinary Practitioner</span> Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Licensed veterinary care for dogs and cats across Dhuliyan, Murshidabad. Every consultation is handled by a registered practitioner — at your home or on call.
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
