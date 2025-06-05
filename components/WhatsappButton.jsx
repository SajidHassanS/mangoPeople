// components/WhatsAppButton.jsx
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  // Replace with your own number (no “+” or dashes)
  const phoneNumber = "0528684152";
  // Optional prefilled message (URL-encoded)
  const prefillText = encodeURIComponent(
    "Hello, I have a question about Mango People"
  );
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${prefillText}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="
        fixed
        bottom-4
        right-4
        z-50
        flex
        items-center
        justify-center
        w-14
        h-14
        bg-green-500
        hover:bg-green-600
        text-white
        rounded-full
        shadow-lg
        transition-colors
      "
    >
      <FaWhatsapp className="w-8 h-8" />
    </a>
  );
}
