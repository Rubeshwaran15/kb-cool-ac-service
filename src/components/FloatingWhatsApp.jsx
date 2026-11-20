import React from "react";
import { MessageCircle } from "lucide-react";
import { openDirectWhatsAppChat } from "../utils/whatsapp";

export default function FloatingWhatsApp() {
  return (
    <button
      type="button"
      className="floating-whatsapp"
      onClick={() => openDirectWhatsAppChat()}
      aria-label="Chat with KB COOL AC SERVICE on WhatsApp"
    >
      <MessageCircle size={22} />
      <span>WhatsApp Us</span>
    </button>
  );
}
