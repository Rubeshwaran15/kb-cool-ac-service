import React from "react";
import { MessageCircle } from "lucide-react";
import { openDirectWhatsAppChat } from "../utils/whatsapp";

export default function ServiceCard({ service, onSelectService, onLearnMore }) {
  return (
    <article className="card" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
      <div>
        <div style={{ position: "relative", height: 200, overflow: "hidden", background: "#EAFBFD" }}>
          <img
            src={service.image}
            alt={`${service.title} - KB Cool AC Service Chennai`}
            loading="lazy"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          <button
            type="button"
            onClick={() =>
              openDirectWhatsAppChat(
                `Hello KB Cool AC Service! I would like to inquire about ${service.title} in Chennai.`
              )
            }
            title={`Ask about ${service.title} on WhatsApp`}
            style={{
              position: "absolute",
              top: 12,
              right: 12,
              width: 36,
              height: 36,
              borderRadius: "50%",
              background: "#FFFFFF",
              border: "1px solid #DCECEF",
              color: "#079DB8",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer"
            }}
          >
            <MessageCircle size={18} />
          </button>
        </div>

        <div style={{ padding: "1.25rem" }}>
          <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "#079DB8", marginBottom: "0.3rem" }}>
            {service.category} • Inspection ₹200+
          </div>
          <h3 style={{ fontSize: "1.12rem", fontWeight: 800 }}>{service.title}</h3>
          <p style={{ fontSize: "0.9rem", color: "#647B85", marginTop: "0.45rem" }}>
            {service.description}
          </p>
        </div>
      </div>

      <div style={{ padding: "0 1.25rem 1.25rem", display: "flex", gap: "0.65rem" }}>
        <button
          type="button"
          onClick={() => onLearnMore(service)}
          className="btn btn-outline"
          style={{ flex: 1, padding: "0.65rem", fontSize: "0.85rem" }}
        >
          Learn More
        </button>
        <button
          type="button"
          onClick={() => onSelectService(service.title)}
          className="btn btn-primary"
          style={{ flex: 1, padding: "0.65rem", fontSize: "0.85rem" }}
        >
          Book Now
        </button>
      </div>
    </article>
  );
}
