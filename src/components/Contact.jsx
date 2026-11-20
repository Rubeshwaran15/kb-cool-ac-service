import React from "react";
import { Phone, MessageCircle, MapPin, Clock } from "lucide-react";
import { BUSINESS_CONFIG } from "../config/business";

export default function Contact() {
  return (
    <section id="contact" className="section-padding section-alt">
      <div className="container">
        <div style={{ textAlign: "center", maxWidth: 680, margin: "0 auto 2.5rem" }}>
          <span className="badge-aqua">Contact Us</span>
          <h2 style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 800, marginTop: "0.75rem" }}>
            Get in Touch With {BUSINESS_CONFIG.businessName}
          </h2>
        </div>

        <div className="features-grid">
          <div className="card" style={{ padding: "1.75rem" }}>
            <Phone size={28} color="#079DB8" />
            <h3 style={{ fontSize: "1.2rem", fontWeight: 800, marginTop: "0.75rem" }}>
              Phone: {BUSINESS_CONFIG.contactNumberDisplay}
            </h3>
            <p style={{ color: "#647B85", fontSize: "0.9rem", margin: "0.5rem 0 1.25rem" }}>
              Direct call support for doorstep AC installation, servicing, and repairs across Chennai.
            </p>
            <a href={`tel:${BUSINESS_CONFIG.contactNumberTel}`} className="btn btn-primary" style={{ width: "100%" }}>
              Call KB Cool
            </a>
          </div>

          <div className="card" style={{ padding: "1.75rem" }}>
            <MessageCircle size={28} color="#079DB8" />
            <h3 style={{ fontSize: "1.2rem", fontWeight: 800, marginTop: "0.75rem" }}>
              WhatsApp: {BUSINESS_CONFIG.whatsappDisplay}
            </h3>
            <p style={{ color: "#647B85", fontSize: "0.9rem", margin: "0.5rem 0 1.25rem" }}>
              Instant Click-to-Chat on WhatsApp for service inquiries and quick booking.
            </p>
            <a
              href={`https://wa.me/${BUSINESS_CONFIG.whatsappNumber}?text=${encodeURIComponent(
                BUSINESS_CONFIG.defaultWhatsAppGreeting
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{ width: "100%" }}
            >
              Chat on WhatsApp
            </a>
          </div>

          <div className="card" style={{ padding: "1.75rem" }}>
            <MapPin size={28} color="#079DB8" />
            <h3 style={{ fontSize: "1.2rem", fontWeight: 800, marginTop: "0.75rem" }}>
              {BUSINESS_CONFIG.location}
            </h3>
            <p style={{ color: "#647B85", fontSize: "0.9rem", marginTop: "0.5rem" }}>
              Serving residential and commercial customers across all Chennai neighborhoods.
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginTop: "1rem", fontSize: "0.85rem", color: "#163D4B" }}>
              <Clock size={16} color="#079DB8" />
              <span>{BUSINESS_CONFIG.workingHoursPlaceholder}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
