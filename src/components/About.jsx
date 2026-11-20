import React from "react";
import { CheckCircle2 } from "lucide-react";
import { BUSINESS_CONFIG } from "../config/business";

export default function About() {
  const highlights = [
    "Professional AC solutions",
    "Residential and commercial services",
    "Customer-focused approach",
    "Reliable service support"
  ];

  return (
    <section id="about" className="section-padding">
      <div className="container grid-2">
        <div className="card" style={{ borderRadius: 24 }}>
          <img
            src="/images/about-technicians.jpg"
            alt="KB Cool AC Service technician team in Chennai"
            loading="lazy"
          />
        </div>

        <div>
          <span className="badge-aqua">About KB Cool AC Service</span>
          <h2 style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 800, marginTop: "0.75rem" }}>
            Your Trusted AC Service Partner in Chennai.
          </h2>
          <p style={{ color: "#647B85", marginTop: "1rem", fontSize: "1.02rem" }}>
            KB Cool AC Service provides professional air conditioning solutions for residential and commercial customers across Chennai. From AC installation and general servicing to deep cleaning, gas charging and technical repairs, we focus on reliable workmanship and customer satisfaction.
          </p>
          <p
            style={{
              color: "#163D4B",
              fontWeight: 600,
              marginTop: "1rem",
              padding: "1rem",
              background: "#EAFBFD",
              borderLeft: "4px solid #079DB8",
              borderRadius: 12
            }}
          >
            Our aim is to make AC maintenance and repair simple, convenient and affordable for every customer.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "0.85rem",
              marginTop: "1.5rem"
            }}
          >
            {highlights.map((item) => (
              <div
                key={item}
                className="card"
                style={{ padding: "0.9rem 1rem", display: "flex", alignItems: "center", gap: "0.65rem" }}
              >
                <CheckCircle2 size={20} color="#079DB8" />
                <span style={{ fontWeight: 700, fontSize: "0.92rem" }}>{item}</span>
              </div>
            ))}
          </div>

          <div style={{ marginTop: "1.5rem" }}>
            <div style={{ fontSize: "0.78rem", fontWeight: 700, color: "#647B85", textTransform: "uppercase" }}>
              Servicing All Leading AC Brands
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginTop: "0.5rem" }}>
              {BUSINESS_CONFIG.acBrands.map((brand) => (
                <span
                  key={brand}
                  style={{
                    padding: "0.3rem 0.7rem",
                    background: "#EAFBFD",
                    border: "1px solid #DCECEF",
                    borderRadius: 8,
                    fontSize: "0.8rem",
                    fontWeight: 600
                  }}
                >
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
