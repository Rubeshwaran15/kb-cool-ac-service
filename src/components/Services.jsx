import React, { useState } from "react";
import { SERVICES_LIST } from "../config/business";
import ServiceCard from "./ServiceCard";
import { openDirectWhatsAppChat } from "../utils/whatsapp";

export default function Services({ onSelectService }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [modalService, setModalService] = useState(null);

  const categories = [
    "All",
    "Servicing & Cleaning",
    "Repair & Gas Charging",
    "Installation & Shifting",
    "AMC & Commercial"
  ];

  const filteredServices =
    selectedCategory === "All"
      ? SERVICES_LIST
      : SERVICES_LIST.filter((s) => s.category === selectedCategory);

  return (
    <section id="services" className="section-padding section-alt">
      <div className="container">
        <div style={{ textAlign: "center", maxWidth: 720, margin: "0 auto" }}>
          <span className="badge-aqua">Our AC Services</span>
          <h2 style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 800, marginTop: "0.75rem" }}>
            Complete Air Conditioning Solutions in Chennai
          </h2>
          <p style={{ color: "#647B85", marginTop: "0.6rem" }}>
            Explore all 13 residential and commercial AC services. Select any service to view details or book directly via WhatsApp.
          </p>
        </div>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.5rem",
            justifyContent: "center",
            marginTop: "1.75rem"
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={selectedCategory === cat ? "btn btn-primary" : "btn btn-outline"}
              style={{ padding: "0.55rem 1.1rem", fontSize: "0.85rem" }}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="services-grid">
          {filteredServices.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onSelectService={onSelectService}
              onLearnMore={(srv) => setModalService(srv)}
            />
          ))}
        </div>

        {modalService && (
          <div
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(22, 61, 75, 0.72)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "1rem",
              zIndex: 100
            }}
          >
            <div className="card" style={{ maxWidth: 540, width: "100%", padding: "1.5rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span className="badge-aqua">{modalService.category}</span>
                <button
                  type="button"
                  onClick={() => setModalService(null)}
                  style={{
                    border: "none",
                    background: "#EAFBFD",
                    borderRadius: "50%",
                    width: 34,
                    height: 34,
                    fontWeight: 700,
                    cursor: "pointer"
                  }}
                >
                  ✕
                </button>
              </div>
              <h3 style={{ fontSize: "1.4rem", fontWeight: 800, marginTop: "0.75rem" }}>
                {modalService.title}
              </h3>
              <p style={{ color: "#647B85", marginTop: "0.5rem" }}>{modalService.description}</p>
              <ul style={{ marginTop: "1rem", paddingLeft: "1.2rem", color: "#163D4B", fontSize: "0.92rem" }}>
                {modalService.highlights.map((pt) => (
                  <li key={pt} style={{ marginBottom: "0.4rem" }}>
                    {pt}
                  </li>
                ))}
              </ul>
              <div
                style={{
                  marginTop: "1rem",
                  padding: "0.75rem",
                  background: "#EAFBFD",
                  borderRadius: 10,
                  fontSize: "0.85rem",
                  fontWeight: 600
                }}
              >
                Inspection Charge: Starting from ₹200 (Any additional charges communicated before service)
              </div>
              <div style={{ display: "flex", gap: "0.75rem", marginTop: "1.25rem" }}>
                <button
                  type="button"
                  className="btn btn-primary"
                  style={{ flex: 1 }}
                  onClick={() => {
                    const title = modalService.title;
                    setModalService(null);
                    onSelectService(title);
                  }}
                >
                  Book Now
                </button>
                <button
                  type="button"
                  className="btn btn-outline"
                  style={{ flex: 1 }}
                  onClick={() =>
                    openDirectWhatsAppChat(
                      `Hello KB Cool AC Service! I would like to know more about ${modalService.title}.`
                    )
                  }
                >
                  Ask on WhatsApp
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
