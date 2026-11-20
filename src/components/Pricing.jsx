import React from "react";
import { Info, CheckCircle } from "lucide-react";
import { BUSINESS_CONFIG } from "../config/business";

export default function Pricing() {
  return (
    <section id="pricing" className="section-padding">
      <div className="container">
        <div
          style={{
            background: "linear-gradient(135deg, #163D4B 0%, #0E2933 100%)",
            color: "#FFFFFF",
            borderRadius: 28,
            padding: "clamp(1.75rem, 4vw, 3.5rem)",
            border: "1px solid #079DB8"
          }}
        >
          <div className="grid-2">
            <div>
              <span className="badge-aqua">Transparent Service Pricing</span>
              <h2 style={{ color: "#FFFFFF", fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 800, marginTop: "0.85rem" }}>
                Professional AC Service at Transparent Prices.
              </h2>
              <p style={{ color: "#EAFBFD", marginTop: "1rem", fontSize: "1.05rem" }}>
                {BUSINESS_CONFIG.inspectionSupportingText}
              </p>

              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "0.75rem",
                  background: "rgba(255, 255, 255, 0.1)",
                  border: "1px solid rgba(55, 197, 213, 0.45)",
                  padding: "1rem 1.25rem",
                  borderRadius: 16,
                  marginTop: "1.25rem"
                }}
              >
                <Info size={22} color="#37C5D5" style={{ flexShrink: 0, marginTop: 2 }} />
                <strong>{BUSINESS_CONFIG.pricingNote}</strong>
              </div>
            </div>

            <div className="card" style={{ padding: "2rem", color: "#163D4B" }}>
              <div style={{ fontSize: "0.8rem", fontWeight: 700, color: "#079DB8", textTransform: "uppercase" }}>
                Initial Doorstep Diagnosis
              </div>
              <h3 style={{ fontSize: "1.5rem", fontWeight: 800, marginTop: "0.25rem" }}>
                {BUSINESS_CONFIG.inspectionHighlight}
              </h3>
              <div
                style={{
                  background: "#EAFBFD",
                  padding: "1.25rem",
                  borderRadius: 16,
                  marginTop: "1rem",
                  textAlign: "center"
                }}
              >
                <span style={{ fontSize: "2.25rem", fontWeight: 800, color: "#079DB8" }}>₹200</span>
                <span style={{ fontWeight: 700, marginLeft: 6 }}>onwards</span>
              </div>
              <ul style={{ listStyle: "none", marginTop: "1.25rem" }}>
                <li style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem" }}>
                  <CheckCircle size={18} color="#079DB8" />
                  <span>Doorstep AC inspection across Chennai</span>
                </li>
                <li style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem" }}>
                  <CheckCircle size={18} color="#079DB8" />
                  <span>Clear fault explanation before repair work</span>
                </li>
              </ul>
              <a href="#booking" className="btn btn-primary" style={{ width: "100%", marginTop: "1rem" }}>
                Book Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
