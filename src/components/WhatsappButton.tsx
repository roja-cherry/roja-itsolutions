import { MessageCircle } from "lucide-react";
import { CONTACT } from "../config/contact";

export default function WhatsappButton() {
  const message = encodeURIComponent(
    "Hi RoJa IT Solutions, I would like to know more about your services."
  );

  return (
    <a
      href={`https://wa.me/${CONTACT.whatsapp.replace("+", "")}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with RoJa IT Solutions on WhatsApp"
      className="
        fixed
        bottom-6
        right-6
        z-50
        flex
        items-center
        gap-3
        rounded-full
        bg-green-500
        px-5
        py-4
        text-white
        shadow-xl
        transition
        hover:scale-105
        hover:bg-green-600
      "
    >
      <MessageCircle size={22} />

      <span className="font-medium">
        WhatsApp
      </span>
    </a>
  );
}