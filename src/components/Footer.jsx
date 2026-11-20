import React from "react";
import { BUSINESS_CONFIG, SERVICES_LIST } from "../config/business";

export default function Footer() {
  return (
    <footer
      style={{
        background: "#163D4B",
        color: "#FFFFFF",
        padding: "4rem 0 2.5rem",
        borderTop: "4px solid #079DB8"
      }}
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
            gap: "2.5rem",
            paddingBottom: "2.5rem",
            borderBottom: "1px solid rgba(255, 255, 255, 0.12)"
          }}
        >
          <div>
            <div
              style={{
                display: "inline-block",
                background: "#FFFFFF",
                padding: "0.55rem 0.9rem",
                borderRadius: 16,
                border: "2px solid #37C5D5"
              }}
            >
              <img
                src="/images/kb-cool-logo.png?v=3"
                alt="KB COOL AC SERVICE"
                style={{ height: 52, width: "auto", objectFit: "contain" }}
              />
            </div>
            <p style={{ color: "#37C5D5", fontWeight: 700, marginTop: "0.85rem", fontSize: "0.92rem" }}>
              "{BUSINESS_CONFIG.tagline}"
            </p>
            <p style={{ color: "#EAFBFD", opacity: 0.8, fontSize: "0.88rem", marginTop: "0.5rem" }}>
              Professional AC installation, servicing, jet wash deep cleaning, gas charging and repair across Chennai, Tamil Nadu.
            </p>
          </div>

          <div>
            <h4 style={{ color: "#37C5D5", fontSize: "0.9rem", textTransform: "uppercase", marginBottom: "0.85rem" }}>
              Quick Links
            </h4>
            <ul style={{ listStyle: "none", lineHeight: 2, fontSize: "0.9rem" }}>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#services">Our Services</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#booking">Book AC Service</a></li>
              <li><a href="#reviews">Reviews</a></li>
              <li><a href="#faq">FAQ</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 style={{ color: "#37C5D5", fontSize: "0.9rem", textTransform: "uppercase", marginBottom: "0.85rem" }}>
              Main Services
            </h4>
            <ul style={{ listStyle: "none", lineHeight: 1.9, fontSize: "0.88rem" }}>
              {SERVICES_LIST.slice(0, 7).map((s) => (
                <li key={s.id}>
                  <a href="#booking">{s.title}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 style={{ color: "#37C5D5", fontSize: "0.9rem", textTransform: "uppercase", marginBottom: "0.85rem" }}>
              Contact Details
            </h4>
            <p style={{ fontSize: "0.9rem", marginBottom: "0.5rem" }}>{BUSINESS_CONFIG.location}</p>
            <p style={{ fontSize: "0.95rem", fontWeight: 700, marginBottom: "0.5rem" }}>
              <a href={`tel:${BUSINESS_CONFIG.contactNumberTel}`}>Phone: {BUSINESS_CONFIG.contactNumberDisplay}</a>
            </p>
            <p style={{ fontSize: "0.95rem", fontWeight: 700 }}>
              <a
                href={`https://wa.me/${BUSINESS_CONFIG.whatsappNumber}?text=${encodeURIComponent(
                  BUSINESS_CONFIG.defaultWhatsAppGreeting
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#37C5D5" }}
              >
                WhatsApp: {BUSINESS_CONFIG.whatsappDisplay}
              </a>
            </p>
          </div>
        </div>

        <div style={{ paddingTop: "1.75rem", textAlign: "center", fontSize: "0.85rem", color: "#EAFBFD" }}>
          {BUSINESS_CONFIG.copyright}
        </div>
      </div>
    </footer>
  );
}

