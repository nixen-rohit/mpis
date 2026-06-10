// components/WhatsAppFloatingButton.tsx

"use client";

import Link from "next/link";



export default function WhatsAppFloatingButton() {
  const phoneNumber =
    process.env.NEXT_PUBLIC_WHATSAPP_PHONE_NUMBER?.trim() || "";
  const message =
    process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE?.trim() ||
    "Hello! I want to know more.";

  const normalizedPhone = phoneNumber.replace(/\D/g, "");

  if (!normalizedPhone) {
    return null;
  }

  const whatsappUrl = `https://wa.me/${normalizedPhone.startsWith("91") ? normalizedPhone : `91${normalizedPhone}`}?text=${encodeURIComponent(message)}`;

  return (
    <Link
      href={whatsappUrl}
      target="_blank"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50"
    >
      <div className="group flex items-center gap-3">
        {/* Tooltip */}
        <div className="hidden rounded-full bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-lg group-hover:block">
          Chat with us
        </div>

        {/* WhatsApp Button */}
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] shadow-xl transition-all duration-300 hover:scale-110 hover:bg-[#20ba5a]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            className="h-8 w-8 fill-white"
          >
            <path d="M16.001 3C8.821 3 3 8.821 3 16c0 2.54.743 5.018 2.148 7.137L3 29l5.995-2.095A12.944 12.944 0 0 0 16.001 29C23.18 29 29 23.18 29 16S23.18 3 16.001 3zm0 23.5a10.43 10.43 0 0 1-5.318-1.45l-.38-.225-3.56 1.243 1.16-3.67-.247-.377A10.435 10.435 0 0 1 5.5 16c0-5.79 4.71-10.5 10.501-10.5C21.79 5.5 26.5 10.21 26.5 16s-4.71 10.5-10.499 10.5zm5.77-7.83c-.316-.158-1.87-.923-2.16-1.028-.29-.105-.5-.158-.71.158-.21.316-.815 1.028-.998 1.238-.184.21-.368.237-.684.079-.316-.158-1.334-.492-2.54-1.57-.938-.836-1.57-1.868-1.754-2.184-.184-.316-.02-.487.138-.645.142-.141.316-.368.474-.553.158-.184.21-.316.316-.526.105-.21.053-.395-.026-.553-.079-.158-.71-1.712-.973-2.344-.257-.617-.518-.533-.71-.543l-.605-.01c-.21 0-.553.079-.842.395-.29.316-1.105 1.08-1.105 2.633 0 1.553 1.132 3.053 1.29 3.263.158.21 2.226 3.4 5.394 4.766.754.326 1.342.52 1.8.665.756.24 1.444.206 1.988.125.606-.09 1.87-.764 2.134-1.5.263-.737.263-1.37.184-1.5-.079-.132-.29-.21-.605-.368z" />
          </svg>
        </div>
      </div>
    </Link>
  );
}
