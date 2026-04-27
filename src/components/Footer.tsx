"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#111827] text-white py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">      

          {/* Contact */}
          <a
            href="mailto:hola@usaservigo.com"
            className="flex items-center gap-2 text-sm text-gray-400 hover:text-[#FFC300] transition-colors"
          >
            <Mail size={16} />
            hola@usaservigo.com
          </a>

          {/* Legal links */}
          <div className="flex items-center gap-4 text-sm text-gray-400">
            <Link
              href="/politica-de-privacidad"
              className="hover:text-[#FFC300] transition-colors"
            >
              Política de privacidad
            </Link>
            <Link
              href="/politica-de-cookies"
              className="hover:text-[#FFC300] transition-colors"
            >
              Política de cookies
            </Link>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} ServiGo. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
