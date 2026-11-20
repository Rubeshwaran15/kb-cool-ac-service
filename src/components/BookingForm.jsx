import React, { useState, useEffect } from "react";
import { Send, AlertCircle, Phone, MessageCircle } from "lucide-react";
import { BUSINESS_CONFIG, SERVICES_LIST } from "../config/business";
import {
  openBookingWhatsApp,
  openDirectWhatsAppChat,
  isValidIndianMobile
} from "../utils/whatsapp";

export default function BookingForm({ preselectedService }) {
  const [formData, setFormData] = useState({
    customerName: "",
    mobileNumber: "",
    serviceLocation: "",
    selectedService: preselectedService || "",
    acBrand: "",
    acType: "Split AC",
    preferredDate: "",
    problemDescription: ""
  });

  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, selectedService: preselectedService }));
    }
  }, [preselectedService]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "mobileNumber") {
      const cleaned = value.replace(/\D/g, "").slice(0, 10);
      setFormData((prev) => ({ ...prev, mobileNumber: cleaned }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMsg("");

    if (!formData.customerName.trim()) {
      setErrorMsg("Please enter your Customer Name.");
      return;
    }
    if (!isValidIndianMobile(formData.mobileNumber)) {
      setErrorMsg("Please enter a valid 10-digit Indian mobile number (starting with 6-9).");
      return;
    }
    if (!formData.serviceLocation.trim()) {
      setErrorMsg("Please enter your Service Location in Chennai.");
      return;
    }
    if (!formData.selectedService) {
      setErrorMsg("Please select an AC Service.");
      return;
    }

    openBookingWhatsApp(formData);
  };

  return (
    <section id="booking" className="section-padding">
      <div className="container">
        <div style={{ textAlign: "center", maxWidth: 720, margin: "0 auto 2.5rem" }}>
          <span className="badge-aqua">WhatsApp Service Booking</span>
          <h2 style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 800, marginTop: "0.75rem" }}>
            Book Your AC Service in Chennai
          </h2>
          <p style={{ color: "#647B85", marginTop: "0.5rem" }}>
            Fill in your details below and click <strong>Send Booking via WhatsApp</strong> to send your service request directly to <strong>{BUSINESS_CONFIG.whatsappDisplay}</strong>.
          </p>
        </div>

        <div className="grid-2" style={{ alignItems: "start" }}>
          <form onSubmit={handleSubmit} className="card" style={{ padding: "2rem" }} noValidate>
            {errorMsg && (
              <div
                style={{
                  background: "#FEF2F2",
                  border: "1px solid #FECACA",
                  color: "#991B1B",
                  padding: "0.9rem 1rem",
                  borderRadius: 12,
                  marginBottom: "1.25rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.6rem",
                  fontSize: "0.9rem",
                  fontWeight: 600
                }}
              >
                <AlertCircle size={18} />
                <span>{errorMsg}</span>
              </div>
            )}

            <div className="form-group">
              <label className="form-label" htmlFor="customerName">
                Customer Name *
              </label>
              <input
                id="customerName"
                name="customerName"
                type="text"
                className="form-control"
                placeholder="Enter your full name"
                value={formData.customerName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="mobileNumber">
                Mobile Number (10-digit Indian) *
              </label>
              <input
                id="mobileNumber"
                name="mobileNumber"
                type="tel"
                maxLength={10}
                className="form-control"
                placeholder="9876543210"
                value={formData.mobileNumber}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="serviceLocation">
                Service Location (Chennai) *
              </label>
              <input
                id="serviceLocation"
                name="serviceLocation"
                type="text"
                className="form-control"
                placeholder="e.g. Anna Nagar, Velachery, T. Nagar, Chennai"
                value={formData.serviceLocation}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="selectedService">
                Select AC Service *
              </label>
              <select
                id="selectedService"
                name="selectedService"
                className="form-control"
                value={formData.selectedService}
                onChange={handleChange}
                required
              >
                <option value="">-- Select AC Service --</option>
                {SERVICES_LIST.map((s) => (
                  <option key={s.id} value={s.title}>
                    {s.title}
                  </option>
                ))}
              </select>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
              <div className="form-group">
                <label className="form-label" htmlFor="acBrand">
                  AC Brand (Optional)
                </label>
                <input
                  id="acBrand"
                  name="acBrand"
                  type="text"
                  className="form-control"
                  placeholder="e.g. LG, Daikin, Voltas"
                  value={formData.acBrand}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="acType">
                  AC Type (Optional)
                </label>
                <select
                  id="acType"
                  name="acType"
                  className="form-control"
                  value={formData.acType}
                  onChange={handleChange}
                >
                  {BUSINESS_CONFIG.acTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="preferredDate">
                Preferred Service Date (Optional)
              </label>
              <input
                id="preferredDate"
                name="preferredDate"
                type="date"
                className="form-control"
                value={formData.preferredDate}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="problemDescription">
                Problem Description (Optional)
              </label>
              <textarea
                id="problemDescription"
                name="problemDescription"
                rows={3}
                className="form-control"
                placeholder="Describe any issue (e.g. AC is not cooling properly)..."
                value={formData.problemDescription}
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="btn btn-primary" style={{ width: "100%", padding: "1rem" }}>
              <Send size={18} />
              <span>Send Booking via WhatsApp</span>
            </button>
          </form>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <div
              className="card"
              style={{
                background: "#163D4B",
                color: "#FFFFFF",
                padding: "2rem"
              }}
            >
              <span style={{ color: "#37C5D5", fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase" }}>
                Simple &amp; Fast Process
              </span>
              <h3 style={{ color: "#FFFFFF", fontSize: "1.35rem", fontWeight: 800, marginTop: "0.35rem" }}>
                How WhatsApp Booking Works
              </h3>
              <div style={{ marginTop: "1.25rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
                <div>
                  <strong style={{ color: "#37C5D5" }}>01. Enter Your AC Details</strong>
                  <p style={{ fontSize: "0.88rem", color: "#EAFBFD", opacity: 0.85 }}>
                    Select your required AC service, enter your name, 10-digit mobile number, and Chennai locality.
                  </p>
                </div>
                <div>
                  <strong style={{ color: "#37C5D5" }}>02. Click "Send Booking via WhatsApp"</strong>
                  <p style={{ fontSize: "0.88rem", color: "#EAFBFD", opacity: 0.85 }}>
                    Your booking details automatically open in WhatsApp addressed to {BUSINESS_CONFIG.whatsappDisplay}.
                  </p>
                </div>
                <div>
                  <strong style={{ color: "#37C5D5" }}>03. Press Send in WhatsApp</strong>
                  <p style={{ fontSize: "0.88rem", color: "#EAFBFD", opacity: 0.85 }}>
                    Tap Send inside WhatsApp and our technician team will contact you promptly to confirm your appointment.
                  </p>
                </div>
              </div>
            </div>

            <div className="card" style={{ padding: "1.75rem", background: "#EAFBFD" }}>
              <h4 style={{ fontSize: "1.05rem", fontWeight: 800 }}>
                Prefer Direct Phone or Instant Chat?
              </h4>
              <p style={{ fontSize: "0.88rem", color: "#647B85", marginTop: "0.35rem" }}>
                Call our team directly or start a quick WhatsApp conversation anytime.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem", marginTop: "1rem" }}>
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
          </div>
        </div>
      </div>
    </section>
  );
}
