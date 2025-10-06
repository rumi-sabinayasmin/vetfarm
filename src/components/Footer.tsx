import { MessageCircle, Mail, MapPin, Phone } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-card border-t-2 border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              VetFarm
            </h3>
            <p className="text-muted-foreground mb-4">
              From Bowl to Doctor - Complete Pet Wellness.
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
                <span>+91 8327507292</span>
              </li>
              <li className="flex items-start gap-2">
                <MessageCircle className="w-5 h-5 text-[#25D366] mt-0.5 flex-shrink-0" />
                <span>WhatsApp: +91 8327507292</span>
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
