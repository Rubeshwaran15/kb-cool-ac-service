import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FAQ_ITEMS } from "../config/business";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="section-padding">
      <div className="container" style={{ maxWidth: 860 }}>
        <div style={{ textAlign: "center", marginBottom: "2.25rem" }}>
          <span className="badge-aqua">FAQ</span>
          <h2 style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 800, marginTop: "0.75rem" }}>
            Frequently Asked Questions
          </h2>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={item.question}
                className="card"
                style={{
                  borderColor: isOpen ? "#079DB8" : "#DCECEF",
                  background: isOpen ? "#F8FEFF" : "#FFFFFF"
                }}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  style={{
                    width: "100%",
                    padding: "1.15rem 1.35rem",
                    background: "transparent",
                    border: "none",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    textAlign: "left",
                    fontWeight: 700,
                    fontSize: "1rem",
                    color: "#163D4B",
                    cursor: "pointer"
                  }}
                >
                  <span>{item.question}</span>
                  <ChevronDown
                    size={20}
                    color="#079DB8"
                    style={{
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 0.2s"
                    }}
                  />
                </button>
                {isOpen && (
                  <div
                    style={{
                      padding: "0 1.35rem 1.25rem",
                      color: "#647B85",
                      fontSize: "0.94rem",
                      borderTop: "1px solid #DCECEF",
                      paddingTop: "0.85rem"
                    }}
                  >
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
