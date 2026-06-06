import { MessageCircle } from "lucide-react";

export default function WhatsappButton() {
  return (
    <a
      href="https://wa.me/+966543571468"
      target="_blank"
      rel="noopener noreferrer"
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
      "
    >
      <MessageCircle size={22} />
      <span className="font-medium">
        WhatsApp
      </span>
    </a>
  );
}