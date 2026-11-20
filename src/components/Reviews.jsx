import React from "react";
import { Star } from "lucide-react";
import { CUSTOMER_REVIEWS } from "../config/business";

export default function Reviews() {
  return (
    <section id="reviews" className="section-padding section-alt">
      <div className="container">
        <div style={{ textAlign: "center", maxWidth: 680, margin: "0 auto" }}>
          <span className="badge-aqua">Customer Testimonials</span>
          <h2 style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 800, marginTop: "0.75rem" }}>
            What Our Customers Say.
          </h2>
          <p style={{ color: "#647B85", marginTop: "0.5rem", fontSize: "0.95rem" }}>
            Trusted by homeowners and businesses across Chennai for prompt doorstep AC servicing, deep cleaning, gas charging, and repairs.
          </p>
        </div>

        <div className="features-grid">
          {CUSTOMER_REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="card"
              style={{
                padding: "1.75rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between"
              }}
            >
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div style={{ display: "flex", gap: 4, color: "#079DB8" }}>
                    {Array.from({ length: rev.rating }).map((_, idx) => (
                      <Star key={idx} size={16} fill="#079DB8" />
                    ))}
                  </div>
                  <span className="badge-aqua" style={{ fontSize: "0.68rem" }}>
                    {rev.serviceTag}
                  </span>
                </div>
                <p style={{ color: "#163D4B", marginTop: "1rem", fontSize: "0.93rem", lineHeight: 1.65 }}>
                  "{rev.reviewText}"
                </p>
              </div>
              <div
                style={{
                  marginTop: "1.25rem",
                  paddingTop: "0.85rem",
                  borderTop: "1px solid #DCECEF",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem"
                }}
              >
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    background: "#163D4B",
                    color: "#37C5D5",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 800,
                    fontSize: "0.8rem"
                  }}
                >
                  {rev.initials}
                </div>
                <div>
                  <strong style={{ display: "block", fontSize: "0.95rem" }}>{rev.customerName}</strong>
                  <span style={{ fontSize: "0.8rem", color: "#647B85" }}>{rev.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
