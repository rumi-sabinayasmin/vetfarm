import { MessageCircle } from "lucide-react";

export const FloatingWhatsApp = () => {
  const handleWhatsAppContact = () => {
    const message = "Hi! I'd like to get in touch about your pet care services.";
    window.open(`https://wa.me/918327507292?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <button
      onClick={handleWhatsAppContact}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BA5A] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
      <div className="absolute right-16 top-1/2 transform -translate-y-1/2 bg-[#25D366] text-white px-3 py-2 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        Chat with us!
      </div>
    </button>
  );
};
