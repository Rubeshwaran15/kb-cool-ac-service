import React from "react";
import { ShieldCheck, IndianRupee, MapPin, Layers, ThumbsUp, Zap } from "lucide-react";
import { WHY_CHOOSE_FEATURES } from "../config/business";

const ICONS = [ShieldCheck, IndianRupee, MapPin, Layers, ThumbsUp, Zap];

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="section-padding section-alt">
      <div className="container">
        <div style={{ textAlign: "center", maxWidth: 680, margin: "0 auto" }}>
          <span className="badge-aqua">Why Choose Us</span>
          <h2 style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 800, marginTop: "0.75rem" }}>
            Why Choose KB COOL AC SERVICE
          </h2>
        </div>

        <div className="features-grid">
          {WHY_CHOOSE_FEATURES.map((feat, idx) => {
            const IconComponent = ICONS[idx % ICONS.length];
            return (
              <div key={feat.id} className="card" style={{ padding: "1.75rem" }}>
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 14,
                    background: "#EAFBFD",
                    color: "#079DB8",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "1rem"
                  }}
                >
                  <IconComponent size={24} />
                </div>
                <h3 style={{ fontSize: "1.15rem", fontWeight: 800 }}>{feat.title}</h3>
                <p style={{ color: "#647B85", marginTop: "0.45rem", fontSize: "0.94rem" }}>
                  {feat.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
