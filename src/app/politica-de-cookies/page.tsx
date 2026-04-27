import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Cookies – ServiGo",
  description: "Información sobre el uso de cookies en ServiGo.",
};

export default function CookiesPolicyPage() {
  return (
    <main className="bg-[#F9FAFB] min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/"
          className="inline-block text-[#1E3A8A] text-sm font-medium hover:underline mb-8"
        >
          ← Volver al inicio
        </Link>
        <article className="bg-white rounded-[12px] shadow-sm border border-[#E5E7EB] p-8 prose prose-slate max-w-none">
          <h1>Política de Cookies</h1>

          <h2>1. Uso de cookies</h2>
          <p>
            ServiGo utiliza cookies de terceros para mejorar la experiencia del usuario y analizar
            el tráfico en la web. Puedes aceptar todas las cookies o rechazar las no esenciales.
          </p>

          <h2>2. Gestión de cookies</h2>
          <p>
            Al acceder a la web, puedes aceptar o rechazar el uso de cookies a través del banner
            que aparece en la parte inferior de la pantalla.
          </p>

          <h2>3. Modificaciones</h2>
          <p>
            ServiGo se reserva el derecho de modificar esta política para adaptarla a futuras
            novedades o cambios legales.
          </p>
        </article>
      </div>
    </main>
  );
}
