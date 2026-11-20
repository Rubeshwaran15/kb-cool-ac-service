import React from "react";
import { ShieldCheck, UserCheck, Tag, Calendar, MessageCircle, Phone } from "lucide-react";
import { BUSINESS_CONFIG } from "../config/business";
import { openDirectWhatsAppChat } from "../utils/whatsapp";

export default function Hero() {
  return (
    <section
      id="home"
      style={{
        padding: "2.75rem 0 3.75rem",
        background: "linear-gradient(180deg, #EAFBFD 0%, #FFFFFF 100%)",
        borderBottom: "1px solid #DCECEF"
      }}
    >
      <div className="container grid-2">
        {/* Left Column — Starts cleanly at top */}
        <div>
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.38rem 0.95rem",
              borderRadius: 999,
              background: "#163D4B",
              color: "#37C5D5",
              fontSize: "0.78rem",
              fontWeight: 800,
              letterSpacing: "0.06em",
              textTransform: "uppercase"
            }}
          >
            KB COOL AC SERVICE
          </span>

          <h1 style={{ fontSize: "clamp(2rem, 3.6vw, 3rem)", fontWeight: 800, marginTop: "0.85rem" }}>
            {BUSINESS_CONFIG.tagline}
          </h1>

          <h2 style={{ fontSize: "1.18rem", fontWeight: 700, color: "#079DB8", marginTop: "0.65rem" }}>
            {BUSINESS_CONFIG.supportingHeading}
          </h2>

          <p style={{ color: "#647B85", fontSize: "1rem", marginTop: "0.75rem", maxWidth: 600 }}>
            {BUSINESS_CONFIG.heroDescription}
          </p>

          {/* Inspection Charge Banner (Clean pill without cramped box icon) */}
          <div
            style={{
              display: "inline-flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: "0.65rem",
              background: "#EAFBFD",
              border: "1px solid #37C5D5",
              padding: "0.75rem 1.25rem",
              borderRadius: 14,
              marginTop: "1.1rem"
            }}
          >
            <strong style={{ color: "#079DB8", fontSize: "1.02rem" }}>
              Inspection Charges Starting at ₹200
            </strong>
            <span style={{ color: "#163D4B", fontSize: "0.86rem", fontWeight: 500 }}>
              • Upfront quote before any repair work begins
            </span>
          </div>

          {/* Primary CTA Buttons */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.85rem", marginTop: "1.25rem" }}>
            <a href="#booking" className="btn btn-primary">
              <Calendar size={18} />
              <span>Book AC Service</span>
            </a>
            <button
              type="button"
              onClick={() => openDirectWhatsAppChat()}
              className="btn btn-outline"
            >
              <MessageCircle size={18} color="#079DB8" />
              <span>Chat on WhatsApp</span>
            </button>
          </div>

          {/* Three Trust Highlights */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(165px, 1fr))",
              gap: "0.75rem",
              marginTop: "1.35rem"
            }}
          >
            <div className="card" style={{ padding: "0.8rem 0.9rem", display: "flex", alignItems: "center", gap: "0.55rem" }}>
              <ShieldCheck size={19} color="#079DB8" style={{ flexShrink: 0 }} />
              <strong style={{ fontSize: "0.84rem", whiteSpace: "nowrap" }}>Professional AC Service</strong>
            </div>
            <div className="card" style={{ padding: "0.8rem 0.9rem", display: "flex", alignItems: "center", gap: "0.55rem" }}>
              <UserCheck size={19} color="#079DB8" style={{ flexShrink: 0 }} />
              <strong style={{ fontSize: "0.84rem", whiteSpace: "nowrap" }}>Reliable Technicians</strong>
            </div>
            <div className="card" style={{ padding: "0.8rem 0.9rem", display: "flex", alignItems: "center", gap: "0.55rem" }}>
              <Tag size={19} color="#079DB8" style={{ flexShrink: 0 }} />
              <strong style={{ fontSize: "0.84rem", whiteSpace: "nowrap" }}>Affordable Pricing</strong>
            </div>
          </div>
        </div>

        {/* Right Column — Top-aligned with left column */}
        <div>
          <div className="card" style={{ borderRadius: 24, border: "4px solid #FFFFFF" }}>
            <img
              src="/images/hero-ac-service.jpg"
              alt="KB Cool AC Service technician servicing split AC in Chennai"
              style={{ width: "100%", height: "auto", objectFit: "cover" }}
            />
            <div
              style={{
                padding: "0.95rem 1.25rem",
                background: "#FFFFFF",
                borderTop: "1px solid #DCECEF",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "0.75rem",
                flexWrap: "wrap"
              }}
            >
              <div>
                <strong style={{ display: "block", fontSize: "0.9rem", color: "#163D4B" }}>
                  Doorstep AC Service Across Chennai
                </strong>
                <span style={{ fontSize: "0.78rem", color: "#647B85" }}>
                  Split, Window &amp; Inverter AC Specialists
                </span>
              </div>
              <a
                href={`tel:${BUSINESS_CONFIG.contactNumberTel}`}
                className="btn btn-outline"
                style={{ padding: "0.45rem 0.9rem", fontSize: "0.8rem" }}
              >
                <Phone size={14} color="#079DB8" />
                <span>Call {BUSINESS_CONFIG.contactNumberDisplay}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
