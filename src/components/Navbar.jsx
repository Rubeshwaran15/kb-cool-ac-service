import React, { useState } from "react";
import { Phone, MessageCircle, Menu, X } from "lucide-react";
import { BUSINESS_CONFIG } from "../config/business";
import { openDirectWhatsAppChat } from "../utils/whatsapp";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "#about" },
    { label: "Our Services", href: "#services" },
    { label: "Pricing", href: "#pricing" },
    { label: "Why Choose Us", href: "#why-choose-us" },
    { label: "Reviews", href: "#reviews" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        {/* Left: Uploaded KB COOL AC SERVICE Logo in Brand Palette */}
        <a href="#home" className="navbar-logo" aria-label="KB COOL AC SERVICE Home">
          <img
            src="/images/kb-cool-logo.png?v=3"
            alt="KB COOL AC SERVICE Logo"
          />
        </a>

        {/* Center: Desktop Navigation Links (Never wraps onto 2 lines) */}
        <ul className="nav-links">
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>

        {/* Right: Desktop Call & WhatsApp Buttons */}
        <div className="nav-actions nav-actions-desktop">
          <a
            href={`tel:${BUSINESS_CONFIG.contactNumberTel}`}
            className="btn btn-outline"
            style={{ padding: "0.6rem 1.05rem", fontSize: "0.88rem" }}
          >
            <Phone size={16} color="#079DB8" />
            <span>{BUSINESS_CONFIG.contactNumberDisplay}</span>
          </a>
          <button
            type="button"
            onClick={() => openDirectWhatsAppChat()}
            className="btn btn-primary"
            style={{ padding: "0.6rem 1.15rem", fontSize: "0.88rem" }}
          >
            <MessageCircle size={16} />
            <span>WhatsApp</span>
          </button>
        </div>

        {/* Tablet & Mobile Actions */}
        <div className="mobile-actions">
          <button
            type="button"
            onClick={() => openDirectWhatsAppChat()}
            className="btn btn-primary"
            style={{ padding: "0.5rem 0.85rem", fontSize: "0.8rem" }}
          >
            <MessageCircle size={15} />
            <span>WhatsApp</span>
          </button>
          <button
            type="button"
            className="mobile-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle Menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Tablet & Mobile Dropdown Drawer */}
      {mobileOpen && (
        <div
          style={{
            background: "#FFFFFF",
            borderTop: "1px solid #DCECEF",
            padding: "1rem 1.25rem",
            boxShadow: "0 12px 24px rgba(22, 61, 75, 0.08)"
          }}
        >
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.5rem" }}>
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                style={{
                  padding: "0.65rem 0.85rem",
                  borderRadius: 10,
                  background: "#EAFBFD",
                  fontWeight: 600,
                  fontSize: "0.9rem",
                  whiteSpace: "nowrap"
                }}
              >
                {item.label}
              </a>
            ))}
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem", marginTop: "0.9rem" }}>
            <a href={`tel:${BUSINESS_CONFIG.contactNumberTel}`} className="btn btn-outline">
              <Phone size={16} color="#079DB8" />
              <span>{BUSINESS_CONFIG.contactNumberDisplay}</span>
            </a>
            <button type="button" onClick={() => openDirectWhatsAppChat()} className="btn btn-primary">
              <MessageCircle size={16} />
              <span>WhatsApp</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

