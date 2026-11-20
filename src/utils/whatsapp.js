import { BUSINESS_CONFIG } from "../config/business";

export const WHATSAPP_NUMBER = BUSINESS_CONFIG.whatsappNumber;

export function openDirectWhatsAppChat(customMessage) {
  const textToUse = customMessage || BUSINESS_CONFIG.defaultWhatsAppGreeting;
  const encodedMessage = encodeURIComponent(textToUse);
  const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
  window.open(whatsappURL, "_blank", "noopener,noreferrer");
  return whatsappURL;
}

export function formatServiceDate(isoDate) {
  if (!isoDate) return "Flexible / Earliest Available";
  const parts = isoDate.split("-");
  if (parts.length !== 3) return isoDate;
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const year = parts[0];
  const monthIdx = parseInt(parts[1], 10) - 1;
  const day = parseInt(parts[2], 10);
  if (monthIdx >= 0 && monthIdx < 12 && !Number.isNaN(day)) {
    return `${day} ${months[monthIdx]} ${year}`;
  }
  return isoDate;
}

export function createBookingWhatsAppMessage(formData) {
  const customerName = (formData.customerName || "").trim() || "-";
  const mobileNumber = (formData.mobileNumber || "").trim() || "-";
  const serviceLocation = (formData.serviceLocation || "").trim() || "Chennai";
  const selectedService = (formData.selectedService || "").trim() || "-";
  const acBrand = (formData.acBrand || "").trim() || "Not specified";
  const acType = (formData.acType || "").trim() || "Split AC";
  const preferredDate = formatServiceDate(formData.preferredDate);
  const problemDescription = (formData.problemDescription || "").trim() || "Not specified";

  return [
    "NEW AC SERVICE BOOKING",
    `Business: ${BUSINESS_CONFIG.businessName}`,
    `Customer Name: ${customerName}`,
    `Phone Number: ${mobileNumber}`,
    `Location: ${serviceLocation}`,
    `Service Required: ${selectedService}`,
    `AC Brand: ${acBrand}`,
    `AC Type: ${acType}`,
    `Preferred Date: ${preferredDate}`,
    `Problem Description: ${problemDescription}`
  ].join("\n");
}

export function openBookingWhatsApp(formData) {
  const message = createBookingWhatsAppMessage(formData);
  const encoded = encodeURIComponent(message);
  const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
  window.open(whatsappURL, "_blank", "noopener,noreferrer");
  return { whatsappURL, message };
}

export function isValidIndianMobile(phone) {
  const cleaned = String(phone || "").replace(/\D/g, "");
  return /^[6-9]\d{9}$/.test(cleaned);
}
