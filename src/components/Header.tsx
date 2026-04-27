"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const GOOGLE_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSf4tUizgvvDoBv1WINQaKwohcap2QZ7_dT9kXLup_wC4VqAqQ/viewform?usp=publish-editor";

const navLinks = [
  { label: "Beneficios", href: "#beneficios" },
  { label: "Cómo funciona", href: "#como-funciona" },
  { label: "La app", href: "#la-app" },
  { label: "FAQ", href: "#faq" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#E5E7EB] shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">          
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center gap-2">            
            <Image
              src="/images/principal-simplificado.png"
              alt="ServiGo"
              width={140}
              height={40}
              priority
              className="h-10 w-auto"
            />
            <Image
            src="/images/peru.png"
            alt="Peru"
            width={40}
            height={40}
            priority
          />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[#111827] text-sm font-medium hover:text-[#FFC300] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#FFC300] text-[#111827] text-sm font-semibold px-5 py-2 rounded-lg hover:bg-yellow-400 transition-colors"
            >
              Apúntate gratis
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-[#111827]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Abrir menú"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-[#E5E7EB] px-4 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[#111827] text-base font-medium hover:text-[#FFC300] transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href={GOOGLE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#FFC300] text-[#111827] text-sm font-semibold px-5 py-3 rounded-lg text-center hover:bg-yellow-400 transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Apúntate gratis
          </a>
        </div>
      )}
    </header>
  );
}
