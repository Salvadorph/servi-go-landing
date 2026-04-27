"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const CONSENT_KEY = "servigo_cookie_consent";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(CONSENT_KEY);
    if (!stored) {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(CONSENT_KEY, "accepted");
    setVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem(CONSENT_KEY, "rejected");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#111827] border-t border-gray-700 px-4 py-4 shadow-2xl">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center gap-4 justify-between">
        <p className="text-sm text-gray-300 text-center sm:text-left max-w-xl">
          ServiGo utiliza cookies de terceros para mejorar la experiencia del usuario y analizar el
          tráfico en la web.{" "}
          <Link
            href="/politica-de-cookies"
            className="underline hover:text-[#FFC300] transition-colors"
          >
            Más información
          </Link>
        </p>
        <div className="flex gap-3 flex-shrink-0">
          <button
            onClick={handleReject}
            className="text-sm px-4 py-2 rounded-lg border border-gray-500 text-gray-300 hover:border-gray-300 hover:text-white transition-colors"
          >
            Rechazar
          </button>
          <button
            onClick={handleAccept}
            className="text-sm px-4 py-2 rounded-lg bg-[#FFC300] text-[#111827] font-semibold hover:bg-yellow-400 transition-colors"
          >
            Aceptar
          </button>
        </div>
      </div>
    </div>
  );
}
