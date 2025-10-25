import { MessageCircle, Mail, MapPin, Phone } from "lucide-react";

export const Footer = () => {
  const handleWhatsAppContact = () => {
    const message = "Hi! I'd like to get in touch about your pet care services.";
    window.open(`https://wa.me/918327507292?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <footer className="bg-card border-t-2 border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              VetFarm
            </h3>
            <p className="text-muted-foreground mb-4">
              From Bowl to Doctor - Complete Pet Wellness in West Bengal. Serving Berhampore, Murshidabad & surrounding areas.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="#products" className="hover:text-primary transition-colors">
                  Pet Food
                </a>
              </li>
              <li>
                <a href="#booking" className="hover:text-primary transition-colors">
                  Vet Care Services
                </a>
              </li>
              <li>
                <a href="#booking" className="hover:text-primary transition-colors">
                  Book Appointment
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2">
                <Phone className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <a 
                  href="tel:+918327507292"
                  className="text-primary hover:text-primary/80 transition-colors cursor-pointer"
                >
                  +91 8327507292
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MessageCircle className="w-5 h-5 text-[#25D366] mt-0.5 flex-shrink-0" />
                <button 
                  onClick={handleWhatsAppContact}
                  className="text-[#25D366] hover:text-[#20BA5A] transition-colors cursor-pointer"
                >
                  WhatsApp: +91 8327507292
                </button>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span>drattiksahadat11@gmail.com</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span>Berhampore, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-muted-foreground">
          <p>&copy; 2025 VetFarm. All rights reserved. Made with ❤️ for pets.</p>
        </div>
      </div>
    </footer>
  );
};
