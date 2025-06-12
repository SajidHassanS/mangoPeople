// components/WhatsAppButton.jsx
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const phoneNumber = "9710528684152";
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
        bottom-20      /* 5 rem (≈ 80 px) from the bottom edge */
        right-4
        z-40           /* lower than z-50 so scroll arrow stays on top */
        w-14
        h-14
        bg-green-500
        hover:bg-green-600
        text-white
        rounded-full
        shadow-lg
        flex
        items-center
        justify-center
        transition-colors
      "
    >
      <FaWhatsapp className="w-8 h-8" />
    </a>
  );
}
