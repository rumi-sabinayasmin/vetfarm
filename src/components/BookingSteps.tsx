import { MessageCircle, CreditCard, Share2, Calendar } from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    title: "Book a Pet Care",
    description: "Contact us on WhatsApp to book your appointment"
  },
  {
    icon: CreditCard,
    title: "Pay using WhatsApp",
    description: "Receive payment details and make secure UPI payment"
  },
  {
    icon: Share2,
    title: "Share Transaction",
    description: "Send your UPI transaction screenshot to confirm"
  },
  {
    icon: Calendar,
    title: "Choose Time Slot",
    description: "Select your preferred date and time for the visit"
  }
];

export const BookingSteps = () => {
  const handleWhatsAppBooking = () => {
    const message = "Hi! I'd like to book a pet care appointment.";
    window.open(`https://wa.me/918327507292?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <section id="booking" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Easy <span className="text-secondary">Booking Process</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Schedule professional vet care in just 4 simple steps
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div 
                key={index} 
                className="relative text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary text-primary-foreground mb-4 shadow-[var(--shadow-soft)]">
                  <Icon className="w-8 h-8" />
                </div>
                <div className="absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary to-secondary hidden lg:block" 
                     style={{ 
                       display: index === steps.length - 1 ? 'none' : 'block',
                       transform: 'translateX(50%)'
                     }} 
                />
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
                {index === 0 && (
                  <button 
                    onClick={handleWhatsAppBooking}
                    className="mt-4 text-[#25D366] hover:text-[#20BA5A] transition-colors font-medium"
                  >
                    Start WhatsApp Chat →
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
